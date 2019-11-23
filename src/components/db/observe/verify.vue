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
    <div id="body">
      <div id="lay1">
        <span style="font-size: 20px">陪玩入驻服务<span style="color: orangered;font-size: 16px;">(▪请务必完善个人资料)</span></span>
      </div>
      <el-divider></el-divider>
      <div id="lay2">
        <div id="lay2_hh">
          <span style="color: orangered;">▪</span><span style="font-size: 18px;">基本资料</span><br><br><br>
          <!--<span style="color: orangered;font-size: 20px;">求真相</span>-->
        </div>
        <div id="lay2_left">
          <i  style="margin-right: 25px" v-model="user"></i>
          <el-avatar class="hv" :src="user.userPic"></el-avatar>
        </div>
        <div id="lay2_right">
          <el-form style="margin-top: 30px;" :inline="true" class="demo-form-inline" :model="user" label-width="80px">
            <el-form-item label="昵称">
              <el-input v-model="user.userNickname" placeholder="最长6个字符"></el-input>
            </el-form-item><br>
            <el-form-item label="住址">
              <el-input v-model="user.userAddress" ></el-input>
            </el-form-item><br>
            <el-form-item label="QQ">
              <el-input v-model="user.userQq" ></el-input>
            </el-form-item><br>
            <el-form-item label="签名">
              <el-input v-model="user.userContent" ></el-input>
            </el-form-item><br>
          </el-form>
        </div>
      </div>
      <el-divider></el-divider>
      <div id="lay3">
        <div id="lay3_1">
          <span style="font-size: 18px;color: red;">▪<span style="color: black;">开通游戏 </span><span style="font-size: 18px;color: red;">绝地求生(萌新)、英雄联盟(黄金段位以上)不需实战考核，请谨慎选择您的段位(PS:英雄联盟:男最低入驻段位钻二，女最低入驻段位黄金。)</span></span>
        </div>
        <div id="lay3_2" class="block">
            <!--<el-cascader
              id="drop"
              :options="options"
              :props="props"
              collapse-tags
              clearable></el-cascader>-->
          <el-form id="esc" ref="loginForm" :model="accplayer" label-width="80px" class="login-box">
          <el-form-item label="游戏名称">
            <el-select v-model="value" placeholder="请选择" @change="changeValue">
              <el-option placeholder="请选择游戏名称" v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </el-form-item><br>
            <el-form-item label="陪玩价格">
              <el-input placeholder="请输入陪玩价格" v-model="accplayer.gprice" type="number" maxlength='2' @keydown.native='onlyNum' min="0"></el-input><!--@input="handleInput"-->
            </el-form-item><br>
            <el-form-item label="游戏大区" style="margin-left:0px;">
              <el-select v-model="accplayer.gdaqu" placeholder="游戏大区">
                <el-option label="QQ区" value="QQ区"></el-option>
                <el-option label="微信区" value="微信区"></el-option>
              </el-select>
            </el-form-item><br>
            <el-form-item label="游戏ID">
              <el-input v-model="accplayer.gpid"></el-input>
            </el-form-item><br>
            <el-form-item label="游戏段位">
              <el-input v-model="accplayer.gduanwei"></el-input>
            </el-form-item><br>
          </el-form>
        </div>
      </div>
      <div id="lay4">
        <div id="lay4_1">
          <span style="font-size: 18px;color: red;">▪<span style="color: black;">认证资料照</span></span>
        </div>
        <div id="lay4_2">
          <div id="lay4_2_left">
              <span class="im">此图认证要求如下</span><br>
              <span class="im">1、电脑清晰截图，不能手机拍摄</span><br>
              <span class="im">2、游戏昵称与分数清晰</span><br>
              <span class="im">3、如需考核应上此号进行考核</span><br>
              <span class="im">4、lol最低入驻男钻二，女黄金</span><br>
              <span class="im">5、绝地求生分数200以上入驻</span><br>
          </div>
          <div id="lay4_2_midd">
            <span style="text-align: center">示例:</span>
          </div>
          <div id="lay4_2_right">
              <img src="/static/image/168de5ce594a4667447f16bcba719997.png"/>
          </div>
          <div id="lay4_2_last">
            <el-upload
              class="avatar-uploader"
              action="api/accplayer-acc/acc/loadingAccplayerPic"
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload">
              <img v-if="imageUrl" :src="imageUrl" class="avatar" width="400px" height="200px">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </div>
        </div>
      </div>
      <div id="lay5">
        <div id="lay5_1">
          <span style="font-size: 18px;color: red;">▪<span style="color: black;">说明</span></span>
        </div>
        <div id="lay5_2">
          <textarea v-model="accplayer.adescription" maxlength="70" placeholder="可以写自己喜欢的游戏、喜欢的玩法和打法....." name="intro" data-message="请填写说明" id="intro" data-easytip="position:right;class:easy-red;" data-easyform="char-chinese;" class="sm-textarea"></textarea>
        </div>
      </div>
      <div id="lay6">
        <div id="lay6_1">
          <span style="font-size: 18px;color: red;">▪<span style="color: black;">语音介绍</span></span>
        </div>
        <div id="lay6_2">
          <div id="lay6_2_left">
            <el-upload
              class="upload-demo"
              drag
              action="api/accplayer-upload/upload"
              multiple
              :show-file-list="true"
              :on-success="handleSuccess">
              <i class="el-icon-upload"></i>
              <div class="el-upload__text">将MP3文件拖到此处，或<em>点击上传</em></div>
            </el-upload>
          </div>
          <div id="lay6_2_right">
            <span class="yyjs-word">请上传正确的MP3文件，内容为简单的自我介绍</span>
            <p style="color: rgb(255, 0, 0); font-size: 14px; margin-top: 10px;">例：您好，欢迎来到邀你来开黑，我是XX，人皮话多会开车，喜欢我就快快下单约我吧！</p> <span id="errorMess"></span>
          </div>
        </div>
      </div>
      <div id="lay7">
        <div class="ffxy">
          <el-checkbox v-model="checked" id="service" data-message="请阅读入驻协议" name="service" data-easytip="position:right;class:easy-red;">
            <label for="service">我已阅读并同意<span @click="xieyi()">《陪玩申请入驻协议》</span>
            </label>
          </el-checkbox>
        </div>
        <el-button class="tjsq" type="warning" @click="tj()">提交入驻申请</el-button>
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
  #body{

    height: 1000px;
  }

  #lay1{
    float: left;
    height: 100px;
    margin-left: 100px;

  }

  #lay2{
    float: left;

  }

  #lay2_hh{
    float: left;
    width: 900px;
    height: 30px;
    margin-top: -30px;
    margin-left: -320px;
  }

  #lay2_left{
    float: left;
    width: 300px;
    height: 300px;
    margin-left: 140px;
    /*border:1px solid red;*/
  }

  .hv{
    width: 280px;
    height: 280px;
  }

  .avatar-uploader .el-upload {
    border: 2px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }

  #lay2_right{
    float: left;
    width: 600px;
    height: 300px;
    margin-left: 200px;
    border: 1px solid black;
  }

  #lay3{
    float: left;
  }

  #lay3_1{
    float: left;
    width: 1400px;
    height: 30px;
    margin-left: -10px;
    margin-top: 30px;
  }

  #lay3_2{
    float: left;
  }

  #lay3_2 #esc{
    width: 300px;
    margin-left: 440px;
  }

  /*#drop{
    width: 400px;
    margin-left: 140px;
  }*/

  #lay4{
    float: left;
    width: 1400px;
   /* height: 700px;*/
  }

  #lay4_1{
    float: left;
    margin-left: 100px;
    margin-top: 20px;
  }

  #lay4_2{
    float: left;
    margin-top: 80px;
  }

  #lay4_2_left{
    border:1px solid black;
    width: 300px;
    height: 200px;
    margin-left: 140px;
  }

  #lay4_2_left .im{
    float: left;
    color: orangered;
    margin-top: 10px;
    margin-left: 30px;
  }

  #lay4_2_midd{
    float: left;
    width: 50px;
    height: 200px;
    line-height: 200px;
    margin-top: -203px;
    margin-left: 500px;
    border:1px solid black;
  }

  #lay4_2_right{
    float: left;
    width: 400px;
    height: 200px;
    border:1px solid blue;
    margin-left: 620px;
    margin-top: -203px;
  }

 #lay4_2_right img{
   width: 400px;
   height: 200px;
  }

  #lay4_2_last{
    float: left;
    width: 400px;
    height: 200px;
    border:1px solid blue;
    margin-left: 1120px;
    margin-top: -203px;
  }
  #lay5{
    float: left;
  }

  #lay5_1{
    float: left;
    margin-left: -1300px;
    margin-top: 340px;
  }

  #lay5_2{
    float: left;
    width: 1200px;
    height: 100px;
    margin-left: -1200px;
    margin-top: 400px;
  }

  #intro{
    width: 1200px;
    height: 100px;
  }

  /*.word_length {
    position: absolute;
    bottom: -335px;
    right: 285px;
    color: #b0b0b0;
    font-size: 14px;
  }*/

  #lay6{
    float: left;

  }

  #lay6_1{
    float: left;
    margin-left: -1300px;
    margin-top: 540px;
  }

  #lay6_2{
    float: left;
    margin-left: -1300px;
    margin-top: 600px;
  }

  #lay6_2_left{
    /*border: 1px solid black;*/
    width: 360px;
    height: 180px;
    margin-left: 100px;
    position: relative;
  }

  #lay6_2_right{
    float: left;
    height: 99px;
    padding-left: 92px;
    margin-top: -100px;
    margin-left: 500px;
  }


  /*.yyjs-left{
    float: left;
    cursor: pointer;
    width: 248px;
    height: 65px;
    margin-bottom: 10px;
    border: 1px solid #d4d4d4;
    background: #f8f8f8 url(/static/image/yy.png) center center no-repeat;
  }*/
  audio{
    width: 250px;
    display: inline-block;
    margin-left: 100px;
    float: left;
  }

  #lay7{
    float: left;
    margin-left: 500px;
  }

  .ffxy{
    font-size: 18px;
    color: black;
    margin-left: 100px;
    margin-top: 480px;
  }

  .tjsq{
    margin-left: 100px;
    margin-top: 20px;
   /* width: 100px;
    height: 30px;*/
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
  }#footer{
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
  import ElButton from "../../../../node_modules/element-ui/packages/button/src/button";
  export default{
    components: {ElButton},
    data(){
      return{
        loginName:'',
        user:{
            uid:'',
            userPic:'',
            userNickname:''
        },
        accplayer:{
          apid:'',
          uid:'',
          gid:'',
          gPid:'',
          gprice:'',
          aNum:'',
          accVoice:'',
          accPic:'',
          datumPic:'',
          userGender:'',
          adescription:'',
          gname:'',
          gdaqu:'',
          gduanwei:'萌新'
        },
        condition:'',
        imageUrl: '',
        radio:'1',
       options:[
          {value: '选项1',
            label: '英雄联盟'},
          {
            value: '选项2',
            label: '绝地求生'
          }, {
            value: '选项3',
            label: '王者荣耀'
          },{
            value: '选项4',
            label: '荒野行动'
          },{value: '选项5',
            label: '和平精英'},
         {value: '选项6',
           label: '云顶之弈'},
         {value: '选项7',
           label: '穿越火线'}
          ],
        value:'',
        checked: true
    }},
    methods:{
      oninfo:function () {
        this.$router.push('/userinfo');
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
      //认证页面
      onverify:function () {
        this.$router.push('/verify');
      },
      //我的订单
      onmycart:function () {
        this.$router.push('/mycart');
      },
      changeValue(value) {
        console.log(value);
        let obj = {};
        obj = this.options.find((item)=>{
          return item.value === value;
        });
        console.log(obj.label);
        this.label = obj.label;
        this.accplayer.gname = this.label;
        this.$message.success('您选择的是紧张刺激的'+this.accplayer.gname);
      },
      loginout:function () {
        var url = 'api/accplayer-user/user/loginout';
        axios.get(url).then(res=>{
          this.$message.warning(this.loginName+"已退出");
          this.loginName = '';
          this.user.userPic = '';
        })
      },
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
        this.accplayer.datumPic = res;
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      },
      //上传MP3文件成功之后的回调
      handleSuccess(res, file) {
        this.accplayer.accVoice = res;
        //alert(this.accplayer.accVoice);
      },
      xieyi() {
        this.$alert('本服务的具体内容由[邀你来开黑]根据实际情况提供，' +
          '包括但不限于授权用户通过其他账号进行即时通讯、添加好友、加入群组、关注他人、发布动态。' +
          '[邀你来开黑]可以对其提供的服务予以变更，且[邀你来开黑]提供的服务内容可能随时变更；用户将会收到' +
          '[邀你来开黑]关于服务变更的通知。', '[邀你来开黑]用户协议', {
          confirmButtonText: '确定',
          callback: action => {
            this.$message({
              type: 'info',
              message: `action: ${ action }`
            });
          }
        });
      },
      tj:function () {
          var that = this;

          //alert(this.checked);
        //console.log(this.accplayer.aDescription);
        //alert(that.accplayer.accVoice);
        that.accplayer.adescription = this.accplayer.adescription;
        //console.log(that.accplayer.adescription);
        that.accplayer.accVoice = this.accplayer.accVoice;
        that.accplayer.uid = this.user.uid;
        that.accplayer.accPic = this.user.userPic;
        that.accplayer.userNickname = this.user.userNickname;
        that.accplayer.userGender = this.user.userGender;
        var url = 'api/accplayer-acc/acc/addAccplayer';
        axios.post(url,that.accplayer).then(res=>{
            if(res.data=='addAccplayer success'){
                this.$message.warning("您好！资质审核一般在3个小时内给予回复，谢谢合作。");
                this.$router.push('/');
            }else{
                this.$message.error("请按要求填写内容进行提交");
            }
        })
      },
      onlyNum(event) {
        if(!((event.keyCode >= 48 && event.keyCode <= 57) || (event.keyCode >= 96 && event.keyCode <= 105) || (event.keyCode === 8))) {
          // 防止浏览器默认行为（w3c）
          if(event && event.preventDefault) {
            event.preventDefault();
          }
          // IE中组织浏览器行为
          else {
            window.event.returnValue = false;
          }
        }
      }
    },
    mounted:function () {
      var url = 'api/accplayer-user/user/getInfoByTel';
      axios.get(url).then(res=>{
        if(res.data!=null){
          this.user.userPic = res.data.userPic;
          this.loginName = res.data.userNickname;
          this.user = res.data;
        }
      })
    }
  }
</script>
