import{u as s,o,a as n,c,e}from"./index-953b23c6.js";const a="/success.png",i={class:"flex flex-col items-center",style:{"justify-content":"center"}},r=e("img",{src:a,class:"w-24",alt:""},null,-1),_=e("div",{class:"pingfang_jian mt-5"},"您当前提交的订单已成功,订单已生成",-1),l=e("div",{class:"text-xs bg-green-500 mt-4 rounded-xl cursor-pointer transition active:scale-125 p-2 pingfang_jian text-white"},"查看订单",-1),u=[r,_,l],f={__name:"index",setup(d){const t=s();return o(()=>{setTimeout(()=>{t.push("/order")},2e3)}),(p,m)=>(n(),c("div",i,u))}};export{f as default};
