<template>
  <div style="height:90%">
    <!-- 查询框 -->
    <el-row :gutter="100" type="flex" justify="left" style="margin:30px 0px;">
      <el-col>
        <el-button type="success" icon="el-icon-back" plain circle v-if="sign" @click="goBack"></el-button>
        <el-input
          v-model.trim="search"
          placeholder="通过商品 ID 查询"
          clearable
          style="width:200px;margin:0 10px"
        ></el-input>
        <el-button type="primary" icon="el-icon-search" @click="Search">查询商品</el-button>
      </el-col>
    </el-row>
    <!-- 列表 -->
    <el-table :data="tableData" style="width: 100%" max-height="700">
      <el-table-column fixed type="index" label="序号" sortable width="120"></el-table-column>
      <el-table-column fixed prop="name" label="商品名称" min-width="320"></el-table-column>
      <el-table-column prop="date" label="添加日期" width="220"></el-table-column>
      <el-table-column prop="oldPrice" label="售价" width="220"></el-table-column>
      <el-table-column prop="price" label="活动价" width="220"></el-table-column>
      <el-table-column prop="qty_sum" label="库存" width="220"></el-table-column>
      <el-table-column label="操作" width="200">
        <template v-slot:default="property">
          <!-- 修改按钮 -->
          <el-button
            plain
            type="primary"
            icon="el-icon-edit"
            circle
            @click="goto(property.row.id)"
            style="margin-right:14px"
          ></el-button>
          <!-- 删除按钮 -->
          <el-popconfirm
            title="确定删除吗？"
            @onConfirm="remove(property.row.id)"
            icon="el-icon-info"
            iconColor="red"
            confirmButtonType="danger"
            cancelButtonType="primary"
          >
            <el-button slot="reference" icon="el-icon-delete" plain type="danger" circle></el-button>
          </el-popconfirm>
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
      search: "", //查询框值
      sign: "", //返回按钮显隐
      fits: ["fill"],
      tableData: [],
    };
  },
  methods: {
    goBack() {
      console.log("返回");
    },
    Search() {
      console.log("查询");
    },
    goto() {
      //页面跳转
      this.$router.replace("/main/goods/gdsAlter");
      //跳转提示
      this.$notify({
        title: "成功",
        message: "跳转到修改商品页",
        type: "success",
      });
    },

    //功能；点击删除按钮触发删除事件
    async remove(id) {
      this.tableData = this.tableData.filter((item) => item.id != id);
      //删除成功，弹框提示
      this.$message({
        showClose: true,
        message: "删除成功！",
        type: "success",
      });
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