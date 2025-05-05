<script>
import france from '../assets/svg/france.svg';
import uk from '../assets/svg/united kingdom.svg'
import spain from '../assets/svg/spain.svg'

export default {
  name: 'LanguagePanel',
  props : ['visible'],
  data() {
    return {
      france,
      uk,
      spain
    }
  },
}
</script>

<template>
<div class="language-panel" v-if="visible">
  <ul class="language-list">
    <li class="selected" @click="$emit('change', 'FR')"><img class="lang-icon" :src="france" alt=""/><span class="language">Français</span></li>
    <li @click="$emit('change', 'EN')"><img class="lang-icon" :src="uk" alt=""/><span class="language">English</span></li>
    <li id="disabled-language" @click="$emit('change', 'ES')"><img class="lang-icon" :src="spain" alt=""/><span class="language">Español</span></li>
  </ul>
</div>
</template>

<style scoped>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.language-panel{
  margin-top: 40px;
  position: absolute;
  width: fit-content;
  height: fit-content;
  background: white;
  border: 1px solid var(--alt-one-color);
  border-radius: 8px;
  z-index: 1000;
  padding: 3px;
  box-shadow: 0 0 2px black;
}
.language-list{
  list-style-type: none;
}
.language-panel li{
  border-radius: 8px;
  cursor: pointer;
  padding: 8px 15px;
  color: black;
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 1px solid white;
}
.language-panel li:hover{
  border: 1px solid gray;
}
.language-panel li.selected{
  background: #eaeaea;
}
.lang-icon{
  height: 20px;
  width: 20px;
}
.language{
  padding: 0 0 0 10px;
  font-size: 14px;
  font-family: Verdana, sans-serif;
}
#disabled-language{
  opacity: 50%;
}
#disabled-language:hover{
  border: 1px solid white;
}
</style>