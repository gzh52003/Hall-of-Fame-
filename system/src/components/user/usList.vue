<template>
  <div>
    <el-row :gutter="100" type="flex" justify="left" style="margin:30px 0px">
      <el-col :span="6">
        <el-input v-model.trim="search" placeholder="通过用户名查询" style="width:200px"></el-input>
      </el-col>
      <el-col :span="6" style="margin-left:10px">
        <el-button type="primary" icon="el-icon-search" @click="Search">搜索</el-button>
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
    <div class="block">
      <el-switch v-model="value"></el-switch>
      <el-pagination
        background
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-sizes="[10,20,30,40,50]"
        :page-size="pagesize"
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
      userList: [], //列表数据
      search: "", //搜索框数据
      Lists: [], //备份数据，用于搜索框无数据时显示数据
      value: false,
      currentPage4: 1, //初始页
      pagesize: 10, //每页的数据
    };
  },
  components: {},
  created() {
    //一进页面，请求所有用户数据
    this.checkUser();
  },

  methods: {
    //功能：请求所有用户数据并响应到页面
    async checkUser() {
      try {
        //发送请求，请求所有用户
        const p = await apiUser.reqUser();
        if (p.data.state) {
          //有数据
          this.userList = p.data.data;
        } else {
          //无数据
          console.log("查询所有用户失败");
        }
      } catch (error) {
        console.log("请求用户名出错", error);
      }
    },

    //功能：修改按钮点击触发页面跳转
    goto(id) {
      this.$router.replace("/main/user/usAlter" + id);
    },

    //功能；点击删除按钮触发删除事件
    async remove(id) {
      this.userList = this.userList.filter((item) => item.id != id);
      try {
        //发送删除用户请求
        const p = await apiUser.reqUserDelete(id);
        if (p.data.state) {
          //删除成功，弹框提示
          this.$message({
            showClose: true,
            message: "删除成功！",
            type: "success",
          });
        } else {
          //删除失败
          this.$message({
            showClose: true,
            message: "删除失败！",
            type: "error",
          });
        }
      } catch (error) {
        console.log("删除用户请求失败", error);
      }
    },

    //功能：点击搜索按钮，发送用户名请求
    async Search() {
      if (this.search == "") {
        //没有输入，弹出提示框
        this.$message({
          showClose: true,
          message: "请输入查询信息！",
          type: "warning",
        });
      } else {
        try {
          // 有输入，发送用户名验证请求
          const p = await apiUser.reqUsername(this.search);
          if (p.data.state) {
            //用户名存在，显示信息
            this.userList = p.data.data;
            this.search = ""; //清空输入框
          } else {
            //用户名不存在，提示弹框，显示备份数据
            this.$message({
              showClose: true,
              message: "无此用户！",
              type: "warning",
            });
            this.checkUser();
          }
        } catch (error) {
          console.log("用户名验证请求失败", error);
        }
      }
    },

    // 初始页currentPage、初始每页数据数pagesize和数据data
    handleSizeChange: function (size) {
      this.pagesize = size;
      console.log(this.pagesize); //每页下拉显示数据
    },
    handleCurrentChange: function (currentPage4) {
      this.currentPage4 = currentPage4;
      console.log(this.currentPage4); //点击第几页
    },
    handleSelectionChange() {},
    formatter() {},
  },
};
</script>
<style scoped>
</style>