<template lang="html">
  <div class="global-container p--1">
    <Greetings
      v-if="!auth"
      class="sheet"
    />

    <div v-if="auth" class="">

    </div>
  </div>
</template>

<script>
  import Greetings from './components/Greetings.vue'

  export default {
    components: {
      Greetings
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
