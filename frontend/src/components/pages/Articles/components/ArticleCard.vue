<template>
  <article v-on:click="openPage" class="card card--article">
    <img
      class="card-img card-img--article"
      v-bind:src="(imgSrc) ? `${api}${imgSrc}` : lostImg"
      v-bind:alt="`${title} img`"
    >
    <div class="card-header">
      <div class="card-header-content card-header-content--grow">
        <h2 class="card-header__title">{{title | titleCutter}}</h2>
      </div>
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
      }
    },

  }
</script>

<style scoped>
</style>
