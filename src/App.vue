<template>
  <div id="app">
    <router-view/>
    <Tab/>
  </div>
</template>

<script>
import Tab from '@/base/Tab.vue'

export default {
  name: 'App',
  components: { Tab },
  created () {
  }
}
</script>

<style lang="less">
#app {
  color: #000;
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
