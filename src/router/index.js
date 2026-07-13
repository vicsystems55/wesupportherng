import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  /* =========================
     PUBLIC PAGES
  ========================== */

  {
    path: '/',
    name: 'Home',
    component: () => import('@/pages/Home.vue'),
    meta: {
      title: 'Home',
    },
  },

  {
    path: '/about-us',
    name: 'About',
    component: () => import('@/pages/About.vue'),
    meta: {
      title: 'About Us',
    },
  },

  {
    path: '/our-initiatives',
    name: 'Initiatives',
    component: () => import('@/pages/Initiatives.vue'),
    meta: {
      title: 'Our Initiatives',
    },
  },

  {
    path: '/impact',
    name: 'Impact',
    component: () => import('@/pages/Impact.vue'),
    meta: {
      title: 'Our Impact',
    },
  },

  {
    path: '/get-involved',
    name: 'GetInvolved',
    component: () => import('@/pages/GetInvolved.vue'),
    meta: {
      title: 'Get Involved',
    },
  },

  {
    path: '/news-events',
    name: 'NewsEvents',
    component: () => import('@/pages/NewsEvents.vue'),
    meta: {
      title: 'News & Events',
    },
  },

  {
    path: '/our-gallery',
    name: 'OurGallery',
    component: () => import('@/pages/OurGallery.vue'),
    meta: {
      title: 'Our Gallery',
    },
  },

  {
    path: '/volunteer-agreement',
    name: 'VolunteerAgreement',
    component: () => import('@/pages/VolunteerAgreement.vue'),
    meta: {
      title: 'Volunteer Agreement',
    },
  },

  {
    path: '/volunteer-policy',
    name: 'VolunteerPolicy',
    component: () => import('@/pages/VolunteerPolicy.vue'),
    meta: {
      title: 'Volunteer Policy',
    },
  },

  {
    path: '/donate',
    name: 'Donate',
    component: () => import('@/pages/Donate.vue'),
    meta: {
      title: 'Donate',
    },
  },

  {
    path: '/contact-us',
    name: 'Contact',
    component: () => import('@/pages/Contact.vue'),
    meta: {
      title: 'Contact Us',
    },
  },

  /* =========================
     ADMIN DASHBOARD
  ========================== */

  {
  path: '/login',
  name: 'AdminLogin',
  component: () => import('@/pages/Login.vue'),
  meta: {
    title: 'Admin Login',
    guestOnly: true,
  },
},

  {
    path: '/admin',
    name: 'AdminDashboard',
    component: () => import('@/pages/dashboard/index.vue'),
    meta: {
      title: 'Dashboard',
      requiresAuth: true,
    },
  },

  {
    path: '/admin/analytics',
    name: 'AdminAnalytics',
    component: () => import('@/pages/dashboard/analytics/index.vue'),
    meta: {
      title: 'Website Analytics',
      requiresAuth: true,
    },
  },

  /* =========================
     BLOG MANAGEMENT
  ========================== */

  {
    path: '/admin/posts',
    name: 'AdminPosts',
    component: () => import('@/pages/dashboard/posts/index.vue'),
    meta: {
      title: 'Blog Posts',
      requiresAuth: true,
    },
  },

  {
    path: '/admin/post-categories',
    name: 'AdminPostCategories',
    component: () =>
      import('@/pages/dashboard/post-categories/index.vue'),
    meta: {
      title: 'Post Categories',
      requiresAuth: true,
    },
  },

  {
    path: '/admin/media',
    name: 'AdminMedia',
    component: () => import('@/pages/dashboard/media/index.vue'),
    meta: {
      title: 'Media Library',
      requiresAuth: true,
    },
  },

  /* =========================
     FORM SUBMISSIONS
  ========================== */

  {
    path: '/admin/volunteer-submissions',
    name: 'AdminVolunteerSubmissions',
    component: () =>
      import('@/pages/dashboard/volunteer-submissions/index.vue'),
    meta: {
      title: 'Volunteer Forms',
      requiresAuth: true,
    },
  },

  {
    path: '/admin/contact-submissions',
    name: 'AdminContactSubmissions',
    component: () =>
      import('@/pages/dashboard/contact-submissions/index.vue'),
    meta: {
      title: 'Contact Messages',
      requiresAuth: true,
    },
  },

  /* =========================
     NEWSLETTER
  ========================== */

  {
    path: '/admin/subscribers',
    name: 'AdminSubscribers',
    component: () => import('@/pages/dashboard/subscribers/index.vue'),
    meta: {
      title: 'Subscribers',
      requiresAuth: true,
    },
  },

  {
    path: '/admin/newsletters',
    name: 'AdminNewsletters',
    component: () => import('@/pages/dashboard/newsletters/index.vue'),
    meta: {
      title: 'Newsletter Content',
      requiresAuth: true,
    },
  },

  /* =========================
     SYSTEM
  ========================== */

  {
    path: '/admin/administrators',
    name: 'AdminAdministrators',
    component: () =>
      import('@/pages/dashboard/administrators/index.vue'),
    meta: {
      title: 'Administrators',
      requiresAuth: true,
    },
  },

  {
    path: '/admin/settings',
    name: 'AdminSettings',
    component: () => import('@/pages/dashboard/settings/index.vue'),
    meta: {
      title: 'Settings',
      requiresAuth: true,
    },
  },

  /* =========================
     404 FALLBACK
  ========================== */

  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/pages/NotFound.vue'),
    meta: {
      title: 'Page Not Found',
    },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,

  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }

    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
        top: 100,
      }
    }

    return {
      top: 0,
      behavior: 'smooth',
    }
  },
})

/* =========================
   PAGE TITLE
========================== */

router.afterEach((to) => {
  const pageTitle = to.meta.title
    ? `${to.meta.title} | WeSupportHer`
    : 'WeSupportHer'

  document.title = pageTitle
})

/* =========================
   AUTH GUARD PLACEHOLDER
========================== */

const getAdminToken = () => {
  return (
    localStorage.getItem('wsh_admin_token') ||
    sessionStorage.getItem('wsh_admin_token')
  )
}

router.beforeEach((to) => {
  const token = getAdminToken()

  if (to.meta.requiresAuth && !token) {
    return {
      name: 'AdminLogin',
      query: {
        redirect: to.fullPath,
      },
    }
  }

  if (to.meta.guestOnly && token) {
    return {
      name: 'AdminDashboard',
    }
  }



  /*
   * Replace this later with Pinia or your API authentication state.
   *
   * Example:
   *
   * const authStore = useAuthStore()
   *
   * if (!authStore.isAuthenticated) {
   *   return {
   *     name: 'Login',
   *     query: {
   *       redirect: to.fullPath,
   *     },
   *   }
   * }
   */

  return true
})

export default router