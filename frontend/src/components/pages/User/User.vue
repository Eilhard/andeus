<template lang="html">
  <div class="global-container p--1">
    <h1>{{firstname}} user page</h1>
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
    },
    computed: {
      firstname() {
        return this.$store.state.user.firstname;
      }
    }
  }
</script>

<style lang="scss" scoped>
</style>
