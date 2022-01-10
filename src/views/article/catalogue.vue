<template>
  <div class='catalogue'>
    <h1>目录</h1>
    <div class="list">
      <ul v-for="(item, index) in catalogueList" :key="index">
        <li>
          <a href="#"
            :class="{'level2': item.level== 2, 'level3': item.level == 3, 'menu-item': activeIndex == index}"
            v-scroll-to="{
              el: '#' + item.slug,
              duration: 500,
              easing: 'linear',
              offset: -100,
          }">{{ item.title }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import VueScrollTo from 'vue-scrollto'
Vue.use(VueScrollTo)
export default {
  name: 'Catalogue',
  props: {
    catalogueList: {
      type: Array,
      default: () => {
        return {}
      }
    }
  },
  components: {},
  data () {
    return {
      scroll: '',
      menuList: this.catalogueList,
      activeIndex: undefined
    }
  },
  computed: {},
  watch: {},
  methods: {
    loadScroll () {
      this.menuList.forEach((item, index) => {
        var dom = document.getElementById(item.slug)
        if (!dom) {
          return
        }
        var top = dom.getBoundingClientRect().top
        if (top > 0 && top <= 101) {
          this.activeIndex = index
          console.log('activeIndex', this.activeIndex)
        }
        if (this.activeIndex === 0) {
          var dom0 = document.getElementById(this.menuList[0].slug)
          var top0 = dom0.getBoundingClientRect().top
          if (top0 > 101) {
            this.activeIndex = undefined
          }
        }
      })
    }
  },
  created () {},
  mounted () {
    window.addEventListener('scroll', this.loadScroll)
  }
}
</script>
<style lang='scss' scoped>
.catalogue {
}
h1 {
  font-weight: 400;
  font-size: 22px;
  border-bottom: 1px solid #d2cdcd;
  padding-bottom: 5px;
}
.list {
  margin-left: 10px;
  li {
    margin: 5px 0;
    a:hover {
      text-decoration: underline;
    }
    .level2 {
      font-style: 18px;
      margin-left: 10px;
    }
    .level3 {
      margin-left: 30px;
    }
    .menu-item {
      font-weight: 600;
      text-decoration: underline;
      color: #449be8;
    }
  }
}
</style>
