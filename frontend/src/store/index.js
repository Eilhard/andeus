import Vue from 'vue';
import Vuex from 'vuex';
import user from './modules/user.js';
import character from './modules/character.js';
import article from './modules/article.js';
import bestiary from './modules/bestiary.js';
import jwt from 'jsonwebtoken';
import axios from '../plugins/axios.js';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    user,
    character,
    article,
    bestiary
  },
  state: {
    api: 'http://localhost:18000/',
    auth: false,
    isMaster: false,
    accessToken: '',
    accessExpiration: 0
  },
  mutations: {
    setAuth(state, payload) {
      state.auth = payload;
    },
    setIsMaster(state, payload) {
      state.isMaster = payload;
    },
    setAccessToken(state, payload) {
      state.accessToken = payload;
    },
    setAccessExpiration(state, payload) {
      state.accessExpiration = payload;
    }
  },
  getters: {

  },
  actions: {
    handleTokens(context, payload) {
      context.commit('setAccessToken', payload.accessToken);
      localStorage.setItem('refreshToken', payload.refreshToken);
      let decodedToken = jwt.decode(payload.accessToken);
      context.commit('setAccessExpiration', decodedToken.exp);
      context.commit('user/setId', decodedToken.id);
      context.commit('setIsMaster', decodedToken.isMaster);
    },
    checkAccessToken(context) {
      let exp = context.state.accessExpiration - Date.now() / 1000;
      if (exp > 10) return;
      context.dispatch('refresh');
    },
    refresh: async function(context, payload) {
      let refreshToken = localStorage.getItem('refreshToken');
      if (!refreshToken) {
        context.dispatch('logout');
        return;
      }
      try {
        let response = await axios.post('/auth/refresh', {
          refreshToken: refreshToken
        });
        context.dispatch('handleTokens', {
          accessToken: response.data.accessToken,
          refreshToken: response.data.refreshToken
        });
        context.dispatch('checkAuth');
      } catch (err) {
        if (err.response.status == 400) {
          context.dispatch('logout');
        }
      }
    },
    checkAuth(context) {
      let exp = context.state.accessExpiration - Date.now() / 1000;
      if (context.state.accessToken && exp > 10) {
        context.commit('setAuth', true);
        context.dispatch('user/getUser');
      }
    },
    logout(context) {
      context.commit('setAuth', false);
      context.commit('setAccessToken', '');
      context.commit('setAccessExpiration', 0);
      localStorage.removeItem('refreshToken');
    }
  }
});
