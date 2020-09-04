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
        <!-- <van-icon name="weapp-nav" /> -->
      </van-col>
    </van-row>
    <!-- 轮播图 -->
    <van-swipe class="my-swipe" :autoplay="2000" indicator-color="green">
      <van-swipe-item v-for="item in imgSwipe" :key="item.id">
        <img :src="item.imgurl" />
        <span>{{item.name}}</span>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>
<script>
import Vue from "vue";
import { Swipe, SwipeItem, Search, Col, Row, Icon, Lazyload } from "vant";
import request from "@/api/goodsList";
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Search);
Vue.use(Col);
Vue.use(Row);
Vue.use(Icon);
Vue.use(Lazyload);
export default {
  data() {
    return {
      value: "",
      imgSwipe: [],
    };
  },
  components: {},
  methods: {},
  async created() {
    try {
      const p = await request.homeSwipt(5);
      //console.log("数据为", p.data.data);
      this.imgSwipe = p.data.data;
      console.log('imgSwipe数据为',this.imgSwipe);
    } catch (error) {
      console.log(error);
    }
  },
};
</script>

<style scoped>
</style>