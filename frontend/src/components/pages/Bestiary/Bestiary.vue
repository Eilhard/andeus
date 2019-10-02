<template lang="html">
  <div class="">
    <BestiaryControllers
      v-bind:mode="isEditorMode"
      v-bind:modeDel="isDeleteMode"
      v-on:switchEditor="switchEditor"
      v-on:switchDeleteMode="switchDeleteMode"
    />
    <div v-show="!isEditorMode" class="p--1">
      <BestiaCard v-for="bestia in bestias" :key="bestia.id"
        class="m--1"
        v-bind:id="bestia._id"
        v-bind:modeDel="isDeleteMode"
        v-bind:name="bestia.name"
        v-bind:race="bestia.race"
        v-bind:lvl="bestia.lvl"
        v-bind:description="bestia.description"
      />
    </div>
    <div v-show="isEditorMode" class="page-flex--block">
      <NewBestia
        v-on:switchEditor="switchEditor"
      />
    </div>
  </div>
</template>

<script>
  import BestiaryControllers from './components/BestiaryControllers.vue';
  import BestiaCard from './components/BestiaCard.vue';
  import NewBestia from './components/NewBestia.vue';

  export default {
    components: {
      BestiaryControllers,
      BestiaCard,
      NewBestia
    },
    data() {
      return {
        isEditorMode: false,
        isDeleteMode: false,
        inputs: {
          searchName: '',
        }
      }
    },
    computed: {
      bestias() {
        return this.$store.getters['bestiary/displayedBestias'];
      }
    },
    methods: {
      switchEditor() {
        this.isEditorMode = !this.isEditorMode;
      },
      switchDeleteMode() {
        this.isDeleteMode = !this.isDeleteMode;
      },
    }
  }
</script>

<style lang="scss" scoped>
</style>
