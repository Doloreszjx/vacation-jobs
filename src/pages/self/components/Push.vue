<template>
    <div class="box">
      <ul>
        <li class="iconfont">&#xe661;报警推送</li>
        <li class="iconfont">&#xe66f;视频监控</li>
      </ul>
    </div>
</template>

<script>
export default {
  name: 'Push'
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
.box
  display :flex
  margin-top : .3rem
  line-height: .8rem
  background: #f1f1f1
  ul
    list-style-type :none
    overflow :hidden
    background-color : #f3f3f3
  li
    float:left
    display :block
    color :#666
    font-size :.35rem
    text-align :center
    padding : .20rem 5.4rem
    text-decoration : none
</style>
