<template>
  <div class="app-container">
    <nav class="global-nav">
      <button v-on:click="navButtons('bestiary')" class="global-nav__button">Bestiary</button>
      <button v-on:click="navButtons('editor')" class="global-nav__button">Editor</button>
    </nav>
    <div v-show="buttons.bestiary" class="app-container__card-holder">
      <bestia-card v-for="bestia in besties" :key="bestia.id"
        :name="bestia.name"
        :race="bestia.race"
        :lvl="bestia.lvl"
        :hp="bestia.hp"
        :energy="bestia.energy"
        :loot="bestia.loot">
      </bestia-card>
    </div>
    <div v-show="buttons.editor" class="app-container__card-holder">
      <form class="">
        <input type="text">
      </form>
    </div>
  </div>
</template>

<script>
  import axiBeast from '../ads/axibeast.js'
  import BestiaCard from './bestiacard.vue';

  export default {
    data() {
      return {
        besties: null,
        buttons: {
          editor: false,
          bestiary: true
        }
      }
    },
    mounted() {
      axiBeast('bestia').then(res => {
        this.besties = res.data;
      });
    },
    methods: {
      navButtons(btnName) {
        for (let key in this.buttons) {
          if (key == btnName.toLowerCase()) {
             this.buttons[key] = true;
             continue;
          }
          this.buttons[key] = false;
        }
      },
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
  $default-indent: 10px;

  .app-container {
    display: flex;
    justify-content: center;
    flex-direction: column;

    &__card-holder {
      display: flex;
      align-items: center;
      flex-direction: column;
      padding: $default-indent;
    }
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
    @media (max-width: 400px) {
      height: auto;
    }
    &__button {
      width: 100px;
      height: 100%;
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
