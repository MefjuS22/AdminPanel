<script>
import { useUserStore, useModalStore } from "../../store/users";
import { mapState } from "pinia";
import _ from "lodash";

export default {
  name: "UsersContent",
  data() {
    return {
      modalStore: useModalStore(),
    };
  },
  computed: {
    ...mapState(useUserStore, ["users"]),
  },
  created() {
    this.columns = [
      { field: "id", header: "Id" },
      { field: "name", header: "Name" },
      { field: "email", header: "email" },
      { field: "address.city", header: "City" },
    ];
  },
  mounted() {
    useUserStore().fetchUsers();
  },
  methods: {
    onRowSelect(event) {
      this.openModal = true;
      this.selectedUser = event.data;
      this.form = _.cloneDeep(this.selectedUser);
    },
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
      <template #header>
        <div
          class="table-header flex justify-content-between align-items-center"
        >
          Users
          <Button @click="modalStore.openAddModal" icon="pi pi-plus"></Button>
        </div>
      </template>
      <Column
        v-for="col in columns"
        :field="col.field"
        :header="col.header"
        :key="col.field"
      ></Column>
      <Column
        headerStyle="width: 4rem; text-align: center"
        bodyStyle="text-align: center; overflow: visible"
      >
        <template #body="slotProps">
          <Button
            type="button"
            icon="pi pi-cog"
            @click="modalStore.onRowSelect(slotProps)"
          ></Button>
        </template>
      </Column>
    </DataTable>
  </div>
</template>
<style></style>
