<template lang="html">
  <div class="app-container__main-holder">
    <bestia-editor
      v-bind:besties="besties"
      v-bind:selectDefault="bestiaEditorSelect"
      v-on:newBestia="newBestia($event)"
      v-on:updateBestia="updateBestia($event)"
      v-on:deleteBestia="deleteBestia($event)"
    ></bestia-editor>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
</style>
