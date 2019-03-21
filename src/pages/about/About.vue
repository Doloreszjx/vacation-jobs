<template>
  <div>
    <about-com></about-com>
    <about-header></about-header>
    <about-title></about-title>
    <about-content></about-content>
  </div>
</template>

<script>
import AboutCom from './components/Com'
import AboutHeader from './components/Header'
import AboutTitle from './components/Title'
import AboutContent from './components/Content'
export default {
  name: 'About',
  components: {
    AboutCom,
    AboutHeader,
    AboutTitle,
    AboutContent
  }
}
</script>

<style lang="stylus" scoped>

</style>
