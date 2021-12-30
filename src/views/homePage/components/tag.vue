<template>
  <div class=''>
    <i class="iconfont icon-24gf-tags"></i>
    <span v-for="obj,i in tagList" :key="i" class="tag-m">{{ obj }}</span>
  </div>
</template>

<script>
export default {
  name: 'Tag',
  props: {
    // 分类标签
    tagList: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  components: {},
  data () {
    return {}
  },
  computed: {},
  watch: {},
  methods: {},
  created () {},
  mounted () {}
}
</script>
<style lang='scss' scoped>
.tag-m {
  border: 1px solid #ccc;
  padding: 2px 6px;
  border-radius: 5px;
  margin: 0 5px;
}
</style>
