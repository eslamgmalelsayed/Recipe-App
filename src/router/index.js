import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
// import ForbiddenView from '../views/forbiddenView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    // {
    //   path: '/:pathMatch(.*)',
    //   name: 'forbidden',
    //   component: ForbiddenView
    // }
  ]
})

export default router
