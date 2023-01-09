import {defineStore} from 'pinia'
// импортируем API
import {bookApi} from '@/api'

// создаём хранилище
const useBooksStore = defineStore('books', {
    state: () => ({
        books: [],
    }),

    actions: {
        async sortBooks(data) {
            const response = await bookApi.getBooksForRoom(data)
            this.books = response.data
            return response
        },

        async createBook(data) {
            await bookApi.createBook(data)
        },

        async DeleteBook(data) {
            await bookApi.deleteBook(data)
        }

    }
})

export default useBooksStore
