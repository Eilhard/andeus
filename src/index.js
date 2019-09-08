import './scss/main.scss';

import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';

import router from './router.js';
import store from './store/index.js';
import Application from './Application/Application.vue';
import axios from './plugins/axios.js';

axios('bestia').then(res => console.log(res));

Vue.use(Vuex);
Vue.use(VueRouter);

let app = new Vue({
  el: "#root",
  router,
  store,
  render(h) {
    return h(Application);
  }
});
