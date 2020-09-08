<template>
  <div>
    <!-- 头部 -->
    <van-nav-bar title="个人中心" left-arrow style="background:brown;" @click-left="guo"></van-nav-bar>
    <van-row class="facx">
      <van-col span="24">
        <van-image
          width="100%"
          height="200px"
          class="icon"
          src="http://i10.m.vancl.com/Content/H5/img/uc-topbgd.png"
        >
          <van-image
            round
            width="70"
            height="70"
            class="flas"
            src="http://i10.m.vancl.com/Content/H5/img/H5-V0.jpg"
          />
          <van-icon class="icons" name="setting-o" />
          <van-button round type="info" color="#58bc58" class="buttom">普通会员</van-button>
          <van-row type="flex" justify="space-around" class="sizes">
            <van-col span="3">积分:0</van-col>
            <van-col span="3">余额: 88</van-col>
            <van-col span="3">成长值: 8</van-col>
          </van-row>
        </van-image>
      </van-col>
    </van-row>
    <!-- 全部菜单 -->
    <van-row class="background">
      <van-col span="12" class="caidan">全部菜单</van-col>
      <!-- 右边箭头 -->
      <van-col span="12">
        <van-icon @click="rong" size="20" name="arrow" class="icona" />
      </van-col>
    </van-row>
    <!-- 状态栏 -->
    <div @click="list">
      <van-tabbar v-model="active">
        <van-tabbar-item icon="home-o" color="red">标签</van-tabbar-item>
      </van-tabbar>
      <van-grid>
        <van-grid-item icon="certificate" text="进行中" color="red" />
      </van-grid>
    </div>
    <!-- 宫格 -->
    <van-grid :border="false" :column-num="4" class="margin">
      <van-grid-item v-for="item in goodsList" :key="item.id">
        <van-image :src="item.imgurl" class="goods" />
        <h4 class="strings">{{item.name}}</h4>
      </van-grid-item>
    </van-grid>
  </div>
</template>

<script>
import Vue from "vue";
import request from "@/api/goodsApi";
import {
  Toast,
  NavBar,
  Sidebar,
  SidebarItem,
  Grid,
  GridItem,
  Button,
  Tabbar,
  TabbarItem,
} from "vant";
Vue.use(Tabbar);
Vue.use(TabbarItem);
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
      active: 0,
      goodsList: [],
    };
  },
  components: {},

  methods: {
    guo(id) {
      this.$router.replace("/classify");
    },
    rong() {
      this.$router.replace("/order");
    },
    list() {
      this.$router.replace("/order");
    },

    async getlistgoods() {
      try {
        const { data } = await request.reqGoodslist(12);
        this.goodsList = data.data;
      } catch (error) {
        console.log("请求列表数据出错", error);
      }
    },
  },
  created() {
    this.getlistgoods();
  },
};
</script>

<style lang='scss' scoped>
.wrap{
    max-width: 640px;
    margin: 0 auto;
    overflow: hidden;
    min-height: 100%;

.topTitle {
    position: relative;
    top: 0;
    max-width: 640px;
    width: 100%;
    height: 45px;
    overflow: hidden;
    background: #b81c22;
    text-align: center;
    line-height: 4rem;
    .curTitle {
    display: inline-block;
    margin: 0 auto;
    font-size: 1em;
    color: #fff;
    width: 34px;
    height: 100%;
    text-align: center;
    line-height: 34px;
    position: absolute;
    top: 0;
    left: 165px;
    line-height: 40px;
    }
    .topBack {
    position: absolute;
    top: 50%;
    left: 2rem;
    transform: translateY(-50%) rotate(45deg);
    -webkit-transform: translateY(-50%) rotate(45deg);
    width: 1.4rem;
    height: 1.4rem;
    border-bottom: 2px solid #fff;
    border-left: 2px solid #fff;
    cursor: pointer;
}
}






}
form{
      margin: 0;
    padding: 0;
    line-height: 1.5;
    font-size: 11.25px；
    
    
    
}
.reg-input {
  padding: 2.5em 2em 0 2em;
  font-size: 11.25px;


}
input{
  width: 100%;
  height: 53.5px;
  border: rebeccapurple;
}
.box{
  width: 367px;
  height: 18px;
  
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 9px;
  font-size: 12.5px;
  color: #4c4c4c;
  
}
</style>
