<template lang="html">
  <div class="global-container p--1">
    <h1>Home page</h1>
  
  </div>
</template>

<script>

  export default {
    computed: {

    },
    methods: {
      getAllCharacter() {
        this.$store.dispatch('character/getAll');
      }
    }
  }
</script>

<style lang="scss" scoped>
</style>
