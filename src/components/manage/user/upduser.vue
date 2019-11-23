<template>
  <div>
    <el-form :inline="true" class="demo-form-inline" :model="user" label-width="80px">
      <el-form-item label="ID">
        <el-input v-model="user.uid" readonly="readonly"></el-input>
      </el-form-item><br>
      <el-upload
        class="avatar-uploader"
        action="api/accplayer-user/user/loadingUserPic"
        :show-file-list="false"
        :on-success="handleAvatarSuccess"
        :before-upload="beforeAvatarUpload">
        <img v-if="imageUrl" :src="imageUrl" class="avatar" width="170px" height="170px">
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
      </el-upload>
      <el-form-item label="陪玩昵称">
        <el-input v-model="user.userNickname" ></el-input>
      </el-form-item><br>
      <el-form-item label="联系方式">
        <el-input v-model="user.userTel"></el-input>
      </el-form-item><br>
      <el-form-item label="住址">
        <el-input v-model="user.userAddress"></el-input>
      </el-form-item><br>

      <el-form-item>
        <el-button size="small" type="success" @click="onSubmit()">提交</el-button>
        <el-button size="small" type="primary" @click="goBack()">取消</el-button>
      </el-form-item>
    </el-form>
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
          userNickname:'',
          userTel:'',
          userAddress:'',
          userPic:''
        },
        file:''
      }
    },
    mounted:function () {
      var uid = this.$route.params.uid;
      var url = 'api/accplayer-user/user/findByUid/'+uid;
      axios.get(url).then(res=>{
        if(res.data != null){
          this.user = res.data;
          this.imageUrl=res.data.userPic;
        }else{
          alert("编辑失败!!!");
        }
      })
    },
    methods:{
      onSubmit:function () {
        var url = 'api/accplayer-user/user/updUser';
        axios.post(url,this.user).then(res=>{
          if(res.data == "updUser success"){
            this.$message.success("修改成功");
            this.$router.push('/user');
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
        this.$message.warning("取消修改");
        this.$router.push('/user');
      }
    }
  }
</script>
