<template>
  <div class="user-setting">
    <div class="title">
      <div>用户设置</div>
      <n-button class="back-button" @click="$router.back()">返回</n-button>
    </div>
    <div class="pt-3">
      <n-form ref="userForm" :model="editUserInfo" :rules="rules">
        <n-form-item path="name" label="昵称">
          <n-input v-model:value="editUserInfo.name" placeholder="请输入昵称" round></n-input>
        </n-form-item>
        <n-form-item path="password" label="密码">
          <n-input v-model:value="editUserInfo.password" placeholder="请输入密码" type="password" round show-password-on="mousedown"></n-input>
        </n-form-item>
        <n-form-item path="studentId" label="学号">
          <n-input :value="editUserInfo.studentId" placeholder="无" disabled round></n-input>
        </n-form-item>
        <n-form-item path="studentName" label="姓名">
          <n-input :value="editUserInfo.studentName" placeholder="无" disabled round></n-input>
        </n-form-item>
        <n-form-item path="idCard" label="身份证号码">
          <n-input :value="editUserInfo.idCard" placeholder="无" disabled round></n-input>
        </n-form-item>
        <n-form-item path="isManager" label="权限范围">
          <n-input :value="editUserInfo.isManager ? '管理员': '普通员工'" placeholder="无" disabled round></n-input>
        </n-form-item>
      </n-form>
    </div>
    <div class="flex justify-center items-center">
      <n-button class="mt-4" size="large" @click="submitInfo">提交</n-button>
    </div>
 </div>
</template>

<script setup>
import { ref, onMounted, reactive } from 'vue';
import axios from 'axios';
import { useMessage } from 'naive-ui'
import { useRouter } from 'vue-router';

const message = useMessage()
const router = useRouter()

const userForm = ref(null)

const editUserInfo = reactive({
  name: '',
  password: '',
  studentId: '',
  studentName: '',
  idCard: '',
  isManager: ''
})

const userInfo = ref()

const getCurrentUser = () => {
  axios.post('/getCurrentUser', {
    _id: localStorage.getItem('id')
  }).then(res => {
    console.log(res.data.data[0])
    if (res.data.code === 1 && res.data.data && res.data.data[0]) {
      userInfo.value = res.data.data[0]
      console.log(userInfo.value)
      console.log(editUserInfo)
      editUserInfo.name = userInfo.value.name
      editUserInfo.password = userInfo.value.password
      editUserInfo.studentId = userInfo.value.studentId
      editUserInfo.studentName = userInfo.value.studentName
      editUserInfo.idCard = userInfo.value.idCard
      editUserInfo.isManager = userInfo.value.isManager
    }
  })
}

const userList = ref()
const userNameList = reactive([])
const allUser = () => {
  axios.post('/getAllUser').then(res => {
    if (res.data.code === 1) {
      console.log('allUser', res.data.data)
      userList.value = res.data.data
      userList.value.map(item => {
        userNameList.push(item.name)
      })
      console.log(userNameList)
    }
  })
}

const rules = {
  name: {
    required: true,
    validator(rule, value) {
      if (!value) {
        return new Error('请输入昵称')
      } else if (userNameList.includes(value)) {
        return new Error('该昵称已存在')
      }
    },
    trigger: ['input', 'blur']
  },
  password: {
    required: true,
    message: '请输入密码',
    trigger: ['input', 'blur']
  }
}

const submitInfo = () => {
  axios.post('/updateCurrentUser', {
    name: editUserInfo.name,
    password: editUserInfo.password
  }).then(res => {
    console.log(res)
    message.success('提交成功，请重新登陆')
    clearToken()
  }).catch(err => {
    message.error('提交失败')
  })
}

const clearToken = () => {
  localStorage.removeItem("token")
  localStorage.removeItem("name")
  localStorage.removeItem("id")
  localStorage.removeItem("head_img")
  localStorage.removeItem("cart")
  //刷新页面
  router.push('/login')
  location.reload()
}

onMounted(() => {
  getCurrentUser()
  allUser()
})
</script>

<style lang="scss" scoped>
.user-setting {
  padding: 15px;

  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 16px;
    border-bottom: 1px solid #f0f0f2;
    padding-bottom: 10px;

    .back-button {
      display: inline-block;
    }
  }
}

:deep .n-data-table-th {
  text-align: center;
}

:deep .n-data-table-td {
  text-align: center;
}

::-webkit-scrollbar {
  display: none;
}
</style>