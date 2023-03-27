/*
 * @Author: 丁雨阳 dzyyyt@163.com
 * @Date: 2023-01-18 13:21:27
 * @LastEditors: 丁雨阳 dzyyyt@163.com
 * @LastEditTime: 2023-02-28 10:06:46
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
 */
import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../page/Home/index.vue"),
    children: [
      {
        path: "/",
        component: () => import("../page/send/index.vue"),
      },
      {
        path: "/login",
        component: () => import("../page/login/index.vue"),
      },
      {
        path: "/register",
        component: () => import("../page/register/index.vue"),
      },
      {
        path: "/shop_cart",
        component: () => import("../page/ShoppingCart/index.vue"),
      },
      {
        path: "/shop_detailed/:id",
        component: () => import("../page/shop_detailed/index.vue"),
      },
      {
        path: "/address",
        component: () => import("../page/address/index.vue"),
      },
      {
        path: "/buy/:id",
        component: () => import("../page/buy/index.vue"),
        //    可以使用对象
        props: true,
      },
      {
        path: "/success",
        component: () => import("../page/success/index.vue"),
      },
      {
        path: "/order",
        component: () => import("../page/order/index.vue"),
      },
      {
        path: "/good_send",
        component: () => import("../page/good_send/index.vue"),
      },
      {
        path: "/jiaocheng",
        component: () => import("../page/jiaocheng/index.vue"),
      },
      {
        path: "/chat",
        component: () => import("../page/chat/index.vue"),
        name: 'Chat'
      },
      {
        path: "/manage",
        component: () => import("../page/manage/index.vue"),
        name: 'Manage'
      },
      {
        path: "/goods_manage",
        component: () => import("../page/goods_manage/index.vue"),
        name: 'GoodsManage'
      },
      {
        path: "/myGoods",
        component: () => import("../page/myGoods/index.vue"),
        name: 'MyGoods'
      },
      {
        path: "/userSetting",
        component: () => import("../page/userSetting/index.vue"),
        name: 'UserSetting'
      },
      {
        path: "/good_edit",
        component: () => import("../page/good_edit/index.vue"),
        name: "GoodEdit"
      }
    ],
  },
//   {
//     path: "/index",
//     name: "index",
//     component: () => import("../page/index/index.vue"),
//   },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
