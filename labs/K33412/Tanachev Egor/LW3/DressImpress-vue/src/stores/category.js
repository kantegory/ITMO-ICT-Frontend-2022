import { defineStore } from 'pinia'

export const useCategoryStore = defineStore('category', {
  state: () => ({
    selectedCategory: 'Все товары', // Установите "Все товары" как значение по умолчанию
  }),
  actions: {
    selectCategory(category) {
      this.selectedCategory = category
      // Сохранить в локальное хранилище
      localStorage.setItem('selectedCategory', category)
    },
    loadSelectedCategory() {
      // Загрузить из локального хранилища, или "Все товары", если ничего не сохранено
      this.selectedCategory = localStorage.getItem('selectedCategory') || 'Все товары'
    },
  },
})
