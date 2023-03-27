<!--
 * @Author: 丁雨阳 dzyyyt@163.com
 * @Date: 2023-02-22 17:06:58
 * @LastEditors: 丁雨阳 dzyyyt@163.com
 * @LastEditTime: 2023-03-09 13:32:12
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
-->
<template>
  <div class="manage">
    <div class="title">
      <n-button class="back-button" @click="$router.back()">返回</n-button>
      <div>用户管理</div>
      <n-button class="back-button" @click="toGoodsManage">商品管理</n-button>
    </div>
    <div class="overflow-hidden overflow-y-scroll">
      <n-data-table :columns="columns" :data="userList" :pagination="pagination" :bordered="false">
      </n-data-table>
    </div>
  </div>
</template>

<script setup>
import { useMessage, NButton, useDialog } from "naive-ui";
import { h, reactive } from 'vue';
import axios from 'axios';
import { onMounted } from 'vue';
// import router from "../../router";
import { useRouter } from "vue-router";
const router = useRouter()

const message = useMessage()
const dialog = useDialog()

// 获取用户列表
let userList = ref()
const allUser = () => {
  axios.post('/getAllUser').then(res => {
    // console.log(res)
    userList.value = res.data.data
    console.log(userList.value)
  })
}

const pagination = reactive({
  page: 1,
  pageSize: 10,
  onChange: (page) => {
    pagination.page = page
    allUser()
  }
})

const toGoodsManage = () => {
  router.push('/goods_manage')
}

const createColumns = ({
  ban
}) => {
  return [
    {
      title: "账户",
      key: "name"
    },
    {
      title: "是否管理员",
      key: "isManager",
      render(row) {
        return h(
          'span',
          {
            innerText: row.isManager ? '管理员' : '普通用户'
          }
        )
      }
    },
    {
      title: "状态",
      key: "isBan",
      render(row) {
        return h(
          'span',
          {
            innerText: row.isBan ? '封禁中' : '正常',
            style: row.isBan ? { color: 'red' } : {}
          }
        )
      }
    },
    {
      title: "学号",
      key: "studentId",
    },
    {
      title: "姓名",
      key: "studentName"
    },
    {
      title: "身份证号码",
      key: "idCard"
    },
    {
      title: "手机号码",
      key: "phone"
    },
    {
      title: "注册状态",
      key: "status",
      render(row) {
        return h(
          'span',
          {
            innerText: row.status === 0 ? '待审核' : (row.status === 1 ? '审核通过' : '审核拒绝' )
          }
        )
      }
    },
    {
      title: "操作",
      key: "_id",
      render(row) {
        return h(
          'div',
          null,
          [
            h(NButton,
              {
                strong: true,
                tertiary: true,
                // type: "error",
                style: { color: 'white', 'background-color': '#FFF0F0' },
                size: "small",
                onClick: () => ban(row)
              },
              { default: () => "封禁" }
            ),
            h(NButton,
              {
                strong: true,
                tertiary: true,
                // type: "error",
                style: { color: 'white', 'background-color': '#FFF0F0', 'margin-left': '5px' },
                size: "small",
                onClick: () => check(row)
              },
              { default: () => "审核" }
            ),
            h(NButton,
              {
                strong: true,
                tertiary: true,
                // type: "error",
                style: { color: 'white', 'background-color': '#FFF0F0', 'margin-left': '5px' },
                size: "small",
                onClick: () => refuse(row)
              },
              { default: () => "拒绝" }
            )
          ]
        );
      }
    }
  ];
};

const columns = ref()
columns.value = createColumns({
  ban(row) {
    console.log('row', row)
    axios.post('/ban', {
      id: row._id,
      name: row.name,
      isBan: true
    }).then(res => {
      dialog.warning({
        title: '确定要封禁该用户吗？',
        positiveText: '确定',
        negativeText: '取消',
        onPositiveClick: () => {
          console.log(res)
          message.success('成功')
          allUser()
        },
        onNegativeClick: () => {
          message.error('已取消')
        }
      })
    })
  }
})

const check = (row) => {
  console.log('row', row)
  axios.post('/checkUser', {
    id: row._id,
    status: 1
  }).then(res => {
    console.log(res)
    message.success('审核成功')
    allUser()
  })
}

const refuse = (row) => {
  console.log('row', row)
  axios.post('/checkUser', {
    id: row._id,
    status: 2
  }).then(res => {
    console.log(res)
    message.success('拒绝成功')
    allUser()
  })
}

onMounted(() => {
  allUser()
})
</script>

<style lang="scss" scoped>
.manage {
  padding: 10px;

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

.red {
  color: red;
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
