<template>
  <div>
    <div class="container">
      <div class="handle-box">
        <el-button
          style="float: left;margin-top: -15px;"
          size="midd"
          type="primary"
          icon="el-icon-delete"
          class="handle-del mr10"
          @click="delAllSelection"
        >批量删除</el-button>
        <div class="right_style">
          <el-input style="float: left;margin-left: 660px;margin-top: -15px;" v-model="gamename" placeholder="板块名称" class="handle-input mr10"></el-input>
          <el-button style="float: right;;margin-top: -15px;"  type="warning" icon="el-icon-search" @click="handleSearch(gamename)">搜索</el-button>
        </div></div>
    <el-table
      :data="user"
      style="width: 100%"
      @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55" align="center"></el-table-column>
      <el-table-column
        label="ID"
        width="100"
        align="center">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{scope.row.uid}}</span>
        </template>
      </el-table-column>
      <el-table-column label="头像(查看大图)" align="center">
        <template slot-scope="scope">
          <el-image
            style="width: 50px;height: 50px"
            class="table-td-thumb"
            :src="scope.row.userPic"
            :preview-src-list="[scope.row.userPic]"
          ></el-image>
        </template>
      </el-table-column>
      <el-table-column
        label="陪玩昵称"
        width="150"
        align="center">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{scope.row.userNickname}}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="用户名"
        width="150"
        align="center">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{scope.row.userName}}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="联系方式"
        width="150"
        align="center">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{scope.row.userTel}}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="住址"
        width="120"
        align="center">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{scope.row.userAddress}}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="创建时间"
        width="249"
        align="center">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{timestampToTime(scope.row.userCreatetime)}}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="180" align="center">
        <template slot-scope="scope">
          <el-button
            type="text"
            icon="el-icon-edit"
            @click="updateUser(scope.row.uid)"
          >编辑</el-button>
          <el-button
            type="text"
            icon="el-icon-circle-close"
            class="red"
            @click="deleteUser(scope.row.uid)"
          >禁用</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!--<el-pagination
      layout="prev,pager,next"
      :page-size="this.params.size"
      v-on:current-change="changeShoperPage"
      :total="total" :current-page="this.params.page" style="text-align: center">
    </el-pagination>-->
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :page-sizes="[1, 2, 4, 8]"
          :page-size="this.params.size"
          :current-page="this.params.page"
          v-on:current-change="changeShoperPage"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total">
        </el-pagination>
    </div>
    </div>
</template>
<script>
  import axios from 'axios';
  export default{
    data(){
      return{
        user:[],
        total:0,
        params:{
          page:1,
          size:4
        },
        multipleSelection:[],
        data:[],
        username:''
      }
    },
    mounted:function () {
      this.query();
    },
    methods:{
      timestampToTime(timestamp) {
        var date = new Date(timestamp);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
        var Y = date.getFullYear() + '-';
        var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
        var D = (date.getDate() < 10 ? '0'+date.getDate() : date.getDate()) + ' ';
        var h = (date.getHours() < 10 ? '0'+date.getHours() : date.getHours()) + ':';
        var m = (date.getMinutes() < 10 ? '0'+date.getMinutes() : date.getMinutes()) + ':';
        var s = (date.getSeconds() < 10 ? '0'+date.getSeconds() : date.getSeconds());
        return Y+M+D+h+m+s;
      },
      query:function () {
        var url = 'api/accplayer-user/user/findUserByPage/'+this.params.page+'/'+this.params.size;
        axios.get(url).then(res=>{
          if(res.data!=null){
            this.user = res.data.list;
            this.total = res.data.total;
          }else{
            alert("查询失败!!!");
          }
        })
      },
      changeShoperPage:function (page) {
        this.params.page = page;
        this.query();
      },
      updateUser:function (uid) {
        this.$router.push({path:'/upduser/'+uid});
      },
      deleteUser:function (uid) {
        this.$confirm('此操作将禁用该用户, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          var url = 'api/accplayer-user/user/updUserStatus/'+uid;
          axios.get(url).then(res=>{
            if(res.data=="updUserStatus success"){
              this.$message.success("禁用成功!!!");
              this.query();
            }
          }).catch(() => {
            this.$message({
              type: 'info',
              message: '已取消删除'
            });
          });
        })
      },
      // 多选操作
      handleSelectionChange(val) {
        this.multipleSelection = val;
        //console.log(this.multipleSelection);
      },
      //批量删除操作
      delAllSelection() {
        const length = this.multipleSelection.length;
        let str = '';
        for (let i = 0; i < length; i++) {
            //var data = [];
            this.data.push(this.multipleSelection[i].uid);
            //使用JSON.stringify()将数组转化为json串
            //var uid = JSON.stringify(this.data);
            //console.log(uid);
            var url = 'api/accplayer-user/user/deleteUsers';
            axios.post(url,this.data).then(res=>{
            if(res.data=='deleteUsers success'){
              this.query();
            }
          })
            str += this.multipleSelection[i].userNickname + ' ';
        }
        this.$message.error(`删除了${str} `);
        this.multipleSelection = [];
      },
      //根据陪玩昵称进行查询--by wgb
      handleSearch:function (username) {
        //alert(this.username);
        var url='api/accplayer-user/user/searchByUserName/'+this.username;
        axios.get(url).then(res=>{
          this.user=res.data;
          console.log(res.data);
        })
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
        this.$message.info(`每页 ${val} 条`);
        this.params.size = val;
        this.query();
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
    }
  }
</script>
<style >
  .handle-box {
    margin-bottom: 10px;
    padding-bottom: 20px;
  }

  .handle-select {
    width: 120px;
  }

  .handle-input {
    width: 300px;
    display: inline-block;
  }
  .right_style{
    margin-left: 200px;
  }
</style>
