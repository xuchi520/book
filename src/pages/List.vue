<template>
  <div>
    <Header :back='true'>列表</Header>
    <div class="content" ref="scroll">
      <ul>
        <router-link v-for="(book,index) in books" :key="index" :to="{name:'detail' ,params:{ids:book.bookId}}"
                     tag="li">
          <img v-lazy="book.bookCover">
          <div>
            <h3>{{book.bookName}}</h3>
            <p>{{book.bookInfo}}</p>
            <b>¥：{{book.bookPrice}}</b>
            <button @click.stop="remove(book.bookId)">删除</button>
          </div>
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
  import Header from '../components/Header'
  import {getBooks, removeBook} from "../api";

  export default {
    data() {
      return {
        books: [],
        offset: 0,
        hasMore: true
      }
    },
    components: {
      Header
    },
    created() {
      this.getDataBooks()
    },
    methods: {
      // 获取全部图书
      async getDataBooks() {
        try {
          let res = await getBooks()
          this.books = res.data
        } catch (error) {
          console.log(error);
        }
      },
      async remove(id) {
        await removeBook(id) // 删除某一项
        // 删除前端数据
        this.books = this.books.filter(item => item.bookId !== id)
      }
    }
  }
</script>

<style lang='less' scoped>
  .content {
    ul {
      padding: 10px;
      li {
        display: flex;
        padding-bottom: 10px;
        border-bottom: 1px solid #ddd;
        height: 160px;
        margin-top: 15px;
        button {
          display: block;
          width: 60px;
          height: 25px;
          background: red;
          color: #fff;
          border: none;
          border-radius: 10px;
          font-size: 14px;
          outline: none;
        }
        img {
          max-width: 120px;
          max-height: 150px;
        }
        h3 {
          line-height: 45px;
        }
        p {
          color: #2a2a2a;
          line-height: 20px;
        }
        b {
          line-height: 35px;
          color: red;
        }
      }
    }
  }
</style>
