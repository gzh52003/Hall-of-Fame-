import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/home' //首页


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    //首页
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    //分类页
    path: '/classify',
    name: 'Classify',
    component: () => import('@/views/classify') //懒加载，引入页面组件
  },
  {
    //频道页
    path: '/find',
    name: 'Find',
    component: () => import('@/views/find')
  },
  {
    //购物车
    path: '/cart',
    name: 'Cart',
    component: () => import('@/views/cart')
  },
  {
    //我的
    path: '/mine',
    name: 'Mine',
    component: () => import('@/views/mine')
  },
  {
    //登录页
    path: '/login',
    name: 'Login',
    component: () => import('@/pages/Login')
  },
  {
    //注册页
    path: '/signin',
    name: 'Signin',
    component: () => import('@/pages/Signin')
  },
  {
    //404
    path: '/404',
    name: 'Notfound',
    component: () => import('@/pages/Notfound')
  },
  {
    path: '*',     //匹配所有路由（当以上都不匹配时，重定向到404页面）
    redirect: '/404'
  }
]

const router = new VueRouter({
  // mode: 'history',
  // base: process.env.BASE_URL,
  routes
})

export default router
