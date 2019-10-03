<template lang="html">
  <div class="">
    <BestiaHeader
      class="sheet mb--1"
      v-bind:mode="isEditorMode"
      v-on:switchEditor="updateBestia"
    />
    <div class="">
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
            {{ (image.name) ? image.name : currentImgTitle }}
          </span>
          <span class="text-btn text-btn--secondary">
            <i class="fas fa-download"></i>
          </span>
        </label>
      </form>
    </div>
  </div>
</template>

<script>
  import BestiaHeader from './BestiaHeader.vue';

  export default {
    components: {
      BestiaHeader,
    },
    props: {
      isEditorMode: {
        type: Boolean,
        default: false
      },
      bestia: Object,
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
        currentImgTitle: '',
        image: '',
        loot: [],
      }
    },
    methods: {
      processFile(event) {
        this.image = event.target.files[0];
      },
      updateBestia() {
        let name, race, lvl, hp, energy;
        this.inputs.forEach((item, index) => {
          if (item.id == 'name') name =  item.state;
          if (item.id == 'race') race =  item.state;
          if (item.id == 'lvl') lvl =  item.state;
          if (item.id == 'hp') hp =  item.state;
          if (item.id == 'energy') energy = item.state;
        });
        this.$store.dispatch('bestiary/updateBestia', {
          id: this.bestia._id,
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
      setInputFields() {
        this.inputs.forEach((item, index) => {
          if (item.id == 'name') {
            this.$set(item, 'state', this.bestia.name);
          }
          if (item.id == 'race') {
            this.$set(item, 'state', this.bestia.race);
          }
          if (item.id == 'lvl') {
            this.$set(item, 'state', this.bestia.lvl);
          }
          if (item.id == 'hp') {
            this.$set(item, 'state', this.bestia.hp);
          }
          if (item.id == 'energy') {
            this.$set(item, 'state', this.bestia.energy);
          }
        });
        let reg = /\d{8}-\d{6}-\d{3}-(.+)/;
        if (this.bestia.imgSrc) {
          this.currentImgTitle = reg.exec(this.bestia.imgSrc)[1];
        }
        this.description.state = this.bestia.description;
        this.loot = this.bestia.loot;
      }
    },
    mounted() {
      this.setInputFields();
    }
  }
</script>

<style lang="scss" scoped>
</style>
