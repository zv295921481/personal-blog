<template>
  <div class='login'>
    <form action="">
      <div class="item">
        <label for="">用户名：</label>
        <input type="text" name="" id="" v-model="userName">
      </div>
      <div class="item">
        <label for="">密&nbsp;&nbsp;&nbsp;码：</label>
        <input type="password" name="" id="" v-model="pwd">
      </div>
      <button class="btn" @click="loginAction">登&nbsp;&nbsp;录</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  components: {},
  data () {
    return {
      userName: '', // 用户名
      pwd: '' // 密码
    }
  },
  computed: {},
  watch: {},
  methods: {
    loginAction () {
      if (this.userName === 'zzy' && this.pwd === '123456') {
        localStorage.setItem(
          'blogLogin',
          JSON.stringify({
            userName: this.userName,
            pwd: this.pwd,
            loginBoolean: true
          })
        )
        this.$router.push({ path: '/edit' })
      } else {
        alert('请输入正确的用户名和密码')
      }
    }
  },
  created () {},
  mounted () {}
}
</script>
<style lang='scss' scoped>
.login {
  height: 100%;
  form {
    top: 30%;
    width: 350px;
    height: 300px;
    margin: auto;
    border: 1px solid #999;
    padding: 20px;
    position: relative;
    text-align: center;
    font-weight: 400;
    background-color: #89c0eb;
    .item {
      margin: 30px 0;
      input {
        height: 20px;
      }
    }
    .btn {
      background-color: #2ccade;
      width: 115px;
      height: 30px;
      border: 1px solid #2c98a6;
      margin-top: 50px;
    }
  }
}
</style>
