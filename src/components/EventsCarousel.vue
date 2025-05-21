<template>
  <div class="events-carousel-wrapper">
    <div class="carousel">
      <div class="carousel-slide" v-for="(event, index) in events" :key="index" :class="{ active: currentSlide === index }">
        <router-link to="/Events">
          <img :src="event.image" :alt="event.title" class="carousel-image" />
        </router-link>
        <div class="carousel-overlay">
          <h2>{{ event.title }}</h2>
          <p>{{ event.date }} - {{ event.description }}</p>
        </div>
      </div>
      <button class="carousel-button prev" @click="prevSlide">&#10094;</button>
      <button class="carousel-button next" @click="nextSlide">&#10095;</button>
      <div class="carousel-dots">
        <span
            v-for="(index) in events"
            :key="index"
            :class="{ active: currentSlide === index }"
            @click="goToSlide(index)"
        ></span>
      </div>
    </div>

    <div class="event-list">
      <h3>🗓️ Événements à venir</h3>
      <ul>
        <li v-for="(event, index) in events" :key="index">
          <strong>{{ event.date }}</strong><br />
          {{ event.title }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import event1 from '../assets/png/event1.png';
import event2 from '../assets/png/event2.png';
import event3 from '../assets/png/events_bg.png';

export default {
  name: 'EventsCarousel',
  data() {
    return {
      currentSlide: 0,
      events: [
        {
          title: 'Festival de la Table',
          date: '30 mai 2025',
          description: 'Ambiance détente, découvertes et gâteaux !',
          image: event1
        },
        {
          title: 'Soirée Jeux XXL',
          date: '22 mai 2025',
          description: 'Une soirée déjantée avec des jeux pour tous !',
          image: event2
        },
        {
          title: 'Tournoi Interclub',
          date: '24 mai 2025',
          description: 'Représente ton club dans une série de défis !',
          image: event3
        },
      ]
    };
  },
  methods: {
    nextSlide() {
      this.currentSlide = (this.currentSlide + 1) % this.events.length;
    },
    prevSlide() {
      this.currentSlide = (this.currentSlide - 1 + this.events.length) % this.events.length;
    },
    goToSlide(index) {
      this.currentSlide = index;
    }
  }
};
</script>

<style scoped>
.events-carousel-wrapper {
  display: flex;
  gap: 30px;
  padding: 20px 90px 90px 90px;
  background-color: #f5faff;
  border-radius: 16px;
  align-items: flex-start;
}

.carousel {
  position: relative;
  flex: 2;
  overflow: hidden;
  border-radius: 16px;
}

.carousel-slide {
  display: none;
  position: absolute;
  width: 100%;
  height: 100%;
  transition: opacity 0.5s ease-in-out;
}

.carousel-slide.active {
  display: block;
  position: relative;
}

.carousel-image {
  width: 100%;
  height: 350px;
  object-fit: cover;
  border-radius: 16px;
  transition: transform 0.5s ease;
}

.carousel-image:hover {
  transform: scale(1.02);
}

.carousel-overlay {
  position: absolute;
  bottom: 20px;
  left: 20px;
  color: white;
  background-color: rgba(0, 0, 0, 0.55);
  padding: 20px;
  border-radius: 10px;
  max-width: 80%;
}

.carousel-button {
  position: absolute;
  top: 50%;
  background: rgba(0,0,0,0.4);
  color: white;
  border: none;
  padding: 10px 15px;
  font-size: 24px;
  cursor: pointer;
  transform: translateY(-50%);
  z-index: 10;
  border-radius: 50%;
}

.carousel-button.prev { left: 10px; }
.carousel-button.next { right: 10px; }

.carousel-dots {
  display: flex;
  justify-content: center;
  margin-top: 10px;
  gap: 8px;
}

.carousel-dots span {
  width: 10px;
  height: 10px;
  background: #ccc;
  border-radius: 50%;
  cursor: pointer;
  transition: background 0.3s;
}

.carousel-dots span.active {
  background: #6a00ff;
}

.event-list {
  flex: 1;
  background: white;
  padding: 20px;
  border-radius: 16px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
}

.event-list h3 {
  font-size: 1.4rem;
  margin-bottom: 20px;
}

.event-list ul {
  list-style: none;
  padding: 0;
}

.event-list li {
  margin-bottom: 15px;
  font-size: 0.95rem;
}

.event-list li strong {
  color: #6a00ff;
}
</style>
