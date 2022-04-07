import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home';
import Page from '@/views/Page';
import Contact from "@/views/Contact";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Uryca'
    }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import('../views/Page.vue'), WE NOT USE IT BECAUSE COMPONENT PAGE USED FOR MORE ROUTES
    component: Page,
    meta: {
      title: 'Uryca/About'
    }
  },
  {
    path: '/team',
    name: 'Team',
    component: Page,
    meta: {
      title: 'Uryca/Team'
    }
  },
  {
    path: '/care',
    name: 'Care',
    component: Page,
    meta: {
      title: 'Uryca/Care'
    }
  },
  {
    path: '/find',
    name: 'Find',
    component: Page,
    meta: {
      title: 'Uryca/Find'
    }
  },
  {
    path: '/pricing',
    name: 'Pricing',
    component: Page,
    meta: {
      title: 'Uryca/Pricing'
    }
  },
  {
    path: '/software',
    name: 'Software',
    component: Page,
    meta: {
      title: 'Uryca/Software'
    }
  },
  {
    path: '/statistics',
    name: 'Statistics',
    component: Page,
    meta: {
      title: 'Uryca/Statistics'
    }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
    meta: {
      title: 'Uryca/Contact'
    }
  },
  {
    path: '/dark',
    name: 'Dark',
    component: Page,
    meta: {
      title: 'Uryca'
    }
  },
  {
    path: '/light',
    name: 'Light',
    component: Page,
    meta: {
      title: 'Uryca'
    }
  },
  {
    // path: "*",
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: Page,
    meta: {
      title: 'Uryca',
      requiresAuth: false
    }
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
