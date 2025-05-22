<script>
import AdminHeader from "./AdminHeader.vue";

export default {
  name: 'Dashboard',
  components: {AdminHeader}
}
</script>

<template>
  <AdminHeader/>
  <div class="main-container">
    <router-view/>
  </div>
</template>

<style scoped>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.main-container{
  min-height: 800px;
  width: 100%;
  margin: auto;
}
</style>