<!--
 * @Author: 丁雨阳 dzyyyt@163.com
 * @Date: 2023-01-18 13:21:27
 * @LastEditors: 丁雨阳 dzyyyt@163.com
 * @LastEditTime: 2023-01-20 09:43:53
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
          <div class="pingfang_jian  ml-3 w-44  overflow-hidden overflow-ellipsis whitespace-nowrap">{{ item.name }}</div>
          <div class="pingfang_jian text-gray-500 text-xs w-44 break-all">{{ item.introduce }}</div>
          <div class="pingfang_jian text-gray-500 text-xs w-44 break-all">单价:{{ item.price }}</div>
          <div class="pingfang_jian text-gray-500 text-xs w-44 break-all">数量:{{ item.count }}</div>
          <div class="pingfang_jian text-gray-500 text-xs flex ">操作:<div class="cursor-pointer pl-3 hover:underline">删除
            </div>
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
import router from "../../router/index.js";
import axios from "axios";
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
    alert('请选择商品')
  }
}

</script>

<style scoped>
/*文本超过省略*/
</style>
