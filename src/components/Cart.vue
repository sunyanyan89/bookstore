<template>
  <div>
      <MyHead :isBack='true'>列表</MyHead>
      <div class="content">
        {{title}}
      </div>
  </div>
</template>
<script>
import MyHead from '../base/MyHead.vue'
export default {
  data () {
      return {
          title: 'this is cart'
      }
  },
  components: { MyHead }
}
</script>
<style>
.content {
    position: fixed;
    top: 40px;
}
</style>


