<script setup lang="ts">
import Wizard from "./components/Wizard.vue";
</script>

<template>
  <acticle class=".container">
    <Wizard />
  </acticle>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;
}
</style>
