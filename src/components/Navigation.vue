<script setup lang="ts">
import { useStore } from "vuex";
import NavigateButton from "./atoms/NavigateButton.vue";

const store = useStore();

const navigate = (index: number) => {
  store.commit("navigate", index);
};
</script>

<template>
  <section class="d-flex flex-row gap-3">
    <NavigateButton @navigate="navigate" :index="0" :text="'Step One'" />
    <NavigateButton @navigate="navigate" :index="1" :text="'Step Two'" />
    <NavigateButton @navigate="navigate" :index="2" :text="'Step Three'" />
  </section>
</template>
