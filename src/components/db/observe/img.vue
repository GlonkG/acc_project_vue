<template>
  <div id="imgs">
    <div id="title">
      <span>相册管理</span>
    </div>
    <div id="box">
      <div id="lay1">
        <div class="img1">
          <el-upload
            class="avatar-uploader"
            action="api/accplayer-acc/images/uploadImages"
            :show-file-list="false"
            :on-success="handleAvatarSuccess1"
            :before-upload="beforeAvatarUpload1">
            <img v-if="imageUrl1" :src="imageUrl1" class="avatar" width="100px" height="100px">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
          <span>陪玩详情小图一</span>
        </div>
        <div class="img1">
          <el-upload
            class="avatar-uploader"
            action="api/accplayer-acc/images/uploadImages"
            :show-file-list="false"
            :on-success="handleAvatarSuccess2"
            :before-upload="beforeAvatarUpload2">
            <img v-if="imageUrl2" :src="imageUrl2" class="avatar" width="100px" height="100px">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
          <span>陪玩详情小图二</span>
        </div>
        <div class="img1">
          <el-upload
            class="avatar-uploader"
            action="api/accplayer-acc/images/uploadImages"
            :show-file-list="false"
            :on-success="handleAvatarSuccess3"
            :before-upload="beforeAvatarUpload3">
            <img v-if="imageUrl3" :src="imageUrl3" class="avatar" width="100px" height="100px">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
          <span>陪玩详情小图三</span>
        </div>
        <div class="img1">
          <el-upload
            class="avatar-uploader"
            action="api/accplayer-acc/images/uploadImages"
            :show-file-list="false"
            :on-success="handleAvatarSuccess4"
            :before-upload="beforeAvatarUpload4">
            <img v-if="imageUrl4" :src="imageUrl4" class="avatar" width="100px" height="100px">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
          <span>陪玩详情小图四</span>
        </div>
      </div>
      <div id="report">
        <el-button type="warning" plain size="small" @click="repo()">提交</el-button>
      </div>
    </div>
  </div>
</template>
<script>
  import axios from 'axios';
  export default {
    data() {
      return {
        imageUrl1:'',
        imageUrl2:'',
        imageUrl3:'',
        imageUrl4:'',
        images:{
            apic1:'',
            apic2:'',
            apic3:'',
            apic4:'',
            apid:''
        }
      };
    },
    methods: {
      handleAvatarSuccess1(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
        this.images.apic1=res;
        console.log(this.images.apic1);
      },
      handleAvatarSuccess2(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
        this.images.apic2=res;
        console.log(this.images.apic2);
      },
      handleAvatarSuccess3(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
        this.images.apic3=res;
        console.log(this.images.apic3);
      },
      handleAvatarSuccess4(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
        this.images.apic4=res;
        console.log(this.images.apic4);
      },
      beforeAvatarUpload1(file) {
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
      beforeAvatarUpload2(file) {
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
      beforeAvatarUpload3(file) {
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
      beforeAvatarUpload4(file) {
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
      repo:function () {
        this.images.apid = this.$route.params.apid;
        console.log(this.images);
        var url = 'api/accplayer-acc/images/save';
        axios.post(url,this.images).then(res=>{
            if(res.data=='save success'){
                this.$message.success("图片上传成功!!!");
            }else{
                this.$message.warning("图片上传失败!!!");
            }
        })
      }
    }
  }
</script>
<style scoped>
  #imgs{
    background-color: #F6F6F6;
    width: 100%;
    height:1000px;
  }

  #title{
    width: 83%;
    height:50px;
    float: left;
    text-align: left;
    line-height: 50px;
    font-size: 15px;
    margin-top: 2%;
    margin-left: 8%;
    padding-left: 2%;
    background-color: white;
  }

  #box{
    width: 85%;
    height:45%;
    float: left;
    text-align: left;
    line-height: 50px;
    font-size: 15px;
    margin-top: 2%;
    margin-left: 8%;
    background-color: white;
  }

  #lay1{
    float: left;
  }

  .img1{
    width: 178px;
    height: 178px;
    float: left;
    margin-top: 100px;
    margin-left: 100px;
    border: 1px solid black;
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

  #report{
    float: left;
    margin-left: -540px;
    margin-top: 360px;
  }
</style>
