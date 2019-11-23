<template>
  <div>
    <!--用户登录-->


      <el-form-item  prop="username" >
        <el-input type="text" placeholder="手机号/靓号登录" v-model="user.userTel" class="m1" ></el-input>
      </el-form-item>
      <el-form-item  prop="userpass">
        <el-input placeholder="请输入密码" v-model="user.userPwd" show-password class="m1"></el-input>
      </el-form-item>
      <el-checkbox v-model="checked" class="m3"><span style="color: black;font-size: 15px">下次自动登录</span></el-checkbox><span class="m4">忘记密码</span><br><br>
      <el-form-item>
        <el-button class="m2" round="round"  type="danger" v-on:click="onLogin">登录</el-button>
      </el-form-item>

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
          userTel:'',
          userPwd:''
        },
        checked: true
      }
    },
    methods:{
      changeValue(value) {
        console.log(value);
        let obj = {};
        obj = this.options.find((item)=>{
          return item.value === value;
        });
        console.log(obj.label);
        this.label = obj.label;
      },
      onLogin:function () {
        var url = 'api/accplayer-user/user/login';
        axios.post(url,this.user).then(res=>{
          if(res.data=='login success'){
            this.$message.success("登录成功");
            this.$router.push('/');
          }else{
            this.$message.error("登录失败,该用户已被禁言");
          }
        })


      }
    }
  }
</script>


<style scoped>
  .login-box {
    border: 1px solid #DCDFE6;
    width: 600px;
    height: 400px;
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

  .m1{
    width: 300px;
    float: left;
    margin-left: -80px;
    margin-top: 20px;
    border: 1.5px solid lightcoral;
  }

  .m2{
    float: left;
    width: 200px;
    height: 42px;
    margin-left: -78px;
  }

  .m3{
    float: left;
    margin-left: 2px;
  }
  .m4{
    margin-left: -200px;
    font-size: 15px
  }
</style>
