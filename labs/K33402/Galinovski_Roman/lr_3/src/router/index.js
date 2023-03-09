import Index from "@/views/Index.vue"
import Login from "@/views/Login.vue"
import Events from "@/views/Events.vue"
import Registration from "@/views/Registration.vue"
import SearchResults from "@/views/SearchResults.vue"
import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)
const routes = [
  {
    path: "/",
    name: "Index",
    component: Index
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/register",
    name: "Registration",
    component: Registration
  },
  {
    path: "/my-events",
    name: "Events",
    component: Events
  },
  {
    path: "/search-results",
    name: "SearchResults",
    component: SearchResults
  }
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
})

export default router
