<template>
  <div>
    <el-form :inline="true" class="demo-form-inline" :model="accplayer" label-width="80px">
      <el-form-item label="陪玩ID">
        <el-input v-model="accplayer.apid" readonly="readonly"></el-input>
      </el-form-item><br>
      <el-upload
        class="avatar-uploader"
        action="api/accplayer-acc/acc/loadingAccplayerPic"
        :show-file-list="false"
        :on-success="handleAvatarSuccess"
        :before-upload="beforeAvatarUpload">
        <img v-if="imageUrl" :src="imageUrl" class="avatar" width="170px" height="170px">
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
      </el-upload>
      <el-form-item label="板块名称">
        <el-input v-model="accplayer.gname"></el-input>
      </el-form-item><br>
      <el-form-item label="游戏大区">
        <el-input v-model="accplayer.gdaqu"></el-input>
      </el-form-item><br>
      <el-form-item label="游戏段位">
        <el-input v-model="accplayer.gduanwei"></el-input>
      </el-form-item><br>
      <el-form-item label="游戏ID">
        <el-input v-model="accplayer.gpid"></el-input>
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
        accplayer:{
          apid:'',
          gid:'',
          gname:'',
          gdaqu:'',
          gduanwei:'',
          gpid:'',
          accPic:''
        },
        imageUrl:'',
        file:''
      }
    },
    mounted:function () {
      var apid = this.$route.params.apid;
      var url = 'api/accplayer-acc/acc/findAccplayerByApid/'+apid;
      axios.get(url).then(res=>{
        if(res.data != null){
          this.accplayer = res.data;
        }else{
          this.$message.error("编辑失败");
        }
      })
    },
    methods:{
      onSubmit:function () {
        var url = 'api/accplayer-acc/acc/updAccplayer';
        axios.post(url,this.accplayer).then(res=>{
          if(res.data == "updAccplayer success"){
            this.$message.success("修改成功");
            this.$router.push('/accplayer');
          }else{
            this.$message.error("修改失败");
          }
        })
      },
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
        this.accplayer.accPic=res;
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
        this.$router.push('/accplayer');
      }
    }
  }
</script>
