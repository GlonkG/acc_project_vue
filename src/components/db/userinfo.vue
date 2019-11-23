<template>
  <div id="header">
    <div class="logo">
      <a href="/" class="click_logo">
        <img src="/static/image/logo.png"/>
      </a>
    </div>
    <div id="info">
      <div class="b_main">
        <van-goods-action-button width="50%" color="#FE6069" type="info" text="首页"  @click="onClickButtonmain()"></van-goods-action-button>
      </div>
      <div class="b_main">
        <van-goods-action-button width="50%" color="#FE6069" type="info" text="找陪玩"  @click="onClickButtonpeiwan()"></van-goods-action-button >
      </div>
      <div class="b_main">
        <van-goods-action-button width="50%" color="#FE6069" type="info" text="闪电邀约" @click="onClickButtoninvite()"></van-goods-action-button>
      </div>
      <div class="b_main">
        <van-goods-action-button width="50%" color="#FE6069" type="info" text="8元来一局" @click="onClickButtoneight()"></van-goods-action-button>
      </div>
      <div class="b_main">
        <img src="/static/image/ico_13.gif"/>
        <van-goods-action-button width="50%" color="#FE6069" type="info" text="8元来一局" @click="onClickButtonchat()">来聊天</van-goods-action-button>
      </div>
    </div>
    <div id="search">
      <el-input  v-model="condition" placeholder="陪玩昵称、ID" class="handle-input mr10"></el-input>
    </div>
    <div style="float: left">
      <el-button style="margin-left: 3px;margin-top: 28px;" size="small" type="warning" icon="el-icon-search" @click="searchaUser(condition)">搜索</el-button>
    </div>
    <div id="log_reg">
      <i slot="prefix"style="margin-top: 30px;" class="el-icon-user "></i>
      <van-goods-action-button width="50%" color="#FE6069" type="info" text="登录" @click="log1()"></van-goods-action-button>
      <van-goods-action-button width="50%" color="#FE6069" type="info" text="管理" @click="log2()"></van-goods-action-button>
    </div>
    <div >
      <i style="margin-right: 25px" v-model="user"></i>
      <el-dropdown>
        <!--移入出现menu-->
        <span class="el-dropdown-link">
             <el-avatar  style="margin-top:25px;margin-right: 60px;" :src="user.userPic">
        </el-avatar>
          </span>
        <!--出现的menu-->
        <el-dropdown-menu slot="dropdown">
          <div class="div2" style="width: 300px;height: 160px;">
            <i style="margin-right: 25px" v-model="user"></i>
            <el-avatar  style="margin-top:8px;margin-right: 100px;width: 80px;height: 80px;" :src="user.userPic"></el-avatar>
            <el-dropdown-item><div style="margin-top:35px;float: right;text-align: right;margin-top: -70px;"><span style="color: orange">{{loginName}}</span><br>
              <span>ID:{{user.uid}}</span></div> </el-dropdown-item>
            <el-dropdown-item><div class="wall" style="float:left;margin-top: 35px;margin-left: 25%;width: 100%">
            </div> </el-dropdown-item>
            <div style="width: 100%;height: 25%;margin-top: 10%">
              <el-dropdown-item><span @click="oninfo()" style="float: left;">进入个人中心</span> </el-dropdown-item>
              <el-dropdown-item><span @click="loginout()" style="float: right;">退出登录</span></el-dropdown-item>
            </div>
          </div>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <el-container style="height: 1000px; border: 1px solid #eee;background-color: azure;float:left;">
      <el-aside width="200px" style="background-color: azure">
        <el-menu :default-openeds="['1', '12']">
          <el-submenu index="1">
            <template slot="title">欢迎来到个人中心</template>
            <el-menu-item-group>
              <template slot="title"></template>
              <el-menu-item index="1-1" @click="mycart()">我的订单</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title>
              <template slot="title"></template>
              <el-menu-item index="2-1" @click="myaccount()">账户管理</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title>
              <template slot="title"></template>
              <el-menu-item index="3-1">钻石礼物</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <template slot="title"></template>
              <el-menu-item index="4-1">金豆礼物</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title>
              <template slot="title"></template>
              <el-menu-item index="5-1">我的等级</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title>
              <template slot="title"></template>
              <el-menu-item index="6-1">个性装扮</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title>
              <template slot="title"></template>
              <el-menu-item index="7-1" @click="myinfo()">个人资料</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <template slot="title"></template>
              <el-menu-item index="8-1" @click="setting()">设置中心</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title>
              <template slot="title"></template>
              <el-menu-item index="9-1">我的关注</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <template slot="title"></template>
              <el-menu-item index="10-1" @click="getType3()">联系我们</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title>
              <template slot="title"></template>
              <el-menu-item index="11-1" @click="myverify()">认证页面</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title>
              <template slot="title"></template>
              <el-menu-item index="12-1" @click="myimg()">相册管理</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-container style="height:1000px;width: 1480px; border: 1px solid #eee;background-color: #F6F6F6;float:right;">
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
    <div id="side_vm">
      <div class="side_type1">
        <el-button style="color: lightcoral;border: hidden;margin: 5%"size="medium" round="true" icon="el-icon-s-home"></el-button>
        <font style="margin-top: 5px" color="lightcoral" @click="onverify()">申请入驻</font>
      </div>

      <div class="side_type1">
        <el-button style="color: lightcoral;border: hidden;margin: 5%"size="medium" round="true" icon="el-icon-s-comment"></el-button>
        <font style="margin-top: 5px" color="lightcoral">消息</font>

      </div>

      <div class="side_type1">
        <el-button style="color: lightcoral;border: hidden;margin: 5%"size="medium" round="true" icon="el-icon-edit-outline"></el-button>
        <font style="margin-top: 5px" color="lightcoral" @click="onmycart()">订单</font>

      </div>

      <div class="side_type1">
        <el-button style="color: lightcoral;border: hidden;margin: 5%"size="medium" round="true" icon="el-icon-wallet"></el-button>
        <font style="margin-top: 5px" color="lightcoral">充值</font>

      </div>

      <div class="side_type1">
        <el-button style="color: lightcoral;border: hidden;margin: 5%"size="medium" round="true" icon="el-icon-chat-dot-round"></el-button>
        <font style="margin-top: 5px" color="lightcoral">我的客服</font>
      </div>
    </div>
    <div id="footer">

      <div class="left">
        <div class="left_i">
          <div class="bt">关于我们</div>
          <div class="list">
            <div class="li">
              联系我们
            </div>
            <div class="li">
              公司简介
            </div>
            <div class="li">
              免责声明
            </div>
          </div>
        </div>
        <div class="left_i">
          <div class="bt">联系我们</div>
          <div class="list">
            <div class="li">
              客服电话：13555759985
            </div>
            <div class="li">
              客服QQ：1123456789
            </div>
            <div class="li">
              网站地图
            </div>
          </div>
        </div>
      </div>

      <div id="right">
        <img style="width: 25%;height: 35%;margin-left: -25%" src="/static/image/111.png">
        <div class="li" style="margin-left: -25%">扫码关注公众号</div>
      </div>
    </div>
  </div>
