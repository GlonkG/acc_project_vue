<template>
  <div>
    <h1>欢迎登录</h1>
    <el-form ref="loginForm" :model="wanan" label-width="80px" class="login-box">
      <el-form-item label="账号" prop="name">
        <el-input type="text" placeholder="请输入账号" v-model="wanan.name"/>
      </el-form-item>
      <el-form-item label="密码" prop="pass">
        <el-input placeholder="请输入密码" v-model="wanan.pass" show-password></el-input>
      </el-form-item>
      <el-form-item>
        <el-button size="small" type="primary" v-on:click="onLogin">登录</el-button>
        <el-button size="small" type="success" v-on:click="onRegist">注册</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import axios from 'axios'
  export default{
    data(){
      return{
        wanan:{
          name:'',
          pass:''
        }
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
      onLogin:function () {
          var url = 'api/accplayer-manage/wanan/login';
          axios.post(url,this.wanan).then(res=>{
              if(res.data!=null){
                this.$message.success("登录成功");
                this.$router.push('/admin');
              }else{
                this.$message.error("登录失败");
              }
          })
      },
      goBack:function () {
        this.$router.push('/');
      },
    }
  }
</script>


<style>
  .login-box {
    border: 1px solid #DCDFE6;
    width: 350px;
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
</style>
