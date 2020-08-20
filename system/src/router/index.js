import Vue from 'vue' //引入vue
import home from './../components/home' //引入组件
import user from '../components/user'
import goods from './../components/goods'
import notfound from '../components/notfound.vue'
import order from '../components/order'
import usList from '../components/user/usList.vue'
import usAdd from '../components/user/usAdd.vue'
//1、引入路由组件
import VueRouter from 'vue-router'

//2、使用组件
Vue.use(VueRouter)

//3、实例化组件并配置参数
const router = new VueRouter({
  //配置路由规则
  routes: [
    {
      path: '/',
      redirect: '/home'  //路由重定向，写地址
    },
    {
      path: '/home',  //首页
      component: home
    },
    {
      path: '/user',  //用户管理
      component: user,
      children: [
        {
          path:'',
          redirect:usList 
        },
        {
          path:'usList', //用户列表
          component:usList
        },
        {
          path:'usAdd',  //添加用户
          component:usAdd
        },
      ]
    },
    {
      path: '/goods', //商品管理
      component: goods
    },
    {
      path: '/order', //订单管理
      component: order
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