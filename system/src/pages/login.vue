/* 登录页 */

<template>
  <div id="box">
    <el-form
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="form"
    >
      <h2>后台管理系统</h2>
      <el-form-item label="用户名" prop="username">
        <el-input type="text" v-model="ruleForm.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="ruleForm.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button class="but" type="primary" @click="submitForm('ruleForm')">登录</el-button>
        <!-- <el-button type="primary" @click="goto">注册</el-button> -->
        <span style="margin-left:80px">
          没有账号，点击
          <a @click="goto" style="cursor:pointer;color:blue;font-weight:900">注册</a>
        </span>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import Login from "@/api/login"; //引入请求的方法

export default {
  data() {
    return {
      ruleForm: {
        username: "",
        password: "",
      },

      //表单验证
      rules: {
        //用户名验证
        username: [
          //required是否必填，trigger校验触发条件,blur:失去焦点，change:内容改变
          { required: true, message: "请输入用户名", trigger: "blur" },
          {
            min: 2,
            max: 16,
            message: "长度在 2 到 16 个字符",
            trigger: "change",
          },
        ],
        //密码验证
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            min: 4,
            max: 16,
            message: "长度在 4 到 16 个字符",
            trigger: "change",
          },
        ],
      },
    };
  },

  components: {},

  methods: {
    goto() {
      this.$router.replace("/signin");
    },

    submitForm(data) {
      //任一输入框为空时弹框提醒
      if (!(this.ruleForm.username != "" && this.ruleForm.password != "")) {
        this.$message({
          showClose: true,
          message: "账号或密码不能为空！",
          type: "error",
        });
      }
      //$refs[data]获取到表单内容，vali为表单验证结果
      this.$refs[data].validate((vali) => {
        if (vali) {
          //验证通过，发送登录请求
          this.checkLogin();
        }
      });
    },

    //登录请求方法
    async checkLogin() {
      //验证用户名是否存在
      this.checkUsername(this.ruleForm.username);
    },

    //功能：验证用户名是否存在
    async checkUsername(username) {
      try {
        const p = await Login.reqUsername(username);
        if (!p.data.state) {
          //用户名不存在，提示去注册
          this.$message.warning({
          showClose: true,
          message: '用户名不存在，请注册',
        });
        } else {
          //用户名存在，正常登录
          try {
            const p = await Login.reqLogin(
              this.ruleForm.username,
              this.ruleForm.password
            );
            if (p.data.state) {
              //账号密码正确
              //发送token请求
              this.checkToken(p.data.token);
            } else {
              //提示弹框
              this.$message({
                showClose: true,
                message: "账号或密码不正确！",
                type: "error",
              });
            }
          } catch (error) {
            console.log("错误", error);
          }
        }
      } catch (error) {
        console.log("验证用户名请求失败", error);
      }
    },

    //token请求方法
    async checkToken(token) {
      try {
        const p = await Login.reqToken(token);
        // console.log("token请求", p.data);
        if (p.data.state) {
          //真正登陆成功
          //token正确，1、存储数据到localstorage，2、页面跳转，
          this.$message({
            //消息弹框
            showClose: true,
            message: "登录成功！",
            type: "success",
          });
          //1、存储用户名和token到本地
          localStorage.setItem("system-username", this.ruleForm.username);
          localStorage.setItem("system-token", token);
          //2、跳转，编程式导航
          this.$router.push("/main");
        }
      } catch (error) {
        console.log("错误为：", error);
      }
    },
  },
};
</script>

<style scoped>
#box {
  background: url("../assets/ba1.jpg");
  display: flex;
}
.form {
  width: 460px;
  height: 320px;
  margin: auto;
  background-color: rgba(255, 255, 255, 0.815);
  padding: 30px 40px 0 0;
  border-radius: 14px;
}
.but {
  margin-left: 60px;
}
h2 {
  text-align: center;
  color: rgb(17, 158, 223);
}
</style>