<template>
  <div class="header">
     <slot></slot>
     <i class="iconfont icon-fanhui" v-if="back" @click="goBack"></i>
  </div>
</template>

<script>
export default {
  props:{
    back:{
      type:Boolean,
      default:false
    }
  },
   data () {
     return {

     }
   },
   components: {

   },
   methods:{
     goBack(){
       this.$router.go(-1)
     }
   }
 }
</script>

<style lang='less' scoped>
  .header{
    position: fixed;
    top:0;
    left:0;
    width: 100%;
    background: #f5f5f5;
    height: 40px;
    text-align: center;
    line-height: 40px;
    z-index: 1000;
    i{
      position: absolute;
      left: 10px;
      vertical-align: middle;
    }
  }
</style>
