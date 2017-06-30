import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Vaults from '@/components/Vaults'
import Vault from '@/components/Vault'
import Login from '@/components/Login'
import Register from '@components/Register'
import Keeps from '@components/Keeps'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },{
      path: '/vaults/:id',
      name: 'Vault',
      component: Vault
    },{
      path: '/vaults',
      name: 'Vaults',
      component: Vaults
    },{
      path: '/keeps',
      name: 'Keeps',
      component: Keeps
    },{
      path: '/login',
      name: 'Login',
      component: Login
    },{
      path: '/register',
      name: 'Register',
      component: Register
    }
  ]
})
