<script>
import axios from 'axios';
import chevronleft from '../assets/svg/chevron-left-svgrepo-com 2.svg';
import chevronright from '../assets/svg/chevron-right-svgrepo-com 1.svg';

export default {
  name: 'Events',
  data() {
    return {
      eventlist: [],
      currentIndex: 0,
      chevronleft,
      chevronright
    };
  },
  computed: {
    currentEvent() {
      return this.eventlist[this.currentIndex] || null;
    }
  },
  methods: {
    formatDate(date) {
      return new Date(date).toLocaleDateString('fr-FR', {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric'
      });
    },
    previousEvent() {
      if (this.eventlist.length > 0) {
        this.currentIndex = (this.currentIndex - 1 + this.eventlist.length) % this.eventlist.length;
      }
    },
    nextEvent() {
      if (this.eventlist.length > 0) {
        this.currentIndex = (this.currentIndex + 1) % this.eventlist.length;
      }
    },
    inscrireAEvent() {
      const idUtilisateur = this.$store?.state?.user?.id_utilisateur || localStorage.getItem('userId');
      const idEvenement = this.currentEvent?.id_evenement;

      if (!idUtilisateur) {
        alert("Veuillez vous connecter pour vous inscrire.");
        return;
      }

      axios.post('http://localhost:3000/api/evenements/inscription', {
        id_utilisateur: idUtilisateur,
        id_evenement: idEvenement
      })
          .then(() => {
            alert("Inscription réussie !");
          })
          .catch(error => {
            if (error.response?.status === 409) {
              alert("Vous êtes déjà inscrit à cet événement.");
            } else {
              alert("Erreur lors de l'inscription.");
            }
          });
    }
  },
  mounted() {
    axios.get('http://localhost:3000/api/evenements/en-cours')
        .then(response => {
          this.eventlist = response.data;
        })
        .catch(error => {
          console.error("Erreur lors du chargement des événements en cours :", error);
        });
  }
};
</script>


<template>
  <div class="event-page main-container" v-if="currentEvent">
    <div class="event-page-wrapper">
      <div class="event-slider-container">
        <div class="event-slider">
          <div class="slider-image-wrapper">
            <img class="event-cover" :src="currentEvent.image_path" :alt="currentEvent.titre" />
          </div>
        </div>
        <div class="chevron-nav">
          <div class="slider-button right" @click="previousEvent">
            <img class="chevron-icon" :src="chevronleft" alt="événement précédent" />
          </div>
          <div class="slider-button left" @click="nextEvent">
            <img class="chevron-icon" :src="chevronright" alt="événement suivant" />
          </div>
        </div>
      </div>

      <button class="inscription-button" @click="inscrireAEvent"><span>Inscrivez-vous</span></button>

      <div class="event-description">
        <h2>{{ currentEvent.titre }}</h2><br>
        <p>Du {{ formatDate(currentEvent.date_debut) }}</p><br>
        <p>Au {{ formatDate(currentEvent.date_fin) }}</p><br>
        <p v-html="currentEvent.description"></p>
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
  //margin-top: 50px;
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