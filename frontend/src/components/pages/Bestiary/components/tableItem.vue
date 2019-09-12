<template>
  <div class="stat-item">
    <div class="stat-item__col">
      <span>{{ title }}</span>
    </div>
    <div class="stat-item__col stat-item__col--wide">
      <span>{{ body }}</span>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['title', 'body'],
    data () {
      return {

      }
    }
  }
</script>

<style scoped>
  $default-indent: 10px;
  $primary-color: #ADD8E6;

  .stat-item {
    display: flex;
    width: 50%;

    &__col {
      width: 30%;
      padding: $default-indent;
      font-family: serif;
      background-color: lighten($primary-color, 5%);

      &--wide {
        width: 70%;
        background-color: lighten($primary-color, 10%);
      }
    }
  }
</style>
