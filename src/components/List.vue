<template>
  <div>
      <MyHead :isBack='false'>
          列表
          <router-link :to="{path: '/list/add'}" slot="right"><Icon type="plus-round"></Icon></router-link>
      </MyHead>      
      <div class="content list">
          <ul>
              <li v-for="book in books" :key="book.bookId">
                  <img :src="book.bookImg">
                  <div class="info">
                      <h3 class="bookname">{{book.bookName}}</h3>
                      <p class="bookdesc">{{book.bookDesc | descLength}}</p>
                      <p class="bookauthor">{{book.bookAuthor}}</p>
                      <p class="bookprice">￥{{book.bookPrice}}</p>
                      <router-link :to="{name: 'detail', params: { id: book.bookId }}">
                          <Button type="info">详情</Button>
                      </router-link>
                      <router-link :to="{name: 'detailEdit', params: { id: book.bookId }}">
                          <Button type="warning">编辑</Button>
                      </router-link>
                      <Button type="error" @click="remove(book.bookId)">删除</Button>
                  </div>
              </li>
          </ul>
      </div>
  </div>
</template>
<script>
import {getAllBooks, deleteBook} from '@/api'
export default {
    created () {
        this.getList()
    },
    data() {
        return  {
            title: 'this is list',
            books: [],
        }
    },
    methods: {
        async getList () {
            this.books = await getAllBooks()
        },
        async remove (id) {
            await deleteBook(id)
            // 同时删除前台数据
            // this.getList() // 这样会多一次请求
            this.books = this.books.filter(book => book.bookId !== id)
        }
    },
    filters: {
        descLength (value) {
            if (!value) return  ''
            return value.slice(0,30) + '...'
        }
    }
}
</script>
<style lang="less" scoped>

</style>


