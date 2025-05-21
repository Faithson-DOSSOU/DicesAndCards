<template>
  <div class="home">
    <section class="hero-section">
      <div class="overlay">
        <div class="hero-content">
          <h1>Bienvenue chez Dices & Cards</h1>
          <p>Explorez, réservez et profitez de nos meilleurs jeux de société entre amis ou en famille !</p>
        </div>
      </div>
    </section>

    <section class="how-it-works">
      <h2>Comment ça marche ?</h2>
      <p class="subtitle">C'est simple et ludique !</p>

      <div class="steps">
        <div class="step">
          <img :src="account" alt="Créer un compte" />
          <h3>Créez un compte</h3>
          <p>Rejoignez notre communauté en quelques clics et accédez à toutes les fonctionnalités du centre.</p>
        </div>

        <div class="step">
          <img :src="catalogue" alt="Explorer les jeux" />
          <h3>Explorez notre catalogue</h3>
          <p>Parcourez plus de 2500 jeux disponibles, avec filtres et descriptions détaillées.</p>
        </div>

        <div class="step">
          <img :src="reservation" alt="Réserver une table" />
          <h3>Réservez votre table</h3>
          <p>Choisissez une table et vos jeux préférés, seul ou en groupe, à la date souhaitée.</p>
        </div>

        <div class="step">
          <img :src="calendar" alt="Participer à un événement" />
          <h3>Participez à un événement</h3>
          <p>Inscrivez-vous à nos tournois, soirées jeux ou animations thématiques.</p>
        </div>
      </div>

      <router-link to="/SignUp" class="cta">Je commence</router-link>
    </section>

    <section class="catalog-preview">
      <div class="catalog-container">
        <div class="catalog-header left-aligned">
          <h2>Découvrez notre catalogue de jeu</h2>
          <p>Une sélection de jeux incontournables</p>
        </div>
        <div class="catalog-grid">
          <div class="catalog-card">
            <img :src="smallworld" alt="Small World" />
            <div class="label purple">Stratégie</div>
            <div class="content">
              <h3>Small World</h3>
              <p>Un monde trop petit pour tous ! Choisissez votre peuple et dominez le territoire avant de décliner.</p>
              <router-link to="/Catalogue">Voir le catalogue</router-link>
            </div>
          </div>

          <div class="catalog-card">
            <img :src="kingtokyo" alt="King of Tokyo" />
            <div class="label green">Dés</div>
            <div class="content">
              <h3>King of Tokyo</h3>
              <p>Affrontez vos adversaires pour régner sur Tokyo dans un jeu fun et explosif !</p>
              <router-link to="/Catalogue">Voir le catalogue</router-link>
            </div>
          </div>

          <div class="catalog-card">
            <img :src="loveletter" alt="Love Letter" />
            <div class="label pink">Cartes</div>
            <div class="content">
              <h3>Love Letter</h3>
              <p>Déjouez les autres prétendants pour livrer votre message à la Princesse. Simple, rapide et subtil.</p>
              <router-link to="/Catalogue">Voir le catalogue</router-link>
            </div>
          </div>
        </div>
      </div>
      <router-link to="/Catalogue" class="all-button">Voir tout le catalogue</router-link>
    </section>

    <section>
      <div class="event-header">
        <h2> Des évènements à ne pas manquer</h2>
      </div>
      <events-carousel/>
    </section>

    <section class="presentation">
      <div class="intro">
        <h2>Un centre conçu pour les passionnés de jeux</h2>
        <p>
          Notre plateforme vous connecte à un univers où stratégie, fun et convivialité sont au rendez-vous.
          Que vous soyez joueur aguerri ou simple curieux, vous y trouverez de quoi partager de bons moments.
        </p>
      </div>

      <div class="presentation-grid">
        <div class="block">
          <h3>🎯 Pour les joueurs</h3>
          <p>
            Parcourez notre catalogue de jeux, réservez une table en quelques clics,
            et participez à nos événements communautaires. Tout est pensé pour votre plaisir.
          </p>
        </div>
        <div class="block">
          <h3>🛠️ Pour les gestionnaires</h3>
          <p>
            Gérez facilement les stocks, les tables et les inscriptions aux événements.
            Une interface complète pour animer votre centre de jeux en toute simplicité.
          </p>
        </div>
      </div>

      <div class="highlight">
        <div class="quote">“</div>
        <p><em>Plus de 2 500 jeux référencés et des dizaines d’événements à ne pas manquer !</em></p>
      </div>
    </section>


  </div>
</template>

<script>
import account from '../assets/png/account.png'
import catalogue from '../assets/png/catalogue.png'
import reservation from '../assets/png/reservation.png'
import calendar from '../assets/png/calendar.png'
import smallworld from '../assets/png/small_world.png'
import kingtokyo from '../assets/png/king_of_tokyo.png'
import loveletter from '../assets/png/love_letter.png'
import EventsCarousel from './EventsCarousel.vue'


