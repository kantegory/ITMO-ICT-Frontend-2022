import { defineStore } from 'pinia'
import { userCardApi } from '@/api'

const useUserEventsStore = defineStore('userEvents', {
  state: () => ({
    userEvents: []
  }),

  actions: {
    async getUserEventsById(id) {
      const response = await userCardApi.getById(id)

      return response
    },

    async addUserEvents(data) {
      const response = await userCardApi.createUserEvent(data)

      this.userEvents = response.data

      return response
    },

    async deleteCardById(id) {
      const response = await userCardApi.deleteById(id);

      return response
    }
  }
})

export default useUserEventsStore