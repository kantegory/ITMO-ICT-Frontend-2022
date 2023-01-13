import { createRouter, createWebHistory} from 'vue-router'
import Mainpage from '@/views/Mainpage.vue'
import Login from '@/views/Login.vue'
import Registration from '@/views/Registration.vue'
import Portfolio from "@/views/Portfolio.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Mainpage
        },
        {
            path: '/Login',
            name: 'Login',
            component: Login
        },
        {
            path: '/Registration',
            name: 'Registration',
            component: Registration
        },
        {
            path: '/Portfolio',
            name: 'Portfolio',
            component: Portfolio
        }
    ]
})

export default router



// import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
//
// const router = createRouter({
//   history: createWebHistory(import.meta.env.BASE_URL),
//   routes: [
//     {
//       path: '/',
//       name: 'home',
//       component: HomeView
//     },
//     {
//       path: '/about',
//       name: 'about',
//       // route level code-splitting
//       // this generates a separate chunk (About.[hash].js) for this route
//       // which is lazy-loaded when the route is visited.
//       component: () => import('../views/MainPage.vue')
//     }
//   ]
// })
//
// export default router
