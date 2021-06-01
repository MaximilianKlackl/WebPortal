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

axios.defaults.baseURL = "http://localhost:1000";

const app = createApp(App)
app.use(router);
app.use(VueAxios, axios) 
app.mount('#app')

