import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/register',
      name: 'register',
      component: () => import(/* webpackChunkName: "login" */ './views/Register.vue')
    },
    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (login.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "login" */ './views/Login.vue')
    },
    
    {
      path: '/botnav',
      name: 'botnav',
      component: () => import( './views/Botnav.vue'),
      children:[
        {
          path: '',
          name: '',
          component: () => import('./views/Index.vue'),
        },
        {
          path: 'index',
          name: 'index',
          component: () => import('./views/Index.vue'),
        },
        {
          path: 'list',
          name: 'list',
          component: () => import('./views/List.vue'),
        },
        {
          path: 'search',
          name: 'search',
          component: () => import('./views/Search.vue'),
        },
        {
          path: 'cart',
          name: 'cart',
          component: () => import('./views/Cart.vue'),
        },
        {
          path: 'mine',
          name: 'mine',
          component: () => import('./views/Mine.vue'),
        },
      ]
    }
  ]
})
