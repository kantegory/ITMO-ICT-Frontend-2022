import { defineStore } from 'pinia'
import CardApi from '@/api/cards.js'

const useCardsStore = defineStore('cards', {
  state: () => ({
    cards: []
  }),

  actions: {
    async loadCards() {
      const response = await CardApi.getAll();

      console.log(response)
    }
  }
})

export default useCardsStore