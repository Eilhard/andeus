<template lang="html">
  <div class="global-container p--2">
    <div v-if="bestia" class="sheet p--2">
      <BestiaHeader
        v-show="!isEditorMode"
        v-bind:mode="isEditorMode"
        v-bind:name="bestia.name"
        v-on:switchEditor="switchEditor"
      />
      <BestiaBody
        v-show="!isEditorMode"
        v-bind:name="bestia.name"
        v-bind:race="bestia.race"
        v-bind:lvl="bestia.lvl"
        v-bind:hp="bestia.hp"
        v-bind:energy="bestia.energy"
        v-bind:description="bestia.description"
        v-bind:imgSrc="bestia.imgSrc"
      />
      <BestiaEditor
        v-show="isEditorMode"
        v-bind:bestia="bestia"
        v-on:switchEditor="switchEditor"
        v-bind:isEditorMode="isEditorMode"
      />
    </div>
    <div v-if="!bestia" class="">
      <LostPage />
    </div>
  </div>
</template>

<script>
  import BestiaHeader from './components/BestiaHeader.vue';
  import BestiaBody from './components/BestiaBody.vue';
  import BestiaEditor from './components/BestiaEditor.vue';
  import LostPage from '../LostPage.vue';


  export default {
    components: {
      BestiaHeader,
      BestiaBody,
      BestiaEditor,
      LostPage
    },
    data() {
      return {
        isEditorMode: false,
      }
    },
    computed: {
      bestia() {
        return this.$store.state.bestiary.bestias.filter(item => item._id == this.$route.params.id)[0];
      }
    },
    methods: {
      switchEditor() {
        this.isEditorMode = !this.isEditorMode;
      },
    },
    mounted() {
      if (this.$store.state.bestiary.bestias.length < 1) {
        this.$store.dispatch('bestiary/getBestias');
      }
    }
  }
</script>

<style lang="css" scoped>
</style>
