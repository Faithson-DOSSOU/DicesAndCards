<script>
import axios from 'axios';

export default {
  name: 'CatalogContent',
  data() {
    return {
      jeux: [],
    };
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

<template>
  <div class="main-catalog-wrapper">
    <div v-for="jeu in jeux" :key="jeu.id_jeu" class="jeu-card">
      <img :src="jeu.image_path" :alt="jeu.nom" />
      <div class="jeu-info">
        <h3>{{ jeu.nom }}</h3>
        <p><strong>Âge minimum :</strong> {{ jeu.age_min }} ans</p>
        <p><strong>Durée :</strong> {{ jeu.temps_de_jeu }} minutes</p>
        <p><strong>Joueurs :</strong> de {{ jeu.nbr_min_joueurs }} à {{ jeu.nbr_max_joueurs }}</p>
        <p><strong>Note :</strong> {{ jeu.note_moyenne }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.main-catalog-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 20px;
}

.jeu-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 280px;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.2s ease;
}

.jeu-card:hover {
  transform: translateY(-5px);
}

.jeu-card img {
  width: 100%;
  height: 360px;
  object-fit: cover;
  border-bottom: 1px solid #ddd;
}

.jeu-info {
  padding: 15px;
  width: 100%;
}

.jeu-info h3 {
  font-size: 1.2rem;
  margin-bottom: 10px;
  color: #333;
}

.jeu-info p {
  font-size: 0.95rem;
  margin: 4px 0;
  color: #555;
}
</style>
