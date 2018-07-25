import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home/Home.vue'

Vue.use(Router)
const router =  new Router({
  mode: "hash",
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
		title: "MEWconnect - by MyEtherWallet"
      }
    }
  ]
})
router.beforeEach((to, from, next) => {
    document.title = to.meta.title
    next()
})
export default router