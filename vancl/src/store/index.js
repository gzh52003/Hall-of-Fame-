import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({ //实例化一个数据仓库

  //存放共享的数据
  state: {
    goodslist: [
      {
        id: 1,
        name: "潮流撞色 皮肤衣 浅蓝",
        price: 158,
        oldPrice: 258,
        imgurl:
          "http://localhost:2003/imges/6388554-1j202004221725394092.jpg",
        qty: 2,
        qty_sum: 10,
        type: "product_list",
        checked: false,
      },
      {
        id: 2,
        name: "T恤 潮流重磅 男款 米白色",
        price: 58,
        oldPrice: 158,
        imgurl:
          "http://localhost:2003/imges/6388569-1j202004221725499717.jpg",
        qty: 3,
        qty_sum: 10,
        type: "product_list",
        checked: false,
      },
      {
        id: 3,
        name: "潮流简约时尚显瘦松紧裤22152622 深灰色",
        price: 178,
        oldPrice: 399,
        imgurl:
          "http://localhost:2003/imges/6388862-1j202005151006169361.jpg",
        qty: 1,
        qty_sum: 10,
        type: "product_list",
        checked: false,
      },
    ],

  },

  //定义修改state的事件(方法)
  mutations: {
    //添加商品到购物车列表
    addGoods(state, data) {
      state.goodslist.unshift(data)
    },
    //修改商品数量
    update(state, { id, sum }) {
      state.goodslist = state.goodslist.map(item => {
        if (item.id == id) {
          item.qty = sum
        }
        return item;
      })
    }
  },
  actions: {
  },
  modules: {
  }
})
