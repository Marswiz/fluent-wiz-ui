<template>
  <tiktok-glitch speed="normal">
    Marswiz
  </tiktok-glitch>
  <card-list :cards="cards"></card-list>
  <fluent-toast>I'm Toast!</fluent-toast>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'App',
  components: {
  },
  setup () {
    return {
      cards: [{
        category: 'Main',
        date: '2020-12-08',
        title: 'title1',
        content: 'content1',
        tags: ['tag1', 'tag2'],
        link: '#'
      }, {
        category: 'News',
        date: 'date1',
        title: 'title1',
        content: 'content1',
        tags: ['tag1', 'tag2'],
        link: '#'
      }, {
        category: 'News',
        date: 'date1',
        title: 'title1',
        content: 'content1',
        tags: ['tag1', 'tag2'],
        link: '#'
      }, {
        category: 'News',
        date: 'date1',
        title: 'title1',
        content: 'content1',
        tags: ['tag1', 'tag2'],
        link: '#'
      }]
    }
  }
})
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
