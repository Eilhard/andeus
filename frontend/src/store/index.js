import Vue from 'vue';
import Vuex from 'vuex';
import article from './modules/article.js';
import bestiary from './modules/bestiary.js';
import jwt from 'jsonwebtoken';
import axios from '../plugins/axios.js';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    article,
    bestiary
  },
  state: {
    accessToken: '',
    accessExpiration: 0
  },
  mutations: {
    setAccessToken(state, payload) {
      state.accessToken = payload;
    },
    setAccessExpiration(state, payload) {
      state.accessExpiration = payload;
    }
  },
  getters: {
    accessTimeLeft(state) {
      return Date.now() - state.accessExpiration;
    }
  },
  actions: {
    handleTokens(context, payload) {
      context.commit('setAccessToken', payload.accessToken);
      localStorage.setItem('refreshToken', payload.refreshToken);
      let decodedToken = jwt.decode(payload.accessToken);
      console.log(decodedToken);
      context.commit('setAccessExpiration', decodedToken.exp);
    },
    refresh: async function(context, payload) {
      console.log(accessTimeLeft);
    },
  }
});
