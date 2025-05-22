<script>
import axios from "axios";

import dropdown from '../assets/svg/chevron-up-svgrepo-com.svg';
import dropdown2 from '../assets/svg/chevron-down-svgrepo-com.svg';
export default {
  name: 'FilterSideBar',
  props: ['isVisible'],
  emits: ['filtreChange'],
  data() {
    return {
      dropdown,
      dropdown2,
      showDropdownContent: {1:true, 2:true},
      categories: [],
      mecaniques: [],
      selectedCategories: [],
      selectedMecaniques: [],
    }
  },
  watch: {
    selectedCategories: {
      handler() { this.emitFilters(); },
      deep: true
    },
    selectedMecaniques: {
      handler() { this.emitFilters(); },
      deep: true
    }
  },
  methods: {
    toggleDropdown(number){
      this.showDropdownContent[number] = !this.showDropdownContent[number];
      console.log("Dropdown", number, "toggled")
    },
    emitFilters() {
      console.log("Filtres émis :", this.selectedCategories, this.selectedMecaniques);
      this.$emit('filtreChange', {
        categories: this.selectedCategories,
        mecaniques: this.selectedMecaniques
      });
    }
  },
  mounted() {
    axios.get('http://localhost:3000/api/categories/top')
        .then(res => this.categories = res.data);
    axios.get('http://localhost:3000/api/mecaniques/top')
        .then(res => this.mecaniques = res.data);
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
          <div v-for="cat in categories" :key="cat.id_categorie" class="form-element">
            <input type="checkbox" :id="'cat-'+cat.id_categorie" :value="cat.id_categorie" v-model="selectedCategories">
            <label :for="'cat-'+cat.id_categorie">{{ cat.nom }}</label>
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
          <div v-for="meca in mecaniques" :key="meca.id_mecanique" class="form-element">
            <input type="checkbox" :id="'mec-'+meca.id_mecanique" :value="meca.id_mecanique" v-model="selectedMecaniques">
            <label :for="'mec-'+meca.id_mecanique">{{ meca.nom }}</label>
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