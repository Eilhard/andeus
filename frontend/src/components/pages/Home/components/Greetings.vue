<template lang="html">
  <div class="greetings">
    <div class="d-flex--relative">
      <div class="greetings__text-container">
        <h1 class="greetings__text greetings__text--title my--3">Добро пожаловать</h1>
        <p class="greetings__text mb--3">
          Вы попали на домашнюю страницу словестной ролевой игры Хроношторм.
        </p>
        <button
          v-on:click="switchDescription"
          v-show="!isDescriptionOpen"
          class="text-btn text-btn--transparent text-btn--large greetings__text"
        >
          <i class="fas fa-chevron-down"></i>
        </button>
        <button
          v-on:click="switchDescription"
          v-show="isDescriptionOpen"
          class="text-btn text-btn--transparent text-btn--large greetings__text"
        >
          <i class="fas fa-chevron-up"></i>
        </button>
      </div>
      <img
        class="greetings__img"
        v-bind:src="greetingsImg"
        alt="greetings image"
      >
    </div>
    <div
      v-show="isDescriptionOpen"
      class="greetings-section p--3 anchor-container"
    >
      <div class="anchor" id="description"></div>
      <GreetingArticle />
    </div>
  </div>
</template>

<script>
  import greetingsImg from '../../../../assets/img/greetings.jpg';
  import GreetingArticle from './GreetingArticle.vue';

  export default {
    components: {
      GreetingArticle
    },
    data() {
      return {
        greetingsImg,
        isDescriptionOpen: false,
      }
    },
    methods: {
      switchDescription() {
        this.isDescriptionOpen = !this.isDescriptionOpen;
        if (this.isDescriptionOpen) {
          this.$router.push({ hash: '#description' });
        } else {
          this.$router.push({ path: '' });
        }
      }
    },
    mounted() {
      if (this.$route.hash) {
        this.isDescriptionOpen = true;
      }
    },
  }
</script>

<style lang="css" scoped>
</style>
