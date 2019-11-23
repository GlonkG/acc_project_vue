<template>
  <div>
    <div style="height: 50px;">
      <span style="float: left;color: black">{{title}}</span>
    </div>
    <div v-model="user">
      密码：<el-input  v-model="user.userPwd" show-password></el-input>
      手机号码：<el-input  v-model="user.userTel" show-password></el-input>
    </div>
  </div>
</template>
<script>
  import axios from 'axios';
  export default{
    data(){
      return{
        title:'设置中心',
        user:{
          userPwd:'',
          userTel:''
        }
      }
    },
    mounted:function () {

    },
    methods:{

    }
  }
</script>
<style scoped>

</style>
