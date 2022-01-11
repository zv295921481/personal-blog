import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/layout'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Layout,
    redirect: '/homePage',
    children: [
      {
        path: 'homePage',
        name: 'home',
        component: () => import('@/views/homePage/index')
      },
      {
        path: 'mylife',
        name: 'about',
        component: () => import('@/views/myLife/index')
      },
      {
        path: 'archives',
        name: 'archives',
        component: () => import('@/views/archives/index')
      },
      {
        path: 'book',
        name: 'home',
        component: () => import('@/views/bookList/index')
      },
      {
        path: 'board',
        name: 'board',
        component: () => import('@/views/board/index')
      },
      {
        path: 'about',
        name: 'about',
        component: () => import('@/views/aboutMe/index')
      },
      {
        path: 'article/:id',
        name: 'article',
        component: () => import('@/views/article/index')
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index.vue')
  },
  {
    path: '/edit',
    name: 'edit',
    component: () => import('@/views/edit/index.vue')
  }

]

const router = new VueRouter({
  routes,
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
router.beforeEach((to, from, next) => {
  console.log('loginInfo', localStorage.getItem('blogLogin'), to)
  var loginBoolean = JSON.parse(localStorage.getItem('blogLogin')).loginBoolean || false
  if (to.path === '/edit') {
    if (loginBoolean) {
      next()
    } else {
      next('/login')
    }
  } else {
    next()
  }
})
export default router
