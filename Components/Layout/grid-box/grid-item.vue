<template>
  <div id="fluent-gridItem" :style="styleObj">
    <slot></slot>
  </div>
</template>

<script>
import { computed } from 'vue'
export default {
  name: 'grid-item',
  setup (props) {
    const styleObj = computed(() => {
      let gridRow = ''
      let gridCol = ''
      if (+props.xFrom && +props.xTo) {
        gridCol = `${props.xFrom}/${props.xTo}`
      }
      if (+props.yFrom && +props.yTo) {
        gridRow = `${props.yFrom}/${props.yTo}`
      }
      return {
        gridColumn: gridCol,
        gridRow: gridRow
      }
    })
    return {
      styleObj
    }
  },
  props: {
    xFrom: {
      default: ''
    },
    xTo: {
      default: ''
    },
    yFrom: {
      default: ''
    },
    yTo: {
      default: ''
    }
  }
}
</script>

<style scoped>

</style>
