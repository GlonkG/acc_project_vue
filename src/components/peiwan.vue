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
          <van-goods-action-button width="50%" color="#FE6069" type="info" text="来聊天" @click="onClickButtonchat()">来聊天</van-goods-action-button>
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
    <div class="midd">
      <!--游戏菜单-->
      <!--<div class="wet">-->
        <div class="sidebar">
          <div class="sidebar_content">
            <div class="sidebar_content_title">
              <i class="el-icon-aim"></i>游戏类型
            </div>
            <div class="items_box" v-model="accplayer">
              <a  @click="lol()" class="game_item active" id="LOL">
                <i class="game_icon">
                  <img class="img1" src="https://img1.daofengdj.com/uploads/images/20191018/2af2db213a4a80ec660cf634bcbef47e.png" alt="">
                  <img class="img2" src="https://img1.daofengdj.com/uploads/images/20191018/12ef4a48e7b298f79ecad6b3ca8dd5e2.png" alt="">
                </i>英雄联盟</a>
              <a  @click="pubg()" id="PUBG" class="game_item ">
                <i class="game_icon">
                  <img class="img1" src="https://img1.daofengdj.com/uploads/images/20191018/5a0cdc7aad94af97196255262b39cb62.png" alt="">
                  <img class="img2" src="https://img1.daofengdj.com/uploads/images/20191018/ac3d1c0d63f0cf67a0d832dd36a427a8.png" alt="">
                </i>绝地求生                </a>
              <a  @click="hpjy()" id="HPJY" class="game_item ">
                <i class="game_icon">
                  <img class="img1" src="https://img1.daofengdj.com/uploads/images/20191018/da3836e609b9b72f313317ee3fd513aa.png" alt="">
                  <img class="img2" src="https://img1.daofengdj.com/uploads/images/20191018/60a6cfcc5857c6d734094565226f3cc5.png" alt="">
                </i>和平精英                </a>
              <a  @click="wzry()" id="WZRY" class="game_item ">
                <i class="game_icon">
                  <img class="img1" src="https://img1.daofengdj.com/uploads/images/20191018/4d0d5625ac30610ef2db9503924c5c3e.png" alt="">
                  <img class="img2" src="https://img1.daofengdj.com/uploads/images/20191018/62a7f364e0f531a86643edaad576aff6.png" alt="">
                </i>王者荣耀                </a>
              <a  @click="ydzy()" id="YDZY" class="game_item ">
                <i class="game_icon">
                  <img class="img1" src="https://img1.daofengdj.com/uploads/images/20191018/8b6dbc781a73e5a756b1b071808d9933.png" alt="">
                  <img class="img2" src="https://img1.daofengdj.com/uploads/images/20191018/6388ac83235991bf04995efc8029ed16.png" alt="">
                </i>云顶之弈                </a>
              <a  @click="apex()" id="APEX" class="game_item ">
                <i class="game_icon">
                  <img class="img1" src="https://img1.daofengdj.com/uploads/images/20191018/805c9e0cea5f98fa6cdd9273eaba99b4.png" alt="">
                  <img class="img2" src="https://img1.daofengdj.com/uploads/images/20191018/fcc70ce4583f13e6d81ca686d7f5462d.png" alt="">
                </i>APEX英雄                </a>
              <a  @click="crossf()" class="game_item " id="CROSSF">
                <i class="game_icon">
                  <img class="img1" src="https://img1.daofengdj.com/uploads/images/20191018/e6f0e6048f2257a89d6c938d544d2894.png" alt="">
                  <img class="img2" src="https://img1.daofengdj.com/uploads/images/20191018/b8bd0a59ae6f55b2a3f9137d1a370a2e.png" alt="">
                </i>穿越火线                </a>

            </div>
         <!-- </div>-->
        </div>
      </div>
    </div>

    <!--中偏右 类型排序-->
    <div class="list_main">
      <div class="midd_right">
        <div class="midd_right_shouye">
          <a href="/" style="color: red;font-size: 13px;">首页</a>
          <em style="font-size: 13px;">/一起来开黑</em>
        </div>
        <!--筛选-->
        <div class="list_search">
          <div class="midd_right_shaixuan" style="color: red">筛选</div>
          <div class="midd_right_shaixuan_list">
            <el-dropdown>
              <el-button size="small" type="#fff" style="border-radius: 20px">
                性别<i class="el-icon-arrow-down el-icon--right" ></i>
              </el-button>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item @click="lol()">不限</el-dropdown-item>
                <el-dropdown-item ><span @click="sex_man()" id="man">男</span></el-dropdown-item>
                <el-dropdown-item ><span @click="sex_woman()" id="woman">女</span></el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </div>
        <!--排序-->
        <div class="midd_right_paixu" style="color: red">排序</div>
        <div class="midd_right_paixu_btn">
          <el-button size="small" type="#fff" style="border-radius: 20px">综合排序</el-button>
          <el-button size="small" type="#fff" style="border-radius: 20px">接单</el-button>
          <el-button size="small" type="#fff" style="border-radius: 20px" @click="jiage()">价格</el-button>
          <el-button size="small" type="#fff" style="border-radius: 20px">评价</el-button>
        </div>
        <!--陪玩信息-->
        <div  v-model="accplayer" id="player_info" v-infinite-scroll="load" style="overflow: auto" infinite-scroll-distance="10">
          <ul>
            <li style="list-style-type:none" v-for="items in accplayer"  class="list-item">
              <div class="player_box">
                <div class="player_image">
                  <img title="是你的甜心推荐陪玩" @click="intodetail(items)" style="border-radius: 5px;" :src="items.accPic"/>
                </div>
                <div class="player_name">
                  <span>{{items.userNickname}}</span>
                </div>
                <div class="player_duanwei">
                  <span style="color: orangered;">{{items.gduanwei}}</span>
                </div>
                  <div class="player_voice">
                      <span style="margin-top: 30px;">
                    <audio  :src="items.accVoice" preload="auto" style="width: 100px;margin:15%;height: 25px;" controls></audio>
                 </span>
                  </div>
                  <!--<span>{{items.gvoice}}</span>-->
                <div class="player_price">
                  ¥<span style="color: red;">{{items.gprice}}</span>元/小时
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>



    </div>

  </div>
