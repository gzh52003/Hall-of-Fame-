<template>
  <div>
    <!-- 头部 -->
    <van-nav-bar
      title="分类"
      left-arrow
      right-arrow
      style="background:brown;"
      @click-left="guo"
    >
      <van-icon name="arrow" />
    </van-nav-bar>
    <div class="main">
      <van-sidebar v-model="activeKey">
        <!-- 利用索引值改变字体颜色 -->
        <van-sidebar-item
          v-for="(item,index) in checkitem"
          :key="item.id"
          @click="clickCategory(index.id)"
          :class="{active:icon==index}"
          :title="item"
          class="sid"
        />
      </van-sidebar>
      <!-- 宫格 -->
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

  </div>
</template>
<script>
import Vue from "vue";
import { homeSwipt } from "@/api/goodsList";
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
      activeKey: 0,
      icon: 0,
      checkitem: [
        "推荐",
        '男装',
        '男鞋',
        '女鞋',
        '袜品',
        '家居',
        '女装',
        '童装',
        '内衣',
        '反季直降',
      ],
      goodsList: [],

    }
  },
  components: {},
  methods: {
    guo(id) {
      this.$router.replace("/home")
    },
    //点击实现字体变色
    // 实现点击时候进行数据改变的思路：利用id进行数据的更改，过滤数据进行页面重新渲染
    clickCategory(index, id) {
      this.icon = index
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
      this.$router.replace('/classification/' + id)
    }
  },
  created() {
    this.getlistgoods()
  },
}
</script>

<style scoped lang="scss">
.main {
  width: 100%;
  height: 100%;
  display: flex;
}

::v-deep .van-icon {
  color: aliceblue;
  font-size: 35px;
}
::v-deep .van-nav-bar__title {
  font-size: 20px;
  color: aliceblue;
}
.sid {
  height: 3px;
  line-height: 3px;
  text-align: center;
}
.gongge {
  width: 40px;

  .tu {
    width: 80px;
    height: 50px;
  }
  .text {
    font-size: 12px;
  }
}

.context {
  // padding-left: 80px;
  flex: 1;
  .gongge {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
  }
}

// 商品项选中变色
.active {
  color: #cc0000;
}
// ::v-deep .van-sidebar {
//   .van-sidebar-item:active {
//     color: #cc0000;
//   }
// }
</style>
