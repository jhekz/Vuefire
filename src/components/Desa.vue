<template>
<div>
<vuetool></vuetool>
<vuefoot></vuefoot>
<v-content>
<v-container fluid fill-height>
<v-tabs
v-model="active"
color="cyan"
dark
slider-color="yellow"
fixed-tabs
>
<v-tab ripple>
Info Desa
</v-tab>
<v-tab-item>
<v-card flat>
<v-card-text>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</v-card-text>
</v-card>
</v-tab-item>
<v-tab ripple>
Aparatur Desa
</v-tab>
<v-tab-item>
<v-card flat>
<v-card-text>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</v-card-text>
</v-card>
</v-tab-item>
</v-tabs>
</v-container>
</v-content>
</div>
</template>
<script>
import Toolbar from './Toolbar.vue'
import Footer from './Footer.vue'
export default {
  components: {
    'vuetool': Toolbar,
    'vuefoot': Footer
  },
  name: 'Home',
  data: function () {
    return {
      drawer: null
    }
  }
}
</script>
