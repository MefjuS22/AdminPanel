<script setup>
import { RouterLink, RouterView } from "vue-router";
import NavBar from "./components/NavBar.vue";
import FooterComponent from "./components/Footer.vue";
import LoggedUserData from "./components/LoggedUserData.vue";
</script>

<template>
  <LoggedUserData />
  <NavBar />
  <div class="wrapper">
    <RouterView />
  </div>

  <FooterComponent></FooterComponent>
</template>

<style lang="scss">
* {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.wrapper {
  min-height: 85vh;
}
</style>
