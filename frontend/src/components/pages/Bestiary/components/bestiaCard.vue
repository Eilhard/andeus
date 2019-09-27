<template>
  <article class="card">
    <div class="card-header">
      <div class="card-header-content">
        <h2 class="card-header__title card-header__title--bestia">{{name}}</h2>
        <span
          class="card-header__text card-header__text--bestia"
        >{{race}}</span>
        <span
          class="card-header__text card-header__text--bestia"
        >{{prefix.lvl}}{{lvl}}</span>
      </div>
      <div class="card-append">
        <button v-on:click="openPage" class="card-append__btn">
          <i class="fas fa-book-open"></i>
        </button>
        <button v-if="description" v-on:click="open" class="card-append__btn">
          <span v-show="isOpen">
            <i class="fas fa-chevron-up"></i>
          </span>
          <span v-show="!isOpen">
            <i class="fas fa-chevron-down"></i>
          </span>
        </button>
      </div>
    </div>
    <div v-if="description" v-show="isOpen" class="card-body">
      <p>{{description}}</p>
    </div>
  </article>
</template>

<script>
  import '../../../../plugins/fontawesome.js';


  export default {
    props: {
      name: {
        type: String,
        default: 'unknown creature'
      },
      race: {
        type: String,
        default: 'unknown race'
      },
      lvl: {
        type: Number,
        default: 1
      },
      description: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
        prefix: {
          lvl: 'Уровень: '
        },
        isOpen: false,
      }
    },
    methods: {
      open() {
        this.isOpen = !this.isOpen;
      },
      openPage() {

      }
    }
  }
</script>

<style scoped>
</style>
