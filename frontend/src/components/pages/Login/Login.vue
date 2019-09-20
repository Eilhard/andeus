<template lang="html">
  <div class="global-container login-page p--2">

    <form v-on:submit.prevent class="login-form">
      <button
        v-on:click="login"
        class="input-btn input-btn--login m--1 "
      >
        {{labelRegisterBtn}}
      </button>
      <button
        v-on:click="login"
        class="input-btn input-btn--login m--1 "
      >
        {{labelLoginBtn}}
      </button>
      <label class="input-group m--1">
        <span class="input-group__title input-group__title--login">{{labelUsernameInput}}</span>
        <input
          class="input-group__text-input"
          type="text"
          v-model="username"
        >
      </label>
      <label class="input-group m--1">
        <span class="input-group__title input-group__title--login">{{labelPasswordInput}}</span>
        <input
          class="input-group__text-input"
          type="text"
          v-model="password"
        >
      </label>
      <button
        v-on:click="login"
        class="input-btn input-btn--login m--1 "
      >
        {{labelSubmitBtn}}
      </button>
    </form>
  </div>
</template>

<script>

  export default {
    data() {
      return {
        labelUsernameInput: "Логин",
        labelPasswordInput: "Пароль",
        labelLoginBtn: "Вход",
        labelRegisterBtn: 'Регистрация',
        labelSubmitBtn: 'Войти',
        username: "Terry",
        password: "12345"
      }
    },
    methods: {
      login: async function() {
        await this.$store.dispatch('login', {
          login: this.username,
          password: this.password,
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
</style>
