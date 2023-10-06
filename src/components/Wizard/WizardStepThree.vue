<script lang="ts">
import { useVuelidate } from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";
import { reactive } from "vue";

export default {
  setup() {
    const state = reactive({
      name: "",
      email: "",
    });
    const rules = {
      name: { required },
      email: { required, email },
    };

    const v$ = useVuelidate(rules, state);

    return { state, v$ };
  },
};
</script>
<template>
  <form class="flex-column" onsubmit="submit">
    <section class="flex-row">
      <label> Name </label>
      <input :value="state.name" type="text" />
      <p v-for="error of v$.name.$errors" :key="error.$uid">
        <strong>{{ error.$validator }}</strong>
        <small> on property</small>
        <strong>{{ error.$property }}</strong>
        <small> says:</small>
        <strong>{{ error.$message }}</strong>
      </p>
    </section>
    <section class="flex-row">
      <label> Email </label>
      <input :value="state.email" type="email" />
      <p v-for="error of v$.email.$errors" :key="error.$uid">
        <strong>{{ error.$validator }}</strong>
        <small> on property</small>
        <strong>{{ error.$property }}</strong>
        <small> says:</small>
        <strong>{{ error.$message }}</strong>
      </p>
    </section>

    <input type="submit" value="Submit" />
  </form>
</template>

<style scoped>
.flex-row {
  display: flex;
  flex-direction: row;
  gap: 1rem;
}

.flex-column {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}
</style>