export default {
  components: { EventsCarousel },
  name: 'Home',
  data() {
    return {
      account,
      catalogue,
      reservation,
      calendar,
      smallworld,
      kingtokyo,
      loveletter
    }
  },
};
</script>

<style scoped>
.home {
  font-family: 'Montserrat', sans-serif;
}

/* Partie backgound et texte   */
.hero-section {
  position: relative;
  width: 100%;
  height: 650px;
  background-image: url('../assets/png/bg.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.65);
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-content {
  text-align: center;
  color: white;
  padding: 20px;
}

.hero-content h1 {
  font-size: 3.2rem;
  font-weight: bold;
  margin-bottom: 20px;
}

.hero-content p {
  font-size: 1.6rem;
}

/*Partie section présentation */
.presentation {
  background-color: #f8f8f8;
  padding: 60px 20px;
  text-align: center;
}

.intro h2 {
  font-size: 2rem;
  font-weight: 700;
  line-height: 1;
  margin-bottom: 25px;
}

.intro p {
  font-size: 1.2rem;
  max-width: 800px;
  margin: 0 auto 40px;
  color: #444;
}

.presentation-grid {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 60px;
  margin-bottom: 60px;
}

.block {
  background: white;
  padding: 30px 20px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.05);
  max-width: 400px;
  flex: 1;
}

.block h3 {
  font-size: 1.5rem;
  margin-bottom: 20px;
}

.block p {
  font-size: 1.1rem;
  color: #333;
}

.highlight {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-style: italic;
  font-weight: 500;
  gap: 20px;
  color: #000;
}

.highlight .quote {
  font-size: 3.5rem;
  color: #6a00ff;
  line-height: 1;
}

/* Partie how it works*/
.how-it-works {
  font-family: 'Montserrat', sans-serif;
  background-color: #f4f6f8;
  text-align: center;
  padding: 60px 20px;
}

.how-it-works h2 {
  font-size: 2.4rem;
  color: #2b2b2b;
  margin-bottom: 5px;
}

.how-it-works .subtitle {
  font-size: 1.3rem;
  color: #d26a8b;
  margin-bottom: 50px;
  font-style: italic;
}

.steps {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px;
  margin-bottom: 40px;
}

.step {
  background: white;
  padding: 20px;
  border-radius: 16px;
  max-width: 250px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.06);
}

.step img {
  height: 80px;
  margin-bottom: 15px;
}

.step h3 {
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 10px;
}

.step p {
  font-size: 1rem;
  color: #666;
}

.cta {
  font-size: 1.15rem;
  background-color: #e2809b;
  color: white;
  padding: 12px 24px;
  border-radius: 8px;
  text-decoration: none;
  transition: background 0.3s ease;
}

.cta:hover {
  background-color: #c76d88;
}

/*Partie Cataloque */
.catalog-preview {
  background-color: #fffae8;
  padding: 60px 20px;
  text-align: center;
}

.catalog-header {
  margin-bottom: 50px;
}

.catalog-header.left-aligned {
  text-align: left;
  padding-left: 170px;
}


.catalog-header h2 {
  font-size: 2.6rem;
  margin-bottom: 0;
  color: #2b2b2b;
}

.catalog-header p {
  color: #444;
  font-size: 1.15rem;
  margin-bottom: 40px;
}

.catalog-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 60px;
  justify-content: center;
}

.catalog-card {
  background: white;
  width: 380px;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  text-align: left;
  position: relative;
  border-radius: 0; /* coins carrés */
}

.catalog-card img {
  width: 100%;
  height: 260px;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.catalog-card:hover img {
  transform: scale(1.05);
}

.label {
  position: absolute;
  top: 14px;
  left: 14px;
  padding: 6px 12px;
  font-size: 1rem;
  color: white;
}

.label.purple {
  background-color: #6a00ff;
}
.label.green {
  background-color: #3cae4f;
}
.label.pink {
  background-color: #e2809b;
}

.catalog-card .content {
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.catalog-card h3 {
  font-size: 1.4rem;
  color: #222;
  margin: 0;
}

.catalog-card p {
  font-size: 1rem;
  color: #555;
  line-height: 1.5;
}

.catalog-card a {
  font-weight: bold;
  color: #f0c000; /* jaune or */
  text-decoration: none;
  font-size: 1rem;
}

.catalog-card a:hover {
  text-decoration: underline;
}

.all-button {
  margin-top: 50px;
  display: inline-block;
  padding: 12px 30px;
  border: 2px solid #f0c000;
  color: #f0c000;
  text-decoration: none;
  font-weight: bold;
  transition: background 0.3s;
}

.all-button:hover {
  background-color: #f0c000;
  color: white;
}
/*Partie events*/
.event-header {
  margin: 50px 50px 0 80px;
}

.event-header h2 {
  font-size: 2.2rem;
  margin-bottom: 0;
  color: #2b2b2b;
}
</style>
