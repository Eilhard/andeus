<template lang="html">
  <div class="global-container p--1">
    <Greetings
      v-if="!auth"
      class="sheet"
    />
    <UserHome
      v-if="auth"
      class="sheet"
    />
  </div>
</template>

<script>
  import Greetings from './components/Greetings.vue';
  import UserHome from './components/UserHome.vue';

  export default {
    components: {
      Greetings,
      UserHome
    },
    computed: {
      auth() {
        return this.$store.state.auth;
      }
    },
    methods: {

    }
  }
</script>

<style lang="scss" scoped>
</style>
