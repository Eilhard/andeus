<template lang="html">
  <div class="global-container p--2">
    <div v-if="article"  class="sheet">
      <div v-show="!isEditorMode" class="p--2">
        <ArticleHeader
          v-bind:title="article.title"
          v-bind:mode="isEditorMode"
          v-on:switchEditor="switchEditor"
        />
        <div v-if="article.imgSrc" class="text-media">
          <img class="text-media__img" v-bind:src="`${api}${article.imgSrc}`" v-bind:alt="article.title">
        </div>
        <div class="text-body">
          <p>{{article.body}}</p>
        </div>
        <ArticleSection
          v-for="(section, index) in article.sections"
          v-bind:key="`article-section-${index}`"
          v-bind:title="section.sectionTitle"
          v-bind:body="section.sectionBody"
        />
      </div>
      <div v-show="isEditorMode" class="p--2">
        <ArticleEditor
          v-bind:article="article"
          v-on:switchEditor="switchEditor"
          v-bind:isEditorMode="isEditorMode"
        />
      </div>
    </div>
    
  </div>
</template>

<script>
  import ArticleHeader from './components/ArticleHeader.vue';
  import ArticleSection from './components/ArticleSection.vue';
  import ArticleEditor from './components/ArticleEditor.vue';

  export default {
    components: {
      ArticleHeader,
      ArticleSection,
      ArticleEditor
    },
    data() {
      return {
        isEditorMode: false,
      }
    },
    computed: {
      article() {
        return this.$store.state.article.articles.filter(item => item._id == this.$route.params.id)[0];
      },
      api() {
        return this.$store.state.api;
      }
    },
    methods: {
      switchEditor() {
        this.isEditorMode = !this.isEditorMode;
      },
    },
    mounted() {
      if (this.$store.state.article.articles.length < 1) {
        this.$store.dispatch('article/getArticles');
      }
    }
  }
</script>

<style lang="scss" scoped>
</style>
