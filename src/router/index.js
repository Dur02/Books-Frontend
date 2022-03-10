import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/Login'

const routes = [
  {
    path: '/',
    name: 'main',
    redirect: Login
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login
  },
  {
    path: '/home',
    name:'Home',
    component: () => import('@/views/Home'),
    meta:{
      requireAuth:true
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
