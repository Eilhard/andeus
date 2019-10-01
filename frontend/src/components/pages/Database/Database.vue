<template lang="html">
  <div class="global-container p--1">
    <div class="sheet">
      <nav class="tabs-menu tabs-menu--dark">
        <router-link
          to="/database/"
          exact
          tag="button"
          class="tabs-menu__tab tabs-menu__tab--dark tabs-menu__tab-group tabs-menu__tab--page"
          active-class="tabs-menu__tab--active-dark"
        >
          <span class="tabs-menu__tab-group-title">{{links.bestiary}}</span>
          <i class="fas fa-dragon"></i>
        </router-link>
        <!-- <router-link
          to="/database/items"
          tag="button"
          class="tabs-menu__tab tabs-menu__tab--dark tabs-menu__tab-group tabs-menu__tab--page"
          active-class="tabs-menu__tab--active-dark"
        >
          <span class="tabs-menu__tab-group-title">{{links.items}}</span>
          <i class="fas fa-feather-alt"></i>
        </router-link> -->

      </nav>
      <router-view></router-view>
    </div>
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
