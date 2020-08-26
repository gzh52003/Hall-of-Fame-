/* 登录的axios请求 */

import request from '@/tool/axios'; //引入封装的axios请求
let URL = 'http://localhost:2003';

//导出请求
export default {
  reqLogin(username, password) {  //登录请求
    return request({
      method: 'post',
      data: {
        username,
        password
      },
      url: URL + '/api/login' //请求接口地址
    })
  },

  reqToken(token,username,password) { //token请求
    return request({
      method: 'post',
      data: {
        username,
        password
      },
      url: URL + '/api/login/'+token
    })
  }

}