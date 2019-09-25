<template lang="html">
  <form v-on:submit.prevent class="character-form">
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
      class="input-group m--1"
    >
      <span class="input-group__title input-group__title--login">{{item.title}}</span>
      <input
        class="input-group__text-input"
        type="text"
        v-model="item.state"
      >
    </label>

    <button
      v-for="btn in submit"
      v-on:click="btn.action"
      class="input-btn input-btn--login m--1 "
    >
      {{btn.title}}
    </button>
  </form>
</template>

<script>
  import axios from '../../../plugins/axios.js';

  export default {
    data() {
      return {
        inputs: [
          {
            id: 'firstname',
            title: "Имя",
            state: 'Terry'
          },
          {
            id: 'lastname',
            title: "Фамилия",
            state: 'Scarry'
          },
          {
            id: 'email',
            title: "Email",
            state: 'terry@gmail.com'
          },
          {
            id: 'login',
            title: "Логин",
            state: "Terry"
          },
          {
            id: 'password',
            title: "Пароль",
            state: "12345"
          },
        ],
        submit: [
          {
            title: "Создать нового персонажа",
            action: this.create
          },
        ],
        status: {
          type: "",
          isShown: true,
          message: ""
        }
      }
    },
    methods: {
      create: async function() {
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

          this.status.message = "Пользователь успешно создан.";
          this.status.type = 'success';
          this.status.isShown = true;

        }
      }
    }
  }
</script>

<style lang="scss" scoped>
</style>
