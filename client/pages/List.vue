<template>
  <div>
      <MyHead :isBack='false'>
          列表
          <router-link :to="{path: '/list/add'}" slot="right"><Icon type="plus-round"></Icon></router-link>
      </MyHead>      
      <div class="content list" ref="scroll" @scroll="loadMore">
          <ul>
              <li v-for="book in books" :key="book.bookId">
                  <img v-lazy="book.bookImg">
                  <div class="info">
                      <h3 class="bookname">{{book.bookName}}</h3>
                      <p class="bookdesc">{{book.bookDesc | descLength}}</p>
                      <p class="bookauthor">{{book.bookAuthor}}</p>
                      <p class="bookprice">￥{{book.bookPrice}}</p>
                      <router-link :to="{name: 'detail', params: { id: book.bookId }}">
                          <Button type="info" size="small" @click.stop>详情</Button>
                      </router-link>
                      <router-link :to="{name: 'detailEdit', params: { id: book.bookId }}">
                          <Button type="warning" size="small">编辑</Button>
                      </router-link>
                      <router-link to="/cart">
                          <Button type="error" size="small">加入购物车</Button>
                      </router-link>
                      <Button type="error" @click="remove(book.bookId)" size="small">删除</Button>
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
    watch: {
        'router': (to ,from) => {
            console.log(to)
        }
    },
    mounted () {
        let scroll = this.$refs.scroll
        let top = scroll.offsetTop // 40
        let distance = 0
        let isMove = false
        scroll.addEventListener('touchstart', (e) => {
            
            // 滚动条在最顶端时 并且当前盒子在顶端时 才继续走
            if(scroll.scrollTop != 0 || scroll.offsetTop != top) return
            let start = e.touches[0].pageY
            let move = (e) => {
                isMove = true
                let curr = e.touches[0].pageY
                let distance = curr - start
                if(distance > 0) {
                    distance = distance > 50 ? 50 : distance
                    scroll.style.top = distance + top + 'px' 
                }else {
                    // 如果是向上滑 不考虑下拉刷新事件
                    scroll.removeEventListener('touchmove', move)
                    scroll.removeEventListener('touchend', end)
                }

            }
            let end = (e) => {
                if(!isMove) return;
                isMove = false
                console.log('endddd')
            //     clearInterval(this.interval)                
            //     // 结束时 让scroll 缓慢从distance+40减至40
            //     this.interval = setInterval(() => {
            //         if(distance <= 0) {
            //             clearInterval(this.interval)
            //             distance = 0
            //             console.log('tth')
            //             scroll.removeEventListener('touchmove', move)
            //             scroll.removeEventListener('touchend', end)
            //             this.books = []
            //             this.offset = 0
            //             this.hasMore = true
            //             this.getList()
            //         }
            //         scroll.style.top = distance + top + 'px'
            //         console.log(distance)
            //         distance -= 1
            //    }, 1)
                scroll.style.top = top + 'px'
                scroll.removeEventListener('touchmove', move)
                scroll.removeEventListener('touchend', end)
                this.books = []
                this.offset = 0
                this.hasMore = true
                this.getList()
            }
            scroll.addEventListener('touchmove', move)
            scroll.addEventListener('touchend', end)
        }, false)
    },
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
                if(scrollTop+clientHeight+10 > scrollHeight) {
                    this.getList()
                }
            },20)
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


