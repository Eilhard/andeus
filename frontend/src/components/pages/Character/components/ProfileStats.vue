<template lang="html">
  <div class="">
    <div class="page-nav">
      <button
        v-on:click="switchEditor"
        v-show="!isEditorMode"
        class="text-btn text-btn--secondary"
      >
        <i class="fas fa-pencil-alt"></i>
      </button>
      <button
        v-on:click="switchEditor"
        v-show="isEditorMode"
        class="text-btn text-btn--secondary"
      >
        <i class="fas fa-save"></i>
      </button>
    </div>
    <div class="p--1">
      <form class="input-container input-container--clear p--2">
        <label class="input-group mb--1">
          <span class="input-group__title input-group__title--user">
            Прозвище:
          </span>
          <input
            class="input-group__text-input"
            type="text"
            v-bind:disabled="!isEditorMode"
            v-model="models.nickname"
          >
        </label>
        <label class="input-group mb--1">
          <span class="input-group__title input-group__title--user">
            Имя:
          </span>
          <input
            class="input-group__text-input"
            type="text"
            v-bind:disabled="!isEditorMode"
            v-model="models.firstname"
          >
        </label>
        <label class="input-group mb--1">
          <span class="input-group__title input-group__title--user">
            Фамилия:
          </span>
          <input
            class="input-group__text-input"
            type="text"
            v-bind:disabled="!isEditorMode"
            v-model="models.lastname"
          >
        </label>
        <label class="input-group mb--1">
          <span class="input-group__title input-group__title--user">
            Пол:
          </span>
          <input
            class="input-group__text-input"
            type="text"
            v-bind:disabled="!isEditorMode"
            v-model="models.gender"
          >
        </label>
        <label class="input-group mb--1">
          <span class="input-group__title input-group__title--user">
            Возраст:
          </span>
          <input
            class="input-group__text-input"
            type="text"
            v-bind:disabled="!isEditorMode"
            v-model="models.age"
          >
        </label>
      </form>
    </div>

  </div>
</template>

<script>
  export default {
    props: {
      nickname: String,
      firstname: String,
      lastname: String,
      gender: String,
      age: Number
    },
    data() {
      return {
        isEditorMode: false,
        models: {
          nickname: '',
          firstname: '',
          lastname: '',
          gender: '',
          age: '',
        }
      }
    },
    methods: {
      switchEditor() {
        this.isEditorMode = !this.isEditorMode;
      },
      saveChanges() {
        let anyChanges = false;
        if (this.models.firstname != this.firstname) anyChanges = true;
        if (this.models.lastname != this.lastname) anyChanges = true;
        if (!anyChanges) {
          this.switchEditor();
          return
        };

        this.$store.commit('character/setFirstname', this.models.firstname);
        this.$store.commit('character/setLastname', this.models.lastname);
        // this.$store.dispatch('character/updateCharacter');
        this.switchEditor();
      }
    },
    mounted() {
      this.models.nickname = this.nickname;
      this.models.firstname = this.firstname;
      this.models.lastname = this.lastname;
      this.models.gender = this.gender;
      this.models.age = this.age;
    }
  }
</script>

<style lang="scss" scoped>
</style>
