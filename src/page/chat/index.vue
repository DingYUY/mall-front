<!--
 * @Author: 丁雨阳 dzyyyt@163.com
 * @Date: 2023-02-07 10:25:49
 * @LastEditors: 丁雨阳 dzyyyt@163.com
 * @LastEditTime: 2023-02-15 14:01:37
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
-->
<template>
  <div class="w-full p-2 h-full bg-cover bg-no-repeat" style="background-image: url('/bg_deatied.png')">
    <div class="top">
      <n-button @click="$router.back()">返回</n-button>
      <span style="display:flex;flex:1;justify-content: center;margin-right: 28px;">{{
        orderMessage.shop_id !==
          currentId ? orderMessage.shop_name : userName
      }}</span>
    </div>
    <div class="chat-area">
      <div ref="chat" class="overflow-hidden overflow-y-scroll area">
        <div v-for="(item, index) in chatList.value" :key="index">
          <div
            style="display: flex; margin: 10px 10px 15px 10px; justify-content: flex-start; align-items: center; flex-wrap: nowrap;"
            v-if="item.current_id !== currentId">
            <img :src="item.shop_id === currentId ? userImg : shopImg"
              style="display: flex; flex-direction: column; justify-content: flex-start; width: 50px; height: 50px; border-radius: 25px; object-fit: cover;">
            <span
              style="display: inline-block; max-width: 60%; word-break: break-all; background-color: greenyellow; padding: 15px; border-radius: 10px; margin-left: 20px;">{{
                item.content
              }}</span>
          </div>
          <div v-else
            style="display: flex; margin: 10px 10px 15px 10px; justify-content: flex-end; align-items: center; flex-wrap: nowrap;">
            <span
              style="display: inline-block; max-width: 60%; word-break: break-all; background-color: greenyellow; padding: 15px; border-radius: 10px; margin-right: 20px;">{{
                item.content
              }}</span>
            <img :src="item.user_id === currentId ? userImg : shopImg"
              style="display: flex; flex-direction: column; justify-content: flex-start; width: 50px; height: 50px; border-radius: 25px; object-fit: cover;">
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <textarea v-model="sendText" class="text" name="" id="" minlength="1" maxlength="200"
        placeholder="请输入内容"></textarea>
      <n-button @click="sendMessage">发送</n-button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, reactive, watch, onUnmounted } from 'vue';
import { useMessage } from 'naive-ui'
import axios from 'axios';

const orderMessage = JSON.parse(localStorage.getItem('orderMessage'))
console.log('orderMessage', orderMessage)

const message = useMessage()

const sendText = ref()

let chatList = reactive([])

const sendList = reactive({
  content: sendText,
  shop_id: orderMessage.shop_id,
  user_id: orderMessage.user_id,
  current_id: localStorage.getItem('id')
})
const currentId = localStorage.getItem('id')

let ws = new WebSocket('ws://127.0.0.1:3000')
// let ws = new WebSocket('ws://124.222.246.206:3000')

// 开启连接后客户端处理方法
ws.onopen = () => {
  console.log('已连接到websocket服务器')
}

// 点击按钮时给websocket服务器端发送信息
const sendMessage = () => {
  if (sendText.value) {
    ws.send(JSON.stringify(sendList))
    axios.post('/addChat', {
      content: sendText.value,
      shop_id: orderMessage.shop_id,
      user_id: orderMessage.user_id,
      current_id: localStorage.getItem('id'),
      token: localStorage.getItem('token')
    }).then(res => {
      console.log('添加数据库', res.data)
    })
    console.log('发送：', sendList)
    sendText.value = ''
  } else {
    message.warning('请输入内容')
  }
}

// 接受信息后客户端处理方法
ws.onmessage = (res) => {
  console.log('接收:', JSON.parse(res.data))
  let receiveList = reactive([])
  receiveList.value = JSON.parse(res.data)
  console.log('receiveList.value', receiveList.value)
  // chatList.push(JSON.parse(res.data))
  chatList.value = recordList.value.concat(receiveList.value)
  console.log('recordList', recordList)
  console.log('chatList', chatList.value)
}

// 关闭websocket
ws.onclose = () => {
  console.log('连接已关闭')
  localStorage.setItem('orderMessage', JSON.stringify({}))
}

onUnmounted(() => {
  ws.onclose(() => {
    console.log('离开页面，连接已关闭')
  })
})

// 根据id查询头像
const shopImg = ref()
const userImg = ref()
const userName = ref()

let recordList = reactive([])

const chat = ref()

onMounted(() => {
  // 商家头像
  axios.post('/getHead', { id: orderMessage.shop_id }).then(res => {
    shopImg.value = res.data.data.img_head
    // console.log('shop_img', shopImg.value)
  })
  // 客户头像
  axios.post('/getHead', { id: orderMessage.user_id }).then(res => {
    userImg.value = res.data.data.img_head
    userName.value = res.data.data.name
    // console.log('user_img', userImg.value)
    // console.log(userName.value)
  })
  // 获取聊天历史记录
  axios.post('/getChat', {
    shop_id: orderMessage.shop_id,
    user_id: orderMessage.user_id
  }).then(res => {
    recordList.value = res.data.data
    console.log('聊天记录', recordList.value)
    chatList.value = recordList.value
  })
})

watch(() => chatList.value, () => {
  nextTick(() => {
    chat.value.scrollTop = chat.value.scrollHeight
  })
}, {
  deep: true
})

</script>

<style lang="scss" scoped>
.top {
  display: flex;
  justify-content: space-between;
  flex: 1;
  width: 100%;
  padding: 0 0 10px 0;
  border-bottom: 1px solid #eae8e8;
}

.chat-area {
  height: 87%;

  .area {
    height: 99%;
    border-radius: 5px;
    background-color: #fdfdfd;
  }
}

.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;

  .text {
    width: 95%;
    padding: 5px;
    border-radius: 5px;
  }
}

*::-webkit-scrollbar {
  display: none;
}
</style>
