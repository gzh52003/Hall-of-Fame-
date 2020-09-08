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

<style scoped lang="scss">
::v-deep .van-icon {
  color: aliceblue;
  font-size: 35px;
}
::v-deep .van-nav-bar__title {
  font-size: 20px;
  color: aliceblue;
}
.facx {
  position: relative;
  margin-bottom: 10px;

  .icon {
    float: left;
  }
  .flas {
    position: absolute;
    top: 30px;
    left: 42%;
  }
  .icons {
    top: 15px;
    right: 10px;
    font-size: 20px;
    color: lavenderblush;
    position: absolute;
  }
  .buttom {
    height: 20px;
    font-size: 12px;
    position: absolute;
    top: 120px;
    left: 42%;
  }
  .sizes {
    width: 100%;
    font-size: 11px;
    color: #fff;
    position: absolute;
    top: 80%;
  }
}
.background {
  padding: 5px 0;
  background: lavender;
  .caidan {
    font-size: 12px;
    line-height: 30px;
  }
  .icona {
    margin-left: 80%;
    color: #ccc;
    line-height: 30px;
  }
}

.goods {
  width: 40px;
  height: 40px;
}
.strings {
  margin-top: 0px;
  font-size: 12px;
}
</style>