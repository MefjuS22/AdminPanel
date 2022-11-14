import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    users: [],
    isLoading: false,
  }),
  getters: {
    getUsers: (state) => {
      return state.users;
    },
  },
  actions: {
    async fetchUsers() {
      this.isLoading = true;
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const users = await response.json();
        this.users = users;
        this.isLoading = false;
      } catch (error) {
        console.alert(error);
        this.isLoading = false;
      }
    },
  },
});
