import { createRouter, createWebHistory } from "vue-router";
import SignIn from "../components/SignIn.vue";
import SignUp from "../components/SignUp.vue";
import Navbar from "../components/Navbar.vue";
import MainPage from "../views/MainPage.vue";
import Profile from "../views/Profile.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        { path: "/signIn", component: SignIn },
        { path: "/signUp", component: SignUp },
        { path: "/nav", component: Navbar },
        { path: "/main", component: MainPage },
        { path: "/profile", component: Profile },
    ],
});

export default router;
