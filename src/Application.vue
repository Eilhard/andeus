<template>
  <div class="app-container">
    <global-nav></global-nav>
    <router-view></router-view>
  </div>
</template>

<script>
  import axios from './plugins/axios.js'
  import GlobalNav from './components/GlobalNav.vue';

  export default {
    components: {
      GlobalNav: GlobalNav,
    }
  }

</script>

<style lang="scss" scoped>
  $default-indent: 10px;

  .app-container {
    display: flex;
    flex-direction: column;
    height: 100vh;

    &__main-holder {
      display: flex;
      align-items: center;
      flex-direction: column;
      padding: $default-indent;
    }
  }
</style>
