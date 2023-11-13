import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    name: "MainPage",
    component: () => import("@/views/MainPage.vue"),
    path: "/"
  },
  {
    name: "UserProfilePage",
    component: () => import("@/views/UserProfilePage.vue"),
    path: "/profile/:id"
  },
  { path: "/:catchAll(.*)", redirect: "/" }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
