<template>
  <div class="w-full p-2 ">

    <div class="flex justify-between">
      <n-button class="pingfang_jian mb-7 rounded-xl " @click="$router.back()">Back</n-button>
      <div class="flex ">
        <n-button class="mr-3 rounded-xl" @click="add_address = !add_address">新增地址</n-button>
        <!--          <n-button class="rounded-xl" >删除地址</n-button>-->
      </div>
    </div>

    <div class="w-full pingfang_jian mb-4 border p-2 " v-for="(item, index) in address">
      <div class="text-purple-500 font-bold">姓名:{{ item.name }}</div>
      <div class="text-xs mt-2  text-gray-500 mb-2">手机号:{{ item.phone }}</div>
      <div class="text-xs text-gray-400 ">{{ item.address }}</div>
      <n-radio class="text-xs mt-3" label="删除" @click="delAddress(item, index)" :checked="item.is_del"></n-radio>
      <n-radio class="text-xs mt-3" label="默认地址" @click="defaultAddress(item)" :checked="item.is_default"></n-radio>
    </div>
  </div>

  <n-modal v-model:show="add_address">
    <n-card
      style="width: 700px;background-image: url('/bg_deatied.png');background-size: contain; background-repeat: no-repeat"
      title="新增地址" :bordered="true" size="huge" role="dialog" aria-modal="true">

      <n-form ref="addressRef" :model="address_user" :rules="rules" label-placement="left">
        <n-form-item path="name">
          <n-input v-model:value="address_user.name" placeholder="请输入姓名" class="w-1/2">
            <template #prefix>
              <svg t="1672411898295" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                p-id="12594" width="24" height="24">
                <path
                  d="M512 554.666667a234.666667 234.666667 0 1 1 0-469.333334 234.666667 234.666667 0 0 1 0 469.333334z m0-42.666667a192 192 0 1 0 0-384 192 192 0 0 0 0 384z"
                  fill="#4E4E4E" p-id="12595"></path>
                <path
                  d="M512 554.666667h-85.333333c-117.802667 0-213.333333 138.197333-213.333334 256v42.666666h298.666667v42.666667H170.666667v-85.333333c0-141.397333 114.602667-298.666667 256-298.666667h85.333333v42.666667z"
                  fill="#4E4E4E" p-id="12596"></path>
                <path
                  d="M597.333333 640h256v42.666667h-256zM597.333333 682.666667h42.666667v42.666666h-42.666667zM810.666667 682.666667h42.666666v42.666666h-42.666666zM597.333333 725.333333h256v42.666667h-256zM512 853.333333h384v42.666667h-384z"
                  fill="#4E4E4E" p-id="12597"></path>
              </svg>
            </template>
          </n-input>
        </n-form-item>
        <n-form-item path="phone">
          <n-input placeholder="请输入手机号" v-model:value="address_user.phone">
            <template #prefix>
              <svg t="1672411945378" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                p-id="14586" width="24" height="24">
                <path
                  d="M341.333333 896H256V128h512v768H341.333333z m0-85.333333h341.333334V213.333333H341.333333v597.333334z m85.333334-42.666667v-85.333333h170.666666v85.333333h-170.666666z"
                  fill="#444444" p-id="14587"></path>
              </svg>
            </template>
          </n-input>
        </n-form-item>
        <n-form-item path="address">
          <n-input placeholder="请输入地址" v-model:value="address_user.address" type="textarea" class="">
            <template #prefix>
              <svg t="1672412038743" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                p-id="15654" width="24" height="24">
                <path
                  d="M511.744 68.266667c-173.5168 0-314.026667 136.311467-314.7776 305.937066 0 60.910933 18.1248 118.903467 51.7632 168.465067l3.293867 4.693333 1.911466 3.1744 1.570134 2.389334c1.058133 1.553067 2.184533 3.037867 3.447466 4.5056l0.785067 0.853333 200.174933 232.823467a68.266667 68.266667 0 0 0 103.645867-0.170667L762.641067 558.08l-1.314134 1.450667a50.346667 50.346667 0 0 0 5.341867-6.621867l1.536-2.3552c0.631467-0.989867 1.860267-3.072 1.826133-3.003733 35.293867-49.322667 55.0912-109.431467 55.825067-172.782934C825.856 204.9536 684.970667 68.266667 511.744 68.266667z m0 68.266666c135.970133 0 245.845333 106.5984 245.845333 237.824a235.400533 235.400533 0 0 1-43.9808 134.775467l-2.952533 4.676267-198.997333 232.789333-200.192-232.823467-1.928534-3.191466-0.989866-1.450667a230.229333 230.229333 0 0 1-43.3152-134.775467C265.8304 242.858667 375.415467 136.533333 511.744 136.533333z"
                  fill="#444444" p-id="15655"></path>
                <path
                  d="M783.803733 714.734933a34.133333 34.133333 0 0 1 45.243734 10.018134l1.4336 2.2528 73.386666 125.730133a68.266667 68.266667 0 0 1-54.784 102.5536l-4.5568 0.119467-666.043733-3.6352a68.266667 68.266667 0 0 1-60.654933-98.850134l2.133333-3.9424 69.9392-119.261866a34.133333 34.133333 0 0 1 60.16 32.170666l-1.262933 2.3552-69.9392 119.261867 666.043733 3.6352-73.386667-125.730133a34.133333 34.133333 0 0 1 12.288-46.677334z"
                  fill="#444444" p-id="15656"></path>
                <path
                  d="M512 243.950933a136.533333 136.533333 0 1 0 0.034133 273.1008A136.533333 136.533333 0 0 0 512 243.950933z m0 68.266667a68.266667 68.266667 0 1 1-0.034133 136.567467A68.266667 68.266667 0 0 1 512 312.2176z"
                  fill="#00B386" p-id="15657"></path>
              </svg>
            </template>
          </n-input>
        </n-form-item>
      </n-form>
      <template #footer>
        <div class="flex justify-between">
          <div class=""> </div>
          <div @click="jump"
            class="rounded-xl cursor-pointer transition  p-2 w-14 text-white pingfang_jian shadow-2xl active:scale-50 bg-purple-500 text-center">
            提交</div>
        </div>
      </template>
    </n-card>
  </n-modal>
