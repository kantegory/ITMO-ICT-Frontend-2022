import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('../components/FirstComponent.vue')

    },
    {
      path: '/hi',
      component: () => import('../components/FirstComponent.vue')
    },
    {
      path: '/by',
      component: () => import('../components/SecondCom.vue')
    }
  ]
})

export default router
