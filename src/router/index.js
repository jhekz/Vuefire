import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Hello from '@/components/Hello'
import SignUp from '@/components/SignUp'
import Home from '@/components/Home'
import Desa from '@/components/Desa'
import Kependudukan from '@/components/Kependudukan'
import VuejsDialog from 'vuejs-dialog'
// import 'vuejs-dialog/vuejs-dialog.min.css'
// import firebase from 'firebase'
var firebase = require('firebase/app')
require('firebase/auth')
Vue.use(Router)
Vue.use(VuejsDialog)

let router = new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/kependudukan',
      name: 'Kependudukan',
      component: Kependudukan,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/desa',
      name: 'Desa',
      component: Desa,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '*',
      redirect: 'login'
    },
    {
      path: '/',
      redirect: 'login'
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/hello',
      name: 'Hello',
      component: Hello,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp
    }
  ]
})

router.beforeEach((to, from, next) => {
  let currentUser = firebase.auth().currentUser
  let requiresAuth = to.matched.some(record => record.meta.requiresAuth)

  if (requiresAuth && !currentUser) next('login')
  else if (!requiresAuth && currentUser) next('home')
  else next()
})

export default router
