<template>
  <div class="app-container">
    <global-nav
      v-on:navBtnClick="navBtnClick($event)"
    ></global-nav>
    <cards-nav
      v-show="navButtons.bestiary"
      v-bind:bestiesRaces="bestiesRaces"
      v-on:search="search($event)"
    ></cards-nav>
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
      <bestia-editor
        v-bind:besties="besties"
        v-bind:selectDefault="bestiaEditorSelect"
        v-on:newBestia="newBestia($event)"
        v-on:updateBestia="updateBestia($event)"
        v-on:deleteBestia="deleteBestia($event)"
      ></bestia-editor>
    </div>
  </div>
</template>

<script>
  import axiBeast from '../ads/axibeast.js'
  import GlobalNav from './components/nav_global.vue';
  import CardsNav from './components/nav_cards.vue';
  import BestiaCard from './components/bestia_card.vue';
  import BestiaEditor from './components/bestia_editor.vue';

  export default {
    components: {
      bestiaCard: BestiaCard,
      bestiaEditor: BestiaEditor,
      globalNav: GlobalNav,
      cardsNav: CardsNav
    },
    data() {
      return {
        besties: null,
        showBestiesIds: [],
        bestiaEditorSelect: "",
        navButtons: {
          editor: false,
          bestiary: true
        }
      }
    },
    computed: {
      showBesties() {
        return this.besties.filter(item => this.showBestiesIds.includes(item.id));
      },
      bestiesRaces() {
        if (this.besties) {
          let types = this.besties.map(item => item.race).filter((item, index, thisArray) => thisArray.indexOf(item) === index);
          return types;
        }
        return [];
      }
    },
    mounted() {
      axiBeast.get('bestia').then(res => {
        this.besties = res.data.map(item => {
          this.showBestiesIds.push(item.id);
          return item;
        });
      });
    },
    methods: {
      search({ type, body }) {
        this.showBestiesIds = this.besties.fi
        if (string == "") {
          this.besties.forEach(item => { item.show = true; });
        } else {
          this.besties.forEach(item => {
            if (item.name.toLowerCase() == string.toLowerCase()) {
              item.show = true;
            } else {
              item.show = false;
            }
          });
        }
      },
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
        axiBeast.post('bestia', event).then(res => {
          this.besties.push(res.data);
          this.bestiaEditorSelect = res.data.id;
        });
      },
      updateBestia(event) {
        axiBeast.patch(`bestia/${this.id}`, bestia).then(res => {
          let updatedBestia = res.data;
          for (let bestia of this.besties) {
            if (bestia.id == updatedBestia.id) {
              bestia.name = updatedBestia.name;
              bestia.race = updatedBestia.race;
              bestia.lvl = updatedBestia.lvl;
              bestia.hp = updatedBestia.hp;
              bestia.energy = updatedBestia.energy;
              bestia.loot = updatedBestia.loot;
            }
          }
        });
      },
      deleteBestia(event) {
        axiBeast.delete(`bestia/${event}`).then(res => {
          this.besties = res.data;
        });
      }
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
