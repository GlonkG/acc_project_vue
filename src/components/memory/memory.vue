<template>
  <div>
    <!--用户登录注册-->
    <el-form ref="loginForm" :model="user" label-width="80px" class="login-box">
      <span style="float: left;margin-left: 10px;font-size: 24px" @click="mlogin()">登录</span> <span style="float: left;margin-left: 20px;font-size: 24px" @click="mregist()">注册</span><br><br>
      <hr>
        <router-view></router-view>
        <div id="login_type" >
          <span>其它登录方式</span><br>
          <el-button  class="e2" round="round"  type="primary" @click="onqq()"><img src="/static/image/qq.png" style="float: left;margin-left: 20px;"/><span style="line-height: 21px">QQ登录</span></el-button>
          <el-button  class="e2" round="round"  type="success" @click="onwx()" ><img src="/static/image/wx.png" style="float: left;margin-left: 20px;"/><span style="line-height: 21px">微信登录</span></el-button>
          <el-button  class="e2" round="round"  type="danger" @click="ondx1()" ><img src="/static/image/phone.png" style="float: left;margin-left: 20px;"/><span style="line-height: 21px">短信登录</span></el-button>
        </div>
      <div id="login_mess">
        <el-checkbox v-model="checked" class="m3"><span style="color: black;font-size: 15px">阅读并同意<span @click="xieyi()">《邀你来开黑用户协议》</span></span></el-checkbox>
      </div>
    </el-form>
  </div>
</template>
<script>
  import axios from 'axios'
  import ElInput from "../../../node_modules/element-ui/packages/input/src/input";
  export default{
    components: {ElInput},
    data(){
      return{
        user:{
          userName:'',
          userPwd:''
        },
        checked: true
      }
    },
    methods:{
      onRegist:function () {
        this.$router.push('/regist');
      },
      changeValue(value) {
        console.log(value);
        let obj = {};
        obj = this.options.find((item)=>{
          return item.value === value;
        });
        console.log(obj.label);
        this.label = obj.label;
      },
      mlogin:function(){
          this.$message.success('welcome to mlogin');
          this.$router.push('/mlogin');
      },
      mregist:function () {
        this.$message.success('welcome to mregist');
        this.$router.push('/mregist');
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
      ondx1:function () {
        this.$message.success('welcome to mlogin');
        this.$router.push('/mlogin');
      },
      onqq:function () {
          var href = 'https://graph.qq.com/oauth2.0/show?which=Login&display=pc&response_type=code&client_id=101403388&redirect_uri=http%3A%2F%2Fwww.daofengdj.com%2Fuser%2Fconnect%2Fcallback%2Fplatform%2Fqq&scope=get_user_info&state=679512f6229c6f437765566a03a763d7';
          window.open(href,'_blank');
      }
    }
  }
</script>


<style scoped>
  #login_type{
    /*margin-top: -196px;*/
    background-color: white;
    float: right;
    width: 200px;
    height: 240px;
    position: absolute;
    left:870px;
    top: 350px;
  }

  #login_mess{
    position: absolute;
    left:540px;
    top: 640px;
    width: 600px;
    border-top: 1px solid #333333;
  }
  .login-box {
    border: 1px solid #DCDFE6;
    width: 600px;
    height: 500px;
    margin: 180px auto;
    padding: 35px 35px 15px 35px;
    border-radius: 5px;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    box-shadow: 0 0 25px #909399;
  }

  .login-title {
    text-align: center;
    margin: 0 auto 40px auto;
    color: #303133;
  }
  .m3{
    float: left;
    margin-left: 2px;
  }

  .e1{
    float: right;
    margin-left: -34px;
    padding-top: 100px;
  }

  .e2{
    width: 180px;
    height: 42px;
    margin: 5%;
  }


</style>
