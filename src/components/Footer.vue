<script>
import logo from '../assets/svg/dices_and_cards_logo.svg'

export default {
  name : 'Footer',
  data() {
    return {
      logo
    }
  }
}
</script>

<template>
  <footer class="footer">
    <div class="footer-wrapper">
      <div>
        <img class="footer-logo" :src="logo" alt="">
      </div>
      <div class="footer-list-wrapper">
        <div>
          <span class="footer-list-label">Navigation</span>
          <ul class="footer-list">
            <li><router-link to="/Home" class="footer-link">Home</router-link></li>
            <li><router-link to="/Catalogue" class="footer-link">Catalogue</router-link></li>
            <li><router-link to="/Events" class="footer-link">Evènements</router-link></li>
            <li><router-link to="/About" class="footer-link">À propos</router-link></li>
          </ul>
        </div>
        <div>
          <span class="footer-list-label">Conditions & Politiques</span>
          <ul class="footer-list">
            <li>Conditions générales</li>
            <li>Politique de confidentialité</li>
            <li>Sécurité</li>
            <li>Autre politiques</li>
          </ul>
        </div>
        <div>
          <span class="footer-list-label">Aide</span>
          <ul class="footer-list">
            <li>Contact</li>
            <li>FAQ</li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.footer{
  background: #8a2be2;
  width: 100%;
  height: var(--footer-height);
  justify-items: center;
  color: white;
  padding: 40px;
}
.footer-wrapper{
  width : 1350px;
  height: fit-content;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.footer-list-wrapper{
  padding-top: 20px;
  width: 1050px;
  height: fit-content;
  display: grid;
  grid-template-columns: 1fr 1.3fr 1fr;
}
.footer-list-label{
  display: flex;
  height: fit-content;
  flex-direction: row;
  font-size: 18px;
  max-width: 250px;
}
.footer-list{
  height: fit-content;
  margin: 15px 0;
  list-style-type: none;
}
.footer-list li{
  height: fit-content;
  margin: 10px 0;
  opacity: 80%;
}
.footer-link{
  text-decoration: none;
  color: white;
}
.footer-logo{
  height: calc(0.3 * var(--logo-height));
  width: calc(0.3 * var(--logo-width));
}
</style>