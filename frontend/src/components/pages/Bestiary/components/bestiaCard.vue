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
      <div class="beastia-card-body__stats-container">
        <table-item title="Level: " :body="lvl" ></table-item>
        <table-item title="Race: " :body="race" ></table-item>
        <table-item title="HP: " :body="hp" ></table-item>
        <table-item title="Energy: " :body="energy" ></table-item>
      </div>
      <h3 class="beastia-card-body__loot">Loot: </h3>
      <ul class="beastia-card-body__loot-list" v-if="loot != []">
        <li v-for="item in loot">{{ item.title }}</li>
      </ul>
      <span v-else>No loot</span>
    </div>
  </article>
</template>

<script>
  import '../../ads/fontawesome.js';
  import TableItem from './table_item.vue';

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
      TableItem: TableItem,
    }
}
</script>

<style scoped>
  $default-indent: 10px;
  $border-radius: 3px;
  $primary-color: #ADD8E6;
  $secondary-color: darken(#ADD8E6, 65%);

  .beastia-card {
    width: 500px;
    background-color: #FFFFFF;
    margin-bottom: $default-indent;
    border-radius: $border-radius;
    overflow: hidden; /* This for fixing header border-radius */
    color: $secondary-color;

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
      background-color: $primary-color;
      &__title {
        font-size: 25px;
        font-weight: bold;
        text-transform: capitalize;
        letter-spacing: 1px;
        text-shadow: 0 0 2px rgba($secondary-color, 0.3);
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

    &-body {
      display: flex;
      flex-direction: column;
      &__stats-container {
        display: flex;
        flex-wrap: wrap;
      }
      &__loot {
        padding: $default-indent;
        &-list {
          padding: $default-indent;
          text-transform: capitalize;
        }
      }
    }
  }
</style>
