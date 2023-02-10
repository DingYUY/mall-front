<template>
  <div class="w-full p-2 " style="
  background-image: url('/bg_deatied.png');
  background-size: cover;
">
    <n-button @click="router.back()" class="pingfang  rounded-xl font-bold ">Back</n-button>


    <n-carousel show-arrow class="h-72 w-90_ mx-auto  mt-4  shadow-2xl rounded-xl">
      <img class="carousel-img" :src="item" v-for="(item, index) in shop.img">
    </n-carousel>

    <div class="flex m-5  pingfang_jian justify-between">
      <div class="text-xl pingfang font-bold text-purple-600">
        <div>{{ shop.name }}</div>
        <div class="text-xs text-gray-400">发货地址:{{ shop.address }}</div>
      </div>
      <div class="text-xl font-bold text-purple-500">￥{{ shop.price }}</div>
    </div>

    <div class=" w-90_ mx-auto flex items-start pingfang ">
      <img :src="shop.author_img" class="w-12 h-12 rounded-xl object-cover " alt="">
      <div class="text-gray-500 text-xs ml-2 pt-1">
        <div>{{ shop.author }}</div>
        <div class="text-black pt-3">{{ shop.author_title }}</div>
      </div>
    </div>

    <div class="flex w-full  justify-end shadow-2xl border-t mt-24">
      <div class="w-2/3 p-4 pingfang text-xs">
        简介:
        {{ shop.shop_title }}
        <div @click="joinCart" class="flex justify-between mt-12">
          <div class="text-white bg-purple-700 p-2
           transition cursor-pointer active:scale-50
           rounded-xl hover:scale-125 ">加入购物车</div>
          <div class="bg-yellow-400 hover:scale-125
            transition cursor-pointer active:scale-50
          p-2 text-white rounded-xl" @click="go_buy(id, '/buy', '支付')">立即购买</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import router from "../../router/index.js";
import { onMounted, reactive, ref } from "vue";
import axios from "axios";
import { useMessage, useDialog } from "naive-ui";
const message = useMessage()
const dialog = useDialog()

//查看router的参数 发送
let id = ref()

let shop = reactive({
  name: "",
  price: "",
  address: "",
  img: [],
  author: "",
  author_img: "",
  author_title: "这是用户的简介....",
  shop_title: "",
  id,
})
onMounted(() => {
  id.value = router.currentRoute.value.params.id
  axios.post('/getGoodsById', { goods_id: id.value }).then(res => {
    console.log(res.data)
    if (res.data.code == 1) {
      shop.name = res.data.data[0].name
      shop.price = res.data.data[0].price
      shop.shop_title = res.data.data[0].introduce
      shop.img = res.data.data[0].img
      shop.address = res.data.data[0].address
      shop.author = res.data.data[0].username
      shop.author_img = res.data.data[0].user_img
    } else {
      return
    }
  })
})

//切换网页时，重新获取数据
router.afterEach(() => {
  id.value = router.currentRoute.value.params.id
  axios.post('/getGoodsById', { goods_id: id.value }).then(res => {
    if (res.data.code == 1) {
      shop.name = res.data.data[0].name
      shop.price = res.data.data[0].price
      shop.shop_title = res.data.data[0].introduce
      shop.img = res.data.data[0].img
      shop.address = res.data.data[0].address
      shop.author = res.data.data[0].username
      shop.author_img = res.data.data[0].user_img
    } else {
      return
    }
  })

})

//加入购物车

function joinCart() {
  //  检查本地是否有购物车
  let cart = localStorage.getItem("cart")
  if (cart) {
    // 有购物车
    cart = JSON.parse(cart)
    // 检查购物车中是否有该商品
    let index = cart.findIndex(item => item.id == id.value)
    if (index != -1) {
      // 有该商品
      cart[index].count++
    } else {
      // 没有该商品
      cart.push({
        id: id.value,
        count: 1
      })
    }
    localStorage.setItem("cart", JSON.stringify(cart))
    message.success('添加成功')

  } else {
    // 没有购物车
    localStorage.setItem("cart", JSON.stringify([{
      id: id.value,
      count: 1
    }]))
    message.success('添加成功')

  }
}


function go_buy(id, path, name) {
  jump(path, name, id)
}


function jump(path, name, id) {
  dialog.warning({
    title: '跳转',
    content: '跳转到' + name,
    positiveText: '确定',
    negativeText: '取消',
    onPositiveClick: () => {
      message.success('确定')
      let nextMsg = [{ id: id, count: 1 }]
      router.push(`/buy/` + JSON.stringify(nextMsg))
    },
    onNegativeClick: () => {
      message.error('取消')
    }
  })
}


</script>

<style scoped>
.carousel-img {
  width: 100%;
  height: 300px;
  object-fit: cover;
}
</style>
