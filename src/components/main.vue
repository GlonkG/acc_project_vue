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
      <div id="body">
        <div class="game_type">
          <div class="type_box">
            <img style=border-radius:10px @click="peiwan_lol()" src="/static/image/lol.png"/>
            <p style="font-size: 15px;float: left;margin-left: 30px;margin-top: 8px;" id="peiwan_lol">英雄联盟</p>
          </div>
          <div class="type_box" @click="peiwan_pubg()">
            <img style=border-radius:10px src="/static/image/qiusheng.png"/>
            <p style="font-size: 15px;float: left;margin-left: 30px;margin-top: 8px;" id="peiwan_pubg">绝地求生</p>
          </div>
          <div class="type_box" @click="peiwan_wzry()">
            <img style=border-radius:10px src="/static/image/wangzhe.png"/>
            <p style="font-size: 15px;float: left;margin-left: 30px;margin-top: 8px;" id="peiwan_wzry">王者荣耀</p>
          </div>
          <div class="type_box" @click="peiwan_ydzy()">
            <img style=border-radius:10px src="/static/image/yunding.png"/>
            <p style="font-size: 15px;float: left;margin-left: 30px;margin-top: 8px;" id="peiwan_hyxd">荒野行动</p>
          </div>
          <div class="type_box" @click="peiwan_hpjy()">
            <img style=border-radius:10px src="/static/image/jingying.png"/>
            <p style="font-size: 15px;float: left;margin-left: 30px;margin-top: 8px;" id="peiwan_hpjy">和平精英</p>
          </div>
          <div class="type_box" @click="peiwan_ydzy()">
            <img style=border-radius:10px src="/static/image/yunding.png"/>
            <p style="font-size: 15px;float: left;margin-left: 30px;margin-top: 8px;" id="peiwan_ydzy">云顶之弈</p>
          </div>
          <div class="type_box" @click="peiwan_hpjy()">
            <img style=border-radius:10px src="/static/image/jingying.png"/>
            <p style="font-size: 15px;float: left;margin-left: 30px;margin-top: 8px;" id="peiwan_cyhx">穿越火线</p>
          </div>
          <div  class="type_box" @click="peiwan_more()" >
            <img  src="/static/image/more.png"/>
            <p style="font-size: 15px;float: left;margin-left: 30px;margin-top: 8px;" id="peiwan_more">更多分类</p>
          </div>
        </div>
        <!--轮播图-->
        <div id="auto_pic">
          <el-carousel :height="450+ 'px'">
            <!--遍历图片地址,动态生成轮播图-->
            <el-carousel-item v-for="item in item" :key="item">
              <img :src="item" style="width: 850px;height: 450px;border-radius: 10px">
            </el-carousel-item>
          </el-carousel>
        </div>

        <div class="cute_pic" style="float: left;background-color: #46b8da;width: 337px;height:450px;margin-top: 55px">
