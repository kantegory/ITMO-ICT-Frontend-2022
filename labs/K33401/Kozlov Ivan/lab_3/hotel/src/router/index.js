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
 ]
})
 
// экспортируем сконфигурированный роутер
export default router
