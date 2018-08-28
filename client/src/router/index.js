import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Single from '@/components/posts/Single'

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/post/:id',
      name: 'details',
      component: Single,
    }
  ]
})
