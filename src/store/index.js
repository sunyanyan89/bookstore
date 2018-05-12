import Vue from 'vue'
import Vuex from 'vuex'
import logger from 'vuex/dist/logger'
import mutations from './mutations';
Vue.use(Vuex)

// 唯一的容器
const state = {
  count: 1,
}
const store = new Vuex.Store({
  state,
  mutations,
  plugins: [logger()],
  strict: true,
})
export default store