<script>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';

export default {
  components: {Header, Footer},
  name: 'DefaultLayout'
}
</script>

<template>
  <Header/>
  <div class="main-container">
    <router-view/>
  </div>
  <Footer class="footer" />
</template>

<style scoped>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.main-container{
  min-height: 800px;
  width: 100%;
  margin: auto;
}
.footer{
  position: relative;
  bottom: 0;
}
</style>