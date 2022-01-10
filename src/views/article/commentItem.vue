<template>
  <div class='comt-item'>
    <div class="left-head"><span>{{ getHead }}</span></div>
    <div class="right">
      <div>
        <div class="name">{{ commentDetail.nickname }}</div>
        <span class="time">{{ commentDetail.createdAt}}</span>
        <p>{{ commentDetail.comment }}</p>
      </div>
      <div>引用 #{{ index }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommentItem',
  props: {
    commentDetail: {
      type: Object,
      default: () => {
        return {}
      }
    },
    index: {
      type: Number,
      default: 0
    }
  },
  components: {},
  data () {
    return {}
  },
  computed: {
    getHead () {
      return this.commentDetail.nickname.substring(0, 1)
    }
    // dateFormat () {}
  },
  watch: {},
  methods: {},
  created () {},
  mounted () {}
}
</script>
<style lang='scss' scoped>
.comt-item {
  display: flex;
  justify-content: space-evenly;
  border-bottom: 1px dashed #999;
  margin: 20px 0 40px 0;
  .left-head {
    width: 35px;
    height: 35px;
    border: 1px solid #999;
    border-radius: 100%;
    text-align: center;
    margin-right: 10px;
    font-size: 20px;
    span {
      margin: 3px 0;
      display: inline-block;
    }
  }
  .right {
    flex: 1;
    display: flex;
    justify-content: space-between;
    .name {
      font-size: 20px;
    }
    .time {
      font-size: 14px;
      color: #999;
    }
  }
}
</style>
