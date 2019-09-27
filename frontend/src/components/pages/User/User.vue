<template lang="html">
  <div class="global-container p--2">
    <div class="sheet p--2">
      <PersonalProfile />
      <UserCharacters />
    </div>

  </div>
</template>

<script>
  import '../../../plugins/fontawesome.js';
  import PersonalProfile from './components/PersonalProfile.vue';
  import UserCharacters from './components/UserCharacters.vue';

  export default {
    components: {
      PersonalProfile,
      UserCharacters
    },
    data() {
      return {

      }
    },
  }
</script>

<style lang="scss" scoped>
</style>
