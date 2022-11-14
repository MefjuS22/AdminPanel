<script>
import { computed } from "vue";
import { useUserStore } from "../store/users";

export default {
  name: "UsersContent",
  setup() {
    const userStore = useUserStore();
    userStore.fetchUsers();

    return {
      users: computed(() => userStore.users),
    };
  },
  created() {
    this.columns = [
      { field: "id", header: "Id" },
      { field: "name", header: "Name" },
      { field: "email", header: "email" },
      { field: "address.city", header: "City" },
    ];
  },
};
</script>
<template>
  <div
    class="flex justify-content-center align-items-center flex-column gap-1 my-6 p-5"
  >
    <DataTable
      :value="users"
      responsiveLayout="scroll"
      class="w-11 shadow-5 p-datatable-lg"
    >
      <Column
        v-for="col in columns"
        :field="col.field"
        :header="col.header"
        :key="col.field"
      ></Column>
    </DataTable>
  </div>
</template>
<style></style>
