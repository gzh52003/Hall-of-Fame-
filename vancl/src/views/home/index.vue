<template>
  <div>
    <!-- 搜索框 -->
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

    <!-- 轮播图 -->
    <van-swipe class="my-swipe" :autoplay="2000" indicator-color="green">
      <van-swipe-item v-for="item in imgSwipe" :key="item.id">
        <img v-lazy="item.imgurl" />
      </van-swipe-item>
    </van-swipe>

    <!-- 宫格 -->
    <van-grid :border="false" :column-num="3">
      <van-grid-item v-for="item in goodslist" :key="item.id" @click="toGoods(item.id)">
        <van-image :src="item.imgurl" />
        <h5>{{item.name}}</h5>
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
import { Swipe, SwipeItem, Search, Col, Row, Icon, Lazyload } from "vant";
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Search);
Vue.use(Col);
Vue.use(Row);
Vue.use(Icon);
Vue.use(Lazyload);
//宫格
import { Grid, GridItem, Image } from "vant";
Vue.use(Grid);
Vue.use(GridItem);
Vue.use(Image);

export default {
  data() {
    return {
      value: "",
      imgSwipe: [], //轮播图数据
      goodslist: [], //商品数据
    };
  },

  components: {},

  methods: {
    //功能：动态跳转
    toGoods(id) {
      this.$router.replace("/goodslist" + id);
      //console.log("获取到", id);
    },
  },
  async created() {
    try {
      const { data } = await request.reqGoodslist(14);
      this.imgSwipe = data.data.slice(0, 5); //轮播图数据
      this.goodslist = data.data.slice(5); //商品列表
    } catch (error) {
      console.log("请求轮播图出错", error);
    }
  },
};
</script>

<style scoped lang='scss'>
.my-swipe {
  height: 170px;
  img {
    height: 100%;
    margin: 0 100px;
    // background: rgb(97, 100, 100);
  }
}

h5{
  margin: 0 5px;
}
p{
  margin: 0 8px;
}
</style>