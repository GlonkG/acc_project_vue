<template>
<div>
  <div>
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
              <el-avatar  style="margin-top:25px;margin-right: 80px;width: 80px;height: 80px;" :src="user.userPic"></el-avatar>
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
    <!--闪电邀约-->
    <div id="outer">
      <span style="float: left;color: white;margin-left: 150px"><a style="color: white" href="/">首页</a>></span>
      <span style="float: left;color: white">闪电邀约</span>
      <div class="box">
        <div class="game_box" >
          <div class="but">
            <el-button plain style="background-image: linear-gradient(65deg, #FF6347 10%, #FF7F50 100%);border: hidden; width: 100%;
                height: 85%;font-size: 20px" @click="chooseduanyou()"><span style="color: white">端游</span></el-button>
          </div>
          <div class="but" >
            <el-button plain style="background-image: linear-gradient(65deg, #FF6347 10%, #FF7F50 100%);border: hidden; width: 100%;
                height: 85%;font-size: 20px" @click="chooseshouyou()"><span style="color: white">手游</span></el-button>
          </div>
        </div>
        <div class="type_duanyou" id="duanyou" >
          <div class="type_1" v-for="gname in gnamelist" @click="name(gname)">
            <a ><img  :src="gname.pic"/>
              <span >{{gname.value}}</span></a>
          </div>
        </div>
        <div class="type_shouyou" id="shouyou" style="display: none">
          <div class="type_1" v-for="gname in itemsList" @click="name(gname)">
            <img :src="gname.pic"/>
            <span>{{gname.value}}</span>
          </div>
        </div>
        <div class="player_sex">
          <span style="font-size: 15px;margin-top: 6%;float: left">陪玩性别</span>
          <div class="type_2">
            <img src="/static/image/xiaojiejie.png"/>
            <el-button plain style="background-image: linear-gradient(65deg, #FF6347 10%, #FF7F50 100%);border: hidden; width: 85%;
                height: 18%;font-size: 15px;line-height: 10%"  @click="usergender1('女')"><span style="color: white;" class="xingbieys" >小姐姐</span></el-button>
          </div>
          <div class="type_2">
            <img src="/static/image/xiaogege.png"/>
            <el-button plain style="background-image: linear-gradient(65deg, #FF6347 10%, #FF7F50 100%);border: hidden; width: 85%;
                height: 18%;font-size: 15px;line-height: 10%"><span style="color: white;" @click="usergender1('男')">小哥哥</span></el-button>
          </div>
          <div class="type_2">
            <img src="/static/image/buxian.png"/>
            <el-button plain style="background-image: linear-gradient(65deg, #FF6347 10%, #FF7F50 100%);border: hidden; width: 85%;
                height: 18%;font-size: 15px;line-height: 10%;"><span style="color: white;"  @click="usergender1('')">不限性别</span></el-button>
          </div>
        </div>
        <div class="order_num">
          <span style="font-size: 15px;margin-top: 1%;float: left">下单数量</span>
          <el-input-number v-model="nums"style="float:left;margin-left: 5%;margin-top: 5px;width: 11%;" @change="handleChange" :min="1" :max="10" label="下单数量"></el-input-number>
        </div>

        <div class="order_num">
          <span style="font-size: 15px;margin-top: 1%;float: left">订单要求</span>
          <el-input v-model="beizhu" placeholder="请输入内容" style="width: 30%;margin-top: 5px;float: left;margin-left: 5%"></el-input>
          <!--<div style="margin-top: 0px;width: 400px;">
            <el-checkbox-group v-model="checkboxGroup3" size="small">
              <el-checkbox-button v-for="city in cities" :label="city" :disabled="city === '北京'" :key="city">{{city}}</el-checkbox-button>
            </el-checkbox-group>-->
          </div>
          </div>
        </div>

        <div class="search">
          <el-button plain style="background-image: linear-gradient(65deg, #FF6347 10%, #FF7F50 100%);border: hidden; width: 35%;
                height: 75%;font-size: 18px;line-height: 10%;margin-left: -50%" @click="tofastsearch()"><span style="color: white;">寻找玩伴</span></el-button>
        </div>
      </div>

    </div>
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
<style scoped>
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
    margin-top: 22px;
    margin-left: 60px;
  }

  #log_reg{
    width: 17%;
    height: 50%;
    margin-top: 4px;
    float: left;
  }
  #outer{
    width: 100%;
    height: 1200px;
    margin-top: 15px;
    float: left;
    background: url("/static/image/shandian.png");
  }
  xingbieys:hover{
    color: royalblue;
  }
  .type_2:hover{
    position: relative;
    top: -5px;
    color: #00CC00;
  }
  .box{
    width: 85%;
    height: 100%;
    margin-top: 14%;
    margin-left: 8%;
    float: left;
    background-color: white;
  }
  .game_box{
    width: 45%;
    height: 8%;
    margin-top: 2%;
    margin-left: 25%;
    border:1px solid gainsboro;
  }
  .but{
    width: 20%;
    height: 85%;
    float: left;
    margin-top: 2%;
    margin-left: 10%;
  }
  .type_duanyou{
    width: 85%;
    height: 20%;
    float: left;
    /*background-color: #2e6da4;*/
    margin-top: 1%;
    margin-left: 10%;
  }
  .type_shouyou{
    width: 85%;
    height: 20%;
    float: left;
    /*background-color: #2e6da4;*/
    margin-top: 1%;
    margin-left: 10%;
  }
  .type_1:hover{
    position: relative;
    top: -5px;
    box-shadow: 5px 4px 5px RGBA(122, 200, 10 ,0.5);
    transition-delay: 3s;
  }
  .type_1{
    width:11%;
    height: 50%;
    float: left;
    background-color: rgba(0, 0, 0, 0);
    margin-top: 3%;
    margin-left: 6%;
  }
  .type_1 img{
    width: 100%;
    height: 100%;
  }
  .fastgname{
    margin-top: 20px;
    margin-left: 15px;
  }
  .player_sex{
    width: 85%;
    height: 20%;
    float: left;
    /*background-color: #2e6da4;*/
    margin-top: 1%;
    margin-left: 10%;
  }
  .type_2{
    width: 18%;
    height: 90%;
    float: left;
    /*background-color: black;*/
    margin-left: 1%;
  }
  .type_2 img{
    width: 68%;
    height: 73%;
  }
  .order_num{
    width: 85%;
    height: 5%;
    float: left;
    margin-top: 1%;
    /* background-color: #2e6da4;*/
    margin-left: 10%;
  }
  .search {
    width: 48%;
    height: 50%;
    float: left;
    margin-top:-3%;
    /*  background-color: #2e6da4;*/
    margin-left: 20%;
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
</style>
<script>
  import axios from 'axios';
  import ElButton from "../../node_modules/element-ui/packages/button/src/button";
  import ElInput from "../../node_modules/element-ui/packages/input/src/input";
  import ElRadio from "../../node_modules/element-ui/packages/radio/src/radio.vue";
  export default{
    components: {
      ElRadio,
      ElInput,
      ElButton},
    data(){
      return{
        gName:'',
        usergender:'',
        radio: '1',
        nums: 1,
        beizhu:'',
        accplayer:[],
        gnamelist:[
          {pic:"/static/image/yingxionglianmeng.jpg",value:"英雄联盟"},
          {pic:"/static/image/juediqiusheng.jpg",value:"绝地求生"},
          {pic:"/static/image/dota2.png",value:"DOTA2"},
          {pic:"static/image/yundingzhiyi.png",value:"云顶之弈"},
        ],
        itemsList:[
          {pic:"static/image/yingxionglianmeng.jpg",value:"王者荣耀"},
          {pic:"static/image/juediqiusheng.jpg",value:"和平精英"},

        ],
        loginName:'',
        user:{
          uid:'',
          userPic:''
        },
        condition:''
      }
    },
    methods: {
      //认证页面
      onverify:function () {
        this.$router.push('/verify');
      },
      //我的订单
      onmycart:function () {
        this.$router.push('/mycart');
      },
      handleChange(value) {
        console.log(value);
      },
      usergender1(x){
        this.usergender=x
        this.$message.success("友情提示!你选择的是"+ this.usergender)
      },
      chooseduanyou:function () {

        var duanyou=document.getElementById("duanyou")
        duanyou.style.display='block'
        shouyou.style.display='none'
      },
      chooseshouyou:function () {

        var shouyou=document.getElementById("shouyou")
        duanyou.style.display='none'
        shouyou.style.display='block'
      },
      //弹框提示选中游戏
      name(x) {
        this.gName=x.value
        this.$message.success("友情提示!你选择的是"+this.gName)
        //console.log( document.getElementsByClassName("ll").innerText)

      },
      tofastsearch:function () {
        //console.log(this.gName,"=== "+this.usergender)
        var gName=this.gName
        var usergender =this.usergender
        var nums=this.nums;
        //alert(nums)
        var beizhu=this.beizhu
        //alert(beizhu)
        /* var url = 'api/accplayer-player/findAccplayerByGnameAndUserGender/' + gName +"/"+ usergender
         axios.get(url).then(res=>{
         if(res.data!=null){
         this.$router.push({path:'/fastsearch/'+gName+'/'+usergender})
         }
         })*/
        this.$router.push({path:'/fastsearch/'+gName+'/'+usergender+'/'+nums+'/'+beizhu})

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
    onClickButtoninvite:function () {
      this.$router.push({path:'/invite'});
    },
    onClickButtoneight:function () {
      this.$router.push({path:'/eight'});
    },
    onClickButtonchat:function () {
      this.$router.push({path:'/chat'});
    },
    loginout:function () {
      var url = 'api/accplayer-user/user/loginout';
      axios.get(url).then(res=>{
        this.$message.warning(this.loginName+"已退出");
        this.loginName = '';
        this.user.userPic = '';
      })
    }},
    mounted:function () {
      var url = 'api/accplayer-user/user/getInfoByTel';
      axios.get(url).then(res=>{
        if(res.data!=null){
          this.user.userPic = res.data.userPic;
          this.user.uid = res.data.uid;
          this.loginName = res.data.userNickname;
        }
      })
    }
  }
</script>
