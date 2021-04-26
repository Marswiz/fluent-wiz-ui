<template>
  <div :class="['fluent-tiktok-glitch',speedClass,isAnimated]">
    <slot></slot>
    <img :src="img" :alt="imgInfo" v-if="img">
  </div>
</template>

<script lang="ts">
import { computed } from 'vue'
interface Props{
  speed?: string,
  animate?: boolean,
  img?: string,
  imgInfo?: string
}

export default {
  name: 'tiktok-glitch',
  setup (props : Props) {
    const speedClass = computed(() => {
      if (props.speed === 'slow' || props.speed === 'fast') return props.speed + '-speed'
      else return 'normal-speed'
    })
    const isAnimated = computed(() => {
      return props.animate ? 'animate' : 'static'
    })
    return {
      speedClass,
      isAnimated
    }
  },
  props: {
    speed: String,
    animate: Boolean,
    img: String,
    imgInfo: String
  }
}
</script>

<style scoped lang="scss">

  .fluent-tiktok-glitch {
    $move: 10;
    $opacity: 0.75;
    $colorTop: rgba(255,30,30,$opacity);
    $colorBtm: rgba(40,170,255,$opacity);
    $time: .5s;
    display: inline-flex;
    align-items: center;
    font-weight: bold;
    font-family: Helvetica;
    font-size: 5em;
    &.static {
      color: rgba(0,0,0,$opacity);
      filter: drop-shadow(.05em .05em 0 $colorBtm) drop-shadow(-.05em -.05em 0 $colorTop);
    }
    img {
      opacity: $opacity;
    }

    @keyframes bounce {
      0% {
        color: rgba(0,0,0,0.7);
        filter: blur(1px) drop-shadow(random($move)*.01em random($move)*.01em 0 $colorBtm) drop-shadow(random($move)*-.01em random($move)*-.01em 0 $colorTop);
      }
      25% {
        color: rgba(0,0,0,0.7);
        filter: drop-shadow(random($move)*.01em random($move)*.01em 0 $colorBtm) drop-shadow(random($move)*-.01em random($move)*-.01em 0 $colorTop);
      }
      50% {
        color: rgba(0,0,0,0.7);
        filter: drop-shadow(random($move)*.01em random($move)*.01em 0 $colorBtm) drop-shadow(random($move)*-.01em random($move)*-.01em 0 $colorTop);
      }
      74% {
        color: rgba(0,0,0,0.7);
        filter: drop-shadow(random($move)*.01em random($move)*.01em 0 $colorBtm) drop-shadow(random($move)*-.01em random($move)*-.01em 0 $colorTop);
      }
      100% {
        color: rgba(0,0,0,0.7);
        filter: drop-shadow(random($move)*.01em random($move)*.01em 0 $colorBtm) drop-shadow(random($move)*-.01em random($move)*-.01em 0 $colorTop);
      }
    }

    &.animate {
      animation: bounce $time infinite ease-out;
    }
    &::selection {
      background: none;
    }
    &.fast-speed {
      $time: .2s;
      animation-duration: $time;
    }
    &.slow-speed {
      $time: 1s;
      animation-duration: $time;
    }
  }

</style>
