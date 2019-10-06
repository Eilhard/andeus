<template lang="html">
  <div class="user-home">
    <nav class="page-nav page-nav--space-between p--2">
      <h2 class="text-header__h2 text-header__h2--home-page">С возвращением, {{firstname}}</h2>
    </nav>
    <div class="p--2">
      <div class="text-header">
        <h2 class="text-header__h2">Последние статьи</h2>
      </div>
    </div>
    <div class="user-home-articles p--1">
      <ArticleCard
        class="m--1"
        v-for="article in articles"
        v-bind:key="`article-${article._id}`"
        v-bind:id="article._id"
        v-bind:title="article.title"
        v-bind:imgSrc="article.imgSrc"
      />
    </div>
  </div>
</template>

<script>
  import ArticleCard from './ArticleCard.vue';

  export default {
    components: {
      ArticleCard,
    },
    data() {
      return {

      }
    },
    computed: {
      firstname() {
        return this.$store.state.user.firstname;
      },
      articles() {
        return this.$store.getters['article/lastArticles'].slice(0, 4);
      }
    },
    mounted() {
      if (this.articles.length > 0) return;
      this.$store.dispatch('article/getArticles');
    }
  }
</script>

<style lang="css" scoped>
</style>
