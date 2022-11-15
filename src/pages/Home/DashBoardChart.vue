<script>
import { useChartStore } from "@/store/chartData";
import { mapState } from "pinia";

export default {
  name: "DashBoardChart",
  computed: {
    ...mapState(useChartStore, ["basicData"]),
  },
};
</script>
<template>
  <section class="card p-5">
    <h2>Sales</h2>
    <Chart type="line" :data="basicData"></Chart>
  </section>
</template>
<style></style>
