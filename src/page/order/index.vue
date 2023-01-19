<!--
 * @Author: 丁雨阳 dzyyyt@163.com
 * @Date: 2023-01-18 13:21:27
 * @LastEditors: 丁雨阳 dzyyyt@163.com
 * @LastEditTime: 2023-01-19 09:12:45
 * @Description: 
 * 
 * Copyright (c) 2023 by 丁雨阳 dzyyyt@163.com, All Rights Reserved. 
-->
<template>
<div class="w-full p-2 h-full bg-cover bg-no-repeat"
     style="background-image: url('../../../public/bg_deatied.png')">
  <n-button @click="$router.back()">Back</n-button>


    <div class="flex items-center m-2 pb-3 border-b" v-for="(item,index)  in order">
      <img :src="item.img[0]" class="w-20 h-20 object-cover ml-3" alt="">
      <div class="pingfang_jian  ml-3 w-44  overflow-hidden overflow-ellipsis whitespace-nowrap">{{item.goods_name}}</div>
      <div class="pingfang_jian text-gray-500 text-xs w-44 break-all">总价:{{item.amount}}</div>
      <div class="pingfang_jian text-gray-500 text-xs w-44 break-all mr-6">订单号:{{item.order_id}}</div>
      <div class="pingfang_jian text-gray-500 text-xs flex flex-col ">地址:<div class="cursor-pointer pl-3 hover:underline">
        {{ item.custorm_address }}</div>
      </div>

      <n-button class="ml-8" @click="editOrder(item._id,1)"  v-if="item.status==0">发货</n-button>
      <n-button class="ml-8" @click="editOrder(item._id,2)" :disabled="id!=item.user_id" v-if="item.status==1">收货</n-button>
      <n-button class="ml-8"  v-if="item.status==2">订单完成</n-button>
    </div>

</div>
</template>

<script setup>
import axios from "axios";
import {onMounted, reactive, ref} from "vue";
import router from "../../router/index.js";
import { useMessage,useDialog  } from "naive-ui";
const message=useMessage()
const dialog=useDialog()
let id=ref()
let order=reactive([])
id.value=localStorage.getItem('id')
axios.post('/getOrder',{
  shop_id:localStorage.getItem('id'),
}).then(res=>{
  console.log(res)
  if(res.data.code=1){
    order.push(...res.data.data)
  }
})


onMounted(()=>{
  if (localStorage.getItem("token")) {
    return
  } else {
    alert('请先登录')
    router.push('/login')
  }
})

//发货
function editOrder(id,index){
  axios.post('/editOrder',{
    _id:id
    ,status:index
  }).then(res=>{
    console.log(res)
    if(res.data.code==1){
      message.success('操作成功')
    }else {
      message.error('操作失败')
    }

    //刷新页面
    window.location.reload()
  })
}

</script>

<style scoped>

</style>
