import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import 'remixicon/fonts/remixicon.css'
import {routes} from './routes'
import { createWebHistory, createRouter } from "vue-router";
import axios from 'axios'
import VueAxios from 'vue-axios'

const router = createRouter({
    history: createWebHistory(),
    routes
});

const API_URL = "http://localhost:1000"
axios.defaults.baseURL = API_URL;

const app = createApp(App)
app.use(router);
app.use(VueAxios, axios) 
app.mount('#app')

app.config.globalProperties.$API_URL = API_URL;

