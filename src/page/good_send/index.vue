<template>
  <div class="w-full bg-cover h-full p-2" style="background-image: url('/bg_deatied.png')">
    <n-button @click="$router.back()">Back</n-button>
    <n-upload multiple directory-dnd action="http://127.0.0.1:3175/api/upload" :default-file-list="fileList"
      @finish="handleSuccess" class="mt-3" :max="5">
      <n-upload-dragger>
        <div style="margin-bottom: 12px" class="mx-auto flex justify-center items-center">
          <svg t="1673745043444" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
            p-id="3584" width="48" height="48">
            <path
              d="M507.136 514.944c3.072-4.362667 7.210667-7.925333 12.032-10.314667a37.365333 37.365333 0 0 1 46.634667 6.144l97.418666 102.794667a32 32 0 0 1-46.442666 44.021333L565.333333 603.317333V853.333333a32 32 0 1 1-64 0V608.757333l-52.618666 50.016a32 32 0 0 1-44.096-46.4l102.517333-97.429333zM512 138.666667c123.018667 0 228.213333 85.696 259.424 204.469333C864.298667 344.736 938.666667 422.752 938.666667 518.218667 938.666667 614.688 862.752 693.333333 768.533333 693.333333a32 32 0 0 1 0-64C826.890667 629.333333 874.666667 579.84 874.666667 518.218667c0-61.610667-47.776-111.104-106.133334-111.104-5.856 0-11.626667 0.490667-17.301333 1.461333a32 32 0 0 1-37.024-26.666667C698.346667 279.04 612.714667 202.666667 512 202.666667c-73.834667 0-140.928 41.066667-177.376 106.613333a32 32 0 0 1-30.122667 16.373333c-3.168-0.213333-6.357333-0.32-9.568-0.32C214.784 325.333333 149.333333 393.141333 149.333333 477.333333S214.784 629.333333 294.933333 629.333333a32 32 0 1 1 0 64C178.912 693.333333 85.333333 596.373333 85.333333 477.333333c0-116.938667 90.293333-212.554667 203.456-215.904C338.090667 185.696 421.013333 138.666667 512 138.666667z"
              fill="#000000" p-id="3585"></path>
          </svg>
        </div>
        <n-text style="font-size: 16px">
          点击或者拖动文件到该区域来上传
        </n-text>
        <n-p depth="3" style="margin: 8px 0 0 0">
          请不要上传敏感数据，比如你的银行卡号和密码，信用卡号有效期和安全码
        </n-p>
      </n-upload-dragger>
    </n-upload>


    <div class="flex  items-center flex-col">
      <n-input-group class="flex items-center mt-24  justify-center">
        <div class="pingfang_jian mr-3">商品名字</div>
        <n-input placeholder="请输入商品名字" v-model:value="msg.shop_name" :style="{ width: '50%' }" />
      </n-input-group>
      <n-button-group style="width: 59%;" class="flex items-center mt-4">
        <div class="pingfang_jian mr-6" style="transform: translate(10px,0px);">商品价格</div>
        <!--     <n-button quaternary @click="add" type="success" round>+</n-button>-->
        <!--     <div class="p-2">{{msg.price}}</div>-->
        <!--     <n-button quaternary @click="sub" type="success" round>-</n-button>-->
        <n-input-number v-model:value="msg.price" clearable placeholder="请输入价格" />
      </n-button-group>

      <n-input-group class="flex items-center mt-4 justify-center">
        <div class="pingfang_jian mr-3">商品简介</div>
        <n-input placeholder="请输入商品简介" v-model:value="msg.introduce" :style="{ width: '50%' }" />
      </n-input-group>

      <n-input-group class="flex items-center mt-4 justify-center">
        <div class="pingfang_jian mr-3">发货地址&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
        <n-input placeholder="请输入发货地址" type="textarea" v-model:value="msg.address" :style="{ width: '50%' }" />
      </n-input-group>

      <div class="flex justify-end pr-32 w-95_">
        <n-button strong secondary class="mt-7 " @click="jump('/', '发布')" type="info">提交</n-button>
      </div>

    </div>
  </div>
</template>

<script setup>
import { onMounted, reactive } from "vue";
import { useMessage, useDialog } from "naive-ui";
import router from "../../router/index.js";
import axios from "axios";
const baseURL = "http://127.0.0.1:3175";
// const baseURL = "http://124.222.246.206:3175";
const message = useMessage()
const dialog = useDialog()

let msg = reactive({
  shop_name: '',
  price: 1,
  introduce: '',
  address: '',
  username: localStorage.getItem('name'),
  user_id: localStorage.getItem('id'),

})
let fileList = reactive([])
onMounted(() => {
  //判断登录
  if (localStorage.getItem("token")) {
    return
  } else {
    message.warning('请先登录')
    router.push('/login')
  }
});


function add() {
  msg.price++
}

function sub() {
  if (msg.price > 1) {
    msg.price--
  }
}


function handleSuccess(file) {
  let year = new Date().getFullYear()
  let month = new Date().getMonth() + 1
  //获取图片的size
  let size = file.file.file.size
  let day = new Date().getDate()
  let hour = new Date().getHours()


  //拿到服务端返回的数据 nav
  fileList.push(baseURL + `/public/` + year + month + day + size + hour + '.jpg')
}

function createThumbnailUrl(file) {
  return new Promise((resolve) => {
    const reader = new FileReader()
    reader.onload = (e) => {
      resolve(e.target.result)
    }
    reader.readAsDataURL(file)
  })
}




function updown() {
  console.log(fileList)
  axios.post('/addGoods', {
    name: msg.shop_name,
    price: msg.price,
    introduce: msg.introduce,
    img: fileList,
    user_id: localStorage.getItem('id'),
    username: localStorage.getItem('name'),
    address: msg.address
  }).then(res => {
    if (res.data.code == 1) {
      message.success('发布成功')
      router.push('/')
    }
  })
}

function jump(path, name) {
  dialog.warning({
    title: '确定要' + name + '吗',
    positiveText: '确定',
    negativeText: '取消',
    onPositiveClick: () => {
      message.success('发布成功')
      updown()
    },
    onNegativeClick: () => {
      message.info('已取消')
    }
  })
}


</script>

<style scoped>

</style>
