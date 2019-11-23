<template>
  <div id="outer">

    <div id="title">
      <span>我的订单</span>
    </div>

    <div id="box">
      <div class="title">
        <span>订单信息</span>
        <div class="it">
          <el-button type="warning" plain size="small" @click="all()">全部</el-button>
          <el-button type="warning" plain size="small" @click="interim()">未支付</el-button>
          <el-button type="warning" plain size="small" @click="prepaid()">已支付</el-button>
        </div>
      </div>

      <div class="order_box">

        <div class="box_title">
          <div class="box1">
            陪玩
          </div>
          <div class="box1">
            昵称
          </div>
          <div class="box1">
            服务技能
          </div>
          <div class="box1">
            单位（元/小时）
          </div>
          <div class="box1">
            购买数量
          </div>
          <div class="box1">
            总价
          </div>
        </div>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<style scoped>
  #outer{
    background-color: #F6F6F6;
    width: 100%;
    height:1000px;
  }
  #title{
    width: 83%;
    height:50px;
    float: left;
    text-align: left;
    line-height: 50px;
    font-size: 15px;
    margin-top: 2%;
    margin-left: 8%;
    padding-left: 2%;
    background-color: white;
  }
  #box{
    width: 85%;
    height:45%;
    float: left;
    text-align: left;
    line-height: 50px;
    font-size: 15px;
    margin-top: 2%;
    margin-left: 8%;
    background-color: white;
  }
  #box .title{
    width: 95%;
    margin-left: 2%;
    border-bottom: solid 1px gainsboro;
  }
  .order_box{
    width: 95%;
    height: 85%;
    margin-left: 2%;
    margin-top: 2%;
  }
  .box_title{
    width: 98%;
    height: 12%;
    margin-left: 1%;
    margin-top: 0%;
    background-color: gainsboro;
  }
  .box1{
    float: left;
    width: 11%;
    height: 100%;
    margin-left: 5%;
    margin-top: 0%;
  }

  .it{
    float: right;
  }

</style>
<script>
  import axios from 'axios';
  import ElButton from "../../../../node_modules/element-ui/packages/button/src/button";
  export default{
    components: {ElButton},
    data(){
      return{
      }
    },
    mounted:function () {

    },
    methods:{
      //全部
      all:function () {
        this.$router.push('/all');
      },
      //未支付
      interim:function () {
        this.$router.push('/interim');
      },
      //已支付
      prepaid:function () {
        this.$router.push('/paypaid');
      }
    }
  }
</script>
