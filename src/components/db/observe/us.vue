<template>
  <div>
    <h3>关于我们</h3>
    发布时间：2019-11-11 11:51:36  <br>
    陕西省[邀你来开黑]网络科技有限公司（总公司） <br>
    地址：陕西省西安市雁塔区立人科技园区 (邀你来开黑电竞运营.客服)  <br>

    <v-html-panel :url.asyc="url"></v-html-panel>
  </div>
</template>
<script>
  export default{
      data(){
          return{
              url:'/static/image/map.html'
          }
      }
  }
</script>
<style scoped>

</style>
