<template>
  <div class="fluent-folder" :class="classObj">
    <header class="fluent-folder-header"  @click="toggleFold">
      <div style="flex: 1;">
        <slot name="header"></slot>
      </div>
      <flex-box x-align="center" y-align="center" width="20px" class="fold-banner" :class="{'fold-banner-closed' : folded}">
        <span><slot name="fold-banner"> > </slot></span>
      </flex-box>
    </header>
    <main ref="main" class="fluent-folder-main" :style="{height: mainHeight}" :class="{'main-round': round}">
        <slot name="main"></slot>
    </main>
  </div>
</template>

<script>
import flexBox from '../../Layout/flex-box'
import { ref, onMounted, reactive } from 'vue'
export default {
  name: 'fluent-folder',
  setup (props) {
    const folded = ref(false)
    const main = ref(null)
    const mainHeight = ref('auto')
    const initHeight = ref(0)
    onMounted(() => {
      if (!folded.value) {
        initHeight.value = main.value.getBoundingClientRect().height
        mainHeight.value = initHeight.value + 'px'
      }
    })
    return {
      folded,
      toggleFold: () => {
        folded.value = !folded.value
        // change the height smoothly when fold or unfold the folder.
        let height = initHeight.value
        if (folded.value && height > 0) {
          // fold process
          const a = setInterval(() => {
            height -= initHeight.value * 0.01
            if (height <= 5) height = 0
            mainHeight.value = height + 'px'
            if (height <= 0) {
              clearInterval(a)
            }
          }, 2.5)
        } else {
          // unfold process
          height = 0
          const b = setInterval(() => {
            height += initHeight.value * 0.01
            if (height >= initHeight.value * 0.99) height = initHeight.value
            mainHeight.value = height + 'px'
            if (height >= initHeight.value) {
              clearInterval(b)
            }
          }, 2.5)
        }
      },
      mainHeight,
      main,
      classObj: {
        'round-corner': props.round,
        ['type-' + props.type]: props.type
      }
    }
  },
  props: {
    round: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'info'
    }
  },
  components: {
    flexBox
  }
}
</script>

<style scoped lang="scss">
  .fluent-folder {
    display: flex;
    flex-direction: column;
    /* to hold the header's width when folder is inside a flex box ! */
    flex: 1;
    padding: .2em 0;
    filter: drop-shadow(.2em .2em .3em gray);
  }
  .round-corner {
    header {
      border-radius: .5em .5em 0 0;
    }
    main {
      border-radius: 0 0 .5em .5em;
    }
  }
  .fluent-folder-header {
    display: flex;
    align-items: center;
    padding: .2em 0;
    font-weight: bold;
    color: black;
  }
  .fold-banner {
    font-family: sans-serif;
    transform: rotateZ(90deg);
    transition: all .25s;
    padding: 0 .5em;
  }
  .fold-banner-closed {
    transform: rotateZ(0);
  }
  .fluent-folder-main {
    padding: 0;
    overflow: hidden;
    position: relative;
  }

  .type-info {
    $color: darkgray;
    header {
      background:  $color;
    }
    main {
      background:  lighten( $color, 25%);
    }
  }
  .type-warn {
    $color: #eec35e;
    header {
      background:  $color;
    }
    main {
      background:  lighten( $color, 25%);
    }
  }
  .type-danger {
    $color: lightcoral;
    header {
      background:  $color;
    }
    main {
      background:  lighten( $color, 20%);
    }
  }
  .type-succeed {
    $color: #87d399;
    header {
      background:  $color;
    }
    main {
      background:  lighten( $color, 25%);
    }
  }
  .type-normal {
    $color: dodgerblue;
    header {
      background:  lighten( $color, 10%);
    }
    main {
      background:  lighten( $color, 35%);
    }
  }
</style>
