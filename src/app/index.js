import '../scss/main.scss';
import Vue from 'vue';

import App from './components/app.vue'



let app = new Vue({
  el: "#root",
  render(h) {
    return h(App);
  }
})
