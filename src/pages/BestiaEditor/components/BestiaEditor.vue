<template>
  <div class="bestia-editor">
    <div class="bestia-editor__container">
      <select class="bestia-editor__select" v-model="id" v-on:change="creatureSelect">
        <option v-if="besties" v-for="bestia in besties" :value="bestia.id">{{bestia.name}}</option>
      </select>
      <input class="bestia-editor__input" type="text" placeholder="Name" v-model='name'>
      <input class="bestia-editor__input" type="text" placeholder="Level" v-model.number='level'>
      <input class="bestia-editor__input" type="text" placeholder="Race" v-model='race'>
      <input class="bestia-editor__input" type="text" placeholder="Health" v-model.number='health'>
      <input class="bestia-editor__input" type="text" placeholder="Energy" v-model.number='energy'>
    </div>
    <div class="bestia-editor__container">
      <button class="bestia-editor__btn" v-on:click="addBestia">Add</button>
      <button class="bestia-editor__btn" v-on:click="patchBestia">Update</button>
      <button class="bestia-editor__btn" v-on:click="deleteBestia">Delete</button>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    selectDefault: {
      default: ""
    },
    besties: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      id: null,
      name: "",
      level: "",
      race: "",
      health: "",
      energy: "",
      loot: [ { title: "Jellopy", min: 1, max: 1 } ]
    }
  },
  watch: {
    selectDefault() {
      this.id = this.selectDefault;
    }
  },
  methods: {
    creatureSelect() {
      let [ bestia ] = this.besties.filter(item => item.id == this.id);
      this.name = bestia.name;
      this.race = bestia.race;
      this.level = bestia.lvl;
      this.health = bestia.hp;
      this.energy = bestia.energy;
      this.loot = bestia.loot;
    },
    addBestia() {
      let bestia = {
        name: this.name,
        race: this.race,
        lvl: this.level,
        hp: this.health,
        energy: this.energy,
        loot: this.loot,
      }
      this.$emit('newBestia', bestia);
    },
    patchBestia() {
      let bestia = {
        id: this.id,
        name: this.name,
        race: this.race,
        lvl: this.level,
        hp: this.health,
        energy: this.energy,
        loot: this.loot,
      }
      this.$emit('updateBestia', bestia);
    },
    deleteBestia() {
      this.$emit('deleteBestia', this.id);
      this.name = "";
      this.race = "";
      this.level = "";
      this.health = "";
      this.energy = "";
      this.loot = "";
    }
  },
}
</script>

<style scoped>
  $default-indent: 10px;
  $input-indent: 5px;
  $border-radius: 3px;
  $bg-color: #ffffff;
  $primary-color: #98d9e8;
  @mixin input-base {
    width: 250px;
    padding: 5px;
    margin-bottom: $input-indent;
    border-radius: $border-radius;
    box-sizing: border-box;
    border: 2px solid $primary-color;
    &:last-child {
      margin: 0;
    }
  }

  .bestia-editor {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 300px;
    height: 350px;
    background-color: $bg-color;
    border-radius: $border-radius;
    &__container {
      display: flex;
      flex-direction: column;

    }
    &__select {
      @include input-base;
      text-transform: capitalize;
    }
    &__input {
      @include input-base;
    }
    &__btn {
      @include input-base;
      background-color: $primary-color;
      border: none;
      &:hover {
        cursor: pointer;
        background-color: darken($primary-color, 5%);
      }
    }
  }
</style>
