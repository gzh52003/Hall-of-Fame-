<template>
  <div>
    <el-header style="height:50px;line-height:50px;margin-bottom:20px">添加订单</el-header>
    <el-table :data="tableData" style="width: 100%" max-height="700">
      <el-table-column fixed type="index" label="序号" sortable width="120"></el-table-column>
      <el-table-column fixed prop="name" label="商品名称" min-width="320"></el-table-column>
      <el-table-column prop="date" label="添加日期" width="220"></el-table-column>
      <el-table-column prop="oldPrice" label="售价" width="220"></el-table-column>
      <el-table-column prop="price" label="活动价" width="220"></el-table-column>
      <el-table-column prop="qty_sum" label="库存" width="220"></el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
          <el-button type="text" size="small">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [],
    };
  },

  components: {},

  methods: {
    handleClick() {},
  },
};
</script>

<style scoped>
</style>