<template>
  <el-form
    :model="ruleForm"
    status-icon
    :rules="rules"
    ref="ruleForm"
    class="demo-ruleForm"
    style="width:300px; 
 margin:auto;
 background:#fff;
 padding:40px 100px;
 border-radius:10px;
 "
  >
    <el-form-item
      label="用户名："
      prop="username"
    >
      <el-input
        type="text"
        v-bind:value="ruleForm.username"
      ></el-input>
    </el-form-item>
    <!-- <el-form-item label="密码" prop="pass">
    <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
  </el-form-item>
  <el-form-item label="确认密码" prop="checkPass">
    <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
  </el-form-item> -->
    <el-form-item
      label="性别："
      prop="gender"
    >
      <el-select
        v-model.number="ruleForm.gender"
        style="width:100px"
      >
        <el-option
          lable="男"
          value="男"
        ></el-option>
        <el-option
          lable="女"
          value="女"
        ></el-option>
        <el-option
          lable="保密"
          value="保密"
        ></el-option>
      </el-select>
    </el-form-item>
    <el-form-item
      label="年龄:"
      prop="age"
    >
      <el-input v-model.number="ruleForm.age"></el-input>
    </el-form-item>
    <el-form-item style="margin:auto;">
      <el-button
        type="primary"
        @click="submitForm('ruleForm')"
      >提交</el-button>
      <el-button @click="resetForm('ruleForm')">重置</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
export default {
  data() {
    var checkAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('年龄不能为空'));
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error('请输入数字值'));
        } else {
          if (value < 18) {
            callback(new Error('必须年满18岁'));
          } else {
            callback();
          }
        }
      }, 1000);
    };
    return {
      ruleForm: {
        pass: '',
        checkPass: '',
        age: '',
        gender: "男",
        username: ''
      },
      rules: {
        age: [
          { validator: checkAge, trigger: 'blur' }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
}
</script>