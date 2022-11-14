<template>
  <div>
    <div class="card px-5">
      <TabMenu :model="items" />
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      active: 3,
      items: [
        {
          label: "Dashboard",
          icon: "pi pi-fw pi-box",
          to: "/",
        },
        {
          label: "Users",
          icon: "pi pi-fw pi-user",
          to: "/users",
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
::v-deep(.tabmenudemo-content) {
  padding: 2rem 1rem;
}
</style>
