<script>

import event from '../assets/png/events_bg.png';
import event2 from '../assets/png/events_bg2.png';
import chevronleft from '../assets/svg/chevron-left-svgrepo-com 2.svg';
import chevronright from '../assets/svg/chevron-right-svgrepo-com 1.svg';

export default {
  name : 'Events',
  data() {
    return {
      event,
      event2,
      chevronleft,
      chevronright,
      dateDebut: new Date('2025-05-20'),
      dateFin : new Date('2025-05-25')
    }
  },
  methods: {
    formatDate(date) {
      return date.toLocaleDateString('fr-FR', {
        //weekday: 'long',    // en option : "mardi"
        year: 'numeric',
        month: 'numeric',
        day: 'numeric'
      });
    }
  }
};
</script>

<template>
  <div class="event-page main-container">
    <div class="event-page-wrapper">
      <div class="event-slider-container">
        <div class="event-slider">
          <div class="slider-image-wrapper">
            <img class="event-cover" :src="event" alt="">
          </div>
          <div class="slider-image-wrapper">
            <img class="event-cover" :src="event2" alt="">
          </div>
        </div>
        <div class="chevron-nav">
          <div class="slider-button right">
            <img class="chevron-icon" :src="chevronleft" alt="">
          </div>
          <div class="slider-button left">
            <img class="chevron-icon" :src="chevronright" alt="">
          </div></div>
      </div>
      <button class="inscription-button"><span>Inscrivez-vous</span></button>
      <div class="event-description">
        <h2>Titre de l'évènement</h2><br>
        <p>Du {{ formatDate(dateDebut) }}</p><br>
        <p>Au {{ formatDate(dateFin) }}</p><br>
        <p>Envie de rire, de découvrir de nouveaux jeux ou simplement de passer un bon moment en famille ou entre amis ? La Fête du Jeu est l’événement qu’il te faut !
          <br>
          <br>

          👉 Au programme :
          <br>
          <br>
          Jeux de société pour tous les âges : rapides, coopératifs, de stratégie, d’ambiance…
          <br>
          <br>

          Jeux en bois géants en libre accès pour jouer autrement, dans la bonne humeur
          <br>
          <br>

          Défis et mini-tournois avec petits lots à gagner pour les plus joueurs
          <br>
          <br>

          Espace enfants dès 3 ans, avec des jeux adaptés et encadrés
          <br>
          <br>

          Coin détente & café-jeux pour faire une pause tout en continuant à s’amuser
          <br>
          <br>

          👋 Des animateurs passionnés seront là pour vous expliquer les règles, conseiller selon vos envies et surtout partager le plaisir du jeu.
          <br>
          <br>

          🎉 Une ambiance conviviale, des découvertes, du fun — et c’est gratuit !
          <br>
          <br>

          👨‍👩‍👧‍👦 Pour qui ? Tout le monde : enfants, ados, adultes, familles
          <br>
          <br>

          🟡 Inscrivez-vous maintenant et rejoignez nous.
          <br>
          Rejoins-nous pour une journée où le jeu est roi !
          <br>
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.event-page{
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.event-page-wrapper{
  width: 1100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.event-slider-container{
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
  width: 1100px;
  height: 525px;
}
.event-slider{
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  height: 525px;
  flex-wrap: wrap;
  overflow: hidden;
  border: 3px solid white;
  box-shadow: 0 0 20px white;
  border-radius: 50px;
}
.slider-image-wrapper{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  height: 525px;
  border-radius: 50px;
  overflow: hidden;
}
.event-cover{
  object-fit: cover;
  width: 100%;
}
.chevron-nav{
  position: absolute;
  height: 525px;
  width: 1100px;
  background: transparent;
  align-items: center;
  justify-items: center;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 900px;
}
.slider-button{
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
  width: 80px;
  border-radius: 50%;
}
.chevron-icon{
  height: 50px;
  width: 50px;
}
.inscription-button{
  margin-top: 20px;
  width: fit-content;
  height: fit-content;
  padding: 15px 25px;
  background: blueviolet;
  border: none;
  color: white;
  font-family: Verdana, sans-serif;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 40px;
  box-shadow: 0 0 2px black;
}
.inscription-button span{
  font-size: 17px;
}
.event-description{
  background-color: #f6f6f6;
  margin: 50px 0;
  border-radius: 20px;
  width: 1100px;
  min-height: 400px;
  padding: 60px;
  box-shadow: 0 0 2px gray;
}
</style>