<template lang="html">
  <div class="">
    <div class="page-nav">
      <div class="spacer"></div>
      <button
        v-on:click="switchEditor"
        v-show="!isEditorMode"
        class="text-btn text-btn--secondary"
      >
        <i class="fas fa-pencil-alt"></i>
      </button>
      <button
        v-on:click="updateCharacter"
        v-show="isEditorMode"
        class="text-btn text-btn--secondary"
      >
        <i class="fas fa-save"></i>
      </button>
    </div>
    <div class="p--1">
      <form class="input-container input-container--clear p--2">
          <label
            v-for="(item, index) in profile"
            v-bind:key="`secondary_${index}`"
            class="input-group mb--1"
          >
            <span class="input-group__title input-group__title--character">
              {{item.title}}
            </span>
            <input
              class="input-group__text-input"
              v-bind:type="item.type"
              v-bind:disabled="!isEditorMode"
              v-model="item.state"
            >
          </label>
      </form>
      <hr class="text-hr m mx--2 mb--1">
      <form class="input-container input-container--clear p--2">
          <label
            v-for="(item, index) in statsBasic"
            v-bind:key="`secondary_${index}`"
            class="input-group mb--1"
          >
            <span class="input-group__title input-group__title--character">
              {{item.title}}
            </span>
            <input
              class="input-group__text-input"
              v-bind:type="item.type"
              v-bind:disabled="!isEditorMode"
              v-model="item.state"
            >
          </label>
      </form>
    </div>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        isEditorMode: false,
        profile: [
          {
            id: 'nickname',
            title: "Прозвище",
            type: "text",
            state: ''
          },
          {
            id: 'firstname',
            title: "Имя",
            type: "text",
            state: ''
          },
          {
            id: 'lastname',
            title: "Фамилия",
            type: "text",
            state: ''
          },
          {
            id: 'gender',
            title: "Пол",
            type: "text",
            state: ''
          },
          {
            id: 'age',
            title: "Возраст",
            type: "text",
            state: ''
          }
        ],
        statsBasic: [
          {
            id: 'strength',
            title: "Сила",
            type: "number",
            state: ''
          },
          {
            id: 'agility',
            title: "Проворство",
            type: "number",
            state: ''
          },
          {
            id: 'dexterity',
            title: "Ловкость",
            type: "number",
            state: ''
          },
          {
            id: 'intelligence',
            title: "Интеллект",
            type: "number",
            state: ''
          },
          {
            id: 'vitality',
            title: "Выносливость",
            type: "number",
            state: ''
          }
        ],
      }
    },
    computed: {
      nickname() {
        return this.$store.state.character.nickname;
      },
      firstname() {
        return this.$store.state.character.firstname;
      },
      lastname() {
        return this.$store.state.character.lastname;
      },
      gender() {
        return this.$store.state.character.gender;
      },
      age() {
        return this.$store.state.character.age;
      },
      strength() {
        return this.$store.state.character.strength;
      },
      agility() {
        return this.$store.state.character.agility;
      },
      dexterity() {
        return this.$store.state.character.dexterity;
      },
      intelligence() {
        return this.$store.state.character.intelligence;
      },
      vitality() {
        return this.$store.state.character.vitality;
      },
    },
    watch: {
      nickname() {
        this.setProfileStates();
      },
      firstname() {
        this.setProfileStates();
      },
      lastname() {
        this.setProfileStates();
      },
      gender() {
        this.setProfileStates();
      },
      age() {
        this.setProfileStates();
      },
      strength() {
        this.setStatsBasicStates();
      },
      agility() {
        this.setStatsBasicStates();
      },
      dexterity() {
        this.setStatsBasicStates();
      },
      intelligence() {
        this.setStatsBasicStates();
      },
      vitality() {
        this.setStatsBasicStates();
      }
    },
    methods: {
      switchEditor() {
        this.isEditorMode = !this.isEditorMode;
      },
      updateCharacter() {
        let nickname, firstname, lastname, gender, age, strength, agility, dexterity, intelligence, vitality;
        this.profile.forEach((item, index) => {
          if (item.id == 'nickname') nickname =  item.state;
          if (item.id == 'firstname') firstname =  item.state;
          if (item.id == 'lastname') lastname =  item.state;
          if (item.id == 'gender') gender =  item.state;
          if (item.id == 'age') age = item.state;
        });
        this.statsBasic.forEach((item, index) => {
          if (item.id == 'strength') strength = item.state;
          if (item.id == 'agility') agility = item.state;
          if (item.id == 'dexterity') dexterity = item.state;
          if (item.id == 'intelligence') intelligence = item.state;
          if (item.id == 'vitality') vitality = item.state;
        });
        this.$store.commit('character/setNickname', nickname);
        this.$store.commit('character/setFirstname', firstname);
        this.$store.commit('character/setLastname', lastname);
        this.$store.commit('character/setGender', gender);
        this.$store.commit('character/setAge', age);
        this.$store.commit('character/setStrength', strength);
        this.$store.commit('character/setAgility', agility);
        this.$store.commit('character/setDexterity', dexterity);
        this.$store.commit('character/setIntelligence', intelligence);
        this.$store.commit('character/setVitality', vitality);
        this.$store.dispatch('character/updateCharacter');
        this.switchEditor();
      },
      setProfileStates() {
        this.profile.forEach((item, index) => {
          if (item.id == 'nickname') {
            this.$set(item, 'state', this.nickname);
          }
          if (item.id == 'firstname') {
            this.$set(item, 'state', this.firstname);
          }
          if (item.id == 'lastname') {
            this.$set(item, 'state', this.lastname);
          }
          if (item.id == 'gender') {
            this.$set(item, 'state', this.gender);
          }
          if (item.id == 'age') {
            this.$set(item, 'state', this.age);
          }
        });
      },
      setStatsBasicStates() {
        this.statsBasic.forEach((item, index) => {
          if (item.id == 'strength') {
            this.$set(item, 'state', this.strength);
          }
          if (item.id == 'agility') {
            this.$set(item, 'state', this.agility);
          }
          if (item.id == 'dexterity') {
            this.$set(item, 'state', this.dexterity);
          }
          if (item.id == 'intelligence') {
            this.$set(item, 'state', this.intelligence);
          }
          if (item.id == 'vitality') {
            this.$set(item, 'state', this.vitality);
          }
        });
      }
    },
    mounted() {

    }
  }
</script>

<style lang="scss" scoped>
</style>
