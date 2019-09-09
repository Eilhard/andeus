<template lang="html">
  <div class="app-container__main-holder">
    <h1>Welcome to home page!</h1>
    <h2>{{message}}</h2>
  </div>
</template>

<script>

  export default {
    computed: {
      message() {
        return this.$store.state.msg;
      }
    }
  }
</script>

<style lang="scss" scoped>
</style>
