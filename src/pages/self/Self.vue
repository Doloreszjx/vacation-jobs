<template>
   <div>
     <self-com></self-com>
    <self-header></self-header>
     <self-picture></self-picture>
     <self-push></self-push>
     <self-reserve></self-reserve>
   </div>
</template>

<script>
import SelfCom from './components/Com'
import SelfHeader from './components/Header'
import SelfPicture from './components/Picture'
import SelfPush from './components/Push'
import SelfReserve from './components/Reserve'
export default {
  name: 'Self',
  components: {
    SelfCom,
    SelfHeader,
    SelfPicture,
    SelfPush,
    SelfReserve
  }
}
</script>

<style lang="stylus" scoped>

</style>
