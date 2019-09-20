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
        <span class="link__title">{{home}}</span>
        <i class="fas fa-home"></i>
      </router-link>
      <router-link
        to="/articles"
        tag="button"
        class="link"
        active-class="link--pressed"
      >
        <span class="link__title">{{articles}}</span>
        <i class="fas fa-book"></i>
      </router-link>
      <router-link
        to="/bestiary"
        tag="button"
        class="link"
        active-class="link--pressed"
      >
        <span class="link__title">{{bestiary}}</span>
        <i class="fas fa-dragon"></i>
      </router-link>
      <div class="spacer"></div>
      <router-link
        to="/login"
        tag="button"
        class="link"
        active-class="link--pressed"
      >
        <span class="link__title">{{login}}</span>
        <i class="fas fa-sign-in-alt"></i>
      </router-link>

      <button class="link">
        <span class="link__title">{{logout}}</span>
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
        home: 'Главная',
        bestiary: 'Бестиарий',
        articles: 'Статьи',
        login: 'Войти',
        logout: 'Выйти'
      }
    }
  }
</script>

<style lang="scss" scoped>
  .global-container--nav {
    display: flex;
  }
</style>
