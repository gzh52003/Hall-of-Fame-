/* 主页面 */

<template>
  <div id="box">
    <el-container>
      <!-- 头部 -->
      <el-header style="padding:0">
        <el-row style="height:100%">
          <el-col :span="12" style="height:100%">
            <i class="el-icon-s-tools"></i>后台管理系统
          </el-col>
          <el-col :span="12" style="height:100%">
            <el-link :underline="false">
              <!-- 下拉菜单 -->
              <el-dropdown @command="handleCommand">
                <span class="el-dropdown-link">
                  <a class="welcome">欢迎</a>
                  {{name ? name : '请登录' }}
                  <i
                    class="el-icon-arrow-down el-icon--right"
                  ></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item command="a" icon="el-icon-s-tools">设置</el-dropdown-item>
                  <el-dropdown-item command="b" icon="el-icon-warning">退出</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </el-link>
          </el-col>
        </el-row>
      </el-header>

      <el-container>
        <!--导航栏 -->
        <el-aside width="200px">
          <el-menu
            unique-opened
            active-text-color="red"
            :default-active="activeIndex"
            style="background-color:rgb(211,220,230)"
          >
            <template v-for="item in links">
              <!-- 单层路径 -->
              <el-menu-item
                :index="item.path"
                :key="item.path"
                @click="goto(item.path)"
                v-if="!item.childList"
              >
                <i :class="item.icon"></i>
                <span slot="title">{{item.title}}</span>
              </el-menu-item>

              <!-- 多层路径 -->
              <el-submenu :key="item.path" :index="item.path" @click="goto(item.path)" v-else>
                <template v-slot:title>
                  <i :class="item.icon"></i>
                  {{item.title}}
                </template>
                <el-menu-item
                  :key="chi.path"
                  :index="item.path+chi.path"
                  @click="goto(item.path+chi.path)"
                  v-for="chi in item.childList"
                >{{chi.title}}</el-menu-item>
              </el-submenu>
            </template>
          </el-menu>
        </el-aside>

        <!-- 内容区 -->
        <el-main style="padding-top:6px">
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>活动管理</el-breadcrumb-item>
            <el-breadcrumb-item>活动列表</el-breadcrumb-item>
            <el-breadcrumb-item>活动详情</el-breadcrumb-item>
          </el-breadcrumb>
          <!-- 子组件渲染位置 -->
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import login from "@/api/login";

export default {
  data() {
    return {
      links: [
        {
          title: "首页",
          path: "/main/home",
          icon: "el-icon-s-home",
        },
        {
          title: "用户管理",
          path: "/main/user",
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
            /*  {
              title: "修改用户",
              path: "/usAlterid",
            }, */
          ],
        },
        {
          title: "商品管理",
          path: "/main/goods",
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
          path: "/main/order",
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
      activeIndex: "/main/home",
      name: localStorage.getItem("system-username"),
    };
  },
  methods: {
    //功能：页面跳转
    goto(data) {
      this.$router.push(data); //编程式导航
    },

    //功能：点击触发退出登录
    handleCommand(command) {
      if (command != "a") {
        //调用退出登录方法
        this.toOut();
      }
    },

    //功能：退出登录方法
    async toOut() {
      try {
        //获取token
        let token = localStorage.getItem("system-token");
        const p = await login.reqToken(token); //验证token有效性
        if (p.data.state) {
          //成功:1、清除本地信息
          localStorage.removeItem("system-token");
          localStorage.removeItem("system-username");
          //2、跳转登录页面
          this.goto("/login");
          //退出成功提示弹框
          this.$message({
            showClose: true,
            message: "退出成功！",
            type: "success",
          });
        } else {
          //退出失败弹框
          this.$message({
            showClose: true,
            message: "退出失败",
            type: "error",
          });
        }
      } catch (error) {
        console.log("退出错误为：", error);
      }
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
#box {
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
  .el-breadcrumb {
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid green;
    margin-bottom: 8px;
  }
}
.el-dropdown-link {
  color: rgb(254,240,240);
  font-size: 16px;
  .welcome {
    color: rgb(64,158,255);
    font-size: 15px;
  }
}
</style>
