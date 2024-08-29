import { createWebHistory, createRouter } from 'vue-router'

import Login from '@/views/login/index.vue'

const routes = [
  { path: '/', component: Login }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})