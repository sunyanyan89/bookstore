// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iview from 'iview'
import 'iview/dist/styles/iview.css'
import './style/style.less'
import Highcharts from 'highcharts/highstock'

Vue.use(Highcharts)
Vue.use(iview)
Vue.config.productionTip = false

import MyHead from '@/base/MyHead'
Vue.component('MyHead', MyHead) // 全局组件 每个页面都有 但是接收的参数不同

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
})