<img src="/static/image/project3.jpeg.jpg" style="width: 100%;height:100%;">
        </div>

        <!--礼物滚动清单-->

        <!--陪玩-->
        <div id="player">
          <!--哟咻类型-->
          <div class="type">
            <div class="type_1">
              <img src="/static/image/tit_1.png"/>
            </div>
            <div class="type_2" id="lol">
              <el-button type="warning" @click="lol1()">英雄联盟</el-button>
            </div>
            <div class="type_2" id="wzry" >
              <el-button type="success" @click="wzry1()">王者荣耀</el-button>
            </div>
            <div class="type_2" id="yylt">
              <el-button type="warning" @click="yylt()">荒野行动</el-button>
            </div>
            <div class="type_2" id="hpjy">
              <el-button type="success" @click="hpjy1()">和平精英</el-button>
            </div>
            <div class="type_2" id="pubg">
              <el-button type="warning" @click="pubg1()">绝地求生</el-button>
            </div>
            <div class="type_3" id="more">
              <el-button style="background-color:#a7eedb" @click="moreAcc()">更多</el-button>
            </div>
          </div>
          <!--陪玩卡片-->
          <div class="player_show">
            <div class="player_box" v-for="items in accplayer">
              <!--陪玩信息点击跳转陪玩详细页面-->

              <div class="player_img">
                 <img title="是你的甜心推荐陪玩" @click="intodetail(items)" style="border-radius: 5px" :src=items.accPic>
              </div>
              <div class="player_info">
                <span class="player_name" style="margin-top: 10px;text-align: left;margin-left: 9px;">{{items.userNickname}}</span>
                <div class="player_voice" >
                 <span style="margin-top: 40px;">
                    <audio  :src="items.accVoice" preload="auto" style="width: 100px;margin:15%;height: 25px;" controls></audio>
                 </span>
                </div>
                <!--小图标-->
                <div style="float: left;width:60%">
                <div class="pic_xiao">
                  <img src="/static/image/xiaojuedi.png"/>
                </div>
                <div class="pic_xiao">
                  <img src="/static/image/xiaojuedi.png"/>
                </div>
                <div class="pic_xiao">
                  <img src="/static/image/xiaofangyan.png"/>
                </div>
                </div>
                <div class="player_price">
                  <span style="margin-top: 18px;color:orangered;">¥5.00</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        <!--陪玩资讯-->
        <div id="news">
          <!--富婆推荐-->
          <div class="news_box">
            <h3 style="margin-left: -75%">富豪推荐</h3>
            <div class="player_pic_1">
              <a href="https://www.daofengdj.com/item/1848511.html" title="是你的甜心推荐陪玩" target="_blank">
              <img src="/static/image/2zy7chn7la6331ua7pi8km2k9y0hi18h.jpeg"/>
              </a>
            </div>
            <div class="player_pic_2">
              <a href="https://www.daofengdj.com/item/1764453.html" title="韩琪电竞女王推荐陪玩" target="_blank">
              <img src="/static/image/ksiux3w7a133mjo7cw0okgfx6bzbcpeu.jpeg"/>
              </a>
            </div>
            <div class="player_pic_2">
              <a href="https://www.daofengdj.com/item/1762624.html" title="老婆✨头像本人推荐陪玩" target="_blank">
              <img src="/static/image/ix0cf3z7a8pa9xmwstniwm8ej28xd1ck.jpeg"/>
              </a>
            </div>
          </div>

          <!--游戏资讯-->
          <div class="news_box">
            <h3 style="margin-left: -75%">游戏资讯</h3>
            <div class="game_news">
              <div class="news_new">
                <a href="https://www.daofengdj.com/index/article/details?id=204" target="_blank">
                  <img width="36" src="https://yundown.daofengdj.com/static/home/img/index_v3/ico_3.png" alt="">
                  一条小团团终于露脸了！几小时获一百多万点赞，网友评论两极化！                                <span class="text">提起一条小团团，可以说是现在最火的绝地求生女主播了，凭借可爱的声线，沙雕的气质，成为了最红的女主播，然而小团团从来不主动露脸，也让大家质疑，小团团到底是美女，还是下一个乔碧萝！
</span>
                  <span class="text">提起一条小团团，可以说是现在最火的绝地求生女主播了，凭借可爱的声线，沙雕的气质，成为了最红的女主播，然而小团团从来不主动露脸，也让大家质疑，小团团到底是美女，还是下一个乔碧萝！
</span>
                </a>
              </div>


              <div class="news_new">
                <a href="https://www.daofengdj.com/index/article/details?id=206" target="_blank">
                  <img width="36" src="https://yundown.daofengdj.com/static/home/img/index_v3/ico_4.png" alt="">
                  Doinb与陪玩小姐姐双排，结果翻车发现小姐姐是代打！网友炸了！                                <span class="text">自从FPX获得S9世界冠军之后，中单doinb的人气就暴涨！之前靠着直播，人气已经很不错了，现在夺得了S9的冠军，直播人气更上一层楼。

</span><span class="text">自从FPX获得S9世界冠军之后，中单doinb的人气就暴涨！之前靠着直播，人气已经很不错了，现在夺得了S9的冠军，直播人气更上一层楼。

