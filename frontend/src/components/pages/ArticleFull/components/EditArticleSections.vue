<template lang="html">
  <form v-on:submit.prevent class="input-container input-container--clear-block p--2 mb--1 shadow">
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
      <button
        v-on:click="deleteSection"
        class="text-btn text-btn--secondary"
      >
        <i class="fas fa-trash-alt"></i>
      </button>
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
      index: {
        type: Number,
      },
      type: {
        type: String,
        default: 'section'
      },
      title: {
        type: String,
        default: ''
      },
      body: {
        type: String,
        default: ''
      },
      listItems: {
        type: Array,
        default() {return []}
      }
    },
    data() {
      return {
        isEditorMode: false,
        models: {
          title: '',
          body: '',
        },
      }
    },
    watch: {
      title() {
        this.models.title = this.title;
      },
      body() {
        this.models.body = this.body;
      },
    },
    methods: {
      processFile(event) {
        this.models.image = event.target.files[0];
      },
      updateSection() {
        this.$emit('updateSection', {
          index: this.index,
          title: this.models.title,
          body: this.models.body,
        });
        this.isEditorMode = !this.isEditorMode;
      },
      switchEditor() {
        this.isEditorMode = !this.isEditorMode;
      },
      deleteSection() {
        this.$emit('deleteSection', this.index);
      }
    },
    mounted() {
      this.models.title = this.title;
      this.models.body = this.body;
    }
  }
</script>

<style lang="css" scoped>
</style>
