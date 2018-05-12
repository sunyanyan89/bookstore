// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import iview from 'iview'
// iview UI组件库
import 'iview/dist/styles/iview.css'
Vue.use(iview)
import './style/style.less'
// 图片懒加载
import VueLazyLoad from 'vue-lazyload'
Vue.use(VueLazyLoad, {
  preLoad: 1.3,
  error: '/static/default.gif',
  loading: '/static/loading.gif',
  attempt: 1
})

Vue.config.productionTip = false

import MyHead from '@/base/MyHead'
Vue.component('MyHead', MyHead) // 全局组件 每个页面都有 但是接收的参数不同

// 全局钩子 每次进入路由前都会执行此方法 可以进行拦截
router.beforeEach(function(to, from, next) {
  document.title = to.meta.title
  next()
})

new Vue({
  el: '#app',
  router,
  store, // 注册store到实例上，这样所有组件都可以访问this.$store
  components: { App },
  template: '<App/>',
})
