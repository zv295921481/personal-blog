<template>
  <div class='main'>
    <div class="left">
      首页
    </div>
    <div class="right">
      <self-info></self-info>
    </div>
  </div>
</template>

<script>
import SelfInfo from '../components/SelfInfo.vue'
export default {
  name: 'HomePage',
  components: {
    SelfInfo
  },
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
.main {
}
</style>
