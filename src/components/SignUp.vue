/* eslint-disable no-new*/
<template>
<v-container grid-list-xl text-xs-center>
  <div align="center" wrap>
      <v-card hover width="400">
        <v-toolbar dark color="cyan">
          <v-toolbar-title>Daftar <b>SIDe</b></v-toolbar-title>
        </v-toolbar>
        <div class="container">
          <v-text-field
          type="email"
          v-model="email"
          :rules="emailRules"
          label="E-mail"
          required>
          </v-text-field>
          <v-text-field
          type="password"
          v-model="password"
          :rules="passwordRules"
          label="Password"
          required>
        </v-text-field>
        <v-btn color="cyan" dark @click="signUp">Daftar</v-btn>
        </div>
  </v-card>
</div>
</v-container>
</template>

<script>
// import firebase from 'firebase'
var firebase = require('firebase/app')
require('firebase/auth')
export default {
  name: 'SignUp',
  data: function () {
    return {
      password: '',
      passwordRules: [
        v => !!v || 'Katasandi dibutuhkan',
        v => v.length >= 5 || 'Katasandi harus lebih dari 5 karakter'
      ],
      email: '',
      emailRules: [
        v => !!v || 'Email dibutuhkan',
        v => /.+@.+/.test(v) || 'Format E-mail harus benar'
      ]
    }
  },
  methods: {
    signUp: function () {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
        (user) => {
          this.$router.replace('home')
          // alert('Selamat bergabung')
        },
        (err) => {
          alert('Maaf, ' + err.message)
        }
      )
    }
  }
}
</script>
