<script>
import login from '../assets/svg/login-svgrepo-com.svg';
import logout from '../assets/svg/logout-svgrepo-com.svg'
import plus from '../assets/svg/plus-svgrepo-com.svg'

export default {
  name: 'ProfilePanel',
  props: ['visible', 'loggedIn'],
  data() {
    return{
      login,
      logout,
      plus
    }
  }
}
</script>

<template>
<div v-if="visible" class="profile-panel">
  <div v-if="loggedIn">
    <ul class="profile-list">
      <li><span class="option">Se déconnecter</span></li>
    </ul>
  </div>
  <div v-else>
    <ul class="profile-list">
      <li><span class="option"><router-link to="/Login" class="option-link">Se connecter</router-link></span><img class="profile-option-icon" :src="login" alt=""/></li>
      <li><span class="option"><router-link to="/SignUp" class="option-link">Créer un compte</router-link></span><img class="profile-option-icon" :src="plus" alt=""/></li>
    </ul>
  </div>
</div>
</template>

<style scoped>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.profile-panel{
  margin-top: 40px;
  position: absolute;
  width: fit-content;
  height: fit-content;
  background: white;
  border: 1px solid var(--alt-one-color);
  border-radius: 8px;
  z-index: 1100;
  padding: 3px;
  box-shadow:  0 0 2px black;
}
.profile-list{
  list-style-type: none;
}
.profile-panel li{
  border-radius: 8px;
  cursor: pointer;
  padding: 8px 8px;
  text-decoration: none;
  color: black;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border: 1px solid white;
}
.profile-panel li:hover{
  border: 1px solid gray;
}
.option{
  //padding: 0 0 0 10px;
  font-size: 14px;
  font-family: Verdana, sans-serif;
}
.option-link{
  text-decoration: none;
  color: black;
}
.profile-option-icon{
  height: 20px;
  width: 20px;
}
</style>