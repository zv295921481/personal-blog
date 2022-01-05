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
      return this.$route.path
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
  position: relative;
  height: 100%;
  .navbar {
    min-width: 1400px;
    height: 80px;
    background-color: #6aa1d1;
    line-height: 80px;
    margin-bottom: 30px;
  }
  .lay-containt {
    min-height: calc(100% - 140px);
  }
  .ipc {
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
