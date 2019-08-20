import Vue from 'vue';

import App from './components/app.vue'

import axiBeast from './ads/axibeast.js'
axiBeast('bestia').then(res => console.log(res));

let app = new Vue({
  el: "#root",
  render(h) {
    return h(App);
  }
})

import '../scss/main.scss';
