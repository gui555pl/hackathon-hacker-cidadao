import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    type: ''
  },
  mutations: {
    setType (state, payload) {
      state.type = payload
    }
  },
  actions: {

  }
})
