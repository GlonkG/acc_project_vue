<template>
  <div v-html="apply">
    {{apply}}
  </div>
</template>
<script>
  export default{
      name:'applyText',
      data(){
        return{
            apply:''
        }
      },
      mounted(){
          //alert(this.$route.query.htmls)
          let form = this.$route.query.htmls
          this.apply = form;
          this.$nextTick(()=>{
              document.forms[0].submit()
          })
      }
  }
</script>

