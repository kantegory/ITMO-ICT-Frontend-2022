import { defineStore } from 'pinia'
// импортируем API
import { workersApi } from '@/api'
 
// создаём хранилище
const useWorkersStore = defineStore('workers', {
 // в стейте заведём пустой массив с заемтками
 state: () => ({
   workers: []
 }),
 
 actions: {
   // заведём метод для подгрузки заметок
   async loadWorkers() {
     const response = await workersApi.getAll()

     this.workers = response.data

     return response
   },
 
   // и метод для создания новой заметки
   async createWorker(data) {
     const response = await workersApi.createWorker(data)
 
     this.workers = response.data
 
     return response
   }
 }
})
 
export default useWorkersStore
