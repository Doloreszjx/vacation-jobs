<template>
  <div>
   <map-header></map-header>
   <map-content></map-content>
   <map-animals></map-animals>
  </div>
</template>

<script>
import MapHeader from './components/Header'
import MapContent from './components/Content'
import MapAnimals from './components/Animals'
export default {
  name: 'Map',
  components: {
    MapHeader,
    MapContent,
    MapAnimals
  }
}
</script>

<style lang="stylus" scoped>

</style>
