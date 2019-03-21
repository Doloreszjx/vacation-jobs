<template>
  <el-container class="el-container">
    <el-header class="el-header">
      <div class="iconfont pic-icon">
        <span>&#xe681;</span><span>&#xe689;</span><span>&#xe601;</span><span>&#xe601;</span><span>&#xe601;</span>
      </div>
      <article class="header">
        <span class="login">
          <em class="bold">已有牧场账号？</em>
          <router-link to="/login">
            <el-button type="primary" size="small">登录</el-button>
          </router-link>
        </span>
      </article>
    </el-header>
    <el-container>
      <el-aside width="200px" class="el-aside">
        <div class="text">智慧牧场</div>
      </el-aside>
      <el-container class="el-container">
        <el-main class="el-main">
          <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="用户名" prop="name">
              <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="邮箱验证" prop="email">
             <el-input v-model="ruleForm.email"></el-input>
              <el-button size="mini" round @click="sendMsg">发送验证码</el-button>
              <span class="status">{{statusMsg}}</span>
            </el-form-item>
            <el-form-item label="验证码" prop="code">
              <el-input v-model="ruleForm.code" maxlength="4"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="pwd">
              <el-input v-model="ruleForm.pwd" type="password"></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="cpwd">
              <el-input v-model="ruleForm.cpwd" type="password"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="register">注册</el-button>
              <div class="error">{{error}}</div>
            </el-form-item>
          </el-form>
        </el-main>
        <el-footer class="el-footer"><div class="text">欢迎您</div></el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
import CryptoJS from 'crypto-js'
export default {
  name: 'register',
  data () {
    return {
      statusMsg: '',
      error: '',
      ruleForm: {
        name: '',
        code: '',
        pwd: '',
        cpwd: '',
        email: ''
      },
      rules: {
        name: [{
          required: true, type: 'string', message: '请输入用户名', trigger: 'blur'
        }],
        email: [{
          required: true, type: 'email', message: '请输入邮箱', trigger: 'blur'
        }],
        pwd: [{
          required: true, message: '创建密码', trigger: 'blur'
        }],
        cpwd: [{
          required: true, message: '确认密码', trigger: 'blur'
        }, {
          validator: (rule, value, callback) => {
            if (value === '') {
              callback(new Error('请再次输入密码'))
            } else if (value !== this.ruleForm.pwd) {
              callback(new Error('两次输入密码不一致'))
            } else {
              callback()
            }
          },
          trigger: 'blur'
        }]
      }
    }
  },
  methods: {
    sendMsg: function () {
      const that = this
      let namePass
      let emailPass
      if (that.timerid) {
        return false
      }
      this.$refs['ruleForm'].validateField('name', (valid) => {
        namePass = valid
      })
      that.statusMsg = ''
      if (namePass) {
        return false
      }
      this.$refs['ruleForm'].validateField('email', (valid) => {
        emailPass = valid
      })
      if (!namePass && !emailPass) {
        that.$axios.post('/users/verify', {
          username: encodeURIComponent(that.ruleForm.name),
          email: that.ruleForm.email
        }).then(({
          status,
          data
        }) => {
          if (status === 200 && data && data.code === 0) {
            let count = 60
            that.statusMsg = `验证码已发送，剩余${count--}秒`
            that.timerid = setInterval(function () {
              that.statusMsg = `验证码已发送，剩余${count--}秒`
              if (count === 0) {
                clearInterval(that.timerid)
              }
            }, 1000)
          } else {
            that.statusMsg = data.msg
          }
        })
      }
    },
    register: function () {
      let that = this
      this.$refs['ruleForm'].validate((valid) => {
        if (valid) {
          that.$axios.post('/users/signup', {
            username: window.encodeURIComponent(that.ruleForm.name),
            password: CryptoJS.MD5(that.ruleForm.pwd).toString(), // 将密码加密
            email: that.ruleForm.email,
            code: that.ruleForm.code
          }).then(({status, data}) => {
            if (status === 200) {
              if (data && data.code === 0) {
                location.href = '/login'
              } else {
                that.error = `服务器出错，错误码：${status}`
              }
            }
            setTimeout(function () {
              that.error = ''
            }, 1500)
          })
        }
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
    .pic-icon span {
      float: left;
      padding-left: .6rem;
      font-size: .4rem;
    }
    .header {
      float :right;
      margin-right :20px;
    }
      .login {
        padding-left :2px;
      }
        .bold {
          color : #333;
        }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 450px;
  }
    .text {
      font-size :20px;
      text-align center;
      color: #666
    }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside{
    line-height: 260px;
  }
</style>
