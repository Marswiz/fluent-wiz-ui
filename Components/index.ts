import tiktokGlitch from './Glitch/TikTok_Glitch'
import type { App } from 'vue'

const components = [
  tiktokGlitch
]

const install = function (app : App) : void {
  console.log('FluentWiz UI Used!')
  components.forEach((item) => {
    app.component(item.name, item)
  })
}

export default {
  install
}
