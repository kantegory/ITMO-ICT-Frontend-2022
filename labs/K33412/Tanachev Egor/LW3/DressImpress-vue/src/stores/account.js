import { defineStore } from 'pinia'
// импортируем API
import { accountApi } from '@/api'


// создаём хранилище
const useAccountStore = defineStore('accounts', {
 // в стейте заведём пустой массив с данными пользователя
 state: () => ({
    accounts: []
 }),


 actions: {
   // метод для авторизации
   async loginAuth(data) {
     const response = await accountApi.login(data)


     this.accounts = response.data


     return response
   },

   // метод для регистрации
   async signupAuth(data) {
    const response = await accountApi.signup(data)


    this.accounts = response.data


    return response
  },

 }
})


export default useAccountStore