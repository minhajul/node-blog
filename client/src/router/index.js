import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/pages/Home'
import PostDetails from '@/components/pages/PostDetails'

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
      component: PostDetails,
    }
  ]
})
