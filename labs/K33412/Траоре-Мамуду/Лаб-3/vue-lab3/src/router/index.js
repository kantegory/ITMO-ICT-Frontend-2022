import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView";
import RegisterView from "../views/RegisterView";
import UserView from "../views/UserView";
import CalendarView from "../views/CalendarView";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/register",
    name: "register",
    component: RegisterView,
  },
  {
    path: "/user",
    name: "user",
    component: UserView,
  },
  {
    path: "/calendar",
    name: "calendar",
    component: CalendarView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
