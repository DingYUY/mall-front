<!--
 * @Author: 丁雨阳 dzyyyt@163.com
 * @Date: 2023-01-18 13:21:27
 * @LastEditors: 丁雨阳 dzyyyt@163.com
 * @LastEditTime: 2023-02-23 09:16:42
 * @Description: 
 * 
 * Copyright (c) 2023 by 丁雨阳 dzyyyt@163.com, All Rights Reserved. 
-->
<template>
<div class="w-56 shadow-3xl h-full bg-white rounded-xl shadow-2xl border-r ">
  <img v-if="show==false" src="/user.png"   class="w-14 pt-24 mx-auto" alt="">
  <p v-if="show==false" class="pingfang text-xs pt-2 pb-3 border-b  text-center text-blue-300">未登录</p>

  <img v-if="show==true" src="/user.png"   class="w-14 pt-24 mx-auto" alt="">
<p v-if="show==true" class="pingfang text-xs pt-2 pb-3 border-b  text-center text-blue-300">{{username}}</p>



  <div class="pingfang flex items-center justify-center mt-12">
    <svg t="1672291520026" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3689" width="24" height="24"><path d="M832 896H298.666667a104.533333 104.533333 0 0 1-106.666667-102.4v-101.973333h53.333333v102.826666A52.48 52.48 0 0 0 298.666667 845.653333h533.333333a52.48 52.48 0 0 0 53.333333-51.2V229.546667a52.48 52.48 0 0 0-53.333333-51.2H298.666667a52.48 52.48 0 0 0-53.333334 51.2v102.826666H192V229.546667A104.533333 104.533333 0 0 1 298.666667 128h533.333333A104.533333 104.533333 0 0 1 938.666667 229.546667v564.906666A104.533333 104.533333 0 0 1 832 896zM601.173333 352a25.6 25.6 0 0 1 0-36.693333 27.733333 27.733333 0 0 1 37.546667 0l184.32 177.066666a30.293333 30.293333 0 0 1 0 39.253334L640 708.693333a27.733333 27.733333 0 0 1-37.546667 0 25.173333 25.173333 0 0 1 0-36.266666l139.946667-134.826667H112.213333a25.6 25.6 0 1 1 0-51.2h628.906667z" fill="#1296db" p-id="3690"></path></svg>
    <span class="text-xs ml-3 text-blue-400 cursor-pointer" @click="jump('/login','登录/注册')">注册/登录</span>
  </div>

  <div class="pingfang flex items-center justify-center mt-6">
    <svg t="1672291713955" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4716" width="24" height="24"><path d="M346.112 806.912q19.456 0 36.864 7.168t30.208 19.968 20.48 30.208 7.68 36.864-7.68 36.864-20.48 30.208-30.208 20.48-36.864 7.68q-20.48 0-37.888-7.68t-30.208-20.48-20.48-30.208-7.68-36.864 7.68-36.864 20.48-30.208 30.208-19.968 37.888-7.168zM772.096 808.96q19.456 0 37.376 7.168t30.72 19.968 20.48 30.208 7.68 36.864-7.68 36.864-20.48 30.208-30.72 20.48-37.376 7.68-36.864-7.68-30.208-20.48-20.48-30.208-7.68-36.864 7.68-36.864 20.48-30.208 30.208-19.968 36.864-7.168zM944.128 227.328q28.672 0 44.544 7.68t22.528 18.944 6.144 24.064-3.584 22.016-13.312 37.888-22.016 62.976-23.552 68.096-18.944 53.248q-13.312 40.96-33.28 56.832t-49.664 15.872l-35.84 0-65.536 0-86.016 0-96.256 0-253.952 0 14.336 92.16 517.12 0q49.152 0 49.152 41.984 0 20.48-9.728 35.328t-38.4 14.848l-49.152 0-94.208 0-118.784 0-119.808 0-99.328 0-55.296 0q-20.48 0-34.304-9.216t-23.04-24.064-14.848-32.256-8.704-32.768q-1.024-6.144-5.632-29.696t-11.264-58.88-14.848-78.848-16.384-87.552q-19.456-103.424-44.032-230.4l-76.8 0q-15.36 0-25.6-7.68t-16.896-18.432-9.216-23.04-2.56-22.528q0-20.48 13.824-33.792t37.376-13.312l21.504 0 21.504 0 25.6 0 34.816 0q20.48 0 32.768 6.144t19.456 15.36 10.24 19.456 5.12 17.408q2.048 8.192 4.096 23.04t4.096 30.208q3.072 18.432 6.144 38.912l700.416 0zM867.328 194.56l-374.784 0 135.168-135.168q23.552-23.552 51.712-24.064t51.712 23.04z" p-id="4717" fill="#1296db"></path></svg>
    <span class="text-xs ml-3 text-blue-400 cursor-pointer" @click="jump('/shop_cart','购物车')">购物车&nbsp;&nbsp;&nbsp;&nbsp;</span>
  </div>


  <div class="pingfang flex items-center justify-center mt-6">
    <svg t="1672291893109" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6919" width="24" height="24"><path d="M1009.19461 5.118447a32.054274 32.054274 0 0 0-35.125341 0.255922l-959.708789 639.805859a31.830341 31.830341 0 0 0-14.043738 29.942914 31.830341 31.830341 0 0 0 19.929952 26.360002l250.292052 100.161607 117.692288 205.953506a31.990293 31.990293 0 0 0 27.415681 16.123108H415.998608c11.228593 0 21.657428-5.950194 27.415681-15.547283l66.443839-110.782384 310.14589 124.026365a31.734371 31.734371 0 0 0 27.543642-1.855437c8.445437-4.734563 14.23568-13.05204 15.867185-22.617137l159.951465-959.708788A32.054274 32.054274 0 0 0 1009.19461 5.118447zM100.446359 664.662317L841.821398 170.3803 302.784962 747.389214c-2.847136-1.695486-5.374369-3.934806-8.509418-5.182427l-193.829185-77.54447z m225.627536 105.216073l-0.223932-0.319903L931.842082 120.955298 415.230841 925.895049l-89.156946-156.016659z m480.750122 177.322194l-273.229092-109.278841a63.564712 63.564712 0 0 0-19.929952-3.806845L934.401305 181.896806l-127.577288 765.303778z" fill="#1296db" p-id="6920"></path></svg>
    <span class="text-xs ml-3 text-blue-400 cursor-pointer" @click="jump('/','发布')">广场&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
  </div>



  <div class="pingfang flex items-center justify-center mt-6">
    <svg t="1672292291966" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8917" width="24" height="24"><path d="M469.333333 554.666667l128 128 59.733334-59.733334-102.4-102.4V341.333333h-85.333334v213.333334zM85.333333 256l149.333334 149.333333 29.866666 29.866667C298.666667 332.8 396.8 256 512 256c140.8 0 256 115.2 256 256s-115.2 256-256 256c-128 0-234.666667-93.866667-251.733333-217.6l-85.333334-85.333333c-4.266667 17.066667-4.266667 29.866667-4.266666 46.933333 0 187.733333 153.6 341.333333 341.333333 341.333333s341.333333-153.6 341.333333-341.333333-153.6-341.333333-341.333333-341.333333C405.333333 170.666667 311.466667 221.866667 247.466667 298.666667l-42.666667-42.666667H85.333333z" fill="#1296db" p-id="8918"></path></svg>
    <span class="text-xs ml-3 text-blue-400 cursor-pointer" @click="jump('/good_send','商品发布')">商品发布</span>
  </div>

  <div class="pingfang flex items-center justify-center mt-6">
    <svg t="1672292291966" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8917" width="24" height="24"><path d="M469.333333 554.666667l128 128 59.733334-59.733334-102.4-102.4V341.333333h-85.333334v213.333334zM85.333333 256l149.333334 149.333333 29.866666 29.866667C298.666667 332.8 396.8 256 512 256c140.8 0 256 115.2 256 256s-115.2 256-256 256c-128 0-234.666667-93.866667-251.733333-217.6l-85.333334-85.333333c-4.266667 17.066667-4.266667 29.866667-4.266666 46.933333 0 187.733333 153.6 341.333333 341.333333 341.333333s341.333333-153.6 341.333333-341.333333-153.6-341.333333-341.333333-341.333333C405.333333 170.666667 311.466667 221.866667 247.466667 298.666667l-42.666667-42.666667H85.333333z" fill="#1296db" p-id="8918"></path></svg>
    <span class="text-xs ml-3 text-blue-400 cursor-pointer" @click="jump('/order','订单')">订单&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
  </div>

  <div class="pingfang flex items-center justify-center mt-6">
    <svg t="1672410219806" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="11573" width="24" height="24"><path d="M511.449009 213.858462a179.278769 179.278769 0 1 1 0 358.557538 179.278769 179.278769 0 0 1 0-358.557538z m393.294769 179.357538A393.294769 393.294769 0 1 0 182.036086 608.098462l294.203077 392.270769a39.384615 39.384615 0 0 0 70.498462 0l294.754461-392.270769c39.699692-61.912615 63.251692-135.483077 63.251692-214.882462z" fill="#1296db" p-id="11574"></path></svg>
    <span @click="jump('/address','地址')" class="text-xs ml-3 text-blue-400 cursor-pointer">地址&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
  </div>


  <div class="pingfang flex items-center justify-center  mt-6 text-center">
    <span @click="clearToken()" class="text-xs  text-blue-400 p-2
      transition cursor-pointer
     rounded-xl w-24 hover:bg-blue-500 hover:text-white border text-center">登出</span>
  </div>

  <div class="pingfang flex items-center justify-center  mt-6 text-center pt-32 text-blue-400">
    <span>如有问题可联系管理员电话15651863050</span>
  </div>
</div>
</template>

<script setup>
import router from "../../router/index.js";
import {onMounted, ref} from "vue";
import { useMessage,useDialog  } from "naive-ui";
const message=useMessage()
const dialog=useDialog()
let show=ref(false)
let username=ref()
onMounted(()=>{
  //检查本地是否有登录信息
  let token=localStorage.getItem("token")
  username.value=localStorage.getItem("name")||"未登录"
  if(token) {
//有登录信息
    show.value=true
  }else {
    show.value=false
  }
})

//清除 token
function clearToken() {
  message.success('已退出登录')
  localStorage.removeItem("token")
  localStorage.removeItem("name")
  localStorage.removeItem("id")
  localStorage.removeItem("head_img")
  localStorage.removeItem("cart")
  //刷新页面
  location.reload()
}
 

function jump(path,name){
    router.push(path)
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
