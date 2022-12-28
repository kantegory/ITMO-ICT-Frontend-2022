import { createRouter, createWebHistory } from "vue-router";
import Main from "../views/main.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Profile from "../views/profile.vue";
import About from "../views/About.vue";
import bookInfo from "../views/bookInfo";
import PageNotFound from "../views/NoPage";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Main,
    meta: {
      title: 'Home'
    }
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: {
      title: 'Login'
    }
  },
  {
    path: "/About",
    name: "About",
    component: About,
    meta: {
      title: 'About'
    }
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
    meta: {
      title: 'Register'
    }
  },
  {
    path: "/bookInfo/:id",
    name: "bookInfo",
    component: bookInfo,
    meta:{
      title: 'Description'
    }
    },
    {
    path: "/profile",
    name: "Profile",
    component: Profile,
    meta:{
      title: 'Profile'
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: "Not_Found",
    component: PageNotFound,
    meta:{
      title: '404'
    }

  }

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
 router.beforeEach((to, from, next) =>
 {
   document.title = `${to.meta.title} | Book Project`;
   next();
 })

export default router;
