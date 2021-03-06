import { createRouter, createWebHistory } from 'vue-router'
import TasksList from '../views/TasksList.vue'
import TaskDetails from '../views/TaskDetails.vue'

const routes = [
  {
    path: '/',
    name: 'TasksList',
    component: TasksList
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/tasks/:id',
    name: 'TaskDetails',
    props: true,
    component: TaskDetails
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
