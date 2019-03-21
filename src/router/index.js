import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import Map from '@/pages/map/Map'
import Card from '@/pages/card/Card'
import About from '@/pages/about/About'
import Self from '@/pages/self/Self'
import Register from '@/pages/register'
import Login from '@/pages/login'
import Exit from '@/pages/exit'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/map',
      name: 'Map',
      component: Map
    },
    {
      path: '/card',
      name: 'Card',
      component: Card
    },
    {
      path: '/self',
      name: 'Self',
      component: Self
    }, {
      path: '/about',
      name: 'About',
      component: About
    }, {
      path: '/register',
      name: 'Register',
      component: Register
    }, {
      path: '/login',
      name: 'Login',
      component: Login
    }, {
      path: '/exit',
      name: 'Exit',
      component: Exit
    }]
})
