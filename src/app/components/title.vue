<template>
  <h1 class="title">{{ say }} {{ name }} Lvl: {{ lvl }}</h1>
</template>

<script>
export default {
    // props: [ 'name', 'say' ],
    props: {
      name: {
        type: String,
        default: 'Unknown pokemon'
      },
      say: String,
      lvl: Number
    },
    data () {
      return {
        msg: 'Welcome to Vue.js'
      }
    }
}
</script>

<style scoped>
  .title {
    color: lightblue;
  }
</style>
