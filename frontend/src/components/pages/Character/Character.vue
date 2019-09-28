<template lang="html">
  <div class="global-container p--1">
    <div class="sheet">
      <ProfileStats />

    </div>
  </div>
</template>

<script>
  import axios from '../../../plugins/axios.js';
  import ProfileStats from './components/ProfileStats.vue';


  export default {
    components: {
      ProfileStats
    },
    data() {
      return {

      }
    },
    computed: {
      character() {
        return this.$store.state.user.characters.filter(item => item._id == this.$route.params.id)[0];
      }
    },
    mounted() {
      console.log(this.character);

    }
  }
</script>

<style lang="scss" scoped>

</style>
