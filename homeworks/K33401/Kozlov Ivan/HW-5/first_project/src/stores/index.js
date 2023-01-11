import { createPinia } from 'pinia'
import { persist } from 'pinia-persists'

const pinia = createPinia()

pinia.use(persist())

export default pinia
