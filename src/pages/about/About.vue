<template>
  <div>
    <about-header></about-header>
    <about-title></about-title>
    <about-content></about-content>
  </div>
</template>

<script>
import AboutHeader from './components/Header'
import AboutTitle from './components/Title'
import AboutContent from './components/Content'
export default {
  name: 'About',
  components: {
    AboutHeader,
    AboutTitle,
    AboutContent
  }
}
</script>

<style lang="stylus" scoped>

</style>
