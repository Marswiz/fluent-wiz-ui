<template>
  <div id="fluent-gridBox" :style="styleObj">
    <slot></slot>
  </div>
</template>

<script>
import { computed } from 'vue'

export default {
  name: 'grid-box',
  setup (props) {
    const styleObj = computed(() => {
      let cols = props.cols
      let rows = props.rows
      const display = props.inline ? 'inline-grid' : 'grid'
      if (+props.cols) {
        cols = ''
        for (let i = 0; i < props.cols; i++) {
          cols += ' 1fr'
        }
      }
      if (+props.rows) {
        rows = ''
        for (let i = 0; i < props.rows; i++) {
          rows += ' 1fr'
        }
      }
      return {
        display: display,
        width: props.width,
        height: props.height,
        gridTemplateRows: rows,
        gridTemplateColumns: cols,
        gap: props.gap
      }
    })
    return {
      styleObj
    }
  },
  props: {
    width: {
      type: String,
      default: ''
    },
    height: {
      type: String,
      default: ''
    },
    cols: {
      type: String,
      default: '1'
    },
    rows: {
      type: String,
      default: '1'
    },
    gap: {
      type: String,
      default: '1em'
    },
    inline: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
 #fluent-gridBox{
   border: 1px solid tomato;
 }
</style>
