import Vue from 'vue'
import VueRouter from 'vue-router'

import routes from './router'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes
})



new Vue({
  router,
}).$mount('#root')

