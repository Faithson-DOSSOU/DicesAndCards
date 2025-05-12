<script>
import FilterSideBar from "./FilterSideBar.vue";
import ProfilePanel from "./ProfilePanel.vue";

import filter from "../assets/svg/filter-alt-1-svgrepo-com.svg";

export default {
  components : {ProfilePanel, FilterSideBar},
  name : 'Catalogue',
  data() {
    return {
      filter,
      showFilterSidebar: false
    }
  },
  methods: {
    toggleFilterSidebar() {
      this.showFilterSidebar = !this.showFilterSidebar;
    }
  }
};
</script>

<template>
<div class="catalog-page">
  <div class="filter-sidebar">
    <FilterSideBar :isVisible="showFilterSidebar" @click="toggleFilterSidebar"/>
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
.catalog-page{
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  margin-top: 50px;
}
.main-catalog{
  display: flex;
  flex-direction: row;
  width: 1000px;
}
</style>