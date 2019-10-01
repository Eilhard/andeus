<template lang="html">
  <div class="">
    <ArticleHeader
      class="sheet mb--1"
      v-bind:mode="isEditorMode"
      v-on:switchEditor="updateArticle"
    />

    <EditArticleMain
      class="sheet mb--1"
      v-bind:title="article.title"
      v-bind:body="article.body"
      v-on:updateMain="updateMain($event)"
    />
    <EditArticleSections
      class="sheet mb--1"
      v-for="(item, index) in sections"
      v-bind:key="`section_${index}`"
      v-bind:type="item.sectionType"
      v-bind:title="item.sectionTitle"
      v-bind:body="item.sectionBody"
      v-bind:listItems="item.listItems"
      v-bind:index="index"
      v-on:updateSection="updateSection($event)"
      v-on:deleteSection="deleteSection($event)"
    />
    <div class="sheet p--2 mb--1">
      <button
        v-on:click="addSection"
        class="input-btn input-btn--block m--1 "
      >
        <span class="mx--1">
          <i class="fas fa-plus-square"></i>
        </span>
        Добавить секцию
      </button>
    </div>
  </div>
</template>

<script>
  import ArticleHeader from './ArticleHeader.vue';
  import EditArticleMain from './EditArticleMain.vue';
  import EditArticleSections from './EditArticleSections.vue';

  export default {
    components: {
      ArticleHeader,
      EditArticleMain,
      EditArticleSections
    },
    props: {
      isEditorMode: {
        type: Boolean,
        default: false
      },
      article: Object,
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
      addSection() {
        this.sections.push({
          sectionType: 'section',
          title: '',
          body: '',
          listItems: []
        });
      },
      updateMain(event) {
        this.models.title = event.title;
        this.models.body = event.body;
        if (event.image) {
          this.models.image = event.image;
        }
      },
      updateSection(event) {
        let updated = {
          sectionType: 'section',
          sectionTitle: event.title,
          sectionBody: event.body,
          listItems: []
        }
        this.$set(this.sections, event.index, updated);
      },
      deleteSection(event) {
        this.sections = this.sections.filter((key, index) => index != event);
      },
      updateArticle() {
        this.$store.dispatch('article/updateArticle', {
          id: this.article._id,
          title: this.models.title,
          body: this.models.body,
          image: this.models.image,
          sectionImages: this.sectionImages,
          sections: this.sections.map(item => {
             return {
               sectionType: item.sectionType,
               sectionTitle: item.sectionTitle,
               sectionBody: item.sectionBody,
               listItems: item.listItems
             }
          })
        });
        this.$emit('switchEditor');
      },
    },
    mounted() {
      this.sections = this.article.sections;
    }
  }
</script>

<style lang="scss" scoped>
</style>
