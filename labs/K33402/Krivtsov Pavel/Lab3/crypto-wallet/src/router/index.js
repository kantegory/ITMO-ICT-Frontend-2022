import {createRouter, createWebHistory} from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'welcome',
            component: () => import('@/views/WelcomeView.vue'),
            meta: {
                layout: 'DefaultLayout'
            }
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('@/views/LoginView.vue'),
            meta: {
                layout: 'AuthLayout'
            }
        },
        {
            path: '/register',
            name: 'register',
            component: () => import('@/views/RegisterView.vue'),
            meta: {
                layout: 'AuthLayout'
            }
        },
        {
            path: '/currency/:id',
            name: 'currency',
            component: () => import('@/views/CurrencyView.vue'),
            meta: {
                layout: 'DefaultLayout'
            }
        },
        {
            path: '/market',
            name: 'market',
            component: () => import('@/views/MarketView.vue'),
            meta: {
                layout: 'DefaultLayout'
            }
        },
        {
            path: '/profile',
            name: 'profile',
            component: () => import('@/views/ProfileView.vue'),
            meta: {
                layout: 'DefaultLayout'
            }
        },
        {
            path: '/change_password',
            name: 'change_password',
            component: () => import('@/views/ChangePasswordView.vue'),
            meta: {
                layout: 'AuthLayout'
            }
        }
    ]
})

export default router
