<template>
  <div>
      <MyHead :isBack='false'>首页</MyHead>
      <div class="content">
          <div class="mySwiper" >
              <Carousel v-model="value" loop autoplay>
                  <CarouselItem v-for="img in imgs" :key="img.id">
                    <div class="mm"><img :src="img.img" alt=""></div>
                  </CarouselItem>
              </Carousel>
              <div class="hot">
                  <ul>
                      <li>

                      </li>
                  </ul>
              </div>
          </div>
      </div>
  </div>
</template>
<script>
import MyHead from '@/base/MyHead.vue'
import myimgs from '@/api/img.js'
export default {
    mounted () {
        // let books = 
    },
    data () {
        return {
            value: 0,
            value1:[25,80],
            imgs: myimgs,
            title: 'this is home'
        }
    },
    components: { MyHead }
}
</script>
<style lang="less">
.mm {
    height: 180px;
    img {
        width: 100%;
        height:100%;
    }
}
</style>


