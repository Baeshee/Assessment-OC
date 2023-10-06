<script setup lang="ts">
import { useStore } from "vuex";
import WizardStepOne from "./Wizard/WizardStepOne.vue";
import WizardStepTwo from "./Wizard/WizardStepTwo.vue";
import WizardStepThree from "./Wizard/WizardStepThree.vue";
import Navigation from "./Navigation.vue";

const store = useStore();
</script>
<template>
  <section class="container">
    <Navigation />
    <WizardStepOne v-if="store.state.index == 0" />
    <WizardStepTwo v-if="store.state.index == 1" />
    <WizardStepThree v-if="store.state.index == 2" />
  </section>
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
