import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import Folder from '../views/Folder.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/projet',
    name: 'Projet',
    component: Folder
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
