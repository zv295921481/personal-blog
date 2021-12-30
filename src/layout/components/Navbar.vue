<template>
  <div class='nav-bar'>
    <p class="nav-left"><img src="@/assets/images/name1.png" alt="" style="width: 200px" title="name"></p>
    <div class="nav-right">
      <router-link
        :to="item.path"
        class="nav-a"
        :class="item.path == $route.path ? 'active': ''"
        v-for="(item, index) in linkList"
        :key="index">
        {{ item.text }}
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  components: {},
  data () {
    return {
      linkList: [
        {
          path: '/homePage',
          text: '首页'
        },
        {
          path: '/mylife',
          text: '行博'
        },
        {
          path: '/book',
          text: '我的书单'
        },
        {
          path: '/archives',
          text: '归档'
        },
        {
          path: '/board',
          text: '留言板'
        },
        {
          path: '/about',
          text: '关于'
        }
      ]
    }
  },
  computed: {},
  watch: {},
  methods: {},
  created () {
    console.log('route', this.$route.path)
  },
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
  color: #ccc1c1;
}
.nav-a.active {
  color: #fff;
}
.nav-a:hover {
  color: #fff;
}
.actvie {
  color: #fff;
}
</style>
