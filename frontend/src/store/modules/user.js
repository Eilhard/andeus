import axios from '../../plugins/axios.js';

export default {
  namespaced: true,
  state: {
    id: '',
    firstname: '',
    characters: []
  },
  mutations: {
    setId(state, payload) {
      state.id = payload;
    }
  },
  getters: {

  },
  actions: {
    getUser: async function(context) {
      try {
        let response = await axios.get(`/users/${context.state.id}`, { headers: { Authorization: `Bearer ${context.rootState.accessToken}` } });
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    }
  }
}
