import {persist} from "pinia-persists";
import {createPinia, defineStore} from 'pinia'

const pinia = createPinia()
pinia.use(persist())

export default pinia

