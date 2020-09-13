import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({ //实例化一个数据仓库

  //存放共享的数据
  state: {
    goodslist: [
    ],

  },

  //定义修改state的事件(方法)
  mutations: {
    //添加商品到购物车列表
    addGoods(state, data) {
      state.goodslist.unshift(data)
     // console.log( state.goodslist);
      
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
