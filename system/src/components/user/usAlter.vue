<template>
  <div
    class="block;"
  >
    <el-row  style="margin:30px">
      <el-col :span="12">
        <el-date-picker
          v-model="value2"
          align="right"
          type="date"
          placeholder="选择修改日期"
          :picker-options="pickerOptions"
        >
        </el-date-picker>
      </el-col>
    </el-row>
    <el-row  style="margin:30px">
     <el-col :span="12">
        <el-input
          v-model="input"
          placeholder="请输入修改地址"
          clearable
          style="width:300px"
        ></el-input>
      </el-col>
       </el-row>
    <el-col :span="12"  style="margin:30px">
        <el-button
          type="primary"
          @click="submitForm('ruleForm')"
        >提交</el-button>
      </el-col>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: "",
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
        shortcuts: [{
          text: '今天',
          onClick(picker) {
            picker.$emit('pick', new Date());
          }
        }, {
          text: '昨天',
          onClick(picker) {
            const date = new Date();
            date.setTime(date.getTime() - 3600 * 1000 * 24);
            picker.$emit('pick', date);
          }
        }, {
          text: '一周前',
          onClick(picker) {
            const date = new Date();
            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
            picker.$emit('pick', date);
          }
        }]
      },
      value1: '',
      value2: '',

    }
  },

  components: {},

  methods: {}
}
</script>

<style scoped>
</style>