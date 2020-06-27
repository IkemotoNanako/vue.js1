import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/RouterLink.vue'
import Service from '../views/Service.vue'
import Contact from '../views/Contact.vue'
Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component:About/* webpackChunkName: "about" */ 
  },
  {
  path: '/service',
  name: 'service',
  component:Service
},
{
  path: '/contact',
  name: 'contact',
  component:Contact
}

]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
