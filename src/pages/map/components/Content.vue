<template>
  <div>
    <div id='mymap'></div>
    <button @click='play(1)'>播放</button>
    <button @click='play(2)'>暂停</button>
    <button @click='play(3)'>停止</button>
  </div>

</template>
<script>
import BMap from 'BMap'
import BMapLib from 'BMapLib'
export default {
  name: 'MapContent',
  data () {
    return {
      gosArr: [], // 后台拿到的gps点数组
      speed: 4000, // 速度
      lushu: {}, // 路书
      mycaiId: '京123465',
      myMap: {} // 地图
    }
  },
  methods: {
    initMap () {
      var map = new BMap.Map('mymap')
      map.enableScrollWheelZoom(new BMap.Point(116.404, 39.915), 13)
      map.centerAndZoom()
      var arrPois = []
      for (let i = 0; i < this.gpsArr.length; i++) {
        var p0 = this.gpsArr[i].longtitude
        var p1 = this.gpsArr[i].latitude
        // var checksum = makerArry[i].checksum;
        var point = new BMap.Point(p0, p1) // 118.230272,33.482474
        arrPois.push(point)
      }
      // 画轨迹
      var polyLine = new BMap.Polyline(arrPois, {
        strokeColor: 'blue', // 设置颜色
        strokeWeight: 5, // 宽度
        strokeOpacity: 0.5 // 透明度
      })
      map.addOverlay(polyLine)
      // 画轨迹结束
      BMapLib.LuShu.prototype._move = function (initPos, targetPos, effect) {
        var pointsArr = [initPos, targetPos] // 点数组
        var me = this
        // 当前的帧数
        var currentCount = 0
        // 步长，米/秒
        var timer = 10
        var step = this._opts.speed / (1000 / timer)
        // 初始坐标
        initPos = this._projection.lngLatToPoint(initPos)
        // 获取结束点的(x,y)坐标
        targetPos = this._projection.lngLatToPoint(targetPos)
        // 总的步长
        const count = Math.round(me._getDistance(initPos, targetPos) / step)
        this._map.addOverlay(
          new BMap.Polyline(pointsArr, {
            strokeColor: '#111',
            strokeWeight: 5,
            strokeOpacity: 0.5
          })
        ) // 画线
        // 如果小于1直接移动到下一点
        if (count < 1) {
          me._moveNext(++me.i)
          return
        }
        me._intervalFlag = setInterval(function () {
          // 两点之间当前帧数大于总帧数的时候，则说明已经完成移动
          if (currentCount >= count) {
            clearInterval(me._intervalFlag)
            // 移动的点已经超过总的长度
            if (me.i > me._path.length) {
              return
            }
            // 运行下一个点
            me._moveNext(++me.i)
          } else {
            currentCount++
            var x = effect(initPos.x, targetPos.x, currentCount, count)
            var y = effect(initPos.y, targetPos.y, currentCount, count)
            var pos = me._projection.pointToLngLat(new BMap.Pixel(x, y))
            // 设置marker
            if (currentCount === 1) {
              var proPos = null
              if (me.i - 1 >= 0) {
                proPos = me._path[me.i - 1]
              }
              if (me._opts.enableRotation === true) {
                me.setRotation(proPos, initPos, targetPos)
              }
              if (me._opts.autoView) {
                if (!me._map.getBounds().containsPoint(pos)) {
                  me._map.setCenter(pos)
                }
              }
            }
            // 正在移动
            me._marker.setPosition(pos)
            // 设置自定义overlay的位置
            me._setInfoWin(pos)
          }
        }, timer)
      }
      this.initLushu(map, arrPois, this.mycaiId)
    },
    initLushu (map, arrPois, mycaiId) {
      this.lushu = new BMapLib.LuShu(map, arrPois, {
        defaultContent: mycaiId, // "从天安门到百度大厦"
        autoView: true, // 是否开启自动视野调整，如果开启那么路书在运动过程中会根据视野自动调整
        icon: new BMap.Icon(
          'http://developer.baidu.com/map/jsdemo/img/car.png',
          new BMap.Size(52, 26),
          {
            anchor: new BMap.Size(27, 13)
          }
        ),
        speed: this.speed,
        enableRotation: true, // 是否设置marker随着道路的走向进行旋转
        landmarkPois: [
          {
            lng: 116.306954,
            lat: 40.05718,
            html: '加油站',
            pauseTime: 2
          }
        ]
      })
    },
    play (val) {
      if (this.arrIndex >= this.gpsArr.length - 3) {
        this.arrIndex = 0
      }
      switch (val) {
        case 1:
          this.lushu.start()
          break
        case 2:
          this.lushu.pause()
          break
        case 3:
          this.lushu.stop()
          this.arrIndex = 0
          this.percentage = 0
          break
      }
    }
  }
  // mounted () {
  //   this.initLushu()
  //   this.initMap()
  // }
}

</script>
<style scoped>
</style>
