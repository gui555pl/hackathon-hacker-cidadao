import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    type: '',
    selectedOcorrencia: '',
    tipoUsuario: ''

  },
  mutations: {
    setType (state, payload) {
      state.tipoUsuario = payload
    },
    setOcorrencia (state, payload) {
      state.selectedOcorrencia = payload
    }
  },
  actions: {

  }
})
