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
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
