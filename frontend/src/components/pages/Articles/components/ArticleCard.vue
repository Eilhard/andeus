<template>
  <article class="card card--article">
    <img
      v-on:click="openPage"
      class="card-img card-img--article"
      v-bind:src="(imgSrc) ? `${api}${imgSrc}` : lostImg"
      v-bind:alt="`${title} img`"
    >
    <div class="card-header">
      <div v-on:click="openPage" class="card-header-content card-header-content--grow">
        <h2 class="card-header__title">{{title | titleCutter}}</h2>
      </div>
      <button
        v-on:click="deleteArticle"
        v-show="modeDel"
        class="text-btn text-btn--transparent"
      >
        <i class="fas fa-trash-alt"></i>
      </button>
    </div>
  </article>
</template>

<script>
  import lostImg from '../../../../assets/img/lost_img_articles.jpg';

  export default {
    filters: {
      titleCutter(value) {
        if (!value) return '';
        if (value.length < 23) return value;
        return `${value.slice(0, 20)}...`;
      }
    },
    props: {
      id: {
        type: String,
        default: ''
      },
      title: {
        type: String,
        default: 'unknown article'
      },
      imgSrc: {
        type: String,
        default: ''
      },
      modeDel: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        lostImg
      }
    },
    computed: {
      api() {
        return this.$store.state.api;
      }
    },
    methods: {
      openPage() {
        this.$router.push(`/article/${this.id}`);
      },
      deleteArticle() {
        this.$store.dispatch('article/deleteArticle', this.id);
      }
    },

  }
</script>

<style scoped>
</style>
