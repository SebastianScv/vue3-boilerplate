import { createRouter, createWebHistory } from "vue-router";
import NotFound from "./pages/NotFound.vue";
import Main from "./pages/home";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Main },
    { path: "/:notFound(.*)", component: NotFound },
  ],
});

// Add navigation guard to check authentication before navigating to protected routes
router.beforeEach((to, from, next) => {
  // Auth functionality not implemented
  const isLoggedIn = true;
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);

  if (requiresAuth && !isLoggedIn) {
    next("/login");
  } else if (isLoggedIn && to.path === "/login") {
    next("/");
  } else {
    next();
  }
});

export default router;
