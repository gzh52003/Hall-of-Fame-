<template>
  <el-form
    :model="ruleForm"
    :rules="rules"
    ref="ruleForm"
    label-width="100px"
    class="demo-ruleForm"
  >
    <el-form-item label="添加时间" required>
      <el-col :span="11">
        <el-form-item prop="date">
          <el-date-picker
            type="date"
            placeholder="选择日期"
            v-model="ruleForm.date"
            style="width: 80%;"
          ></el-date-picker>
        </el-form-item>
      </el-col>
    </el-form-item>
    <el-form-item label="商品名称" prop="name" style="width: 60%;">
      <el-input v-model="ruleForm.name"></el-input>
    </el-form-item>
    <el-form-item label="商品产地" prop="place" style="width: 60%;">
      <el-input v-model="ruleForm.place"></el-input>
    </el-form-item>
    <el-form-item label="商品价格" prop="price" style="width: 60%;">
      <el-input v-model="ruleForm.price"></el-input>
    </el-form-item>
    <el-form-item label="商品编码" prop="zip" style="width: 60%;">
      <el-input v-model="ruleForm.zip"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm('ruleForm')">立即添加</el-button>
      <el-button @click="resetForm('ruleForm')">重置</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
        date: "",
        name: "",
        place: "",
        price: "",
        zip: "",
      },
      rules: {
        date: [
          {
            type: "date",
            required: true,
            message: "请选择日期",
            trigger: "change",
          },
        ],
        name: [
          { required: true, message: "请输入商品名称", trigger: "blur" },
          { min: 1, message: "长度至少1字符", trigger: "blur" },
        ],
        place: [{ required: true, message: "请输入商品产地", trigger: "blur" }],
        price: [{ required: true, message: "请输入商品价格", trigger: "blur" }],
        zip: [{ required: true, message: "请输入商品编码", trigger: "blur" }],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$message({
            message: "商品信息添加成功",
            type: "success",
          });
        } else {
          this.$message.error("商品信息有误请重新填写");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>

<style scoped>
</style>