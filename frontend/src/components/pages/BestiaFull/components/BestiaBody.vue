<template lang="html">
  <div class="bestia-body">
    <div class="d-flex-row d-flex--j-s-b">
      <div class="d-flex-col d-flex-col--block">
        <ul class="list-group">
          <li v-if="race" class="list-group-item mb--1">
            <span class="list-group-item__title">
              Раса
            </span>
            <span class="list-group-item__text">
              {{race}}
            </span>
          </li>
          <li v-if="lvl" class="list-group-item mb--1">
            <span class="list-group-item__title">
              Уровень
            </span>
            <span class="list-group-item__text">
              {{lvl}}
            </span>
          </li>
          <li v-if="hp" class="list-group-item mb--1">
            <span class="list-group-item__title">
              Здоровье
            </span>
            <span class="list-group-item__text">
              {{hp}}
            </span>
          </li>
          <li v-if="energy" class="list-group-item mb--1">
            <span class="list-group-item__title">
              Энергия
            </span>
            <span class="list-group-item__text">
              {{energy}}
            </span>
          </li>
        </ul>
        <div v-if="description">
          <div class="text-header">
            <h2 class="text-header__h2">Описание</h2>
          </div>
          <div class="text-body">
            <p>{{description}}</p>
          </div>
        </div>
      </div>
      <div v-if="imgSrc" class="text-media bestia-body__img-container ml--2">
        <img class="text-media__img bestia-body__img" v-bind:src="`${api}${imgSrc}`" v-bind:alt="name">
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
      race: {
        type: String,
        default: ''
      },
      lvl: {
        type: Number,
        default: 0
      },
      hp: {
        type: Number,
        default: 0
      },
      energy: {
        type: Number,
        default: 0
      },
      description: {
        type: String,
        default: ''
      },
      imgSrc: {
        type: String,
        default: ''
      },
    },
    computed: {
      api() {
        return this.$store.state.api;
      }
    },
  }
</script>

<style lang="scss" scoped>
</style>
