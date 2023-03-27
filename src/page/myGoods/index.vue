<template>
  <div class="my-goods">
    <div class="title">
      <div>我的发布</div>
      <n-button class="back-button" @click="$router.back()">返回</n-button>
    </div>
    <div class="overflow-hidden overflow-y-scroll">
      <n-data-table :columns="columns" :data="goodsList" :pagination="pagination" :bordered="false">
      </n-data-table>
    </div>
  </div>
</template>

<script setup>
import { useMessage, NButton, useDialog } from "naive-ui";
import { h, reactive } from 'vue';
import axios from 'axios';
import { onMounted } from 'vue';
import { useRouter } from "vue-router";
const router = useRouter()
const message = useMessage()
const dialog = useDialog()

// 获取商品列表
let goodsList = ref()
const allGoods = () => {
  axios.post('/getMyGoods', {
    user_id: localStorage.getItem('id')
  }).then(res => {
    // console.log(res)
    if (res.data) {
      goodsList.value = res.data.data
      console.log(goodsList.value)
    }
  })
}

const pagination = reactive({
  page: 1,
  pageSize: 5,
  onChange: (page) => {
    pagination.page = page
    allGoods()
  }
})

const createColumns = ({
  ban
}) => {
  return [
    {
      title: "商品图片",
      key: "img",
      render(row) {
        return h(
          'div',
          {
            class: ['flex', 'justify-center', 'items-center']
          },
          [
            h(
              'img',
              {
                src: row.img[0] ? row.img[0] : '',
                class: ['w-20', 'h-20', 'object-cover', 'ml-4'],
              }
            )
          ]
        )
      }
    },
    {
      title: "商品名",
      key: "name"
    },
    {
      title: "简介",
      key: "introduce"
    },
    {
      title: "价格",
      key: "price"
    },
    {
      title: "商家名",
      key: "username",
    },
    {
      title: "发货地址",
      key: "address"
    },
    {
      title: "审核状态",
      key: "status",
      render(row) {
        return h(
          'span',
          {
            innerText: row.reviewStatus === 0 ? '管理员审核中' : (row.reviewStatus === 1 ? '发布通过' : '发布被拒绝')
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
            h(
              NButton,
              {

                strong: true,
                tertiary: true,
                // type: "error",
                style: { color: 'white', 'background-color': '#FFF0F0' },
                size: "small",
                onClick: () => edit(row)
              },
              { default: () => "编辑" }
            ),
            h(
              NButton,
              {

                strong: true,
                tertiary: true,
                // type: "error",
                style: { color: 'white', 'background-color': '#FFF0F0', 'margin-left': '5px' },
                size: "small",
                onClick: () => deleteGoods(row)
              },
              { default: () => "下架" }
            )
          ]
        )
      }
    }
  ];
};

const edit = (row) => {
  router.push({
    name: "GoodEdit",
    query: row
  })
}

const deleteGoods = (row) => {
  axios.post('/delGoods', {
    id: row._id
  }).then(res => {
    if (res.data.code === 1) {
      message.success('下架成功')
      console.log(res.data)
      allGoods()
    }
  })
}

const columns = ref()
columns.value = createColumns({
  // ban(row) {
  //   console.log('row', row)
  //   axios.post('/ban', {
  //     id: row._id,
  //     name: row.name,
  //     isBan: true
  //   }).then(res => {
  //     dialog.warning({
  //       title: '确定要封禁该用户吗？',
  //       positiveText: '确定',
  //       negativeText: '取消',
  //       onPositiveClick: () => {
  //         console.log(res)
  //         message.success('成功')
  //         allUser()
  //       },
  //       onNegativeClick: () => {
  //         message.error('已取消')
  //       }
  //     })
  //   })
  // }
})

onMounted(() => {
  allGoods()
})
</script>

<style lang="scss" scoped>
.my-goods {
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