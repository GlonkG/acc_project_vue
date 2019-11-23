<template>
  <div id="outer">
    <div id="title">
      <span style="color: black;">历史订单：</span>
    </div>
    <div id="order_num" v-for="items in order">
      <div class="order_title">
        <div class="order_title_1"  >
          <span>订单编号:{{items.orderNo}}</span>
        </div>
        <div class="order_title_3">
          <img style=" margin-top: 7px;margin-left: 7px;" src="/static/image/ico_04.png">
        </div>
        <div class="order_title_1">

          <span><font style="line-height: 30px">陪玩联系方式  闪电邀约</font></span>
        </div>
        <div class="order_title_2">
          <span>{{timestampToTime(items.ocreatetime)}}</span>
        </div>
      </div>

      <div class="order_body">
      <div class="order_player_pic" v-model="accplayer">
      <img style="width: 100%;height: 100%;border-radius: 50%" :src="accplayer.accPic"/>
      </div>
      <div class="order_player_name">
          昵称：{{items.userNickname}}
      </div>
        <div class="order_player_name1">
          陪玩服务：{{items.gname}}
        </div>
        <div class="order_player_name2">
          订单要求：{{items.ocontent}}
        </div>

        <div class="zhuangtai">
          <font style="font-size: 18px;">{{items.ostatus=='1'?'已支付':'未支付'}}</font>
        </div>
        <!--<el-pagination
      background
      layout="prev,pager,next"
      :page-size="this.params.size"
      v-on:current-change="changePage"
      :total="total" :current-page="this.params.page" style="text-align: center">
    </el-pagination>-->
      </div>


    </div>
  </div>
</template>
<style scoped>
  #outer{
    background-color: #F6F6F6;
    width: 100%;
    height:1000px;
  }

  #title{
    width: 85%;
    height:50px;
    float: left;
    text-align: left;
    line-height: 50px;
    font-size: 15px;
    margin-top: 2%;
    margin-left: 8%;
    background-color: white;
  }
  #order_num{
    width: 85%;
    height:160px;
    float: left;
    text-align: left;
    line-height: 50px;
    font-size: 15px;
    margin-top: 2%;
    margin-left: 8%;
    background-color: black;
  }
  .order_title{
    width: 100%;
    height:30px;
    float: left;
    text-align: left;
    line-height: 30px;
    font-size: 15px;
   /* margin-left: 8%;*/
    background-color: orange;
  }
  .order_title_1{
    width: 25%;
    height:30px;
    float: left;
    text-align: left;
    /*line-height: 30px;*/
    font-size: 15px;
    /* margin-left: 8%;*/
    background-color: orange;
  }
  .order_title_2{
    width: 25%;
    height:30px;
    float: right;
    text-align: center;
    line-height: 30px;
    font-size: 15px;
    /* margin-left: 8%;*/
    background-color: orange;
  }
  .order_title_3{
 /*   border-left: solid 1px gainsboro;*/
    width: 3%;
    height:30px;
    float: left;
    background-color: orange;
    line-height: 30px;
  }
  .order_body{
    width: 100%;
    height:130px;
    float: left;
    text-align: center;
    line-height: 50px;
    font-size: 15px;
    /* margin-left: 8%;*/
    background-color: white;
  }
  .order_player_pic{
    width: 11%;
    height:100px;
    float: left;
    margin-left: 45px;
    margin-top: 15px;
    background-color: black;
  }
  .order_player_name{
    width: 12%;
    height:20px;
    float: left;
    text-align: left;
    line-height: 20px;
    font-size: 15px;
     margin-left: 3%;
    margin-top: 2%;
    /*background-color: orange;*/
  }
  .order_player_name1{
    width: 14%;
    height:20px;
    float: left;
    text-align: left;
    line-height: 20px;
    font-size: 15px;
    margin-left: -12%;
    margin-top: 5%;
    /*background-color: orange;*/
  }
  .order_player_name2{
    width: 20%;
    height:20px;
    float: left;
    text-align: left;
    line-height: 20px;
    font-size: 15px;
    margin-left: -14%;
    margin-top: 8%;
    /*background-color: orange;*/
  }
  span{
    color: white;
  }
  .zhuangtai{
    width: 20%;
    height:20px;
    float: left;
    text-align: left;
    line-height: 20px;
    font-size: 15px;
    margin-left:16%;
    margin-top:5%;
    /*background-color: orange;*/
  }
  .page{
    width: 20%;
    height:20px;
    float: left;
    text-align: center;
    margin-left:40%;
  }
</style>
<script>
  import axios from 'axios';
  export default{
      data(){
          return{
           order:[],
            accplayer:[],
            total:0,
            params:{
              page:1,
              size:4
            }
          }
      },
    mounted:function () {
      this.query();
    },
    methods:{
      //降序分页
      query:function () {
        var url = 'api/accplayer-order/sortByoCreatetime/'+this.params.page+'/'+this.params.size;
        axios.get(url).then(res=>{
            if(res.data!=null){
                //console.log(res.data);
                this.order = res.data.list;
                this.total = res.data.total;
               for(var i=0;i<this.order.length;i++){
                    this.order.apid = this.order[i].apid;
                    console.log(this.order.apid);
                  var url = 'api/accplayer-acc/acc/findAccplayerByApid/'+this.order.apid;
                  axios.get(url).then(res=>{
                    if(res.data!=null){
                      //console.log(res.data);
                      this.accplayer = res.data;
                    }
                  })
                }
            }
        })
      },
      //分页
      changePage:function (page) {
        this.params.page = page;
        this.query();
      },
      timestampToTime(timestamp) {
        var date = new Date(timestamp);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
        var Y = date.getFullYear() + '-';
        var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
        var D = (date.getDate() < 10 ? '0'+date.getDate() : date.getDate()) + ' ';
        var h = (date.getHours() < 10 ? '0'+date.getHours() : date.getHours()) + ':';
        var m = (date.getMinutes() < 10 ? '0'+date.getMinutes() : date.getMinutes()) + ':';
        var s = (date.getSeconds() < 10 ? '0'+date.getSeconds() : date.getSeconds());
        return Y+M+D+h+m+s;
      }
    }
  }

</script>



















