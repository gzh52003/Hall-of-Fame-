<template>
  <el-table :data="tableData" style="width: 100%" max-height="500">
    <el-table-column fixed prop="date" label="添加日期" width="150"></el-table-column>
    <el-table-column prop="name" label="商品名称" width="200"></el-table-column>
    <el-table-column prop="place" label="产地" width="120"></el-table-column>
    <el-table-column prop="price" label="售价" width="150"></el-table-column>
    <el-table-column prop="zip" label="商品编号" width="200"></el-table-column>
    <el-table-column label="操作" width="120">
      <template slot-scope="scope">
        <el-button
          @click.native.prevent="deleteRow(scope.$index, tableData)"
          type="text"
          size="small"
        >移除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  methods: {
    deleteRow(index, rows) {
      rows.splice(index, 1);
    },
  },
  data() {
    return {
      tableData: [
        {
          date: "2020-05-03",
          name: "王小虎",
          place: "上海",
          price: "1299",
          zip: 6901285991219,
        },
        {
          date: "2020-05-02",
          name: "王小虎",
          place: "上海",
          price: "1299",
          zip: 6901285991219,
        },
        {
          date: "2020-05-04",
          name: "王小虎",
          place: "上海",
          price: "1299",
          zip: 6901285991219,
        },
        {
          date: "2020-05-01",
          name: "王小虎",
          place: "上海",
          price: "1299",
          zip: 6901285991219,
        },
        {
          date: "2020-05-01",
          name: "王小虎",
          place: "上海",
          price: "1299",
          zip: 6901285991219,
        },
        {
          date: "2020-05-01",
          name: "王小虎",
          place: "上海",
          price: "1299",
          zip: 6901285991219,
        },
        {
          date: "2020-05-01",
          name: "王小虎",
          place: "上海",
          price: "1299",
          zip: 6901285991219,
        },
        {
          date: "2020-05-01",
          name: "王小虎",
          place: "上海",
          price: "1299",
          zip: 6901285991219,
        },
        {
          date: "2020-05-01",
          name: "王小虎",
          place: "上海",
          price: "1299",
          zip: 6901285991219,
        },
        {
          date: "2020-05-01",
          name: "王小虎",
          place: "上海",
          price: "1299",
          zip: 6901285991219,
        },
        {
          date: "2020-05-01",
          name: "王小虎",
          place: "上海",
          price: "1299",
          zip: 6901285991219,
        },
        {
          date: "2020-05-01",
          name: "王小虎",
          place: "上海",
          price: "1299",
          zip: 6901285991219,
        },
        {
          date: "2020-05-01",
          name: "王小虎",
          place: "上海",
          price: "1299",
          zip: 6901285991219,
        },
        {
          date: "2020-05-08",
          name: "王小虎",
          place: "上海",
          price: "1299",
          zip: 6901285991219,
        },
        {
          date: "2020-05-06",
          name: "王小虎",
          place: "上海",
          price: "1299",
          zip: 6901285991219,
        },
        {
          date: "2020-05-07",
          name: "王小虎",
          place: "上海",
          price: "1299",
          zip: 6901285991219,
        },
      ],
    };
  },
};
</script>

<style scoped>
</style>