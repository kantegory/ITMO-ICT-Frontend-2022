import {defineStore} from 'pinia'
import { user_api} from '@/api'

const userStore = defineStore('users', {
    state: () => ({
        user: {},
        authToken: null,
        userEnrollments: []
    }),

    actions: {
        async login(data) {
            const response = await user_api.login(data)
            this.authToken = response?.data?.auth_token || null
            if (this.token) {
                localStorage.setItem('authToken', this.authToken)
            }   
            return response
        },

        async addUser(data) {
            const response = await user_api.registartion(data)
            return response
        },

        async logout() {
            localStorage.removeItem("authToken")
            this.authToken = null
            try{
            console.log(this.authToken)
            console.log(localStorage.authToken)
            const response = await user_api.logout(this.authToken)
            }catch(e){
                console.log(e.response)
            }
            this.user = {}
            this.authToken = null
            this.userEnrollments = []
            localStorage.removeItem("authToken")
        },

        async get_user(authToken) {
            const response = await user_api.get_user_info(this.authToken)
            localStorage.setItem('user', response.data['id'])
            this.get_user_info(response.data.id)
            return response
        },
        async get_user_info(id){
            const response = await user_api.get_user_profile(id)
            this.user = response.data
            console.log(this.user)
        }
    }
})

export default userStore