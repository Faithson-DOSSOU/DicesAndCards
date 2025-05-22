<template>
  <div class="container">
    <div class="wrapper">
      <div class="form">
        <form @submit.prevent="loginUser">
          <h2>Je me connecte</h2>
          <p>Entrez vos identifiants</p>
          <p class="error-message" v-if="message">{{ message }}</p>

          <div>
            <label>Adresse email</label>
            <input type="email" placeholder="jeanmarie@gmail.com" v-model="email" required />
          </div>

          <div>
            <label>Mot de passe</label>
            <input type="password" v-model="password" required />
          </div>

          <div class="bottom-links">
            <router-link to="#" class="link">Mot de passe oublié?</router-link>
          </div>

          <input type="submit" value="Connecte-toi" id="submit" />
        </form>
      </div>

      <div class="banniere">
        <img :src="imagebanniere" alt="banner illustration" />
      </div>
    </div>
  </div>
</template>

<script>
import imagebanniere from '../assets/png/imagebanniere.png';
import axios from 'axios';
import { useUserStore } from '../stores/user';
import { useRouter } from 'vue-router';

export default {
  name: 'Login',
  data() {
    return {
      imagebanniere,
      email: '',
      password: '',
      message: '',
    };
  },
  mounted() {
    this.userStore = useUserStore();
    this.router = useRouter();
  },
  methods: {
    async loginUser() {
      try {
        const response = await axios.post('http://localhost:3000/api/login', {
          email: this.email,
          password: this.password
        });

        if (response.data && response.data.user) {
          this.userStore.setUser(response.data.user);

          // ✅ Sauvegarde l'id utilisateur dans localStorage
          localStorage.setItem('userId', response.data.user.id_utilisateur);

          // Redirection selon le rôle
          if (response.data.user.role === 'admin') {
            this.router.push('/Dashboard');
          } else {
            this.router.push('/Home');
          }
        }
      } catch (error) {
        this.message = 'Email ou mot de passe incorrect';
        console.error('Erreur login :', error?.response?.data || error);
      }
    }
  },
}
</script>

<style scoped>
.container {
  width: 100%;
  min-height: 120vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f6f6f6;
  font-family: "Segoe UI", sans-serif;
}

.wrapper {
  display: flex;
  width: 90%;
  max-width: 900px;
  background-color: #fff;
  border-radius: 16px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05);
  overflow: hidden;
}

.form {
  width: 50%;
  padding: 2rem 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.form h2 {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 10px;
}

.form p {
  margin-bottom: 20px;
  color: #555;
}

.form label {
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
}

.form input[type="email"],
.form input[type="password"] {
  width: 100%;
  padding: 12px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
}

.bottom-links {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 20px;
}

.link {
  color: #7c3aed;
  font-size: 0.9rem;
  text-decoration: none;
}

.link:hover {
  text-decoration: underline;
}

#submit {
  width: 100%;
  padding: 12px;
  background-color: #7c3aed;
  color: white;
  border: none;
  border-radius: 999px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s;
}

#submit:hover {
  background-color: #6d28d9;
}

.banniere {
  width: 50%;
  background-color: #f3e8ff;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
}

.banniere img {
  max-width: 100%;
  height: auto;
  border-radius: 12px;
}

.error-message {
  color: red;
  font-size: 0.9rem;
  margin-bottom: 10px;
}
</style>
