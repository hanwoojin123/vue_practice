import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/sub_template',
    name: 'sub_template',
    component: () => import('../views/sub_template.vue')
  },
  {
    path: '/main_view',
    name: 'main_view',
    component: () => import('../views/main_view.vue')
  },
  {
    path: '/sub_01',
    name: 'sub_01',
    component: () => import('../views/sub_01.vue')
  },
  {
    path: '/sub_02',
    name: 'sub_02',
    component: () => import('../views/sub_02.vue')
  },
  {
    path: '/sub_03',
    name: 'sub_03',
    component: () => import('../views/sub_03.vue')
  },
  {
    path: '/sub_04',
    name: 'sub_04',
    component: () => import('../views/sub_04.vue')
  },
  {
    path: '/antCollapse',
    name: 'antCollapse',
    component: () => import('../views/antCollapse.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
