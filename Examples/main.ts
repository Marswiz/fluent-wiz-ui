import { createApp } from 'vue'
import App from './App.vue'
import FluentWizUI from '../Components'

const app = createApp(App)

app.use(FluentWizUI)

app.mount('#app')
