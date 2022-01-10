<template>
  <div class='article-layout'>
    <template v-if="skeletonBoolean">
      <skeleton :rows="5" active style="width: 100%"></skeleton>
    </template>
    <template v-else>
      <div class="article-left">
        <div class="blog">
          <div class="art-top">
            <h1 class="title">{{ articleInfo.title }}</h1>
            <div class="sec-content">
              <i class="iconfont icon-shijian"></i><span class="m">{{ getDate(articleInfo.createdAt) }}</span>
              <i class="iconfont icon-gengxin"></i><span class="m">{{ getDate(articleInfo.updatedAt) }}</span>
              <i class="iconfont icon-guidang"></i><span class="m">{{ articleInfo.category }}</span>
              <i class="iconfont icon-chakan"></i><span class="m">({{ articleInfo.viewCount }})</span>
            </div>
          </div>
          <div class="markdown-body">
            <div v-html="articleInfo.HTML" class="theme-default-content content__default"></div>
          </div>
          <tag :tagList="articleInfo.tagNames" class="tag"></tag>
          <div class="dz">
            <i class="iconfont icon-dianzan1 like" v-show="!likeBoolean" @click="clickLike(articleInfo._id)"></i>
            <i class="iconfont icon-dianzan2 like" style="color: red" v-show="likeBoolean" @click="canelLike(articleInfo._id)"></i>
            <p>{{ articleInfo.likeCount }} 人点赞</p>
          </div>
        </div>
        <Comment class="art-comment" :articleId="articleInfo._id"></Comment>
      </div>
      <div class="article-right">
        <Catalogue :catalogueList="articleInfo.headers"></Catalogue>
      </div>
    </template>
  </div>
</template>

<script>
import { getArticleById } from '@/api/blog'
import { mapGetters } from 'vuex'
import skeleton from '@/components/skeleton/skeleton.vue'
import Tag from '../homePage/components/tag.vue'
import Comment from './comment.vue'
import Catalogue from './catalogue.vue'
import '@/style/markdown.scss'
// import 'highlight.js/scss/monokai-sublime.scss'
export default {
  name: 'Article',
  components: {
    skeleton,
    Tag,
    Comment,
    Catalogue
  },
  data () {
    return {
      id: '', // 文章id
      articleInfo: {}, // 文章内容
      skeletonBoolean: true // 骨架屏
      // likeBoolean: false // 是否点赞
    }
  },
  computed: {
    ...mapGetters(['likeCount']),
    likeBoolean () {
      return this.likeCount.includes(this.articleInfo._id)
    }
  },
  watch: {},
  methods: {
    // 获取文章详情
    getArticle () {
      this.id = this.$route.params.id
      console.log('id', this.id)
      getArticleById(this.id).then((res) => {
        this.articleInfo = res.data
        this.skeletonBoolean = false
        console.log('res', res.data)
      })
      // .catch((err) => {
      //   alert(err)
      // })
    },

    // 截取年月日
    getDate (date) {
      return date.substr(0, 10)
    },

    // 点赞
    clickLike (id) {
      console.log('likeBoolean', this.$store)
      if (!this.likeCount.includes(id)) {
        this.$store.dispatch('tourist/addLikeCount', id).then((res) => {
          this.articleInfo.likeCount = res.data.likeCount
        })
      }
    },

    // 取消点赞
    canelLike (id) {
      if (this.likeCount.includes(id)) {
        this.$store
          .dispatch('tourist/cancelLike', id)
          .then((res) => {
            this.articleInfo.likeCount = res.data.likeCount
          })
          .catch((err) => {
            alert(err)
          })
      }
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
    // background-color: #fff;
    width: 850px;
    .blog {
      background-color: #fff;
      padding: 30px 20px;
    }
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
    .tag {
      margin: 50px 0 10px 0;
      color: #999;
    }
    .dz {
      text-align: center;
      margin: 30px 0 20px 0;
    }
    .like {
      font-size: 36px;
      text-align: center;
    }
    .like:hover {
      cursor: pointer;
    }
    .art-comment {
      background-color: #fff;
      padding: 30px 20px;
      margin: 40px 0;
    }
  }
  .article-right {
    position: sticky;
    top: 20px;
    width: 270px;
    height: 350px;
    background-color: #fff;
    padding: 10px 10px;
  }
}
</style>
