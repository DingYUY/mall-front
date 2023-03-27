<!--
 * @Author: 丁雨阳 dzyyyt@163.com
 * @Date: 2023-01-18 13:21:27
 * @LastEditors: 丁雨阳 dzyyyt@163.com
 * @LastEditTime: 2023-02-28 09:43:16
 * @Description: 
 * 
 * Copyright (c) 2023 by 丁雨阳 dzyyyt@163.com, All Rights Reserved. 
-->
<template>
  <div class="w-full flex justify-center items-center ">
    <img src="/welcome_login.png" class="w-72 h-72" alt="">
    <div class="flex flex-col ml-24">
      <div class="pingfang_jian mb-5 font-bold text-purple-700">登录</div>
      <!-- <input type="text" v-model="user.name" class="bg-gray-100 p-2  text-xs outline-0 rounded-xl "
        placeholder="请输入姓名...">
      <input type="password" v-model="user.password" class="bg-gray-100 mt-5 mb-6 p-2 text-xs outline-0 rounded-xl "
        placeholder="请输入密码..."> -->
      
        <n-form ref="loginForm" :model="user" :rules="rules" label-placement="left">
          <n-form-item path="name" label="账号:">
            <n-input v-model:value="user.name" class="bg-gray-100 text-xs outline-0 rounded-xl" placeholder="请输入昵称..." @keydown.enter.prevent></n-input>
          </n-form-item>
          <n-form-item path="password" label="密码:">
            <n-input v-model:value="user.password" type="password" class="bg-gray-100 text-xs outline-0 rounded-xl"
            placeholder="请输入密码..." show-password-on="mousedown" @keydown.enter.prevent></n-input>
          </n-form-item>
        </n-form>

      <div class="flex w-full ">

        <div @click="register" class="w-24 h-8  mt-4
        active:scale-75 transition duration-500 ease-in-out
      text-white pingfang_jian flex justify-center items-center rounded-xl text-xs cursor-pointer  bg-blue-400">注册
        </div>


        <div @click="login" class="w-24 h-8  mt-4 ml-24
        active:scale-75 transition duration-500 ease-in-out
      text-white pingfang_jian flex justify-center items-center rounded-xl text-xs cursor-pointer bg-purple-700">登录
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>

import { reactive } from "vue";
import axios from "axios";
import { useMessage, useDialog } from "naive-ui";
// import router from "../../router";
import { useRouter } from "vue-router";
const router = useRouter()
let user = reactive({
  name: "",
  password: ""
})

const loginForm = ref()

const rules = {
  name: {
    required: true,
    trigger: "blur",
    message: "请输入账号"
  },
  password: {
    required: true,
    trigger: "blur",
    message: "请输入密码"
  }
}

const message = useMessage()
const dialog = useDialog()
function login() {
  axios.post('/login', { name: user.name, password: user.password }).then(res => {
    console.log(res)
    if (res.data.code == 1) {
      if (res.data.data.isBan === false && res.data.data.status === 1) {
        message.success('登录成功')
        localStorage.setItem('token', res.data.data.password)
        localStorage.setItem('name', res.data.data.name)
        localStorage.setItem('id', res.data.data._id)
        localStorage.setItem('head_img', res.data.data.img_head)
        localStorage.setItem('isManager', res.data.data.isManager)
        localStorage.setItem('phone', res.data.data.phone)
        router.push('/')
      } else if ( res.data.data.isBan === false && res.data.data.status === 0 ) {
        message.error('该用户正在审核中')
      } else if ( res.data.data.isBan === false && res.data.data.status === 2 ) {
        message.error('该用户审核未通过')
      } else {
        message.error('该用户已被封禁')
      }
    } else {
      message.warning(res.data.msg)
    }
  })
}



function register() {
  router.push('/register')
}

</script>

<style >
.n-button__content {
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  min-width: 0;
  color: #000;
}
</style>
