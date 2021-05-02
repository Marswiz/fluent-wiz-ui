<template>
  <flex-box x-align="center" y-align="center" width="400px">
    <fluent-folder round type="warn" key="first">
      <template #header>
        <div>Today's Header</div>
      </template>
      <template #fold-banner></template>
      <template #main>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, labore molestias natus porro possimus quae! Atque autem dolores excepturi expedita minus officia perferendis! Doloribus illum minus quis sed tempore, temporibus?</template>
    </fluent-folder>
  </flex-box>
  <flex-box x-align="center" y-align="center" width="400px">
    <fluent-folder round type="info" key="first">
      <template #header>
        <div>Today's Header</div>
      </template>
      <template #fold-banner></template>
      <template #main>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, labore molestias natus porro possimus quae! Atque autem dolores excepturi expedita minus officia perferendis! Doloribus illum minus quis sed tempore, temporibus?</template>
    </fluent-folder>
  </flex-box>
  <flex-box x-align="center" y-align="center" width="400px">
    <fluent-folder round type="danger" key="first">
      <template #header>
        <div>Today's Header</div>
      </template>
      <template #fold-banner></template>
      <template #main>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, labore molestias natus porro possimus quae! Atque autem dolores excepturi expedita minus officia perferendis! Doloribus illum minus quis sed tempore, temporibus?</template>
    </fluent-folder>
  </flex-box>
  <flex-box x-align="center" y-align="center" width="400px">
    <fluent-folder round type="succeed" key="first">
      <template #header>
        <div>Today's Header</div>
      </template>
      <template #fold-banner></template>
      <template #main>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, labore molestias natus porro possimus quae! Atque autem dolores excepturi expedita minus officia perferendis! Doloribus illum minus quis sed tempore, temporibus?</template>
    </fluent-folder>
  </flex-box>
  <flex-box x-align="center" y-align="center" width="400px">
    <fluent-folder round type="normal" key="first">
      <template #header>
        <div>Today's Header</div>
      </template>
      <template #fold-banner></template>
      <template #main>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, labore molestias natus porro possimus quae! Atque autem dolores excepturi expedita minus officia perferendis! Doloribus illum minus quis sed tempore, temporibus?</template>
    </fluent-folder>
  </flex-box>

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
