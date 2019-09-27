<template>
  <nav class="global-nav">
    <div class="global-container global-container--nav">
      <div class="primary-nav-section">
        <router-link
          v-on:click.native="linkClick"
          to="/"
          exact
          tag="button"
          class="link"
          active-class="link--pressed"
        >
          <span class="link__title--hide-phone">{{links.home}}</span>
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
          v-on:click.native="linkClick"
          to="/articles"
          tag="button"
          class="link link--phone-width"
          active-class="link--pressed"
        >
          <span class="link__title">{{links.articles}}</span>
          <i class="fas fa-newspaper"></i>
        </router-link>
        <router-link
          v-on:click.native="linkClick"
          to="/database"
          tag="button"
          class="link link--phone-width"
          active-class="link--pressed"
        >
          <span class="link__title">{{links.database}}</span>
          <i class="fas fa-book"></i>
        </router-link>

        <div class="spacer spacer-exclude-phone"></div>

        <router-link
          v-on:click.native="linkClick"
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
          v-on:click.native="linkClick"
          v-show="auth"
          to="/user"
          tag="button"
          class="link link--large-exclude-phone link--phone-width"
          active-class="link--pressed"
        >
          <span class="link__title link__title--show-phone">{{links.user}}</span>
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
          database: 'Библиотека',
          articles: 'Статьи',
          user: 'Личный кабинет',
          login: 'Войти',
          logout: 'Выйти'
        },
        isNavOpen: true
      }
    },
    computed: {
      auth() {
        return this.$store.state.auth;
      }
    },
    methods: {
      linkClick() {
        this.isNavOpen = false;
      },
      logout() {
        this.linkClick();
        this.$store.dispatch('logout');
        this.$router.push('/');
      },
      showNav() {
        this.isNavOpen = !this.isNavOpen;
      }
    }
  }
</script>

<style lang="scss" scoped>
</style>
