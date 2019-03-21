<template>
  <el-row :gutter="20" class="box">
    <el-col :span="4">
      <div class="user">
        <template v-if="user">
          欢迎您，<span class="username">{{user}}</span>
          <router-link to="/exit">退出</router-link>
        </template>
        <template v-else>
          <router-link to="/login" class="login">立即登录</router-link>
          <router-link to="/register" class="register">注册</router-link>
        </template>
      </div>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'com',
  data () {
    return {
      user: ''
    }
  }
}
</script>

<style lang="stylus" scoped>
  .box
    margin-top :0
    margin-bottom : .2rem
    height :.6rem
    background :#e7e7e7
    .text {
      margin-top : .15rem
      color :#666
    }
    .user {
      margin-top : .15rem
      padding-left : .12rem
    }
  :hover, :active {
    color:#666
  }
</style>
