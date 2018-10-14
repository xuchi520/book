<template>
  <swiper v-if="swiperSlides.length" :options="swiperOption">
    <swiper-slide v-for="(sliders, index) in swiperSlides" :key="index">
      <img :src="sliders">
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
  export default {
    props:{
      swiperSlides:{
        type:Array
      }
    },
    data() {
      return {
        swiperOption: {
          autoplay: true,
          setWrapperSize: true,
          observeParents: true,
          loop:true,
          pagination:{
            el:'.swiper-pagination',
          }
        },
      }
    }
  }
</script>

<style lang='less' scoped>
  img{
    width: 100%;
  }
</style>
