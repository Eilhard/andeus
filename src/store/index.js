import Vue from 'vue';
import Vuex from 'vuex';
import bestiary from './modules/bestiary.js'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
   bestiary
 },
  state: {
    msg: "Hello frome storage"
  }
});
