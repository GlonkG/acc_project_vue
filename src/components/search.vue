<template>
  <div id="outer">
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
      <div class="searchTop">
        <div class="topcon">
          <a href="http://localhost:8080/#/verify">
            <img src="https://yundown.daofengdj.com/static/home/img/searchPlayer/searchbanner.png">
          </a>
          <div class="restit">搜索“{{this.$route.params.condition}}”的结果
          </div>
        </div>
      </div>

      <div class="search_player">
        <div class="player_info" v-for="items in accplayer">
          <div class="pic">
            <img style="width: 100%;height: 100%;" :src="items.accPic" @click="intodetail(items)"/>
          </div>
          <div class="player_name">
            <span>{{items.userNickname}}</span>
          </div>
          <div class="player_name">
            <span>{{items.gduanwei}}</span>
          </div>
          <div class="player_name">
            <span >{{items.userGender}}</span>
          </div>
          <div class="player_price">
            <span style="color:red">¥:{{items.gprice}}</span>元/小时
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

  </div>
</template>
<style scoped>
  .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }

  @import "../../node_modules/swiper/dist/css/swiper.css";
  #outer{
    margin-top: -35px;
    background-color: #F7F8FA;
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
    margin-top: 22px;
    margin-left: 60px;
  }

  #log_reg{
    width: 17%;
    height: 50%;
    margin-top: 4px;
    float: left;
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

  .searchTop {
    width: 100%;
    background-color: #fff;
  }

  .searchTop .topcon {
    width: 1200px;
    margin: 0 auto;
    padding-top: 24px;
    text-align: center;
  }

  .restit {
    display: inline-block;
    font-size: 16px;
    font-weight: bold;
    color: #ff4e67;
    margin: 22px auto 0px;
    padding-bottom: 15px;
    border-bottom: 1px solid #ff4e67;
  }

  .search_player{
    width: 1200px;
    height: 600px;
    margin: 0 auto;
    padding-top: 24px;
    text-align: center;
    background-color: gainsboro;
  }
  .player_info{
    width:249px;
    float: left;
    height:280px;
    margin-top:1%;
    margin-left: 2%;
    background-color: ghostwhite;
  }
  .pic{
    width:249px;
    float: left;
    height:240px;
  }


  .player_name{
    text-align: center;
    width:50%;
    float: left;
    height:20px;
    /*    margin-left: 25%;*/
    line-height: 20px;
  }
  .player_price{
    text-align: right;
    width:100%;
    float: left;
    height:20px;
    margin-left: -9%;
    line-height: 20px;
    margin-top: -20px;
  }


</style>
<script>
  import { AudioPlayer } from '@liripeng/vue-audio-player'
  import '@liripeng/vue-audio-player/lib/vue-audio-player.css'
  import axios from 'axios';
  import ElButton from "../../node_modules/element-ui/packages/button/src/button";
  import Swiper from "swiper"
  export default{
    components: {ElButton,
      AudioPlayer},
    data(){
      return{
        dialogVisible: false,
        audioList: [
          /* 'https://glonk.oss-cn-beijing.aliyuncs.com/2019-11-18/1025192be3b24e348be1fbd96be13d1d-f20281273e9fdeef3f8d656a0a840b71.mp3'
           ,'https://glonk.oss-cn-beijing.aliyuncs.com/2019-11-18/309d506bec1442178192eaeb9b2f6d6a-f20281273e9fdeef3f8d656a0a840b71.mp3'*/
        ],
        accplayer:[],
        loginName:'',
        user:{
          uid:'',
          userPic:''
        },
        condition:''
      }
    },
    methods:{
      //点击图片进详情
      intodetail:function (items) {
        /*alert(items.apid);*/
        this.$router.push({path:'/playerinfo/'+items.apid});
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
      fun1:function () {
        this.$router.push({path:'/player/playerinfo'})
      },

      /*音频播放*/
      onBeforePlay(next) {
        next() // 开始播放
      },
      onClickButton() {
        alert('点击按钮');
      },
      toChat:function (userid) {
        alert("跳转陪玩页面"+userid)
        this.$router.push({name:"playerinfo",query:{userid:userid}})
      },
      /*onChat:function (userid) {
       alert("跳转聊天页面"+userid)
       this.$router.push({name:"websocket",query:{userid:userid}})
       }*/
      loginout:function () {
        var url = 'api/accplayer-user/user/loginout';
        axios.get(url).then(res=>{
          this.$message.warning(this.loginName+"已退出");
          this.loginName = '';
          this.user.userPic = '';
        })
      },
      oninfo:function () {
        this.$router.push('/userinfo');
      },
      //认证页面
      onverify:function () {
        this.$router.push('/verify');
      },
      //我的订单
      onmycart:function () {
        this.$router.push('/mycart');
      }
    },
    mounted:function () {
        var url='api/accplayer-search/multiQuery?print='+this.$route.params.condition;
        axios.get(url).then(res=>{
          if(res.data!=null){
              this.accplayer = res.data;
              console.log(res.data);
          }
        });
      var url = 'api/accplayer-user/user/getInfoByTel';
      axios.get(url).then(res=>{
        if(res.data!=null){
          this.user.userPic = res.data.userPic;
          this.user.uid = res.data.uid;
          this.loginName = res.data.userNickname;
        }
      });
      var swiper = new Swiper('.swiper-container', {
        freeMode: true,
        loop:true,
        slidesPerView: 4,
        //spaceBetween: 30,
        slidesPerGroup:4,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation:{
          nextE1:'.swiper-button-next',
          prevE1:'.swiper-button-prev'
        }
      });
    }
  }
</script>



