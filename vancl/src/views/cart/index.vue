/* 购物车页 */

<template>
  <div>
    <!-- 头部导航 -->
    <van-sticky>
      <van-nav-bar title="购物车" left-arrow @click-left="goto">
        <template #right>
          <van-icon color="rgb(122,144,250)" size="20" name="ellipsis" />
        </template>
      </van-nav-bar>
    </van-sticky>

    <!-- 商品列表 -->
    <van-swipe-cell v-for="item in goodslist" :key="item.id" style="margin-bottom:10px">
      <van-card :price="item.price" :desc="item.name" title="凡客单品" :thumb="item.imgurl">
        <!-- 价格信息 -->
        <!-- 插槽定义方式:
                      1.  v-slot:属性名
                      2.  #属性名
        -->
        <template #price>
          <p class="price">
            <del style="margin-right:2px">{{item.oldPrice}}</del>
            <span style="font-size:14px">{{item.price}}</span>
            <van-stepper v-model="item.qty" theme="round" button-size="18" disable-input />
          </p>
        </template>
        <template #tag>
          <van-checkbox v-model="item.checked"></van-checkbox>
        </template>
      </van-card>

      <!-- 侧滑删除按钮 -->
      <template #right>
        <van-button square text="删除" type="danger" class="delete-button" />
      </template>
    </van-swipe-cell>

    <!-- 底部提交订单栏 -->
    <van-submit-bar :price="totalPrice" button-text="提交订单" @submit="onSubmit">
      <van-checkbox v-model="checkAll">全选</van-checkbox>
    </van-submit-bar>
  </div>
</template>

<script>
import request from "@/api/goodsApi";
import Vue from "vue";
import {
  Card,
  NavBar,
  DropdownMenu,
  DropdownItem,
  SwipeCell,
  Sticky,
  Button,
  SubmitBar,
  Checkbox,
  Stepper,
} from "vant";

Vue.use(Card);
Vue.use(NavBar);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(SwipeCell);
Vue.use(Sticky);
Vue.use(Button);
Vue.use(SubmitBar);
Vue.use(Checkbox);
Vue.use(Stepper);

export default {
  data() {
    return {};
  },

  //计算属性：监听data数据的变化
  computed: {
    goodslist() {
      return this.$store.state.goodslist;
    },
    //计算总价，pre为初始值
    totalPrice() {
      return this.goodslist.reduce(
        (pre, item) => pre + item.price * item.qty * 100,
        0
      );
    },
    //全选按钮功能
    checkAll: {
      get() {
        //多个控制单个
        return this.goodslist.every((item) => item.checked);
      },
      set(val) {
        //设置其他都勾选(单个控制多个)
        this.goodslist = this.goodslist.map((item) => {
          item.checked = val;
          return item;
        });
      },
    },
  },

  methods: {
    goto() {
      this.$router.push("/home");
    },
    onSubmit() {},
  },

  async created() {
    //底部导航栏隐藏
    this.$parent.showMenu = false;
    // const { data } = await request.reqGoodslist(3);
    // this.goodslist = data.data;
  },

  beforeRouteUpdate() {
    //组件销毁时，底部导航栏显示
    this.$parent.showMenu = true;
  },
};
</script>

<style scoped leng='scss'>
.delete-button {
  height: 100%;
}
</style>