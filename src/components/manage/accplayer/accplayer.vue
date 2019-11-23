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
        :data="accplayer"
        style="width: 100%"
        @selection-change="handleSelectionChange">
        <el-table-column type="selection" width="55" align="center"></el-table-column>
        <el-table-column
          label="陪玩ID"
          width="100"
          align="center">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{scope.row.apid}}</span>
          </template>
        </el-table-column>
        <el-table-column label="头像(查看大图)" align="center">
        <template slot-scope="scope">
          <el-image
            style="width: 50px;height: 50px"
            class="table-td-thumb"
            :src="scope.row.accPic"
            :preview-src-list="[scope.row.accPic]"
          ></el-image>
        </template>
      </el-table-column>
        <el-table-column
          label="用户昵称"
          width="150"
          align="center">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{scope.row.userNickname}}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="板块名称"
          width="150"
          align="center">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{scope.row.gname}}</span>
          </template>
        </el-table-column>
        <!--<el-table-column
          label="游戏大区"
          width="150"
          align="center">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{scope.row.gdaqu}}</span>
          </template>
        </el-table-column>-->
        <el-table-column
          label="游戏段位"
          width="120"
          align="center">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{scope.row.gduanwei}}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="陪玩游戏ID"
          width="220"
          align="center">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{scope.row.gpid}}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="陪玩价格"
          width="200"
          align="center">
          <template slot-scope="scope">
            <span style="margin-left: 10px;color: red">¥{{scope.row.gprice}}元/小时</span>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="180" align="center">
          <template slot-scope="scope">
            <el-button
              type="text"
              icon="el-icon-edit"
              @click="updateAccplayer(scope.row.apid)"
            >编辑</el-button>
            <el-button
              type="text"
              icon="el-icon-delete"
              class="red"
              @click="deleteAccplayer(scope.row.apid)"
            >删除</el-button>
          </template>
        </el-table-column>
      </el-table>
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
        accplayer:[],
        total:0,
        params:{
          page:1,
          size:4
        },
        multipleSelection:[],
        data:[],
        gamename:'',
        uid:''
      }
    },
    mounted:function () {
      this.query();
    },
    methods:{
      query:function () {
        var url = 'api/accplayer-acc/acc/echarts/bar/'+this.params.page+'/'+this.params.size;
        axios.get(url).then(res=>{
          if(res.data!=null){
            this.accplayer = res.data.list;
            this.total = res.data.total;
          }else{
            this.$message.warning("查询失败!!!");
          }
        })
      },
      changeShoperPage:function (page) {
        this.params.page = page;
        this.query();
      },
      updateAccplayer:function (apid) {
        this.$router.push({path:'/updaccplayer/'+apid});
      },
      deleteAccplayer:function (apid) {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
         confirmButtonText: '确定',
         cancelButtonText: '取消',
         type: 'warning'
         }).then(() => {
         var url = 'api/accplayer-acc/acc/delAccplayer/'+apid;
         axios.get(url).then(res=>{
         if(res.data=="delAccplayer success"){
            this.$message.warning("此陪玩拟为恶意申请入驻，请及时联系相关部门进行处理");
            this.query();
         }
         }
         ).catch(() => {
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
      },
      //批量删除操作
      delAllSelection() {
        const length = this.multipleSelection.length;
        let str = '';
        for (let i = 0; i < length; i++) {
          //var data = [];
          this.data.push(this.multipleSelection[i].apid);
          //使用JSON.stringify()将数组转化为json串
          //var uid = JSON.stringify(this.data);
          //console.log(uid);
          var url = 'api/accplayer-acc/acc/deleteAccplayers';
          axios.post(url,this.data).then(res=>{
            if(res.data=='deleteAccplayers success'){
              this.query();
            }
          })
          str += this.multipleSelection[i].gpid + ' ';
        }
        this.$message.error(`删除了${str} `);
        this.multipleSelection = [];
      },
      handleSearch:function (gamename) {
        var url='api/accplayer-acc/acc/searchByGName/'+this.gamename;
        axios.get(url).then(res=>{
          this.accplayer=res.data;
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
    margin-bottom: 20px;
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
