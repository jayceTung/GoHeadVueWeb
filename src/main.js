// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import axios from 'axios';
import ElementUI from 'element-ui';
import Vuex from 'vuex';
import HelloWorld from './components/HelloWorld.vue';
import Head from './components/Head.vue';
import Seller from './components/food/Seller.vue';

import './common/stylus/index.styl';
import 'element-ui/lib/theme-chalk/index.css';
Vue.config.productionTip = false

Vue.use(VueRouter);
Vue.use(ElementUI);
Vue.use(VueResource);
Vue.use(Vuex);
Vue.config.debug = true;

Vue.prototype.$ajax = axios

const routes = [
  {
    path: '/',
    redirect: '/head',
    name: '',
    hidden: true
  }, {
    path: '/head',
    component: Head,
    name: 'Head',
    hidden: true
  }, {
    path: '/seller',
    component: Seller,
    name: 'Seller',
    hidden: true
  }
];
const router = new VueRouter({
  routes,
  linkActiveClass: 'active'
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});
