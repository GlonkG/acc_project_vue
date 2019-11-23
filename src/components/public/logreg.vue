<!--
<template>
  <div>
    <form method="post">
      <br/>
      <p class="ii">
        <span class="pic"><i class="el-icon-phone-outline"></i></span>
        <input class="text" v-model="user.userphone" placeholder="请输入手机号"/>
      </p>
      <br/>
      <div class="io">
        <slide-verify :l="42"
                      :r="10"
                      :w="310"
                      :h="100"
                      @success="onSuccess"
                      @fail="onFail"
                      @refresh="onRefresh"
                      :slider-text="text">
        </slide-verify>
      </div>
      <br/>
      <p class="ii">
        <span class="pic"><i class="el-icon-postcard"></i></span>
        <input class="text" v-model="phonecode" placeholder="请输入验证码"/>
      </p>
      <br/>
      <el-button class="layui-btn" type="primary" @click="phonelogin()">登录</el-button>
    </form>
  </div>
</template>
<script>
  import axios from "axios"
  export default {
    name: 'App',
    data(){
      return {
        phonecode:'',
        msg: '',
        text: '向右滑获取验证码',
        user:{
          userphone:''
        }
      }
    },
    methods: {
      onSuccess(){
        this.msg = 'login success'
        alert("验证码正确，登陆成功")
        this.sendphone();
      },
      onFail(){
        this.msg = ''
        alert("验证码错误，请重新验证")
      },
      onRefresh(){
        this.msg = ''
        alert("刷新重来")
      },
      phonelogin:function () {
          this.$message.success("已登录")
        /*var url="api/login/phonelogin/"+this.user.userphone+"/"+this.code;
        axios.get(url).then(res=>{
          alert(this.user.userphone)
        })*/
      },
      sendphone:function () {
        this.$message.success("已发送")
        /*var url="api/login/sendphone/"+this.user.userphone;
        axios.get(url).then(res=>{
          alert(res.data)
        })*/
      }
    }
  }
</script>
<style>

  .layui-btn{
    width: 66%;
    height: 40px;
    font-size: 16px;
    margin-left:2%;
  }
  input {
    border: 0;
    outline: none;
    background-color: rgba(0, 0, 0, 0);
    height: 35px;
    width:70%;
    margin-top: 2.5px;
  }
  .ii{
    border:solid 1px;
    width: 66%;
    height:45px;
    margin-left: 18%;
    line-height: 45px;
  }
  .io{
    width: 80%;
    height:100%;
    margin-left: 18%;
  }
  .pic{
    width: 10%;
    height:80%;
    margin-right: 5%;
  }
</style>
-->
<template>
  <div>
    <!--8元专区-->


    <div class="div1">
      <div>这里是测试文字</div>
      <div class="div2" style="width: 300px;height: 280px;background-color: #2e6da4">
        <img src="/static/image/test3.png" style="width: 30%;height: 30%;float: left;border-radius: 50px;margin: 5%">
        <div style="margin-top:35px;float: left;text-align: left"><span>Glonk</span><br>
          <span>ID:1843183</span></div>
        <div class="wall" style="float:left;margin-top: 35px;margin-left: 25%;width: 100%">
          <span style="margin-left: -45px;font-size: 25px;float:left;">我的钱包</span>
          <button style="background-color: palevioletred;float:left;margin-left: 35%;margin-top: 3%;border: none;border-radius: 10px">去充值</button>
        </div>
        <div style="width: 100%;height: 25%;float: left;margin-top: 10%">
          <span>进入个人中心</span>
          <span>退出登录</span>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
  .div1:hover .div2{
    position: relative;
    height: 300px;
    display:block;
  }
  .div1 .div2 {
    height: 600px;
    position: absolute;
    display:none;

  }

</style>
<script>
  import axios from 'axios';
  export default{
    data(){
      return{

      }
    }
  }
</script>
