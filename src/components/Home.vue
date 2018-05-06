<template>
  <div>
      <MyHead :isBack='false'>首页</MyHead>
      <div class="content">
          <div class="mySwiper" >
              <Carousel v-model="value" loop autoplay>
                  <CarouselItem v-for="img in sliders" :key="img.id">
                    <div class="mm"><img :src="img.img"></div>
                  </CarouselItem>
              </Carousel>
              <div class="hot">
                  <h3>热门图书</h3>
                  <ul>
                      <router-link v-for="(book, index) in books" :to="{ name: 'detail', params: {id: book.bookId}}" :key="index" tag="li">
                          <img :src='book.bookImg'>
                          <p>{{book.bookName}}</p>  
                      </router-link>
                  </ul>
              </div>
          </div>
      </div>
  </div>
</template>
<script>
import {getSliders, getHotBooks} from '@/api'
export default {
    created () {
        this.getHomeSliders()
        this.getHomeHot()
    },
    data () {
        return {
            value: 0,
            sliders: [],
            books: [],
            title: 'this is home'
        }
    },
    methods: {
        async getHomeSliders () {
            // 给data对象起别名，对象中的属性名字必须和得到的结果名字一致
            // let {data:sliders} = await getSliders()
            // this.sliders = sliders // 将获取到的数据放到sliders中
            this.sliders = await getSliders()
        },
        async getHomeHot () {
            // let {data:books} = await getHotBooks()
            // this.books = books
            // 使用拦截器 统一取res的data数据
            this.books = await getHotBooks()
        }
    },
}
</script>
<style lang="less">
.mm {
    height: 12rem;
    img {
        width: 100%;
        height:100%;
    }
}
.hot {
    text-align: center;
    h3 {
        padding: 1rem;
    }
    width: 95%;
    margin: 0 auto;
    ul{
        display: flex;
        flex-wrap: wrap;
        li {
            width: 50%;
            padding-bottom: 1rem;
            img {
                width: 90%;
                border: 1px solid #ccc;
                padding: 10px;
            }
        }
    }
}
</style>


