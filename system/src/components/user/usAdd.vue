<template>
  <el-form
    :model="ruleForm"
    status-icon
    :rules="rules"
    ref="ruleForm"
    class="demo-ruleForm"
    style="width:300px; margin:auto;background:#fff;padding:40px 100px;border-radius:10px;position:relative"
  >
    <!-- 退出按钮 -->
    <el-button
      type="danger"
      plain
      size="mini"
      @click="cancel"
      icon="el-icon-close"
      circle
      style=" position: absolute;right:40px;top:30px"
    ></el-button>
    <!-- 重置按钮 -->
     <el-button
      type="success"
      plain
      size="mini"
      @click="resetForm('ruleForm')"
      icon="el-icon-refresh"
      circle
      style=" position: absolute;right:80px;top:30px"
    ></el-button>
    <el-form-item label="用户名：" prop="username">
      <el-input type="text" clearable v-model.trim="ruleForm.username" @blur="verify"></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="pass">
      <el-input type="password" clearable v-model.trim="ruleForm.pass" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="确认密码" prop="checkPass">
      <el-input type="password" clearable v-model.trim="ruleForm.checkPass" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="性别：" prop="gender">
      <el-select v-model.number="ruleForm.gender" style="width:100px">
        <el-option value="男"></el-option>
        <el-option value="女"></el-option>
        <el-option value="保密"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="年龄:" prop="age">
      <el-input clearable v-model.number="ruleForm.age"></el-input>
    </el-form-item>
    <el-form-item style="margin:auto;">
      <el-popconfirm title="确定添加这个用户吗？" @onConfirm="submitForm('ruleForm')" cancelButtonType="success">
        <el-button type="primary" slot="reference" plain>添加</el-button>
      </el-popconfirm>
    </el-form-item>
  </el-form>
</template>
<script>
import userApi from "@/api/user";

export default {
  data() {
    //定义年龄校验规则
    var checkAge = (rule, value, callback) => {
      if (!value) {
        //return callback(new Error("年龄不能为空"));
        callback();
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error("请输入数字值"));
        } else {
          if (value < 1) {
            callback(new Error("必须年满1岁"));
          } else {
            callback();
          }
        }
      }, 500);
    };
    //定义密码一次校验规则
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    //定义密码二次校验规则
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };

    return {
      ruleForm: {
        username: "",
        pass: "",
        checkPass: "",
        gender: "",
        age: "",
      },
      sign: "", //标识

      //使用定义校验规则
      rules: {
        //用户名校验
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          {
            min: 2,
            max: 16,
            message: "长度在 2 到 16 个字符",
            trigger: "change",
          },
        ],
        //密码校验
        pass: [
          { required: true, validator: validatePass, trigger: "blur" },
          {
            min: 4,
            max: 16,
            message: "长度在 4 到 16 个字符",
            trigger: "change",
          },
        ],
        checkPass: [
          { required: true, validator: validatePass2, trigger: "blur" },
          {
            min: 4,
            max: 16,
            message: "长度在 4 到 16 个字符",
            trigger: "change",
          },
        ],
        //年龄校验
        age: [{ validator: checkAge, trigger: "blur" }],
      },
    };
  },
  methods: {
    //功能：点击提交发送请求
    submitForm(data) {
      this.reqUsername();
      //表单验证
      //$refs[data]获取到表单内容，vali为表单验证结果
      this.$refs[data].validate(async (vali) => {
        if (vali && this.sign) {
          //表单验证通过，校验年龄
          if (
            this.ruleForm.age &&
            (this.ruleForm.age < 1 || this.ruleForm.age > 199)
          ) {
            //年龄不符
            this.$message({
              showClose: true,
              message: "请输入正确年龄！",
              type: "error",
            });
          } else {
            //年龄正确，发送添加用户请求
            try {
              const p = await userApi.reqAdd(
                this.ruleForm.username,
                this.ruleForm.checkPass,
                this.ruleForm.gender,
                this.ruleForm.age
              );
              if (p.data.state) {
                //添加成功，重置表单
                 this.resetForm('ruleForm');
                this.$message({
                  showClose: true,
                  message: "添加用户成功！",
                  type: "success",
                });
              } else {
                //添加失败
                this.$message({
                  showClose: true,
                  message: "添加用户失败！",
                  type: "error",
                });
              }
            } catch (error) {
              //请求失败
              console.log("请求添加用户失败", error);
            }
          }
        }
      });
    },

    //功能：用户名校验
    async reqUsername() {
      try {
        const p = await userApi.reqUsername(this.ruleForm.username);
        if (p.data.state) {
          //用户名已存在，不能添加
          this.$message({
            showClose: true,
            message: "此用户已存在，请换一个添加！",
            type: "warning",
          });
          this.sign = false;
        } else {
          //用户名不存在
          this.sign = true;
        }
      } catch (error) {
        console.log("验证用户名查询失败", error);
      }
    },

    //功能：失去焦点请求校验用户名是否存在
    async verify() {
      if (this.ruleForm.username != "") {
        //用户框不为空，发送验证
        this.reqUsername();
      } else {
        //用户框为空
        this.sign = false;
      }
    },

    //功能：取消按钮触发事件
    cancel() {
      this.$router.replace("/main/user/usList");
      this.$message({
        showClose: true,
        message: "取消添加用户！",
      });
    },

    //功能：点击触发重置表单
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>
<style lang="scss" scoped>
</style>