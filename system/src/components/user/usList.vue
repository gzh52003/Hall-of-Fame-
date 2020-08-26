<template>
  <div>
    <el-row
      :gutter="100"
      type="flex"
      justify="left"
      style="margin:30px 0px"
    >
      <el-col :span="6">
        <el-input
          v-model="formLabelAlign.region"
          placeholder="通过ID查询"
        ></el-input>
      </el-col>
      <el-col
        :span="6"
        style="margin-left:10px"
      >
        <el-button
          type="primary"
          icon="el-icon-search"
        >搜索</el-button>
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
      <el-table-column
        type="selection"
        width="55"
      ></el-table-column>
      <el-table-column
        prop="date"
        label="日期"
        sortable
        width="180"
      >
        <template slot-scope="scope">{{ scope.row.date }}</template>
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        sortable
        width="180"
      ></el-table-column>
      <el-table-column
        prop="address"
        label="地址"
        :formatter="formatter"
      ></el-table-column>
      <el-table-column
        label="操作"
        show-overflow-tooltip
      >
        <template v-slot:default="property">
          <el-button
            plain
            type="primary"
            icon="el-icon-edit"
            circle
            @click="goto(property.row.name)"
          >
          </el-button>
          <el-button
            plain
            type="danger"
            icon="el-icon-delete"
            circle
            @click="remove(property.row.name)"
          >
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="block">
      <el-switch v-model="value">
      </el-switch>
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
      >
        <!-- background
  :page-size="20"
  :pager-count="5"
    layout="prev, pager, next"
    :total="500"> -->

      </el-pagination>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      table: false,
      dialog: false,
      loading: false,
      input: '',
      userList: [{
        date: '2020-8-8',
        name: '西门吹雪1',
        address: '蓬莱仙岛',
        ress: ''
      }, {
        date: '2020-8-8',
        name: '西门吹雪2',
        address: '蓬莱仙岛',
        ress: ''
      },
      {
        date: '2020-8-8',
        name: '西门吹雪30',
        address: '蓬莱仙岛',
        ress: ''
      },],
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      formLabelWidth: '80px',
      timer: null,
      formLabelAlign: {
        region: '',
      },
      value: false,
      currentPage4: 1, //初始页
      pagesize: 10, //每页的数据
      userListed: []
    };
  },
  components: {},
  created() {
    this.handleSelectionChange()
  },
  methods: {
    formatter(){},
    remove(id) {
      console.log("点击成功", id);
      this.userList = this.userList.filter(item => item.name != id)
    },
    goto(id) {
      this.$router.push('/user/usAlter');
      console.log('点击了', id);

    },


    // 初始页currentPage、初始每页数据数pagesize和数据data
    handleSizeChange: function (size) {
      this.pagesize = size;
      console.log(this.pagesize)  //每页下拉显示数据
    },
    handleCurrentChange: function (currentPage4) {
      this.currentPage4 = currentPage4;
      console.log(this.currentPage4)  //点击第几页
    },
    handleSelectionChange() {
     /*  this.$http.get('http://localhost:8080/#/user/usList').then(res => {  //这是从本地请求的数据接口，
        this.userLists = res.body
      }) */
    },
    cancelForm() {
      this.loading = false;
      this.dialog = false;
      clearTimeout(this.timer);
    },


  }
}


</script>
<style scoped>
</style>