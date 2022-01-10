<template>
  <div class='comment'>
    <h2>评论<span style="font-size: 20px; color: #999">（0）</span></h2>
    <CommentItem
      class="comment-item"
      v-for=" item, index in commentList"
      :key="index"
      :commentDetail="item"
      :index="index">
    </CommentItem>
    <form action="">
      <p style="font-size: 20px">添加评论</p>
      <textarea name="" id="" cols="70" rows="8"></textarea>
      <div class="item">
        <label for="">您的昵称：</label>
        <input type="text" placeholder="必填">
      </div>
      <div class="item">
        <label for="">Email*：</label>
        <input type="email" placeholder="必填">
      </div>
      <div class="item">
        <label for="">个人网址：</label>
        <input type="text" placeholder="以 https:// 或 http:// 开头">
      </div>
      <div class="">
        <input type="checkbox">
        <label for="" style="font-weight: 400">记住个人信息（浏览器）</label>
      </div>
      <button class="btn" @click="submitComment">发表</button>
    </form>
  </div>
</template>

<script>
import CommentItem from './commentItem.vue'
import { getList } from '@/api/comment'
export default {
  name: 'Comment',
  props: {
    articleId: {
      type: String,
      default: ''
    }
  },
  components: {
    CommentItem
  },
  data () {
    return {
      commentList: [] // 评论列表
    }
  },
  computed: {},
  watch: {},
  methods: {
    // 提交评论
    submitComment () {
      alert('提交成功')
    },

    // 获取评论列表
    getCommentList () {
      console.log('articleId', this.articleId)
      getList({ articleId: this.articleId }).then((res) => {
        this.commentList = res.data
      })
    }
  },
  created () {
    this.getCommentList()
  },
  mounted () {}
}
</script>
<style lang='scss' scoped>
.comment {
  color: #666;
  .item {
    display: flex;
    flex-direction: column;
    margin: 10px 0;
    label {
      font-weight: 400;
    }
    input {
      padding: 2px 3px;
      width: 40%;
      height: 20px;
      margin: 5px 0;
    }
  }
  .btn {
    width: 8rem;
    height: 2rem;
    margin: 3rem 0;
    background-color: #539dd8;
    color: #fff;
    letter-spacing: 6px;
    font-size: 18px;
    border: 1px solid #36709e;
    border-radius: 0.2rem;
  }
  .btn:hover {
    cursor: pointer;
  }
}
</style>
