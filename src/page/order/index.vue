<!--
 * @Author: 丁雨阳 dzyyyt@163.com
 * @Date: 2023-01-18 13:21:27
 * @LastEditors: 丁雨阳 dzyyyt@163.com
 * @LastEditTime: 2023-03-13 09:32:57
 * @Description: 
 * 
 * Copyright (c) 2023 by 丁雨阳 dzyyyt@163.com, All Rights Reserved. 
-->
<template>
  <div class="w-full p-2 h-full bg-cover bg-no-repeat  overflow-hidden overflow-y-scroll "
    style="background-image: url('/bg_deatied.png')">
    <n-button @click="$router.back()">返回</n-button>
    <div class="flex items-center w-full  m-2 pb-3 border-b" v-for="(item, index) in order" :key="index">
      <img :src="item.img[0]" class="w-20 h-20 object-cover ml-3" alt="">
      <div :title="item.goods_name" class="pingfang_jian  ml-3 w-40 overflow-hidden overflow-ellipsis whitespace-nowrap">
        {{ item.goods_name }}
      </div>
      <div class="pingfang_jian text-gray-500 text-xs w-20 break-all">总价:{{ item.amount }}</div>
      <div
        class="pingfang_jian text-gray-500 text-xs w-40 break-all mr-6  overflow-hidden overflow-ellipsis whitespace-nowrap"
        :title="item.order_id">订单号:{{ item.order_id }}</div>
      <div class="pingfang_jian text-gray-500 text-xs w-20 break-all mr-3">数量:{{ item.buy_count }}</div>
      <div
        class="pingfang_jian text-gray-500 text-xs w-44  overflow-ellipsis overflow-hidden whitespace-nowrap  hover:whitespace-pre-wrap "
        :title="item.custorm_address.split('_')[0]">
        收获地址:{{ item.custorm_address.split('_')[0] }}
      </div>
      <div
        class="pingfang_jian text-gray-500 text-xs w-44  overflow-ellipsis overflow-hidden whitespace-nowrap  hover:whitespace-pre-wrap ">
        买家电话:{{ item.custorm_address.split('_')[1] }}
      </div>
      <div
        class="pingfang_jian text-gray-500 text-xs w-44  overflow-ellipsis overflow-hidden whitespace-nowrap  hover:whitespace-pre-wrap ">
        商家电话:{{ item.shop_phone }}
      </div>


      <div style="width: 40%;">
        <n-button v-if="item.user_id === id" class="ml-2" @click="go_chat(item)">联系卖家</n-button>
        <n-button v-if="item.shop_id === id" class="ml-2" @click="go_chat(item)">联系买家</n-button>
        <n-button class="ml-2" @click="editOrder(item._id, 1)"
          v-if="item.status == 0 && item.shop_id === id">发货</n-button>
        <n-button class="ml-2" @click="editOrder(item._id, 2)" :disabled="id != item.user_id"
          v-if="item.status == 1 && item.user_id === id">收货</n-button>
        <n-button class="ml-2" v-if="item.status === 2">订单完成</n-button>
        <n-button class="ml-2" v-if="item.status === 2 && item.user_id === id && item.isComment === false"
          @click="goComment(item)">待评价</n-button>
        <n-button class="ml-2" v-if="item.status === 2 && item.user_id === id && item.isComment === true"
          @click="getOneComment(item)">查看评价</n-button>

      </div>
    </div>
    <n-modal v-model:show="showModal" class="custom-card" preset="card" :style="bodyStyle" title="评价" size="huge"
      :bordered="false" :segmented="segmented">
      <n-form ref="formRef" :model="model" :rules="rules">
        <n-form-item path="reviewScore" label="评分">
          <n-rate allow-half :value="model.reviewScore" :on-update:value="updateScore"></n-rate>
        </n-form-item>
        <n-form-item path="review" label="评语">
          <n-input v-model:value="model.review" placeholder="请输入100字以内评语" type="textarea" maxlength="100">
          </n-input>
        </n-form-item>
      </n-form>
      <template #footer>
        <n-button @click="submitReview">提交</n-button>
      </template>
    </n-modal>
    <n-modal v-model:show="showOrderModal" class="custom-card" preset="card" :style="bodyStyle" title="查看评价" size="huge"
      :bordered="false" :segmented="segmented">
      <n-form ref="form" :model="orderComment">
        <n-form-item path="reviewScore" label="评分">
          <n-rate allow-half :value="score" readonly></n-rate>
        </n-form-item>
        <n-form-item path="comment" label="评语">
          <div class="pingfang_jian break-all">{{ reviewComment }}</div>
        </n-form-item>
      </n-form>
    </n-modal>
  </div>
