import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import HomePage from "@/pages/HomePage";
import PageNotFound from "@/pages/PageNotFound";
import CryptoPage from "@/pages/CryptoPage";
import LoginPage from "@/pages/LoginPage";
import SignupPage from "@/pages/SignupPage";
import PortfolioPage from "@/pages/PortfolioPage";

import VueAxios from "vue-axios";
import axios from "axios";

const routes = [
    { path: "/", component: HomePage },
    { path: "/login", component: LoginPage },
    { path: "/signup", component: SignupPage },
    { path: "/profile", component: PortfolioPage },
    { path: "/market/:currency", component: CryptoPage },
    { path: "/:pathMatch(.*)*", component: PageNotFound },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

const app = createApp(App);
app.use(router);
app.use(VueAxios, axios);
app.mount("#app");
