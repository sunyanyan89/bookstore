import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home.vue'
import Cart from '@/components/Cart.vue'
import Favor from '@/components/Favor.vue'
import User from '@/components/User.vue'

Vue.use(VueRouter)
const routes = [
  {path: '/', component: Home},
  {path: '/cart', component: Cart},
  {path: '/favor', component: Favor},
  {path: '/user', component: User},
  {path: '*', redirect: '/'},
]
export default new VueRouter({
   routes
})