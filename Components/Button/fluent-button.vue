<template>
  <button id="fluent-button" :class="classObj" :style="styleObj">
    <slot></slot>
  </button>
</template>

<script>
import { computed } from 'vue'
export default {
  name: 'fluent-button',
  setup (props) {
    const classObj = computed(() => {
      return {
        [`fluent-btn-${props.type}`]: props.type,
        'plain-btn': props.plain
      }
    })
    const styleObj = computed(() => {
      return {
        fontSize: props.size === 'large' ? '30px'
          : props.size === 'small' ? '16px' : '24px',
        padding: props.size === 'large' ? '1em 2em'
          : props.size === 'small' ? '.25em .5em' : '.5em 1em',
        // height: props.size === 'large' ? '4em'
        //   : props.size === 'small' ? '2.5em' : '3em',
        borderRadius: props.noRound ? '0' : '.8em',
        border: props.bordered ? '2px solid white' : 'none',
        cursor: 'pointer'
      }
    })
    return {
      classObj,
      styleObj
    }
  },
  props: {
    size: {
      type: String,
      default: 'normal'
    },
    type: {
      type: String,
      default: 'normal'
    },
    noRound: {
      type: Boolean,
      default: false
    },
    bordered: {
      type: Boolean,
      default: false
    },
    plain: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped lang="scss">
  button:active {
    outline: none;
  }
  .fluent-btn-normal {
    $bgColor: dodgerblue;
    color: white;
    transition: all .25s;
    background-color: dodgerblue;
    box-shadow: .2em .2em .2em -.2em gray;
    &:hover {
      background-color: lighten($bgColor, 20%);
    }
    &:active {
      background-color: lighten($bgColor, 40%);
    }
    &.plain-btn{
      background-color: transparent;
      color: $bgColor;
      border: 1px solid $bgColor !important;
      box-shadow: none;
      &:hover {
        background-color: $bgColor;
        color: white;
      }
    }
  }
  .fluent-btn-warn {
    $bgColor: #eec35e;
    color: white;
    transition: all .25s;
    background-color: $bgColor;
    box-shadow: .2em .2em .2em -.2em gray;
    &:hover {
      background-color: lighten($bgColor, 20%);
    }
    &:active {
      background-color: lighten($bgColor, 40%);
    }
    &.plain-btn{
      background-color: transparent;
      color: $bgColor;
      border: 1px solid $bgColor !important;
      box-shadow: none;
      &:hover {
        background-color: $bgColor;
        color: white;
      }
    }
  }
  .fluent-btn-succeed {
    $bgColor: #87d34b;
    transition: all .25s;
    color: white;
    background-color: $bgColor;
    box-shadow: .2em .2em .2em -.2em gray;
    &:hover {
      background-color: lighten($bgColor, 20%);
    }
    &:active {
      background-color: lighten($bgColor, 40%);
    }
    &.plain-btn{
      background-color: transparent;
      color: $bgColor;
      border: 1px solid $bgColor !important;
      box-shadow: none;
      &:hover {
        background-color: $bgColor;
        color: white;
      }
    }
  }
  .fluent-btn-danger {
    $bgColor: lightcoral;
    color: white;
    transition: all .25s;
    background-color: $bgColor;
    box-shadow: .2em .2em .2em -.2em gray;
    &:hover {
      background-color: lighten($bgColor, 20%);
    }
    &:active {
      background-color: lighten($bgColor, 40%);
    }
    &.plain-btn{
      background-color: transparent;
      color: $bgColor;
      border: 1px solid $bgColor !important;
      box-shadow: none;
      &:hover {
        background-color: $bgColor;
        color: white;
      }
    }
  }
  .fluent-btn-unimportant {
    $bgColor: darkgray;
    color: white;
    transition: all .25s;
    background-color: $bgColor;
    box-shadow: .2em .2em .2em -.2em gray;
    &:hover {
      background-color: lighten($bgColor, 20%);
    }
    &:active {
      background-color: lighten($bgColor, 40%);
    }
    &.plain-btn{
      background-color: transparent;
      color: $bgColor;
      border: 1px solid $bgColor !important;
      box-shadow: none;
      &:hover {
        background-color: $bgColor;
        color: white;
      }
    }
  }
</style>
