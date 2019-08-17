<template>
  <div>

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
      getBesties() {

      }
    },
    components: {
      BestiaCard: BestiaCard,
    }
  }

</script>

<style>

</style>
