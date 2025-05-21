<script>
import axios from 'axios';

export default {
  name: 'CatalogContent',
  data() {
    return{
      jeux: [],
    }
  },
  mounted() {
    axios.get('http://localhost:3000/api/jeux')
        .then(response => {
          this.jeux = response.data;
        })
        .catch(error => {
          console.error("Erreur lors du chargement des jeux :", error);
        });
  }
}
</script>

<template class="main-catalog">
  <div class="main-catalog-wrapper">
    <div v-for="jeu in jeux" :key="jeu.id_jeu" class="jeu-card">
      <h3>{{ jeu.nom }}</h3>
      <p><strong>Âge minimum :</strong> {{ jeu.age_min }} ans</p>
      <p><strong>Durée :</strong> {{ jeu.temps_de_jeu }} minutes</p>
      <p><strong>Joueurs :</strong> de {{ jeu.nbr_min_joueurs }} à {{ jeu.nbr_max_joueurs }}</p>
      <p><strong>Note :</strong> {{ jeu.note_moyenne }}</p>
    </div>
  </div>
</template>

<style scoped>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.main-catalog-wrapper{
  width: 1000px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}
.jeu-card {
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 15px;
  margin: 10px;
  width: 300px;
  background-color: #f9f9f9;
  box-shadow: 2px 2px 8px rgba(0,0,0,0.1);
}
</style>