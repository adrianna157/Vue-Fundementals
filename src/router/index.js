import { createRouter, createWebHistory } from 'vue-router'
import EventList from '@/views/EventList.vue'
import Details from '@/views/event/Details.vue'
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
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
