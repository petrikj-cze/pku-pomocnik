import { createApp } from 'vue'
import App from './App.vue'
import { plugin, defaultConfig } from '@formkit/vue'
import config from './formkit.config.js'

import router from './router/index.js'
import { createPinia } from 'pinia'

const pinia = createPinia()
const aplikace = createApp(App)

aplikace.use(router)
aplikace.use(pinia)
aplikace.use(plugin, defaultConfig(config))

aplikace.mount('#app')

//createApp(UserInterface).mount('#ui')
