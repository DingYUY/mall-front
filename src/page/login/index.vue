<!--
 * @Author: 丁雨阳 dzyyyt@163.com
 * @Date: 2023-01-18 13:21:27
 * @LastEditors: 丁雨阳 dzyyyt@163.com
 * @LastEditTime: 2023-01-20 09:42:48
 * @Description: 
 * 
 * Copyright (c) 2023 by 丁雨阳 dzyyyt@163.com, All Rights Reserved. 
-->
<template>
  <div class="w-full flex justify-center items-center ">
    <img src="/welcome_login.png" class="w-72 h-72" alt="">
    <div class="flex flex-col ml-24">
      <div class="pingfang_jian mb-5 font-bold text-purple-700">登录</div>
      <input type="text" v-model="user.name" class="bg-gray-100 p-2  text-xs outline-0 rounded-xl " placeholder="请输入姓名...">
      <input type="password"
             v-model="user.password"
             class="bg-gray-100 mt-5 mb-6 p-2 text-xs outline-0 rounded-xl " placeholder="请输入密码...">
    <div class="flex w-full ">
      
      <div
          @click="register"
          class="w-24 h-8  mt-4
        active:scale-75 transition duration-500 ease-in-out
      text-white pingfang_jian flex justify-center items-center rounded-xl text-xs cursor-pointer  bg-blue-400">注册</div>

      
      <div
          @click="login"
          class="w-24 h-8  mt-4 ml-24
        active:scale-75 transition duration-500 ease-in-out
      text-white pingfang_jian flex justify-center items-center rounded-xl text-xs cursor-pointer bg-purple-700">登录</div>

    </div>
    </div>
  </div>
</template>

<script setup>

import {reactive} from "vue";
import axios from "axios";
import { useMessage,useDialog  } from "naive-ui";
import router from "../../router";
let user=reactive({
  name:"",
  password:""
})


const message=useMessage()
const dialog=useDialog()
function login(){
  axios.post('/login',{name:user.name,password:user.password}).then(res=>{
    console.log(res)
    if(res.data.code==1){
      message.success('登录成功')
      //存入token
      localStorage.setItem('token',res.data.data.password)
      localStorage.setItem('name',res.data.data.name)
      localStorage.setItem('id',res.data.data._id)
      localStorage.setItem('head_img',res.data.data.img_head)
      router.push('/')
    }else {
      message.warning(res.data.msg)
    }
  })
}



function register(){
  dialog.warning({
          title: '将跳转到注册',
          positiveText: '确定',
          negativeText: '取消',
          onPositiveClick: () => {
            router.push('/register')
                    },
          onNegativeClick: () => {
            message.success('选择成功')
          }
        })
}

</script>

<style >
.n-button__content{
  display: flex;
    align-items: center;
    flex-wrap: nowrap;
    min-width: 0;
    color: #000;
}
</style>
