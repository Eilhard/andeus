<template>
  <nav class="cards-nav">
    <div class="global-container">
      <input v-on:keyup.enter="searchName(searchInput)" type="text" placeholder="Search" v-model="searchNameInput" class="cards-nav__input">
      <select v-model="selectRace" class="cards-nav__input">
        <option value="all">All</option>
        <option v-for="race in bestiesRaces" :value="race">{{race}}</option>
      </select>
      <button v-on:click="search(searchInput)"  class="cards-nav__button">Search</button>
    </div>
  </nav>
</template>

<script>
export default {
  props: {
    bestiesRaces: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      searchNameInput: "",
      selectRace: 'all'
    }
  },
  methods: {
    searchName(string) {
      this.$emit('search', {
        type: "name",
        body: this.searchInput
      });
    },
    searchRace(string) {
      this.$emit('search', {
        type: "race",
        body: this.selectRace
      });
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
