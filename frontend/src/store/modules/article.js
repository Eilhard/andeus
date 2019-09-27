import axios from '../../plugins/axios.js';

export default {
  namespaced: true,
  state: {
    articles: []
  },
  mutations: {
    setArticles(state, payload) {
      state.articles = payload;
    },
  },
  getters: {

  },
  actions: {
    getArticles: async function(context) {
      try {
        let response = await axios.get(`/article`, { headers: { Authorization: `Bearer ${context.rootState.accessToken}` } });
        console.log(response);
        context.commit('setArticles', response.data);
      } catch (error) {
        console.log(error);
      }
    }
  }
}
