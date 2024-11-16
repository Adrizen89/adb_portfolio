import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

import ContactView from '@/views/ContactView.vue'
import ServicesView from '@/views/ServicesView.vue'
import ProjectsView from '@/views/ProjectsView.vue'
import FAQView from '@/views/FAQView.vue'
import Project1 from '@/components/Project-1.vue'
import Project2 from '@/components/Project-2.vue'
import FormContactView from '@/views/FormContactView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/services',
      name: 'services',
      component: ServicesView,
    },
    {
      path: '/projects',
      name: 'projects',
      component: ProjectsView,
    },
    {
      path: '/faq',
      name: 'faq',
      component: FAQView,
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView,
    },
    {
      path: '/project1Page',
      name: 'project1Page',
      component: Project1,
      meta: { hideHeader: true },
    },
    {
      path: '/project2Page',
      name: 'project2Page',
      component: Project2,
      meta: { hideHeader: true },
    },
    {
      path: '/contactFormView',
      name: 'contactFormView',
      component: FormContactView,
      meta: { hideHeader: true },
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    // Toujours faire défiler vers le haut
    return { top: 0 }
  },
})

export default router
