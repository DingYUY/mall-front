<!--
 * @Author: 丁雨阳 dzyyyt@163.com
 * @Date: 2023-01-18 13:21:27
 * @LastEditors: 丁雨阳 dzyyyt@163.com
 * @LastEditTime: 2023-01-20 09:43:59
 * @Description: 
 * 
 * Copyright (c) 2023 by 丁雨阳 dzyyyt@163.com, All Rights Reserved. 
-->
<template>

  <div class="flex flex-col  items-center" style="justify-content: center">
    <img src="/success.png" class="w-24" alt="">
    <div class="pingfang_jian mt-5">您当前提交的订单已成功,订单已生成</div>
    <div class="text-xs bg-green-500 mt-4
      rounded-xl cursor-pointer transition active:scale-125
    p-2 pingfang_jian text-white ">查看订单</div>
  </div>

</template>

<script setup>
import {onMounted} from "vue";
import router from "../../router/index.js";

onMounted(()=>{
  setTimeout(()=>{
    router.push('/order')
  },2000)
})
</script>

<style scoped>

</style>
