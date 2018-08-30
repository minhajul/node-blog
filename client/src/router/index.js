import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/pages/home/Home'
import Posts from '@/components/pages/posts/Posts'
import PostDetails from '@/components/pages/posts/PostDetails'
import Chat from '@/components/pages/chat/Chat'
import Products from '@/components/pages/shop/Products'
import ProductDetails from '@/components/pages/shop/ProductDetails'

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
      name: 'products',
      component: Products,
    },
    {
      path: '/product/:id',
      name: 'productDetails',
      component: ProductDetails,
    },
    {
      path: '/chat',
      name: 'chat',
      component: Chat,
    }
  ]
})
