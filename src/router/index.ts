import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
// import Admin from '../views/Admin.vue'
import Folder from '../views/Folder.vue'
import Contact from '../views/Contact.vue'
import Appstore from '../views/Appstore.vue'

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
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/competences/:filter',
    name: 'Competences',
    component: Appstore
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
