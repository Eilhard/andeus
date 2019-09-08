<template lang="html">
  <div class="lost-page">
    <h1>404 page</h1>
    <!-- <img class="lost-page__img" :src="lostImg"></img> -->
  <div>
</template>

<script>
  // import lostImg from '../img/lost_img.jpg';

  export default {
    data() {
      return {
        // lostImg
      }
    }
  }
</script>

<style lang="scss" scoped>
  .lost-page {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fcf0e4;
    &__img {
      width: 40vw;
      @media (max-width: 600px) {
        width: 100vw;
      }
    }
  }
</style>
