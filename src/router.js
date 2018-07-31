import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home/Home.vue'
import About from './views/About/About.vue'
import UserGuide from './views/UserGuide/UserGuide.vue'

Vue.use(Router)

const router = new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {title: 'MEWconnect'}
    },
    {
      path: '/about',
      name: 'about',
      component: About,
      meta: {title: 'MEWconnect'}
    },
    {
      path: '/user-guide',
      name: 'user-guide',
      component: UserGuide,
      meta: {title: 'MEWconnect'}
    },
  ],
  scrollBehavior () {
    return { x: 0, y: 0 }
  }
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})

export default router
