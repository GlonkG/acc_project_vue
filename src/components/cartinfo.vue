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
    <div id="title">
      <span>我的订单</span>
    </div>

    <div id="box" v-model="Order">
      <div class="title">
        <span>订单信息</span>
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

        <div class="player_detail">
          <div class="box2" v-model="accplayer">
            <img :src="accplayer.accPic" style="width: 75%;height:75%;margin-top: 10%;border-radius: 50%;"/>
          </div>
          <div class="box3">
            <span>{{Order.userNickname}}</span>
          </div>
          <div class="box4">
            <span>{{Order.gname}}</span>
          </div>
          <div class="box5">
            ¥<span style="color: red;">{{Order.omoney/Order.oappointedtime}}</span>元/小时
          </div>
          <div class="box6">
            <span>{{Order.oappointedtime}}</span>
          </div>
          <div class="box7">
            <span style="color: red;">¥{{Order.omoney}}</span>
          </div>

          <div class="beizhu">
            <textarea style="width: 117%;height: 100px;margin-top: 0px;margin-left: -6%" placeholder="备注说明：注意事项·····" v-model="Order.ocontent"></textarea>
          </div>

          <div style="float: left;width: 1280px;height: 50px;background-color: white;margin-top: 8px">

          <div class="lianxi">
            <div style="width: 50px;float: left;margin-left: 60px">手机:</div>
            <el-input v-model="Order.userTel" style="width: 175px;"></el-input>
          </div>
          <div class="lianxi">
            <div style="width: 50px;float: left;margin-left: 60px">QQ:</div>
            <el-input v-model="Order.userQq" style="float: right;width: 175px;"></el-input>
          </div>
          </div>
        </div>
      </div>

      <div id="pay">
        <div class="p_1">
          实付金额： <span style="color: orangered;font-size: 25px">¥{{Order.omoney}}</span>
        </div>
        <div class="p_2">
          <el-button style="background-color: orangered;border: hidden" @click="sub()">
            提交订单
          </el-button>
        </div>

        <div class="p_3">
          <span style="color: red">温馨提示：提交订单后，已支付与未支付的订单均可以在我的订单进行查看。</span>
        </div>
      </div>
    </div>


  <div id="side_vm">
    <div class="side_type1">
      <el-button style="color: lightcoral;border: hidden;margin: 5%"size="medium" round icon="el-icon-s-home"></el-button>
      <font style="margin-top: 5px" color="lightcoral" @click="onverify()">申请入驻</font>
    </div>
    <div class="side_type1">
      <el-button style="color: lightcoral;border: hidden;margin: 5%"size="medium" round icon="el-icon-s-comment"></el-button>
      <font style="margin-top: 5px" color="lightcoral">消息</font>
    </div>
    <div class="side_type1">
      <el-button style="color: lightcoral;border: hidden;margin: 5%"size="medium" round icon="el-icon-edit-outline"></el-button>
      <font style="margin-top: 5px" color="lightcoral" @click="onmycart()">订单</font>
    </div>
    <div class="side_type1">
      <el-button style="color: lightcoral;border: hidden;margin: 5%"size="medium" round icon="el-icon-wallet"></el-button>
      <font style="margin-top: 5px" color="lightcoral">充值</font>
    </div>
    <div class="side_type1">
      <el-button style="color: lightcoral;border: hidden;margin: 5%"size="medium" round icon="el-icon-chat-dot-round"></el-button>
      <font style="margin-top: 5px" color="lightcoral">我的客服</font>
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
    background-color: #F6F6F6;
    width: 100%;
    height:1300px;
  }
  #title{
    width: 85%;
    height:50px;
    float: left;
    text-align: left;
    line-height: 50px;
    font-size: 15px;
    margin-top: 2%;
    margin-left: 8%;
    background-color: white;
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
    width: 95%;
    height: 125%;
    margin-left: 2%;
    margin-top: 0%;
    background-color: gainsboro;
  }
  .box1{
    float: left;
    width: 10%;
    height: 100%;
    margin-left: 6%;
    margin-top: 0%;
  }
  .player_detail{
    float: left;
    width: 95%;
    height: 380%;
    margin-left: 2%;
    background-color: white;

  }
  .box2{
    float: left;
    width: 10%;
    height:120px;
    margin-left:65px;
    background-color: white;
  }
  .box3{
    float: left;
    width: 16%;
    height: 60px;
    /*margin-left:80px;*/
    margin-top: 30px;
    text-align: center;
    background-color: white;
  }
  .box4{
    float: left;
    width: 6%;
    line-height: 50px;
    height: 60px;
    margin-left:86px;
    margin-top: 30px;
    background-color: white;
  }
  .box5{
    float: left;
    width: 7%;
    height: 60px;
    margin-left:138px;
    margin-top: 30px;
    background-color: white;
  }
  .box6{
    float: left;
    width: 6%;
    height: 60px;
    margin-left:145px;
    margin-top: 30px;
    background-color: white;
  }
  .box7{
    float: left;
    width: 6%;
    height: 60px;
    margin-left:93px;
    margin-top: 30px;
    background-color: white;
  }
  .beizhu{
    float: left;
    width: 85%;
    font-size: 25px;
    height: 100px;
    margin-left:65px;
    margin-top: 5px;
  /*  border: solid 1px gainsboro;*/
    background-color: white;
  }
  .lianxi{
    float: left;
    width: 25%;
    height: 50px;
    margin-left:65px;
    margin-top:8px;
    background-color: white;
  }
  #pay{
    float: left;
    width: 90%;
    height: 547%;
    margin-top: 11%;
    margin-left: 4%;
    background-color: white;
  }
  .p_1{
    float: left;
    width: 20%;
    height: 35%;
    margin-left: 84%;
    margin-top: 2%;
  }
  .p_2{
    float: left;
    width: 10%;
    height: 26%;
    margin-left: 88%;
    margin-top: 3%;
  }
  .p_3{
    float: left;
    width: 46%;
    height: 23%;
    margin-top: -4%;
    margin-left: 40%;
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
  #footer{
    width:100%;
    height:350px;
    float: left;
    margin-top: 34%;
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
  export default{
      data(){
        var validateMobilePhone = (rule, value, callback) => {
          if (value === '') {
            callback(new Error('老板手机号不可为空'));
          } else {
            if (value !== '') {
              var reg=/^1[3456789]\d{9}$/;
              if(!reg.test(value)){
                callback(new Error('请输入有效的手机号码'));
              }
            }
            callback();
          }
        };
        var validateMobileQq = (rule, value, callback) => {
          if (value === '') {
            callback(new Error('老板QQ号不可为空'));
          } else {
            if (value !== '') {
              var reg=/^[1-9][0-9]{4,11}$/;
              if(!reg.test(value)){
                callback(new Error('请输入有效的QQ号码'));
              }
            }
            callback();
          }
        };
          return{
            Order:{
              apid:'',
              gid:"",
              gname:"",
              oappointedtime:"",
              ocontent:"",
              ocreatetime:"",
              oid:"",
              omoney:"",
              orderNo:"",
              ostatus:"",
              userNickname:"",
              userQq:"",
              userTel:""
            },
            accplayer:[],
            rules: {
              userTel: [{validator: validateMobilePhone, trigger: 'blur'}],
              userQq: [{validator: validateMobileQq, trigger: 'blur'}]
            },
            loginName:'',
            user:{
              uid:'',
              userPic:''
            },
            condition:''
          }
      },
      mounted:function () {
          var url = 'api/accplayer-order/findByOrderNo/'+this.$route.params.orderNo;
          axios.get(url).then(res=>{
              if(res.data!=null){
                  this.Order = res.data;
                  this.Order.apid = res.data.apid;
                  /*var apid = null;
                  for(var i=0;i<res.data.length;i++){
                      apid = res.data[i].apid;
                      //console.log(apid);
                  }
                  //console.log(this.order);*/
                var url = 'api/accplayer-acc/acc/findAccplayerByApid/'+this.Order.apid;
                axios.get(url).then(res=>{
                    if(res.data!=null){
                        this.accplayer = res.data;
                    }
                })
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
      //认证页面
      onverify:function () {
        this.$router.push('/verify');
      },
      //我的订单
      onmycart:function () {
        this.$router.push('/mycart');
      },
      //支付
      sub:function () {
        console.log(this.Order);
        var url = 'api/accplayer-pay/pay/pay';
        axios.post(url,this.Order).then(res => {
          console.log(res.data);
          if (res.status === 200) {
            //返回参数?
            let routerData = this.$router.resolve({path: '/applyText', query: {htmls: res.data}})
            this.htmls = res.data
            //打开新页面
            window.open(routerData.href, '_ blank')
            const div = document.createElement('div');
            div.innerHTML = this.htmls;
            document.body.appendChild(div);
            document.forms [0].submit();
          }
        })
      }
    }
  }
</script>
