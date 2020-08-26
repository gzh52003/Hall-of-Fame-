/* 登录的axios请求 */

import request from '@/tool/axios'; //引入封装的axios请求
let URL = 'http://localhost:2003';

//导出请求
export default {

  //登录请求
  reqLogin(username, password) {
    return request({
      method: 'post',
      data: {
        username,
        password
      },
      url: URL + '/api/login' //请求接口地址
    })
  },

  //token请求:验证token有效性
  reqToken(token) {
    return request({
      method: 'post',
      data: {
        token
      },
      url: URL + '/api/login/verify'
    })
  },

}