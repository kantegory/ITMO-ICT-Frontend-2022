import { createRouter, createWebHistory } from 'vue-router'
 
const router = createRouter({
 history: createWebHistory(import.meta.env.BASE_URL),
 // массив с роутами
 routes: [
   // отдельный роут
   {
     path: '/all_workers',
     name: 'workers',
     // реализация ленивой подгрузки представления
     // (до момента открытия этого представления,
     // оно не будет сохранено в браузере пользователя)
     component: () => import('../views/WorkersPage.vue')
   }
 ]
})
 
// экспортируем сконфигурированный роутер
export default router
