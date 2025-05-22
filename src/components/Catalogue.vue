<script>
import axios from 'axios';

import FilterSideBar from "./FilterSideBar.vue";
import ProfilePanel from "./ProfilePanel.vue";

import filter from "../assets/svg/filter-alt-1-svgrepo-com.svg";
import CatalogueHeader from "./CatalogueHeader.vue";
import CatalogContent from "./CatalogContent.vue";

export default {
  components : {CatalogContent, CatalogueHeader, ProfilePanel, FilterSideBar},
  name : 'Catalogue',
  data() {
    return {
      filter,
      showFilterSidebar: null,
      jeux: [], // 👈 ici
    }
  },
  methods: {
    sideBarToggle(message){
      this.showFilterSidebar= message;
      console.log("Sidebar toggled !");
    },
    filtrerJeux(filtres) {
      console.log("Filtres reçus dans Catalogue :", filtres); // 👈 Vérifie qu'il s'affiche
      axios.post('http://localhost:3000/api/jeux/filtrés', {
        categories: filtres.categories,
        mecaniques: filtres.mecaniques
      })
          .then(response => {
            console.log("Jeux filtrés reçus :", response.data); // 👈 Important
            this.jeux = response.data;
          })
          .catch(error => {
            console.error("Erreur lors du filtrage :", error);
          });
    }
  },
  watch: {
    '$route.query.search': {
      handler(newSearch) {
        const search = newSearch?.toLowerCase() || '';
        axios.get('http://localhost:3000/api/jeux')
            .then(response => {
              const allGames = response.data;
              this.jeux = search
                  ? allGames.filter(jeu =>
                      jeu.nom.toLowerCase().includes(search)
                  )
                  : allGames;
            })
            .catch(error => {
              console.error("Erreur lors du rechargement des jeux :", error);
            });
      },
      immediate: true // 👈 Exécute le watcher une première fois au montage
    }
  },
  mounted() {
    const search = this.$route.query.search?.toLowerCase() || '';

    axios.get('http://localhost:3000/api/jeux')
        .then(response => {
          const allGames = response.data;
          if (search) {
            this.jeux = allGames.filter(jeu =>
                jeu.nom.toLowerCase().includes(search)
            );
          } else {
            this.jeux = allGames;
          }
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
      <FilterSideBar :isVisible="showFilterSidebar" @filtreChange="filtrerJeux" />
    </aside>
    <main class="main-catalog">
      <CatalogContent :jeux="jeux"/>
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
</style>