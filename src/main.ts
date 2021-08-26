import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from 'axios'
import VueAxios from 'vue-axios'

const app = createApp(App);

axios.defaults.baseURL = '/exam-pass-server'

app.use(store).use(router).use(VueAxios, axios);
app.provide('axios', app.config.globalProperties.axios);

app.mount("#app");
