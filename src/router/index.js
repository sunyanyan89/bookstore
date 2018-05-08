import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home.vue'
import List from '@/components/List.vue'
import ListAdd from '@/components/ListAdd.vue'
import Detail from '@/components/Detail.vue'
import Mes from '@/components/Mes.vue'
import Cart from '@/components/Cart.vue'
import User from '@/components/User.vue'

Vue.use(VueRouter)
const routes = [
  { path: '/', component: Home, meta:{keepAlive: true} },
  { path: '/list', name: 'list', component: List },
  { path: '/list/add', component: ListAdd },
  { path: '/detail/:id', name: 'detail', component: Detail },
  { path: '/detailEdit/:id', name: 'detailEdit', component: Detail },
  { path: '/mes', component: Mes },
  { path: '/cart', component: Cart },
  { path: '/user', component: User },
  { path: '*', redirect: '/'},
]
export default new VueRouter({
   routes
})