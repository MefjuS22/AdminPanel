import { createRouter, createWebHistory } from "vue-router";
import HomeView from "./pages/Home/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Dashboard",
      component: HomeView,
    },
    {
      path: "/users",
      name: "users",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("./pages/Users/UsersView.vue"),
    },
  ],
});

export default router;
