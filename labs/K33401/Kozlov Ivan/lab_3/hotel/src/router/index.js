import { createRouter, createWebHistory } from 'vue-router'
 
const router = createRouter({
 history: createWebHistory(import.meta.env.BASE_URL),

 routes: [
   {
     path: '/all_workers',
     name: 'workers',
     component: () => import('../views/WorkersPage.vue')
   },
     {
         path: '/login',
         name: 'login',
         component: () => import('../views/LoginPage.vue')
     },
     {
         path: '/singup',
         name: 'singup',
         component: () => import('../views/SingupPage.vue')
     },
     {
         path: '/',
         name: 'main',
         component: () => import('../views/MainPage.vue')
     },
 ]
})
 
// экспортируем сконфигурированный роутер
export default router
