import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "./plugins/axios";
import VueAxios from "vue-axios";

//import layouts
import defaultLayout from "~/layouts/default.vue";
import loggedInLayout from "~/layouts/loggedIn.vue";

createApp(App)
  .component("default", defaultLayout)
  .component("loggedIn", loggedInLayout)
  .use(VueAxios, axios)
  .use(router)
  .use(store)
  .mount("#app");
