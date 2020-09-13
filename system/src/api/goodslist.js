/* 商品请求 */

import request from '@/tool/axios'; //引入封装的axios请求

export default {
  reqgoodslist() {
    return request({
      method: 'post',
      url: '/goodslist'
    })
  }
}