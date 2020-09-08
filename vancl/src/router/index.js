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
  //订单页
  {
    path:'/order',
    name:'Order',
    component:()=>import('@/pages/order')
  },
  //频道页第一层跳转id
  // {
  //   path:'/classification/:id',
  //   name:'Classification',
  //   component:()=>import('@/pages/classification')
  // },
  // //频道页第二层跳转
  // {
  //   path:'/joint',
  //   name:'Joint',
  //   component:()=>import('@/pages/joint')
  // },
  {
    //商品详情页
    path: '/goodslist:id',
    name: 'Goodslist',
    component: () => import('@/pages/goodslist')
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
