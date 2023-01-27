import {createApp} from 'vue'
import {createPinia} from 'pinia'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import {router} from "@/router/main";
import {i18n} from "@/i18n/main";


const pinia = createPinia()

const app = createApp(App)
app.use(i18n)
app.use(router)
app.use(ElementPlus)
app.use(pinia)
app.mount('#app')

