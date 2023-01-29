<!--
 * @Author: 丁雨阳 dzyyyt@163.com
 * @Date: 2023-01-18 13:21:27
 * @LastEditors: 丁雨阳 dzyyyt@163.com
 * @LastEditTime: 2023-01-28 08:41:26
 * @Description: 
 * 
 * Copyright (c) 2023 by 丁雨阳 dzyyyt@163.com, All Rights Reserved. 
-->
<template>

  <div class="w-full flex justify-center items-center ">
    <img src="/welcome_login.png" class="w-72 h-72" alt="">
    <div class="flex flex-col ml-24">
      <div class="pingfang_jian mb-5 font-bold text-purple-700">注册</div>
      <input type="text" v-model="user.name" class="bg-gray-100 p-2  text-xs outline-0 rounded-xl "
        placeholder="请输入姓名...">
      <input type="password" v-model="user.password" class="bg-gray-100 mt-5 mb-6 p-2 text-xs outline-0 rounded-xl "
        placeholder="请输入密码...">
      <div class="flex w-full ">

        <div @click="register" class="w-24 h-8  mt-4
        active:scale-75 transition duration-500 ease-in-out
      text-white pingfang_jian flex justify-center items-center rounded-xl text-xs cursor-pointer  bg-purple-700">注册
        </div>

        <div @click="back" class="w-24 h-8  mt-4 ml-24
        active:scale-75 transition duration-500 ease-in-out
      text-white pingfang_jian flex justify-center items-center rounded-xl text-xs cursor-pointer bg-blue-500">返回</div>

      </div>
    </div>
  </div>

</template>

<script setup>

import { reactive } from "vue";
import axios from "axios";
import router from "../../router/index.js";
import { useMessage, useDialog } from "naive-ui";



const message = useMessage()
const dialog = useDialog()
let user = reactive({
  name: "",
  password: ""
})

function register() {
  axios.post('/addUser', { name: user.name, password: user.password }).then(res => {
    console.log(res)
    if (res.data.code == 1) {
      message.success('注册成功')
      router.push('/login')
    } else {
      message.error('注册失败')
    }
  })
}

function back() {
  dialog.warning({
    title: '跳转',
    positiveText: '确定',
    negativeText: '取消',
    onPositiveClick: () => {
      message.success('确定')
      router.push('/login')
    },
    onNegativeClick: () => {
      message.error('已取消')
    }
  })
}

</script>

<style scoped>

</style>
