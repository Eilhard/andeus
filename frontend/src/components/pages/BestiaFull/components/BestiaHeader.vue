<template lang="html">
  <div>
    <div class="text-header text-header--borderless">
      <h1 v-if="name" class="text-header__h1">{{name}}</h1>
      <div v-if="!name"></div>
      <div class="d-flex">
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
        <button
          v-on:click="backToBestiary"
          class="text-btn text-btn--white"
        >
          <i class="fas fa-arrow-right"></i>
        </button>
      </div>
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
      mode: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      switchEditor() {
        this.$emit('switchEditor');
      },
      backToBestiary() {
        this.$router.back();
      }
    },

  }
</script>

<style lang="scss" scoped>
</style>
