import axios from '../../plugins/axios.js';

export default {
  namespaced: true,
  state: {
    id: '',
    firstname: '',
    lastname: '',
    email: '',
    login: '',
    characters: []
  },
  mutations: {
    setId(state, payload) {
      state.id = payload;
    },
    setFirstname(state, payload) {
      state.firstname = payload;
    },
    setLastname(state, payload) {
      state.lastname = payload;
    },
    setEmail(state, payload) {
      state.email = payload;
    },
    setLogin(state, payload) {
      state.login = payload;
    },
    setCharacters(state, payload) {
      state.characters = payload;
    },
    addCharacter(state, payload) {
      state.characters.push(payload);
    }
  },
  getters: {

  },
  actions: {
    getUser: async function(context) {
      try {
        let response = await axios.get(`/users/me`, { headers: { Authorization: `Bearer ${context.rootState.accessToken}` } });
        context.commit('setFirstname', response.data.name.firstname);
        context.commit('setLastname', response.data.name.lastname);
        context.commit('setEmail', response.data.email);
        context.commit('setLogin', response.data.login);
        let characters = await axios.get('/character', { headers: { Authorization: `Bearer ${context.rootState.accessToken}` } });
        context.commit('setCharacters', characters.data);
      } catch (error) {
        console.log(error);
      }
    },
    updateUser: async function(context) {
      try {
        let response = await axios.patch(`/users/me`, {
            name: {
              firstname: context.state.firstname,
              lastname: context.state.lastname,
            }
          },
          { headers: { Authorization: `Bearer ${context.rootState.accessToken}` }
        });
      } catch (error) {
        console.log(error);
      }
    }
  }
}
