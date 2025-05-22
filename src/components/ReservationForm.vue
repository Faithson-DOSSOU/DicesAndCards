<template>
  <div class="reservation-container">
    <h2>Réservation pour le jeu : {{ jeu.nom }}</h2>

    <form @submit.prevent="reserverJeu">
      <div class="form-group">
        <label for="table">Choisissez une table :</label>
        <select v-model="id_table" required>
          <option disabled value="">-- Choisir une table --</option>
          <option v-for="table in tables" :key="table.id_table" :value="table.id_table">
            Table #{{ table.id_table }} - Capacité : {{ table.nbre_places }}
          </option>
        </select>
      </div>

      <div class="form-group">
        <label for="date">Date et heure de début :</label>
        <input type="datetime-local" v-model="date_debut" required />
      </div>

      <div class="form-group">
        <label for="date">Date et heure de fin :</label>
        <input type="datetime-local" v-model="date_fin" required />
      </div>

      <button type="submit">Confirmer la réservation</button>
    </form>

    <p v-if="message" :style="{ color: erreur ? 'red' : 'green' }">{{ message }}</p>
  </div>
</template>

<script>
import axios from 'axios';
import { useUserStore } from '../stores/user'; // adapte le chemin si nécessaire


export default {
  name: 'ReservationForm',
  props: ['jeuId'],
  data() {
    return {
      jeu: {},
      tables: [],
      id_table: '',
      date_debut: '',
      date_fin: '',
      message: '',
      erreur: false,
    };
  },
  computed: {
    utilisateur_id() {
      const store = useUserStore();
      return store.nom ? store : null;
    }
  },
  async mounted() {
    try {
      const [jeuRes, tableRes] = await Promise.all([
        axios.get(`http://localhost:3000/api/jeux/${this.jeuId}`),
        axios.get('http://localhost:3000/api/tables')
      ]);
      this.jeu = jeuRes.data;
      this.tables = tableRes.data;
    } catch (err) {
      this.message = "Erreur lors du chargement des données";
      this.erreur = true;
    }
  },
  methods: {
    async reserverJeu() {
      const userStore = useUserStore();

      if (!userStore.nom) {
        this.message = "Utilisateur non connecté.";
        this.erreur = true;
        return;
      }

      try {
        await axios.post('http://localhost:3000/api/reserver', {
          id_utilisateur: userStore.id_utilisateur, // ⚠️ à ajouter dans ton store si pas présent
          id_jeu: this.jeuId,
          id_table: this.id_table,
          date_debut: this.date_debut,
          date_fin: this.date_fin
        });

        this.message = "Réservation confirmée !";
        this.erreur = false;
      } catch (error) {
        this.message = error.response?.data?.message || "Erreur lors de la réservation.";
        this.erreur = true;
      }
    }
  }
};
</script>

<style scoped>
.reservation-container {
  max-width: 500px;
  margin: auto;
  padding: 20px;
  background: #fefefe;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
}
.form-group {
  margin-bottom: 15px;
}
label {
  display: block;
  font-weight: 600;
  margin-bottom: 5px;
}
input,
select {
  width: 100%;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
}
button {
  background-color: #4CAF50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
button:hover {
  background-color: #45a049;
}
</style>
