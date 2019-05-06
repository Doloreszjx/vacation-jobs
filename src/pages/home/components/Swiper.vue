<template>
  <div class="wrapper">
  <swiper :options="swiperOption" v-if="showSwiper">
    <!-- slides -->
    <swiper-slide v-for="item of list" :key="item.id">
      <img class="swiper-img" :src="item.imgUrl" />
    </swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
    <!--<div class="iconfont icon-zhu img"></div>-->
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      }
    }
  },
  computed: {
    showSwiper () {
      return this.list.length
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .wrapper >>>  .swiper-pagination-bullet-active
    background :#ccc
  .wrapper
    /*position relative*/
    overflow : hidden
    width : 100%
    height : 0
    padding-bottom : 36%
    margin-top : .5rem
    /*margin: 0 auto;*/
    background-color : #f7f7f7
   .swiper-img
      width : 12rem
      margin-top :.6rem
 /* .img{
    float: left;
    position: relative;
    left:0;
    top : 20px;
    font-size: 30px;
    -webkit-animation: pig 10s linear 0s infinite
    z-index: 20000;
  }
  @-webkit-keyframes pig {
    0% {
      font-size: 12px;
      opacity :0;
      transform :translate(50px,50px)
    }
    30%{
      font-size:30px;
      opacity :0.2;
      transform :translate(100px,140px)
    }
    60%{
      font-size: 40px;
      opacity :0.5;
      transform :translate(328px,240px)
    }
    100%{
      font-size: 80px;
      opacity :1;
      transform :translate(440px,320px)
    }
  }*/

</style>
