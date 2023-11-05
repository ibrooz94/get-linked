import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/contact',
      name: 'contact',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ContactView.vue')
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (from.name == 'contact' && to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
        top: 120
      }
    }
  }
})

export default router
