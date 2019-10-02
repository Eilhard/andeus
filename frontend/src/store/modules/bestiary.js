export default {
  namespaced: true,
  state: {
    bestias: [
      { name: "Pixi", race: "Fairy", lvl: 10 },
      { name: "Надоеда", race: "Фея", lvl: 10, description: "Это фея" }
    ],
    search: ''
  },
  mutations: {
    setBestias(state, payload) {
      state.bestias = payload;
    },
    updateBestia(state, payload) {
      state.bestias = state.bestias.map(item => {
        if (item._id == payload._id) {
          return payload;
        } else {
          return item;
        }
      });
    },
    addBestia(state, payload) {
      state.bestias.push(payload);
    },
    setSearch(state, payload) {
      state.search = payload;
    }
  },
  getters: {
    displayedBestias(state) {
      if (!state.search) return state.bestias;
      return state.bestias.filter(item => {
        return item.name.slice(0, state.search.length).toLowerCase() == state.search.toLowerCase();
      });
    }
  },
  actions: {
    getBestias: async function(context) {
      try {
        let response = await axios.get(`/article`, { headers: { Authorization: `Bearer ${context.rootState.accessToken}` } });
        context.commit('setArticles', response.data);
      } catch (error) {
        console.log(error);
      }
    },
    postNewBestia: async function(context, payload) {
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
    deleteBestia: async function(context, id) {
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
