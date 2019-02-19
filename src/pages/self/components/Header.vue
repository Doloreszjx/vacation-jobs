<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont pic-icon">
        <span>&#xe681;</span><span>&#xe689;</span><span>&#xe601;</span><span>&#xe601;</span><span>&#xe601;</span>
      </div>
    </div>
    <div class="header-input">
      <ul>
        <router-link to="/"><li><a>首页</a></li></router-link>
        <router-link to="/map"><li><a>地图</a></li></router-link>
        <router-link to="/card"><li><a>猪猪卡</a></li></router-link>
        <router-link to="/about"><li><a>关于我们</a></li></router-link>
      </ul>
    </div>
    <div class="header-right">
      <div class="iconfont individual-icon">&#xe625;</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .header
    display: flex
    margin-top : 0
    line-height: 1.2rem
    background: $bgColor
    color: #fff
  .header-left
    width: 1.51rem
    float: left
    margin-top : .2rem
    .pic-icon span
      padding-left : .6rem
      font-size : .4rem
  .header-input
    flex:1
    width : 1.06rem
    margin-left : 4.38rem
    background :#fff
    color:#ccc
  .header-right
    width: 2.94rem
    margin-top : .2rem
    float: right
    text-align :center
    .individual-icon
      text-align : center
      font-size : .6rem
      color :#fff
  ul
    list-style-type :none
    overflow :hidden
    border:.01rem solid #e7e7e7
    background-color : #f3f3f3
  li
    float:left
  li a
    display :block
    color :#666
    text-align :center
    padding : .20rem 1.1rem
    text-decoration : none
</style>
