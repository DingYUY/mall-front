import {createRouter,createWebHashHistory} from "vue-router";



const  routes=[
    {
        path:"/",
        name:"Home",
        component:()=>import("../page/Home/index.vue"),
        children:[
            {
                path:"/",
                component:()=>import("../page/send/index.vue")
            },
            {
                path:"/login",
                component:()=>import("../page/login/index.vue")
            },
            {
                path:"/register",
                component:()=>import("../page/register/index.vue")
            },
            {
                path:"/shop_cart",
                component:()=>import("../page/ShoppingCart/index.vue")
            },
            {
                path:"/shop_detailed/:id",
                component:()=>import("../page/shop_detailed/index.vue")
            },
            {
                path:"/address",
                component:()=>import("../page/address/index.vue")
            },
            {
                path:"/buy/:id",
                component:()=>import("../page/buy/index.vue"),
            //    可以使用对象
                props:true

            },
            {
                path:"/success",
                component:()=>import("../page/success/index.vue")

            },
            {
                path:"/order",
                component:()=>import("../page/order/index.vue")
            },
            {
                path:"/good_send",
                component:()=>import("../page/good_send/index.vue")
            },
            {
                path:"/jiaocheng",
                component:()=>import("../page/jiaocheng/index.vue")
            }
            ]
    },
    {
        path: "/index",
        name: "index",
        component: () => import("../page/index/index.vue")
    }
]


const router=createRouter({
    history:createWebHashHistory(),
    routes
})

export default router
