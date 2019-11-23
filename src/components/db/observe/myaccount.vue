<template>
  <div>
    <div style="height: 50px;">
      <span style="float: left;color: black">{{title}}</span>
    </div>

      <!--<el-divider></el-divider>-->
    <div style="height: 50px;">
      <div style="width: 200px;">
        <span style="float: left">我的余额<span style="font-size: 20px;color: orangered;margin-left: 30px;">0.00</span></span>
      </div>
      <div style="width: 200px;margin-left: 300px;">
        <span >我的钻石<span style="font-size: 20px;color: darkseagreen;margin-left: 30px;">0</span></span>
      </div>


    </div>
    <div style="float: left;height: 50px;">
      <span><font color="#ff4500">资金明细</font> | 钻石明细</span>
    </div><br><br>

    <div>
      <el-date-picker
        v-model="value1"
        type="daterange"
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期">
      </el-date-picker>
    </div>

      <!--<el-table
        :data="data"
        style="width: 100%">
        <el-table-column
          label="订单号"
          width="200"
          align="center">
          <template slot-scope="scope">
            <span style="margin-left: 10px">1010101001010101</span>
          </template>
        </el-table-column>
        <el-table-column
          label="陪玩"
          width="200"
          align="center">
          <template slot-scope="scope">
            <span style="margin-left: 10px">10101010</span>
          </template>
        </el-table-column>
        <el-table-column
          label="游戏名称"
          width="150"
          align="center">
          <template slot-scope="scope">
            <span style="margin-left: 10px">10101010</span>
          </template>
        </el-table-column>
        <el-table-column
          label="时长"
          width="150"
          align="center">
          <template slot-scope="scope">
            <span style="margin-left: 10px">5</span>
          </template>
        </el-table-column>
        <el-table-column
          label="单价"
          width="150"
          align="center">
          <template slot-scope="scope">
            <span style="margin-left: 10px">¥20元/小时</span>
          </template>
        </el-table-column>
        <el-table-column
          label="金额"
          width="120"
          align="center">
          <template slot-scope="scope">
            <span style="margin-left: 10px">100元</span>
          </template>
        </el-table-column>
        <el-table-column
          label="订单状态"
          width="249"
          align="center">
          <template slot-scope="scope">
            <span style="margin-left: 10px">等待支付</span>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="180" align="center">
          <template slot-scope="scope">
            <el-button
              type="text"
              icon="el-icon-edit"
              @click="updateUser(scope.row.uid)"
            >取消订单</el-button>
            <el-button
              type="text"
              icon="el-icon-delete"
              class="red"
              @click="deleteUser(scope.row.uid)"
            >联系陪玩</el-button>
            <el-button
              type="text"
              icon="el-icon-info"
              class="red"
              @click="deleteUser(scope.row.uid)"
            >去支付</el-button>
          </template>
        </el-table-column>
      </el-table>-->
    </div>
</template>
<script>
  import axios from 'axios';
  export default{
    data(){
      return{
        title:'账户管理',
        value1: ''
      }
    }
  }
</script>
<style scoped>

</style>
