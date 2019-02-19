<template>
<div>
<div class="box"
     v-for="item of NumList" :key="item.id">
    <div class="m-box">
      <div class="iconfont icon">&#xe681;</div>
      <div class="num"> 编号：{{item.num}}</div>
    </div>
    <div class="list">
      <p class="text">详情</p>
       <ul>
         <li><i class="iconfont w-icon">&#xe6b4;</i><span>追踪</span></li>
         <li><i class="iconfont w-icon">&#xe61d;</i><span>轨迹图</span></li>
       </ul>
       <ul>
         <li><i class="iconfont w-icon">&#xe698;</i><span>健康</span></li>
         <li><i class="iconfont w-icon">&#xe661;</i><span>报警</span></li>
       </ul>
    </div>
</div>
</div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'Content',
  data () {
    return {
      NumList: [{
        id: '001',
        num: '000001'
      }, {
        id: '002',
        num: '000002'
      }, {
        id: '003',
        num: '000003'
      }, {
        id: '004',
        num: '000004'
      }, {
        id: '005',
        num: '000005'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .box
    overflow : hidden
    height:0
    padding-bottom :12.5%
    margin-top :.5rem
    border : .05rem dashed #ccc
    background :#f7f7f7
    .m-box
      float: left
      height : 2rem
      width : 5rem
      margin-top :.5rem
      .icon
        font-size: 1.3rem
      .num
        font-size : .4rem
        padding-top : .4rem
    .list
      height:4rem
      width: 10rem
      float :right
      margin-right: 4rem
      .text
        float :left
        font-size: .4rem
        padding-top : .45rem
        padding-left : .2rem
        margin-bottom :.1rem
       ul
        list-style-type :none
        overflow :hidden
        border:.02rem solid #e7e7e7
        height :1rem
        width : 10rem
        background-color : #f3f3f3
      li
        float:left
        margin-left :2.5rem
        margin-top : .3rem
        .w-icon
          font-size :.45rem
          padding-right :.2rem
        span
          font-size :.35rem
</style>
