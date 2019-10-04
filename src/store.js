import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    type: '',
    selectedOcorrencia: ''
  },
  mutations: {
    setType (state, payload) {
      state.type = payload
    },
    setOcorrencia (state, payload) {
      state.selectedOcorrencia = payload
    }
  },
  actions: {

  }
})