</template>
<script>
  import axios from 'axios';
  import ElHeader from "../../../node_modules/element-ui/packages/header/src/main";
  export default{
    components: {ElHeader},
    data(){
      return{
        loginName:'',
        user:{
          userPic:'',
          uid:''
        },
        apid:'',
        condition:''
      }
    },
    mounted:function () {
      var url = 'api/accplayer-user/user/getInfoByTel';
      axios.get(url).then(res=>{
        if(res.data!=null){
          this.user.userPic = res.data.userPic;
          this.user.uid = res.data.uid;
          this.loginName = res.data.userNickname;
        }
        var url = 'api/accplayer-acc/acc/findByUid/'+ this.user.uid;
        axios.get(url).then(res=>{
            if(res.data!=null){
                this.apid = res.data.apid;
                //console.log(this.apid);
            }
        })
      })
    },
    methods:{
      //认证页面
      onverify:function () {
        this.$router.push('/verify');
      },
      //我的订单
      onmycart:function () {
        this.$router.push('/mycart');
      },
      loginout:function () {
        var url = 'api/accplayer-user/user/loginout';
        axios.get(url).then(res=>{
          this.$message.warning(this.loginName+"已退出");
          this.loginName = '';
          this.user.userPic = '';
        })
      },
      //登录
      log1:function () {
        this.$router.push('/memory');
      },
      //管理
      log2:function () {
        this.$router.push('/login');
      },
      onClickButtonmain() {
        this.$router.push({path:'/'});
      },
      onClickButtonpeiwan:function () {
        this.$router.push({path:'/peiwan'});
      },
      //我的订单
      mycart:function () {
        this.$router.push('/mycart');
      },
      //账户管理
      myaccount:function () {
        this.$router.push('/myaccount');
      },
      //个人资料
      myinfo:function () {
        this.$router.push('/myinfo');
      },
      //配置中心
      setting:function () {
        this.$router.push('/setting');
      },
      //认证页面
      myverify:function () {
        this.$router.push('/verify');
      },
      //关于我们
      getType3:function () {
        this.$router.push('/us');
      },
      //相册管理
      myimg:function () {
        this.$router.push({path:'/img/'+this.apid});
      }
    }
  }
