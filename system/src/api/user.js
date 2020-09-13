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

  //根据id查询用户
  reqUserOdd(id) {
    return request({
      method: 'get',
      url: '/user/' + id
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
  },

  //修改用户
  reqAlterUser(id, gender, age, date) {
    return request({
      method: 'put',
      data: {
        id,
        gender,
        age,
        date
      },
      url: '/user'
    })
  },

  //添加用户
  reqAdd(username, password, gender, age, dateValue) {
    if (age == '') {
      age = null
    };
    return request({
      method: 'post',
      data: {
        username,
        gender,
        age,
        password,
        dateValue
      },
      url: '/user'
    })
  }

}