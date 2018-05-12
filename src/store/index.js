import Vue from 'vue'
import Vuex from 'vuex'
import logger from 'vuex/dist/logger'
Vue.use(Vuex)

// 唯一的容器
const state = {
  count: 1,
}
const mutations = {
  add (state, step) {
    state.count += step
  },
  minus (state, step) {
    state.count -= step
  },
}
const store = new Vuex.Store({
  state,
  mutations,
  plugins: [logger()],
  strict: true,
})
export default store