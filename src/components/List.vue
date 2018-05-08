<template>
  <div>
      <MyHead :isBack='false'>
          列表
          <router-link :to="{path: '/list/add'}" slot="right"><Icon type="plus-round"></Icon></router-link>
      </MyHead>      
      <div class="content list" ref="scroll" @scroll="loadMore">
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
          <div class="more" v-show="hasMore">
              <Button type="success" size="large" @click="getMore">加载更多</Button>
          </div>
      </div>
  </div>
</template>
<script>
import {getPage, deleteBook} from '@/api'
export default {
    created () {
        this.getList()
    },
    data() {
        return  {
            title: 'this is list',
            books: [],
            hasMore: true,
            isLoading: false,
            offset: 0,
        }
    },
    methods: {
        async getList () {
            if(this.hasMore && !this.isLoading) {
                this.isLoading = true // 开始加载
                let {hasMore, books} = await getPage(this.offset)
                this.books = [...this.books, ...books] // 获取的书追加到当前books上
                this.hasMore = hasMore
                this.isLoading = false // 加载完毕
                this.offset = this.books.length
            }
        },
        async remove (id) {
            await deleteBook(id)
            // 同时删除前台数据
            // this.getList() // 这样会多一次请求
            this.books = this.books.filter(book => book.bookId !== id)
        },
        getMore () {
            this.getList()
        },
        loadMore () {
            clearTimeout(this.timer)
            this.timer = setTimeout(() => {
                //   卷起的高度  当前可见区域高度   总高
                let {scrollTop, clientHeight, scrollHeight} = this.$refs.scroll
                if(scrollTop+clientHeight+40 > scrollHeight) {
                    this.getList()
                }
                console.log(1000)
            },60)
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


