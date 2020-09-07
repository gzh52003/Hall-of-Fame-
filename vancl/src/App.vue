
<template>
  <div id="app">
    <router-view />
    <van-tabbar v-model="active" route>
      <van-tabbar-item v-for="item in navList" :to="item.path" :key="item.path" :icon="item.icon">{{item.text}}</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import Vue from "vue";
import { Tabbar, TabbarItem } from "vant";

Vue.use(Tabbar);
Vue.use(TabbarItem);

export default {
  data() {
    return {
      active: 0,
      navList: [
        {
          text: "凡客",
          name: "home",
          path: "/home",
          icon: "wap-home-o",
        },
        {
          text: "分类",
          name: "classify",
          path: "/classify",
          icon: "apps-o",
        },
        {
          text: "频道",
          name: "find",
          path: "/find",
          icon: "tv-o",
        },
        {
          text: "购物车",
          name: "cart",
          path: "/cart",
          icon: "shopping-cart-o",
        },
        {
          text: "我的",
          name: "mine",
          path: "/mine",
          icon: "contact",
        },
      ],
    };
  },
};
</script>


<style lang="scss">
</style>
