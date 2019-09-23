<template>
  <nav class="global-nav">
    <div class="global-container global-container--nav">
      <div class="primary-nav-section">
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

        <div class="primary-nav-section--mobile">
          <button
            v-show="!isNavOpen"
            v-on:click="showNav"
            class="link"
          >
            <i class="fas fa-bars"></i>
          </button>
          <button
            v-show="isNavOpen"
            v-on:click="showNav"
            class="link"
          >
            <i class="fas fa-times"></i>
          </button>
        </div>
      </div>

      <div
        class="secondary-nav-section"
        v-bind:class="{ 'secondary-nav-section--hide-phone': !isNavOpen  }"
      >
        <router-link
          to="/articles"
          tag="button"
          class="link link--phone-width"
          active-class="link--pressed"
        >
          <span class="link__title">{{links.articles}}</span>
          <i class="fas fa-book"></i>
        </router-link>
        <router-link
          to="/bestiary"
          tag="button"
          class="link link--phone-width"
          active-class="link--pressed"
        >
          <span class="link__title">{{links.bestiary}}</span>
          <i class="fas fa-dragon"></i>
        </router-link>

        <div class="spacer spacer-exclude-phone"></div>

        <router-link
          v-show="!auth"
          to="/login"
          tag="button"
          class="link link--phone-width"
          active-class="link--pressed"
        >
          <span class="link__title">{{links.login}}</span>
          <i class="fas fa-sign-in-alt"></i>
        </router-link>
        <router-link
          v-show="auth"
          to="/user"
          tag="button"
          class="link link--large link--phone-width"
          active-class="link--pressed"
        >
          <i class="fas fa-user-circle"></i>
        </router-link>
        <button
          v-on:click="logout"
          v-show="auth"
          class="link link--phone-width"
        >
          <span class="link__title">{{links.logout}}</span>
          <i class="fas fa-sign-out-alt"></i>
        </button>
      </div>
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
        },
        isNavOpen: false
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
      showNav() {
        this.isNavOpen = !this.isNavOpen;
      }
    }
  }
</script>

<style lang="scss" scoped>
</style>
