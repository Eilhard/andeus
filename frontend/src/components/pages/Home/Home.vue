<template lang="html">
  <div class="global-container p--1">
    <h1>Home page</h1>
    <button v-on:click="getAllCharacter"  class="input-btn">Все персонажи</button>
    <button v-on:click="createCharacter"  class="input-btn">Создать персонажа</button>
    <button v-on:click="getUser" class="input-btn">Получить данные пользователя</button>
  </div>
</template>

<script>

  export default {
    computed: {

    },
    methods: {
      getAllCharacter() {
        this.$store.dispatch('character/getAll');
      },
      getUser() {
        this.$store.dispatch('user/getUser');
      },
      createCharacter() {
        this.$store.dispatch('character/createCharacter');
      }
    }
  }
</script>

<style lang="scss" scoped>
</style>
