import { defineStore } from 'pinia'
// импортируем API
import { favoritesApi } from '@/api'


// создаём хранилище
const useFavoritesStore = defineStore('favorites', {
 // в стейте заведём пустой массив с товарами
 state: () => ({
    favorites: []
 }),


 actions: {
   // заведём метод для подгрузки избранных товаров
   async loadFavorites(userId) {
     const response = await favoritesApi.getAll(userId)


     this.favorites = response.data


     return response
   },

   async DeleteFavorite(id, token) {
    const response = await favoritesApi.delete(id, token)


    this.favorites = response.data


    return response
  },

  async AddFavorite(data, token) {
    const response = await favoritesApi.add(data, token)


    this.favorites = response.data


    return response
  },

 }
})


export default useFavoritesStore