<template>
  <div id="public" >
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

    <div id="outer" v-for="items in accplayer">

      <!--<span style="float: left;color: white;margin-left:-1000px;"><a style="color: white" href="/">首页</a>></span>
      <span style="float: left;margin-left:-960px;color: white">英雄联盟陪玩</span>-->
      <div class="header" >
        <div class="pic" >
          <img :src="items.accPic"/>
        </div>
        <div class="player_info">
          <div class="player_name">
            <!--陪玩昵称-->
            <span>{{items.userNickname}}</span>
          </div>
          <div class="player_id">
            <!--陪玩id-->
            <span>{{items.apid}}</span>
          </div>
          <div class="player_id">
            <!--陪玩地址-->
            <span class="el-icon-location">保密</span>
          </div>
        </div>
        <div class="gift_scoll">
          <div class="inner-container">
            <p class="text" v-for="(text, index) in arr" :key="index">{{text}}</p>
          </div>
        </div>
        <div class="attention">
          <el-button @click="attention" plain style="background-image: linear-gradient(65deg, #FE586B 10%, #FF7F50 100%);border: hidden; width: 85%;
                height: 85%;font-size: 20px">
            <!--<el-icon class="el-icon-star-off" style="color:#FF1F78"></el-icon>-->
            <span id="anum">{{Attention}}</span>
            <span id="content" style="color: white">{{guanzhu}}</span>
          </el-button>
        </div>
        <div class="attention1">
          <el-icon class="el-icon-share" style="color:#FF1F78"></el-icon>
          <span>分享</span>
        </div>
      </div>

      <div class="player_image_big">
        <el-carousel :height="400+ 'px'" >
          <el-carousel-item v-for="item in Images" :key="item">
            <img :src="item.apic1" style="width: 376px;height: 400px;">
          </el-carousel-item>
          <el-carousel-item v-for="item in Images" :key="item">
            <img :src="item.apic2" style="width: 376px;height: 400px;">
          </el-carousel-item>
          <el-carousel-item v-for="item in Images" :key="item">
            <img :src="item.apic3" style="width: 376px;height: 400px;">
          </el-carousel-item>
          <el-carousel-item v-for="item in Images" :key="item">
            <img :src="item.apic4" style="width: 376px;height: 400px;">
          </el-carousel-item>
        </el-carousel>
      </div>
      <div id="inner" >
        <!--轮播图-->
        <el-carousel :interval="4000" type="card" height="110px">
          <el-carousel-item v-for="item in Images" :key="item">
            <img :src="item.apic1" style="width: 50%;height: 100%;"><!--86.11-->
          </el-carousel-item>
          <el-carousel-item v-for="item in Images" :key="item">
            <img :src="item.apic2" style="width: 50%;height: 100%;"><!--86.11-->
          </el-carousel-item>
          <el-carousel-item v-for="item in Images" :key="item">
            <img :src="item.apic3" style="width: 50%;height: 100%;"><!--86.11-->
          </el-carousel-item>
          <el-carousel-item v-for="item in Images" :key="item">
            <img :src="item.apic4" style="width: 50%;height: 100%;"><!--86.11-->
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="gift_title">
        <el-button plain style="background-image: linear-gradient(65deg, #FE586B 10%, #FF7F50 100%);border: hidden; width: 30%;
                height: 75%;font-size: 20px"><el-icon class="el-icon-star-off" style="color:#FF1F78"></el-icon><span style="color: white;text-align: center">礼物</span></el-button>
      </div>
      <!--礼物清单-->
      <div class="gift_list">
        <div class="list_1">
          <img style="width: 95%;height: 95%" src="/static/image/gift.png">
          <span>头条礼</span>
          <el-icon class="el-icon-finished" style="color:#FE586B" ></el-icon>
        </div>
        <div class="list_1">
          <img style="width: 95%;height: 95%" src="/static/image/gift3.png">
          <span>麦克风</span>
          <el-icon class="el-icon-finished" style="color:#FE586B"></el-icon>
        </div>
        <div class="list_1">
          <img  style="width: 95%;height: 95%" src="/static/image/gift2.png">
          <span>幸运星</span>
          <el-icon class="el-icon-finished" style="color:#FE586B"></el-icon>
        </div>
        <div class="list_1">
          <img style="width: 95%;height: 95%" src="/static/image/gift4.png">
          <span>棒棒哒</span>
          <el-icon class="el-icon-finished" style="color:#FE586B"></el-icon>
        </div>
        <div class="list_1">
          <img  style="width: 95%;height: 95%" src="/static/image/gift5.png">
          <span>鲜花</span>
          <el-icon class="el-icon-finished" style="color:#FE586B"></el-icon>
        </div>
        <div class="list_1">
          <img  style="width: 95%;height: 95%" src="/static/image/gift6.png">
          <span>抱抱</span>
          <el-icon class="el-icon-finished" style="color:#FE586B"></el-icon>
        </div>
        <div class="list_1">
          <img style="width: 95%;height: 95%" src="/static/image/gift7.png">
          <span>么么哒</span>
          <el-icon class="el-icon-finished" style="color:#FE586B"></el-icon>
        </div>
        <div class="list_1">
          <img  style="width: 95%;height: 95%" src="/static/image/gift8.png">
          <span>大熊</span>
          <el-icon class="el-icon-finished" style="color:#FE586B"></el-icon>
        </div>
      </div>
      <!--我的礼物-->
      <div class="my_gift">
      </div>
      <!--陪玩信息-->
      <div class="player_message">
        <div class="game_title">
          <div class="game_box">
            <span>{{items.gname}}</span>
          </div>
        </div>
        <div class="game_pic">
          <img src="/static/image/yingxionglianmeng.jpg"/>
        </div>
        <div class="game_price">
          <span style="color: red;font-size: 40px;">¥{{items.gprice}}</span>元/小时
        </div>
        <div class="player_duanwei">
          <span style="color: red;">{{items.gduanwei}}</span>
        </div>
        <div class="order_num">
          <el-input-number v-model="num"style="float:left;margin-top: 5px;width: 30%;height: 85%" @change="handleChange" :min="1" :max="10" label="下单数量"></el-input-number>
        </div>
        <!--聊一聊-->
        <div class="liaoyiliao">
          <el-button plain style="background-color:#FF7F50;border: hidden; width: 15%;
                height: 75%;font-size: 20px;text-align: center;margin-top: 3%">
            <span style="color: white">聊一聊</span></el-button>
        </div>
        <!--立即下单-->
        <div class="liaoyiliao">
          <el-button plain style="background-color:#FE586B;border: hidden; width: 15%;
                height: 75%;font-size: 20px;text-align: center;margin-top: 3%">
            <span style="color: white" @click="interim()">立即下单</span></el-button>
        </div>
        <div class="player_intr">
          <div class="title">
            <span>服务介绍</span>
          </div>
          <div class="intr">
            <span>{{items.adescription}}</span>
          </div>
        </div>
        <div class="intr_footer">
          <div class="footer_1">
            <span>未开始随时退</span>
          </div>
          <div class="footer_2">
            <span>超时自动退</span>
          </div>
          <div class="footer_3">
            <span>不满意可退单</span>
          </div>
        </div>
        <div class="user_comment">
          <font style="font-size: 25px;font-family: 黑体;line-height: 50px">用户评价</font>
        </div>
        <!--用户评论-->
        <div class="comment" v-for="items in Comment">
          <div class="user_img" v-model="user">
            <img style="border-radius: 50%;" :src="user.userPic"/>
          </div>
          <div class="user_name">
            <span>{{items.userNickname}}</span>
          </div>
          <div class="comment_detail">
            <span>{{items.ccontext}}</span>
          </div>
          <div class="comment_time">
            <span>{{timestampToTime(items.ccreatetime)}}</span>
          </div>

          <!--点赞+评论-->

     <!--     <div class="dianzan" style="width: 25%;height: 25%;float: left;margin-left: 10%">
            &lt;!&ndash;
              <span><i v-show="dianzan" class="el-icon-star-off" ></i></span>
            </el-button>&ndash;&gt;
            <div id="admire" >
              <el-button @click="change()" style="margin-left:16px;border: hidden">点赞</el-button>
              <img src="/static/image/dianzan1.png"  v-if="!admire" @click="change()">
              <img src="/static/image/dianzan2.png" v-else @click="change()">
            </div>


            <el-button id="comm" @click="commm()" style="margin-left: 16px;border: hidden">
              <span><i class="el-icon-chat-line-square"></i>评论</span>
            </el-button>
            <div id="comment" style="display: none;width: 500px;height: 100px;">

              <input ref="input" style="width: 300px;height: 50px" id="inp" placeholder="请输入您的回复"/>

            </div>
            <button  @click="aa">提交</button>
            &lt;!&ndash;<div v-for="items in arr">{{items}}</div>&ndash;&gt;

          </div>-->






        </div>
    </div>
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
  #outer{
    width: 100%;
    height:1200px;
    margin-top: -10px;
    /*background: url("/static/image/beijing.jpg");*/
  }
  #public{
    width: 100%;
    height:1200px;
    margin-top: -10px;
    background: url("/static/image/beijing.jpg");
  }

  #header{
    width: 100%;
    height: 90px;
    margin-top: -60px;
    background-color: white;
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

  .header{
    width: 85%;
    height:12%;
    background-color: white;
    float: left;
    border-radius: 8px;
    margin-left: 5%;
    margin-top: 2%;
  }
  .pic{
    width: 9%;
    height:84%;
    float: left;
    margin: 1%;
  }
  .pic img{
    border-radius: 50%;
    width: 100%;
    height:100%;
    float: left;
  }
  .player_info{
    width: 25%;
    height:95%;
    float: left;
    /* background-color: #2e6da4;*/
  }
  .player_name{
    width: 95%;
    height:30%;
    float: left;
    margin-top: 5%;
    text-align: left;
    /*background-color: #2e6da4;*/
  }
  .player_id{
    width: 95%;
    height:20%;
    float: left;
    text-align: left;
    margin-top: 1%;
    /*  background-color: #2e6da4;*/
  }
  .gift_scoll{
    width: 45%;
    height:70%;
    float: left;
    overflow: hidden;
    margin-left: 2%;
    margin-top: 2%;
  }
  .inner-container {
    width: 100%;
    height: 100%;

    animation: myMove 10s linear infinite;
    animation-fill-mode: forwards;
  }
  /*文字无缝滚动*/
  @keyframes myMove {
    0% {
      transform: translateY(0);
    }
    10% {
      transform: translateY(-25px);
    }
    20% {
      transform: translateY(-25px);
    }
    30% {
      transform: translateY(-50px);
    }
    40% {
      transform: translateY(-50px);
    }
    50% {
      transform: translateY(-75px);
    }
    60% {
      transform: translateY(-75px);
    }
    70% {
      transform: translateY(-105px);
    }
    80% {
      transform: translateY(-105px);
    }
    90% {
      transform: translateY(-130px);
    }
    100% {
      transform: translateY(-130px);
    }
  }
  .attention{
    width: 10%;
    height:40%;
    float: left;
    margin-left: 3%;
    margin-top: 2%;
  }
  .attention1{
    width: 10%;
    height:25%;
    float: left;
    margin-left: 3%;
    margin-top: 1%;
  }
  .player_image_big{
    width: 25%;
    height:25%;
    float: left;
    border-radius: 8px;
    margin-left: 5%;
    margin-top: 1%;
  }
  #inner{
    width: 25%;
    height:12%;
    float: left;
    border-radius: 8px;
    margin-left: -25%;
    margin-top: 25%;
    background-color: white;
  }
  .gift_title{
    width: 25%;
    height:5%;
    float: left;
    margin-left: -25%;
    margin-top: 33%;
    background-color: white;
  }
  .gift_list{
    width: 25%;
    height:20%;
    float: left;
    border-radius: 8px;
    margin-left: -25%;
    margin-top: 36%;
    background-color: white;
  }
  .list_1{
    width: 20%;
    height:30%;
    float: left;
    border-radius: 8px;
    margin-left: 4%;
    margin-top: 6%;
    border: solid 1px gainsboro;
  }
  .my_gift{
    width: 60%;
    height:13%;
    float: left;
    border-radius: 8px;
    margin-left: 1%;
    margin-top: 1%;
    background-color: #2e6da4;
  }
  .player_message{
    width: 60%;
    height:80%;
    float: left;
    border-radius: 8px;
    margin-left: 1%;
    margin-top: 1%;
    background-color: white;
  }
  .game_title{
    width: 100%;
    height:6%;
    float: left;
    border-radius: 5px;
    line-height: 55px;
    margin-left: 0%;
    margin-top: 0%;
    background-color: #FF7F50;
  }
  .game_box{
    width: 15%;
    height:100%;
    float: left;
    font-size: 20px;
    border-radius: 8px;
    margin-left: 1%;
    margin-top: 0%;
    background-color: orange;
  }
  .game_pic{
    width: 15%;
    height:15%;
    float: left;
    border-radius: 8px;
    margin-left: 1%;
    margin-top: 1%;
    background-color: white;
  }
  .game_price{
    width: 20%;
    height:0%;
    float: left;
    border-radius: 8px;
    margin-left: -3%;
    margin-top: 1%;
    background-color: white;
  }
  .player_duanwei{
    width: 10%;
    height:2%;
    float: left;
    margin-left: -16%;
    margin-top: 6%;
    background-color: orange;
  }
  .order_num{
    width: 45%;
    height:5%;
    float: left;
    border-radius: 8px;
    margin-left: -16%;
    margin-top: 9%;
    background-color: white;
  }
  .player_intr{
    width: 80%;
    height:10%;
    float: left;
    border-radius: 8px;
    margin-left: -14%;
    margin-top: 5%;
    background-color: white;
  }
  .title{
    width: 80%;
    height:10%;
    float: left;
    text-align: left;
    border-radius: 8px;
    background-color: white;
  }
  .intr{
    width: 100%;
    height:20%;
    float: left;
    text-align: left;
    margin-top: 2%;
    border-radius: 8px;
    background-color: white;
  }
  .intr_footer{
    width: 100%;
    height:3%;
    line-height: 25px;
    float: left;
    text-align: right;
    background-color: gainsboro;
  }
  .footer_1{
    width: 12%;
    height:85%;
    float: left;
    margin-left: 50%;
    text-align: center;
    border-radius: 8px;

  }
  .footer_2{
    width: 12%;
    height:85%;
    float: left;
    margin-left: 5%;
    text-align: center;
    border-radius: 8px;
  }
  .footer_3{
    width: 12%;
    height:85%;
    float: left;
    margin-left: 5%;
    text-align: center;
    border-radius: 8px;
  }
  .user_comment{
    width: 25%;
    height:5%;
    float: left;
    margin-left: 5%;
    text-align: center;
    border-radius: 8px;
  }
  .comment{
    width: 100%;
    height:15%;
    float: left;
    text-align: center;
  }
  .user_img{
    width: 10%;
    height:65%;
    float: left;
    margin: 2%;
  }
  .user_img img{
    width: 100%;
    height:100%;
    float: left;
  }
  .user_name{
    width: 50%;
    height:30%;
    float: left;
    margin-top: 3%;
    text-align: left;
  }
  .comment_detail{
    width: 50%;
    height:30%;
    float: left;
    margin-top: 1%;
    text-align: left;
  }
  .comment_time{
    width: 24%;
    height:30%;
    float: left;
    margin-top: -5%;
    text-align: left;
    margin-left: 10%;
  }
  /* .player_cpmment{
     width: 60%;
     height:30%;
     float: left;
     border-radius: 8px;
     margin-left: 1%;
     margin-top: 1%;
     background-color: #2e6da4;
   }*/

  #admire img{
    width: 25px;
    height:25px;
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
</style>
<script>
  import axios from 'axios';
  import ElInput from "../../node_modules/element-ui/packages/input/src/input";
  import ElButton from "../../node_modules/element-ui/packages/button/src/button";
  var local_admire=localStorage.getItem('admire');
  export default{
    components: {
      ElButton,
      ElInput},
    data(){
      return{
        drawer: false,
        direction: 'btt',
        Images:[],
        Comment:[],
        accplayer:[],
        num:1,
        loginName:'',
        user:{
          uid:'',
          userPic:'',
          userNickname:''
        },
        condition:'',
        order:{
            orderNo:'',
            apid:'',
            gid:'',
            gname:'',
            userNickname:'',
            oappointedtime:1,
            omoney:''
        },
        dianzan:false,
        userComment:'',
        arr: [
          '18:00  不空赠送窝窝头100个麻辣烫',
          '18:00  不空赠送一块钱四个100个麻辣烫',
          '18:00  不空赠送嘿嘿100个麻辣烫',
          '18:00  不空赠送窝窝头100个麻辣烫',
          '18:00  不空赠送一块钱四个100个麻辣烫',
          '18:00  不空赠送嘿嘿100个麻辣烫',
        ],
        Attention:'',
        guanzhu:'',
        admire:local_admire,
        //arr:['first','secend'],
        dianzan:false
      }
    },
    methods:{
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
      commm:function () {
        var nn=document.getElementById("comment")
        //alert(nn)
        if(nn.style.display="none"){
          nn.style.display="block";
        }else{
          nn.style.display="none";
        }
      },
      aa:function () {
        var huifu = this.$refs.input.value
        alert(huifu)
        console.log(this.arr)
        this.arr.push(inp.value)
      },
      change:function () {
        this.admire==false?this.admire=true:this.admire=false;
        localStorage.setItem('admire',this.admire);
      },
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      },


      handleChange(value) {
        //console.log(value);
        this.order.oappointedtime = value;
      },
      //立即下单
      interim:function () {
        this.order.apid = this.$route.params.apid;
        //alert(this.order.apid);
        var url = 'api/accplayer-acc/acc/findByApids/'+this.$route.params.apid;
        axios.get(url).then(res=>{
          if(res.data!=null){
           for(var i=0;i<res.data.length;i++){
             this.order.gid = res.data[i].gid;
             this.order.gname = res.data[i].gname;
             this.order.omoney = (res.data[i].gprice)*(this.order.oappointedtime);
             this.order.userNickname = res.data[i].userNickname;
             //alert(this.order.userNickname)
             //alert(this.order.omoney);
           }
            var url1 = 'api/accplayer-order/saveOrder';
            axios.post(url1,this.order).then(res=>{
              if(res.data!=null){
                //console.log(res.data);
                this.order.orderNo = res.data.orderNo;
                //console.log(this.order.orderNo);
                this.$router.push({path:'/cartinfo/'+this.order.orderNo});
              }
            })
          }
        });
      },
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
      //关注
      attention:function () {
        var anum=parseInt(document.querySelector("#anum").innerHTML) //被关注的数量
        var content=document.querySelector("#content").innerHTML//用户关注的状态 0未关注，1关注，默认0
      var url = 'api/accplayer-user/user/getInfoByTel';
        axios.get(url).then(res=>{
            if(res.data!=null){
                this.user.uid = res.data.uid;
               // alert(this.user.uid);
            }
        })
        if(content=="关注"){
          var data={"uid":this.user.uid,"apid":this.$route.params.apid}
          var url='api/accplayer-player/saveAttention';
          axios.post(url,data).then(res=>{
            console.log("关注："+res.data)//查看后台看用户对陪玩的关注状态
            if(res.data==0){
              anum=anum+1;
              this.Attention=anum
              this.guanzhu="已关注"
              //陪玩被关注的总数量(apid,aStatus)
              var url="api/accplayer-player/findNum/?apid="+this.$route.params.apid+"&aStatus="+aStatus
              axios.get(url).then(res=>{
                if (res.data!=null){
                  this.Attention=res.data
                  //this.$router.push({name:'playerinfo1'})
                }
              })
            }
          })
        }else if(content=="已关注"){

          var data={"uid":this.user.uid,"apid":this.$route.params.apid}
          var url='api/accplayer-player/findAttention';
          axios.post(url,data).then(res=>{
            res.data//查看后台看用户对陪玩的关注状态
            if(res.data==0){
              anum=anum-1
              this.Attention=anum
              this.guanzhu="关注"

              var url="api/accplayer-player/findNum/?apid="+this.$route.params.apid+"&aStatus="+aStatus
              axios.get(url).then(res=>{
                if (res.data!=null){
                  this.Attention=res.data
                  //this.$router.push({name:'playerinfo1'})
                }
              })
            }
          })
        }
      }
    },
    mounted(){
      var url = 'api/accplayer-acc/acc/findByApids/' + this.$route.params.apid;
      axios.get(url).then(res => {
        if (res.data != null) {
          this.accplayer = res.data;
        }
      });
      var url = 'api/accplayer-user/user/getInfoByTel';
      axios.get(url).then(res => {
        if (res.data != null) {
          this.user.userPic = res.data.userPic;
          this.loginName = res.data.userNickname;
          this.user.uid = res.data.uid;
        }
        //刷新页面判断关注状态
        //alert(this.user.uid+"===="+this.$route.params.apid)
        var url='api/accplayer-player/find/?uid=' + this.user.uid  + '&apid='+this.$route.params.apid;
        axios.get(url).then(res=>{
            console.log(res.data);
          if(res.data==0){
            console.log("状态1："+res.data)
            this.guanzhu = "关注"
          }else {
            console.log("状态2：" + res.data)
            this.guanzhu= "已关注"
          }
        })
      });
      //详情轮播图
      var url = 'api/accplayer-acc/images/findImagesByApid/' + this.$route.params.apid;
      axios.get(url).then(res => {
        if (res.data != null) {
          this.Images = res.data.list;
          console.log(res.data);
        }
      });
      //查询用户评论
      var url = 'api/accplayer-acc/comment/findCommentByApid/' + this.$route.params.apid;
      axios.get(url).then(res => {
        if (res.data != null) {
          this.Comment = res.data.list;
          console.log(res.data);
          for (var i = 0; i < this.Comment.length; i++) {
            this.user.userNickname = this.Comment[i].userNickname;
            console.log(this.user.userNickname);
          }
        }
      });
      //查询用户头像
      var url = 'api/accplayer-user/user/searchByUserName/' + this.user.userNickname;
      axios.get(url).then(res => {
        if (res.data != null) {
          this.user = res.data;
        }
      });
      //陪玩被关注的总数量(apid,aStatus)
      var aStatus = 1;
      var url = "api/accplayer-player/findNum/?apid=" + this.$route.params.apid + "&aStatus=" + aStatus;
//      var url="api/accplayer-player/findNum"
//        var data={"apid":apid,"aStatus":aStatus}
      axios.get(url).then(res => {
//           console.log(res.data)
        if (res.data != null) {
          this.Attention = res.data
          //this.$router.push({name:'playerinfo1'})
        }
      })
    }
  }
</script>
