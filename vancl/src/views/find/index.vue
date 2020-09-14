<template>
  <div>
    <!-- 头部 -->
    <van-nav-bar
      title="频道"
      left-arrow
      style="background:brown;"
      @click-left="guo"
    >
      <!-- banner图片 -->
    </van-nav-bar>
    <van-image
      width="100%"
      height="200"
      src="https://img.yzcdn.cn/vant/cat.jpeg"
      @click="banner"
    />
    <!-- 标题 -->
    <van-row>
      <van-col
        span="18"
        class="texthed"
      >
        联名系列T恤
      </van-col>
      <van-col span="6">
        <van-button
          type="danger"
          size="mini"
          class="button"
        >点击查看</van-button>
      </van-col>
    </van-row>
    <van-image
      width="100%"
      height="220"
      src="http://i5.m.vancl.com/q80/wap/2019_5_24_10_4_52_3729.jpg"
      @click="banner"
    />

    <van-image
      width="100%"
      height="220"
      src="http://i8.m.vancl.com/q80/wap/2020_7_2_10_27_44_789.jpg"
      @click="banner"
    />
    <van-image
      width="100%"
      height="220"
      src="http://i9.m.vancl.com/q80/wap/2020_3_13_10_43_57_5679.jpg"
      @click="banner"
    />
    <van-image
      width="100%"
      height="220"
      src="http://i2.m.vancl.com/q80/wap/2018_5_17_16_19_22_9179.jpg"
      @click="banner"
    />
    <van-image
      width="100%"
      height="220"
      src="http://i1.m.vancl.com/q80/wap/2018_5_17_16_20_20_4258.jpg"
      @click="banner"
    />
    <van-image
      width="100%"
      height="220"
      src="http://i7.m.vancl.com/q80/wap/2020_7_2_10_28_27_9682.jpg"
      @click="banner"
    />
  </div>
</template>

<script>
import Vue from "vue";
// import { homeSwipt } from "@/api/goodsList";
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
    }
  },
  components: {
  },
  methods: {
    guo(id) {
      this.$router.replace("/classify")
    },
    banner() {
      this.$router.replace("/joint")
    }
  }
}
</script>

<style scoped lang="scss">
::v-deep .van-icon {
  color: aliceblue;
  font-size: 35px;
}
::v-deep .van-nav-bar__title {
  font-size: 20px;
  color: aliceblue;
}
.texthed {
  height: 35px;
  line-height: 35px;
  text-align: center;
  padding-left: 80px;
  font-size: 15px;
  color: #ccc;
}
.button {
  width: 80px;
  height: 25px;
  margin-top: 5px;
}
</style>