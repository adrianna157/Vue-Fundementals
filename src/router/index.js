import { createRouter, createWebHistory } from 'vue-router'
import EventList from '@/views/EventList.vue'
import Details from '@/views/event/Details.vue'
import EventRegister from '@/views/event/Register.vue'
import EventEdit from '@/views/event/Edit.vue'
import About from '@/views/About.vue'

const routes = [
  {
    path: '/',
    name: 'EventList',
    component: EventList,
    props: route => ({ page: parseInt(route.query.page) || 1 })
  },
  {
    path: '/event/:id',
    name: 'Details',
    props: true,
    component: Details
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/event/:id/register',
    name: 'EventRegister',
    props: true,
    component: EventRegister
  },
  {
    path: '/event/:id/edit',
    name: 'EventEdit',
    props: true,
    component: EventEdit
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
