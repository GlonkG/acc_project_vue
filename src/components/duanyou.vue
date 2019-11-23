<template>
  <div>

<div class="type">
  <div class="type_1">
    <img src="/static/image/yingxionglianmeng.jpg"/>
    <span>英雄联盟</span>
  </div>
  <div class="type_1">
    <img src="/static/image/juediqiusheng.jpg"/>
    <span>绝地求生</span>
  </div>
  <div class="type_1">
    <img src="/static/image/dota2.png"/>
    <span>DOTA2</span>
  </div>
  <div class="type_1">
    <img src="/static/image/yundingzhiyi.png"/>
    <span>云顶之弈</span>
  </div>
</div>
  </div>
</template>
<script>
  export  default {
    data(){
      return{

      }
    },
    mounted:function () {

  }
  }
</script>
<style>
  .type{
    width: 85%;
    height: 20%;
    float: left;
    /*background-color: #2e6da4;*/
    margin-top: 1%;
    margin-left: 10%;
  }
  .type_1{
    width: 9%;
    height: 50%;
    float: left;
    background-color: black;
    margin-top: 3%;
    margin-left: 2%;
  }
  .type_1 img{
    width: 100%;
    height: 100%;
  }
</style>
