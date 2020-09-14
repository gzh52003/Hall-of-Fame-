import request from '@/tool/axios';

export default {

  //根据id查询商品信息
  reqGoods(id) {
    return request({
      method: 'get',
      url: '/goodslist/' + id
    })
  },

  //查询多条商品数据
  //num不传是为查询全部数据
  reqGoodslist(num) {
    return request({
      method: 'post',
      data: {
        num
      },
      url: '/goodslist'
    })
  },

  //商品排序
  reqSort(data) {
    return request({
      method: 'get',
      url: '/goodslist?id=' + data
    })
  }
}