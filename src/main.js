import Vue from 'vue'
import VueRouter from 'vue-router'


import './plugins/vuetify'
import './plugins/axios'
import './plugins/session'

import getIp from './components/modules/direccion.js';

Vue.use(VueRouter)
Vue.config.productionTip = false

/*
------------------------------------
  Componentes
------------------------------------
*/
import master from './App.vue'

import login from './components/login/cuerpo.vue'
import registro from './components/registro/registro.vue'

/*
------------------------------------
  Las rutas
------------------------------------
*/

const routes = [{
  name: 'master',
  path: '/',
  component: master,
  props: {
    ip: getIp()
  },
  children: [{
    name: 'login',
    path: 'login',
    component: login,
    props: {
      ip: getIp()
    },
  }, {
    name: 'registro',
    path: 'registro',
    component: registro,
    props: {
      ip: getIp()
    },
  }]
}];
/*
------------------------------------
  Las rutas
------------------------------------
*/
const router = new VueRouter({
  mode: 'history',
  routes: routes
});


new Vue(Vue.util.extend({
  router
}, master)).$mount('#app');