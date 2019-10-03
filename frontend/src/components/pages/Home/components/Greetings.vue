<template lang="html">
  <div class="greetings">
    <div class="d-flex--relative">
      <div class="greetings__text-container">
        <h1 class="greetings__text greetings__text--title my--3">Добро пожаловать</h1>
        <p class="greetings__text mb--3">
          Вы попали на домашнюю страницу словестно-ролевой игры Хроношторм.
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
    <div v-show="isDescriptionOpen" class="">
      <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h2>
    </div>
  </div>
</template>

<script>
  import greetingsImg from '../../../../assets/img/greetings.jpg';

  export default {
    data() {
      return {
        greetingsImg,
        isDescriptionOpen: false
      }
    },
    methods: {
      switchDescription() {
        this.isDescriptionOpen = !this.isDescriptionOpen;
      }
    }
  }
</script>

<style lang="css" scoped>
</style>
