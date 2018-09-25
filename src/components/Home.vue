<template>
  <div>
    <vuetool></vuetool>
    <vuefoot></vuefoot>
    <v-content>
      <v-container fluid fill-height>
        <b-container class="bv-example-row">
          <b-row>
            <b-col cols="8">
              <gmap-map
              :center="center"
              :zoom="12"
              style="width:100%;  height: 400px;"
              >
              <gmap-marker
              :key="index"
              v-for="(m, index) in markers"
              :position="m.position"
              @click="center=m.position"
              ></gmap-marker>
              <v-toolbar dense floating class="light-blue accent-4">
                <v-text-field hide-details prepend-icon="search" single-line></v-text-field>
                <v-btn icon>
                  <v-icon>my_location</v-icon>
                </v-btn>
                <v-btn icon>
                  <v-icon>more_vert</v-icon>
                </v-btn>
              </v-toolbar>
            </gmap-map>
            </b-col>
            <b-col>
              <v-card hover>
                <v-toolbar dark color="cyan">
                  <v-toolbar-title>Detail</v-toolbar-title>
                </v-toolbar>
                <div class="container">
                </div>
              </v-card>
            </b-col>
          </b-row>
        </b-container>
      </v-container>
    </v-content>
    v-bu
  </div>
</template>
<script>
import Toolbar from './Toolbar.vue'
import Footer from './Footer.vue'
var firebase = require('firebase/app')
require('firebase/auth')
export default {
  components: {
    'vuetool': Toolbar,
    'vuefoot': Footer
  },
  name: 'Home',
  data: function () {
    return {
      drawer: null,
      center: { lat: 45.508, lng: -73.587 },
      markers: [],
      places: [],
      currentPlace: null
    }
  },
  mounted () {
    this.geolocate()
  },
  methods: {
    setPlace (place) {
      this.currentPlace = place
    },
    addMarker () {
      if (this.currentPlace) {
        const marker = {
          lat: this.currentPlace.geometry.location.lat(),
          lng: this.currentPlace.geometry.location.lng()
        }
        this.markers.push({ position: marker })
        this.places.push(this.currentPlace)
        this.center = marker
        this.currentPlace = null
      }
    },
    geolocate: function () {
      navigator.geolocation.getCurrentPosition(position => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        }
      })
    },
    logout: function () {
      firebase.auth().signOut().then(() => {
        this.$router.replace('login')
      })
    }
  }
}
</script>
<style scoped>
b-col:hover{
  color: blue;
}
h4{
  color:cyan;
}
</style>
