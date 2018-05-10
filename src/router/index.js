import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/pages/Home.vue'
import List from '@/pages/List.vue'
import ListAdd from '@/pages/ListAdd.vue'
import Detail from '@/pages/Detail.vue'
import Mes from '@/pages/Mes.vue'
import Cart from '@/pages/Cart.vue'
import User from '@/pages/User.vue'

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
   mode: 'history',
   routes
})