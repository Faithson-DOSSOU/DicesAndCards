<template>
  <div class="reservation-wrapper">
    <h1 class="title">RÉSERVATION</h1>
    <p class="jeu-name">Pour le jeu : <strong>{{ jeu.nom }}</strong></p>

    <form class="form-layout" @submit.prevent="reserverJeu">
      <div class="form-row">
        <label>Table</label>
        <select v-model="id_table" required>
          <option disabled value="">Choisissez une table...</option>
          <option v-for="table in tables" :key="table.id_table" :value="table.id_table">
            Table No{{ table.id_table }} — {{ table.nbre_places }} places
          </option>
        </select>
      </div>

      <div class="form-row">
        <label>Date et heure de début</label>
        <input type="datetime-local" v-model="date_debut" required />
      </div>

      <div class="form-row">
        <label>Date et heure de fin</label>
        <input type="datetime-local" v-model="date_fin" required />
      </div>

      <div class="form-footer">
        <button type="submit">Réserver</button>
      </div>

      <p v-if="message" :style="{ color: erreur ? 'red' : 'green', marginTop: '10px' }">
        {{ message }}
      </p>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
import { useUserStore } from '../stores/user';

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
  async mounted() {
    try {
      const [jeuRes, tableRes] = await Promise.all([
        axios.get(`http://localhost:3000/api/jeux/${this.jeuId}`),
        axios.get('http://localhost:3000/api/tables'),
      ]);
      this.jeu = jeuRes.data;
      this.tables = tableRes.data;
    } catch (err) {
      this.message = "Erreur lors du chargement.";
      this.erreur = true;
    }
  },
  methods: {
    async reserverJeu() {
      const userStore = useUserStore();

      if (!userStore.id_utilisateur) {
        this.message = "Utilisateur non connecté.";
        this.erreur = true;
        return;
      }

      try {
        await axios.post('http://localhost:3000/api/reserver', {
          id_utilisateur: userStore.id_utilisateur,
          id_jeu: this.jeuId,
          id_table: this.id_table,
          date_debut: this.date_debut,
          date_fin: this.date_fin
        });

        this.message = "Réservation confirmée.";
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
.reservation-wrapper {
  max-width: 600px;
  margin: 40px auto;
  padding: 30px;
  background: #fafafa;
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
  font-family: 'Segoe UI', sans-serif;
}

.title {
  text-align: center;
  font-size: 28px;
  margin-bottom: 30px;
  letter-spacing: 2px;
}

.form-layout {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-row {
  display: flex;
  flex-direction: column;
}

label {
  font-weight: 600;
  margin-bottom: 6px;
}

input,
select {
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 6px;
}

.form-footer {
  display: flex;
  justify-content: flex-end;
}

button {
  background-color: #222;
  color: #fff;
  padding: 10px 24px;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  cursor: pointer;
}

button:hover {
  background-color: #444;
}

.jeu-name {
  text-align: center;
  font-size: 18px;
  margin-bottom: 20px;
  color: #444;
}

</style>
