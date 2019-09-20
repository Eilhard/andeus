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
    login: async function(context, payload) {
      let response = await axios.post('auth/login', {
        login: payload.login,
        password: payload.password
      });
      let accessToken = response.data.accessToken;
      let refreshToken = response.data.refreshToken;
      context.commit('setAccessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);
      let decodedToken = jwt.decode(accessToken);
      console.log(decodedToken);
      context.commit('setAccessExpiration', decodedToken.exp);
    },
    refresh: async function(context, payload) {
      console.log(accessTimeLeft);
    }
  }
});
