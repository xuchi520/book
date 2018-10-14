<template>
  <div class="detail">
    <Header :back="true">详情</Header>
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
        <button @click="update">确认修改</button>
      </li>
    </ul>
  </div>
</template>
<script>
  import Header from '../components/Header'
  import { findOneBook, updateBook} from "../api";
  export default {
    data() {
      return {
        book: {}
      }
    },
    components: {Header},
    watch: { // 只要路径变化，就重新获取数据
      $route(){
        this.getData()
      }
    },
    created(){
      this.getData()
    },
    computed: {
      ids() { // 将路径参数的id映射到ids上
        return this.$route.params.ids
      }
    },
    methods: {
      update(){
        this.updateBooks()
      },
      async updateBooks(){ // 修改图书
        try {
         await updateBook(this.ids,this.book)
          this.$router.push('/list') // 修改完后跳转页面
        } catch(error){
          console.log(error)
        }
      },
      async getData(){ // 通过id找到某一项后 赋给book
        try {
          let res = await findOneBook(this.ids)
            this.book = res.data
          // 如果是空对象没有值需要跳转回列表页
            Object.keys(this.book).length>0?void 0:this.$router.push('/list')
        } catch(error){
          console.log(error)
        }
      }
    }
  }
</script>
<style scoped lang="less">
  .detail {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: #fff;
    z-index: 100;
    ul{
      margin:50px 20px 0 20px;
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
  }
</style>
