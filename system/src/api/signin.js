/* 注册页请求 */

import request from '@/tool/axios'; //引入封装的axios请求

export default {
  
  //验证用户名是否存在
  reqUsername(username) {
    return request({
      method: 'get',
      url: '/signin/' + username
    })
  },

  //注册用户名和密码
  reqSignin(username,password){
    return request({
      method:'post',
      data:{
        username,
        password
      },
      url:'/user',
    })
  }

}