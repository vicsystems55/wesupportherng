import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", name: "Home", component: () => import("@/pages/Home.vue") },
  {
    path: "/about-us",
    name: "About",
    component: () => import("@/pages/About.vue"),
  },
  {
    path: "/our-initiatives",
    name: "Initiatives",
    component: () => import("@/pages/Initiatives.vue"),
  },
  {
    path: "/impact",
    name: "Impact",
    component: () => import("@/pages/Impact.vue"),
  },
  {
    path: "/get-involved",
    name: "GetInvolved",
    component: () => import("@/pages/GetInvolved.vue"),
  },
  {
    path: "/news-events",
    name: "NewsEvents",
    component: () => import("@/pages/NewsEvents.vue"),
  },
  {
    path: "/contact-us",
    name: "Contact",
    component: () => import("@/pages/Contact.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
