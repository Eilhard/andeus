<template>
  <article class="card card--character">
    <div class="card-header">
      <div class="card-header-content">
        <h2 class="card-header__title card-header__title--character">{{nickname}}</h2>
        <span
          v-if="party"
          class="card-header__text card-header__text--character"
        >{{prefix.party}}{{party}}</span>
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
      <span>Деньги {{money}}</span>
      <span>Опыт {{experience}}</span>
    </div>
  </article>
</template>

<script>
  import '../../../../plugins/fontawesome.js';


  export default {
    props: {
      id: {
        type: String,
        default: ''
      },
      nickname: {
        type: String,
        default: 'Unknown'
      },
      party: {
        type: String,
        default: ''
      },
      money: {
        type: Array,
        default() { return [] }
      },
      experience: {
        type: Array,
        default() { return [] }
      },
    },
    data() {
      return {
        prefix: {
          group: 'Группа: '
        },
        isOpen: false,
      }
    },
    computed: {
      description() {
        return this.money.length + this.experience.length > 0;
      }
    },
    methods: {
      open() {
        this.isOpen = !this.isOpen;
      },
      openPage() {
        this.$router.push(`/character/${this.id}`);
      }
    }
  }
</script>

<style lang="scss" scoped>
</style>
