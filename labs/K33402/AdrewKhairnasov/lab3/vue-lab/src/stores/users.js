import {usersAPI} from "@/api";
import {defineStore} from "pinia"
import router from "@/router";


const useUsersStore = defineStore('users', {
    state: () => ({
        user: {
            id: null,
            coins: []
        }
    }),

    actions: {
        async login(credentials) {
            const response = await usersAPI.getUsers()
            const data = response.data
            const validUser = this.isValid(credentials, data)

            if (validUser !== undefined) {
                this.user.id = validUser.id;
                this.user.coins = validUser.coins;
                await router.push('/personal')
            } else {
                localStorage.clear()
                alert('Ошибка! Проверьте email или пароль')
            }
        },

        async register(credentials) {
            const response = await usersAPI.createNewUser(credentials)
            const data = response.data
            let {id} = data

            this.user = {
                'id': id,
                'coins': [],
            }

            await router.push('/personal')
        },

        isValid(credentials, data) {
            for (let i = 0; i < data.length; i++) {
                if (data[i].email === credentials.email && data[i].password === credentials.password) {
                    return {id: data[i].id, coins: data[i].coins}
                }
            }
        },

        async commitChanges(user) {
            const rawUser = JSON.parse(JSON.stringify(user))
            const currentUser = await usersAPI.getUserById(rawUser.id)
            currentUser.data.coins = rawUser.coins
            const response = await usersAPI.putChanges(currentUser.data)
            return response.data
        },
    }
})

export default useUsersStore