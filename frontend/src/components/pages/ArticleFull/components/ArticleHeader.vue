<template lang="html">
  <div>
    <div class="text-header text-header--borderless">
      <h1 v-if="title" class="text-header__h1">{{title}}</h1>
      <div v-if="!title"></div>
      <div class="d-flex">
        <div v-if="isMaster" class="d-flex">
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
        <button
          v-on:click="backToArticles"
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
      title: {
        type: String,
        default: ''
      },
      mode: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      isMaster() {
        return this.$store.state.isMaster;
      }
    },
    methods: {
      switchEditor() {
        this.$emit('switchEditor');
      },
      backToArticles() {
        this.$router.back();
      }
    },

  }
</script>

<style lang="scss" scoped>
</style>
