<template>
  <nav class="global-nav">
    <router-link :to="{ name: '', params: {} }"></router-link>
    <!-- <button v-for="btn in buttons"
     v-on:click="navButtons(btn)"
     :class="[ 'global-nav__button', btn.pressed ? 'global-nav__button--pressed' : '']"
   >{{btn.name}}</button> -->
  </nav>
</template>

<script>
export default {
  name: 'GlobalNav',
  data() {
    return {
      buttons: [
        {
          name: 'Bestiary',
          pressed: false
        },
        {
          name: 'Editor',
          pressed: false
        },
      ]
    }
  },
  methods: {
    navButtons(btn) {
      this.buttons.forEach(item => { item.pressed = false });
      btn.pressed = !btn.pressed;
      this.$emit('navBtnClick', btn.name.toLowerCase());
    }
  }
}
</script>

<style scoped>
  $default-indent: 10px;

  .global-nav {
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    flex-wrap: wrap;
    width: 100%;
    height: 60px;
    color: #FFFFFF;
    background-color: #323232;
    @media (max-width: 400px) {
      height: auto;
    }
    &__button {
      width: 100px;
      height: 100%;
      font-family: monospace;
      font-size: 16px;
      font-weight: bold;
      text-transform: uppercase;
      border: none;
      color: #747474;
      background-color: #323232;
      &--pressed {
        color: #FFFFFF;
      }
      &:hover {
        color: #FFFFFF;
        background-color: darken(#323232, 5%);
        cursor: pointer;
      }
      @media (max-width: 400px) {
        width: 100%;
        height: 40px;
      }
    }
  }
</style>
