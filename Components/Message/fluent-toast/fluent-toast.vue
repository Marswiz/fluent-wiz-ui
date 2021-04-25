<template>
  <div class="fluent-toast">
    <slot></slot>
  </div>
</template>

<script lang="ts">
export default {
  name: 'fluent-toast',
  props: {
    type: String
  },
  setup () {
    return {}
  }
}
</script>

<style scoped>

</style>
