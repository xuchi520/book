<template>
  <div>
    <Header>首页</Header>
    <div class="content">
      <loading class="loading" v-if="loading"></loading>
      <template v-else>
        <Swiper :swiperSlides="sliders"></Swiper>
        <div class="container">
          <h3>热门图书</h3>
          <ul>
            <router-link v-for="book in books" :key="book.id" :to="{name:'detail',params:{ids:book.bookId}}" tag="li">
              <img :src="book.bookCover">
              <b>{{book.bookName}}</b>
            </router-link>
          </ul>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import Header from '../components/Header'
import Swiper from '../components/Swiper'
import Loading from '../components/Loading'
// getAll
import {getSliders, getHotBook} from "../api";
export default {
   data () {
     return {
       sliders:[],
       books:[],
       loading:true
     }
   },
  components: {
    Header,
    Swiper,
    Loading
  },
  created(){
     this.getSlider()
     this.getHotBooks()
    // this.getData()
  },
   methods:{
     // 轮播图
    async getSlider () {
      try {
        let res = await getSliders();
        this.sliders = res.data;
        this.loading = false
      } catch (error) {
        console.log(error)
      }
    },
     // 热门图书
     async getHotBooks () {
       try {
         let res = await getHotBook();
         this.books = res.data
         this.loading = false
       } catch (error) {
         console.log(error)
       }
     }
     // async getData(){ // 封装 sliders 和books
     //    let [sliders,books] = await getAll() // [sliders,books]
     //    this.sliders = sliders
     //    this.books = books
     // }
   }
 }
</script>

<style scoped lang="less">
  h3 {
    color: #999;
    padding: 5px 0;
  }
  .container {
    width: 90%;
    margin: 0 auto;
    ul {
      display: flex;
      flex-wrap: wrap;
      padding-bottom: 10px;
      li {
        width: 50%;
        flex-direction: row;
        text-align: center;
        margin: 5px 0;
        img {
          width: 100%;
        }
        b {
          color: #333;
          font-size: 14px;
        }
      }
    }
  }
  .loading{
    text-align: center;
  }
</style>
