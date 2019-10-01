<template lang="html">
  <div class="">
    <div class="p--1">
      <form class="input-container input-container--clear p--2">
        <label
          v-for="(item, index) in inputs"
          v-bind:key="`secondary_${index}`"
          class="input-group mb--1"
        >
          <span class="input-group__title input-group__title--user">
            {{item.title}}
          </span>
          <input
            class="input-group__text-input"
            type="text"
            v-bind:disabled="!isEditorMode"
            v-model="item.state"
          >
        </label>
      </form>
    </div>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        isEditorMode: false,
        inputs: [
          {
            id: 'initiative',
            title: "Инициатива",
            type: "text",
            state: ''
          },
          {
            id: 'accuracy',
            title: "Точность",
            type: "text",
            state: ''
          },
          {
            id: 'evasion',
            title: "Уклонение",
            type: "text",
            state: ''
          },
          {
            id: 'defense',
            title: "Защита",
            type: "text",
            state: ''
          },
          {
            id: 'magicDefense',
            title: "Маг. защита",
            type: "text",
            state: ''
          },
          {
            id: 'perception',
            title: "Восприятие",
            type: "text",
            state: ''
          },
          {
            id: 'willpower',
            title: "Сила воли",
            type: "text",
            state: ''
          },
          {
            id: 'healthPoints',
            title: "Здоровье",
            type: "text",
            state: ''
          },
          {
            id: 'energyPoints',
            title: "Энергия",
            type: "text",
            state: ''
          },
        ]
      }
    },
    computed: {
      initiative() {
        return this.$store.getters['character/initiative'];
      },
      accuracy() {
        return this.$store.getters['character/accuracy'];
      },
      evasion() {
        return this.$store.getters['character/evasion'];
      },
      defense() {
        return this.$store.getters['character/defense'];
      },
      magicDefense() {
        return this.$store.getters['character/magicDefense'];
      },
      perception() {
        return this.$store.getters['character/perception'];
      },
      willpower() {
        return this.$store.getters['character/willpower'];
      },
      healthPoints() {
        return this.$store.getters['character/healthPoints'];
      },
      energyPoints() {
        return this.$store.getters['character/energyPoints'];
      },
    },
    watch: {
      initiative() {
        this.setInputsStates();
      },
      accuracy() {
        this.setInputsStates();
      },
      evasion() {
        this.setInputsStates();
      },
      defense() {
        this.setInputsStates();
      },
      magicDefense() {
        this.setInputsStates();
      },
      perception() {
        this.setInputsStates();
      },
      willpower() {
        this.setInputsStates();
      },
      healthPoints() {
        this.setInputsStates();
      },
      energyPoints() {
        this.setInputsStates();
      }
    },
    methods: {
      switchEditor() {
        this.isEditorMode = !this.isEditorMode;
      },
      saveChanges() {
        let anyChanges = false;
        if (this.models.firstname != this.firstname) anyChanges = true;
        if (this.models.lastname != this.lastname) anyChanges = true;
        if (!anyChanges) {
          this.switchEditor();
          return
        };

        this.$store.commit('character/setFirstname', this.models.firstname);
        this.$store.commit('character/setLastname', this.models.lastname);
        // this.$store.dispatch('character/updateCharacter');
        this.switchEditor();
      },
      setInputsStates() {
        this.inputs.forEach((item, index) => {
          if (item.id == 'initiative') {
            this.$set(item, 'state', this.initiative);
          }
          if (item.id == 'accuracy') {
            this.$set(item, 'state', this.accuracy);
          }
          if (item.id == 'evasion') {
            this.$set(item, 'state', this.evasion);
          }
          if (item.id == 'defense') {
            this.$set(item, 'state', this.defense);
          }
          if (item.id == 'magicDefense') {
            this.$set(item, 'state', this.magicDefense);
          }
          if (item.id == 'perception') {
            this.$set(item, 'state', this.perception);
          }
          if (item.id == 'willpower') {
            this.$set(item, 'state', this.willpower);
          }
          if (item.id == 'healthPoints') {
            this.$set(item, 'state', this.healthPoints);
          }
          if (item.id == 'energyPoints') {
            this.$set(item, 'state', this.energyPoints);
          }
        });
      }
    },
    mounted() {
      // this.setInputsStates();
    }
  }
</script>

<style lang="scss" scoped>
</style>
