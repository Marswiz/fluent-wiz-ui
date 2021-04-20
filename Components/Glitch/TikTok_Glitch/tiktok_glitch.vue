<template>
  <div id="glitch1">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'tiktok-glitch'
}
</script>

<style scoped lang="scss">
  #glitch1 {
    --move: .05em;
    --opacity: 0.7;
    --colorTop: rgba(255,30,30,var(--opacity));
    --colorBtm: rgba(49,150,255,var(--opacity));
    display: inline-flex;
    align-items: center;
    font-weight: bold;
    font-family: Helvetica;
    font-size: 5em;
    transition: all .4s;
  }
  #glitch1:hover {
    cursor: pointer;
    color: rgba(0,0,0,0.7);
    filter: drop-shadow(var(--move) var(--move) 0 var(--colorBtm)) drop-shadow(calc(-1 * var(--move)) calc(-1 * var(--move)) 0 var(--colorTop));
  }
  #glitch1::selection {
    background: none;
  }
</style>
