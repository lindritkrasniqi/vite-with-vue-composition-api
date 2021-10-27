import { createRouter, createWebHistory } from "vue-router";
import store from "~/store";

const redirectToHomeOnLoggedIn = (to, from, next) => {
  if (store.state.auth.loggedIn) next({ name: "index" });
  else next();
};

const routes = [
  {
    path: "/",
    name: "index",
    component: () => import("~/pages/index.vue"),
    meta: { layout: "loggedIn" },
  },

  {
    path: "/accounts/login",
    name: "accounts-login",
    component: () => import("~/pages/accounts/login.vue"),
    beforeEnter: redirectToHomeOnLoggedIn,
  },

  {
    path: "/accounts/register",
    name: "accounts-register",
    component: () => import("~/pages/accounts/register.vue"),
    beforeEnter: redirectToHomeOnLoggedIn,
  },

  {
    path: "/accounts/forgot",
    name: "accounts-forgot",
    component: () => import("~/pages/accounts/forgot.vue"),
    beforeEnter: redirectToHomeOnLoggedIn,
  },

  {
    path: "/accounts/logout",
    name: "accounts-logout",
    component: () => import("~/pages/accounts/logout.vue"),
    meta: { requireAuth: true },
  },

  {
    path: "/accounts/reset",
    name: "accounts-reset",
    component: () => import("~/pages/accounts/reset.vue"),
    beforeEnter: (to, from, next) => {
      if (store.state.auth.loggedIn) next({ name: "index" });
      else if (!to.query.email || !to.query.token)
        next({ name: "accounts-login" });
      else next();
    },
  },

  {
    path: "/:pathMatch(.*)*",
    component: () => import("~/pages/404.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth && !store.state.auth.loggedIn)
    next({ name: "accounts-login" });
  else next();
});

export default router;
