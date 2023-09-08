import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    props: true,
    component: Home,
  },
  {
    path: "/hotels",
    name: "HotelResults",
    props: true,
    component: () =>
      import("../views/HotelResults.vue"),
  },
  {
    path: "/hotels/:name",
    name: "HotelDetails",
    props: true,
    component: () =>
      import("../views/HotelDetails.vue"),
  },
  {
    path: "/reservation",
    name: "Reservation",
    props: true,
    component: () =>
      import("../views/Reservation.vue"),
  },
  {
    path: "/payment",
    name: "Payment",
    props: true,
    component: () =>
      import("../views/Payment.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
