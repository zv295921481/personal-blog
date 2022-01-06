<template>
  <div class='home-main'>
    <div class="left">
      <template v-if="skeletonBoolean">
        <skeleton :rows="5" active></skeleton>
      </template>
      <template v-else>
        <blog-item v-for="item in dataList" :key="item._id" :article="item"></blog-item>
      </template>
    </div>
    <div class="right">
      <self-info></self-info>
    </div>
  </div>
</template>

<script>
import SelfInfo from '@/components/SelfInfo.vue'
import BlogItem from './blogItem.vue'
import skeleton from '@/components/skeleton/skeleton.vue'
import { getList } from '@/api/blog'
export default {
  name: 'HomePage',
  components: {
    SelfInfo,
    BlogItem,
    skeleton
  },
  data () {
    return {
      dataList: [],
      skeletonBoolean: true // 骨架屏
    }
  },
  computed: {
    getDate (date) {
      return date.substr(0, 10)
    }
  },
  watch: {},
  methods: {},
  created () {},
  mounted () {
    getList()
      .then((res) => {
        console.log('res', res)
        this.skeletonBoolean = false
        this.dataList = res.data
      })
      .catch((err) => {
        alert(err)
      })
  }
}
</script>
<style lang='scss' scoped>
.home-main {
  height: 100%;
  width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
}
.left {
  width: 850px;
}
.right {
  float: right;
  position: sticky;
  top: 20px;
  height: 100%;
}
</style>
