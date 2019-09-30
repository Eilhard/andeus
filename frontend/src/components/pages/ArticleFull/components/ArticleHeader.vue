<template lang="html">
  <div>
    <div class="text-header text-header--borderless">
      <h1 v-if="title" class="text-header__h1">{{title}}</h1>
      <div v-if="!title"></div>
      <button
        v-on:click="switchEditor"
        v-show="!mode"
        class="text-btn text-btn--white"
      >
        <i class="fas fa-pencil-alt"></i>
      </button>
      <button
        v-on:click="switchEditor"
        v-show="mode"
        class="text-btn text-btn--white"
      >
        <i class="fas fa-save"></i>
      </button>
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
      mode: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      switchEditor() {
        this.$emit('switchEditor');
      }
    }
  }
</script>

<style lang="scss" scoped>
</style>
