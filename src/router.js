import Vue from 'vue'
import Router from 'vue-router'
import Ciodes from './views/Ciodes.vue'
import NovaOcorrencia from './views/NovaOcorrencia.vue'
import Login from './views/Login.vue'
import Ocorrencias from './views/Ocorrencias'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login,
      meta:{
        show: false            
    }
    },
    {
      path: '/ciodes',
      name: 'ciodes',
      component: Ciodes
    },
    {
      path: '/novaocorrencia',
      name: 'novaOcorrencia',
      component: NovaOcorrencia
    },
    {
      path: '/ocorrencias',
      name: 'ocorrencias',
      component: Ocorrencias
    }

  ]
})
