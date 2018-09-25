<template>
  <v-container grid-list-xl text-xs-center class="contain">
    <div align="center">
      <v-card hover width="400">
        <v-toolbar dark color="cyan">
          <v-toolbar-title>Login</v-toolbar-title>
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
      <v-btn color="cyan" dark @click="signIn">Masuk</v-btn>
      <p>Belum punya akun? <router-link to="/signup"><a>Daftar</a></router-link></p>
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
  name: 'Login',
  data: function () {
    return {
      password: '',
      passwordRules: [
        v => !!v || 'Password tidak boleh kosong'
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail tidak boleh kosong',
        v => /.+@.+/.test(v) || 'E-mail tidak valid'
      ]
    }
  },
  methods: {
    signIn: function () {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
        function (user) {
          this.$router.replace('home')
        },
        function (err) {
          alert('Maaf, ' + err.message)
        }
      )
    }
  }
}
</script>

<style scoped>
.panel{
  margin-bottom: 20px;
  background-color: #fff;
  border: 1px solid lightgray;
  border-radius: 4px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, .05);
}
.panel-heading{
  color: white;
  font-weight: bolder;
  background-color: #4bcb14;
  padding: 10px 15px;
  border-bottom: 1px solid transparent;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}
.panel-body{
  padding: 15px;
}
.btn{
  font-weight: bolder;
  background-color: #4bcb14;
  display: inline-block;
  padding: 6px 12px;
  margin-bottom: 0;
  font-size: 14px;
  font-weight: normal;
  line-height: 1.42857143;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  -ms-touch-action: manipulation;
  touch-action: manipulation;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  ms-user-select: none;
  user-select: none;
  background-image: none;
  border: 1px solid transparent;
  border-radius: 4px;
}
.btn:hover{
  background-color: #399c0e;
}
.btn:focus{
  background-color: #246b06;
}
.contain{
  margin-top:100px;

}
</style>
