import { createRouter, createWebHistory } from 'vue-router'
import EventList from '@/views/EventList.vue'
import Details from '@/views/event/Details.vue'
import EventRegister from '@/views/event/Register.vue'
import EventEdit from '@/views/event/Edit.vue'
import EventLayout from '@/views/event/Layout.vue'
import About from '@/views/About.vue'
import NotFound from '@/views/NotFound.vue'
import NetworkError from '@/views/NetworkError.vue'

const routes = [
  {
    path: '/',
    name: 'EventList',
    component: EventList,
    props: route => ({ page: parseInt(route.query.page) || 1 })
  },
  {
    path: '/event/:id',
    name: 'EventLayout',
    props: true,
    component: EventLayout,
    children: [
      {
        path: '',
        name: 'Details',
        props: true,
        component: Details
      },
      {
        path: 'register',
        name: 'EventRegister',
        component: EventRegister
      },
      {
        path: 'edit',
        name: 'EventEdit',
        component: EventEdit
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  // match all routes that don't match an existing route
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  },
  // if the resource doesnt exist
  {
    path: '/404/:resource',
    name: '404Resource',
    component: NotFound,
    props: true
  },
  // if there is a connectivity issue
  {
    path: '/network-error/',
    name: 'NetworkError',
    component: NetworkError,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

// use case: if you need an updated path (events/:id) to redirect to old path (event/:id) and catches all nested routes as well
//  {
//     path: '/event/:afterEvent(.*)',
//     redirect: to => {
//       return { path: '/events/' + to.params.afterEvent}
//     }
//   }
