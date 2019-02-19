<template>
    <div class="box">
      <p class="title">重新定义畜牧养殖</p>
      <p class="content">补充：我们的养殖理念</p>
    </div>
</template>

<script>
export default {
  name: 'Title'
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .box
    display : flex
    margin-top : .5rem
    height: 6rem
    background : $bgColor
    color: #fff
    .title
      margin :0
      margin-left :30%
      margin-top :.8rem
      font-size :1.2rem
      font-family : "Microsoft Sans Serif"
    .content
     margin-top :3.5rem
     margin-left :-15rem
     color :red
</style>
