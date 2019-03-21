<template>
<div>
  <card-com></card-com>
  <card-header></card-header>
  <el-container>
    <el-aside width="200px"><card-map></card-map></el-aside>
    <el-main><card-content></card-content></el-main>
  </el-container>
</div>
</template>

<script>
import CardCom from './components/Com'
import CardHeader from './components/Header'
import CardContent from './components/content'
import CardMap from './components/map'

export default {
  name: 'Card',
  components: {
    CardCom,
    CardHeader,
    CardMap,
    CardContent

  }
}
</script>

<style lang="stylus" scoped>

</style>
