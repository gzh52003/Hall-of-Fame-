/* 首页 */

<template>
  <div>
    <!-- 搜索框 -->
    <van-sticky>
      <van-row style="background:red;height:40px">
        <van-col
          span="3"
          style="text-align:center;line-height:40px;font-size:20px;font-wight:900;color:white"
        >凡客</van-col>
        <van-col span="18">
          <van-search
            background="red"
            shape="round"
            v-model="value"
            placeholder="请输入搜索关键词"
            style="height:40px"
          />
        </van-col>
        <van-col span="3">
          <van-icon color="white" size="30px" name="ellipsis" style="margin-top:5px" />
        </van-col>
      </van-row>
    </van-sticky>
    <!-- 轮播图 -->
    <van-swipe class="my-swipe" :autoplay="2000" indicator-color="green">
      <van-swipe-item v-for="item in imgSwipe" :key="item.id">
        <img v-lazy="item.imgurl" />
      </van-swipe-item>
    </van-swipe>
    <!-- banner图 -->
    <van-row>
      <van-col span="22" offset="1">
        <van-image
          height="50"
          src="https://mi2.vanclimg.com/oms/2020_6_18_16_10_3_9405_976x145.jpg"
        />
      </van-col>
    </van-row>
    <!-- 轮播图2 -->
    <van-grid
      :border="false"
      :column-num="3"
      class="imgs"
      direction="horizontal"
      style="margin: 30px"
    >
      <van-grid-item v-for="item in imgGrid" :key="item.id">
        <van-image width="70" height="70" :src="item.imgurl" />
      </van-grid-item>
    </van-grid>

    <!-- 宫格 -->
    <van-grid :border="false" :column-num="3">
      <van-grid-item v-for="item in goodsList" :key="item.id" @click="gotolist(item.id)">
        <van-image :src="item.imgurl" />
        <!-- <h4>{{item.name}}</h4>
        <span style="color:red">￥{{item.price}}</span>-->
        <h5 style="margin:10px 0">{{item.name}}</h5>
        <p class="price">
          <del>{{item.oldPrice}}</del>
          <span>{{item.price}}</span>
        </p>
      </van-grid-item>
    </van-grid>
  </div>
</template>
<script>
import request from "@/api/goodsApi";
import Vue from "vue";
import {
  Swipe,
  SwipeItem,
  Search,
  Col,
  Row,
  Icon,
  Lazyload,
  Image as VanImage,
  Grid,
  GridItem,
  Sticky,
} from "vant";

Vue.use(Sticky);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Search);
Vue.use(Col);
Vue.use(Row);
Vue.use(Icon);
Vue.use(Lazyload);
Vue.use(VanImage);
Vue.use(Grid);
Vue.use(GridItem);
export default {
  data() {
    return {
      value: "",
      imgSwipe: [], //轮播图数据
      imgGrid: [],
      goodsList: [], //宫格数据
    };
  },
  components: {},
  methods: {
    async getbanner() {
      try {
        const { data } = await request.reqGoodslist(5);
        this.imgSwipe = data.data;
        this.imgGrid = data.data.slice(2, 5);
      } catch (error) {
        console.log("出错为", error);
      }
    },
    //宫格的数据
    async getlistgoods() {
      try {
        const { data } = await request.reqGoodslist();
        this.goodsList = data.data.slice(5);
      } catch (error) {
        console.log(error);
      }
    },

    //功能:点击商品跳转到详情页
    gotolist(id) {
      //实现页面跳转并携带数据
      this.$router.push("/goodslist" + id);
    },
  },

  created() {
    this.getbanner(), this.getlistgoods();
  },
};
</script>
<style scoped lang='scss'>
.my-swipe {
  height: 170px;

  img {
    height: 100%;
    margin: 0 100px;
  }
}
.price{
  margin: 0;
}
</style>
