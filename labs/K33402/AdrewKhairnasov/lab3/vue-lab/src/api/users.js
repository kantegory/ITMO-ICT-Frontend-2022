class UsersAPI {
    constructor(instance) {
        this.API = instance
    }

    getUsers = async () => {
        return this.API({
            method: 'GET',
            url: '/users'
        })
    }

    createNewUser = async (data) => {
        return this.API({
            method: 'POST',
            url: '/users',
            data,
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }

    getUserById = async (id) => {
        return this.API({
            method: 'GET',
            url: `/users/${id}`
        })
    }

    putChanges = async (user) => {
        return this.API({
            method: 'PUT',
            url: `/users/${user.id}`,
            data: user,
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }
}

export default UsersAPI
