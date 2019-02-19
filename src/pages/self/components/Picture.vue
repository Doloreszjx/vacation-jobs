<template>
    <div class="box">
      <i class="iconfont pic">&#xe625;</i>
      <span class="text">Dolores</span>
    </div>
</template>

<script>
export default {
  name: 'Picture'
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .box
    display : flex
    margin-top : .5rem
    height: 4rem
    background : $bgColor
    color: #fff
  .pic
    height :1.2rem
    width :2rem
    margin :0
    margin-left :45%
    margin-top :.8rem
    font-size :1.2rem
  .text
    height :1rem
    width :5rem
    font-size :.8rem
    margin-top :2.5rem
    margin-left : -3.5rem
</style>
