<template>
  <div>
      <MyHead :isBack='true'>我的购物车</MyHead>
      <div class="content">
        {{title}}
      </div>
  </div>
</template>
<script>
export default {
  data () {
      return {
          title: 'this is cart'
      }
  },
}
</script>
<style>
.content {
    position: fixed;
    top: 40px;
}
</style>


