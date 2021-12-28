<template>
  <div class="">
    <div class="navbar">
      <navbar />
    </div>
    <div class="main">
      <transition name="fade-transform" mode="out-in">
        <keep-alive>
          <router-view :key="key" />
        </keep-alive>
      </transition>
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
.navbar {
  height: 80px;
  background-color: #6aa1d1;
  line-height: 80px;
  margin-bottom: 30px;
}
.main {
  background-color: steelblue;
  height: 400px;
}
</style>
