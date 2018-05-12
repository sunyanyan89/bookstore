<template>
  <div>
      <MyHead :isBack='false'>首页</MyHead>
      <div class="content home">
          <div class="load" v-if="isLoading">
              <!-- spin 加载中组件
                给父级设置position为relativ或absolute 组件加上fix属性就会在容器内垂直居中
                可以自定义spin的内容
               -->
              <Spin fix size="large">
                  <Icon type="load-c" size=18 class="demo-spin-icon-load"></Icon>
                <div>Loading</div>
              </Spin>
          </div>
          <template v-else>
            <div class="mySwiper" >
                <Carousel v-model="value" loop autoplay>
                    <CarouselItem v-for="img in sliders" :key="img.id">
                        <div class="mm"><img v-lazy="img.img"></div>
                    </CarouselItem>
                </Carousel>
            </div>
            <div class="hot">
                <h3>热门图书</h3>
                <ul>
                    <router-link v-for="(book, index) in books" :to="{ name: 'detail', params: {id: book.bookId}}" :key="index" tag="li">
                        <img v-lazy='book.bookImg'>
                        <p>{{book.bookName}}</p>  
                    </router-link>
                </ul>
            </div>
          </template>
      </div>
  </div>
</template>
<script>
import {getAll} from '@/api'
export default {
    created () {
        // this.getHomeSliders()
        // this.getHomeHot()
        this.getData()
    },
    data () {
        return {
            isLoading: true,
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
        },
        // 同时发送两个请求
        async getData() {
            let [sliders, books] = await getAll()
            this.sliders = sliders
            this.books = books
            this.isLoading = false
        }
    },
}
</script>
<style lang="less">

</style>


