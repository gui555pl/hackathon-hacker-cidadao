import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Ciodes from './views/Ciodes.vue'
import Login from './views/Login.vue'

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
    }
  ]
})
