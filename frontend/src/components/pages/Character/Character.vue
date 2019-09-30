<template lang="html">
  <div class="global-container p--1">
    <div class="sheet">
      <nav class="tabs-menu tabs-menu--dark">
        <button
          v-for="tab in tabs"
          v-bind:key="`login-tab_${tab.title}`"
          v-on:click="tab.action(tab)"
          v-bind:class="{ 'tabs-menu__tab--active-dark': tab.isPressed }"
          class="tabs-menu__tab tabs-menu__tab--dark tabs-menu__tab-group tabs-menu__tab--page"
        >
          <span class="tabs-menu__tab-group-title">{{tab.title}}</span>
          <i v-bind:class="tab.icon"></i>
        </button>
      </nav>
      <div class="page-nav"></div>

      <div v-show="div.characteristics">
        <ProfileStats
          v-bind:nickname="character.nickname"
          v-bind:firstname="character.name.firstname"
          v-bind:lastname="character.name.lastname"
          v-bind:gender="character.gender"
          v-bind:age="character.age"
        />
      </div>
      <div v-show="div.inventory" class="p--1">
        <h2>Inventory</h2>
      </div>

    </div>
  </div>
</template>

<script>
  import axios from '../../../plugins/axios.js';
  import ProfileStats from './components/ProfileStats.vue';


  export default {
    components: {
      ProfileStats
    },
    data() {
      return {
        mode: 'characteristics',
        tabs: [
          {
            model: 'characteristics',
            title: 'Характеристики',
            icon: 'fas fa-user',
            isPressed: true,
            action: this.switchTabs
          },
          {
            model: 'inventory',
            title: 'Инвентарь',
            icon: 'fas fa-boxes',
            isPressed: false,
            action: this.switchTabs
          }
        ],
        div: {
          characteristics: true,
          inventory: false
        }

      }
    },
    computed: {
      character() {
        return this.$store.state.user.characters.filter(item => item._id == this.$route.params.id)[0];
      }
    },
    watch: {
      mode() {
        this.tabs.forEach(item => {
          if (this.mode == item.model) {
            item.isPressed = true;
          } else {
            item.isPressed = false;
          }
        });
        for (let key in this.div) {
          if (this.mode == key) {
            this.div[key] = true;
          } else {
            this.div[key] = false;
          }
        }
      }
    },
    methods: {
      switchTabs(currentTab) {
        this.mode = currentTab.model;
      }
    },
    mounted() {
      this.$store.dispatch('character/setCharacter',   this.character);
      console.log(this.$store.state.character);
    }
  }
</script>

<style lang="scss" scoped>
</style>
