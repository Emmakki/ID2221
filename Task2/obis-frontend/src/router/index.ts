import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ShannonView from '../views/ShannonView.vue';
import MigrationView from '@/views/MigrationView.vue';
import StatisticsView from '@/views/StatisticsView.vue';
import HotspotsView from '@/views/HotspotsView.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/hotspots',
      name: 'hotspots',
      component: HotspotsView,
    },
    {
      path: '/statistics',
      name: 'statistics',
      component: StatisticsView,
    },
    {
      path: '/migration',
      name: 'migration',
      component: MigrationView,
    },
    {
      path: '/shannon',
      name: 'shannon',
      component: ShannonView,
    },
  ],
})

export default router
