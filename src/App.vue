<script setup>
import { ref } from "vue";
import { RouterLink, RouterView } from "vue-router";
const text = ref();
</script>

<template>
  <div class="container">
    <span class="p-float-label">
      <InputText id="txt" v-model="text" />
      <label for="txt">Text</label>
    </span>
    <Button label="Greet" class="p-button-raised" icon="pi pi-user" />
  </div>
  <RouterView />
</template>

<style lang="scss">
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
</style>
