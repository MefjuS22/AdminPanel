import { defineStore } from "pinia";

export const useChartStore = defineStore("data", {
  state: () => ({
    basicData: {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
        {
          label: "This Year",
          data: [65, 59, 80, 81, 56, 55, 40],
          borderColor: "#42A5F5",
          tension: 0.4,
        },
        {
          label: "Last year",
          data: [28, 48, 40, 19, 86, 27, 90],
          borderColor: "#FFA726",
          tension: 0.4,
        },
      ],
    },
  }),
  getters: {},
  actions: {},
});
