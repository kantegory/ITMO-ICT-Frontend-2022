import { createApp } from 'vue'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'

import '@/assets/styles/light.css'
import '@/assets/styles/dark.css'
import '@/assets/styles/main.css'


import router from "@/router/router"

const app = createApp(App)

app
    .use(router)
    .mount('#app');
