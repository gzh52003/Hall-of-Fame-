/* 路由守卫 */

import router from '@/router';  //引入路由
import Token from '@/api/login';  //引入二次封装的axios请求

router.beforeEach((to, from, next) => {
  /* 
    全局前置路由守卫:
    * to:下个路由
    * from:上个路由
    * next():进入下个路由
  */

  //1、判断哪些页面需要守卫，登录页不用守卫，其余页面需要守卫
  if (to.path == '/login') {
    next(); //括号里不传值，默认允许进入'/login'
  } else {
    //2、判断有无token
    const token = localStorage.getItem('system-token');
    if (token == null || token == '') {
      //无token，跳到登录页
      next('/login');
    } else {
      //3、有token，发送请求，验证token有效性
      
    }
  }

})