import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import VueMeta from 'vue-meta'
import VueShareSocial from 'vue-share-social'
import axios from 'axios';

axios.get('http://localhost:1337/restaurants').then(response => {
  console.log(response);
});


Vue.use(VueRouter)
Vue.use(VueMeta), {
  keyName: 'head'
}
Vue.use(VueShareSocial)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/events',
    name: 'Events',
    component: () => import('../views/EventsView.vue')
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  console.log(to)
  document.title = `${ process.env.VUE_APP_TITLE } - ${to.name}`
  next()
})

export default router
