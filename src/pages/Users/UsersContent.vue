<script>
import { useUserStore } from "../../store/users";
import { mapState } from "pinia";

export default {
  name: "UsersContent",
  data() {
    return {
      openModal: false,
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
      console.log(this.selectedUser);
    },
    closeModal() {
      this.openModal = false;
    },
    deleteUser() {
      useUserStore().deleteUser(this.selectedUser.id);
      this.openModal = false;
    },
    updateUser() {
      let newUser = {
        id: this.selectedUser.id,
        name: this.$refs.name.value,
        email: this.$refs.email.value,
        username: this.$refs.username.value,
        address: {
          street: this.$refs.street.value,
          suite: this.$refs.suite.value,
          city: this.$refs.city.value,
          zipcode: this.$refs.zipcode.value,
        },
        website: this.$refs.website.value,
        phone: this.$refs.phone.value,
      };
      console.log(newUser);
      useUserStore().updateUser(newUser);
      this.openModal = false;
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
            @click="onRowSelect(slotProps)"
          ></Button>
        </template>
      </Column>
      <Dialog
        header="Edit User"
        v-model:visible="openModal"
        :breakpoints="{ '960px': '75vw', '640px': '90vw' }"
        :style="{ width: '50vw' }"
      >
        <form>
          <div class="grid p-fluid mt-0">
            <div class="col-12 md:col-6">
              <label class="font-bold text-lg">Full Name</label>
            </div>
            <div class="col-12 md:col-6">
              <label class="font-bold text-lg">Username</label>
            </div>
          </div>
          <div class="grid p-fluid">
            <div class="col-12 md:col-6">
              <div class="p-inputgroup">
                <span class="p-inputgroup-addon">
                  <i class="pi pi-user"></i>
                </span>
                <InputText
                  id="name"
                  ref="name"
                  placeholder="Name"
                  :value="selectedUser.name"
                  required="true"
                />
              </div>
            </div>
            <div class="col-12 md:col-6">
              <div class="p-inputgroup">
                <span class="p-inputgroup-addon">
                  <i class="pi pi-desktop"></i>
                </span>
                <InputText
                  id="username"
                  ref="username"
                  placeholder="Username"
                  :value="selectedUser.username"
                  required="true"
                />
              </div>
            </div>
          </div>

          <div class="grid p-fluid mt-0">
            <div class="col-12 md:col-6">
              <label for="street" class="font-bold text-lg">E-mail</label>
            </div>
            <div class="col-12 md:col-6">
              <label for="city" class="font-bold text-lg">Phone</label>
            </div>
          </div>
          <div class="grid p-fluid">
            <div class="col-12 md:col-6">
              <div class="p-inputgroup">
                <span class="p-inputgroup-addon">
                  <i class="pi pi-map-marker"></i>
                </span>
                <InputText
                  id="email"
                  ref="email"
                  placeholder="E-mail adress"
                  pattern="^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$"
                  :value="selectedUser.email"
                  required="true"
                />
              </div>
            </div>
            <div class="col-12 md:col-6">
              <div class="p-inputgroup">
                <span class="p-inputgroup-addon">
                  <i class="pi pi-phone"></i>
                </span>
                <InputText
                  id="phone"
                  ref="phone"
                  placeholder="Phone"
                  :value="selectedUser.phone"
                />
              </div>
            </div>
          </div>

          <label for="website" class="font-bold text-lg">Website</label>

          <div class="p-inputgroup">
            <span class="p-inputgroup-addon">W</span>
            <InputText
              id="website"
              ref="website"
              placeholder="Website"
              :value="selectedUser.website"
            />
          </div>
          <div class="grid p-fluid mt-0">
            <div class="col-12 md:col-6">
              <label for="street" class="font-bold text-lg">Street</label>
            </div>
            <div class="col-12 md:col-6">
              <label for="city" class="font-bold text-lg">City</label>
            </div>
          </div>
          <div class="grid p-fluid">
            <div class="col-12 md:col-6">
              <div class="p-inputgroup">
                <span class="p-inputgroup-addon">
                  <i class="pi pi-map-marker"></i>
                </span>
                <InputText
                  id="street"
                  ref="street"
                  placeholder="Street"
                  :value="selectedUser.address.street"
                  required="true"
                />
              </div>
            </div>
            <div class="col-12 md:col-6">
              <div class="p-inputgroup">
                <InputText
                  id="city"
                  ref="city"
                  placeholder="City"
                  :value="selectedUser.address.city"
                  required="true"
                />
              </div>
            </div>
          </div>
          <div class="grid p-fluid mt-0">
            <div class="col-12 md:col-6">
              <label for="street" class="font-bold text-lg">Suite</label>
            </div>
            <div class="col-12 md:col-6">
              <label for="city" class="font-bold text-lg">Zip-Code</label>
            </div>
          </div>
          <div class="grid p-fluid">
            <div class="col-12 md:col-6">
              <div class="p-inputgroup">
                <span class="p-inputgroup-addon">
                  <i class="pi pi-home"></i>
                </span>
                <InputText
                  id="suite"
                  ref="suite"
                  placeholder="Suite"
                  :value="selectedUser.address.suite"
                />
              </div>
            </div>
            <div class="col-12 md:col-6">
              <div class="p-inputgroup">
                <InputText
                  id="zipcode"
                  ref="zipcode"
                  placeholder="Zip-Code"
                  :value="selectedUser.address.zipcode"
                  required="true"
                />
              </div>
            </div>
          </div>
        </form>
        <template #footer>
          <Button
            label="Delete User"
            icon="pi pi-times"
            @click="deleteUser()"
            class="p-button-text"
          />
          <Button
            label="Update User"
            icon="pi pi-check"
            @click="updateUser()"
            autofocus
          />
        </template>
      </Dialog>
    </DataTable>
  </div>
</template>
<style></style>
