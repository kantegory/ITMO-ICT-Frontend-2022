import { defineStore } from 'pinia'
// импортируем API
import { productsApi } from '@/api'


// создаём хранилище
const useProductsStore = defineStore('products', {
 // в стейте заведём пустой массив с товарами
 state: () => ({
   products: []
 }),


 actions: {
   // заведём метод для подгрузки товаров
   async loadProducts() {
     const response = await productsApi.getAll()
     this.products = response.data
     return response
   },

   // заведём метод для подгрузки товаров
   async loadProductsCategory(category) {
    const response = await productsApi.getByCategory(category)
    this.products = response.data
    return response
  },

 }
})


export default useProductsStore