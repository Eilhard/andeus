<template lang="html">
  <div class="">
    <div class="d-flex">
      <div class="">
        Hello
      </div>
      <div v-if="imgSrc" class="text-media">
        <img class="text-media__img" v-bind:src="`${api}${imgSrc}`" v-bind:alt="name">
      </div>
    </div>

    <div class="text-body">
      <p>{{description}}</p>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      name: {
        type: String,
        default: ''
      },
      race: {
        type: String,
        default: ''
      },
      lvl: {
        type: Number,
        default: 0
      },
      hp: {
        type: Number,
        default: 0
      },
      energy: {
        type: Number,
        default: 0
      },
      description: {
        type: String,
        default: ''
      },
      imgSrc: {
        type: String,
        default: ''
      },
    },
    computed: {
      api() {
        return this.$store.state.api;
      }
    },
  }
</script>

<style lang="scss" scoped>
</style>
