<!--
 * @Author: 丁雨阳 dzyyyt@163.com
 * @Date: 2023-01-18 13:21:27
 * @LastEditors: 丁雨阳 dzyyyt@163.com
 * @LastEditTime: 2023-03-27 08:50:15
 * @Description: 
 * 
 * Copyright (c) 2023 by 丁雨阳 dzyyyt@163.com, All Rights Reserved. 
-->
<template>
  <div class="w-full flex justify-center items-center ">
  <img src="/welcome_login.png" class="w-72 h-72" alt="">
  <div class="flex flex-col ml-24">
    <div class="pingfang_jian mb-5 font-bold text-purple-700">注册</div>

    <!-- <input type="text" v-model="user.name" class="bg-gray-100 p-2  text-xs outline-0 rounded-xl "
                              placeholder="请输入昵称...">
                            <input type="password" v-model="user.password" class="bg-gray-100 mt-5 p-2 text-xs outline-0 rounded-xl "
                              placeholder="请输入密码...">
                            <input type="text" v-model="user.studentId" class="bg-gray-100 mt-5 p-2 text-xs outline-0 rounded-xl "
                              placeholder="请输入学号...">
                            <input type="text" v-model="user.studentName" class="bg-gray-100 mt-5 p-2 text-xs outline-0 rounded-xl "
                              placeholder="请输入姓名...">
                            <input type="text" v-model="user.idCard" class="bg-gray-100 mt-5 p-2 text-xs outline-0 rounded-xl "
                              placeholder="请输入身份证号码..."> -->

      <n-form ref="registerForm" :model="user" :rules="rules" label-placement="left" require-mark-placement="left">
        <n-form-item path="name" label="用户名:">
          <n-input v-model:value="user.name" class="bg-gray-100 text-xs outline-0 rounded-xl" placeholder="请输入昵称..."
            @keydown.enter.prevent></n-input>
        </n-form-item>
        <n-form-item path="password" label="密码:">
          <n-input v-model:value="user.password" type="password" class="bg-gray-100 text-xs outline-0 rounded-xl"
            placeholder="请输入密码..." show-password-on="mousedown" @keydown.enter.prevent></n-input>
        </n-form-item>
        <n-form-item path="studentId" label="学号:">
          <n-input v-model:value="user.studentId" class="bg-gray-100 text-xs outline-0 rounded-xl" placeholder="请输入学号..."
            @keydown.enter.prevent></n-input>
        </n-form-item>
        <n-form-item path="studentName" label="姓名:">
          <n-input v-model:value="user.studentName" class="bg-gray-100 text-xs outline-0 rounded-xl"
            placeholder="请输入姓名..." @keydown.enter.prevent></n-input>
        </n-form-item>
        <n-form-item path="idCard" label="身份证号码:">
          <n-input v-model:value="user.idCard" class="bg-gray-100 text-xs outline-0 rounded-xl" placeholder="请输入身份证号码..."
            @keydown.enter.prevent></n-input>
        </n-form-item>
        <n-form-item path="phone" label="手机号码:">
          <n-input v-model:value="user.phone" class="bg-gray-100 text-xs outline-0 rounded-xl" placeholder="请输入手机号码..."
            @keydown.enter.prevent></n-input>
        </n-form-item>
      </n-form>

      <div class="flex w-full ">

        <div @click="register"
          class="w-24 h-8  mt-4
                              active:scale-75 transition duration-500 ease-in-out
                            text-white pingfang_jian flex justify-center items-center rounded-xl text-xs cursor-pointer bg-purple-700">
          注册
        </div>

        <div @click="back"
          class="w-24 h-8  mt-4 ml-24
                              active:scale-75 transition duration-500 ease-in-out
                            text-white pingfang_jian flex justify-center items-center rounded-xl text-xs cursor-pointer bg-blue-500">
          返回
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>

import { reactive } from "vue";
import axios from "axios";
// import router from "../../router/index.js";
import { useMessage, useDialog } from "naive-ui";
import { useRouter } from "vue-router";
const router = useRouter()

const registerForm = ref(null)

const message = useMessage()
const dialog = useDialog()
let user = reactive({
  name: "",
  password: "",
  studentId: '',
  studentName: '',
  idCard: '',
  phone: '',
  status: 0 // 默认未审核
})

const rules = {
  name: {
    required: true,
    message: '请输入昵称',
    trigger: ["input", "blur"]
  },
  password: {
    required: true,
    message: '请输入密码',
    trigger: ["input", "blur"]
  },
  studentId: {
    required: true,
    message: '请输入学号',
    trigger: ["input", "blur"]
  },
  studentName: {
    required: true,
    message: "请输入姓名",
    trigger: ["input", "blur"]
  },
  idCard: {
    required: true,
    trigger: ['input', 'blur'],
    validator(rule, value) {
      if (!value) {
        return new Error('请输入身份证号码')
      } else if (!/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(value)) {
        // 身份证号码为15位或者18位，15位时全为数字，18位前17位为数字，最后一位是校验位，可能为数字或字符X
        return new Error('请输入正确的身份证号码')
      }
      return true
    },
    trigger: ["input", "blur"]
  },
  phone: {
    required: true,
    trigger: ["input", "blur"],
    validator(rule, value) {
      if (!value) {
        return new Error('请输入手机号')
      } else if (!/^[1][3,4,5,6,7,8,9][0-9]{9}$/.test(value)) {
        return new Error('请输入正确的手机号')
      }
    }
  }
}

function register() {
  registerForm.value?.validate(errors => {
    if (!errors) {
      axios.post('/addUser',
        {
          name: user.name,
          password: user.password,
          isManager: false,
          studentId: user.studentId,
          studentName: user.studentName,
          idCard: user.idCard,
          status: user.status,
          phone: user.phone
        }).then(res => {
          console.log(res)
          if (res.data.code == 1) {
            message.success('注册成功，请等待管理员审核')
            router.push('/login')
          } else {
            message.error('注册失败,该用户已存在')
          }
        })
    } else {
      console.log(errors)
    }
  })


}

function back() {
  router.push('/login')
}

</script>

<style scoped></style>
