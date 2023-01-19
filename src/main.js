import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./router/index.js";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:3175";
const baseURl = "http://localhost:3175";
createApp(App).use(router).mount('#app')
