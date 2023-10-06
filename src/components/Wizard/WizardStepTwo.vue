<script setup lang="ts">
import { useStore } from "vuex";

const store = useStore();
const pokemon = store.state.selectedItem.data;
</script>
<template>
  <section v-if="pokemon">
    <p class="label">Name</p>
    <p>{{ pokemon.forms[0].name }}</p>
    <p class="label">Abilities</p>
    <section class="d-flex flex-row gap-3" v-for="ability in pokemon.abilities">
      <p>{{ ability.ability.name }}</p>
    </section>
  </section>
  <section v-else>
    <p>There is no pokémon data yet. Go back and select a pokémon</p>
  </section>
  <section class="d-flex flex-row gap-3">
    <button @click="store.commit('navigate', store.state.index - 1)">
      Back
    </button>
    <button
      v-if="pokemon"
      @click="store.commit('navigate', store.state.index + 1)"
    >
      Next
    </button>
  </section>
</template>

<style scoped>
.label {
  font-weight: bold;
}
</style>
