import tiktokGlitch from './Glitch/tiktok-glitch'
import cardList from './List/card-list'
import fluentToast from './Message/fluent-toast'

import type { App } from 'vue'

const components = [
  tiktokGlitch,
  cardList,
  fluentToast
]

// Implementation of Vue plugin install func : register all components globally.
// Nothing to modify here, if you want to add a new component from Components dir.
const install = function (app : App) : void {
  console.log('FluentWiz UI has been used to your App!')
  components.forEach((item) => {
    app.component(item.name, item)
  })
}

export default {
  install
}
