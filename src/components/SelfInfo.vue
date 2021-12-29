<template>
  <div class='self-main'>
    <img src="@/assets/images/head.jpg" alt="" title="头像" class="head-img">
    <p>周志勇</p>
    <div class="self-base-info">
      <i class="iconfont icon-dingwei"></i><span style="margin-left: 10px">广东-深圳</span><br>
      2021年毕业于东华理工大学长江学院<br>前端小白&nbsp;&nbsp;<img src="@/assets/images/smile.png" alt="" style="width: 18px">
    </div>
    <a href="https://github.com/zv295921481" class="github-link"><i class="iconfont icon-github"></i>&nbsp;zv295921481&nbsp;<i class="iconfont icon-daohang"></i></a>
    <div>
      <button class="dy-btn">订阅&nbsp;<i class="iconfont icon-subscribe-1-copy"></i></button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SelfInfo',
  components: {},
  data () {
    return {}
  },
  computed: {},
  watch: {},
  methods: {},
  created () {},
  mounted () {}
}
</script>
<style lang='scss' scoped>
.self-main {
  width: 315px;
  background-color: #fff;
  padding: 35px 10px;
  text-align: center;
  .self-base-info {
    margin: 20px 0;
    font-size: 14px;
    color: #999;
    line-height: 24px;
  }
  .github-link:hover {
    color: #999;
  }
  .dy-btn {
    margin: 15px 0;
    font-size: 18px;
    padding: 0 20px;
    background-color: #83dc40;
    border: 1px solid #999;
    border-radius: 5px;
    :hover {
      cursor: pointer;
    }
  }
}
.head-img {
  width: 100px;
  border-radius: 50%;
}
</style>
