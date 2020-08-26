/* 路由文件 */

import Vue from 'vue' //引入vue
//1、引入路由组件
import VueRouter from 'vue-router'


//登录模块
import login from '@/pages/login.vue'
//注册模块
import signin from '@/pages/signin.vue'
//主内容模块
import main from '@/pages/main.vue'


//首页，@代表src目录
import home from '@/components/home' 
//用户管理
import user from '@/components/user'
import usList from '@/components/user/usList.vue'
import usAdd from '@/components/user/usAdd.vue'
import usAlter from '@/components/user/usAlter.vue'
//商品管理
import goods from '@/components/goods'
import gdsList from '@/components/goods/gdsList'
import gdsAdd from '@/components/goods/gdsAdd'
import gdsAlter from '@/components/goods/gdsAlter'
//订单管理
import order from '@/components/order'
import ordList from '@/components/order/ordList'
import ordAdd from '@/components/order/ordAdd'
import ordAlter from '@/components/order/ordAlter'
//404页面
import notfound from '@/components/notfound.vue' 


//2、使用组件
Vue.use(VueRouter)

//3、实例化组件并配置参数
const router = new VueRouter({
  //配置路由规则
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login', //登录模块
      component: login
    },
    {
      path: '/signin',  //注册模块
      component: signin
    },
    {
      path: '/main',  //内容区模块
      component: main,
      children: [
        {
          path: '/',
          redirect: 'home'  //路由重定向，写地址
        },
        {
          path: 'home',  //首页
          component: home
        },
        {
          path: 'user',  //用户管理
          component: user,
          children: [
            {
              path: '',
              redirect: usList
            },
            {
              //用户列表
              path: 'usList',
              component: usList
            },
            {
              //添加用户
              path: 'usAdd',
              component: usAdd
            },
            {
              //修改用户
              path: 'usAlter',
              component: usAlter
            }
          ]
        },
        {
          path: 'goods', //商品管理
          component: goods,
          children: [
            {
              //商品列表
              path: 'gdsList',
              component: gdsList
            }, {
              //添加商品
              path: 'gdsAdd',
              component: gdsAdd
            }, {
              //修改商品
              path: 'gdsAlter',
              component: gdsAlter
            }
          ]
        },
        {
          path: 'order', //订单管理
          component: order,
          children: [
            {
              //订单列表
              path: 'ordList',
              component: ordList
            },
            {
              //添加订单
              path: 'ordAdd',
              component: ordAdd
            },
            {
              //修改订单
              path: 'ordAlter',
              component: ordAlter
            },
          ]
        },
      ]
    },
    {
      path: '/404',
      component: notfound
    },
    {
      path: '*',     //匹配所有路由（当以上都不匹配时，重定向到404页面）
      redirect: '/404'
    }
  ]

})
//4、把router实例注入到vue实例中
export default router;