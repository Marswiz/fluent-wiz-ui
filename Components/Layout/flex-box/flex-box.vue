<template>
  <div class="flexBox" :style="{width: width ,height: height}" :class="classObj">
    <slot></slot>
  </div>
</template>

<script>
import { computed } from 'vue'
export default {
  name: 'flex-box',
  setup (props) {
    const classObj = computed(() => {
      return {
        rowStartStart: props.direction === 'row' && props.xAlign === 'start' && props.yAlign === 'start',
        rowStartCenter: props.direction === 'row' && props.xAlign === 'start' && props.yAlign === 'center',
        rowStartEnd: props.direction === 'row' && props.xAlign === 'start' && props.yAlign === 'end',
        rowCenterStart: props.direction === 'row' && props.xAlign === 'center' && props.yAlign === 'start',
        rowCenterCenter: props.direction === 'row' && props.xAlign === 'center' && props.yAlign === 'center',
        rowCenterEnd: props.direction === 'row' && props.xAlign === 'center' && props.yAlign === 'end',
        rowEndStart: props.direction === 'row' && props.xAlign === 'end' && props.yAlign === 'start',
        rowEndCenter: props.direction === 'row' && props.xAlign === 'end' && props.yAlign === 'center',
        rowEndEnd: props.direction === 'row' && props.xAlign === 'end' && props.yAlign === 'end',
        columnStartStart: props.direction === 'column' && props.xAlign === 'start' && props.yAlign === 'start',
        columnStartCenter: props.direction === 'column' && props.xAlign === 'start' && props.yAlign === 'center',
        columnStartEnd: props.direction === 'column' && props.xAlign === 'start' && props.yAlign === 'end',
        columnCenterStart: props.direction === 'column' && props.xAlign === 'center' && props.yAlign === 'start',
        columnCenterCenter: props.direction === 'column' && props.xAlign === 'center' && props.yAlign === 'center',
        columnCenterEnd: props.direction === 'column' && props.xAlign === 'center' && props.yAlign === 'end',
        columnEndStart: props.direction === 'column' && props.xAlign === 'end' && props.yAlign === 'start',
        columnEndCenter: props.direction === 'column' && props.xAlign === 'end' && props.yAlign === 'center',
        columnEndEnd: props.direction === 'column' && props.xAlign === 'end' && props.yAlign === 'end'
      }
    })
    return {
      classObj
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
    direction: {
      type: String,
      default: 'row'
    },
    xAlign: {
      type: String,
      default: 'start'
    },
    yAlign: {
      type: String,
      default: 'start'
    }
  }
}
</script>

<style scoped>
  .flexBox {
    display: flex;
    border: 1px solid black;
  }
  .rowStartStart {
  }
  .rowStartCenter {
    justify-content: flex-start;
    align-items: center;
  }
  .rowStartEnd {
    justify-content: flex-start;
    align-items: flex-end;
  }
  .rowCenterStart {
    justify-content: center;
  }
  .rowCenterCenter {
    justify-content: center;
    align-items: center;
  }
  .rowCenterEnd {
    justify-content: center;
    align-items: flex-end;
  }
  .rowEndStart {
    justify-content: flex-end;
  }
  .rowEndCenter {
    justify-content: flex-end;
    align-items: center;
  }
  .rowEndEnd {
    justify-content: flex-end;
    align-items: flex-end;
  }
  .columnStartStart {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
  .columnStartCenter {
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
  .columnStartEnd {
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
  }
  .columnCenterStart {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
  .columnCenterCenter {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .columnCenterEnd {
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
  }
  .columnEndStart {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-end;
  }
  .columnEndCenter {
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
  }
  .columnEndEnd {
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
  }

</style>
