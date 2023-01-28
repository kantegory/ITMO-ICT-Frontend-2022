import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'

import axios from "axios";
import VueAxios from "vue-axios";

import '@/assets/style.css'

const app = createApp(App)

app.use(router)
app.use(VueAxios, axios)

app.mount('#app')
