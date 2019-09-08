<template>
  <div class="app-container">
    <global-nav></global-nav>
    <router-view></router-view>
  </div>
</template>

<script>
  import axios from '../plugins/axios.js'
  import GlobalNav from './components/GlobalNav.vue';

  export default {
    components: {
      GlobalNav: GlobalNav,
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
      // axiBeast.get('bestia').then(res => {
      //   this.besties = res.data.map(item => {
      //     this.showBestiesIds.push(item.id);
      //     return item;
      //   });
      // });
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
