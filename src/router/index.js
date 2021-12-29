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
        component: () => import('@/views/HomePage')
      },
      {
        path: 'mylife',
        name: 'about',
        component: () => import('@/views/MyLife')
      },
      {
        path: 'archives',
        name: 'archives',
        component: () => import('@/views/Archives')
      },
      {
        path: 'book',
        name: 'home',
        component: () => import('@/views/BookList')
      },
      {
        path: 'board',
        name: 'board',
        component: () => import('@/views/Board')
      },
      {
        path: 'about',
        name: 'about',
        component: () => import('@/views/AboutMe')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
