import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'

Vue.use(Vuex)
const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})
function initialState () {
  return {
    type: '',
    selectedOcorrencia: '',
    tipoUsuario: null,
    cord: {}
  }
  

}
export default new Vuex.Store({
  state: initialState,
  mutations: {
    setType (state, payload) {
      state.tipoUsuario = payload
      console.log(state.tipoUsuario)
    },
    setCord(state, payload){
      state.cord = payload
    },
    setOcorrencia (state, payload) {
      state.selectedOcorrencia = payload
    },
    reset (state) { //por algum motivo, sempre que chamado volta para login
      const s = initialState()
      Object.keys(s).forEach(key => {
        state[key] = s[key]
      })
    }
  },
  actions: {
    

  },
  getters: {
    getUser (state) {
      return state.tipoUsuario
    },
    getCord (state) {
      return state.cord
    }
  },
  plugins: [vuexLocal.plugin]

})
