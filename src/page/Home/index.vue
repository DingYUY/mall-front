<!--
 * @Author: 丁雨阳 dzyyyt@163.com
 * @Date: 2023-01-18 13:21:27
 * @LastEditors: 丁雨阳 dzyyyt@163.com
 * @LastEditTime: 2023-02-27 16:05:06
 * @Description: 
 * 
 * Copyright (c) 2023 by 丁雨阳 dzyyyt@163.com, All Rights Reserved. 
-->
<!--
 * @Author: 丁雨阳 dzyyyt@163.com
 * @Date: 2023-01-18 13:21:27
 * @LastEditors: 丁雨阳 dzyyyt@163.com
 * @LastEditTime: 2023-01-19 13:46:23
 * @Description: 
 * 
 * Copyright (c) 2023 by 丁雨阳 dzyyyt@163.com, All Rights Reserved. 
-->
<template>

  <div class="flex justify-center items-center p-2 ">
    <div class="w-95_ h-height  flex rounded-xl ">
      <user></user>
      <transition name="fold-left">
        <router-view v-if="demo" class="rounded-r-3xl border-t border-r border-b shadow-2xl w-full  ">
        </router-view>
      </transition>
      <!-- <router-view v-slot="{ Component, route }" v-if="demo" class="rounded-r-3xl border-t border-r border-b shadow-2xl w-full  ">
        <transition name="fold-left" mode="in-out">
          <component :is="Component" :key="route.path"></component>
        </transition>
      </router-view> -->
    </div>
    <div class="w-64 ml-1 h-height  rounded-xl border"
      style="background: #fafafa;box-shadow: 0 0 10px rgba(0,0,0,0.1);">
      <user_msg></user_msg>
    </div>
  </div>

</template>

<script setup>
import user from "../../components/user/index.vue";
import { ref } from "vue";
import user_msg from "../../components/user_msg/index.vue";
let demo = ref(true)
</script>

<style scoped>
.fold-left-enter-active {
  animation-name: fold-left-in;
  animation-duration: .5s;
}

.fold-left-leave-active {
  animation-name: fold-left-out;
  animation-duration: .5s;
}

.fold-right-enter-active {
  animation-name: fold-right-in;
  animation-duration: .5s;
}

.fold-right-leave-active {
  animation-name: fold-right-out;
  animation-duration: .5s;
}

@keyframes fold-left-in {
  0% {
    transform: translate3d(100%, 0, 0);
  }

  100% {
    transform: translate3d(0, 0, 0);
  }
}

@keyframes fold-left-out {
  0% {
    transform: translate3d(0, 0, 0);
  }

  100% {
    transform: translate3d(-100%, 0, 0);
  }
}
</style>
