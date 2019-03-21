<template>
<div class="search">
  <el-row>
    <el-col :span="2" class="iconfont icon">&#xe689;</el-col>
    <el-col :span="6">
      <el-autocomplete
        v-model="input"
        :fetch-suggestions="querySearchAsync"
        placeholder="请输入牲畜id"
        @select="handleSelect"
        size="medium"
      />
    </el-col>
    <el-col :span="2">
      <button class="el-button el-button--primary"
              v-on:click="req_post()">
        <i class="el-icon-search"></i></button>
    </el-col>
  </el-row>
</div>
</template>

<script>
import _ from 'lodash'
export default {
  name: 'Searchbar',
  data () {
    return {
      card: [],
      cards: [],
      input: ''
    }
  },
  methods: {
    Card () {
      return {}
    },
    querySearchAsync: _.debounce(async function (query, cb) {
      let that = this
      if (that.cards.length) {
        cb(that.cards.filter(item => item.value.indexOf(query) > -1))
      } else {
        let {status, data: {card}} = await that.$axios.get('')
        if (status === 200) {
          that.cards = card.id(item => {
            return {
              value: item.name
            }
          })
          cb(that.cards.filter(item => item.value.indexOf(query) > -1))
        } else {
          cb(null)
        }
      }
    }, 200),
    handleSelect: function (item) {
      console.log(item.value)
    },
    req_post () {
      const that = this
      const registerUrl = 'http://restapi.amap.com/v3/batch?key=47eaf6873b8ef6a7679a0c9e7640efb3'
      const newUserInfo = {
        'ops': [
          {
            'url': '/v3/place/around?offset=10&page=1&key=47eaf6873b8ef6a7679a0c9e7640efb3="+that.lng+","+that.lat+"&output=json&radius=100000&types=080000'
          }
        ]
      }
      that.axios.post(registerUrl, newUserInfo, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(function (response) {
          console.log(response['data'][0]['body']['pois'])
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }
}
</script>

<style lang="stylus" scoped>
 .search {
   flaot: left
   margin-top: .5rem
   line-height: .86rem
 }
  .icon{
    font-size :.5rem
  }

</style>
