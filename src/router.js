import { createRouter, createWebHashHistory } from 'vue-router'
import { authGuard } from '@bcwdev/auth0provider-client'
import HomePage from "@/pages/HomePage.vue";

function loadPage(page) {
  return () => import(`./pages/${page}.vue`)
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },

  // {
  //   path: '/about',
  //   name: 'About',
  //   component: loadPage('AboutPage')
  // },
  // {
  //   path: '/account',
  //   name: 'Account',
  //   component: loadPage('AccountPage'),
  //   beforeEnter: authGuard
  // }
];

export const router = createRouter({
  linkActiveClass: 'router-link-active',
  linkExactActiveClass: 'router-link-exact-active',
  history: createWebHashHistory(),
  routes
})
