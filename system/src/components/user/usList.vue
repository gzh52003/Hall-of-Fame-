<template>
  <div>
    <el-table
      ref="multipleTable"
      :data="tableData"
      tooltip-effect="dark"
      style="width: 100%"
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column label="序号" width="120" prop="id"></el-table-column>
      <el-table-column prop="username" label="用户名" width="120"></el-table-column>
      <el-table-column prop="age" label="年龄" show-overflow-tooltip></el-table-column>
    </el-table>
  </div>
</template>

<script>
import test from "@/api/test";

export default {
  data() {
    return {
      tableData: [],
    };
  },
  components: {},

  methods: {
    async git() {
      try {
        let { data } = await test.getList();
        this.tableData = data.data;
        console.log("请求成功", data.data);
      } catch (error) {
        console.log("错误为", error);
      }
    },
  },
  created() {
    this.git();
  },
};
</script>

<style scoped>
</style>