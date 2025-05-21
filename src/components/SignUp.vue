<template>
  <div class="signup-container">
    <div class="form-box">
      <h2>Je m'inscris</h2>
      <p>Crée un compte ou <router-link to="/Login" class="link"> connectez-vous </router-link></p>

      <form @submit.prevent="submitForm">
        <p v-if="message" :style="{ color: error ? 'red' : 'green' }">{{ message }}</p>

        <label>Prenom</label>
        <input type="text" v-model="prenom" required pattern="[a-zA-Z]{2,30}" />

        <label>Nom</label>
        <input type="text" v-model="nom" required pattern="[a-zA-Z]{2,30}" />

        <label>Adresse email</label>
        <input type="email" v-model="email" required pattern="[a-zA-Z0-9-_.]+@[a-zA-Z]+\\.[a-zA-Z]{2,}" />

        <label>Mot de passe</label>
        <div class="password-wrapper">
          <input :type="showPassword ? 'text' : 'password'" v-model="password" required />
          <span class="eye-icon" @click="togglePassword">
            <svg v-if="!showPassword" xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 24 24" width="20" fill="#555">
              <path d="M0 0h24v24H0z" fill="none"/>
              <path d="M12 6a9.77 9.77 0 018.94 6A9.77 9.77 0 0112 18a9.77 9.77 0 01-8.94-6A9.77 9.77 0 0112 6m0-2C6.48 4 1.73 7.61 0 12c1.73 4.39 6.48 8 12 8s10.27-3.61 12-8c-1.73-4.39-6.48-8-12-8zm0 5a3 3 0 100 6 3 3 0 000-6z"/>
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 24 24" width="20" fill="#555">
              <path d="M12 6c4.41 0 8.26 2.72 9.54 6-1.28 3.28-5.13 6-9.54 6a9.77 9.77 0 01-8.94-6A9.77 9.77 0 0112 6m0-2C6.48 4 1.73 7.61 0 12c1.73 4.39 6.48 8 12 8s10.27-3.61 12-8c-1.73-4.39-6.48-8-12-8zM3.27 3L2 4.27 5.73 8A9.964 9.964 0 002 12a9.77 9.77 0 0010 6 9.77 9.77 0 007.73-4.09L20.73 21 22 19.73 3.27 3z"/>
            </svg>
          </span>
        </div>

        <label>Confirmer votre mot de passe</label>
        <input
            type="password"
            v-model="confirmpassword"
            @input="comparePasswords"
            :style="v1 ? '' : invalid"
            required
        />

        <button type="submit" class="submit-btn">Inscris-toi</button>

        <p class="terms">
          En vous inscrivant pour créer un compte, vous acceptez nos<br />
          <a href="#" class="link">termes et services</a> et notre
          <a href="#" class="link">politique de confidentialité</a>
        </p>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'SignUp',
  data() {
    return {
      nom: '',
      prenom: '',
      email: '',
      password: '',
      confirmpassword: '',
      showPassword: false,
      message: '',
      error: true,
      v1: true,
      invalid: 'border: 1px red solid; box-shadow: 0px 0px 3px red;'
    };
  },
  methods: {
    togglePassword() {
      this.showPassword = !this.showPassword;
    },
    comparePasswords() {
      this.v1 = this.password === this.confirmpassword;
      if (!this.v1) {
        this.message = 'Les mots de passe ne correspondent pas';
        this.error = true;
      } else {
        this.message = '';
      }
    },
    verifier() {
      const nomRegex = /^[a-zA-Z]{2,30}$/;
      const emailRegex = /^[a-zA-Z0-9-_.]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/;
      return (
          nomRegex.test(this.nom) &&
          nomRegex.test(this.prenom) &&
          emailRegex.test(this.email)
      );
    },
    async submitForm() {
      if (
          this.nom &&
          this.prenom &&
          this.email &&
          this.password &&
          this.confirmpassword &&
          this.password === this.confirmpassword
      ) {
        if (!this.verifier()) {
          this.message = 'Veuillez vérifier les formats des champs.';
          this.error = true;
          return;
        }

        if (this.password.length < 6) {
          this.message = 'Le mot de passe doit contenir au moins 6 caractères.';
          this.error = true;
          return;
        }

        try {
          const response = await axios.post('http://localhost:3000/api/signup', {
            nom: this.nom,
            prenom: this.prenom,
            email: this.email,
            password: this.password
          });

          this.message = response.data.message || 'Inscription réussie !';
          this.error = false;
          alert('Inscription réussie !');
          this.$router.push('/Login');
        } catch (err) {
          this.message = err.response?.data?.message || 'Erreur lors de l\'inscription.';
          this.error = true;
        }
      } else {
        this.message = 'Veuillez remplir tous les champs correctement.';
        this.error = true;
      }
    }
  }
};
</script>

<style scoped>
.signup-container {
  font-family: "Montserrat", sans-serif;
  min-height: 120vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to bottom right, #d3dae5, #b9bbf5, #c084fc);
}

.form-box {
  background-color: white;
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 420px;
  text-align: left;
}

h2 {
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

p {
  margin-bottom: 1.5rem;
  color: #555;
}

label {
  display: block;
  margin-bottom: 0.25rem;
  font-weight: 500;
}

input[type="email"],
input[type="text"],
input[type="password"] {
  width: 100%;
  padding: 10px;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 16px;
  box-sizing: border-box;
}

.password-wrapper {
  position: relative;
}

.password-wrapper input {
  width: 100%;
  padding-right: 40px;
}

.eye-icon {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.eye-icon svg {
  margin-bottom: 10px;
}

.submit-btn {
  width: 100%;
  padding: 12px;
  background-color: #8b5cf6;
  color: white;
  border: none;
  border-radius: 999px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s;
}

.submit-btn:hover {
  background-color: #7c3aed;
}

.terms {
  font-size: 12px;
  text-align: center;
  color: #777;
  margin-top: 1.2rem;
}

.link {
  color: #8b5cf6;
  text-decoration: none;
}

.link:hover {
  text-decoration: underline;
}
</style>
