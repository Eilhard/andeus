<template>
  <nav class="cards-nav">
    <input v-on:keyup.enter="search(searchInput)" type="text" placeholder="Search" v-model="searchInput" class="cards-nav__input">
    <button v-on:click="search(searchInput)"  class="cards-nav__button">Search</button>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      searchInput: "",
    }
  },
  methods: {
    search(string) {
      this.$emit('search', this.searchInput);
    }
  }
}
</script>

<style scoped>
  $default-indent: 10px;

  .cards-nav {
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    flex-wrap: wrap;
    width: 100%;
    height: 60px;
    color: #FFFFFF;
    background-color: lighten(#323232, 10%);
    @media (max-width: 400px) {
      height: auto;
    }
    &__button {
      width: 100px;
      /* height: 100%; */
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
        width: 100%;
        height: 40px;
      }
    }
  }
</style>
