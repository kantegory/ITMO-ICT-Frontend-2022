class FavoritesApi {
    constructor(instance) {
      this.API = instance
    }
   
   // Получение избранных товаров
    getAll = async (userId) => {
      return this.API({
        url: `/favorites?userId=${userId}`
      })
    }

    // Удаление избранного товара 
    delete = async (id, token) => {
      return this.API({
        method: 'DELETE',
        url: `/favorites/${id}`,
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      })
    }

    // Добавление избранного товара 
    add = async (data, token) => {
      return this.API({
        method: 'POST',
        url: `/favorites/`,
        data,
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      })
    }

  }
   
   
  export default FavoritesApi