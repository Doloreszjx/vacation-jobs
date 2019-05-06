<template>
  <div class="box">
    <div class="title">『智慧牧场』整体解决方案</div>
    <div class="content" v-for="item of list" :key="item.id ">
      <div class="item">
      <div class="iconfont"><span class="icon">{{item.imgUrl}}</span> <span class="text">{{item.text}}</span> </div>
      <ul>
        <li>{{item.mainF}}</li>
        <li>{{item.mainS}}</li>
        <li>{{item.mainT}}</li>
      </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  props: {
    list: Array
  }
}

</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .box
    overflow : hidden
    height:0
    padding-bottom :36.5%
    margin-top : 11.5rem
    border : .05rem dashed #ccc
    background :#f7f7f7
    .title
      margin-top : .5rem
      font-size : .5rem
    .content
      margin-top : .8rem
      .item
        float :left
        width: 33.3%
        padding-bottom :33.3%
      span
        padding-left : .2rem
        text-align : center
      .icon
        font-size : 1rem
      .text
        font-size : .3rem
       ul
        list-style-type :none
        margin : .5rem 5.5rem
        padding :0
        width :2rem
       li
        display :block
        padding : .20rem 1.1rem
        margin-top : .2rem
        text-align : left
        text-decoration :none
        border : .05rem solid #666
</style>
