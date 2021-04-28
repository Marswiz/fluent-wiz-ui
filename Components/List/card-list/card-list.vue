<template>
  <div class="fluent-cardlist">
    <a class="card" :style="styleObj" v-for="(card, index) in cards" :key="index" :href="card.link">
      <div class="row">
        <div class="category">{{card.category}}</div>
        <div class="date">{{card.date}}</div>
      </div>
      <div class="row">
        <div class="title">{{card.title}}</div>
      </div>
      <div class="row content-row">
        <div class="content">{{card.content}}</div>
      </div>
      <div class="row tags-row">
        <span class="tag" v-for="(tag, index) in card.tags" :key="index">#{{tag}}</span>
      </div>
    </a>
  </div>
</template>

<script lang="ts">
import { computed } from 'vue'
export default {
  name: 'card-list',
  setup (props : any) {
    const styleObj = computed(() => {
      return {
        background: props.backgroundColor + ' linear-gradient(to bottom right, transparent 0, rgba(0,0,0,0.3) 75%)',
        color: props.textColor,
        width: props.width
      }
    })
    return {
      styleObj
    }
  },
  props: {
    cards: {
      type: Array,
      default () {
        return [{
          category: 'News',
          date: 'date1',
          title: 'title1',
          content: 'content1',
          tags: ['tag1', 'tag2'],
          link: '#'
        }]
      },
      validator (value: any[]) {
        for (let i = 0; i < value.length; i++) {
          if (typeof value[i].category !== 'string' || typeof value[i].date !== 'string' || typeof value[i].title !== 'string' || typeof value[i].content !== 'string' || typeof value[i].link !== 'string') {
            console.log(value)
            console.log(typeof value[i].category, typeof value[i].date, typeof value[i].title, typeof value[i].content, typeof value[i].link)
            console.warn('category,date,title,link and content prop of cards should all be String-Type.')
            return false
          }
          if (!Array.isArray(value[i].tags)) {
            console.warn('Tags prop of cards should be Array of String.')
            return false
          }
        }
        return true
      }
    },
    backgroundColor: {
      type: String,
      default: '#aaa'
    },
    textColor: {
      type: String,
      default: 'rgba(255,255,255,0.8)'
    },
    width: {
      type: String,
      default: '200px'
    }
  }
}
</script>

<style scoped lang="scss">

.fluent-cardlist {
  display: flex;
  align-items: stretch;
}

.card {
  $shadow-distance: 1em;
  $tag-color: lightblue;
  display: flex;
  flex-direction: column;
  text-decoration: none;
  box-shadow: $shadow-distance $shadow-distance $shadow-distance -1*$shadow-distance black;
  border-radius: 10px;
  transition: all .25s;
  padding: 0 1em;
  font-family: Helvetica ,sans-serif;
  &:not(:first-child){
    margin-left: -100px;
  }
  &:not(:last-child):hover{
    margin-right: 100px;
  }
  &:hover {
    transform: translateY(-40px) rotateZ(10deg);
    text-shadow: 1px 1px 2px #555;
    cursor: pointer;
  }
  .tags-row {
    align-self: flex-end;
  }
  .content-row {
    flex: 1;
    word-break: break-all;
  }
  .row {
    display: flex;
    align-items: center;
    margin: 10px 0;
    .category {
      margin-top: 1em;
      font-weight: bold;
    }
    .date {
      margin-top: 1em;
      margin-left: 1em;
      flex: 1;
    }
    .title{
      font-family: "Clarendon Blk BT", Serif;
      font-weight: bold;
      font-size: 1.5em;
    }
    .tag {
      margin-left: .5em;
      color: $tag-color;
    }
  }
}
</style>
