<template>
  <div>
    <el-row :gutter="100" type="flex" justify="left" style="margin:30px 0px">
      <el-col :span="6">
        <el-input v-model="formLabelAlign.region" placeholder="通过ID查询"></el-input>
      </el-col>
      <el-col :span="6" style="margin-left:10px">
        <el-button type="primary" icon="el-icon-search">搜索</el-button>
      </el-col>
    </el-row>
    <el-table
      ref="multipleTable"
      :data="userList.slice((currentPage4-1)*pagesize,currentPage4*pagesize) "
      tooltip-effect="dark"
      style="width: 100%"
      @selection-change="handleSelectionChange"
      :default-sort="{prop: 'date', order: 'descending'}"
    >
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column prop="id" label="序号" sortable width="120"></el-table-column>
      <el-table-column prop="username" label="用户名" min-width="120"></el-table-column>
      <el-table-column prop="gender" label="性别" min-width="120"></el-table-column>
      <el-table-column prop="age" label="年龄" sortable min-width="120"></el-table-column>
      <el-table-column label="操作" show-overflow-tooltip width="200">
        <template v-slot:default="property">
          <!-- 修改按钮 -->
          <el-button plain type="primary" icon="el-icon-edit" circle @click="goto(property.row.id)"></el-button>
          <!-- 删除按钮 -->
          <el-button
            plain
            type="danger"
            icon="el-icon-delete"
            circle
            @click="remove(property.row.name)"
          ></el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="block">
      <el-switch v-model="value"></el-switch>
      <el-pagination
        background
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-sizes="[10,20,30,40,50]"
        :page-size="pagesize"
        layout="total, sizes,prev, pager, next, jumper"
        :total="userList.length"
        :hide-on-single-page="value"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
import apiUser from "@/api/user"; //引入二次封装请求

export default {
  data() {
    return {
      table: false,
      dialog: false,
      loading: false,
      input: "",
      userList: [], //列表数据
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
      formLabelWidth: "80px",
      timer: null,
      formLabelAlign: {
        region: "",
      },
      value: false,
      currentPage4: 1, //初始页
      pagesize: 10, //每页的数据
      userListed: [],
    };
  },
  components: {},
  async created() {
    try {
      //发送请求，请求所有用户
      const p = await apiUser.reqUser();
      this.userList = p.data.data;
    } catch (error) {
      console.log("请求用户名出错", error);
    }
  },

  methods: {
    /*  remove(id) {
      console.log("点击成功", id);
      // this.userList = this.userList.filter((item) => item.name != id);
    }, */

    //功能：修改按钮点击触发页面跳转
    goto(id) {
      // console.log("点击了修改按钮", id);
      this.$router.replace("/main/user/usAlter");
    },

    // 初始页currentPage、初始每页数据数pagesize和数据data
    handleSizeChange:function (size) {
      this.pagesize = size;
      console.log(this.pagesize); //每页下拉显示数据
    },
    handleCurrentChange: function (currentPage4) {
      this.currentPage4 = currentPage4;
      console.log(this.currentPage4); //点击第几页
    },
    cancelForm() {
      this.loading = false;
      this.dialog = false;
      clearTimeout(this.timer);
    },
    handleSelectionChange() {},
    formatter() {},
  },
};
</script>
<style scoped>
</style>