<template lang="html">
  <form v-on:submit.prevent class="input-container input-container--clear-block p--2 shadow">
    <label class="input-group mb--1">
      <span class="input-group__title input-group__title--user">
        Заголовок
      </span>
      <input
        v-bind:disabled="!isEditorMode"
        class="input-group__text-input"
        type="text"
        v-model="models.title"
      >
    </label>
    <label class="input-group input-group--textarea mb--1">
      <span class="input-group__title input-group__title--textarea">
        Текст
      </span>
      <textarea
        v-bind:disabled="!isEditorMode"
        class="input-group__textarea"
        v-model="models.body"
      >
      </textarea>
    </label>
    <label class="input-group mb--1">
      <input
        v-bind:disabled="!isEditorMode"
        v-on:change="processFile($event)"
        class="input-group__file-input"
        type="file"
      >
      <span class="input-group__title input-group__title--user">
        Картинка
      </span>
      <span
        class="input-group__text-input"
        v-bind:class="{'input-group__file-input--disabled': !isEditorMode}"
      >
        {{models.image.name}}
      </span>
      <span class="text-btn text-btn--secondary">
        <i class="fas fa-download"></i>
      </span>
    </label>
    <button
      v-show="!isEditorMode"
      v-on:click="switchEditor"
      class="input-btn input-btn--block m--1 "
    >
      Редактировать
    </button>
    <button
      v-show="isEditorMode"
      v-on:click="updateMain"
      class="input-btn input-btn--block m--1 "
    >
      Сохранить секцию
    </button>
  </form>
</template>

<script>

  export default {
    props: {
      title: {
        type: String,
        default: ''
      },
      body: {
        type: String,
        default: ''
      },
    },
    data() {
      return {
        isEditorMode: false,
        models: {
          title: '',
          body: '',
          image: ''
        },
        sections: [],
        sectionImages: []
      }
    },
    methods: {
      processFile(event) {
        this.models.image = event.target.files[0];
      },
      updateMain() {
        this.$emit('updateMain', {
          title: this.models.title,
          body: this.models.body,
          image: this.models.image,
        });
        this.isEditorMode = !this.isEditorMode;
      },
      switchEditor() {
        this.isEditorMode = !this.isEditorMode;
      }
    },
    mounted() {
      this.models.title = this.title;
      this.models.body = this.body;
    }
  }
</script>

<style lang="scss" scoped>
</style>
