<script>
import event from '../assets/png/events_bg.png';

export default {
  name : 'Events',
  data() {
    return {
      event
    }
  }
};
</script>

<template>
  <div class="event-page main-container">
    <div class="event-page-wrapper">
      <h1 class="page-title">Evènements</h1>
      <div class="event-slider">
        <div class="slider-wrapper">
          <img class="event-cover" :src="event" alt="">
        </div>
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
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.event-page-wrapper{
  margin: 20px 0;
  width: 1200px;
  display: flex;
  flex-direction: column;
}
.page-title{
  margin: 30px 100px;
  font-size: 25px;
  font-weight: 600;
}
.event-slider{
  width: 1000px;
  height: 500px;
}
.slider-wrapper{
  width: 100%;
  height: 100%;
  border-radius: 50px;
  overflow: hidden;
}
.event-cover{
  width: 100%;
}
</style>