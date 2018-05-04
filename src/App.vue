<template>
  <div id="app">
    <router-view/>
    <Tab/>
  </div>
</template>

<script>
import axios from 'axios'
import Tab from '@/base/Tab.vue'
export default {
  name: 'App',
  components: {Tab},
  created () {
    axios.get('/static/books.json').then(res=>{
      console.log(res.data)
    })
  }
}
</script>

<style lang="less">
#app {
  font-size: 16px;
  width: 100vw;
  height: 100vh;
  .content {
    position: fixed;
    width: 100%;
    top: 40px;
    bottom: 60px;
    overflow-y: scroll;
  }
}
</style>
