import axios from '../../plugins/axios.js';

export default {
  namespaced: true,
  state: {

  },
  mutations: {

  },
  getters: {
// ${context.rootState.user.id}
  },
  actions: {
    getAll: async function(context) {
      try {
        let response = await axios.get(`/character`, { headers: { Authorization: `Bearer ${context.rootState.accessToken}` } });
        console.log(response);
      } catch (error) {

      }
    },
    createCharacter: async function(context) {
      try {
        let response = await axios.post(`/character`, {
            user: context.rootState.user.id,
            nickname: "Тэд",
            name: {
              firstname: "Тэд",
              lastname: "Штормран",
            },
            gender: "мужской",
            age: 45,
            attributes: {
              strength: 25,
              agility: 16,
              dexterity: 16,
              intelligence: 16,
              vitality: 20
            },
            money: [ { title: "Шестеренки", amount: 100 } ],
            experience: [ { title: "Очки опыта", amount: 1 } ]
          },
          {
            headers: { Authorization: `Bearer ${context.rootState.accessToken}`
          }
        });
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    }
  }
}
