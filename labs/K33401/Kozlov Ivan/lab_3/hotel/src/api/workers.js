class WorkersApi {
    constructor(instance) {
      this.API = instance
    }
    
    getAll = async () => {
      return this.API({
        url: '/api/create_worker/'
      })
    }
    
    createWorker = async (data) => {
      return this.API({
        method: 'POST',
        url: '/api/create_worker/',
        data,
        headers: {
          'Content-Type': 'application/json'
        }
      })
    }
   }
    
   export default WorkersApi
   