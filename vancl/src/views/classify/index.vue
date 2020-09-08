<template>
  <div>
     分类
  </div>
</template>
<script>
import Vue from "vue";
import request from "@/api/goodsApi";
import { Toast, NavBar } from 'vant';
import { Sidebar, SidebarItem } from 'vant';
import { Grid, GridItem } from 'vant';
import { Icon } from 'vant';

export default {
  data() {
      return {

    }
  },
  components: {},
  methods: {
    guo(id) {
      this.$router.replace("/home")
    },
    //点击实现字体变色
    // 实现点击时候进行数据改变的思路：利用id进行数据的更改，过滤数据进行页面重新渲染
    clickCategory(index) {
      this.icon = index
    },
    // goodlis数据
    async getlistgoods() {
      try {
        const { data } = await request.reqGoodslist(12);
        this.goodsList = data.data;
        //console.log('数据', data.data);
      } catch (error) {
        //console.log(error);
      }
  },

  components:{},

   methods:{}
}
}
</script>

<style scoped>

</style>