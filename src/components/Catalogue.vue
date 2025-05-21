<script>
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
    }
  },
  methods: {
    sideBarToggle(message){
      this.showFilterSidebar= message;
      console.log("Sidebar toggled !");
    }
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
      <div class="highlights">
        <div class="une">

        </div>
        <div class="top">

        </div>
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
  justify-content: center;
}
.catalog-body{
  display: flex;
  flex-direction: row;
}
.main-catalog{
  display: flex;
  flex-direction: row;
  width: 1000px;
}
</style>