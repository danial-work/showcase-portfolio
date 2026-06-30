import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue';
import Certs from '../views/Certs.vue';
import Contact from '../views/Contact.vue';
import ProjectDetail from '../views/ProjectDetail.vue';
import ProjectsArchive from '../views/ProjectsArchive.vue';
import NotFound from '../views/NotFound.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/certs', component: Certs },
  { path: '/contact', component: Contact },
  { path: '/project/:id', component: ProjectDetail, name: 'ProjectDetail' },
  { path: '/projects', component: ProjectsArchive, name: 'ProjectsArchive' },

  { path: '/:pathMatch(.*)*', component: NotFound, name: 'NotFound' }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router