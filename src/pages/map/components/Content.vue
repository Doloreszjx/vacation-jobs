<template>
  <div id="map-container"></div>
</template>

<script type="text/ecmascript-6">
import AMap from 'AMap'
import AMapUI from 'AMapUI'

export default {
  name: 'CardContent',
  mounted () {
    this.initMap()
  },
  methods: {
    initMap: function () {
      // 创建地图
      let googleLayerimage = new AMap.TileLayer({
        getTileUrl: 'https://mt{1,2,3,0}.google.cn/maps/vt?lyrs=s@194&hl=zh-CN&gl=cn&x=[x]&y=[y]&z=[z]',
        zIndex: 2
      })

      let googleLayervector = new AMap.TileLayer()

      // let roadNet = new AMap.TileLayer.RoadNet()
      let map = new AMap.Map('map-container', {
        layers: [googleLayervector, googleLayerimage],
        center: [108.963148, 34.232709],
        zoom: 11
      })

      AMapUI.load(['ui/misc/PathSimplifier', 'lib/$'], function (PathSimplifier, $) {
        if (!PathSimplifier.supportCanvas) {
          alert('当前环境不支持 Canvas！')
          return
        }

        let pathSimplifierIns = new PathSimplifier({
          zIndex: 100,
          // autoSetFitView:false,
          map: map, // 所属的地图实例

          getPath: function (pathData, pathIndex) {
            return pathData.path
          },
          getHoverTitle: function (pathData, pathIndex, pointIndex) {
            if (pointIndex >= 0) {
              return pathData.name + '，点：' + pointIndex + '/' + pathData.path.length
            }

            return pathData.name + '，点数量' + pathData.path.length
          },
          renderOptions: {

            renderAllPointsIfNumberBelow: 100 // 绘制路线节点，如不需要可设置为-1
          }
        })

        window.pathSimplifierIns = pathSimplifierIns

        // 设置数据
        pathSimplifierIns.setData([{
          name: '路线0',
          path: [
            [116.405289, 39.904987],
            [113.964458, 40.54664],
            [111.47836, 41.135964],
            [108.949297, 41.670904],
            [106.380111, 42.149509],
            [103.774185, 42.56996],
            [101.135432, 42.930601],
            [98.46826, 43.229964],
            [95.777529, 43.466798],
            [93.068486, 43.64009],
            [90.34669, 43.749086],
            [87.61792, 43.793308]
          ]
        }])

        // 对第一条线路（即索引 0）创建一个巡航器
        let navg1 = pathSimplifierIns.createPathNavigator(0, {
          loop: true, // 循环播放
          speed: 1000000 // 巡航速度，单位千米/小时
        })

        navg1.start()
      })

      // mapObj.on('click', (ev) => {
      //   console.log(ev.lnglat)
      // });

      // let marker = new AMap.Marker({
      //   position: new AMap.LngLat(108.963148, 34.232709),
      //   map: mapObj
      // })

      // AMap.event.addListener(marker, 'click', (e) => {
      //   AMapUI.loadUI(['overlay/SimpleInfoWindow'], function (SimpleInfoWindow) {
      //     let infoWindow = new SimpleInfoWindow({
      //       infoTitle: '<strong>1号</strong>',
      //       infoBody: '<p>体温：正常</p>' + '<br/><p>血压：正常</p>' + '<br/>健康',
      //       offset: new AMap.Pixel(0, -30),
      //       autoMove: true
      //     })
      //     infoWindow.open(mapObj, e.target.getPosition())
      //   })
      // })

      // AMapUI.loadUI(['overlay/SimpleInfoWindow'], function (SimpleInfoWindow) {
      //   var infoWindow = new SimpleInfoWindow({
      //     infoTitle: '<strong>1号</strong>',
      //     infoBody: '<p>体温：正常</p>' + '<br/><p>血压：正常</p>' + '<br/>健康',
      //     offset: new AMap.Pixel(0, -30),
      //     autoMove: true
      //   })
      //   infoWindow.open(mapObj, new AMap.LngLat(108.963148, 34.232709))
      // })
    }
  }
}
</script>
