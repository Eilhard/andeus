<template lang="html">
  <div class="">
    <form class="input-container input-container--clear p--2" enctype="multipart/form-data">
      <label class="input-group mb--1">
        <span class="input-group__title input-group__title--user">
        Заголовок
        </span>
        <input
        class="input-group__text-input"
        type="text"
        v-model="models.title"
        >
      </label>
      <label class="input-group mb--1">
        <span class="input-group__title input-group__title--user">
          Текст
        </span>
        <input
        class="input-group__text-input"
        type="text"
        v-model="models.body"
        >
      </label>
      <label class="input-group mb--1">
        <span class="input-group__title input-group__title--user">
          Картинка
        </span>
        <input
          v-on:change="processFile($event)"
          class="input-group__text-input"
          name="image"
          type="file"
        >
      </label>
    </form>
    <button
      v-on:click="postNewArticle"
      class="input-btn input-btn--block m--1 "
    >
      Создать статью
    </button>
  </div>
</template>

<script>

  export default {

    data() {
      return {
        models: {
          title: '',
          body: '',
          image: ''
        }
      }
    },
    methods: {
      processFile(event) {
        this.models.image = event.target.files[0];
        console.log(this.models.image);
      },
      postNewArticle() {
        this.$store.dispatch('article/postNewArticle', {
          title: this.models.title,
          body: this.models.body,
          image: this.models.image,
        });
        this.$emit('switchEditor');
      }
    },
  }
</script>

<style lang="scss" scoped>
</style>
