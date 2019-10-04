import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import '@babel/polyfill'
import FieryVue from 'fiery-vue'
import firebase from 'firebase'
Vue.config.productionTip = false

Vue.use(FieryVue)
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
  created(){
    firebase.initializeApp({
      apiKey: "AIzaSyB2___8BHG2HQaMdusMb-TnyR62vJ-jT1U",
      authDomain: "hacker-cidadao-8b2e3.firebaseapp.com",
      databaseURL: "https://hacker-cidadao-8b2e3.firebaseio.com",
      projectId: "hacker-cidadao-8b2e3",
      storageBucket: "",
      messagingSenderId: "188750006411",
      appId: "1:188750006411:web:5ed3e673b7965a09d86c8e",
      measurementId: "G-S4569HKSCX"
   
    })
  }
}).$mount('#app')
