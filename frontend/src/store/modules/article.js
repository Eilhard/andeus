import axios from '../../plugins/axios.js';

export default {
  namespaced: true,
  state: {
    test: [ 2, 1, 3 ],
    articles: [],
    search: ''
  },
  mutations: {
    setArticles(state, payload) {
      state.articles = payload;
    },
    updateArticle(state, payload) {
      state.articles = state.articles.map(item => {
        if (item._id == payload._id) {
          return payload;
        } else {
          return item;
        }
      });
    },
    addArticle(state, payload) {
      state.articles.push(payload);
    },
    setSearch(state, payload) {
      state.search = payload;
    }
  },
  getters: {
    displayedArticles(state) {
      if (!state.search) return state.articles;
      return state.articles.filter(item => {
        return item.title.slice(0, state.search.length).toLowerCase() == state.search.toLowerCase()
      })
    },
    lastArticles(state) {
      return state.articles.sort((a, b) => {
        if (parseInt(a.date) < parseInt(b.date)) {
          return 1;
        }
        if (parseInt(a.date) > parseInt(b.date) ) {
          return -1;
        }
        return 0;
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
      let formData = new FormData();
       formData.append('title', payload.title);
       formData.append('body', payload.body);
       formData.append('image', payload.image);
       formData.append('sectionImages', payload.sectionImages);
       formData.append('sections', JSON.stringify(payload.sections));
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
    updateArticle: async function(context, payload) {
      let formData = new FormData();
       formData.append('title', payload.title);
       formData.append('body', payload.body);
       formData.append('image', payload.image);
       formData.append('sectionImages', payload.sectionImages);
       formData.append('sections', JSON.stringify(payload.sections));
      try {
        let response = await axios.patch(`/article/${payload.id}`,
          formData,
          {
            headers: {
              'Authorization': `Bearer ${context.rootState.accessToken}`,
              'Content-Type': `multipart/form-data`
          }
        });
        context.commit('updateArticle', response.data);
      } catch (error) {
        console.log(error);
      }
    },
    deleteArticle: async function(context, id) {
      try {
        let response = await axios.delete(`/article/${id}`,
          { headers: { Authorization: `Bearer ${context.rootState.accessToken}` }
        });
        let articles = context.state.articles.filter(item => item._id != id);
        context.commit('setArticles', articles);
      } catch (error) {
        console.log(error);
      }
    },
  }
}
