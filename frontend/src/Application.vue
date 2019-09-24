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
      GlobalNav,
    },
    mounted() {
      this.$store.dispatch('refresh');
    }
  }

</script>

<style lang="scss" scoped>
</style>
