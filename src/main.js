/*
 * @Author: 丁雨阳 dzyyyt@163.com
 * @Date: 2023-01-18 13:21:27
 * @LastEditors: 丁雨阳 dzyyyt@163.com
 * @LastEditTime: 2023-02-14 15:38:46
 * @Description: 
 * 
 * Copyright (c) 2023 by 丁雨阳 dzyyyt@163.com, All Rights Reserved. 
 */
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./router/index.js";
import axios from "axios";


// axios.defaults.baseURL = "http://127.0.0.1:3175";
// const baseURl = "http://124.222.246.206:3175";
axios.defaults.baseURL = "http://124.222.246.206:3175";
// axios.defaults.baseURL = "http://124.222.246.206:3175";
createApp(App).use(router).mount('#app')
