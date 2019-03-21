<template>
  <div>
    <map-com></map-com>
   <map-header></map-header>
    <map-searchbar></map-searchbar>
   <map-content></map-content>
  </div>
</template>

<script>
import MapCom from './components/Com'
import MapHeader from './components/Header'
import MapSearchbar from './components/Searchbar'
import MapContent from './components/Content'

export default {
  name: 'Map',
  components: {
    MapCom,
    MapHeader,
    MapSearchbar,
    MapContent
  }
}
</script>

<style lang="stylus" scoped>

</style>
