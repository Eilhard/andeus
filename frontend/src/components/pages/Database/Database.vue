<template lang="html">
  <div class="global-container global-container--full-height p--1 sheet">
    <nav class="tabs-menu">
      <router-link
        to="/database/"
        tag="button"
        class="tabs-menu__tab tabs-menu__tab-group tabs-menu__tab--page"
        active-class="tabs-menu__tab--active"
      >
        <span class="tabs-menu__tab-group-title">{{links.bestiary}}</span>
        <i class="fas fa-dragon"></i>
      </router-link>
      <router-link
        to="/database/items"
        tag="button"
        class="tabs-menu__tab tabs-menu__tab-group tabs-menu__tab--page"
        active-class="tabs-menu__tab--active"
      >
        <span class="tabs-menu__tab-group-title">{{links.items}}</span>
        <i class="fas fa-feather-alt"></i>
      </router-link>

    </nav>


    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        links: {
          bestiary: 'Бестиарий',
          items: 'Предметы'
        }
      }
    },
  }
</script>

<style lang="css" scoped>
</style>
