<template lang="html">
  <form v-on:submit.prevent class="input-container input-container--clear-block p--2" enctype="multipart/form-data">
    <label class="input-group mb--1">
      <span class="input-group__title input-group__title--user">
      Заголовок секции
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
        Текст секции
      </span>
      <textarea
      v-bind:disabled="!isEditorMode"
      class="input-group__textarea"
      v-model="models.body"
      >
      </textarea>
    </label>
    <button
      v-show="!isEditorMode"
      v-on:click="switchEditor"
      class="input-btn input-btn--block m--1 "
    >
      Редактировать секцию
    </button>
    <button
      v-show="isEditorMode"
      v-on:click="updateSection"
      class="input-btn input-btn--block m--1 "
    >
      Сохранить секцию
    </button>
  </form>
</template>

<script>

  export default {
    props: {
      id: {
        type: Number,
        default: 0
      }
    },
    data() {
      return {
        isEditorMode: true,
        models: {
          title: '',
          body: '',
        },
      }
    },
    methods: {
      processFile(event) {
        this.models.image = event.target.files[0];
        console.log(this.models.image);
      },
      updateSection() {
        this.$emit('updateSection', {
          id: this.id,
          title: this.models.title,
          body: this.models.body,
        });
        this.isEditorMode = !this.isEditorMode;
      },
      switchEditor() {
        this.isEditorMode = !this.isEditorMode;
      }
    }
  }
</script>

<style lang="css" scoped>
</style>