</span>
                </a>

              </div>


              <div class="news_title">
                <a href="https://www.daofengdj.com/index/article/details?id=207" target="_blank">
                  <span class="bs">[资讯]</span>
                  反冲斗士周淑怡教两个妹妹跳热舞要礼物，网友看过之后尴尬症都犯了！                            </a>
              </div>
              <div class="news_title">
                <a href="https://www.daofengdj.com/index/article/details?id=203" target="_blank">
                  <span class="bs">[资讯]</span>
                  触目惊心！GRF选手控诉cvMax暴力执教！网友：Deft逃脱一劫！                            </a>
              </div>
              <div class="news_title">
                <a href="https://www.daofengdj.com/index/article/details?id=205" target="_blank">
                  <span class="bs">[资讯]</span>
                  GRF《奴隶合同》被曝光！内容让人难以接受！网友看后表示：这很韩国！                            </a>
              </div>
            </div>

          </div>

          <!--精彩集锦-->
          <div class="news_box">
            <h3 style="margin-left: -75%">精彩集锦</h3>
            <div class="players_pic">
              <a href="https://www.daofengdj.com/index/article/details?id=180" target="_blank">
                <img src="/static/image/4b75bfcb902c41a0943fc6d365d3d134.png" alt="" class="icon">
                <span class="text1">哇哦~大家一起dance!!!</span>
              </a>
            </div>
            <div class="players_pic">
            <a href="https://www.daofengdj.com/index/article/details?id=162" target="_blank">
              <img src="/static/image/ee1c9a5c88858d283e2a15db3d607cd5.png" alt="" class="icon">
              <span class="text1">我的锅和别人有啥不一样的？</span>
            </a>
            </div>
            <div class="players_pic2">
            <a href="https://www.daofengdj.com/index/article/details?id=123" target="_blank">
              <img src="/static/image/d3e4dda6c15c0bee8b87599d7cee0277.png" alt="" class="icon">
              <span class="text1">英雄联盟最新皮肤，这次终于可以买得起LV了~</span>
            </a>
            </div>

            <div class="players_pic3">
              <a href="https://www.daofengdj.com/index/article/details?id=107" target="_blank">
                <img src="/static/image/520399960b8e224d7074b5961a6c3d9f.png" alt="" class="icon">
                <span class="text1">无限火力极乐玩法，嗨起来~</span>
              </a>
            </div>
          </div>
        </div>


        <!--最新入住-->
        <div id="player_new">
          <!--哟咻类型-->
          <div class="type">
            <div class="type_1">
              <img src="/static/image/ruzhu.png"/>
            </div>
            <span class="ruzhu">小萌新入驻，快去撩TA</span>
          </div>
          <div id="box">
            <div class="swiper-container" >
              <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="Becometimepic in accplayerBecometime" >
                  <img class="pic_style" @click="intodetail2(Becometimepic)" :src="Becometimepic.accPic">
                  <div style="margin-top:65%;float:left;position: relative;left: 140px;right: 25px;"><span class="Nick" style="color: pink;">{{Becometimepic.userNickname}}</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!--男神榜-->
        <div class="bang1">
          <img src="/static/image/list_title_3.png">
          <div class="meili_player" v-for="items in accplayerMan">
            <img @click="intodetail3(items)" :src="items.accPic" style="border-radius: 60%">
            <div class="male">
              <span style="font-size: 20px;color: hotpink;">{{items.userNickname}}</span>
              <span style="font-size: 18px;color: lightcoral;">ID:{{items.apid}}</span>
            </div>
          </div>
        </div>
        <!--人气榜-->
        <div class="bang1">
          <img src="https://yundown.daofengdj.com/static/home/img/index_v3/list_title_2.png"/>
          <div class="meili_player" v-for="items in accplayerRen">
            <img @click="intodetail4(items)" :src="items.accPic" style="border-radius: 60%">
            <div class="male">
              <span style="font-size: 20px;color: hotpink" >{{items.userNickname}}</span>
              <span style="font-size: 18px;color: lightcoral;">关注量:{{items.anum}}</span>
            </div>
          </div>
        </div>
        <!--女神榜-->
        <div class="bang1">
          <img src="/static/image/list_title_1.png">
          <div class="meili_player" v-for="items in userGender">
            <img @click="intodetail5(items)" :src="items.accPic" style="border-radius: 60%">
            <div class="male">
            <span style="font-size: 20px;color: hotpink" >{{items.userNickname}}</span>
            <span style="font-size: 18px;color: lightcoral;">ID:{{items.apid}}</span>
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

  #body{
    width: 100%;
    height:650px;
    float: left;
    /*position: fixed;*/
    background: url("/static/image/timg.jpg");
    background-size: 100% 100%;
  }
  .game_type{
    width: 310px;
    height: 515px;
    margin-left: 2%;
    margin-top: 2%;
    float: left;
  }
  .type_box{
    width: 120px;
    height:110px;
    float: left;
    background-color: white;
    margin-top: 10px;
    margin-left: 10px;
    border-radius: 5px;
  }
  .type_box img{
    width: 75px;
    height:65px;
    float: left;
    margin-top: 10px;
    margin-left: 20px;

  }
  #auto_pic{
    width: 900px;
    height: 500px;
    margin-top: 54px;
    margin-left: 25px;
    float: left;
  }
  #player{
    width: 85%;
    height: 750px;
    float: left;
    margin-left: 85px;
  }
  .type{
    width: 100%;
    height:14%;
    background-color: white;
    border-radius:10px
  }
  #player .type_1{
    width: 15%;
    margin-top: 25px;
    margin-left: 10px;
    height:25%;
    float: left;
  }
  .type_1 img{
    float: left;
    width: 100%;
    height:100%;
  }
  .type_2{
    width: 8%;
    float: left;
    margin-top: 28px;
    margin-left: 10px;
    height:35%;
  }
  .type_3{
    width: 5%;
    float: left;
    margin-top: 20px;
    margin-left: 350px;
    height:35%;
  }
  .player_show{
    width: 100%;
    height:80%;
    float: left;
    background-color: white;
  }
  .player_box{
    width: 20%;
    height: 43%;
    background-color: white;
    float: left;
    margin: 2%;
  }
  .player_img{
    width:88%;
    height:90%;
    float: left;

  }
  .player_img img{
    width:94%;
    height:100%;
    float: left;
    border: 1px solid black;
  }
  .player_info{
    width:100%;
    height:30%;
    float: left;
  }
  .player_name{
    width: 50%;
    height: 50%;
    float: left;
  }
  .player_voice{
    width: 40%;
    height: 50%;
    margin-left: -7%;
    margin-top: -3%;
    float: left;
  }
  .player_price{
    width: 30%;
    height: 50%;
    margin-left: 0%;
    float: left;
  }
  .pic_xiao{
    width: 15%;
    height: 35%;
    margin-left: 1%;
    margin-top: 1%;
    float: left;
  }

  #box {
    width: 100%;
    margin: 20px auto;
  }
  .swiper-container{
    height: 268px;
    padding-left: 65px;
    /*background-image: -webkit-radial-gradient(23% 100%, #e5f5ff 0%, #c7fffc 100%);*/
   /* --swiper-theme-color: #ff6600;!* 设置Swiper风格 *!
    --swiper-navigation-color: #00ff33;!* 单独设置按钮颜色 *!
    --swiper-navigation-size: 30px;!* 设置按钮大小 *!*/
  }
  .swiper-slide{
    width: auto!important;
    display: inline-block;
    margin-left: -10%;
    margin-top:2%;
    height: 80px;
    line-height: 80px;
    font-size: 30px;
    padding: 0 55px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    text-align: center;
    color: #fff;
    cursor: pointer;
  }
  .pic_style{
    border-radius: 6px;
    text-decoration: none;
  }
  .pic_style:hover{
    z-index: 11;
    transform: scale(1.1);
  }
