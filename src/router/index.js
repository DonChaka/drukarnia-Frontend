import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

// import home from '@/components/guest/home'
import register from '@/components/guest/register'
import login from '@/components/guest/login'
import printers from '@/components/guest/printers'
import filaments from '@/components/guest/filaments'

import addOrder from '@/components/client/addOrder'
import userOrders from '@/components/client/userOrders'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/register',
    name: 'register',
    component: register
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/addOrder',
    name: 'addOrder',
    component: addOrder
  },
  {
    path: '/userOrders',
    name: 'userOrders',
    component: userOrders
  },
  {
    path: '/printers',
    name: 'printers',
    component: printers
  },
  {
    path: '/filaments',
    name: 'filaments',
    component: filaments
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