</template>

<script setup>
import axios from "axios";
import { onMounted, reactive, ref } from "vue";
// import router from "../../router/index.js";
import { useRouter } from "vue-router";
import { useMessage, useDialog } from "naive-ui";

const bodyStyle = {
  width: "600px"
}

const shopPhone = localStorage.getItem('phone')

const segmented = {
  content: "soft",
  footer: "soft"
}

const showModal = ref(false)
const showOrderModal = ref(false)

const message = useMessage()

const dialog = useDialog()

const router = useRouter()

const formRef = ref()
const form = ref(null)
const model = reactive({
  reviewScore: null,
  review: ''
})
let comment = ref()
// 图标激活个数
const updateScore = (value) => {
  // console.log(value)
  model.reviewScore = value
}

let orderInfo = reactive({})
const goComment = (item) => {
  showModal.value = true
  orderInfo.value = item
}

const rules = {
  reviewScore: {
    required: true,
    message: "请选择评分",
    trigger: "blur"
  },
  review: {
    required: true,
    message: "请输入评语",
    trigger: ['input', 'blur']
  }
}

// 评论提交
const submitReview = (item) => {
  console.log(item)
  // console.log(item, model)
  axios.post('/review', {
    observerId: localStorage.getItem('id'),
    shop_id: orderInfo.value.shop_id,
    comment: model.review,
    reviewScore: model.reviewScore,
    shop_name: orderInfo.value.shop_name,
    order_id: orderInfo.value.order_id,
    observerName: localStorage.getItem('name')
  }).then(res => {
    console.log(res)
    message.success('提交成功')
    showModal.value = false
    window.location.reload()
  }).catch(err => {
    console.log(err)
    message.error('提交失败')
  })
}

// 查看评论
const orderComment = reactive({})
const score = ref()
const reviewComment = ref()
const getOneComment = (item) => {
  showOrderModal.value = true
  axios.post('/getOrderComment', {
    order_id: item.order_id
  }).then(res => {
    console.log('orderComment', res.data.data[0])
    if (res.data && res.data.data) {
      orderComment.value = res.data.data[0]
      score.value = Number(orderComment.value.reviewScore)
      reviewComment.value = orderComment.value.comment
    }
  })
}

let id = ref()
id.value = localStorage.getItem('id')

let order = reactive([])

const getOrder = () => {
  axios.post('/getOrder', {
    shop_id: localStorage.getItem('id'),
  }).then(res => {
    console.log(res)
    if (res.data.code = 1) {
      order.push(...res.data.data)
    }
  })
}

onMounted(() => {
  getOrder()
  if (localStorage.getItem("token")) {
    return
  } else {
    message.warning('请先登录')
    router.push('/login')
  }
})

//发货
function editOrder(id, index) {
  axios.post('/editOrder', {
    _id: id
    , status: index
  }).then(res => {
    console.log(res)
    if (res.data.code == 1) {
      message.success('操作成功')
    } else {
      message.error('操作失败')
    }

    //刷新页面
    window.location.reload()
  })
}

// 联系卖家
function go_chat(orderMessage) {
  localStorage.setItem('orderMessage', JSON.stringify(orderMessage))
  router.push({
    path: '/chat'
  })
}

</script>

<style scoped>
::-webkit-scrollbar {
  display: none;
}
</style>
