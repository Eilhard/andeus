<template lang="html">
  <div class="page-flex page-flex--block">
    <form v-on:submit.prevent class="input-container sheet input-container--clear-block p--2 my--1 shadow">
      <label class="input-group mb--1">
        <span class="input-group__title input-group__title--user">
        Заголовок
        </span>
        <input
        class="input-group__text-input"
        type="text"
        v-model="models.title"
        >
      </label>
      <label class="input-group input-group--textarea mb--1">
        <span class="input-group__title input-group__title--textarea">
          Текст
        </span>
        <textarea
        class="input-group__textarea"
        v-model="models.body"
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
          {{models.image.name}}
        </span>
        <span class="text-btn text-btn--secondary">
          <i class="fas fa-download"></i>
        </span>
      </label>
    </form>
    <NewArticleSections
      class="sheet mb--1 shadow"
      v-for="(item, index) in sections"
      v-bind:key="`section_${item.id}`"
      v-bind:id="item.id"
      v-bind:index="index"
      v-on:updateSection="updateSection($event)"
      v-on:deleteSection="deleteSection($event)"
    />
    <div class="page-flex page-flex--block sheet p--2 mb--1">
      <button
        v-on:click="addSection"
        class="input-btn input-btn--block m--1 "
      >
        <span class="mx--1">
          <i class="fas fa-plus-square"></i>
        </span>
        Добавить секцию
      </button>
      <button
        v-on:click="postNewArticle"
        class="input-btn input-btn--block m--1 "
      >
        Создать статью
      </button>
    </div>
  </div>
</template>

<script>
  import NewArticleSections from './NewArticleSections.vue';

  export default {
    components: {
      NewArticleSections
    },
    data() {
      return {
        models: {
          title: '',
          body: '',
          image: ''
        },
        sections: [],
        sectionImages: []
      }
    },
    methods: {
      processFile(event) {
        this.models.image = event.target.files[0];
      },
      postNewArticle() {
        this.$store.dispatch('article/postNewArticle', {
          title: this.models.title,
          body: this.models.body,
          image: this.models.image,
          sectionImages: this.sectionImages,
          sections: this.sections.map(item => {
             return {
               sectionType: item.sectionType,
               sectionTitle: item.title,
               sectionBody: item.body,
               listItems: item.listItems
             }
          })
        });
        this.$emit('switchEditor');
      },
      addSection() {
        this.sections.push({
          id:this.sections.length,
          sectionType: 'section',
          title: '',
          body: '',
          listItems: []
        });
      },
      updateSection(event) {
        this.sections[event.id].sectionType = 'section';
        this.sections[event.id].title = event.title;
        this.sections[event.id].body = event.body;
        this.sections[event.id].listItems = [];
        console.log(this.sections);
      },
      deleteSection(event) {
        this.sections = this.sections.filter((key, index) => index != event);
      }
    },
  }
</script>

<style lang="scss" scoped>
</style>
