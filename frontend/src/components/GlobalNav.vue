<template>
  <nav class="global-nav">
    <div class="global-container global-container--nav">
      <router-link
        to="/"
        exact
        tag="button"
        class="link"
        active-class="link--pressed"
      >
        <span class="link__title">{{links.home}}</span>
        <i class="fas fa-home"></i>
      </router-link>
      <router-link
        to="/articles"
        tag="button"
        class="link"
        active-class="link--pressed"
      >
        <span class="link__title">{{links.articles}}</span>
        <i class="fas fa-book"></i>
      </router-link>
      <router-link
        to="/bestiary"
        tag="button"
        class="link"
        active-class="link--pressed"
      >
        <span class="link__title">{{links.bestiary}}</span>
        <i class="fas fa-dragon"></i>
      </router-link>
      <div class="spacer"></div>

      <router-link
        v-show="!auth"
        to="/login"
        tag="button"
        class="link"
        active-class="link--pressed"
      >
        <span class="link__title">{{links.login}}</span>
        <i class="fas fa-sign-in-alt"></i>
      </router-link>
      <router-link
        v-show="auth"
        to="/user"
        tag="button"
        class="link link--large"
        active-class="link--pressed"
      >
        <i class="fas fa-user-circle"></i>
      </router-link>
      <button
        v-on:click="logout"
        v-show="auth"
        class="link"
      >
        <span class="link__title">{{links.logout}}</span>
        <i class="fas fa-sign-out-alt"></i>
      </button>

    </div>
  </nav>
</template>

<script>
  import '../plugins/fontawesome.js';

  export default {
    name: 'GlobalNav',
    data() {
      return {
        links: {
          home: 'Главная',
          bestiary: 'Бестиарий',
          articles: 'Статьи',
          login: 'Войти',
          logout: 'Выйти'
        }
      }
    },
    computed: {
      auth() {
        return this.$store.state.auth;
      }
    },
    methods: {
      logout() {
        this.$store.dispatch('logout');
      },
    }
  }
</script>

<style lang="scss" scoped>
  .global-container--nav {
    display: flex;
  }
</style>
