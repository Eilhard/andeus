import axios from '../../plugins/axios.js';

export default {
  namespaced: true,
  state: {
    articles: [],
    search: ''
  },
  mutations: {
    setArticles(state, payload) {
      state.articles = payload;
    },
    addArticle(state, payload) {
      state.articles.push(payload);
    },
    setSearch(state, payload) {
      state.search = payload;
    },
  },
  getters: {
    displayedArticles(state) {
      if (!state.search) return state.articles;
      return state.articles.filter(item => {
        return item.title.slice(0, state.search.length).toLowerCase() == state.search.toLowerCase()
      })
    }
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
        context.commit('addArticle', response.data);
      } catch (error) {
        console.log(error);
      }
    },
    deleteArticle: async function(context, id) {
      try {
        let response = await axios.delete(`/article/${id}`,
          { headers: { Authorization: `Bearer ${context.rootState.accessToken}` }
        });
        console.log(context.state.articles);
        let articles = context.state.articles.filter(item => item._id != id);
        context.commit('setArticles', articles);
        console.log(context.state.articles);
      } catch (error) {
        console.log(error);
      }
    },
  }
}
