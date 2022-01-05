<template>
  <div class='article-layout'>
    <template v-if="skeletonBoolean">
      <skeleton :rows="5" active style="width: 100%"></skeleton>
    </template>
    <template v-else>
      <div class="article-left">
        <div class="art-top">
          <h1 class="title">{{ articleInfo.title }}</h1>
          <div class="sec-content">
            <i class="iconfont icon-shijian"></i><span class="m">{{ getDate(articleInfo.createdAt) }}</span>
            <i class="iconfont icon-gengxin"></i><span class="m">{{ getDate(articleInfo.updatedAt) }}</span>
            <i class="iconfont icon-guidang"></i><span class="m">{{ articleInfo.category }}</span>
            <i class="iconfont icon-chakan"></i><span class="m">({{ articleInfo.viewCount }})</span>
          </div>
        </div>
        <div v-html="articleInfo.HTML" class="text"></div>
      </div>
      <div class="article-right">
        <p>目录</p>
      </div>
    </template>
  </div>
</template>

<script>
import { getArticleById } from '@/api/index'
import skeleton from '@/components/skeleton/skeleton.vue'
import '@/style/markdown.scss'
import 'highlight.js/scss/monokai-sublime.scss'
export default {
  name: 'Article',
  components: { skeleton },
  data () {
    return {
      id: '', // 文章id
      articleInfo: {}, // 文章内容
      skeletonBoolean: true // 骨架屏
    }
  },
  computed: {},
  watch: {},
  methods: {
    // 获取文章详情
    getArticle () {
      this.id = this.$route.params.id
      console.log('id', this.id)
      getArticleById(this.id)
        .then((res) => {
          this.articleInfo = res.data
          this.skeletonBoolean = false
          console.log('res', res.data)
        })
        .catch((err) => {
          alert(err)
        })
    },

    // 截取年月日
    getDate (date) {
      return date.substr(0, 10)
    }
  },
  created () {
    console.log('params', this.$route.params)
    this.getArticle()
  },
  mounted () {}
}
</script>
<style lang='scss' scoped>
.article-layout {
  width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  .article-left {
    background-color: #fff;
    padding: 30px 20px;
    width: 800px;
    .art-top {
      margin-bottom: 50px;
      .title {
        font-size: 28px;
        color: #444;
        font-weight: 400;
        margin: 10px 0;
        margin-bottom: 15px;
      }
      .sec-content {
        color: #999;
        font-size: 14px;
        margin: 5px 0;
        .m {
          margin: 0 15px 0 5px;
        }
      }
    }
    .text {
    }
  }
  .article-right {
    position: sticky;
    top: 20px;
    width: 270px;
    height: 300px;
    background-color: #fff;
    padding: 10px 10px;
  }
}
</style>
