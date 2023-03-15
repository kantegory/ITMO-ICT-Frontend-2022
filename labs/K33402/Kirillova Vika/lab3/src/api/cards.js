export default class CardApi {
  constructor(instance) {
    this.API = instance
  }

  getAll = async () => {
    return this.API({
      url: '/cards'
    })
  }

  getById = async (id) => {
    return this.API({
      url: `/cards/${id}`
    })
  }

  getFilter = async (link) => {
    console.log(link)
    return this.API({
      url: `/cards?${link}`
    })
  }
}

