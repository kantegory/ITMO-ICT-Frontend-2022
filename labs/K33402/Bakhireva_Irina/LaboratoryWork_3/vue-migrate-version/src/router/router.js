import Main from "@/pages/MainPage.vue";
import {createRouter, createWebHistory} from "vue-router";
import UserAuth from "@/pages/UserAuth.vue";
import UserRegistration from "@/pages/UserRegistration.vue";
import EventBoard from "@/pages/EventBoard.vue";
import UserEvents from "@/pages/UserEvents.vue";
import EventPage from "@/pages/EventPage.vue";

const routes = [
    {
        path: '/',
        component: Main,
    },
    {
        path: '/auth',
        component: UserAuth,
    },
    {
        path: '/register',
        component: UserRegistration,
    },
    {
        path: '/event_board',
        component: EventBoard,
    },
    {
        path: '/user_events',
        component: UserEvents,
    },
    {
        path: '/event/:id',
        component: EventPage,
    }
]

const router = createRouter( {
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;
