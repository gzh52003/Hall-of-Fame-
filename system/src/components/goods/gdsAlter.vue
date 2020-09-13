<template>
<div>
 <el-header style="height:50px;line-height:50px;margin-bottom:20px">修改商品</el-header>
  <!-- 列表 -->
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
import request from "@/api/goodslist";
export default {
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1517 弄",
          zip: 200333,
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1519 弄",
          zip: 200333,
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1516 弄",
          zip: 200333,
        },
      ],
    };
  },
  methods: {
    handleClick(row) {
      console.log(row);
    },
  },
  async created() {
    const { data } = await request.reqgoodslist();
    this.tableData = data.data;
  },
};
</script>

<style scoped>
</style>