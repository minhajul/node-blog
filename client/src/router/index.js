import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/pages/Home'
import Posts from '@/components/pages/Posts'
import PostDetails from '@/components/pages/PostDetails'
import Chat from '@/components/pages/Chat'
import Shop from '@/components/pages/Shop'

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
      path: '/posts',
      name: 'posts',
      component: Posts,
    },
    {
      path: '/post/:id',
      name: 'details',
      component: PostDetails,
    },
    {
      path: '/shop',
      name: 'shop',
      component: Shop,
    },
    {
      path: '/chat',
      name: 'chat',
      component: Chat,
    }
  ]
})
