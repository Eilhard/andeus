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
        context.commit('setArticles', response.data);
      } catch (error) {
        console.log(error);
      }
    },
    postNewArticle: async function(context, payload) {
      const formData = new FormData();
       formData.append('title', payload.title);
       formData.append('body', payload.body);
       formData.append('image', payload.image);
      try {
        let response = await axios.post(`/article`,
          formData,
          {
            headers: {
              'Authorization': `Bearer ${context.rootState.accessToken}`,
              'Content-Type': `multipart/form-data`
          }
        });
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    }
  }
}
