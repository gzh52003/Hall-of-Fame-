/* 注册页 */

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
      <h2>欢迎注册</h2>
      <el-form-item label="用户名" prop="username">
        <el-input type="text" v-model="ruleForm.username" @blur="goblur"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="ruleForm.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button class="but" type="primary" @click="submitForm('ruleForm')">注册</el-button>
        <span style="margin-left:80px">
          已有账号，点击
          <a @click="goto" style="cursor:pointer;color:blue;">登录</a>
        </span>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import Signin from "@/api/signin"; //引入注册的请求方法

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
          //required是否必填，trigger校验触发条件-> blur:失去焦点，change:内容改变
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
      sign: "", //用户名校验标记
    };
  },

  components: {},

  methods: {
    goto() {
      this.$router.replace("/login");
    },

    //功能：用户框失去焦点，触发验证
    goblur() {
      //用户名格式正确，发送验证请求
      if (
        this.ruleForm.username &&
        this.ruleForm.username.length < 17 &&
        this.ruleForm.username.length > 1
      ) {
        this.checkUsername(this.ruleForm.username);
      }
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
      this.$refs[data].validate(async (vali) => {
        if (vali) {
          //表单验证通过
          if (this.sign) {
            //标签sign为true，允许发送请求
            const p = await Signin.reqSignin(
              this.ruleForm.username,
              this.ruleForm.password
            );
            if (p.data.state) {
              //注册成功，跳到登录页
              this.$message.success("注册成功！");
              this.$router.replace("/login");
            } else {
              //注册失败
              this.$message.error("注册失败！");
            }
          } else {
            //标签sign为false，提示用户名重复，不能注册
            this.$message.error("用户名重复！");
          }
        }
      });
    },

    //功能：验证用户名是否存在
    async checkUsername(username) {
      try {
        const p = await Signin.reqUsername(username);
        if (p.data.state) {
          //用户名存在，提示不能注册
          this.$notify({
            title: "提示",
            message: "这个名字太受欢迎啦，换一个吧！",
            type: "warning",
          });
          this.sign = false; //标记为false
        } else {
          //用户名不存在，可以注册
          this.sign = true;
        }
      } catch (error) {
        console.log("用户名验证请求出错", error);
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