<template>
  <div class='nav-bar'>
    <p class="nav-left">ZhouZhiyong</p>
    <div class="nav-right">
      <router-link to="/" class="active nav-a">首页</router-link>
      <router-link to="/mylife" class="nav-a">行博</router-link>
      <router-link to="/book" class="nav-a">我的书单</router-link>
      <router-link to="/archives" class="nav-a">归档</router-link>
      <router-link to="/board" class="nav-a">留言板</router-link>
      <router-link to="/about" class="nav-a">关于</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
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
.nav-bar {
  width: 1050px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
.nav-left {
  margin-top: 0px;
  font-size: 24px;
  font-weight: 600;
  letter-spacing: 1px;
}
.nav-a {
  margin: 0 15px;
  font-size: 18px;
}
</style>
