<!--
 * @Author: 丁雨阳 dzyyyt@163.com
 * @Date: 2023-02-22 17:06:58
 * @LastEditors: 丁雨阳 dzyyyt@163.com
 * @LastEditTime: 2023-02-23 09:53:29
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
-->
<template>
  <div class="manage">
    <div class="title">
      <div>用户管理</div>
      <n-button class="back-button" @click="$router.back()">返回</n-button>
    </div>
    <div class="overflow-hidden overflow-y-scroll">
      <n-data-table :columns="columns" :data="userList" :bordered="false">

      </n-data-table>
    </div>
  </div>
</template>

<script setup>
import { useMessage, NButton, useDialog } from "naive-ui";
import { h } from "vue";
import axios from 'axios';
import { onMounted } from 'vue';

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
      title: "操作",
      key: "_id",
      render(row) {
        return h(
          NButton,
          {
            strong: true,
            tertiary: true,
            // type: "error",
            style: { color: 'white', 'background-color': '#FFF0F0' },
            size: "small",
            onClick: () => ban(row)
          },
          { default: () => "封禁" }
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
            message.success('封禁成功')
            allUser()
          },
          onNegativeClick: () => {
            message.error('已取消')
        }
      })
    })
  }
})

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
