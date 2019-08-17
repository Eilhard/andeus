<template>
  <div class="app-container">
    <nav class="global-nav">
      <button class="global-nav__button">Editor</button>
      <button class="global-nav__button">Bestiary</button>
    </nav>

    <bestia-card v-for="bestia in besties" :key="bestia.id"
      :name="bestia.name"
      :race="bestia.race"
      :lvl="bestia.lvl"
      :hp="bestia.hp"
      :energy="bestia.energy"
      :loot="bestia.loot">
    </bestia-card>
  </div>
</template>

<script>
  import axiBeast from '../ads/axibeast.js'
  import BestiaCard from './bestiacard.vue';

  export default {
    data() {
      return {
        besties: null,
      }
    },
    mounted() {
      axiBeast('bestia').then(res => {
        this.besties = res.data;
      });
    },
    methods: {
      syncBesties() {
        axiBeast('bestia').then(res => {
          this.besties = res.data;
        });
      }
    },
    components: {
      BestiaCard: BestiaCard,
    }
  }

</script>

<style scoped>
  .app-container {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  .global-nav {
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    flex-wrap: wrap;
    width: 100%;
    height: 60px;
    color: #FFFFFF;
    background-color: #323232;
    @media (max-width: 650px) {
      height: auto;
    }
    &__button {
      width: 100px;
      height: 25px;
      margin-right: 10px;
      font-family: monospace;
      font-size: 16px;
      font-weight: bold;
      text-transform: uppercase;
      border: none;
      color: #323232;
      background-color: #80CBC4;
      border-radius: 3px;
      &:hover {
        background-color: darken(#80CBC4, 10%);
        cursor: pointer;
      }
      @media (max-width: 650px) {
        width: 90%;
        margin: 0 5% 0 5%;
        margin-top: 0;
      }
    }
  }
</style>
