import axios from '../../plugins/axios.js';

export default {
  namespaced: true,
  state: {
    id: '',
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
    setId(state, payload) {
      state.id = payload;
    },
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
    setGender(state, payload) {
      state.gender = payload;
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
    setCharacter(context, payload) {
      context.commit('setId', payload._id);
      context.commit('setParty', payload.party);
      context.commit('setNickname', payload.nickname);
      context.commit('setFirstname', payload.name.firstname);
      context.commit('setLastname', payload.name.lastname);
      context.commit('setGender', payload.gender);
      context.commit('setAge', payload.age);
      context.commit('setStrength', payload.attributes.strength);
      context.commit('setAgility', payload.attributes.agility);
      context.commit('setDexterity', payload.attributes.dexterity);
      context.commit('setIntelligence', payload.attributes.intelligence);
      context.commit('setVitality', payload.attributes.vitality);
      context.commit('setAchievements', payload.achievements);
      context.commit('setMoney', payload.money);
      context.commit('setExperience', payload.experience);
    },
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
        let response = await axios.patch(`/character/${context.state.id}`, {
            party: context.state.party,
            nickname: context.state.nickname,
            name: {
              firstname: context.state.firstname,
              lastname: context.state.lastname,
            },
            gender: context.state.gender,
            age: context.state.age,
            attributes: {
              strength: context.state.strength,
              agility: context.state.agility,
              dexterity: context.state.dexterity,
              intelligence: context.state.intelligence,
              vitality: context.state.vitality
            },
            money: context.state.money,
            experience: context.state.experience
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
