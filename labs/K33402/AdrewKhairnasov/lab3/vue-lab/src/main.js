import { createApp } from 'vue'

import App from '@/App.vue'
import router from '@/router'
import store from '@/stores'
import my_components from "@/components/my_components";
import VueApexCharts from "vue3-apexcharts";

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import '@/assets/main.css'

const app = createApp(App)

my_components.forEach(component => {
    app.component(component.name, component)
})
app.component('apexchart', VueApexCharts)

app.use(store)
app.use(router)

app.mount('#app')
