<template>
  <article class="beastia-card">
    <header>
      <h2 class="title">{{ name }}</h2>
      <h3>Lvl: {{ lvl }}</h3>
    </header>
    <div class="">
      Race: {{ race }}
      Loot:
      <ul v-if="loot != []">
        <li v-for="item in loot">{{ item.title }}</li>
      </ul>
      <span v-else>No loot</span>
    </div>
  </article>
</template>

<script>
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
      hp: {
        type: Number,
        default: 1
      },
      energy: {
        type: Number,
        default: 1
      },
      loot: {
        type: Array,
        default() {
          return [];
        }
      },
    },
    data () {
      return {
        msg: 'Welcome to Vue.js'
      }
    }
}
</script>

<style scoped>
  .beastia-card {

  }
  .title {
    color: lightblue;
  }
</style>
