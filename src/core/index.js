import Vue from 'vue';

import Application from './application/app.vue'

import axiBeast from './ads/axibeast.js'
axiBeast('bestia').then(res => console.log(res));

let app = new Vue({
  el: "#root",
  render(h) {
    return h(Application);
  }
})

import '../scss/main.scss';
