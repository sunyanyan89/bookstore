<template>
  <div class="header">
    <router-link to="/"><Icon type="ios-home-outline"></Icon>首页</router-link>
    <router-link to="/favor"><Icon type="ios-list-outline"></Icon>分类</router-link>
    <router-link to="/favor"><Icon type="ios-chatbubble-outline"></Icon>消息</router-link>
    <router-link to="/cart"><Icon type="ios-cart-outline"></Icon>购物车</router-link>
    <router-link to="/user"><Icon type="ios-person-outline"></Icon>我的</router-link>  
  </div>
</template>
<script>
export default {
  data () {
      return {
          menus: [
            {path: '/', name: ''},
            {path: '/cart', name: '购物车'},
            {path: '/favor', name: '收藏'},
            {path: '/user', name: '我的'},
        ]
      }
  }
}
</script>
<style lang="less" scoped>
.header {
    position: fixed;
    top: 92%;
    width: 100%;
    height: 4rem;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    border-top: 1px solid #ccc;
    background-color: #defedd;
    a {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #000;
        i {
            font-size: 1.5rem;
        } 
    }
    .router-link-exact-active {
        color: #dd3333;
    }
    
}
</style>

