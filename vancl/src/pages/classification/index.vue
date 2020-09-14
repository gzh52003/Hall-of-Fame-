<template>
  <div>
    <!-- 头部 -->
    <van-nav-bar
      title=" T恤"
      left-arrow
      style="background:brown;"
      @click-left="guo"
    >
    </van-nav-bar>
    <!-- 排序-->
    <van-row>
      <van-col span="12">
        <van-button
          type="primary"
          @click="onepice('asc')"
        >原价升序</van-button>

      </van-col>
      <van-col
        span="12"
        class="pice"
      >
        <van-button
          type="info"
          @click="teopice('desc')"
        >原价降序</van-button>
      </van-col>
    </van-row>
    <div class="context">
      <van-grid
        :border="false"
        :column-num="3"
        class="gongge"
      >
        <van-grid-item
          v-for="item in goodsList"
          :key="item.id"
          @click="gotolist(item.id)"
        >
          <van-image
            :src="item.imgurl"
            class="tu"
          />
          <h5 style="margin:10px 0">{{item.name}}</h5>
          <p class="price">
            <del>{{item.oldPrice}}</del>
            <span>{{item.price}}</span>
          </p>
        </van-grid-item>
      </van-grid>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import requset from "@/api/goodsApi";
import { NavBar, Grid, GridItem, Button } from 'vant';

Vue.use(Button);
Vue.use(Grid);
Vue.use(GridItem);
Vue.use(NavBar);
export default {
  data() {
    return {

      goodsList: [],
    }
  },
  methods: {
    guo(id) {
      this.$router.replace("/classify")
    },
    // goodlis数据
    async getlistgoods() {
      try {
        const { data } = await requset.reqGoodslist(12);
        this.goodsList = data.data;
        //console.log('数据', data.data);
      } catch (error) {
        //console.log(error);
      }
    },
    //点击获取商品的详细信息
    gotolist(id) {
      this.$router.replace('/goodslist' + id)
    },
    //点击价格排序
    //原价升序
    async onepice(id) {
      const { data } = await requset.reqSort(id);
      this.goodsList = data.data;
    },
    //原价降序
    teopice(id) {
      this.onepice(id);
    }

  },
  created() {
    this.getlistgoods()
  },

}
</script>

<style scoped lang='scss'>
::v-deep .van-icon {
  color: aliceblue;
  font-size: 35px;
}
::v-deep .van-nav-bar__title {
  font-size: 20px;
  color: aliceblue;
}
.pice {
  position: relative;
  right: -100px;
}
</style>