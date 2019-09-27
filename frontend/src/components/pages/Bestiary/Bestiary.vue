<template lang="html">
  <div class="">
    <nav class="page-nav">
      <form class="input-container input-container--clear">
        <label
          class="input-group m--1"
        >
          <input
            v-model="inputs.searchName"
            placeholder="Найти существо..."
            class="input-group__text-input"
          >
          <button
            v-on:search="search"
            class="input-group__btn-append input-group__btn-append--dark"
          >
            <i class="fas fa-search"></i>
          </button>
        </label>
      </form>
    </nav>
    <div class="p--1">
      <BestiaCard v-for="bestia in besties" :key="bestia.id"
        class="m--1"
        :name="bestia.name"
        :race="bestia.race"
        :lvl="bestia.lvl"
        :description="bestia.description"
      />
    </div>
  </div>
</template>

<script>
  import BestiaCard from './components/BestiaCard.vue'
  export default {
    components: {
      BestiaCard
    },
    data() {
      return {
        inputs: {
          searchName: '',
        }
      }
    },
    computed: {
      besties() {
        return this.$store.state.bestiary.besties;
      }
    },
    methods: {
      search() {

      }
    }
  }
</script>

<style lang="scss" scoped>
</style>
