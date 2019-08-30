import Vue from 'vue'
import Router from 'vue-router'

import about from './views/about.vue'
import dashboard from './views/dashboard.vue'
import accounting from './views/accounting.vue'


Vue.use(Router)


let routes = [
  {
    path: '/',
    name: 'dashboard',
    component: dashboard
  },
  {
    path: '/about',
    name: 'about',
    component: about
  },
  {
    path: '/accounting',
    name: 'accounting',
    component: accounting
  },
]

export default new Router({
  routes
})
