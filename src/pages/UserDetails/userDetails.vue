<script>
import { useUserStore } from "../../store/users";

export default {
  name: "UserDetails",

  mounted() {
    useUserStore().fetchUser(this.$route.params.id);
  },
  computed: {},
  data() {
    return {
      userStore: useUserStore(),
    };
  },
  props: {
    id: {
      type: String,
      required: true,
    },
  },
};
</script>
<template>
  <main class="p-5">
    <h1>User {{ userStore.user.name }}</h1>
    <h2>Username: {{ userStore.user.username }}</h2>
  </main>
</template>
<style></style>
