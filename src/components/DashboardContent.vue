<script>
import { computed } from "vue";
import { useChartStore } from "../store/chartData";

export default {
  name: "DashboardContent",
  setup() {
    const dataStore = useChartStore();
    return {
      data: computed(() => dataStore.basicData),
    };
  },
};
</script>
<template>
  <div class="p-5">
    <div class="grid gap-4 w-full justify-content-center">
      <Card style="margin-bottom: 2em" class="col max-w-30rem">
        <template #header><i class="pi pi-arrow-up p-3 text-4xl"></i></template>
        <template #title> Sales This month </template>
        <template #content>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
            sed consequuntur error repudiandae numquam deserunt quisquam
            repellat libero asperiores earum nam nobis, culpa ratione quam
            perferendis esse, cupiditate neque quas!
          </p>
        </template>
      </Card>
      <Card style="margin-bottom: 2em" class="col max-w-30rem">
        <template #header><i class="pi pi-bolt p-3 text-4xl"></i></template>
        <template #title> Website speed </template>
        <template #content>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
            sed consequuntur error repudiandae numquam deserunt quisquam
            repellat libero asperiores earum nam nobis, culpa ratione quam
            perferendis esse, cupiditate neque quas!
          </p>
        </template>
      </Card>
      <Card style="margin-bottom: 2em" class="col max-w-30rem">
        <template #header><i class="pi pi-eye p-3 text-4xl"></i></template>
        <template #title> Page Views </template>
        <template #content>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
            sed consequuntur error repudiandae numquam deserunt quisquam
            repellat libero asperiores earum nam nobis, culpa ratione quam
            perferendis esse, cupiditate neque quas!
          </p>
        </template>
      </Card>
    </div>
    <div class="card p-8">
      <h2>Sales chart</h2>
      <Chart type="line" :data="data"></Chart>
    </div>
  </div>
</template>
<style>
.chart {
  max-height: 500px;
}
</style>
