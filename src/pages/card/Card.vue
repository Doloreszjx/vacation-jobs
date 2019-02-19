<template>
<div>
  <card-header></card-header>
  <card-content></card-content>
</div>
</template>

<script>
import CardHeader from './components/Header'
import CardContent from './components/Content'
export default {
  name: 'Card',
  components: {
    CardHeader,
    CardContent
  }
}
</script>

<style lang="stylus" scoped>

</style>
