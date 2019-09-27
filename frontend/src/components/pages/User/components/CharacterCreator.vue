<template lang="html">
  <form v-on:submit.prevent class="input-container input-container--clear-block">
    <div class="tabs-menu">
      <button
        v-for="tab in tabs"
        v-bind:key="`character-tab_${tab.title}`"
        v-on:click="tab.action(tab)"
        class="tabs-menu__tab"
        v-bind:class="{ 'tabs-menu__tab--active': tab.isPressed }"
      >
        {{tab.title}}
      </button>
    </div>

    <div
      v-show="status.isShown"
      class="login-status"
      v-bind:class="{
        'login-status--success': (status.type == 'success') ? true : false,
        'login-status--error': (status.type == 'error') ? true : false
      }"
    >{{status.message}}</div>

    <label
      v-for="item in inputs"
      v-show="item.isShown"
      class="input-group m--1"
    >
      <span class="input-group__title input-group__title--character">{{item.title}}</span>
      <input
        class="input-group__text-input"
        v-bind:type="item.type"
        v-model="item.state"
      >
    </label>

    <button
      v-for="btn in submit"
      v-show="btn.isShown"
      v-on:click="btn.action"
      class="input-btn input-btn--block m--1 "
    >
      {{btn.title}}
    </button>
  </form>
</template>

<script>
  import axios from '../../../../plugins/axios.js';

  export default {
    data() {
      return {
        mode: 'personal',
        tabs: [
          {
            model: 'personal',
            title: "Профиль",
            isPressed: true,
            action: this.switchTabs
          },
          {
            model: 'attributes',
            title: "Атрибуты",
            isPressed: false,
            action: this.switchTabs
          }
        ],
        inputs: [
          {
            model: 'personal',
            id: 'nickname',
            title: "Прозвище",
            type: "text",
            isShown: true,
            state: 'Сонный Тэд'
          },
          {
            model: 'personal',
            id: 'firstname',
            title: "Имя",
            type: "text",
            isShown: true,
            state: 'Тэд'
          },
          {
            model: 'personal',
            id: 'lastname',
            title: "Фамилия",
            type: "text",
            isShown: true,
            state: 'Гримм'
          },
          {
            model: 'personal',
            id: 'gender',
            title: "Пол",
            type: "text",
            isShown: true,
            state: "мужской"
          },
          {
            model: 'personal',
            id: 'age',
            title: "Возраст",
            type: "number",
            isShown: true,
            state: "45"
          },
          {
            model: 'attributes',
            id: 'strength',
            title: "Сила",
            type: "number",
            isShown: false,
            state: 12
          },
          {
            model: 'attributes',
            id: 'agility',
            title: "Проворство",
            type: "number",
            isShown: false,
            state: 16
          },
          {
            model: 'attributes',
            id: 'dexterity',
            title: "Ловкость",
            type: "number",
            isShown: false,
            state: 16
          },
          {
            model: 'attributes',
            id: 'intelligence',
            title: "Интеллект",
            type: "number",
            isShown: false,
            state: 10
          },
          {
            model: 'attributes',
            id: 'vitality',
            title: "Выносливость",
            type: "number",
            isShown: false,
            state: 8
          },
        ],
        submit: [
          {
            model: 'all',
            title: "Создать персонажа",
            isShown: true,
            action: this.createCharacter
          },
        ],
        status: {
          type: "",
          isShown: false,
          message: ""
        }
      }
    },
    watch: {
      mode() {
        this.tabs.forEach(item => {
          if (this.mode == item.model) {
            item.isPressed = true
          } else {
            item.isPressed = false
          }
        });
        this.inputs.forEach(item => {
          if (this.mode == item.model) {
            item.isShown = true
          } else {
            item.isShown = false
          }
        });
      }
    },
    methods: {
      createCharacter: async function() {
        this.status.isShown = false;
        let nickname, firstname, lastname, gender, age, strength, agility, dexterity, intelligence, vitality;
        let allFiled = true;
        this.inputs.forEach(item => {
          if (!item.state) {
            this.status.message = `Поле ${item.title} не заполнено.`;
            this.status.type = 'error';
            this.status.isShown = true;
            return;
          }
          if (item.id == 'nickname') nickname = item.state;
          if (item.id == 'firstname') firstname = item.state;
          if (item.id == 'lastname') lastname = item.state;
          if (item.id == 'gender') gender = item.state;
          if (item.id == 'age') age = item.state;
          if (item.id == 'strength') strength = item.state;
          if (item.id == 'agility') agility = item.state;
          if (item.id == 'dexterity') dexterity = item.state;
          if (item.id == 'intelligence') intelligence = item.state;
          if (item.id == 'vitality') vitality = item.state;
        });
        if (!allFiled) return;
        let response;
        try {
          response = await axios.post(`/character`, {
              nickname: nickname,
              name: {
                firstname: firstname,
                lastname: lastname,
              },
              gender: gender,
              age: age,
              attributes: {
                strength: strength,
                agility: agility,
                dexterity: dexterity,
                intelligence: intelligence,
                vitality: vitality
              },
              money: [],
              experience: []
            },
            {
              headers: { Authorization: `Bearer ${this.$store.state.accessToken}`
            }
          });
          this.$store.commit('user/addCharacter', response.data);
          this.$emit('closeCreator');
        } catch(err) {
          if (err.response.status == 500) {
            this.status.message = "Сервер не отвечает попробуйте позже.";
            this.status.type = 'error';
            this.status.isShown = true;
          }
          console.log(`${err.response.status} ${err.response.statusText}: ${err.response.data}`);
          return
        }
      },
      switchTabs(currentTab) {
        this.status.isShown = false;
        this.mode = currentTab.model;
      }
    }
  }
</script>

<style lang="scss" scoped>
</style>
