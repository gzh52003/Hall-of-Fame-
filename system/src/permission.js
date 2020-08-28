/* 路由守卫 */

import router from '@/router';  //引入路由
import loginApi from '@/api/login';  //引入二次封装的axios请求

router.beforeEach(async (to, from, next) => {
  /* 
    全局前置路由守卫:
    * to:下个路由
    * from:上个路由
    * next():进入下个路由
  */

  //1、判断哪些页面需要守卫，登录页不用守卫，其余页面需要守卫
  if (to.path == '/login' || to.path == '/signin') {
    next(); //括号里不传值，默认允许进入目标路由
  } else {
    //2、判断有无token
    const token = localStorage.getItem('system-token'); //获取token
    if (token == null || token == '') {
      //无token，跳到登录页
      next('/login');
    } else {
      //3、有token，发送请求，验证token有效性
      try {
        const p = await loginApi.reqToken(token);
        if (p.data.state) {
          //4、token有效，进入目标路径
          next();
        } else {
          //token无效
          next('/login');
        }
      } catch (error) {
        console.log('登录验证token错误为：', error)
      }
    }
  }

})