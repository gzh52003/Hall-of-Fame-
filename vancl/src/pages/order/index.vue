<template>
  <div>
    <van-nav-bar
      title="全部订单"
      left-arrow
      style="background:brown;"
      @click-left="guo"
    >
    </van-nav-bar>
    <van-tabs v-model="active">
      <van-tab title="全部">暂时没有查到相应的订单</van-tab>
      <van-tab title="配送中">配送中的订单</van-tab>
      <van-tab title="已完成">配送完成订单</van-tab>
      <van-tab title="无效">无效订单</van-tab>
    </van-tabs>
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
  Tabbar,
  TabbarItem,
  Tab, Tabs,

} from 'vant';
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Button);
Vue.use(Grid);
Vue.use(GridItem);
Vue.use(Sidebar);
Vue.use(SidebarItem);
Vue.use(Toast);
Vue.use(NavBar)
Vue.use(Tab);
Vue.use(Tabs);
export default {
  data() {
    return {
      active: 2,
    }
  },
  components: {
  },
  methods: {
    guo(id) {
      this.$router.replace("/classify")
    },

  }
}
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