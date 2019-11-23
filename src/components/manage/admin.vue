<template>
  <div>
    <div id="header">
      <span style="font-size: 28px;color: white;float: left;margin-top: 30px;margin-left: 30px">
        欢迎来到’<span style="color: black">邀你来开黑</span>‘后台管理
      </span>
    </div>
    <el-container style="height: 800px; border: 1px solid #eee;background-color: azure">
      <el-aside width="200px" height="600px" style="background-color: azure">
        <el-menu :default-openeds="['1', '10']">
          <el-submenu index="1">
            <template slot="title"><span style="color: orangered;font-size: 18px;">欢迎来到管理中心</span></template>
            <el-menu-item-group>
              <template slot="title"></template>
              <el-menu-item index="1-1" @click="findAllUser()">用户</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title>
              <template slot="title"></template>
              <el-menu-item index="1-2" @click="findAllAccplayer()">陪玩</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <template slot="title"></template>
              <el-menu-item index="1-3" @click="findByZero()">待审核</el-menu-item>
              <el-menu-item index="1-4" @click="findByOne()">已通过</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <template slot="title"></template>
              <el-menu-item index="1-5" @click="getType1()">bar图表</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <template slot="title"></template>
              <el-menu-item index="1-6" @click="getType2()">pie图表</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <template slot="title"></template>
              <el-menu-item index="1-8" @click="getType4()">公司简介</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <template slot="title"></template>
              <el-menu-item index="1-9" @click="getType5()">免责声明</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header style="text-align: right; font-size: 12px ;color:black">
          <span style="font-size: 18px;color: white;float: left">青春是一个短暂的美梦, 当你醒来时, 它早已消失无踪</span>
          <span style="font-size: 18px;color: white;margin-right: 30px">{{loginName}}</span>
          <el-button size="small" @click="loginout()">退出登录</el-button>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
  import axios from 'axios';
  import ElButton from "../../../node_modules/element-ui/packages/button/src/button";
  export default{
    components: {ElButton},
    data(){
          return{
            loginName:''
          }
      },
      mounted:function () {
        var url = 'api/accplayer-manage/wanan/findwananname';
        axios.get(url).then(res=>{
            if(res.data!='The ID is already offline'){
                this.loginName = res.data;
            }
        })
      },
      methods:{
        //用户
        findAllUser:function () {
          this.$router.push('/user');
        },
        //陪玩
        findAllAccplayer:function () {
          this.$router.push('/accplayer');
        },
        //待审核
        findByZero:function () {
          this.$router.push('/audit');
        },
        //已通过
        findByOne:function () {
          this.$router.push('/safeaudit');
        },
        //echarts表格:陪玩游戏ID与关注数量
        getType1:function () {
          this.$router.push('/bar');
        },
        getType2:function () {
          this.$router.push('/pie');
        },
        //公司简介
        getType4:function () {
          this.$router.push('/introduce');
        },
        //免责声明
        getType5:function () {
          this.$router.push('/disclaimer');
        },
        loginout:function () {
          var url = 'api/accplayer-manage/wanan/loginout';
          axios.get(url).then(res=>{
              this.$message.success("退出登录成功");
              this.$router.push('/');
          })
        }
      }
  }
</script>
<style>
  #header{
    width: 100%;
    height: 85px;
    margin-top: -56px;
    background-color: #8a6d3b;
  }
  .el-header {
    background-color: black;
    color: #333;
    line-height: 60px;
  }
  .el-aside {
    color: #333;
  }
</style>


