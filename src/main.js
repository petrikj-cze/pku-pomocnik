import { createApp } from 'vue'
import App from './App.vue'

import router from './router/index.js'
import { createPinia } from 'pinia'

const pinia = createPinia()

const aplikace = createApp(App)

aplikace.use(router)
aplikace.use(pinia)

aplikace.mount('#app')

//createApp(UserInterface).mount('#ui')
