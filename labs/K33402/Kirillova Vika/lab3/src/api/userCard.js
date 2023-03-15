export default class UserCardApi {
  constructor(instance) {
    this.API = instance
  }

  getAll = async () => {
    return this.API({
      url: '/userCard'
    })
  }

  getById = async (id) => {
    return this.API({
      url: `/userCard?userId=${id}`
    })
  }

  deleteById = async (id) => {
    return this.API({
      url: `/userCard/${id}`,
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }

  createUserEvent = async (data) => {
    return this.API({
      url: '/userCard',
      method: 'POST',
      data,
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }
}
