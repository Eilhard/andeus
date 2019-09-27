<template lang="html">
  <div class="global-container p--1">
    <div class="sheet page-flex">
      <ArticleCard
        v-for="article in articles" :key="article._id"
        class="m--1"
        :title="article.title"
        :imgSrc="article.imgSrc"
      />
    </div>
  </div>
</template>

<script>
  import ArticleCard from './components/ArticleCard.vue';

  export default {
    components: {
      ArticleCard
    },
    computed: {
      articles() {
        return this.$store.state.article.articles;
      }
    },
    mounted() {
      if (this.articles.length > 0) return;
      this.$store.dispatch('article/getArticles');
    }
  }
</script>

<style lang="scss" scoped>
</style>
