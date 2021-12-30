import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/style/index.css'
import 'highlight.js/scss/monokai-sublime.scss'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
