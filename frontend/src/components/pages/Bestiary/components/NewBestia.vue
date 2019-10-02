<template lang="html">
  <div class="page-flex page-flex--block">
    <form v-on:submit.prevent class="input-container sheet input-container--clear-block p--2 my--1">
      <label
        v-for="(item, index) in inputs"
        v-bind:key="`bestia-input_${index}`"
        class="input-group mb--1"
      >
        <span class="input-group__title input-group__title--character">
          {{item.title}}
        </span>
        <input
          class="input-group__text-input"
          v-bind:type="item.type"
          v-model="item.state"
        >
      </label>

      <label class="input-group input-group--textarea mb--1">
        <span class="input-group__title input-group__title--textarea">
          {{description.title}}
        </span>
        <textarea
          class="input-group__textarea"
          v-model="description.state"
        >
        </textarea>
      </label>
      <label class="input-group mb--1">
        <input
          v-on:change="processFile($event)"
          class="input-group__file-input"
          type="file"
        >
        <span class="input-group__title input-group__title--user">
          Картинка
        </span>
        <span class="input-group__text-input">
          {{image.name}}
        </span>
        <span class="text-btn text-btn--secondary">
          <i class="fas fa-download"></i>
        </span>
      </label>
      <button
        v-on:click="postNewBestia"
        class="input-btn input-btn--block"
      >
        Создать существо
      </button>
    </form>
  </div>
</template>

<script>

  export default {
    components: {

    },
    data() {
      return {
        inputs: [
          {
            id: 'name',
            title: "Название",
            type: "text",
            state: ''
          },
          {
            id: 'race',
            title: "Раса",
            type: "text",
            state: ''
          },
          {
            id: 'lvl',
            title: "Уровень",
            type: "number",
            state: ''
          },
          {
            id: 'hp',
            title: "Здоровье",
            type: "number",
            state: ''
          },
          {
            id: 'energy',
            title: "Энергия",
            type: "number",
            state: ''
          }
        ],
        description: {
          title: "Описание",
          state: ''
        },
        image: '',
        loot: [],
      }
    },
    methods: {
      processFile(event) {
        this.image = event.target.files[0];
      },
      postNewBestia() {
        let name, race, lvl, hp, energy;
        this.inputs.forEach((item, index) => {
          if (item.id == 'name') name =  item.state;
          if (item.id == 'race') race =  item.state;
          if (item.id == 'lvl') lvl =  item.state;
          if (item.id == 'hp') hp =  item.state;
          if (item.id == 'energy') energy = item.state;
        });
        this.$store.dispatch('bestiary/postNewBestia', {
          name: name,
          race: race,
          lvl: lvl,
          hp: hp,
          energy: energy,
          description: this.description.state,
          image: this.image,
          loot: this.loot
        });
        this.$emit('switchEditor');
      },
    },
  }
</script>

<style lang="scss" scoped>
</style>
