<template lang="html">
  <div class="global-container p--1">
    <h1>User page</h1>
    <CharacterEditor />
  </div>
</template>

<script>
  import CharacterEditor from './components/CharacterEditor.vue'

  export default {
    components: {
      CharacterEditor
    },
    data() {
      return {
        
      }
    }
  }
</script>

<style lang="scss" scoped>
</style>
