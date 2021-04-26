<template>
  <tiktok-glitch speed="normal">
    Marswiz
  </tiktok-glitch>
  <card-list :cards="cards"></card-list>
  <fluent-toast>I'm Toast!</fluent-toast>
  <flex-box direction="row" x-align="start" y-align="center" width="12em" height="4em">
    <div>23</div>
    <div>44</div>
    <div>55</div>
  </flex-box>
  <grid-box cols="3" rows="5">
    <grid-item x-from="1" x-to="3" y-from="2" y-to="5" style="background: tomato;">1</grid-item>
    <grid-item>2</grid-item>
    <grid-item>3</grid-item>
  </grid-box>
  <fluent-button size="small" no-round>Button</fluent-button>
  <fluent-button size="" no-round>Button</fluent-button>
  <fluent-button size="large" round>Button</fluent-button>
  <fluent-button type="normal">Button</fluent-button>
  <fluent-button type="warn">Button</fluent-button>
  <fluent-button type="danger">Button</fluent-button>
  <fluent-button type="succeed">Button</fluent-button>
  <fluent-button type="unimportant">Button</fluent-button>
  <fluent-button type="normal" plain>Button</fluent-button>
  <fluent-button type="warn" plain>Button</fluent-button>
  <fluent-button type="danger" plain>Button</fluent-button>
  <fluent-button type="succeed" plain>Button</fluent-button>
  <fluent-button type="unimportant" plain>Button</fluent-button>
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
