import axios from '../../plugins/axios.js';

export default {
  namespaced: true,
  state: {
    party: '',
    nickname: '',
    firstname: '',
    lastname: '',
    gender: '',
    age: 0,
    strength: 0,
    agility: 0,
    dexterity: 0,
    intelligence: 0,
    vitality: 0,
    achievements: [],
    money: [],
    experience: [],
  },
  mutations: {
    setParty(state, payload) {
      state.party = payload;
    },
    setNickname(state, payload) {
      state.nickname = payload;
    },
    setFirstname(state, payload) {
      state.firstname = payload;
    },
    setLastname(state, payload) {
      state.lastname = payload;
    },
    setAge(state, payload) {
      state.age = payload;
    },
    setStrength(state, payload) {
      state.strength = payload;
    },
    setAgility(state, payload) {
      state.agility = payload;
    },
    setDexterity(state, payload) {
      state.dexterity = payload;
    },
    setIntelligence(state, payload) {
      state.intelligence = payload;
    },
    setVitality(state, payload) {
      state.vitality = payload;
    },
    setAchievements(state, payload) {
      state.achievements = payload;
    },
    addAchievements(state, payload) {
      state.achievements.push(payload);
    },
    setMoney(state, payload) {
      state.money = payload;
    },
    addMoney(state, payload) {
      state.money.push(payload);
    },
    setExperience(state, payload) {
      state.experience = payload;
    },
    addExperience(state, payload) {
      state.experience.push(payload);
    }
  },
  getters: {
    initiative(state) {
      return (state.agility + state.dexterity) / 4;
    },
    accuracy(state) {
      return state.dexterity;
    },
    evasion(state) {
      return state.agility;
    },
    defense(state) {
      return (state.vitality - 10) / 2;
    },
    magicDefense(state) {
      return (state.intelligence - 10) / 2;
    },
    perception(state) {
      return state.intelligence;
    },
    willpower(state) {
      return state.intelligence;
    },
    healthPoints(state) {
      return state.strength * 2;
    },
    energyPoints(state) {
      return state.vitality;
    },
  },
  actions: {
    getAll: async function(context) {
      /* Admin command */
      try {
        let response = await axios.get(`/character`, { headers: { Authorization: `Bearer ${context.rootState.accessToken}` } });
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    },
    updateCharacter: async function(context) {
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
