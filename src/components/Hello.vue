/* eslint-disable no-new*/
<template>
<div>
  <p>{{msg}}</p>
<b-button variant="danger" @click="logout">Logout</b-button>
</div>
</template>
<script>
// import firebase from 'firebase'
var firebase = require('firebase/app')
require('firebase/auth')
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Selamat datang di aplikasi ini'
    }
  },
  methods: {
    logout: function () {
      firebase.auth().signOut().then(() => {
        this.$router.replace('login')
      })
    }
  }

}
</script>
