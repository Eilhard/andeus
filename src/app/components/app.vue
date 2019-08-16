<template>
  <div>
    <title-vue v-bind:name="pokemon.name":say="pokemon.say":lvl="pokemon.lvl" ></title-vue>
    <title-vue v-bind:say="pokemon.say":lvl="pokemon.lvl" ></title-vue>
  </div>
</template>

<script>
  import Title from './title.vue';

  export default {
    data() {
      return {
          pokemon: {
            name: "Charmander",
            say: "Bulba-bulba",
            lvl: 10
          },
      }
    },
    components: {
      titleVue: Title
    }
  }

</script>

<style>

</style>
