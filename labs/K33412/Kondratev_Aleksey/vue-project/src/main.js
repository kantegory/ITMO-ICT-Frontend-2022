import { createApp } from 'vue'

import App from '@/App.vue'
import router from '@/router'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import '@/assets/style/main.css'
import '@/assets/style/light.css'
import '@/assets/style/dark.css'

const app = createApp(App)

app.use(router)

app.mount('#app')
