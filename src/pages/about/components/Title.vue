<template>
    <div class="box">
      <p class="title">重新定义畜牧养殖</p>
      <pre class="content">         在中国大力支持畜牧业发展的大环境下，公司以“养殖过程透明化，提供优质肉类食品”为理念，
                           积极推广牲畜科学养殖的应用，提供更加健康优质的肉质产品，将公司理念诉诸产品研发，
                           在科技创新中探索合作，在提升顾客价值中谋求发展。</pre>
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
      margin-left : 1rem
      float : left
      margin-top :.8rem
      font-size :1.0rem
      font-family : "Microsoft Sans Serif"
    .content
     margin-top :3.5rem
     text-align : centent
     font-size: 0.3rem
     padding-top : 0.05rem
     color :white
</style>
