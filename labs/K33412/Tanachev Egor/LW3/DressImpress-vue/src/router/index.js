import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
 history: createWebHistory(import.meta.env.BASE_URL),
 // массив с роутами
 routes: [
   // отдельный роут
  {
     path: '/',
     name: 'index',
     component: () => import('../views/MainPage.vue')
  },
  {
    path: '/catalog',
    name: 'catalog',
    component: () => import('../views/CatalogPage.vue')
  },
  {
    path: '/account',
    name: 'account',
    component: () => import('../views/AccountPage.vue')
  }
 ]
})


// экспортируем сконфигурированный роутер
export default router