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
  { path: '/', component: Home, 
    meta: { keepAlive: true,
    title: '首页'
  }},
  { path: '/list', name: 'list', component: List,
    meta: { title: '图书列表' }
  },
  { path: '/list/add', component: ListAdd, 
    meta: { title: '添加图书' }
  },
  { path: '/detail/:id', name: 'detail', component: Detail, 
    meta: { title: '图书详情' }
  },
  { path: '/detailEdit/:id', name: 'detailEdit', component: Detail, 
    meta: { title: '编辑图书' }
  },
  { path: '/mes', component: Mes, 
    meta: { title: '我的消息' }
  },
  { path: '/cart', component: Cart, 
    meta: { title: '我的购物车' }
  },
  { path: '/user', component: User, 
    meta: { title: '个人中心' }
  },
  { path: '*', redirect: '/'},
]
export default new VueRouter({
   mode: 'history',
   routes
})