<!--
 * @Author: 丁雨阳 dzyyyt@163.com
 * @Date: 2023-01-18 13:21:27
 * @LastEditors: 丁雨阳 dzyyyt@163.com
 * @LastEditTime: 2023-01-28 08:42:09
 * @Description: 
 * 
 * Copyright (c) 2023 by 丁雨阳 dzyyyt@163.com, All Rights Reserved. 
-->
<template>
  <div class="w-90_ p-2 flex flex-wrap  justify-start h-full">
    <div @click="get_page_deatile(item.good_id)"
      class="p-2 h-72 mr-8 mb-6 active:scale-50 transition cursor-pointer rounded-xl pingfang  box_neiyin"
      style="background-size: cover;width: 45%;background-position: center;background-repeat: no-repeat"
      :style="{backgroundImage:`url(${item.img[0]})`}" :class="{'hidden':item.show==false}"
      v-for="(item,index) in data_obj">
      <div class="flex h-full flex-col justify-between">
        <div class="flex items-end text-white">
          <img class="w-14 rounded-full h-14 object-cover rounded-xl " :src="item.user_img">
        </div>

        <div class="flex justify-between text-white">
          <div class="pt-3">{{ item.name }}</div>
          <div class="text-right text-2xl pingfang_jian pt-2">￥{{ item.price }}</div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import router from "../../router/index.js";
import { useMessage, useDialog } from "naive-ui";
const message = useMessage()
const dialog = useDialog()
let props = defineProps({
  data_obj: {
    type: Array,
    default: []
  }
})


function get_page_deatile(id, path, name) {
  //  跳转动态路由
  jump('/shop_detailed', '商品', id)
}

function jump(path, name, id) {

  // message.success('跳转成功')
  router.push(`/shop_detailed/${id}`)


}

</script>

<style scoped>
.box_neiyin {
  box-shadow: inset 0px -20px 16px 0px rgb(102 113 122)
}
</style>
