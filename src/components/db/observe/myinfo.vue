<template>
  <div>
    <div style="height: 50px;">
      <span style="float: left;color: black">{{title}}</span>
    </div>
    <div style="text-align: center;margin-top: 100px;">
    <el-form :inline="true" class="demo-form-inline" :model="user" label-width="80px">
      <div style="border: 1px solid blue;border-radius: 50%;width: 170px;height: 170px;margin-left: 655px;">
      <el-upload

        class="avatar-uploader"
        action="api/accplayer-user/user/loadingUserPic"
        :show-file-list="false"
        :on-success="handleAvatarSuccess"
        :before-upload="beforeAvatarUpload">
        <img style="border-radius: 50%;" v-if="imageUrl" :src="imageUrl" class="avatar" width="170px" height="170px">
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
      </el-upload></div><br><br>
      <el-form-item label="昵称">
      <el-input v-model="user.userNickname" ></el-input>
    </el-form-item><br>
      <el-form-item label="姓名">
        <el-input v-model="user.userName" ></el-input>
      </el-form-item><br>
      <el-form-item label="手机">
        <el-input v-model="user.userTel"></el-input>
      </el-form-item><br>
      <el-form-item label="性别" style="margin-left:0px;">
        <el-select v-model="user.userGender" placeholder="性别" size="small">
          <el-option label="男" value="男"></el-option>
          <el-option label="女" value="女"></el-option>
        </el-select>
      </el-form-item><br>
      <el-form-item label="QQ">
        <el-input v-model="user.userQq" ></el-input>
      </el-form-item><br>
      <el-form-item label="Weixin">
        <el-input v-model="user.userWeixin" ></el-input>
      </el-form-item><br>
      <el-form-item label="生日" >
        <el-date-picker
          v-model="user.userBirthday"
          type="date"
          placeholder="选择日期"
        align="left">
        </el-date-picker>
      </el-form-item><br>
      <el-form-item label="地址">
        <el-input v-model="user.userAddress" ></el-input>
      </el-form-item><br>
      <el-form-item label="签名">
        <el-input v-model="user.userContent" ></el-input>
      </el-form-item><br>
      <el-form-item>
        <el-button size="small" type="success" @click="onSubmit()" style="margin-left: 70px;">提交</el-button>
        <el-button size="small" type="primary" @click="goBack()">取消</el-button>
      </el-form-item>
    </el-form>
    </div>
    </div>
</template>
<script>
  import axios from 'axios';
  export default{
    data(){
      return{
        imageUrl:'',
        user:{
          uid:'',
          userTel:'',
          userPwd:'',
          userNickname:'',
          userName:'',
          userGender:'',
          userQq:'',
          userWeixin:'',
          userAddress:'',
          userPic:'',
          userBirthday:'',
          userContent:''
        },
        title:'基本信息',
      }
    },
    mounted:function () {
        var url = 'api/accplayer-user/user/getInfoByTel';
        axios.get(url).then(res=>{
          if(res.data!=null){
              this.user = res.data;
          }
        })
    },
    methods:{
      onSubmit:function () {
        var url = 'api/accplayer-user/user/updUser';
        axios.post(url,this.user).then(res=>{
          if(res.data == "updUser success"){
            this.$message.success("修改成功");
            this.$router.push('/');
          }else{
            this.$message.error("修改失败");
          }
        })
      },
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
        this.user.userPic=res;
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
      goBack:function () {
        this.$router.push('/userinfo');
      }
    }
  }
</script>
<style scoped>
  .hv{
    width: 200px;
    height: 200px;
  }

</style>
