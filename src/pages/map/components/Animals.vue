<template>
  <div class="prompt">
    <ul v-for="marker in windows" :key="marker.id">
      <li>编号：{{marker.id}}</li>
      <li>体温：{{marker.temperature}}</li>
      <li>血压:{{marker.pressure}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Animals',
  data () {
    return {
      windows: [{
        id: '0001',
        temperature: '37度',
        pressure: '***'
      }, {
        id: '0002',
        temperature: '37度',
        pressure: '***'
      }, {
        id: '0003',
        temperature: '37度',
        pressure: '***'
      }]
    }
  }
}
</script>

<style scoped>

</style>
