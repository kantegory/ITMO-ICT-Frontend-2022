import { defineStore } from 'pinia'
import { cardApi } from '@/api'

const useCardsStore = defineStore('cards', {
  state: () => ({
    cards: []
  }),

  actions: {
    async loadCards() {
      const response = await cardApi.getAll();

      this.cards = response.data;

      return response;
    }
  }
})

export default useCardsStore