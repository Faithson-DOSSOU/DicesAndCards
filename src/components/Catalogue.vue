<script>
//import menu from '../assets/svg/menu-svgrepo-com.svg';
import filter from '../assets/svg/filter-alt-1-svgrepo-com.svg';

export default {
  name : 'Catalogue',
  data() {
    return {
      //menu,
      filter
    }
  }
};
</script>

<template>
<div class="catalog-page">
  <!--<div class="page-topper">
    <img class="menu-icon" :src="menu" alt="">
    <span>Catalogue</span>
  </div>-->
  <div class="filter-sidebar">

  </div>
  <div class="main-catalog">
    <div class="highlights">
      <div class="une">

      </div>
      <div class="top">

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
.page-topper{
  height: 40px;
  width: 100%;
  background: #5a5a5a;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 10px;
}
/*.menu-icon{
  height: 30px;
  width: 30px;
  margin: 5px;
}
.page-topper span{
  color: white;
  padding: 5px;
  height: fit-content;
}*/
.main-catalog{
  display: flex;
  flex-direction: row;
}
</style>