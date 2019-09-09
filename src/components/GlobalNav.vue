<template>
  <nav class="global-nav">
    <div class="global-container">
      <router-link
        to="/"
        exact
        tag="button"
        class="link"
        active-class="link--pressed"
      >
        <span class="link__title">Home</span>
        <i class="fas fa-home"></i>
      </router-link>
      <router-link
        to="/bestiary"
        tag="button"
        class="link"
        active-class="link--pressed"
      >
        <span class="link__title">Bestiary</span>
        <i class="fas fa-dragon"></i>
      </router-link>
    </div>
  </nav>
</template>

<script>
  import '../../plugins/fontawesome.js';

  export default {
    name: 'GlobalNav',
    data() {
      return {

      }
    }
  }
</script>

<style lang="scss" scoped>
  $default-indent: 10px;

  .global-nav {
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    flex-wrap: wrap;
    width: 100%;
    height: 60px;
    color: #FFFFFF;
    background-color: #323232;
    @media (max-width: 400px) {
      height: 60px;
    }
  }
  .link {
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-items: center;
    height: 100%;
    padding: 0 20px;
    font-family: monospace;
    font-size: 16px;
    font-weight: bold;
    text-transform: uppercase;
    border: none;
    color: #747474;
    background-color: #323232;
    &--pressed {
      color: #FFFFFF;
    }
    &:hover {
      color: #FFFFFF;
      background-color: darken(#323232, 5%);
      cursor: pointer;
    }
    @media (max-width: 400px) {
      // height: 40px;
    }
    &__title {
      @media (max-width: 400px) {
        display: none;
      }
    }
  }
</style>
