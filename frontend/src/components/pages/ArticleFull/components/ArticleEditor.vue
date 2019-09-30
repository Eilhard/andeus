<template lang="html">
  <div class="">
    <ArticleHeader
      v-bind:mode="isEditorMode"
      v-on:switchEditor="postNewArticle"
    />
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
  </div>
</template>

<script>
  import ArticleHeader from './ArticleHeader.vue';

  export default {
    components: {
      ArticleHeader,
    },
    props: {
      isEditorMode: {
        type: Boolean,
        default: false
      }
    },
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
