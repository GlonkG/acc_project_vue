<template>
  <div>
    <!--用户登录-->
    <el-form ref="loginForm" :model="user" label-width="80px" class="login-box" :rules="rules">
    <el-form-item  prop="userTel" >
      <el-input type="text" placeholder="请输入手机号" v-model="user.userTel" class="g1" ></el-input>
    </el-form-item>
    <el-form-item  prop="code">
      <el-input placeholder="请输入短信验证码" v-model="code"  class="g3"></el-input>
      <el-button class="g4" type="danger" v-on:click="oncode()">获取验证码</el-button>
    </el-form-item>
    <el-form-item  prop="userpass">
      <el-input placeholder="请输入密码" v-model="user.userPwd" show-password class="g1"></el-input>
    </el-form-item>
    <el-checkbox v-model="checked" class="m3"><span style="color: black;font-size: 15px">下次自动登录</span></el-checkbox><span class="m4">忘记密码</span><br><br>
    <el-form-item>
      <el-button class="g2" round="round"  type="danger" v-on:click="onRegist()">注册</el-button>
    </el-form-item>
    </el-form>
  </div>
</template>
<script>
  import axios from 'axios'
  import ElInput from "../../../node_modules/element-ui/packages/input/src/input";
  export default{
    components: {ElInput},
    data(){
      var validateMobilePhone = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('手机号不可为空'));
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
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请设置正确格式的密码'));
        } else if(value.length < 6){
          callback(new Error('密码长度最小6位'));
        }else{
          callback();
        }
      };
      return{
        user:{
          userTel:'',
          userPwd:''
        },
        checked: true,
        code:'',
        rules: {
          userTel: [{validator: validateMobilePhone, trigger: 'blur'}],
          userPwd: [{validator: validatePass, trigger: 'blur'}]
        }
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
      oncode:function () {
          //alert(this.db.userTel)
        var url = 'api/accplayer-user/user/phone/'+this.user.userTel;
        axios.get(url).then(res=>{
            if(res.data!='fail'){
                this.$message.success("验证码已发送");
            }else{
                this.$message.warning("验证码发送失败");
            }
        })
      },
      onRegist:function () {
         // alert(this.db.userTel+'---'+this.code+'---'+this.db.userPwd);
         var url = 'api/accplayer-user/user/regist/'+this.user.userTel+'/'+this.user.userPwd+'/'+this.code;
         axios.get(url).then(res=>{
          if(res.data=='regist success'){
            this.$message.success("注册成功");
            this.$router.push('/mlogin');
          }else{
            this.$message.error("注册失败");
          }})
      }
    }
  }
</script>
<style scoped>
  .g1{
    width: 300px;
    float: left;
    margin-left: -80px;
    border: 1.5px solid lightcoral;
  }

  .g2{
    float: left;
    width: 200px;
    height: 42px;
    margin-left: -78px;
  }

  .g3{
    width: 180px;
    float: left;
    margin-left: -80px;
    border: 1.5px solid lightcoral;
  }
  .g4{
    width: 110px;
    margin-left: -280px;
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
