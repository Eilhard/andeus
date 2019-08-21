<template>
  <div class="app-container">
    <global-nav
      v-on:navBtnClick="navBtnClick($event)"
    ></global-nav>
    <div v-show="navButtons.bestiary" class="app-container__main-holder">
      <bestia-card v-for="bestia in besties" :key="bestia.id"
        :name="bestia.name"
        :race="bestia.race"
        :lvl="bestia.lvl"
        :hp="bestia.hp"
        :energy="bestia.energy"
        :loot="bestia.loot">
      </bestia-card>
    </div>
    <div v-show="navButtons.editor" class="app-container__main-holder">
      <bestia-editor :besties="besties"
        v-on:newBestia="newBestia($event)"
        v-on:updateBestia="updateBestia($event)"
        v-on:deleteBestia="deleteBestia($event)"
      ></bestia-editor>
    </div>
  </div>
</template>

<script>
  import axiBeast from '../ads/axibeast.js'
  import GlobalNav from './nav.vue';
  import BestiaCard from './bestia_card.vue';
  import BestiaEditor from './bestia_editor.vue';

  export default {
    data() {
      return {
        besties: null,
        navButtons: {
          editor: true,
          bestiary: false
        }
      }
    },
    mounted() {
      axiBeast.get('bestia').then(res => {
        this.besties = res.data;
      });
    },
    methods: {
      navBtnClick(btnName) {
        for (let key in this.navButtons) {
          if (key == btnName.toLowerCase()) {
             this.navButtons[key] = true;
             continue;
          }
          this.navButtons[key] = false;
        }
      },
      syncBesties() {
        return new Promise((resolve, reject) => {
          axiBeast.get('bestia').then(res => {
            this.besties = res.data;
            resolve();
          });
        })
      },
      newBestia(event) {
        this.besties.push(event);
      },
      updateBestia(event) {
        for (let bestia of this.besties) {
          if (bestia.id == event.id) {
            bestia.name = event.name;
            bestia.race = event.race;
            bestia.lvl = event.lvl;
            bestia.hp = event.hp;
            bestia.energy = event.energy;
            bestia.loot = event.loot;
          }
        }
      },
      deleteBestia(event) {
        this.besties = event;
      }
    },
    components: {
      bestiaCard: BestiaCard,
      bestiaEditor: BestiaEditor,
      globalNav: GlobalNav
    }
  }

</script>

<style scoped>
  $default-indent: 10px;

  .app-container {
    display: flex;
    justify-content: center;
    flex-direction: column;

    &__main-holder {
      display: flex;
      align-items: center;
      flex-direction: column;
      padding: $default-indent;
    }
  }
</style>
