import request from '@/tool/axios'; //引入封装的axios请求

export default {

  //首页轮播图请求
  homeSwipt(num) {
    return request({
      method: 'post',
      data: {
        num
      },
      url: '/goodslist'
    })
  }
}