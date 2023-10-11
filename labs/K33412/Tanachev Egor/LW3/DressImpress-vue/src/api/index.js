import instance from "@/api/instance"

import ProductsApi from "@/api/products"
import AccountApi from "@/api/account"
import FavoritesApi from "@/api/favorites"

// API Каталога
const productsApi = new ProductsApi(instance)
// API Личного кабинета
const accountApi = new AccountApi(instance)
// API Избранных товаров
const favoritesApi = new FavoritesApi(instance)


export {
    // API Каталога
    productsApi,
    // API Личного кабинета
    accountApi,
    // API Избранных товаров
    favoritesApi
}