</script>
<style scoped>
  #side_vm{
    border-radius: 15px;
    width: 75px;
    height: 450px;
    position: fixed;
    background-color: #F7F8FA;
    right: 0;
    top: 50px;
  }
  .side_type1{
    border-radius: 20px;
    width: 75px;
    height: 75px;
    margin-top:10px ;
    background-color: white;
  }
  #lay04{
    width:1500px;
    height:200px;
    float: left;
    margin-top: 70px;

  }
  #lay04 .a1{
    width:200px;
    height:200px;
    margin-left: 400px;
    margin-top: 85px;
    float: left;
  }
  .span_style{
    margin-top: 25px;
  }
  #lay04 img{
    width:200px;
    height:200px;
  }
  #lay04 .a2{
    width:320px;
    height:250px;
    margin-left: 200px;
    margin-top: 95px;
    float: left;
    letter-spacing:5px;
    text-align: center;

  }
  #footer{
    width:100%;
    height:350px;
  }
  .left{
    width:65%;
    height:350px;
    float: left;
  }
  .left_i{
    float: left;
    width:25%;
    height:230px;
    margin-top: 5%;
    margin-left: 10%;
  }
  .bt{
    font-size: 18px;
    font-weight: 600;
    color: #333;
    margin-bottom: 20px;
  }
  .list{
    display: block;
  }
  .li{
    margin-bottom: 14px;
  }
  #right{
    float: left;
    width:20%;
    height:230px;
    margin-top: 4%;
    margin-left: 10%;
  }
  #header{
    width: 100%;
    height: 85px;
    margin-top: -60px;
  }
  .logo{
    width: 10%;
    height: 47px;
    float: left;
    margin-left: 100px;
  }
  .logo img{
    margin-top: 20px;
    width: 100%;
    height: 100%;
  }
  #info{
    width: 30%;
    height:70%;
    margin-top: 10px;
    margin-left: 10px;
    float: left;
  }
  .b_main{
    width: 20%;
    height: 50%;
    margin-top: 18px;
    float: left;
  }
  #search{
    width: 16%;
    height: 70%;
    float: left;
    margin-top: 26px;
    margin-left: 60px;
  }

  #log_reg{
    width: 17%;
    height: 50%;
    margin-top: 8px;
    float: left;
  }
</style>
