<template>
  <div>
    <vuetool></vuetool>
    <vuefoot></vuefoot>
    <v-content>
      <v-container fluid fill-height>
        <b-container class="bv-example-row">
          <b-row>
            <b-col>
              <b-card img-src="./../../static/img/w.png"
              img-alt="Card image"
              img-top>
              <h4><router-link to="/kk"><b>Kartu Keluarga</b></router-link></h4>
            </b-card>
          </b-col>
          <b-col>
            <b-card img-src="./../../static/img/q.png"
            img-alt="Card image"
            img-top>
            <h4><router-link to="/kk"><b>Kartu Tanda Penduduk</b></router-link></h4>
          </b-card>
        </b-col>
        <b-col>
          <b-card img-src="./../../static/img/w1.png"
          img-alt="Card image"
          img-top>
          <h4><router-link to="/kk"><b>Kelahiran Penduduk</b></router-link></h4>
        </b-card>
      </b-col>
    </b-row>
    <br/>
    <b-row>
      <b-col>
        <b-card img-src="https://alibaba.kumpar.com/kumpar/image/upload/c_fill,g_face,f_jpg,q_auto,fl_progressive,fl_lossy,w_800/ipu7tjsms84n7amwpvjy.jpg"
        img-alt="Card image"
        img-top>
        <h4><router-link to="/kk"><b>Kematian Penduduk</b></router-link></h4>
      </b-card>
    </b-col>
    <b-col>
      <b-card img-src="https://res.cloudinary.com/cepot/image/upload/f_auto,q_auto:best/v1521446409/sosmed-icon-logo_pgeurc.png"
      img-alt="Card image"
      img-top>
      <h4><router-link to="/kk"><b>Perpindahan Penduduk</b></router-link></h4>
    </b-card>
  </b-col>
  <b-col>
    <b-card img-src="https://alibaba.kumpar.com/kumpar/image/upload/c_fill,g_face,f_jpg,q_auto,fl_progressive,fl_lossy,w_800/ipu7tjsms84n7amwpvjy.jpg"
    img-alt="Card image"
    img-top>
    <h4><router-link to="/kk"><b>Pendatang Baru</b></router-link></h4>
  </b-card>
</b-col>
</b-row>
</b-container>
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
<style scoped>
b-col:hover{
  color: blue;
}
h4{
  color:cyan;
}
</style>
