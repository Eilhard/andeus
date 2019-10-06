<template lang="html">
    <nav class="page-nav page-nav--space-between px--3">
      <div v-show="mode" class="spacer"></div>
      <form
        v-show="!mode"
        v-on:submit.prevent="search"
        class="input-container input-container--clear input-container--row"
      >
        <label
          class="input-group input-group--nav m--1"
        >
          <input
            v-on:keyup="search"
            v-model="inputs.searchTitle"
            placeholder="Название существа..."
            class="input-group__text-input"
          >
          <button
            v-on:search="search"
            class="input-group__btn-append input-group__btn-append--dark"
          >
            <i class="fas fa-search"></i>
          </button>
        </label>
        <label
          class="input-group input-group--nav m--1"
        >
          <select
            v-on:change="search"
            v-model="inputs.searchRace"
            class="input-group__select"
          >
            <option disabled selected value="null">Раса существа...</option>
            <option value="all">Все</option>
            <option
              v-for="(race, index) in bestiesRaces"
              v-bind:key="`race-${index}`"
              v-bind:value="race"
            >{{race}}</option>
          </select>
        </label>
        <label
          class="input-group input-group--nav m--1"
        >
          <input
            v-on:keyup="search"
            v-on:change="search"
            v-model="inputs.searchLvl"
            placeholder="Уровень существа..."
            type="number"
            class="input-group__text-input select"
          >
          <button
            v-on:search="search"
            class="input-group__btn-append input-group__btn-append--dark"
          >
            <i class="fas fa-search"></i>
          </button>
        </label>
      </form>
      <div class="page-nav-controls" v-show="isMaster">
        <button
          v-on:click="deleteArticles"
          v-show="!modeDel && !mode"
          class="text-btn text-btn--secondary"
        >
          <i class="fas fa-trash-alt"></i>
        </button>
        <button
          v-on:click="deleteArticles"
          v-show="modeDel && !mode"
          class="text-btn text-btn--secondary"
        >
          <i class="far fa-trash-alt"></i>
        </button>
        <button
          v-on:click="switchEditor"
          v-show="mode"
          class="text-btn text-btn--secondary"
        >
          <i class="fas fa-times"></i>
        </button>
        <button
          v-on:click="switchEditor"
          v-show="!mode"
          class="text-btn text-btn--secondary"
        >
          <i class="fas fa-plus"></i>
        </button>
      </div>

    </nav>
</template>

<script>

  export default {
    props: {
      mode: {
        type: Boolean,
        default: false
      },
      modeDel: {
        type: Boolean,
        default: false
      }
    },
    data(){
      return {
        isMaster: true,
        inputs: {
          searchTitle: '',
          searchRace: null,
          searchLvl: null
        }
      }
    },
    computed: {
      searchInStore() {
        return this.$store.state.bestiary.search;
      },
      bestiesRaces() {
        return this.$store.state.bestiary.races;
      },
    },
    methods: {
      search() {
        this.$store.commit('bestiary/setSearch', this.inputs.searchTitle);
        this.$store.commit('bestiary/setSearchRace', this.inputs.searchRace);
        this.$store.commit('bestiary/setSearchLvl', this.inputs.searchLvl);
      },
      switchEditor() {
        this.$emit('switchEditor');
      },
      deleteArticles() {
        this.$emit('switchDeleteMode');
      }
    },
    mounted() {
      this.inputs.searchTitle = this.searchInStore;
    }
  }
</script>

<style lang="scss" scoped>
</style>
