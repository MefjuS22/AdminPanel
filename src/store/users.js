import { defineStore } from "pinia";
import _ from "lodash";

export const useModalStore = defineStore({
  id: "modalData",
  state: () => ({
    isLoading: false,
    openModal: false,
    openAddUserModal: false,
    selectedUser: null,
    form: {
      id: null,
      email: null,
      username: null,
      address: {
        geo: {
          lat: null,
          lng: null,
        },
        street: null,
        suite: null,
        city: null,
        zipcode: null,
      },
      website: null,
      phone: null,
    },
  }),
  actions: {
    toggleLoading() {
      this.isLoading = !this.isLoading;
    },
    openAddModal() {
      this.openAddUserModal = true;
    },
    openEditUserModal() {
      this.openModal = true;
    },
    onRowSelect(event) {
      this.openModal = true;
      this.selectedUser = event.data;
      this.form = _.cloneDeep(this.selectedUser);
    },
    closeModal() {
      this.openModal = false;
      this.openAddUserModal = false;
      this.form = {
        id: null,
        email: null,
        username: null,
        address: {
          geo: {
            lat: null,
            lng: null,
          },
          street: null,
          suite: null,
          city: null,
          zipcode: null,
        },
        website: null,
        phone: null,
      };
    },
  },
});
export const useUserStore = defineStore("user", {
  state: () => ({
    users: [],
    user: {},
  }),
  getters: {
    getUsers: (state) => {
      return state.users;
    },
  },
  actions: {
    async fetchUsers() {
      useModalStore().toggleLoading();
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const users = await response.json();
        this.users = users;
        useModalStore().toggleLoading();
      } catch (error) {
        console.alert(error);
        useModalStore().toggleLoading();
      }
    },
    async fetchUser(id) {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${id}`
        );
        const user = await response.json();
        this.user = user;
      } catch (error) {
        console.alert(error);
      }
    },
    async deleteUser(id) {
      useModalStore().toggleLoading();
      // try {
      //   await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      //     method: "DELETE",
      //   });
      //   this.users = this.users.filter((user) => user.id !== id);
      //   this.isLoading = false;
      // } catch (error) {
      //   console.alert(error);
      //   this.isLoading = false;
      // }
      this.users = this.users.filter((user) => user.id !== id);
      useModalStore().toggleLoading();
    },
    async addUser(user) {
      useModalStore().toggleLoading();
      this.users.push(user);
      useModalStore().toggleLoading();
      // try {
      //   const response = await fetch(
      //     "https://jsonplaceholder.typicode.com/users",
      //     {
      //       method: "POST",
      //       headers: {
      //         "Content-type": "application/json; charset=UTF-8",
      //       },
      //       body: JSON.stringify(user),
      //     }
      //   );
      //   const data = await response.json();
      //   this.users.push(data);
      //   this.isLoading = false;
      // } catch (error) {
      //   console.alert(error);
      //   this.isLoading = false;
      // }
    },
    updateUser(user) {
      useModalStore().toggleLoading();
      this.users.forEach((u) => {
        if (u.id === user.id) {
          u.name = user.name;
          u.email = user.email;
          u.username = user.username;
          u.phone = user.phone;
          u.website = user.website;
          u.address.street = user.address.street;
          u.address.suite = user.address.suite;
          u.address.city = user.address.city;
          u.address.zipcode = user.address.zipcode;
          useModalStore().toggleLoading();
        }
        useModalStore().toggleLoading();
      });
      // try {
      //   const response = await fetch(
      //     `https://jsonplaceholder.typicode.com/users/${user.id}`,
      //     {
      //       method: "PUT",
      //       headers: {
      //         "Content-type": "application/json; charset=UTF-8",
      //       },
      //       body: JSON.stringify(user),
      //     }
      //   );
      //   const data = await response.json();
      //   const index = this.users.findIndex((u) => u.id === user.id);
      //   this.users[index] = data;
      //   this.isLoading = false;
      // } catch (error) {
      //   console.alert(error);
      //   this.isLoading = false;
      // }
    },
  },
});
