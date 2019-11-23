<template>
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
    <div id="search_body">
      <div class="game_box">

        <div class="game_name">
          游戏类型：<span>{{this.$route.params.gName}}</span>
        </div>
        <div class="game_name1">
          性别：<span>{{this.$route.params.usergender}}</span>
        </div>
        <div class="game_name2">
          订单要求： <span>{{this.$route.params.beizhu}}</span>
        </div>

        <el-button  round plain style="float:left;height:30px;line-height:5px;background-color: inherit;margin-top: 15%;margin-left: -35%" @click="delinfo">取消订单</el-button>

        <el-button  round plain style="float:left;height:30px;line-height:5px;background-color: inherit;margin-top: 25%;margin-left: -35%" @click="payinfo">订单详情</el-button>
      </div>
      <div class="gift_pic">

        <div style="background-color: #FF6347;width: 20%;height: 20px;margin-left: 80%">
          <p> 剩余时间：{{minute}}:{{second}}</p>
        </div>
        <div style="width: 50%;height: 20px;margin-left: 10%;margin-top: 30%">
          <span style="color: white;" >{{text}}</span>
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
            <span>关注数量：{{items.anum}}</span>
          </div>
          <div class="player_price">
            <span>¥:{{items.gprice}}</span>
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

  #search_body{
    width:100%;
    height:480px;
    background-color: #333333;
  }
  .game_box{
    background-image: url("/static/image/search.png");
    width:35%;
    float: left;
    height:480px;
    color: #46b8da;
  }
  .game_name{
    width:50%;
    float: left;
    height:15px;
    font-size: 20px;
    margin-top:20%;
    margin-left: 25%;
    color: #46b8da;
  }
  .game_name1{
    width:50%;
    float: left;
    height:15px;
    margin-top:5%;
    margin-left: 25%;
    color: #46b8da;
  }
  .game_name2{
    width:50%;
    float: left;
    height:15px;
    margin-top:3%;
    margin-left: 25%;
    color: #46b8da;
  }
  .gift_pic{
    width:65%;
    float: left;
    height:480px;
    background-image: url("/static/image/searchbeijing.png");
  }
  .search_player{
    width:100%;
    float: left;
    height:300px;
    margin-top:0%;
    /* margin-left: 25%;*/
    background-color: #46b8da;
  }
  .player_info{
    width:15%;
    float: left;
    height:280px;
    margin-top:1%;
    margin-left: 5%;
    background-color: orangered;
  }
  .pic{
    width:100%;
    float: left;
    height:240px;
    /*margin-top:1%;*/
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
    margin-left: -19%;
    line-height: 20px;
    margin-top: -20px;
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
  import axios from 'axios'
  import swal from 'sweetalert';
  export default {
    name: 'Date',
    data() {
      return {
        minutes: 15,
        seconds: 0,
        accplayer:[],
        text:'',
        loginName:'',
        user:{
          uid:'',
          userPic:''
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
        }
      }
    },
    mounted () {
      this.add()
      var url = 'api/accplayer-acc/acc/findAccplayerBySexAndgName/'+this.$route.params.gName +"/"+this.$route.params.usergender;
      //console.log(url);
      axios.get(url).then(res=>{
        if(res.data!==null){
          this.accplayer=res.data;
          //alert("已为您查到"+"====>"+res.data.length+"陪玩")
          this.text="已为您查到"+"====>"+res.data.length+"陪玩"
          //console.log(this.accplayer)
        }else{
          this.text="正在为你查找 请客官稍等一下下...."
        }
      });
      var url = 'api/accplayer-user/user/getInfoByTel';
      axios.get(url).then(res=>{
        if(res.data!=null){
          this.user.userPic = res.data.userPic;
          this.user.uid = res.data.uid;
          this.loginName = res.data.userNickname;
        }
      })
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
      //点击图片获得apid
      intodetail:function (items) {
        this.order.apid = items.apid;
        console.log(this.order.apid);
        var url = 'api/accplayer-acc/acc/findByApids/'+this.order.apid;
        axios.get(url).then(res=>{
          if(res.data!=null){
            for(var i=0;i<res.data.length;i++){
              this.order.gid = res.data[i].gid;
              this.order.gname = res.data[i].gname;
              this.order.omoney = (res.data[i].gprice)*(this.$route.params.nums);
              this.order.userNickname = res.data[i].userNickname;
              //alert(this.order.userNickname);
              //alert(this.order.gname+"====="+this.order.gid);
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
      },
      num: function (n) {
        return n < 10 ? '0' + n : '' + n
      },
      add: function () {
          var localtime = false;
        var _this = this
        var time = window.setInterval(function () {
          if (_this.seconds === 0 && _this.minutes !== 0) {
            _this.seconds = 59
            _this.minutes -= 1
          } else if (_this.minutes === 0 && _this.seconds === 0) {
              localtime = true;
            _this.seconds = 0
            window.clearInterval(time)
            if(localtime){
                _this.$router.push('/');
            }
          } else {
            _this.seconds -= 1
          }
        }, 1000)

      },
      pay:function () {
        this.$router.push({path:'/mycart/'+this.$route.params.nums+'/'+this.accplayer})
        console.log(this.$router.push({path:'/mycart/'+this.$route.params.nums+'/'+this.accplayer}))
      },
      payinfo:function () {
      swal({
          title: "订单详情",
          text:"游戏类型:"+this.$route.params.gName+"\n"+
          "陪玩性别:"+this.$route.params.usergender+"\n"+
          "下单时间："+1+"x"+this.$route.params.nums+"小时\n"+
          "订单要求:"+this.$route.params.beizhu,

        });
      },
      delinfo:function () {
        swal({
          title: "要取消订单吗?",
          text: "取消后失去了小伙伴了",
          icon: "warning",
          buttons: true,
          dangerMode: true,
        })
          .then((willDelete) => {
            if (willDelete) {
              swal("取消成功", {
                icon: "success",
              });
              this.$router.push({path:'/'})
            } else {
              swal("取消失败!");
            }
          });
      }
    },
    watch: {
      second: {
        handler (newVal) {
          this.num(newVal)
        }
      },
      minute: {
        handler (newVal) {
          this.num(newVal)
        }
      }
    },
    computed: {
      second: function () {
        return this.num(this.seconds)
      },
      minute: function () {
        return this.num(this.minutes)
      },

    }
  }

</script>
