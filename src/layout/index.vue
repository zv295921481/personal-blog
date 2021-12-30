<template>
  <div class="main">
    <div class="navbar">
      <navbar />
    </div>
    <div class="lay-containt">
      <transition name="fade-transform" mode="out-in">
        <keep-alive>
          <router-view :key="key" />
        </keep-alive>
      </transition>
    </div>
    <div class="ipc">
      <a href="">粤ICP备xxxxxxxx号</a>
    </div>
  </div>
</template>

<script>
import navbar from './components/Navbar.vue'
export default {
  name: 'Layout',
  components: {
    navbar
  },
  data () {
    return {
      val: ''
    }
  },
  computed: {
    key () {
      return this.$router.path
    }
  },
  watch: {},
  methods: {},
  created () {},
  mounted () {}
}
</script>
<style lang='scss' scoped>
.main {
  height: 100%;
  .navbar {
    height: 80px;
    background-color: #6aa1d1;
    line-height: 80px;
    margin-bottom: 30px;
  }
  .lay-containt {
    height: 100%;
    margin: 10px 70px;
  }
  .ipc {
    position: relative;
    bottom: 13px;
    text-align: center;
    color: #999;
    font-size: 14px;
  }
}
.fade-transform-leave-active,
.fade-transform-enter-active {
  transition: all 0.5s;
}

.fade-transform-enter {
  opacity: 0;
  transform: translateX(-30px);
}

.fade-transform-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
