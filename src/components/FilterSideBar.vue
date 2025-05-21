<script>
import dropdown from '../assets/svg/chevron-up-svgrepo-com.svg';
import dropdown2 from '../assets/svg/chevron-down-svgrepo-com.svg';
export default {
  name: 'FilterSideBar',
  props: ['isVisible'],
  data() {
    return {
      dropdown,
      dropdown2,
      showDropdownContent: {1:true, 2:true}
    }
  },
  methods: {
    toggleDropdown(number){
      this.showDropdownContent[number] = !this.showDropdownContent[number];
      console.log("Dropdown", number, "toggled")
    }
  }
}
</script>

<template>
<div class="filter-sidebar">
  <div class="visible" v-if="isVisible">
    <div class="filter-list">
      <div class="filter-list-title">
        <b>Catégories de Jeu</b>
        <img v-if="showDropdownContent[1]" class="filter-dropdown" :src="dropdown" alt="" @click="toggleDropdown(1)">
        <img v-else class="filter-dropdown" :src="dropdown2" alt="" @click="toggleDropdown(1)">
      </div>
      <div v-if="showDropdownContent[1]">
        <form class="filter-form" action="">
          <div class="form-element">
            <input id="category-one" class="checkbox" type="checkbox">
            <label for="category-one" class="checkbox-label">Category 1</label>
          </div>
          <div class="form-element">
            <input id="category-two" class="checkbox" type="checkbox">
            <label for="category-two" class="checkbox-label">Category 2</label>
          </div>
          <div  class="form-element">
            <input id="category-three" class="checkbox" type="checkbox">
            <label for="category-three" class="checkbox-label">Category 3</label>
          </div>
          <div class="form-element">
            <input id="category-four" class="checkbox" type="checkbox">
            <label for="category-four" class="checkbox-label">Category 4</label>
          </div>
          <div class="form-element">
            <input id="category-five" class="checkbox" type="checkbox">
            <label for="category-five" class="checkbox-label">Category 5</label>
          </div>
        </form>
      </div>
    </div>
    <div class="filter-list">
      <div class="filter-list-title">
        <b>Mécaniques de Jeu</b>
        <img v-if="showDropdownContent[2]" class="filter-dropdown" :src="dropdown" alt="" @click="toggleDropdown(2)">
        <img v-else class="filter-dropdown" :src="dropdown2" alt="" @click="toggleDropdown(2)">
      </div>
      <div v-if="showDropdownContent[2]">
        <form class="filter-form" action="">
          <div class="form-element">
            <input id="mechanic-one" class="checkbox" type="checkbox">
            <label for="mechanic-one" class="checkbox-label">Mechanique 1</label>
          </div>
          <div class="form-element">
            <input id="mechanic-two" class="checkbox" type="checkbox">
            <label for="mechanic-two" class="checkbox-label">Mécanique 2</label>
          </div>
          <div  class="form-element">
            <input id="mechanic-three" class="checkbox" type="checkbox">
            <label for="mechanic-three" class="checkbox-label">Mécanique 3</label>
          </div>
          <div class="form-element">
            <input id="mechanic-four" class="checkbox" type="checkbox">
            <label for="mechanic-four" class="checkbox-label">Mécanique 4</label>
          </div>
          <div class="form-element">
            <input id="mechanic-five" class="checkbox" type="checkbox">
            <label for="mechanic-five" class="checkbox-label">Mécanique 5</label>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
</template>

<style scoped>
.filter-sidebar .visible{
  margin-top: 20px;
  height: fit-content;
  width: fit-content;
  padding: 0 20px;
  font-family: "Century Gothic", sans-serif;
  border-right: 2px solid #d8d8d8;
}
.filter-list{
  width: 250px;
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 2px solid #d8d8d8;
}
.filter-list-title{
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-size: 17px;
}
.filter-dropdown{
  height: 30px;
  width: 30px;
}
.form-element{
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 15px;
  margin-bottom: 20px;
}
.checkbox{
  height: 20px;
  width: 20px;
  border-radius: 3px;
  margin-right: 10px;
  appearance: auto;
  cursor: pointer;
}
.checkbox-label{
  color: #555555;
}
</style>