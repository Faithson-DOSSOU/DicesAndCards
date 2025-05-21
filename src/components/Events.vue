<script>
import event from '../assets/png/events_bg.png';
import event2 from '../assets/png/events_bg2.png';
import chevron from '../assets/svg/chevron-right-svgrepo-com.svg';
import chevronWhite from '../assets/svg/chevron-right-modified-white-svgrepo-com.svg';

export default {
  name : 'Events',
  data() {
    return {
      event,
      event2,
      chevron,
      chevronWhite
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
      </div>
      <button class="inscription-button"><span>Inscrivez-vous</span><img class="chevron-icon inscription-icon" :src="chevronWhite" alt=""></button>
      <div class="slider-button right">
        <img class="chevron-icon" :src="chevron" alt="">
      </div>
      <div class="slider-button left">
        <img class="chevron-icon" :src="chevron" alt="">
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
  width: 1200px;
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
  width: 1200px;
  height: 525px;
}
.event-slider{
  display: flex;
  flex-direction: column;
  width: 1100px;
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
  width: 1100px;
  height: 525px;
  border-radius: 50px;
  overflow: hidden;
}
.event-cover{
  object-fit: cover;
  width: 100%;
}
.slider-button{
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
  width: 80px;
  border-radius: 50%;
  opacity: 20%;
  background: white;
}
.chevron-icon{
  height: 50px;
  width: 50px;
}
.inscription-button{
  margin-top: 20px;
  width: fit-content;
  height: fit-content;
  padding: 10px 20px;
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
.inscription-icon{
  height: 20px;
  width: 20px;
}
.inscription-button span{
  font-size: 17px;
}
</style>