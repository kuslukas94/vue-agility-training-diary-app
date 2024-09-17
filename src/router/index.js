import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DashView from '@/views/DashView.vue'
import NewTrainingView from '@/views/NewTrainingView.vue'
import DogsView from '@/views/DogsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashView
    },
    {
      path: '/trainings',
      name: 'trainings',
      component: () => import('../views/TrainingsView.vue')
    },
    {
      path: '/new-training',
      name: 'newtraining',
      component: NewTrainingView
    },
    {
      path: '/dogs',
      name: 'dogs',
      component: DogsView
    },
    {
      path: '/statistics',
      name: 'statistics',
      component: () => import('../views/StatisticsView.vue')
    },
    {
      path: '/settings',
      name: 'settings',
      component: () => import('../views/SettingsView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    }
  ]
})

export default router
