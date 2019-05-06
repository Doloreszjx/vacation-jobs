<template>
  <div>
    <home-com></home-com>
    <home-header></home-header>
    <el-container>
      <el-header class="el-header"><home-swiper :list="swiperList"></home-swiper></el-header>
      <el-main class="el-main"> <home-icons :list="iconList"></home-icons></el-main>
      <el-footer class="el-footer"><home-questionnaire :list="ideaList"></home-questionnaire></el-footer>
    </el-container>
    <div class="iconfont icon-zhu img"></div>
  </div>
</template>

<script>
import HomeCom from './components/Com'
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeQuestionnaire from './components/Questionnaire'
import axios from 'axios'
export default {
  name: 'Home',
  components: {
    HomeCom,
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeQuestionnaire
  },
  data () {
    return {
      iconList: [],
      swiperList: [],
      ideaList: []
    }
  },
  methods: {
    getHomeInfo () {
      axios.get('/api/index.json')
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.iconList = data.iconList
        this.swiperList = data.swiperList
        this.ideaList = data.ideaList
      }
    }
  },
  mounted () {
    this.getHomeInfo()
  }
}
</script>

<style scoped>
  .home {
    font-size: 50px;
  }
  .img{
      float: left;
      position: relative;
      left:0;
      top : 20px;
      font-size: 30px;
      -webkit-animation: pig 10s linear 0s infinite;
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
    100%{
      font-size: 40px;
      opacity :0.5;
      transform :translate(328px,240px)
    }
  }

</style>
