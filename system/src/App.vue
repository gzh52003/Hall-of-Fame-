/* 入口文件的渲染结构 */
/* 用编程式导航做单页面 */
<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      links: [
        {
          title: "首页",
          path: "/home",
          icon: "el-icon-s-home",
        },
        {
          title: "用户管理",
          path: "/user",
          icon: "el-icon-user-solid",
          childList: [
            {
              title: "用户列表",
              path: "/usList",
            },
            {
              title: "添加用户",
              path: "/usAdd",
            },
            {
              title: "编辑用户",
              path: "/usAlter",
            }
          ],
        },
        {
          title: "商品管理",
          path: "/goods",
          icon: "el-icon-box",
          childList: [
            {
              title: "商品列表",
              path: "/gdsList",
            },
            {
              title: "添加商品",
              path: "/gdsAdd",
            },
            {
              title: "修改商品",
              path: "/gdsAlter",
            },
          ],
        },
        {
          title: "订单管理",
          path: "/order",
          icon: "el-icon-s-claim",
          childList: [
            {
              title: "订单列表",
              path: "/ordList",
            },
            {
              title: "添加订单",
              path: "/ordAdd",
            },
            {
              title: "修改订单",
              path: "/ordAlter",
            },
          ],
        },
      ],
      activeIndex: "/home",
    };
  },
  methods: {
    goto(data) {
      this.$router.push(data); //编程式导航
      // this.idx = data;
    },
  },
  components: {},
};
</script>

<style lang="scss">
html,
body {
  margin: 0;
  height: 100%;
}
#app {
  height: 100%;
}
.el-container {
  height: 100%;
}

//头部
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
  font-size: 20px;
  color: rgb(196, 133, 60);
  //log标题
  .el-icon-s-tools {
    font-size: 24px;
    vertical-align: middle;
    margin: 0 10px;
  }

  //登陆注册
  .el-link {
    margin: 0 10px 0 0;
    float: right;
  }
}

//导航栏
.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
  height: 100%;
}

//内容区
.el-main {
  background-color: #e9eef3;
  color: #333;
  // text-align: center;
  // line-height: 160px;
  .el-breadcrumb {
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid green;
    margin-bottom: 8px;
  }
}
</style>
