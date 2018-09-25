import '@babel/polyfill'
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import './plugins/vuetify'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// import firebase from 'firebase'
import * as VueGoogleMaps from 'vue2-google-maps'
import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css'
var firebase = require('firebase/app')
require('firebase/auth')
Vue.use(Vuesax)
Vue.use(Vuetify, {
  iconfont: 'mdi' // 'md' || 'mdi' || 'fa' || 'fa4'
})
// require('firebase/database')
// require('firebase/firestore')
// require('firebase/messaging')
// require('firebase/functions')
Vue.use(BootstrapVue)
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDfkswl4OL6BSoeyO_GO1784o114qVnp1w'
  }
})
Vue.config.productionTip = false
let app
let config = {
  apiKey: 'AIzaSyApmYTxA0JYndS2VryQhoOm4F9YQj9THqY',
  authDomain: 'vuefire-208b3.firebaseapp.com',
  databaseURL: 'https://vuefire-208b3.firebaseio.com',
  projectId: 'vuefire-208b3',
  storageBucket: 'vuefire-208b3.appspot.com',
  messagingSenderId: '883903986394'
}

firebase.initializeApp(config)
firebase.auth().onAuthStateChanged(function (user) {
  if (!app) {
    /* eslint-disable no-new */
    app = new Vue({
      el: '#app',
      router,
      components: { App },
      template: '<App/>'
    })
  }
})
