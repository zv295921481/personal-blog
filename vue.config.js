// 关闭eslint，反向代理
const port = process.env.port || process.env.npm_config_port || 8080 // dev port
module.exports = {
  // lintOnSave: false
  publicPath: '/personal-blog',
  devServer: {
    port: port,
    open: true,
    overlay: {
      warnings: false,
      errors: true
    },
    proxy: {
      // http://chanwingwah.info/api/api/blog/list  目标地址
      [process.env.VUE_APP_BASE_API]: {
        target: 'http://chanwingwah.info/', // 本地代理地址
        changeOrigin: true // 支持跨域
      }
    }
  }
}
