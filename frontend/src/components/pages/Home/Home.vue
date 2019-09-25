<template lang="html">
  <div class="global-container p--1">
    <h1>Home page</h1>
    <button v-on:click="getAllCharacter"  class="input-btn">Все персонажи</button>
    <!-- <button v-on:click="getUser" class="input-btn">Получить данные пользователя</button> -->
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
