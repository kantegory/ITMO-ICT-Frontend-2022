class ProductsApi {
    constructor(instance) {
      this.API = instance
    }
   
   // Метод для получения всех товаров
    getAll = async () => {
      return this.API({
        url: '/products'
      })
    }

    // Метод для получения товаров по категории
    getByCategory = async (category) => {
      return this.API({
        url: `/products?category=${category}`
      })
    }
   
   
   }
   
   
   export default ProductsApi