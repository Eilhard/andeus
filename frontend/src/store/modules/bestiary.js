import axios from '../../plugins/axios.js';

export default {
  namespaced: true,
  state: {
    bestias: [],
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
        let response = await axios.get(`/bestia`, { headers: { Authorization: `Bearer ${context.rootState.accessToken}` } });
        context.commit('setBestias', response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    },
    postNewBestia: async function(context, payload) {
      let formData = new FormData();
       formData.append('name', payload.name);
       formData.append('race', payload.race);
       formData.append('lvl', payload.lvl);
       formData.append('hp', payload.hp);
       formData.append('energy', payload.energy);
       formData.append('description', payload.description);
       formData.append('image', payload.image);
       formData.append('loot', JSON.stringify(payload.loot));
      try {
        let response = await axios.post(`/bestia`,
          formData,
          {
            headers: {
              'Authorization': `Bearer ${context.rootState.accessToken}`,
              'Content-Type': `multipart/form-data`
          }
        });
        context.commit('addBestia', response.data);
      } catch (error) {
        console.log(error);
      }
    },
    updateBestia: async function(context, payload) {
      let formData = new FormData();
       formData.append('name', payload.name);
       formData.append('race', payload.race);
       formData.append('lvl', payload.lvl);
       formData.append('hp', payload.hp);
       formData.append('energy', payload.energy);
       formData.append('description', payload.description);
       formData.append('image', payload.image);
       formData.append('loot', JSON.stringify(payload.loot));
      try {
        let response = await axios.patch(`/bestia/${payload.id}`,
          formData,
          {
            headers: {
              'Authorization': `Bearer ${context.rootState.accessToken}`,
              'Content-Type': `multipart/form-data`
          }
        });
        context.commit('updateBestia', response.data);
      } catch (error) {
        console.log(error);
      }
    },
    deleteBestia: async function(context, id) {
      try {
        let response = await axios.delete(`/bestia/${id}`,
          { headers: { Authorization: `Bearer ${context.rootState.accessToken}` }
        });
        let bestias = context.state.bestias.filter(item => item._id != id);
        context.commit('setBestias', bestias);
      } catch (error) {
        console.log(error);
      }
    },
  }
}
