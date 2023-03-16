import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/question/:slug",
    name: "question",
    component: () =>
      import(
      "../views/QuestionView.vue"
      ),
    props: true,
  },
  {
    path: "/ask/:slug?",
    name: "question-editor",
    component: () =>
      import("../views/QuestionEditor.vue"
      ),
    props: true,
  },
  {
    path: "/answer/:uuid",
    name: "answer-editor",
    component: () =>
      import("../views/AnswerEditor.vue"
      ),
    props: true,
  },
  {
    path: "/:catchAll(.*)",
    name: "page-not-found",
    component: () =>
      import("../views/NotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHistory("/"),
  routes,
});

export default router;
