<!--
 * @Author: 丁雨阳 dzyyyt@163.com
 * @Date: 2023-01-18 13:21:27
 * @LastEditors: 丁雨阳 dzyyyt@163.com
 * @LastEditTime: 2023-01-28 18:08:31
 * @Description: 
 * 
 * Copyright (c) 2023 by 丁雨阳 dzyyyt@163.com, All Rights Reserved. 
-->
<template>
  <div class="w-full" :class="{ 'flex justify-center flex-col items-center': shop_cart.length == 0 }">
    <img v-if="shop_cart.length == 0" src="/cartNull.png" class="w-72" alt="">
    <p v-if="shop_cart.length == 0" class="pingfang_jian text-xs mt-3">购物车暂无内容，请到广场购买</p>
    <div v-if="shop_cart.length == 0" class="pingfang text-xs font-bold bg-purple-500 mt-5 cursor-pointer
    transition
  active:scale-50 p-2 rounded-xl text-white" @click="router.push('/')">广场</div>


    <div v-if="shop_cart.length > 0">
      <n-checkbox-group @update:value="handleUpdateValue">
        <div class="flex items-center m-2 pb-3 border-b" v-for="(item, index) in result" v-show="item.show == true"
          :key="index">
          <n-checkbox :value="item" />
          <img :src="item.img[0]" class="w-20 h-20 object-cover ml-3" alt="">
          <div class="pingfang_jian  ml-3 w-44  overflow-hidden overflow-ellipsis whitespace-nowrap">{{ item.name }}
          </div>
          <div class="pingfang_jian text-gray-500 text-xs w-44 break-all">{{ item.introduce }}</div>
          <div class="pingfang_jian text-gray-500 text-xs w-44 break-all">单价:{{ item.price }}</div>
          <div class="pingfang_jian text-gray-500 text-xs flex items-center justify-end" style="    width: 34%;">
              <div class="hover:underline p-2 bg-purple-700 text-white rounded" @click="add(item)">添加</div>
          <div class="pingfang_jian text-gray-500 text-xs break-all ml-2 mr-2">数量:{{ item.count }}</div>
              <div class="hover:underline bg-purple-700 text-white rounded p-2" @click="reduce(item,index)">减少</div>
          </div>
        </div>
      </n-checkbox-group>

      <div class="w-full h-24 justify-between p-2 flex items-center">
        <div class="pingfang_jian">已选中<span class="text-purple-900 font-bold text-xl p-2">{{ endArr.length }}</span>件商品
        </div>
        <div @click="Pay" class="w-24 pingfang_jian text-white
       h-12 rounded-full items-center cursor-pointer flex bg-purple-700 justify-center
       transition
       active:scale-125">结算</div>
      </div>

    </div>

  </div>



</template>

<script setup>
import { onMounted, reactive, ref } from "vue";
// import router from "../../router/index.js";
import axios from "axios";
import { useMessage, useDialog } from "naive-ui";
import { useRouter } from "vue-router";
const router = useRouter()
const message = useMessage()

//要修改cart
let shop_cart = reactive(localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [])
let result = reactive([])
let endArr = reactive([])
onMounted(() => {
  if (shop_cart.length > 0) {
    axios.post('/getShopCart', { goods: shop_cart }).then(res => {
      result.push(...res.data.data)
    })
  }
})

function handleUpdateValue(value) {
  endArr.length = 0
  endArr.push(...value)

}


//结算
function Pay() {
  if (endArr.length > 0) {
    //生成一个数组 包含对象 [{}] 里面包含商品id和数量
    let arr = []
    endArr.forEach(item => {
      arr.push({ id: item.good_id, count: item.count })
    })
    router.push(`/buy/` + JSON.stringify(arr))
  } else {
    message.success('请添加商品')
  }
}


//添加
function add(item){
  console.log(item)
 let good_id=item.good_id
  item.count++
  //本地储存
  let arr=JSON.parse(localStorage.getItem("cart"))
  arr.forEach(item=>{
    if(good_id==item.id){
      item.count++
    }
  })
  console.log(arr)
  localStorage.setItem("cart",JSON.stringify(arr))
}


//减少
function reduce(item,index){
 let good_id=item.good_id

  if(item.count>1){
    item.count--
    //本地储存
    let arr=JSON.parse(localStorage.getItem("cart"))
    arr.forEach(item=>{
      if(good_id==item.id){
        item.count--
      }
    })

    localStorage.setItem("cart",JSON.stringify(arr))
  }else{
    result.splice(index,1)
    let arr=JSON.parse(localStorage.getItem("cart"))
    arr.forEach((item,index)=>{
      if(good_id==item.id){
        arr.splice(index,1)
      }
    })

    localStorage.setItem("cart",JSON.stringify(arr))
  }
}

</script>

<style scoped>
/*文本超过省略*/
</style>
