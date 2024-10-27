import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ShannonView from '../views/ShannonView.vue';
import MigrationView from '@/views/MigrationView.vue';
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
      path: '/hotspots',
      name: 'hotspots',
      component: HotspotsView,
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
