<template>
  <div>
    <Header :back="true">添加</Header>
    <div class="content">
      <ul>
        <li>
          <label for="bookName">书的名称</label>
          <input type="text" id="bookName" v-model="book.bookName">
        </li>
        <li>
          <label for="bookInfo">书的信息</label>
          <input type="text" id="bookInfo" v-model="book.bookInfo">
        </li>
        <li>
          <label for="bookPrice">书的价格</label>
          <input type="text" id="bookPrice" v-model.number="book.bookPrice">
        </li>
        <li>
          <label for="bookCover">书的封面</label>
          <input type="text" id="bookCover" v-model="book.bookCover">
        </li>
        <li>
          <button @click="add">确认添加</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import Header from '../components/Header'
  import { addBook} from "../api";
export default {
   data () {
     return {
       book: {}
     }
   },
   components: {
     Header
   },
  methods:{
     add(){
      this.addData()
     },
    async addData(){
       try {
         await addBook(this.book)
         this.$router.push('/list') // 修改完后跳转页面
       } catch(error){
         console.log(error)
       }
    }
  }
 }
</script>

<style lang='less' scoped>
    ul{
      margin:10px 20px 0 20px;
      label{
        display: block;
        font-size: 25px;
      }
      input{
        height: 25px;
        width: 100%;
        font-size: 15px;
        margin: 10px 0;
        outline: none;
      }
    }
    button{
      background: cornflowerblue;
      border: none;
      outline: none;
      width: 80px;
      height: 35px;
      line-height: 35px;
      border-radius: 3px;
    }
</style>