</template>

<script setup>
import { onMounted, reactive, ref } from "vue";
import axios from "axios";
// import router from "../../router/index.js";
import { useMessage, useDialog } from "naive-ui";
import { useRouter } from "vue-router";
const router = useRouter()
const message = useMessage()
const dialog = useDialog()
let add_address = ref(false)
let address = reactive([])
let address_user = reactive({
  name: '',
  phone: '',
  address: ''
})

const addressRef = ref()
const rules = {
  name: {
    required: true,
    message: "请输入姓名",
    trigger: "blur"
  },
  phone: {
    required: true,
    trigger: ["input", "blur"],
    validator(rule, value) {
      if (!value) {
        return new Error('请输入手机号')
      } else if (!/^[1][3,4,5,6,7,8,9][0-9]{9}$/.test(value)) {
        return new Error('请输入正确的手机号')
      }
    }
  },
  address: {
    required: true,
    message: "请输入收货地址",
    trigger: "blur"
  }
}

onMounted(() => {
  if (localStorage.getItem("token")) {
  } else {
    message.warning('请先登录')
    router.push('/login')
  }


  axios.post('/getAddress', {
    token: localStorage.getItem('token')
  }).then(res => {
    address.push(...res.data.data)
    address.forEach(item => {
      item.is_del = false
    })
  })
})


//设置默认地址
function defaultAddress(items) {
  address.forEach(item => {
    if (items == item) {  //如果是当前点击的地址
      item.is_default = true
      axios.post('/setDefaultAddress', { _id: item._id })
    } else {  //如果不是当前点击的地址
      item.is_default = false
    }
  })
}

//删除地址
function delAddress(items, index) {
  address.forEach(item => {
    if (items == item) {  //如果是当前点击的地址
      item.is_del = true
      axios.post('/delAddress', { id: item._id }).then(res => {
        if (res.data.code == 1) {
          //只删除当前点击的地址
          address.splice(index, 1)
        }
      })
    } else {  //如果不是当前点击的地址
      item.is_del = false
    }
  })
}

function updown() {
  addressRef.value?.validate(errors => {
    if (!errors) {
      axios.post('/addAddress', {
        token: localStorage.getItem('token'),
        name: address_user.name,
        phone: address_user.phone,
        address: address_user.address,
        is_default: false
      }).then(res => {
        if (res.data.code == 1) {
          message.success('添加成功')
          address.push(res.data.data)
          add_address.value = false
        }
      })
    } else {
      console.log(errors)
    }
  })
}

function jump(path, name) {
  dialog.warning({
    title: '确定要添加地址吗？',
    positiveText: '确定',
    negativeText: '取消',
    onPositiveClick: () => {
      updown()
    },
    onNegativeClick: () => {
      message.success('已取消')
    }
  })
}



</script>

<style scoped></style>
