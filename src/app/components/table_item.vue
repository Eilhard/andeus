<template>
  <div class="">
    <div class="">
      <span>{{ title }}</span>
    </div>
    <div class="">
      <span>{{ body }}</span>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      title: String,
      body: String
    },
    data () {
      return {

      }
    }
  }
</script>

<style scoped>
  
</style>
