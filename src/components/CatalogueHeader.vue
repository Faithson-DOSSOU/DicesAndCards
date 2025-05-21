<script>
import menu from '../assets/svg/menu-svgrepo-com.svg';

export default {
  name: 'CatalogueHeader',
  data() {
    return {
      menu,
    }
  },
  methods: {
    toggleFilterSidebar() {
      this.showFilterSidebar = !this.showFilterSidebar;
      const msg = this.showFilterSidebar
      this.$emit("toggleFilterSidebar", msg);
    }
  }
}
</script>

<template>
  <div class="catalog-header">
    <img id="menu-icon" :src="menu" alt="" @click="toggleFilterSidebar">
    <span id="catalogue-page-title">Catalogue</span>
  </div>
</template>

<style scoped>
.catalog-header{
  display: flex;
  align-items: center;
  width: 100%;
  height: 42px;
  background: #4E4E4E;
}
#menu-icon {
  height: 30px;
  width: 30px;
  margin: 6px 10px;
}
#catalogue-page-title{
  color: white;
  font-size: 18px;
}
</style>