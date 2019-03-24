<template>
  <div class="map-root">
    <div id="map-container" class="map-container"></div>
  </div>
</template>

<script type="text/ecmascript-6">
import AMap from 'AMap'
import AMapUI from 'AMapUI'

export default {
  name: 'CardMap',
  mounted () {
    this.initMap()
  },
  methods: {
    initMap () {
      // 创建地图
      let googleLayerimage = new AMap.TileLayer({
        getTileUrl: 'https://mt{1,2,3,0}.google.cn/maps/vt?lyrs=s@194&hl=zh-CN&gl=cn&x=[x]&y=[y]&z=[z]',
        zIndex: 2
      })

      let googleLayervector = new AMap.TileLayer()

      // let roadNet = new AMap.TileLayer.RoadNet()
      let mapObj = new AMap.Map('map-container', {
        layers: [googleLayervector, googleLayerimage],
        center: [108.963148, 34.232709],
        zoom: 11
      })

      // mapObj.on('click', (ev) => {
      //   console.log(ev.lnglat)
      // });

      let marker = new AMap.Marker({
        position: new AMap.LngLat(108.963148, 34.232709),
        map: mapObj
      })

      AMap.event.addListener(marker, 'click', (e) => {
        AMapUI.loadUI(['overlay/SimpleInfoWindow'], function (SimpleInfoWindow) {
          var infoWindow = new SimpleInfoWindow({
            infoTitle: '<strong>1号</strong>',
            infoBody: '<p>体温：正常</p>' + '<br/><p>血压：正常</p>' + '<br/>健康',
            offset: new AMap.Pixel(0, -30),
            autoMove: true
          })
          infoWindow.open(mapObj, e.target.getPosition())
        })
      })

      AMapUI.loadUI(['overlay/SimpleInfoWindow'], function (SimpleInfoWindow) {
        var infoWindow = new SimpleInfoWindow({
          infoTitle: '<strong>1号</strong>',
          infoBody: '<p>体温：正常</p>' + '<br/><p>血压：正常</p>' + '<br/>健康',
          offset: new AMap.Pixel(0, -30),
          autoMove: true
        })
        infoWindow.open(mapObj, new AMap.LngLat(108.963148, 34.232709))
      })
    }
  }
}
</script>
<style>
  .amap-logo {
    display: none !important;
  }
</style>
<style scoped lang="stylus">
  .map-root
    float : left
    width: 200px
    height: 200px
    margin-top : 50px
    .map-container
      width: 200px
      height 200px
</style>
