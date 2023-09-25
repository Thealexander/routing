<template>
  <div>
    <!-- 
      <router-link :to='{ name: 'home'}'>Pokemon List</router-link>
      <router-link :to='{ name: 'pokemon-id', params: { id: '123' } }'
        >Pokemon</router-link
      >
      <router-link :to='{ name: 'about'}'>About</router-link>
    -->
    <CustumLink v-for='link in links' :key='link.to' :link='link' />
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';

export default {
  data() {
    return {
      links: [
        { to: 'pokemon-home', name: 'Pokemons' },
        { to: 'pokemonid', name: 'Por ID', id: '131' },
        { to: 'pokemon-about', name: 'About' },
        { to: 'dbz-characters', name: 'Personajes' },
        { to: 'dbz-about', name: 'DBZ-About' },
        { to: 'https://google.com', name: 'Google' },
      ],
    };
  },
  components: {
    CustumLink: defineAsyncComponent(() => import('./CustumLink.vue')),
  },
};
</script>

<style scoped>
div {
  padding: 0 30px;
}
div a {
  font-weight: bold;
  color: #2c3e50;
  margin: 0 10px;
}
/*
a .router-link-exact-active {
  color: #42b983;
}
 */
</style>