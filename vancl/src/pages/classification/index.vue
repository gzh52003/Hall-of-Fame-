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
          <h4 class="text">{{item.name}}</h4>
          <span style="color:red">￥{{item.price}}</span>
        </van-grid-item>
      </van-grid>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
//import { homeSwipt } from "@/api/goodsList";
import { Toast, NavBar } from 'vant';
import { Sidebar, SidebarItem } from 'vant';
import { Grid, GridItem } from 'vant';
import { Icon } from 'vant';

Vue.use(Icon);
Vue.use(Grid);
Vue.use(GridItem);
Vue.use(Sidebar);
Vue.use(SidebarItem);
Vue.use(Toast);
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
        const { data } = await homeSwipt(12);
        this.goodsList = data.data;
        //console.log('数据', data.data);
      } catch (error) {
        //console.log(error);
      }
    },
    //点击获取商品的详细信息
    gotolist(id) {
      this.$router.replace('/goodslist/' + id)
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
</style>