<template>
  <div class="amap-page-container">
    <el-amap vid="amap" :zoom="zoom" :center="center" class="amap-demo">
      <el-amap-info-window
        :position="currentWindow.position"
        :content="currentWindow.content"
        :visible="currentWindow.visible"
        :events="currentWindow.events">
      </el-amap-info-window>
    </el-amap>
    <el-button round  @click="switchWindow(0)">1号</el-button>
    <el-button round @click="switchWindow(1)">2号</el-button>
    <!--<button @click="switchWindow(0)">Show First Window</button>-->
    <!--<button @click="switchWindow(1)">Show Second Window</button>-->
  </div>
</template>

<style>
  .amap-demo {
    height: 300px;
  }
</style>

<script>
module.exports = {
  data () {
    return {
      zoom: 14,
      center: [121.5273285, 31.21515044],
      windows: [
        {
          position: [121.5273285, 31.21515044],
          content: `id:0001
                    体温：37°
                    健康`,
          visible: true,
          events: {
            close () {
              console.log('close infowindow1')
            }
          }
        }, {
          position: [121.5375285, 31.21515044],
          content: `id:0002
                    体温：39°
                    健康`,
          visible: true,
          events: {
            close () {
              console.log('close infowindow2')
            }
          }
        }
      ],
      slotWindow: {
        position: [121.5163285, 31.21515044]
      },
      currentWindow: {
        position: [0, 0],
        content: '',
        events: {},
        visible: false
      }
    }
  },

  mounted () {
    this.currentWindow = this.windows[0]
  },

  methods: {
    switchWindow (tab) {
      this.currentWindow.visible = false
      this.$nextTick(() => {
        this.currentWindow = this.windows[tab]
        this.currentWindow.visible = true
      })
    }}
}
</script>
