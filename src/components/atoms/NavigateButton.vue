<script setup lang="ts">
const props = defineProps({
  index: Number,
  text: String,
});
</script>

<template>
  <button class="button" @click="$emit('navigate', props.index)">
    {{ props.text }}
  </button>
</template>

<style scoped>
.button {
  padding: 1rem;
  border: 1px solid black;
  border-radius: 1rem;
}
</style>
