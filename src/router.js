import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home/Home.vue'
import About from './views/About/About.vue'
import UserGuide from './views/UserGuide/UserGuide.vue'
import TutorialVideos from './views/TutorialVideos/TutorialVideos'
import PageNotFound from './views/PageNotFound/PageNotFound'

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
      meta: {title: 'MEWconnect About'}
    },
    {
      path: '/user-guide',
      name: 'user-guide',
      component: UserGuide,
      meta: {title: 'MEWconnect User Guide'}
    },
    {
      path: '/tutorial-videos',
      name: 'tutorial-videos',
      component: TutorialVideos,
      meta: {title: 'MEWconnect Tutorial Videos'}
    },
    {
      path: "*",
      component: PageNotFound
    }
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
