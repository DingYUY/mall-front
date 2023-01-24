<template>
<div class="w-full p-2 bg-white overflow-hidden overflow-y-scroll">

  <div class="flex">
    <n-button @click="router.back()">Back</n-button>
  </div>

  <div class="pingfang_jian pb-2 border-b mt-7 ">
    地址:
    <div class="text-purple-500 font-bold ml-12">姓名:{{address.name}}</div>
    <div class="text-xs text-gray-500 ml-12">手机号:{{address.phone}}</div>
    <div class="ml-12">地址:{{address.address}}</div>
  </div>




  <div class="mt-7 flex w-full  border rounded-xl p-2" v-for="(item,index) in shop" :key="index">
    <img :src="item.img[0]"  class="w-44 h-44 object-cover rounded-xl" alt="">
    <div class="ml-3 flex w-full p-2 flex-col pingfang_jian justify-between ">
      <div class="text-xl">{{item.name}}</div>
      <div class="text-right text-xl font-bold flex  items-center justify-end mr-2cb  dcadrfv">{{item.price}}*<span class="pingfang_jian text-xs p-2 text-gray-500">{{item.count}}</span></div>
    </div>
  </div>


  <div class="flex items-end pingfang_jian justify-between mt-12 mr-3 ">
    <div>总价:{{ sum }}</div>
    <div
        @click="jump('/success','支付')"
        class="p-2 active:scale-50 transition cursor-pointer w-24 text-center rounded-xl bg-purple-500 text-white ">提交订单</div>

  </div>

</div>
</template>

<script setup>
import {onMounted, reactive, ref} from "vue";
import router from "../../router/index.js";
import { useMessage,useDialog  } from "naive-ui";
import axios from "axios";

let  id=ref()
const message=useMessage()
const dialog=useDialog()
let  shop=reactive([])
let sum=ref()
let address=reactive(
  {
    name:"张娜英",
    phone:"123456789",
    address:"北京市海淀区中关村大街",
    is_default:true,
    is_del:true
  }
)

onMounted(()=>{
  //查看id.value 数据类型 如果是object 说明是从购物车过来的
  sum.value=total()
  id.value=JSON.parse(router.currentRoute.value.params.id)||JSON.parse(router.currentRoute.value.params.id)[0].id
  axios.post('/getDefaultAddress',{token:localStorage.getItem('token')}).then(res=>{
    console.log(res)
    if(res.data.code==1){
      address.name=res.data.data[0].name
    address.phone=res.data.data[0].phone
    address.address=res.data.data[0].address
    }else{
      message.warning('您还没有设置默认地址，请去设置')
      router.push('/address')
    }
  })


  if (typeof id === "object"){
    console.log('多个商品')
    console.log(typeof(id.value))

  id.value=JSON.parse(router.currentRoute.value.params.id)
    axios.post('/getShopCart', {goods: id.value}).then(res => {
      shop.push(...res.data.data)
      sum.value=total()

    })
  }else {
    console.log('单个商品')

  console.log(typeof(id))

       axios.post('/getGoodsById',{
          goods_id:id.value
       }).then(res=>{
          shop.push(...res.data.data)
         shop[0].count=1
         sum.value=total()

       })
    return
  }

})


//计算总价
function total(){
 //计算所有商品的总价
  let total=0
  shop.forEach(item=>{
    total+=item.price*item.count
  })
  console.log(total)
  return total
}


function updown(){
  shop.forEach(item=>{
    axios.post('/addOrder',{
      custorm_name:address.name,    //客户名字
      amount:item.price*item.count, //订单 总金额
      status:0, //订单状态
      user_id:localStorage.getItem('id'), //用户id
      shop_name:item.username, //店铺名字
      shop_id:item.user_id, //店铺id
      goods_name:item.name, //商品名字
      goods_title:item.introduce,  //商品介绍
      goods_id:item.good_id, //商品id
      custorm_address:address.address+address.phone, //客户地址
      img:item.img, //商品图片
    }).then(res=>{
    })
  })
  //提交订单
  router.push('/success')
}

function jump(path,name) { 
  dialog.warning({
          title: '你确定要'+name,
          positiveText: '确定',
          negativeText: '取消',
          onPositiveClick: () => {
            updown()
                              },
          onNegativeClick: () => {
            message.success('选择成功')
          }
        })
 }



</script>

<style scoped>
-webkit-scrollbar {
  display: none;
}
</style>
