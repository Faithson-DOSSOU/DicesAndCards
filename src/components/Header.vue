<script>
import Home from './Home.vue';
import About from './About.vue';
import Events from './Events.vue';
import Catalogue from "./Catalogue.vue";
import LanguagePanel from "./LanguagePanel.vue";
import logo from '../assets/svg/dices_and_cards_logo.svg'
import dropdown from '../assets/svg/dropdown-arrow-svgrepo-com.svg'
import search from '../assets/svg/search-svgrepo-com.svg';
import profile from '../assets/svg/profile-svgrepo-com (1).svg';
import ProfilePanel from "./ProfilePanel.vue";
export default {
  components: {ProfilePanel, Home, About, Events, Catalogue, LanguagePanel},
  name: 'Header',

  data() {
    return {
      logo,
      dropdown,
      search,
      profile,
      currentActiveIndex: 0,
      showLanguagePanel: false,
      showProfilePanel: false,
      isLoggedIn: false,
    }
  },
  methods: {
    /*switchActive(index) {
      let navList = document.getElementsByClassName("active");
      navList[this.currentActiveIndex].classList.remove("active");
      let newActive = document.getElementsByClassName("nav-link-wrapper")[index];
      newActive.classList.add("active");
    }*/
    toggleLanguagePanel(event) {
      if (event.type === 'mouseleave') {
        this.showLanguagePanel = false;
      } else {
        this.showLanguagePanel = !this.showLanguagePanel;
      }
    },
    toggleProfilePanel(event) {
      if (event.type === 'mouseleave') {
        this.showProfilePanel = false;
      } else {
        this.showProfilePanel = !this.showProfilePanel;
      }
    }
  }
};
</script>

<template>
  <header class="header">
    <div class="header-wrapper">
      <router-link to="/" class="logo-link"><img class="logo" :src="logo" alt="logo of dices and cards"></router-link>
      <nav>
        <ul class="nav-list">
          <li class="nav-link-wrapper"><router-link active-class="active" to="/Home"  class="nav-link">Accueil</router-link></li>
          <li class="nav-link-wrapper"><router-link active-class="active" to="/Catalogue"  class="nav-link">Catalogue</router-link></li>
          <li class="nav-link-wrapper"><router-link active-class="active" to="/Events"  class="nav-link">Evènements</router-link></li>
          <li class="nav-link-wrapper"><router-link active-class="active" to="/About"  class="nav-link">À propos</router-link></li>
        </ul>
      </nav>
      <form class="search-bar" action="/renvoie-les-données-vers-une-page-de-traitement" method="post">
        <input class="search-bar-input" type="text" placeholder="Rechercher...">
        <button class="search-bar-button" type="button"><img class="search-icon" :src="search" alt=""></button>
      </form>
      <div class="header-inner-wrapper">
        <div class="lang-toggle" @click.prevent="toggleLanguagePanel" @mouseleave="toggleLanguagePanel">
          <div class="lang-switch">
            <span class="selected-language">FR</span>
            <img class="dropdown-icon" :src="dropdown" alt="">
          </div>
          <LanguagePanel :visible="showLanguagePanel"/>
        </div>
        <div class="profile-toggle" @click.prevent="toggleProfilePanel" @mouseleave="toggleProfilePanel">
          <div class="profile-button">
            <img class="profile-icon" :src="profile" alt="">
          </div>
          <ProfilePanel :visible="showProfilePanel" :logged-in="isLoggedIn"/>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.header{
  background: var(--main-color);
  width: 100%;
  height: var(--header-height);
  justify-items: center;
  box-shadow: 0 1px 5px black;
}
.header-wrapper{
  width : 1250px;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.logo{
  height: calc(0.3 * var(--logo-height));
  width: calc(0.3 * var(--logo-width));
}
.logo-link{
  display: flex;
  height: 100%;
  width: fit-content;
  align-items: center;
}
nav{
  display: flex;
  height: 100%;
  flex-direction: row;
  align-content: center;
}
.nav-list{
  display: flex;
  flex-direction: row;
  list-style-type: none;
  flex-wrap: wrap;
  align-content: center;
  justify-content: space-between;
  width: 500px;
  height: 100%;
}
.nav-link-wrapper{
  height: 100%;
}
.nav-link{
  display: flex;
  height: 100%;
  align-items: center;
  padding: 0 20px;
  text-decoration: none;
  color: white;
  border-bottom: 2px solid var(--main-color);
}
.nav-link.active{
  border-bottom: 2px solid white;
}
.nav-link:hover{
  border-bottom: 2px solid white;
}
.header-inner-wrapper{
  width: 150px;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.search-bar{
  display: flex;
  height: fit-content;
  align-items: center;
  border-radius: 20px;
  box-shadow: 0 0 8px -1px white;
}
.search-bar-input{
  height: 35px;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  background: var(--alt-two-color);
  padding-left: 20px;
  border: 2px solid white;
  color: white;
}
.search-bar-input::placeholder{
  //padding-left: 20px;
  font-family: Verdana, sans-serif;
  //font-weight: 100;
  //opacity: 80%;
  color: white;
}
.search-bar-button{
  height: 35px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid white;
  border-left: none;
  background: var(--alt-one-color);
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
}
.search-icon{
  height: 20px;
  width: 20px;
}
.lang-toggle{
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.lang-switch{
  display: flex;
  flex-direction: row;
  align-items: center;
  height: fit-content;
  padding: 3px;
  border: 2px solid var(--main-color);
}
.lang-switch:hover{
  border: 2px solid white;
  box-shadow: 0 0 8px -1px white;
  //opacity: 70%;
  border-radius: 10px;
}
.selected-language{
  height: 30px;
  display: flex;
  padding: 0 3px 0 5px;
  color: white;
  align-items: center;
  font-size: 16px;
}
.dropdown-icon{
  height: 20px;
  width: 20px;
}
.profile-toggle{
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.profile-button{
  background: var(--alt-one-color);
  height: 40px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #8a2be2;
  border-radius: 50%;
}
.profile-button:hover{
  border: 2px solid white;
  box-shadow: 0 0 8px -3px white;
  //border-radius: 10px;
}
.profile-icon{
  height: 20px;
  width: 20px;
}
</style>
