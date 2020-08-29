/* 用户页请求 */

import request from '@/tool/axios'; //引入封装的axios请求

export default {

  //查询所有用户
  reqUser() {
    return request({
      method: 'get',
      url: '/user'
    })
  },

  //删除用户
  reqUserDelete(id) {
    return request({
      method: 'delete',
      url: '/user/' + id
    })
  },

  //验证用户名
  reqUsername(username) {
    return request({
      method: 'get',
      url: '/login/' + username
    })
  }
}