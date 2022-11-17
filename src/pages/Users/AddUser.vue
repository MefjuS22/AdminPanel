<script>
import { useUserStore, useModalStore } from "../../store/users";
import { mapState } from "pinia";

export default {
  name: "AddUser",
  data() {
    return {
      modalStore: useModalStore(),
    };
  },
  computed: {
    ...mapState(useUserStore, ["users"]),
  },
  methods: {
    addNewUser() {
      useModalStore().openAddUserModal;
      const ids = this.users.map((user) => user.id);
      let newUser = {
        id: Math.max(...ids) + 1,
        name: useModalStore().form.name,
        email: useModalStore().form.email,
        username: useModalStore().form.username,
        address: {
          city: useModalStore().form.address.city,
          geo: {
            lat: null,
            lng: null,
          },
          street: useModalStore().form.address.street,
          suite: useModalStore().form.address.suite,
          zipcode: useModalStore().form.address.zipcode,
        },
        website: useModalStore().form.website,
        phone: useModalStore().form.phone,
      };
      useUserStore().addUser(newUser);
      useModalStore().closeModal();
    },
  },
};
</script>
<template>
  <Dialog
    header="Add User"
    modal
    v-on:after-hide="modalStore.closeModal()"
    v-model:visible="modalStore.openAddUserModal"
    :breakpoints="{ '960px': '75vw', '640px': '90vw' }"
    :style="{ width: '50vw' }"
  >
    <form id="addUserForm" @submit.prevent="addNewUser()">
      <div class="grid p-fluid mt-0">
        <div class="col-12 md:col-6">
          <label class="font-bold text-lg">Full Name*</label>
        </div>
        <div class="col-12 md:col-6">
          <label class="font-bold text-lg">Username*</label>
        </div>
      </div>
      <div class="grid p-fluid">
        <div class="col-12 md:col-6">
          <div class="p-inputgroup">
            <span class="p-inputgroup-addon">
              <i class="pi pi-user"></i>
            </span>
            <InputText
              v-model="modalStore.form.name"
              id="name"
              ref="name"
              placeholder="Name"
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
              v-model="modalStore.form.username"
              id="username"
              placeholder="Username"
              required="true"
            />
          </div>
        </div>
      </div>

      <div class="grid p-fluid mt-0">
        <div class="col-12 md:col-6">
          <label for="street" class="font-bold text-lg">E-mail*</label>
        </div>
        <div class="col-12 md:col-6">
          <label for="city" class="font-bold text-lg">Phone</label>
        </div>
      </div>
      <div class="grid p-fluid">
        <div class="col-12 md:col-6">
          <div class="p-inputgroup">
            <span class="p-inputgroup-addon">
              <i class="pi pi-at"></i>
            </span>
            <InputText
              id="email"
              v-model="modalStore.form.email"
              placeholder="E-mail adress"
              pattern="^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$"
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
              v-model="modalStore.form.phone"
              placeholder="Phone"
            />
          </div>
        </div>
      </div>

      <label for="website" class="font-bold text-lg">Website</label>

      <div class="p-inputgroup">
        <span class="p-inputgroup-addon">W</span>
        <InputText
          id="website"
          v-model="modalStore.form.website"
          placeholder="Website"
        />
      </div>
      <div class="grid p-fluid mt-0">
        <div class="col-12 md:col-6">
          <label for="street" class="font-bold text-lg">Street*</label>
        </div>
        <div class="col-12 md:col-6">
          <label for="city" class="font-bold text-lg">City*</label>
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
              v-model="modalStore.form.address.street"
              placeholder="Street"
              required="true"
            />
          </div>
        </div>
        <div class="col-12 md:col-6">
          <div class="p-inputgroup">
            <InputText
              id="city"
              v-model="modalStore.form.address.city"
              placeholder="City"
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
          <label for="city" class="font-bold text-lg">Zip-Code*</label>
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
              v-model="modalStore.form.address.suite"
              placeholder="Suite"
            />
          </div>
        </div>
        <div class="col-12 md:col-6">
          <div class="p-inputgroup">
            <InputText
              id="zipcode"
              v-model="modalStore.form.address.zipcode"
              placeholder="Zip-Code"
              required="true"
            />
          </div>
        </div>
      </div>
    </form>
    <template #footer>
      <Button
        label="Cancel"
        icon="pi pi-times"
        @click="modalStore.closeModal"
        class="p-button-text"
      />
      <Button
        label="Add user"
        icon="pi pi-check"
        type="submit"
        form="addUserForm"
        autofocus
      />
    </template>
  </Dialog>
</template>
<style></style>
