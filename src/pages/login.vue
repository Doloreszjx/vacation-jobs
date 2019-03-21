<template>
  <el-container class="el-container">
    <el-header class="el-header">
      <div class="iconfont pic-icon">
        <span>&#xe681;</span><span>&#xe689;</span><span>&#xe601;</span><span>&#xe601;</span><span>&#xe601;</span>
      </div>
      <div class="text">账号登录</div>
    </el-header>
    <el-main class="el-main">
      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="用户名" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pwd">
          <el-input v-model="ruleForm.pwd" type="password"></el-input>
        </el-form-item>
        <el-form-item>
         <router-link to="/"><el-button type="primary" @click="submitForm('ruleForm')">提交</el-button></router-link>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-main>
  </el-container>
</template>

<script>
import CryptoJS from 'crypto-js'
export default {
  name: 'login',
  data () {
    return {
      ruleForm: {
        username: '',
        passwprd: ''
      },
      rules: {
        username: [{
          required: true, type: 'string', message: '请输入用户名', trigger: 'blur'
        }],
        passwprd: [{
          required: true, message: '输入密码', trigger: 'blur'
        }]
      }
    }
  },
  methods: {
    submitForm (formName) {
      let that = this
      that.$axios.post('/use/login', {
        username: window.encodeURIComponent(that.ruleForm.name),
        password: CryptoJS.MD5(that.ruleForm.pwd).toString() // 将密码加密
      }).then(({status, data}) => {
        if (status === 200) {
          if (data && data.code === 0) {
            location.href = '/'
          } else {
            that.error = `服务器出错，错误码：${status}`
          }
        }
        setTimeout(function () {
          that.error = ''
        }, 1500)
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style scoped>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  .text {
    float: right;
    padding-right: 100px;
    font-size: 20px;
    color: #333;
  }
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    margin-top: 100px;
    text-align: center;
    line-height:500px;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .pic-icon span {
    float: left;
    padding-left: .6rem;
    font-size: .4rem;
  }
</style>
