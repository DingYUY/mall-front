<!--
 * @Author: 丁雨阳 dzyyyt@163.com
 * @Date: 2023-01-18 13:21:27
 * @LastEditors: 丁雨阳 dzyyyt@163.com
 * @LastEditTime: 2023-01-20 09:38:01
 * @Description: 
 * 
 * Copyright (c) 2023 by 丁雨阳 dzyyyt@163.com, All Rights Reserved. 
-->
<template>
<div class="flex pingfang_jian justify-center flex-col h-full items-center" v-if="show==false">
  <div class="text-xs">当前还没登录,请登录</div>
  <div
      @click="router.push('/login')"
      class="bg-green-400 text-white p-2 rounded-xl mt-12 cursor-pointer transition active:scale-50">登录</div>
</div>


  <div class="p-2  overflow-y-scroll  h-height overflow-hidden "    v-if="show==true">
    <div class="pingfang font-bold pl-5">Hi,{{name}}</div>
    <div class="text-xs mt-2 text-gray-500 pingfang pl-5">二手交易市场欢迎你</div>

    <div class="w-full  mt-5 flex flex-col justify-center items-center p-2">
      <n-upload class="flex justify-center" show-file-list="false" @finish="uploadImg"   action="http://localhost:3175/api/upload">
      <img :src="head_img"
           class="w-20 h-20  mx-atuo object-cover rounded-full"
           alt="">
           </n-upload>
           
      <p class="mt-3">{{name}}</p>

      <div class="pingfang mt-8 " style="font-size: 12px">我的发布</div>

      <div class="w-full h-72 flex flex-col justify-end p-2 bg-purple-700 rounded-xl mt-4"
           @click="get_page_deatile(item.good_id)"
           :style="{backgroundImage:`url(${item.img[0]})`}"
            style="background-size: cover;background-position: center"
           v-for="(item,index) in arr">


        <div class="flex justify-between pingfang text-white">
          <div class="pt-3">{{item.name}}</div>
        </div>

      </div>

    </div>

  </div>


</template>

<script setup>

//当网页跳转触发函数
import router from "../../router/index.js";
import {onMounted, reactive, ref} from "vue";
import { useMessage,useDialog  } from "naive-ui";

import axios from "axios";
let show = ref(false)
let name = ref()
let arr = reactive([])
let head_img = ref()
let baseURl='http://localhost:3175'


const message=useMessage()
const dialog=useDialog()

router.afterEach((to, from) => {
  //检查本地是否有登录信息
  let token=localStorage.getItem("token")
  name.value=localStorage.getItem("name")
  if(token) {
//有登录信息
    show.value=true
  }else {
    show.value=false
  }
});

onMounted(()=>{
  let token=localStorage.getItem("token")
  name.value=localStorage.getItem("name")
  head_img.value=localStorage.getItem('head_img')
  if(token) {
//有登录信息
    show.value=true
  }else {
    show.value=false
  }

  axios.post('/getMyGoods',{user_id:localStorage.getItem("id")}).then(res=>{
    arr.push(...res.data.data)
  })

})

function get_page_deatile(id){
//  跳转动态路由
  message.success('跳转成功')
  router.push(`/shop_detailed/${id}`)
}


//上传成功
function uploadImg(file){
  let year=new Date().getFullYear()
  let month=new Date().getMonth()+1
  //获取图片的size
  let size=file.file.file.size
  let day=new Date().getDate()
  let hour=new Date().getHours()


 axios.post('/setUserHead',{
  _id:localStorage.getItem('id'),
  head_img:baseURl+`/public/`+year+month+day+size+hour+'.jpg'
 }).then(res=>{
  if(res.data.code==1){
    message.success('修改成功')
    head_img.value=baseURl+`/public/`+year+month+day+size+hour+'.jpg'
    localStorage.setItem('head_img',baseURl+`/public/`+year+month+day+size+hour+'.jpg')
    location.reload()
  }
 })
}

</script>

<style scoped>
/*设置滚轮*/
::-webkit-scrollbar {
  width: 0px;
  height: 0px;
}
</style>
