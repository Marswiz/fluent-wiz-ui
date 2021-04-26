import { InstallOptions } from './Interfaces'

// import Components
import tiktokGlitch from './Glitch/tiktok-glitch'
import cardList from './List/card-list'
import fluentToast from './Message/fluent-toast'
import flexBox from './Layout/flex-box'
import { gridBox, gridItem } from './Layout/grid-box'
import fluentButton from './Button'

import type { App } from 'vue'
interface PluginWithInstall{
  install: (app : App, options: InstallOptions) => void,
}

// component is to use as tag in vue template.
const components = [
  tiktokGlitch,
  cardList,
  fluentToast,
  flexBox,
  gridBox,
  gridItem,
  fluentButton
]

// plugins has its own install functions, and it's to add some global function to app.
// plugins should be transfer to app.use() before app is mounted.
const plugins : PluginWithInstall[] = [

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
