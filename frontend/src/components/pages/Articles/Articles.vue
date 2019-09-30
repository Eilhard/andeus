<template lang="html">
  <div class="global-container p--1">
    <div class="sheet">
      <ArticleControllers
        v-bind:mode="isEditorMode"
        v-bind:modeDel="isDeleteMode"
        v-on:switchEditor="switchEditor"
        v-on:switchDeleteMode="switchDeleteMode"
      />
      <div v-show="isEditorMode" class="page-flex p--2">
        <NewArticle
          v-on:switchEditor="switchEditor"
        />
      </div>
      <div v-show="!isEditorMode" class="page-flex p--2">
        <ArticleCard
          v-for="article in articles" :key="article._id"
          class="m--1"
          v-bind:id="article._id"
          v-bind:title="article.title"
          v-bind:imgSrc="article.imgSrc"
          v-bind:modeDel="isDeleteMode"
        />
      </div>
    </div>
  </div>
</template>

<script>
  import ArticleCard from './components/ArticleCard.vue';
  import ArticleControllers from './components/ArticleControllers.vue';
  import NewArticle from './components/NewArticle.vue';

  export default {
    components: {
      NewArticle,
      ArticleCard,
      ArticleControllers
    },
    data() {
      return {
        isEditorMode: false,
        isDeleteMode: false,
      }
    },
    computed: {
      articles() {
        return this.$store.getters['article/displayedArticles'];
      }
    },
    methods: {
      switchEditor() {
        this.isEditorMode = !this.isEditorMode;
      },
      switchDeleteMode() {
        this.isDeleteMode = !this.isDeleteMode;
      },
    },
    mounted() {
      if (this.articles.length > 0) return;
      this.$store.dispatch('article/getArticles');
    }
  }
</script>

<style lang="scss" scoped>
</style>
