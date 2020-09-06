<template>
  <div>
    <img
      :src="goods.imgurl"
      alt=""
      class="src"
    />
    <h4 style="margin-left:10%">{{goods.name}}</h4>
    <span style="color:red;
    margin-left:10%;
    ">${{goods.price}}</span>
    <van-row>
      <van-col span="12">
        <van-button
          icon="shopping-cart-o"
          type="primary"
        ></van-button>
      </van-col>
      <van-col span="12">
        <van-button type="primary">加入购物车</van-button>
      </van-col>
    </van-row>
  </div>

</template>

<script>
import requset from './api'
import Vue from "vue";
import { homeSwipt } from "@/api/goodsList";
import {
  Toast,
  NavBar,
  Sidebar,
  SidebarItem,
  Grid,
  GridItem,
  Button,
} from 'vant';
Vue.use(Button);
Vue.use(Grid);
Vue.use(GridItem);
Vue.use(Sidebar);
Vue.use(SidebarItem);
Vue.use(Toast);
Vue.use(NavBar);
export default {
  data() {
    return {
      goods: []
    }
  },

  async created() {
    const p = this.$route.params.id;  //h获取首页传过来的id值
    //请求这条id的详细数据
    const { data } = await requset.reqGoods(p)  //根据id值发起请求,请求这条数据的详细信息
    this.goods = data.data[0]
  }

}
</script>

<style lang="scss">
.src {
  margin-left: 10%;
}
::v-deep .van-icon {
  color: aliceblue;
  font-size: 35px;
}
::v-deep .van-nav-bar__title {
  font-size: 20px;
  color: aliceblue;
}
</style>