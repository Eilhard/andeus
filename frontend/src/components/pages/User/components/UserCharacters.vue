<template lang="html">
  <div>
    <div class="text-header">
      <h2 class="text-header__h2">Персонажи</h2>
      <button
        v-on:click="switchEditor"
        v-show="!isEditorMode"
        class="text-btn"
      >
        <i class="fas fa-plus"></i>
      </button>
      <div
        v-show="isEditorMode"
        class="text-header__controls"
      >
        <button
          v-on:click="switchEditor"
          class="text-btn"
        >
          <i class="fas fa-times"></i>
        </button>
      </div>
    </div>
    <div class="text-body user-page-characters">
      <CharacterCreator v-show="isEditorMode" v-on:closeCreator="switchEditor" />
      <CharacterCard
        class="m--1"
        v-show="!isEditorMode"
        v-for="character in characters"
        v-bind:key="character._id"
        v-bind:id="character._id"
        v-bind:nickname="character.nickname"
        v-bind:group="character.group"
        v-bind:money="character.money"
        v-bind:experience="character.experience"
      />
    </div>
  </div>
</template>

<script>
  import CharacterCard from './CharacterCard.vue';
  import CharacterCreator from './CharacterCreator.vue';

  export default {
    components: {
      CharacterCard,
      CharacterCreator
    },
    data() {
      return {
        isEditorMode: false,
      }
    },
    computed: {
      characters() {
        return this.$store.state.user.characters;
      }
    },
    methods: {
      switchEditor() {
        this.isEditorMode = !this.isEditorMode;
      },
      createNew() {
        let anyChanges = false;
        if (this.models.firstname != this.firstname) anyChanges = true;
        if (this.models.lastname != this.lastname) anyChanges = true;
        if (!anyChanges) return;

        this.$store.commit('user/setFirstname', this.models.firstname);
        this.$store.commit('user/setLastname', this.models.lastname);
        this.$store.dispatch('user/updateUser');
        this.switchEditor();
      }
    }
  }
</script>

<style lang="css" scoped>
</style>
