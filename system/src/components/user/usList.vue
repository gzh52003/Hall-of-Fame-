<template>
  <div>
  <!-- <el-row :gutter="100" type="flex" justify="left" style="margin:30px 0px">
  <el-col :span="6">
    <el-date-picker type="date" placeholder="选择修改日期" v-model="form.date1" style="width: 100%;">
      </el-date-picker>
      </el-col>
  <el-col :span="6">
    <el-input v-model="formLabelAlign.region" placeholder="修改地址"></el-input>
  </el-col>
 </el-row> -->
    <el-table
      ref="multipleTable"
      :data="userList.slice((currentPage4-1)*pagesize,currentPage4*pagesize) "
      tooltip-effect="dark"
      style="width: 100%"
      @selection-change="handleSelectionChange"
     
    >
      <el-table-column
        type="selection"
        width="55"
      ></el-table-column>
      <el-table-column
        label="日期"
        width="120"
      >
        <template slot-scope="scope">{{ scope.row.date }}</template>
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="120"
      ></el-table-column>
      <el-table-column
        prop="address"
        label="地址"
        show-overflow-tooltip
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
          >
          <el-drawer
  title="我嵌套了 Form !"
  :before-close="handleClose"
  :visible.sync="dialog"
  direction="ltr"
  custom-class="demo-drawer"
  ref="drawer"
  >
  <div class="demo-drawer__content">
    <el-form :model="form">
      <el-form-item label="活动名称" :label-width="formLabelWidth">
        <el-input v-model="form.name" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="活动区域" :label-width="formLabelWidth">
        <el-select v-model="form.region" placeholder="请选择活动区域">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
    </el-form>
    <div class="demo-drawer__footer">
      <el-button @click="cancelForm">取 消</el-button>
      <el-button type="primary" @click="$refs.drawer.closeDrawer()" :loading="loading">{{ loading ? '提交中 ...' : '确 定' }}</el-button>
    </div>
  </div>
</el-drawer>

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
        name: '西门吹雪3',
        address: '蓬莱仙岛',
        ress: ''
      }, {
        date: '2020-8-8',
        name: '西门吹雪4',
        address: '蓬莱仙岛',
        ress: ''
      },
      {
        date: '2020-8-8',
        name: '西门吹雪5',
        address: '蓬莱仙岛',
        ress: ''
      },{
        date: '2020-8-8',
        name: '西门吹雪6',
        address: '蓬莱仙岛',
        ress: ''
      }, {
        date: '2020-8-8',
        name: '西门吹雪7',
        address: '蓬莱仙岛',
        ress: ''
      },
      {
        date: '2020-8-8',
        name: '西门吹雪8',
        address: '蓬莱仙岛',
        ress: ''
      }, {
        date: '2020-8-8',
        name: '西门吹雪9',
        address: '蓬莱仙岛',
        ress: ''
      },
      {
        date: '2020-8-8',
        name: '西门吹雪10',
        address: '蓬莱仙岛',
        ress: ''
      },{
        date: '2020-8-8',
        name: '西门吹雪11',
        address: '蓬莱仙岛',
        ress: ''
      }, {
        date: '2020-8-8',
        name: '西门吹雪12',
        address: '蓬莱仙岛',
        ress: ''
      },
      {
        date: '2020-8-8',
        name: '西门吹雪13',
        address: '蓬莱仙岛',
        ress: ''
      }, {
        date: '2020-8-8',
        name: '西门吹雪14',
        address: '蓬莱仙岛',
        ress: ''
      },
      {
        date: '2020-8-8',
        name: '西门吹雪15',
        address: '蓬莱仙岛',
        ress: ''
      },{
        date: '2020-8-8',
        name: '西门吹雪16',
        address: '蓬莱仙岛',
        ress: ''
      }, {
        date: '2020-8-8',
        name: '西门吹雪17',
        address: '蓬莱仙岛',
        ress: ''
      },
      {
        date: '2020-8-8',
        name: '西门吹雪18',
        address: '蓬莱仙岛',
        ress: ''
      }, {
        date: '2020-8-8',
        name: '西门吹雪19',
        address: '蓬莱仙岛',
        ress: ''
      },
      {
        date: '2020-8-8',
        name: '西门吹雪20',
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
        currentPage4:1, //初始页
        pagesize:10, //每页的数据
        userListed:[]
    };
  },
  components: {},
  created() {
        this.handleSelectionChange()
    },
  methods: {
    remove(id) {
      console.log("点击成功", id);
      this.userList= this.userList.filter(item => item.name != id)
    },
    
  
        // 初始页currentPage、初始每页数据数pagesize和数据data
        handleSizeChange: function (size) {
                this.pagesize = size;
                console.log(this.pagesize)  //每页下拉显示数据
        },
        handleCurrentChange: function(currentPage4){
                this.currentPage4=currentPage4;
                console.log(this.currentPage4)  //点击第几页
        },
        handleSelectionChange() {
            this.$http.get('http://localhost:8080/#/user/usList').then(res => {  //这是从本地请求的数据接口，
                this.userLists= res.body
            })
        },
        
     handleClose(done) {
      if (this.loading) {
        return;
      }
      this.$confirm('确定要提交表单吗？')
        .then(_ => {
          this.loading = true;
          console.log(_);
          this.timer = setTimeout(() => {
            done();
            // 动画关闭需要一定的时间
            setTimeout(() => {
              this.loading = false;
            }, 400);
          }, 2000);
        })
        .catch(_=> {
            console.log(_);
        });
    },
    cancelForm() {
    this.loading = false;
    this.dialog = false;
    clearTimeout(this.timer);
    }
  }
}


</script>
<style scoped>
</style>