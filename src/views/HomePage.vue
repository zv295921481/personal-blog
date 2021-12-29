<template>
  <div class='home-main'>
    <div class="left">
      <div v-for="(item, index) in dataList" :key="index" class="home-item">
        <a class="title" href="">{{ item.title }}</a>
        <div class="sec-content">
          <i class="iconfont icon-shijian"></i><span class="m">{{ getDate(item.createdAt) }}</span>
          <i class="iconfont icon-gengxin"></i><span class="m">{{ getDate(item.updatedAt) }}</span>
          <i class="iconfont icon-guidang"></i><span class="m">{{ item.category }}</span>
        </div>
        <p class="small-text">{{ item.summary }} &nbsp;&nbsp; <a href="" style="text-decoration: underline;">阅读原文</a></p>
        <div class="item-footer">
          <div class="item-footer-left">
            <i class="iconfont icon-24gf-tags"></i>
            <span v-for="obj,i in item.tagNames" :key="i" class="bt-m">{{ obj }}</span>
          </div>
          <div class="item-footer-right">
            <i class="iconfont icon-chakan"></i>
            <span class="m">({{ item.viewCount }})</span>
            <i class="iconfont icon-xinxi"></i>
            <span class="m">({{ item.commentCount }})</span>
            <i class="iconfont icon-dianzan"></i>
            <span class="m">({{ item.likeCount }})</span>
          </div>
        </div>
      </div>
    </div>
    <div class="right">
      <self-info></self-info>
    </div>
  </div>
</template>

<script>
import SelfInfo from '../components/SelfInfo.vue'
import { getList } from '../../mock/index'
export default {
  name: 'HomePage',
  components: {
    SelfInfo
  },
  data () {
    return {
      dataList: []
    }
  },
  computed: {
    // getDate (date) {
    //   return date.substr(0, 10)
    // }
  },
  watch: {},
  methods: {
    getDate (date) {
      return date.substr(0, 10)
    }
  },
  created () {
    getList()
      .then((res) => {
        console.log('res', res)
        this.dataList = res.data
      })
      .catch((err) => {
        alert(err)
      })
  },
  mounted () {}
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
  width: 800px;
  // float: left;
  .home-item {
    background-color: #fff;
    padding: 20px 35px;
    margin-bottom: 30px;
    box-shadow: 0 4px 4px rgb(0 0 0 / 10%);
    .title {
      font-size: 20px;
      font-weight: 400;
      line-height: 30px;
    }
    .sec-content {
      color: #999;
      font-size: 14px;
      margin: 5px 0;
      .m {
        margin: 0 15px 0 5px;
      }
    }
    .small-text {
      line-height: 26px;
    }
    .item-footer {
      display: flex;
      justify-content: space-between;
      font-size: 14px;
      color: #999;
      margin: 25px 0 5px 0;
      .bt-m {
        border: 1px solid #ccc;
        padding: 2px 6px;
        border-radius: 5px;
        margin: 0 5px;
      }
      .item-footer-right {
        .m {
          margin: 0 10px 0 5px;
        }
      }
    }
  }
}
.right {
  float: right;
  position: sticky;
  top: 20px;
  height: 100%;
}
</style>