</template>
<script>
  import ElButton from "../../node_modules/element-ui/packages/button/src/button.vue";
  import axios from 'axios'
  import { AudioPlayer } from '@liripeng/vue-audio-player'
  import '@liripeng/vue-audio-player/lib/vue-audio-player.css'
  export default {
    components: {ElButton,
      AudioPlayer},
    data(){
      return {
        count: 0,
        loading: false,
        accplayer:[],
        loginName:'',
        user:{
          userPic:''
        },
        condition:'',
        audioList: [
          /*'https://glonk.oss-cn-beijing.aliyuncs.com/2019-11-18/1025192be3b24e348be1fbd96be13d1d-f20281273e9fdeef3f8d656a0a840b71.mp3'
           ,'https://glonk.oss-cn-beijing.aliyuncs.com/2019-11-18/309d506bec1442178192eaeb9b2f6d6a-f20281273e9fdeef3f8d656a0a840b71.mp3'*/
        ]
      }
    },
    mounted:function () {
      var url = 'api/accplayer-user/user/getInfoByTel';
      axios.get(url).then(res=>{
        if(res.data!=null){
          this.user.userPic = res.data.userPic;
          this.loginName = res.data.userNickname;
        }
      });
      var gName =(document.getElementById('LOL').innerText);
      var url='api/accplayer-acc/acc/findAccplayerBygName/'+gName;
      axios.get(url).then(res=>{
        if(res.data!=null){
          console.log(res.data)
          this.accplayer=res.data;

        }
      })
    },
    methods: {
      jiage:function () {
        var url = 'api/accplayer-acc/acc/findUserPrice';
        axios.get(url).then(res=>{
          if(res.data!=null){
            this.accplayer = res.data;
          }
        })
      },
      /*音频播放*/
      onBeforePlay(next) {
        next() // 开始播放
      },
      onClickButton() {
        alert('点击按钮');
      },
      handleClick() {
        alert('button click');
      },
      load () {
        this.count +=60
      },

      lol:function () {
        var gName =(document.getElementById('LOL').innerText);
        var url='api/accplayer-acc/acc/findAccplayerBygName/'+gName;
        axios.get(url).then(res=>{
          if(res.data!=null){
            console.log(res.data)
            this.accplayer=res.data;
          }
        })
      },
      wzry:function () {
        var gName =(document.getElementById('WZRY').innerText);
        var url='api/accplayer-acc/acc/findAccplayerBygName/'+gName;
        axios.get(url).then(res=>{
          if(res.data!=null){
            console.log(res.data)
            this.accplayer=res.data;
          }
        })
      },
      pubg:function () {
        var gName =(document.getElementById('PUBG').innerText);
        var url='api/accplayer-player/findAccplayerBygName/'+gName;
        axios.get(url).then(res=>{
          if(res.data!=null){
            console.log(res.data)
            this.accplayer=res.data;
          }
        })
      },
      hpjy:function () {
        var gName =(document.getElementById('HPJY').innerText);
        var url='api/accplayer-acc/acc/findAccplayerBygName/'+gName;
        axios.get(url).then(res=>{
          if(res.data!=null){
            console.log(res.data)
            this.accplayer=res.data;
          }
        })
      },
      ydzy:function () {
        var gName =(document.getElementById('YDZY').innerText);
        var url='api/accplayer-acc/acc/findAccplayerBygName/'+gName;
        axios.get(url).then(res=>{
          if(res.data!=null){
            console.log(res.data)
            this.accplayer=res.data;
          }
        })
      },
      apex:function () {
        var gName =(document.getElementById('APEX').innerText);
        var url='api/accplayer-acc/acc/findAccplayerBygName/'+gName;
        axios.get(url).then(res=>{
          if(res.data!=null){
            console.log(res.data)
            this.accplayer=res.data;
          }
        })
      },
      crossf:function () {
        var gName =(document.getElementById('CROSSF').innerText);
        var url='api/accplayer-acc/acc/findAccplayerBygName/'+gName;
        axios.get(url).then(res=>{
          if(res.data!=null){
            console.log(res.data)
            this.accplayer=res.data;
          }
        })
      },
      sex_man:function () {
        var man=(document.getElementById("man").innerHTML);
        var  url='api/accplayer-acc/acc/findAccplayerBygGender/'+man;
        axios.get(url).then(res=>{
          if(res.data!==null){
            console.log(res.data)
            this.accplayer=res.data;
          }
        })

      },
      sex_woman:function () {
        var gGender=(document.getElementById("woman").innerHTML);
        alert(gGender)
        var  url='api/accplayer-acc/acc/findAccplayerBygGender/'+gGender;
        axios.get(url).then(res=>{
          if(res.data!==null){
            console.log(res.data)
            this.accplayer=res.data;
          }
        })
      },
      searchaUser:function (condition) {
        var url='api/es-sql/multiQuery?print='+this.condition;
        axios.get(url).then(res=>{
          if(res.data!=null){
            this.$router.push({path:'/search/'+this.condition})
          }
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
      onClickButtoninvite:function () {
        this.$router.push({path:'/invite'});
      },
      onClickButtoneight:function () {
        this.$router.push({path:'/peiwan'});
      },
      onClickButtonchat:function () {
        this.$message.error("聊天室建设中")
      },
      searchaUser:function (condition) {
        console.log(this.condition);
        var url='api/accplayer-search/multiQuery?print='+this.condition;
        axios.get(url).then(res=>{
          if(res.data!=null){
            this.$router.push({path:'/search/'+this.condition});
            console.log(res.data);
          }
        })
      },
      //认证页面
      onverify:function () {
        this.$router.push('/verify');
      },
      //我的订单
      onmycart:function () {
        this.$router.push('/mycart');
      },
      //进详情
      intodetail:function (items) {
          /*alert(items.apid);*/
          this.$router.push({path:'/playerinfo/'+items.apid});
      }
    },
    computed: {
      noMore () {
        return this.count >=100
      },
      disabled () {
        return this.loading || this.noMore
      }
    },


  }
</script>
<style scoped>
  #outer{
    margin-top: -35px;
    background-color: #F7F8FA;
    width: 100%;
    height: 100%;
    /*position: fixed;*/
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


  .midd{
    width:13%;
    height:1200px ;
    float: left;
    /* background-color: #00AA88;*/
    top: 85px;
    position: fixed;
  }

  .wet{
    float: left;
  }

  .sidebar {
    float: left;
    left: 7px;
    height: 100%;
    width: 299px;
    background: #181726;
    overflow-y: auto;
  }
  .sidebar .sidebar_content {
    padding: 88px 10px 10px 10px;
  }
  .sidebar .sidebar_content .sidebar_content_title {
    font-size: 25px;
    color: #fff;
    margin-left: -80px;
    margin-top: -50px;
  }
  .sidebar .sidebar_content .sidebar_content_title .sidebar_icon {
    width: 20px;
    height: 20px;
    float: left;
    margin-top: 3px;
    margin-right: 8px;
  }


  .sidebar .sidebar_content .items_box {
    margin: 25px 37px;
  }
  .sidebar .sidebar_content .items_box a.game_item,
  .sidebar .sidebar_content .items_box a.item_handle {
    float: left;
    display: block;
    width: 120px;
    height: 50px;
    margin: 5px 0;
    color: #ccc;
    line-height: 50px;
    border-radius: 18px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    padding: 0 10px;
    font-size: 18px;
  }
  .sidebar .sidebar_content .items_box a.game_item .game_icon,
  .sidebar .sidebar_content .items_box a.item_handle .game_icon {
    width: 18px;
    height: 18px;
    display: inline-block;
    margin-bottom: -4px;
    margin-right: 2px;
    position: relative;
  }
  .sidebar .sidebar_content .items_box a.game_item .game_icon img,
  .sidebar .sidebar_content .items_box a.item_handle .game_icon img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    border: none;
  }
  .sidebar .sidebar_content .items_box a.game_item .game_icon .img1,
  .sidebar .sidebar_content .items_box a.item_handle .game_icon .img1 {
    opacity: 1;
  }
  .sidebar .sidebar_content .items_box a.active,
  .sidebar .sidebar_content .items_box a:hover {
    color: #fff;
    background: -webkit-linear-gradient(left, #FE586B, #FF9C58);
    background: -o-linear-gradient(right, #FE586B, #FF9C58);
    background: -moz-linear-gradient(right, #FE586B, #FF9C58);
    background: linear-gradient(to right, #FE586B, #FF9C58);
  }
  .sidebar .sidebar_content .items_box a.active .game_icon .img1,
  .sidebar .sidebar_content .items_box a:hover .game_icon .img1 {
    opacity: 0;
  }
  .sidebar .sidebar_content .items_box a.active .game_icon .img2,
  .sidebar .sidebar_content .items_box a:hover .game_icon .img2 {
    transition: 0.5s ease;
    opacity: 1;
  }
  .sidebar .sidebar_content .items_box a.hide {
    display: none;
  }
  .sidebar .sidebar_content .items_box .unfold em {
    display: inline-block;
    width: 6px;
    height: 6px;
    /*background: url('../../img/searchPlayer/list_v3/arrow_down.png') no-repeat center center;*/
    margin-left: 4px;
  }
  .sidebar .sidebar_content .items_box .unfold:hover em {
    /* background: url('../../img/searchPlayer/list_v3/arrow_down_white.png') no-repeat center center;*/
  }
  .sidebar .sidebar_content .items_box .pack_up em {
    display: inline-block;
    width: 6px;
    height: 6px;
    /*background: url('../../img/searchPlayer/list_v3/arrow_up.png') no-repeat center center;*/
    margin-left: 4px;
  }
  .sidebar .sidebar_content .items_box .pack_up:hover em {
    /*  background: url('../../img/searchPlayer/list_v3/arrow_up_white.png') no-repeat center center;*/
  }
  .sidebar .sidebar_content .items_box:after {
    content: '';
    visibility: hidden;
    display: block;
    height: 0;
    clear: both;
  }
  .list_main{
    width:85%;
    float: left;
    margin-top: 100px;
    height:100%;
    /*background-color: #00CCFF;*/
  }
  .list_main .midd_right{
    width: 85%;
    height: 165px;
    float: right;
    margin-right: -83px;
    /*background-color: #00CCFF;*/
  }
  .midd_right_shouye{
    margin-left: -576px;
    width: 1306px;
    height: 10px;
    font-size: 18px;
    margin-top: -50px;
  }
  .list_search{
    width: 1306px;
    height: 143px;
    margin-top: 25px;
    margin-left: 18px;
  }
  .midd_right_shaixuan{
    font-size: 18px;
    margin-top: 10px;
    width: 50px;
    height: 50px;
    line-height: 50px;

  }
  .midd_right_shaixuan_list{
    margin-top: -45px;
    margin-left: -82%;

  }
  .el-dropdown {
    vertical-align: top;
  }
  .el-dropdown + .el-dropdown {
    margin-left: 15px;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }



  .midd_right_paixu{
    font-size: 18px;
    margin-top: -85px;
    margin-left: 17px;
    width: 50px;
    height: 50px;
    line-height: 36px;
  }
  .midd_right_paixu_btn{
    margin-top: -48px;
    margin-left: -60%;
  }
  #player_info{
    width: 85%;
    height: 100%;

    position: fixed;

    background-color: ghostwhite;
    float: left;
  }
  #player_info .player_box{
    width: 20%;
    height: 310px;
    float: left;
    margin: 1%;
    background-color: white;
  }
  .player_image{
    width: 90%;
    height: 75%;
    float: left;
  }
  .player_image img{
    width: 100%;
    height: 100%;
    margin-left: 13px;
  }
  .player_name{
    width: 40%;
    height: 15%;
    margin-top: 3%;
    float: left;
    font-size: 14px;
    font-weight: bold;
    color: #222;
    /* background-color: #00AA88;*/
  }
  .player_duanwei{
    width: 25%;
    height: 15%;
    margin-top: -15%;
    margin-left: 190px;
    float: left;
    /* background-color: #00AA88;*/
  }
  .player_voice{
    width: 35%;
    height: 10%;
    margin-top: -12%;
    margin-left: 10px;
    float: left;
    /*  background-color: #00AA88;*/
  }
  .player_price{
    width: 40%;
    height: 10%;
    margin-top: -6%;
    margin-left: 165px;
    float: left;
    /*background-color: #00AA88;*/
  }

  /*.player_voice{
    width: 40%;
    height: 50%;
    margin-left: 6%;
    margin-top: 2%;
    float: left;
  }*/

</style>
