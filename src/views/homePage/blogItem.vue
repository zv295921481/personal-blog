<template>
  <div class=''>
    <div class="home-item">
      <a class="title" href="">{{ article.title }}</a>
      <div class="sec-content">
        <i class="iconfont icon-shijian"></i><span class="m">{{ getDate(article.createdAt) }}</span>
        <i class="iconfont icon-gengxin"></i><span class="m">{{ getDate(article.updatedAt) }}</span>
        <i class="iconfont icon-guidang"></i><span class="m">{{ article.category }}</span>
      </div>
      <p class="small-text">{{ article.summary }} &nbsp;&nbsp; <a href="" style="text-decoration: underline;">阅读原文</a></p>
      <div class="item-footer">
        <tag :tagList="article.tagNames"></tag>
        <div class="item-footer-right">
          <i class="iconfont icon-chakan"></i>
          <span class="m">({{ article.viewCount }})</span>
          <i class="iconfont icon-xinxi"></i>
          <span class="m">({{ article.commentCount }})</span>
          <i class="iconfont icon-dianzan"></i>
          <span class="m">({{ article.likeCount }})</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getList } from '../../../mock/index'
import Tag from './components/tag.vue'
export default {
  name: 'BlogItem',
  props: {
    article: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  components: {
    Tag
  },
  data () {
    return {
      dataList: []
    }
  },
  computed: {},
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
    .item-footer-right {
      .m {
        margin: 0 10px 0 5px;
      }
    }
  }
}
</style>
