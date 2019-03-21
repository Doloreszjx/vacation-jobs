<template>
  <div class="amap-page-container">
    <el-amap vid="amapDemo"  :center="center" :amap-manager="amapManager" :zoom="zoom" :events="events" class="amap-demo">
    </el-amap>

    <div class="toolbar" @click="switchWindow">
      <el-amap-info-window
        :content="currentWindow.centent"
        :visible="currentWindow.visible">
      </el-amap-info-window>
    </div>
  </div>
</template>
<script>
import VueAMap from 'vue-amap'

let amapManager = new VueAMap.AMapManager()
let AMap
export default {
  name: 'map',

  data: function () {
    return {
      zoom: 12,
      center: [121.59996, 31.197646],
      amapManager,
      events: {
        init (o) { // 高德地图插件实例
          let marker = new AMap.Marker({
            position: [121.59996, 31.197646]
          })

          marker.setMap(o)
        }
      },
      windows: [
        {
          position: this.position,
          content: `<div>体温：38度</div>`,
          visible: true
        }
      ],
      slotWindow: {
        position: this.position
      },
      currentWindow: {
        position: [0, 0],
        centent: '',
        visible: false
      }
    }
  },
  mounted () {
    this.currentWindow = this.windows
  },
  methods: {
    add () {
      let o = amapManager.getMap()
      let marker = new AMap.Marker({
        position: [121.59996, 31.177646]
      })

      marker.setMap(o)
    },
    switchWindow () {
      this.currentWindow.visible = false
      this.$nextTick(() => {
        this.currentWindow = this.windows
        this.currentWindow.visible = true
      })
    }
  }
}
</script>
<style scoped>
  .amap-demo{
    width: 200px;
    height: 200px;
    margin-top: 48px;
  }
</style>
