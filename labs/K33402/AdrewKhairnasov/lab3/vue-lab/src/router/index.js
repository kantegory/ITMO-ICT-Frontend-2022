import {createRouter, createWebHistory} from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'login',
            component: () => import('@/views/LoginView.vue')
        },
        {
            path: '/register',
            name: 'register',
            component: () => import('@/views/RegisterView.vue')
        },
        {
            path: '/personal',
            name: 'personal',
            component: () => import('@/views/PersonalView.vue')
        },
        {
            path: '/main',
            name: 'main',
            component: () => import('@/views/MainView.vue')
        },
        {
            path: '/chart',
            name: 'chart',
            component: () => import('@/views/ChartView.vue')
        }
    ]
})

export default router
