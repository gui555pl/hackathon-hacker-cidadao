import Vue from 'vue'
import Router from 'vue-router'
import Ciodes from './views/Ciodes.vue'
import NovaOcorrencia from './views/NovaOcorrencia.vue'
import Login from './views/Login.vue'
import Ocorrencias from './views/Ocorrencias'
import Ocorrencia from './views/Ocorrencia'
import Cheguei from './views/Cheguei.vue'
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
      path: '/ciods',
      name: 'ciods',
      component: Ciodes,
      meta:{
        show: true            
      }
    },
    {
      path: '/novaocorrencia',
      name: 'novaOcorrencia',
      component: NovaOcorrencia,
      meta:{
        show: true            
      }
    },
    {
      path: '/ocorrencias',
      name: 'ocorrencias',
      component: Ocorrencias,
      meta:{
        show: true            
      }
    },
    {
      path: '/ocorrencia',
      name: 'ocorrencia',
      component: Ocorrencia,
      meta:{
        show: true            
      }
    },
    {
      path: '/cheguei',
      name: 'cheguei',
      component: Cheguei,
      meta:{
        show: false            
      }
    }

  ]
})
