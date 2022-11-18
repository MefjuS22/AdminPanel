import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import PrimeVue from "primevue/config";
import InputText from "primevue/inputtext";
import Button from "primevue/button";
import Toast from "primevue/toast";
import ToastService from "primevue/toastservice";
import TabMenu from "primevue/tabmenu";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import Avatar from "primevue/avatar";
import Card from "primevue/card";
import Chart from "primevue/chart";
import Dialog from "primevue/dialog";
import Skeleton from "primevue/skeleton";

import "primeflex/primeflex.css";
import "primevue/resources/themes/md-dark-indigo/theme.css"; //theme
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(router);
app.use(PrimeVue);
app.use(ToastService);

app.component("InputText", InputText);
app.component("Button", Button);
app.component("Toast", Toast);
app.component("TabMenu", TabMenu);
app.component("DataTable", DataTable);
app.component("Column", Column);
app.component("Avatar", Avatar);
app.component("Card", Card);
app.component("Chart", Chart);
app.component("Dialog", Dialog);
app.component("Skeleton", Skeleton);

app.mount("#app");
