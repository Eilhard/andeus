<template lang="html">
  <div class="">
    <div class="text-header">
      <h2 class="text-header__h2">{{title}}</h2>
    </div>
    <div class="text-body">
      <p>{{body}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    body: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="css" scoped>
</style>
