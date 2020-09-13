<template>
  <div>
    <el-header style="height:50px;line-height:50px;margin-bottom:50px">修改用户</el-header>
    <el-form
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
      class="demo-ruleForm"
      style="width:300px;margin:auto;background:#fff;border-radius:10px;padding:40px 100px;position:relative"
    >
      <el-button
        type="danger"
        plain
        size="mini"
        @click="resetForm"
        icon="el-icon-close"
        circle
        style=" position: absolute;right:40px;top:30px"
      ></el-button>
      <el-form-item label="用户名：" prop="username">
        <el-input type="text" :disabled="true" v-bind:value="ruleForm.username"></el-input>
      </el-form-item>
      <el-form-item label="性别：" prop="gender">
        <el-select v-model.number="ruleForm.gender" style="width:100px">
          <el-option value="男"></el-option>
          <el-option value="女"></el-option>
          <el-option value="保密"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="年龄:" prop="age">
        <el-input v-model.number="ruleForm.age"></el-input>
      </el-form-item>
      <el-form-item label="日期:" prop>
        <el-date-picker
          v-model="dateValue"
          type="date"
          placeholder="选择日期"
          format="yyyy 年 MM 月 dd 日"
          value-format="yyyy-MM-dd"
        ></el-date-picker>
      </el-form-item>
      <el-form-item style="margin:auto;">
        <el-popconfirm title="确定提交修改吗？" @onConfirm="submitForm" cancelButtonType="success">
          <el-button type="primary" slot="reference" plain>提交修改</el-button>
        </el-popconfirm>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import userApi from "@/api/user"; //引入请求

export default {
  data() {
    //表单校验规则
    var checkAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("年龄不能为空"));
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error("请输入数字值"));
        } else {
          if (value > 199) {
            this.sign = false;
            callback(new Error("年龄过大！"));
          } else if (value < 1) {
            this.sign = false;
            callback(new Error("年龄过小！"));
          } else {
            this.sign = true;
            callback();
          }
        }
        this.sign = true;
      }, 500);
    };
    //数据
    return {
      ruleForm: {
        username: "",
        gender: "",
        age: "",
      },
      tabGender: "", //性别标识
      tabAge: "", //年龄标识
      sign: "", //数据是否符合规则标识
      rules: {
        age: [{ validator: checkAge, trigger: "blur" }],
      },
      dateValue: "", //日期
      tabDate: "", //日期修改标识
    };
  },
  methods: {
    //功能：确认按钮触发事件
    async submitForm() {
      //判断数据有无修改
      if (
        this.ruleForm.gender == this.tabGender &&
        this.ruleForm.age == this.tabAge &&
        this.dateValue == this.tabDate
      ) {
        //表单无修改，不发送请求，弹框提示
        this.$message({
          showClose: true,
          message: "数据无修改！",
          type: "warning",
        });
      } else if (
        //只修改日期
        this.ruleForm.gender == this.tabGender &&
        this.ruleForm.age == this.tabAge &&
        this.dateValue !== this.tabDate
      ) {
        this.reqAlter();
      } else if (
        //只修改性别
        this.ruleForm.gender !== this.tabGender &&
        this.ruleForm.age == this.tabAge &&
        this.dateValue == this.tabDate
      ) {
        this.reqAlter();
      } else {
        //表单修改了，发送请求
        if (this.sign) {
          //数据符合规则，发送请求
          this.reqAlter();
        } else {
          //数据不符规则，弹框提示
          this.$message({
            showClose: true,
            message: "请输入正确年龄！",
            type: "warning",
          });
        }
      }
    },

    //功能：取消按钮触发事件
    resetForm() {
      this.$router.replace("/main/user/usList");
      this.$message({
        showClose: true,
        message: "取消修改！",
      });
    },

    //功能：发送修改请求
    async reqAlter() {
      try {
        if (this.dateValue == null) {
          this.dateValue = "";
        }
        const p = await userApi.reqAlterUser(
          this.$route.params.id,
          this.ruleForm.gender,
          this.ruleForm.age,
          this.dateValue
        );
        if (p.data.state) {
          //请求成功
          this.$message({
            showClose: true,
            message: "修改成功！",
            type: "success",
          });
          //页面跳转
          this.$router.replace("/main/user/usList");
        } else {
          //请求失败
          this.$message({
            showClose: true,
            message: "修改失败！",
            type: "error",
          });
        }
      } catch (error) {
        console.log("修改用户查询失败", error);
      }
    },
  },

  //功能：页面创建即获取动态路由id，发送请求获取这条用户数据
  async created() {
    try {
      //请求成功
      const p = await userApi.reqUserOdd(this.$route.params.id);
      if (p.data.state) {
        //查询成功，渲染数据
        this.ruleForm = p.data.data[0];
        this.tabGender = p.data.data[0].gender;
        this.tabAge = p.data.data[0].age;
        this.dateValue = this.tabDate = p.data.data[0].date;
      } else {
        console.log("查询失败");
      }
    } catch (error) {
      //请求失败
      console.log("请求单条用户数据失败", error);
    }
  },
};
</script>