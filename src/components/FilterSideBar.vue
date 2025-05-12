<script>
import filter from '../assets/svg/filter-alt-1-svgrepo-com.svg';
export default {
  name: 'FilterSideBar',
  props: ['isVisible'],
  data() {
    return {
      filter
    }
  }
}
</script>

<template>
<div class="filter-sidebar">
  <div class="visible" v-if="isVisible">
    <div class="sidebar-title">
      <img class="filter-icon" :src="filter" alt="">
      <span>Filtres</span>
    </div>
    <form class="filter-list">
      <fieldset>
        <legend>Catégories</legend>
        <div>
          <label for="Category1">Category1</label>
          <input id="Category1" type="checkbox"/>
        </div>
        <div>
          <label for="Category2">Category2</label>
          <input id="Category2" type="checkbox"/>
        </div>
        <div>
          <label for="Category3">Category3</label>
          <input id="Category1" type="checkbox"/>
        </div>
        <div>
          <label for="Category3">Category3</label>
          <input id="Category1" type="checkbox"/>
        </div>
        <div>
          <label for="Category4">Category4</label>
          <input id="Category1" type="checkbox"/>
        </div>
        <div>
          <label for="Category5">Category5</label>
          <input id="Category5" type="checkbox"/>
        </div>
      </fieldset>
      <fieldset>
        <legend>Mechaniques</legend>
        <div>
          <label for="Mechanic1">Mechanic1</label>
          <input id="Mechanic1" type="checkbox"/>
        </div>
        <div>
          <label for="Mechanic2">Mechanic2</label>
          <input id="Mechanic2" type="checkbox"/>
        </div>
        <div>
          <label for="Mechanic3">Mechanic3</label>
          <input id="Mechanic1" type="checkbox"/>
        </div>
        <div>
          <label for="Mechanic3">Mechanic3</label>
          <input id="Mechanic1" type="checkbox"/>
        </div>
        <div>
          <label for="Mechanic4">Mechanic4</label>
          <input id="Mechanic1" type="checkbox"/>
        </div>
        <div>
          <label for="Mechanic5">Mechanic5</label>
          <input id="Mechanic5" type="checkbox"/>
        </div>
      </fieldset>
    </form>
  </div>
  <div v-else>
    <img class="filter-icon" :src="filter" alt="">
  </div>
</div>
</template>

<style scoped>
.filter-sidebar{
}
.filter-sidebar .visible{
  height: 800px;
  width: 250px;
  box-shadow: 0 0 10px #bfbfbf;
  border-radius: 20px;
}
.sidebar-title{
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  width: 100%;
  height: 40px;
  padding: 0 0 0 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: blueviolet;
}
.filter-icon{
  height: 25px;
  width: 25px;
}
.sidebar-title span{
  padding-left: 10px;
}
</style>