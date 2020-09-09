/* 商品详情页 */
<template>
  <div>
    <!-- 头部导航 -->
    <van-sticky>
      <van-nav-bar title="商品详情" left-arrow @click-left="goto">
        <template #right>
          <van-icon color="rgb(122,144,250)" size="20" name="ellipsis" />
        </template>
      </van-nav-bar>
    </van-sticky>

    <!-- 商品详情 -->
    <van-image
      width="200"
      height="200"
      style="margin-left:84px"
      :src="goods.imgurl"
      @click="larger"
    />
    <div class="box">
      <h3 style="margin:0 0 10px 0">{{goods.name}}</h3>
      <van-tag round type="danger">爆款</van-tag>
      <p class="price">
        <del>{{goods.oldPrice}}</del>
        <span>{{goods.price}}</span>
      </p>
    </div>

    <!-- 商品推荐 -->
    <van-divider content-position="left" style="font-size:17px">推荐商品</van-divider>
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

    <!-- 底部商品导航 -->
    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" color="#07c160" />
      <van-goods-action-icon icon="cart-o" text="购物车" :badge="cartList.length" />
      <van-goods-action-icon icon="star" text="已收藏" color="#ff5000" />
      <van-goods-action-button type="warning" text="加入购物车" @click="toCart" />
      <van-goods-action-button type="danger" text="立即购买" @click="toBuy" />
    </van-goods-action>
  </div>
</template>

<script>
import request from "@/api/goodsApi";
import Vue from "vue";
import {
  NavBar,
  Image,
  ImagePreview,
  Tag,
  GoodsAction,
  GoodsActionIcon,
  GoodsActionButton,
  Grid,
  GridItem,
  Sticky,
  Divider,
} from "vant";
Vue.use(NavBar);
Vue.use(Image);
Vue.use(Tag);
Vue.use(GoodsAction);
Vue.use(GoodsActionButton);
Vue.use(GoodsActionIcon);
Vue.use(Grid);
Vue.use(GridItem);
Vue.use(Sticky);
Vue.use(Divider);

export default {
  data() {
    return {
      goods: [], //单条商品信息
      goodslist: [], //商品推荐的信息
    };
  },

  components: {},
  computed: {
    cartList() {
      //购物车中的商品
      return this.$store.state.goodslist;
    },
  },
  methods: {
    //功能：点击跳转到首页
    goto() {
      this.$router.replace("/home");
    },
    larger() {
      //点击显示大图
      ImagePreview([this.goods.imgurl]);
    },
    //功能：点击渲染当前数据
    toGoods(id) {
      this.$router.replace("/goodslist" + id);
      // window.location.reload();
    },

    //功能：渲染对应id的详情数据
    async detailsGoods(id) {
      const { data } = await request.reqGoods(id); //根据id请求数据信息
      this.goods = data.data[0];
    },
    //功能：请求推荐商品的数据
    async goodsList() {
      const { data: datalist } = await request.reqGoodslist(); //请求商品推荐数据
      this.goodslist = datalist.data;
    },
    
    //功能:点击商品加入购物车
    /* 商品存在,数量+1;不存在,购物车列表+1 */
    toCart() {
      const { id } = this.goods; //获取当前商品id
      const judgeCart = this.cartList.filter((item) => item.id == id)[0]; //获取相同id的商品
      if (judgeCart) {
        //存在,商品数量+1
        this.$store.commit("update", { id, sum: judgeCart.qty + 1 });
      } else {
        //不存在,购物车列表+1
        const goodsData = {
          ...this.goods,
          qty: 1,
        };
        this.$store.commit("addGoods", goodsData);
      }
    },

    //功能:点击购买,跳转到购物车页
    toBuy() {
      this.toCart();
      this.$router.replace("/cart");
    },
  },

  created() {
    //底部导航隐藏
    this.$parent.showMenu = false;
    //获取动态路由的id
    const { id } = this.$route.params;
    this.detailsGoods(id);
    this.goodsList();
  },

  //组件销毁函数
  destroyed() {
    //组件销毁时底部导航显示
    this.$parent.showMenu = true;
  },

  //组件内守卫
  //功能：点击推荐的商品显示到详情上
  beforeRouteUpdate(to, from, next) {
    if (to.params.id != from.params.id) {
      this.detailsGoods(to.params.id);
      this.goodsList();
    }
  },
};
</script>

<style scoped lang='scss'>
.box {
  padding: 0 14px;
  margin: 0 0 100px 0;
  span {
    font-size: 20px;
  }
}
p {
  margin: 0;
}
</style>