.pic_style  {
  color: #4d9683;
  text-shadow: 0 1px 0 #9de3cf;
  border-color: #549e89;
  background-color: #51c9a7;
}
  .swiper-container .swiper-slide .active {
    color: #39663d;
    background-color: #fff8eb;
    box-shadow: 0 3px 13px 0 rgba(94, 94, 94, 0.50);
  }
 /* .Nick{
   margin-top: 209px;
   margin-left:-165px;
  }*/
  .swiper-slide img{
    width: 180px;
    height: 180px;
  }
  .el-carousel__item span {
    color: #e5f5ff;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  .el-carousel__item:nth-child(7n) {
    background-color: #99a9bf;
  }
  .el-carousel__item:nth-child(7n+1) {
    background-color: #d3dce6;
  }
  #news{
    width: 100%;
    height: 400px;
    float: left;
    background-color: white;
    margin-left: 85px;
  }
  .news_box{
    width: 30%;
    height: 90%;
    margin: 0.5%;
    float: left;
    background-color: white;
  }
  .player_pic_1{
    width: 50%;
    height:68%;
    float: left;
  }
  .player_pic_1 img{
    width: 100%;
    height:100%;
    float: left;
    margin-left:30px;
    border-radius: 8px;
  }
  .player_pic_2{
    width: 30%;
    height:33%;
    float: left;
    margin-top: 2px;
  }
  .player_pic_2 img{
    width: 100%;
    height:100%;
    float: left;
    margin-left: 40px;
    border-radius: 6px;
  }
  .game_news{
    width: 100%;
    height:40%;
    float: left;
  }
  .news_new{
    height: 45px;
    width: 100%;
    margin-top: 18px;
    color: #333333;
    font-size: 14px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    cursor: pointer;
  }

  .text{
    display: block;
    font-size: 12px;
    line-height: 16px;
    color: #999999;
    margin-top: 9px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .news_new img {
    width: 9%;
    height:50%;
    float: left;
  }
  .news_title{
    text-align: left;
    height: 18px;
    margin-top: 12px;
  }
  .players_pic{
    width: 24%;
    height: 30%;
    float: left;
    margin-left: 33px;
    margin-top: 2px;
  }
  .players_pic img {
    width: 90%;
    height: 90%;
    float: left;
  }

  .players_pic2{
    width: 24%;
    height: 30%;
    float: left;
    margin-left: -274px;
    margin-top: 140px;
  }

.players_pic2 img {
  width: 90%;
  height: 90%;
  float: left;
}
.text1{
  width: 24%;
  height: 30%;
  /*float: left;
  margin-left: 33px;*/
  margin-top: 2px;
}
.players_pic3{
  width: 24%;
  height: 30%;
  float: left;
  margin-left: -120px;
  margin-top: 142px;
}

.players_pic3 img {
  width: 90%;
  height: 90%;
  float: left;
}
  #player_new{
    width: 85%;
    height: 50%;
    float: left;
    margin-left: 85px;
  }
  #player_new .type{
    width: 100%;
    height:20%;
    float: left;
    background-color: white;
  }
  .type_1{
    width: 15%;
    margin-top: 25px;
    margin-left: 10px;
    height:45%;
    float: left;
  }
  .type_1 img{
    float: left;
    width: 100%;
    height:125%;
  }
  .ruzhu{
    margin-right: 863px;
    margin-top: 15px;
    font-size: 18px;
    line-height: 92px;
  }
  .pics{
    width: 80%;
    margin-top: 25px;
    margin-left: 20px;
    height:55%;
    float: left;
  }
  .pics img{
    width: 70%;
    height:70%;
    float: left;
  }
  .bang1{
    width: 25%;
    height: 100%;
    float: left;
    margin-left: 118px;
    margin-top: 35px;
  }
  .bang1 img{
    width: 60%;
    height: 6%;
    float: left;
  }
  .meili_player{
    width: 80%;
    height: 20%;
    float: left;
    margin-left: 35px;
    margin-top: 20px;
  }
  .meili_player img{
    width: 39%;
    margin-left: 10px;
    height: 100%;
    float: left;
  }

  .male{
    width: 200px;
    height: 30px;
    float: left;
    margin-top: -95px;
    margin-left: 160px;
  }

  .item{
    width: 45%;
    margin-left: 10px;
    margin-top:15px;
    height: 100%;
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
        item:[
          "/static/image/auto_pic.jpg",
          "/static/image/auto_pic1.jpg",
          "/static/image/2bfc864c1afdcff29b25b192a2e4ad47.jpg"
        ],
        accplayer:{
          userid:1,
          accplayerid:1,
          apid:''
        },

        loginName:'',
        user:{
          uid:'',
          userPic:''
        },
        condition:'',
        accplayerBecometime:[],
        userGender:[],
        accplayerMan:[],
        accplayerRen:[]
      }
    },
    methods:{
        //点击图片进详情
      intodetail:function (items) {
        /*alert(items.apid);*/
        this.$router.push({path:'/playerinfo/'+items.apid});
      },
      //最新入住进详情
      intodetail2:function (Becometimepic) {
       // alert(Becometimepic.apid)
        this.$router.push({path:'/playerinfo/'+Becometimepic.apid});
      },
      //三榜单进详情
      intodetail3:function (items) {
       // alert(items.apid)
        this.$router.push({path:'/playerinfo/'+items.apid});
      },
      intodetail4:function (items) {
        // alert(items.apid)
        this.$router.push({path:'/playerinfo/'+items.apid});
      },
      intodetail3:function (items) {
        // alert(items.apid)
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
        this.$message.error("聊天室建设中")
      },
      lol1:function () {
        var gName=document.getElementById("lol").innerText
        var url='api/accplayer-acc/acc/findAccplayerBygName/'+gName
        axios.get(url).then(res=>{
          if(res.data!=null){
            this.accplayer=res.data;
          }
        })
      },
      pubg1:function () {
        var gName=document.getElementById("pubg").innerText
        var url='api/accplayer-acc/acc/findAccplayerBygName/'+gName
        axios.get(url).then(res=>{
          if(res.data!=null){
            this.accplayer=res.data;
          }
        })
      },
      wzry1:function () {
        var gName=document.getElementById("wzry").innerText
        var url='api/accplayer-acc/acc/findAccplayerBygName/'+gName
        axios.get(url).then(res=>{
          if(res.data!=null){
            this.accplayer=res.data;
          }
        })
      },
      yylt:function () {
        var gName=document.getElementById("yylt").innerText
        var url='api/accplayer-acc/acc/findAccplayerBygName/'+gName
        axios.get(url).then(res=>{
          if(res.data!=null){
            this.accplayer=res.data;
          }
        })
      },
      hpjy1:function () {
        var gName=document.getElementById("hpjy").innerText
        var url='api/accplayer-acc/acc/findAccplayerBygName/'+gName
        axios.get(url).then(res=>{
          if(res.data!=null){
            this.accplayer=res.data;
          }
        })
      },
      moreAcc:function () {
        this.$router.push({path:'/peiwan'});
      },
      peiwan_lol:function () {
        var gName=document.getElementById('peiwan_lol').innerText
        this.$router.push({path:'peiwan/'})
      },
      peiwan_pubg:function () {
        var gName=document.getElementById('peiwan_pubg').innerText
        this.$router.push({path:'peiwan/'})
      },
      peiwan_wzry:function () {
        var gName=document.getElementById('peiwan_wzry').innerText
        this.$router.push({path:'peiwan/'})
      },
      peiwan_hyxd:function () {
        var gName=document.getElementById('peiwan_hyxd').innerText
        this.$router.push({path:'peiwan/'})
      },
      peiwan_hpjy:function () {

        var gName=document.getElementById('peiwan_hpjy').innerText
        this.$router.push({path:'peiwan/'})
      },
      peiwan_ydzy:function () {
        var gName=document.getElementById('peiwan_ydzy').innerText
        this.$router.push({path:'peiwan/'})
      },
      peiwan_cyhx:function () {

        var gName=document.getElementById('peiwan_cyhx').innerText
        this.$router.push({path:'peiwan/'})
      },
      peiwan_more:function () {
        var gName=document.getElementById('peiwan_more').innerText
        this.$router.push({path:'peiwan/'})
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
      var url = 'api/accplayer-user/user/getInfoByTel';
      axios.get(url).then(res=>{
        if(res.data!=null){
          this.user.userPic = res.data.userPic;
          this.user.uid = res.data.uid;
          this.loginName = res.data.userNickname;
        }
      });
      //默认展示英雄联盟陪玩信息
      var gName=document.getElementById("lol").innerText;
      var url='api/accplayer-acc/acc/findAccplayerBygName/'+gName;
      axios.get(url).then(res=>{
        if(res.data!=null){
          this.accplayer=res.data;
          //var data = res.data;

          //this.audioList = res.data.accVoice;
          /*for(var i=0;i<data.length;i++){
              console.log(data[i].accVoice);
              this.audioList = data[i].accVoice;
          }*/
        }
      });
      //最新入驻
      var url='api/accplayer-acc/acc/findUserBecometime';
      axios.get(url).then(res=>{
        if(res.data!=null){
          //console.log(res.data)
          this.accplayerBecometime=res.data;
        }
      });
      //男神榜
      var Gender="男";
      var url='api/accplayer-acc/acc/findAccplayerByUserGender/'+Gender
      axios.get(url).then(res=>{
        if(res.data!=null){
            console.log(res.data)
          this.accplayerMan=res.data;
        }
      });
      //女神榜
      var Gender="女";
      var url='api/accplayer-acc/acc/findAccplayerByUserGender/'+Gender
      console.log(url);
      axios.get(url).then(res=>{
        if(res.data!=null){
          console.log(res.data)
          this.userGender=res.data;
        }
        //人气榜
        var url='api/accplayer-acc/acc/findAccplayerByAnum'
        axios.get(url).then(res=>{
          if(res.data!=null){
            this.accplayerRen=res.data;
          }
        })
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


