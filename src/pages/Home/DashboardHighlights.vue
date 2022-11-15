<script>
export default {
  name: "DashboardHighlights",
};
</script>
<template>
  <section class="p-5">
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
  </section>
</template>
<style></style>
