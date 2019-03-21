<template>
  <div>
    <home-com></home-com>
    <home-header></home-header>
    <home-swiper :list="swiperList"></home-swiper>
    <home-icons :list="iconList"></home-icons>
    <home-questionnaire :list="ideaList"></home-questionnaire>
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

</style>
