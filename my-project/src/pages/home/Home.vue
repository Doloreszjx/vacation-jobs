<template>
    <div>
    <home-header></home-header>
    <home-swiper :list="swiperList"></home-swiper>
    <home-icons :list="iconList"></home-icons>
    <home-recommend :list="recommendList"></home-recommend>
    <home-weekend :list="weekendList"></home-weekend>
    </div>
</template>


<script>
import HomeHeader from './component/Header'
import HomeSwiper from './component/Swiper'
import HomeIcons from './component/icons'
import HomeRecommend from './component/Recommend'
import HomeWeekend from './component/weekend'
import axios from 'axios'
import { mapState } from 'vuex'
export default {
    name: 'home',
    components:{
        HomeHeader:HomeHeader,
        HomeSwiper:HomeSwiper,
        HomeIcons:HomeIcons,
        HomeRecommend:HomeRecommend,
        HomeWeekend:HomeWeekend
    },
    computed: {
        ...mapState(['city'])
    },
    data () {
        return {
            lastCity: '',
            swiperList: [],
            iconList: [],
            recommendList: [],
            weekendList: []
        }
    },
    methods: {
        getHomeInfo () {
            axios.get('/api/index.json?city=' + this.city)
                .then(this.getHomeInfoSucc)
        },
        getHomeInfoSucc (res) {
            res = res.data
            if (res.ret && res.data) {
                const data = res.data
                this.swiperList = data.swiperList
                this.iconList = data.iconList
                this.recommendList = data.recommendList
                this.weekendList = data.weekendList
            }
        }
    },
    mounted () {
        this.lastCity = this.city
        this.getHomeInfo()
    },
    activated () {
        if (this.lastCity !== this.city) {
            this.lastCity = this.city
            this.getHomeInfo()
        }
    }
}
</script>


<style>

</style>
