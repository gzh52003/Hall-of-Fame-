<template>
  <div>
    <van-nav-bar title="凡客IP联名系列" left-arrow style="background:brown;" @click-left="guo"></van-nav-bar>
    <van-image
      width="100%"
      height="200px"
      src="http://i2.m.vancl.com/q80/wap/2020_8_21_14_55_38_6138.jpg"
    />
    <!-- 宫格 -->
    <van-grid :border="false" :column-num="2" class="margin">
      <van-grid-item v-for="item in goodsList" :key="item.id" @click="gotolist(item.id)">
        <van-image :src="item.imgurl" class="goods" />
        <h4 style="color:red">${{item.name}}</h4>
      </van-grid-item>
    </van-grid>
  </div>
</template>

<script>
import Vue from "vue";
import request from "@/api/goodsApi";
import {
  NavBar,
  Grid,
  GridItem,
} from "vant";
Vue.use(Grid);
Vue.use(GridItem);
Vue.use(NavBar);
export default {
  data() {
    return {
      active: 2,
      goodsList: [],
    };
  },
  components: {},
  methods: {
    guo(id) {
      this.$router.replace("/classify");
    },
    guo(id) {
      this.$router.replace("/classify");
    },
    rong() {
      this.$router.replace("/order");
      //console.log("这是", id)
    },

    async getlistgoods() {
      try {
        const { data } = await request.reqGoodslist(12);
        this.goodsList = data.data;
      } catch (error) {
        console.log('请求出错',error);
      }
    },
    //点击商品实现精确跳转
    gotolist(id) {
      this.$router.replace("/goodslist" + id);
    },
  },
  created() {
    this.getlistgoods();
  },
};
</script>

<style scoped lang="scss">
::v-deep .van-nav-bar__title {
  color: aliceblue;
  font-size: 25px;
}
::v-deep .van-icon-arrow-left {
  font-size: 35px;
  color: aliceblue;
}
</style>