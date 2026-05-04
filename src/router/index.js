import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/certs', component: () => import('../views/Certs.vue') },
  { path: '/contact', component: () => import('../views/Contact.vue') }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router