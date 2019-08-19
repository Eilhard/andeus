<template>
  <article class="beastia-card">
    <header class="beastia-card-header">
      <h2 class="beastia-card-header__title">{{ name }}</h2>
      <button v-on:click="openBody" class="beastia-card-header__openBtn">
        <div v-show="isOpen">
          <i class="fas fa-chevron-up"></i>
        </div>
        <div v-show="!isOpen">
          <i class="fas fa-chevron-down"></i>
        </div>
      </button>
    </header>
    <div v-show="isOpen" class="beastia-card-body">

      <span class="beastia-card-header__lvl">lvl: {{ lvl }}</span>
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
  import '../ads/fontawesome.js';
  import TableItem from ''

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
        isOpen: false
      }
    },
    methods: {
      openBody() {
        if (this.isOpen) {
          this.isOpen = false;
        } else {
          this.isOpen = true;
        }
      }
    },
    components: {

    }
}
</script>

<style scoped>
  $default-indent: 10px;

  .beastia-card {
    width: 500px;
    background-color: #FFFFFF;
    margin-bottom: $default-indent;
    &:last-child {
      margin: 0;
    }
    &-header {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      height: 60px;
      padding: 0 $default-indent;
      background-color: lightblue;
      &__title {
        font-size: 25px;
        font-weight: bold;
        text-transform: capitalize;
        letter-spacing: 1px;
        text-shadow: 0 0 2px rgba(14, 13, 13, 0.3);
      }
      &__openBtn {
        display: inline;
        font-size: 25px;
        background: none;
        border: none;
        &:hover {
          cursor: pointer;
        }
      }
    }
  }
</style>
