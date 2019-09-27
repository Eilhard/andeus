<template lang="html">
  <div>
    <div class="text-header">
      <h2 class="text-header__h2">Профиль</h2>
      <button
        v-on:click="switchEditor"
        v-show="!isEditorMode"
        class="text-btn text-btn--icon"
      >
        <i class="fas fa-pencil-alt"></i>
      </button>
      <button
        v-on:click="saveChanges"
        v-show="isEditorMode"
        class="text-btn text-btn--icon"
      >
        <i class="fas fa-save"></i>
      </button>
    </div>
    <div class="text-body">
      <form class="input-container input-container--clear p--1">
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
      </form>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        isEditorMode: false,
        models: {
          firstname: '',
          lastname: ''
        }
      }
    },
    computed: {
      firstname() {
        return this.$store.state.user.firstname;
      },
      lastname() {
        return this.$store.state.user.lastname;
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

        this.$store.commit('user/setFirstname', this.models.firstname);
        this.$store.commit('user/setLastname', this.models.lastname);
        this.$store.dispatch('user/updateUser');
        this.switchEditor();
      }
    },
    mounted() {
      this.models.firstname = this.firstname;
      this.models.lastname = this.lastname;
    }
  }
</script>

<style lang="css" scoped>
</style>
