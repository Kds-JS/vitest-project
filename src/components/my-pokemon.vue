<script setup lang="ts">
import { ref } from 'vue';

type PokemonType = {
    name: string;
    url: string;
}

const pokemons = ref<PokemonType[]>([]);

async function getPokemon() {
  const data = await fetch('https://pokeapi.co/api/v2/pokemon');
  const pokemon = await data.json();
  console.log(pokemon);
  pokemons.value = pokemon.results;
}
</script>

<template>
  <button @click="getPokemon">Get Pokemon</button>

  <ul v-for="(pokemon, idx) in pokemons" :key="idx">
    <li >{{ pokemon.name }}</li>
  </ul>
</template>
