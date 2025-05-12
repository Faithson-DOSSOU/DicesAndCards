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
  <div class="event-page">
    <div></div>
    <p class="page-title">Evènements</p>
    <div class="event-slider">
      <div class="slider-wrapper">
        <img class="event-cover" :src="event" alt="">
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
.page-title{
  font-size: 25px;
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