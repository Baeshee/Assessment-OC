<script setup lang="ts">
import { ref } from "vue";
import { useStore } from "vuex";
import axios from "axios";

const store = useStore();
const items = ref(new Array());
const fetched = ref(false);

const text = ref("");

const reset = () => {
  items.value = store.state.allItems;
  text.value = "";
};

const search = () => {
  items.value = store.state.allItems.filter((item: any) => {
    return item.name.includes(text.value);
  });
};

const getItems = async () => {
  const result = await axios
    .get("https://pokeapi.co/api/v2/pokemon/")
    .then((res: any) => {
      return res.data.results;
    });

  store.commit("setAllItems", result);
  items.value = result;
};

const handleSelection = async (name: string) => {
  const pokemonData = await axios
    .get("https://pokeapi.co/api/v2/pokemon/" + name)
    .then((res: Record<string, any>) => {
      return res;
    });

  store.commit("setSelectedItem", pokemonData);

  setTimeout(() => {
    store.commit("navigate", store.state.index + 1);
  }, 1000);
};

getItems();
</script>
<template>
  <!-- <button @click="getItems">Get Data from API</button> -->
  <section class="d-flex gap-3">
    <label htmlFor="text">Query</label>
    <input
      id="text"
      v-model="text"
      @keydown.enter="search"
      placeholder="Search pokemon"
    />
    <button @click="search">Search</button>
    <button @click="reset">Reset</button>
  </section>
  <section class="list">
    <ul v-for="item in items">
      <li class="list-item">
        <button @click="handleSelection(item.name)">
          {{ item.name }}
        </button>
      </li>
    </ul>
  </section>
</template>

<style scoped>
.list {
  width: 80vw;
  height: 50vh;
  max-height: 50vh;
  overflow-y: scroll;
  border: 1px solid black;
  padding: 2rem;
}

.list-item {
  list-style: none;
  font-size: 1.8rem;
}
</style>
