<template>
 <div class="p-6 pingfang">
   <n-collapse>
     <n-collapse-item title="注册/登录" name="1">
      <div>登录/注册是在我们tab栏的左边的内容，有注册和登录， 点击输入框 输入账号密码就可以登录了,没有账号点击注册注册账号密码</div>
     </n-collapse-item>
     <n-collapse-item title="购物车" name="2">
       <div>购物车是装在你喜欢的商品，防止你忘掉了，这个功能实在登录状态使用</div>
     </n-collapse-item>
     <n-collapse-item title="发布" name="3">
       <div>发布是首页的意思，是交易市场</div>
     </n-collapse-item>

     <n-collapse-item title="商品发布" name="4">
       <div>商品的发布，需要登录</div>
     </n-collapse-item>

     <n-collapse-item title="订单" name="5">
       <div>订单的管理 当有人买了你的商品都在这里处理</div>
     </n-collapse-item>

     <n-collapse-item title="地址" name="6">
       <div>地址的管理</div>
     </n-collapse-item>


     <n-collapse-item title="右侧用户栏" name="7">
       <div>用户的商品都在这里，查看自己发布的商品</div>
     </n-collapse-item>


   </n-collapse>
 </div>
</template>

<script>
export default {
  name: "index"
}
</script>

<style scoped>

</style>
