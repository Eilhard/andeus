<template lang="html">
  <div class="global-container login-page p--2">

    <form v-on:submit.prevent class="input-container">
      <div class="tabs-menu">
        <button
          v-for="tab in tabs"
          v-bind:key="`login-tab_${tab.title}`"
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
        <span class="input-group__title input-group__title--login">{{item.title}}</span>
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
  </div>
</template>

<script>
  import axios from '../../../plugins/axios.js';

  export default {
    data() {
      return {
        mode: 'login',
        tabs: [
          {
            model: 'login',
            title: "Вход",
            isPressed: true,
            action: this.switchTabs
          },
          {
            model: 'register',
            title: "Регистрация",
            isPressed: false,
            action: this.switchTabs
          }
        ],
        inputs: [
          {
            model: 'register',
            id: 'firstname',
            title: "Имя",
            type: "text",
            isShown: false,
            state: 'Terry'
          },
          {
            model: 'register',
            id: 'lastname',
            title: "Фамилия",
            type: "text",
            isShown: false,
            state: 'Scarry'
          },
          {
            model: 'register',
            id: 'email',
            title: "Email",
            type: "text",
            isShown: false,
            state: 'terry@gmail.com'
          },
          {
            model: 'all',
            id: 'login',
            title: "Логин",
            type: "text",
            isShown: true,
            state: "Terry"
          },
          {
            model: 'all',
            id: 'password',
            title: "Пароль",
            type: "text",
            isShown: true,
            state: "12345"
          },
        ],
        submit: [
          {
            model: 'login',
            title: "Войти",
            isShown: true,
            action: this.login
          },
          {
            model: 'register',
            title: "Создать аккаунт",
            isShown: false,
            action: this.register
          }
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
          if (this.mode == item.model || item.model == 'all') {
            item.isShown = true
          } else {
            item.isShown = false
          }
        });
        this.submit.forEach(item => {
          if (this.mode == item.model) {
            item.isShown = true
          } else {
            item.isShown = false
          }
        });
      }
    },
    methods: {
      login: async function() {
        let login, password;
        this.inputs.forEach(item => {
          if (item.id == 'login') login = item.state;
          if (item.id == 'password') password = item.state;
        });
        let response;
        try {
          response = await axios.post('auth/login', {
            login: login,
            password: password
          });
        } catch(err) {
          if (err.response.status == 400) {
            this.status.message = "Вы ввели неверный логин или пароль.";
            this.status.type = 'error';
            this.status.isShown = true;
          }
          if (err.response.status == 500) {
            this.status.message = "Сервер не отвечает попробуйте позже.";
            this.status.type = 'error';
            this.status.isShown = true;
          }
          console.log(`${err.response.status} ${err.response.statusText}: ${err.response.data}`);
          return
        }
        this.$store.dispatch('handleTokens', {
          accessToken: response.data.accessToken,
          refreshToken: response.data.refreshToken
        });
        if (response.status == 201) {
          this.$store.dispatch('checkAuth');
          this.$router.push('/');
        }
      },
      register: async function() {
        let firstname, lastname, login, password, email;
        this.inputs.forEach(item => {
          if (item.id == 'firstname') firstname = item.state;
          if (item.id == 'lastname') lastname = item.state;
          if (item.id == 'email') email = item.state;
          if (item.id == 'login') login = item.state;
          if (item.id == 'password') password = item.state;
        });
        let response;
        try {
          response = await axios.post('auth/register', {
            name: {
              firstname: firstname,
              lastname: lastname,
            },
            email: email,
            login: login,
            password: password
          });
        } catch(err) {
          if (err.response.status == 409) {
            this.status.message = "Пользователь с таким логином или почтой уже зарегистрирован.";
            this.status.type = 'error';
            this.status.isShown = true;
          }
          if (err.response.status == 500) {
            this.status.message = "Сервер не отвечает попробуйте позже.";
            this.status.type = 'error';
            this.status.isShown = true;
          }
          console.log(`${err.response.status} ${err.response.statusText}: ${err.response.data}`);
          return
        }
        if (response.status == 201) {
          this.mode = 'login';
          this.status.message = "Пользователь успешно создан.";
          this.status.type = 'success';
          this.status.isShown = true;
          this.inputs.forEach(item => {
            if (item.id == 'login') item.state = login;
            if (item.id == 'password') item.state = password;
          });
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
