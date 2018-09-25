<template>
<div>
<v-toolbar color="cyan" dark fixed-top app>
<v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
<v-toolbar-title>SIDe</v-toolbar-title>
<v-spacer></v-spacer>
<!-- <v-toolbar-items>
<v-menu bottom
origin="center center"
transition="scale-transition" absolute>
<v-btn slot="activator" dark icon>
<v-icon>more_vert</v-icon>
</v-btn>
<v-list>
<v-list-tile v-for="(item, index) in menus" :key="index">
<v-list-tile-title>{{ item.title }}</v-list-tile-title>
</v-list-tile>
</v-list>
</v-menu>
</v-toolbar-items> -->
<v-toolbar-items>
<v-btn flat @click="logout">
<v-icon>logout</v-icon>
<b>Keluar</b>
</v-btn>
</v-toolbar-items>
</v-toolbar>
<v-navigation-drawer
v-model="drawer"
fixed
app
dark
class="cyan">
<v-list dense>
<v-list-tile
@click="as">
<v-list-tile-action>
<v-icon>home</v-icon>
</v-list-tile-action>
<v-list-tile-content>
<v-list-tile-title>
<router-link to="/home" style="color:white;"><b>Home</b></router-link>
</v-list-tile-title>
</v-list-tile-content>
</v-list-tile>
<v-list-tile
@click="as">
<v-list-tile-action>
<v-icon>info</v-icon>
</v-list-tile-action>
<v-list-tile-content>
<v-list-tile-title>
<router-link to="/desa" style="color:white;"><b>Info Desa</b></router-link></v-list-tile-title>
</v-list-tile-content>
</v-list-tile>
<v-list-tile
@click="as">
<v-list-tile-action>
<v-icon>trending_up</v-icon>
</v-list-tile-action>
<v-list-tile-content>
<v-list-tile-title><b>Statistik</b></v-list-tile-title>
</v-list-tile-content>
</v-list-tile>
<v-list-tile
@click="as">
<v-list-tile-action>
<v-icon>people</v-icon>
</v-list-tile-action>
<v-list-tile-content>
<v-list-tile-title>
<router-link to="/kependudukan" style="color:white;"><b>Kependudukan</b></router-link>
</v-list-tile-title>
</v-list-tile-content>
</v-list-tile>
<v-list-tile
@click="as">
<v-list-tile-action>
<v-icon>map</v-icon>
</v-list-tile-action>
<v-list-tile-content>
<v-list-tile-title><b>GIS Desa</b></v-list-tile-title>
</v-list-tile-content>
</v-list-tile>
<v-list-tile
@click="as">
<v-list-tile-action>
<v-icon>contact_mail</v-icon>
</v-list-tile-action>
<v-list-tile-content>
<v-list-tile-title><b>Kontak</b></v-list-tile-title>
</v-list-tile-content>
</v-list-tile>
<v-list-tile
@click="as">
<v-list-tile-action>
<v-icon>business</v-icon>
</v-list-tile-action>
<v-list-tile-content>
<v-list-tile-title><b>Pembangunan</b></v-list-tile-title>
</v-list-tile-content>
</v-list-tile>
</v-list>
</v-navigation-drawer>
</div>
</template>
<script>
var firebase = require('firebase/app')
require('firebase/auth')
var a = 1
export default{
  data () {
    return {
      dialog: false,
      menus: [
        { title: 'Pengaturan Akun' },
        { title: 'Keluar' }
      ],
      drawer: null
    }
  },
  methods: {
    as: function () {
      a = a + 1
    },
    logout: function () {
      firebase.auth().signOut().then(() => {
        this.$router.replace('login')
      })
    }
  }
}
</script>
