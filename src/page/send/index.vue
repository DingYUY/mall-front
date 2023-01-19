<template>
<div class="w-full h-full bg-white shadow-2xl  overflow-y-scroll p-2" id="ershou_body" @scroll="scrollBottm">
     <div class="flex  justify-between">  <!--头部-->
           <div class="">
             <div class="pingfang_jian text-xl  font-bold pt-12">Welcome to the second-hand market</div>
             <div class="pingfang text-xs text-gray-500 pl-2 " style="font-weight: 900">欢迎来到二手交易市场</div>
           </div>

<!--       <input type="text" class="w-72 pl-4 p-2 mt-12 bg-gray-200 rounded-xl h-8 pingfang_jian " placeholder="请输入你想搜索的内容">-->

     </div>  <!--头部结束-->


  <div class="mt-12 flex  ">
    <div class="bg-gradient-to-r flex flex-col
      justify-end transition ml-5
     p-2 from-purple-500 via-pink-500 to-red-500 w-72 h-44 rounded-xl pingfang_jian">
      <div class="text-white font-bold text-xs ">Welcome to the second-hand market</div>
      <div class="text-white font-bold ">欢迎使用二手交易平台</div>

      <div class="text-white
      transition-all cursor-pointer active:bg-blue-500 focus:text-white
      border w-24 text-xs text-center p-1 mb-2 hover:rounded-xl mt-2" @click="$router.push('/jiaocheng')">开始使用</div>
    </div>


    <div class="w-1/2 ml-24 flex
      flex-col justify-end pingfang_jian p-2
     h-44 rounded-xl  bg-gradient-to-r from-purple-500 accent-pink-200 to-blue-300 ">
      <div class="text-white font-bold">还有这么多人用!!!二手交易平台</div>
      <div class="text-white text-xs pingfang mt-2">There are so many people around me who use the second-hand trading platform</div>
          <div class="flex h-12 mt-4 justify-end">
            <img :src="item.src"  class="w-8 cursor-pointer transition-all hover:mt-3 h-8 rounded-full" :style="{
              transform:`translate(-${index*15}px,0px)`}" alt="" v-for="(item,index) in head_arr">
          </div>
    </div>

  </div>


  <div class="text-xl pingfang_jian mb-3 text-purple-500 font-bold mt-12 ml-5 border-b-2 w-10 pb-2 border-purple-400">广场</div>
  <guangchang :data_obj="obj"></guangchang>





</div>
</template>

<script setup>

import {onMounted, reactive, ref} from "vue";
import guangchang from "../../components/guangchang/index.vue";
import axios from "axios";
let page = ref(1);
let limit = ref(15);
let head_arr=reactive([
  {
    src:"https://img2.baidu.com/it/u=2859542338,3761174075&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1672419600&t=c2e485288ddb812580c869ea5fe8e9fd"
  },
  {
    src:"https://img0.baidu.com/it/u=3905825772,3024012927&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1672419600&t=0f5b8ed93db4461ea7cd07b206f83732"
  },
  {
    src:"https://img0.baidu.com/it/u=4065107391,2142799144&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1672419600&t=62c6e3ddadd2c132c88466b0a4e6f955"
  },
  {
    src:'https://img0.baidu.com/it/u=189649806,2789154204&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1672419600&t=fcaf1b47fd66d6f20576572cd84f74c8'
  },
  {
    src:"https://img0.baidu.com/it/u=4197611983,2572788594&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"
  }
])


let obj=reactive([])

//选中
onMounted(()=>{

  axios.post('/getOrderPage',{
   page:page.value,
   limit:limit.value
 }).then(res=>{
    page.value++;
   obj.push(...res.data.data)
 })


})

//触底加载
let scrollBottm=()=>{
  let ershou_body=document.getElementById("ershou_body")
  if(ershou_body.scrollTop+ershou_body.clientHeight>=ershou_body.scrollHeight){
          axios.post('/getOrderPage',{
            page:page.value,
            limit:limit.value
          }).then(res=>{
                if(res.data.code==1){
                  page.value++;
                  obj.push(...res.data.data)
                }
              })
  }
}


</script>

<style scoped>
/*清除input 点击*/
input:focus{
  outline: none;
}


/*隐藏滚动条*/
::-webkit-scrollbar {
  display: none;
}
</style>
