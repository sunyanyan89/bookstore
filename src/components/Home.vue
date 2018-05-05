<template>
  <div>
      <MyHead :isBack='false'>首页</MyHead>
      <div class="content">
          <div class="mySwiper" >
              <Carousel v-model="value" loop autoplay>
                  <CarouselItem v-for="img in sliders" :key="img.id">
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
import {getSliders} from '@/api'
export default {
    async created () {
        // 给data对象起别名，对象中的属性名字必须和得到的结果名字一致
        let {data:sliders} = await getSliders()
        this.sliders = sliders // 将获取到的数据放到sliders中
    },
    data () {
        return {
            value: 0,
            value1:[25,80],
            sliders: '',
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


