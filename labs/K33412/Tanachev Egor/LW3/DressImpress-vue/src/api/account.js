class AccountApi {
    constructor(instance) {
      this.API = instance
    }

    // Авторизация
    login = async (data) => {
        return this.API({
          method: 'POST',
          url: '/login',
          data,
          headers: {
            'Content-Type': 'application/json'
          }
        })
    }

    // Регистрация
    signup = async (data) => {
        return this.API({
          method: 'POST',
          url: '/signup',
          data,
          headers: {
            'Content-Type': 'application/json'
          }
        })
    }
   
   
}
   
export default AccountApi