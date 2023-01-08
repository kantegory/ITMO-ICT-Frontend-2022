import {defineStore} from 'pinia'
// импортируем API
import {workersApi} from '@/api'

// создаём хранилище
const useWorkersStore = defineStore('workers', {
 // в стейте заведём пустой массив с заемтками
 state: () => ({
   workers: [],
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
   },

     async getFIO(id) {
         const response = await workersApi.getCurrentWorker(id)
         localStorage.currFIO = response.data.Workers[0].fio
         localStorage.currPhone = response.data.Workers[0].phone_worker
     },

     async changeWorker(data) {
         const response = await workersApi.changeWorker(data)

         this.workers = response.data

         return response
     },

     async deleteWorker() {
         return await workersApi.deleteWorker()
     },


 }
})
 
export default useWorkersStore
