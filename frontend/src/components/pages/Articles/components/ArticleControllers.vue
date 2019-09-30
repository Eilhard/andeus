<template lang="html">
    <nav class="page-nav page-nav--space-between px--3">
      <form class="input-container input-container--clear">
        <label
          class="input-group m--1"
        >
          <input
            v-model="inputs.searchTitle"
            placeholder="Найти статью..."
            class="input-group__text-input"
          >
          <button
            v-on:search="search"
            class="input-group__btn-append input-group__btn-append--dark"
          >
            <i class="fas fa-search"></i>
          </button>
        </label>
      </form>
      <div class="page-nav-controls" v-show="isMaster">
        <button
          v-on:click="deleteArticles"
          v-show="!modeDel"
          class="text-btn text-btn--secondary"
        >
          <i class="fas fa-trash-alt"></i>
        </button>
        <button
          v-on:click="deleteArticles"
          v-show="modeDel"
          class="text-btn text-btn--secondary"
        >
          <i class="far fa-trash-alt"></i>
        </button>
        <button
          v-on:click="switchEditor"
          v-show="mode"
          class="text-btn text-btn--secondary"
        >
          <i class="fas fa-times"></i>
        </button>
        <button
          v-on:click="switchEditor"
          v-show="!mode"
          class="text-btn text-btn--secondary"
        >
          <i class="fas fa-plus"></i>
        </button>
      </div>

    </nav>
</template>

<script>

  export default {
    props: {
      mode: {
        type: Boolean,
        default: false
      },
      modeDel: {
        type: Boolean,
        default: false
      }
    },
    data(){
      return {
        isMaster: true,
        inputs: {
          searchTitle: ''
        }
      }
    },
    methods: {
      search() {

      },
      switchEditor() {
        this.$emit('switchEditor');
      },
      deleteArticles() {
        this.$emit('switchDeleteMode');
      }
    }
  }
</script>

<style lang="scss" scoped>
</style>
