import { createApp } from 'vue'
import mitt from 'mitt'

import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

const emitter = mitt()
const app = createApp(App)
app.config.globalProperties.emitter = emitter
app.mount('#app')
