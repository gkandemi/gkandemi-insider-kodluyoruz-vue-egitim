import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: () => import("../views/Home.vue")
  },
  {
    path: "/about",
    component: () => import("../views/About.vue")
  },
  {
    path: "/contact",
    component: () => import("../views/Contact.vue")
  },
  {
    path: "/details",
    component: () => import("../views/Details.vue")
  },
  {
    path: "/details/:id",
    component: () => import("../views/Details.vue")
  },
  {
    path: "*",
    component: () => import("../views/NotFound.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
