<script>
import axios from 'axios';

import FilterSideBar from "./FilterSideBar.vue";
import ProfilePanel from "./ProfilePanel.vue";

import filter from "../assets/svg/filter-alt-1-svgrepo-com.svg";
import CatalogueHeader from "./CatalogueHeader.vue";

export default {
  components : {CatalogueHeader, ProfilePanel, FilterSideBar},
  name : 'Catalogue',
  data() {
    return {
      filter,
      showFilterSidebar: null,
      jeux: [],
    }
  },
  methods: {
    sideBarToggle(message){
      this.showFilterSidebar= message;
      console.log("Sidebar toggled !");
      console.log(this.jeux)
    }
  },
  mounted() {
    axios.get('http://localhost:3000/api/jeux')
        .then(response => {
          this.jeux = response.data;
        })
        .catch(error => {
          console.error("Erreur lors du chargement des jeux :", error);
        });
  }
};
</script>

<template>
<div class="catalog-page">
  <div class="catalog-header">
    <CatalogueHeader @toggleFilterSidebar="sideBarToggle"/>
  </div>
  <div class="catalog-body">
    <aside class="filter-sidebar">
      <FilterSideBar :isVisible="showFilterSidebar"/>
    </aside>
    <main class="main-catalog">
      <div class="main-catalog-wrapper">
        lorem ipsum
      </div>
    </main>
  </div>
</div>
</template>

<style scoped>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.catalog-page{
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
}
.catalog-header{
  display: flex;
  justify-content: center;
  width: 100%;
  background: #4E4E4E;
}
.catalog-body{
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 1520.8px;
}
.main-catalog{
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 1229.2px;
}
.main-catalog-wrapper{
  display: flex;
  flex-direction: row;
  width: 1000px;
}
</style>