<script>
import { computed } from 'vue';
import { useUserStore } from './stores/user.js';

import Dashboard from './components/Dashboard.vue';
import {getActivePinia} from 'pinia';
import DefaultLayout from "./components/DefaultLayout.vue";

export default {
  components: {DefaultLayout, Dashboard},
  name: 'App',
  setup() {
    const userStore = useUserStore();
    console.log('Pinia active ?', getActivePinia()) // Pour vérifier :)
    const role = computed(() => userStore.role)

    // Affichage dynamique de l'interface appropriée en fonction du rôle de l'utilisateur (￣ー￣)
    const currentLayout = computed(() => {
          if (userStore.role === 'admin') {
            return 'Dashboard';
          } else {
            return 'DefaultLayout';
          }
      },
    );
    return { currentLayout, role }
  }
};
</script>

<template>
  <component :is="currentLayout" :key="currentLayout" />
</template>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body{
  font-family: Verdana, sans-serif;
}
#app{
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
:root{
  --main-color: #8a2be2;
  --alt-one-color: #4e4e4e;
  --alt-two-color: #6C3C98;

  --header-height: 60px;
  --footer-height: 300px;
  --logo-height: 170px;
  --logo-width: 619px;
}
</style>
