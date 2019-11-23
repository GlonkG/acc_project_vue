<template>
  <div class="hello">
    <div id="main" style="height: 400px;width: 600px;margin:auto "></div>
  </div>
</template>

<script>
  import axios from 'axios';
  export default {
    name: 'HelloWorld',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        x:[],
        y:[]
      }
    },
    mounted(){
        var page = 1;
        var size = 7;
      var url="api/accplayer-acc/acc/echarts/bar/"+page+'/'+size;
      axios.get(url).then(res=>{
        console.log(res.data.list);
        var data=res.data.list;
        for(var i=0;i<data.length;i++){
          this.x.push(data[i].gpid)
          this.y.push(data[i].anum)
        }
        this.draw()
      })
    },
    methods: {
      draw:function () {
        var mychart=this.$echarts.init(document.getElementById('main'));
        mychart.setOption({
          title : {
            text: '陪玩游戏ID与关注数量',
            subtext: '测试'
          },
          tooltip:{
            trigger: 'axis'
          },
          axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
          },
          legend:{
            data:['陪玩游戏ID','关注数量']
          },
          toolbox: {
            show : true,
            feature : {
              mark : {show: true},
              dataView : {show: true, readOnly: false},
              magicType : {show: true, type: ['line', 'bar']},
              restore : {show: true},
              saveAsImage : {show: true}
            }
          },
          calculable : true,
          xAxis:{
            type : 'category',
            data:this.x,
            axisLabel:{
              interval: 0
            },
          },
          yAxis:{
            type:'value'
          },
          series:[
            {
              name:'关注数量',
              type:'bar',
              barWidth:30,
              color:'green',
              data:this.y
            },
            {
              name:'关注数量',
              type:'line',
              data:this.y,
              /*markLine:{
                data:[
                  {type:'average',name:'平均值'}
                ]
              },*/
              markPoint:{
                data:[
                  {type:'max',name:'最大值'},
                  {type:'min',name:'最小值'}
                ]
              }
            }
          ]
        })
       }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
