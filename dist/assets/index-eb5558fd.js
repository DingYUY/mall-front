import{r as j}from"./index-be59eddc.js";import{_ as x}from"./_plugin-vue_export-helper-c27b6911.js";import{e as d,a3 as l,F as b,a7 as v,ab as $,a8 as w,a6 as t,a5 as f,r as h,a as m,o as k,N as _,g as z,a9 as E,aa as I}from"./runtime-core.esm-bundler-7390d31c.js";import{u as P}from"./use-message-2eb0c123.js";import{u as S}from"./composables-3ea61539.js";import{b as g}from"./axios-bce995d2.js";import"./vue-router-cc2f438c.js";import"./create-injection-key-b5917821.js";import"./context-622e1fe5.js";const B={class:"w-90_ p-2 flex flex-wrap justify-start h-full"},G=["onClick"],J={class:"flex h-full flex-col justify-between"},C={class:"flex items-end text-white"},N=["src"],D={class:"flex justify-between text-white"},F={class:"pt-3"},H={class:"text-right text-2xl pingfang_jian pt-2"},M={__name:"index",props:{data_obj:{type:Array,default:[]}},setup(a){P(),S();function i(c,n,e){p("/shop_detailed","商品",c)}function p(c,n,e){j.push(`/shop_detailed/${e}`)}return(c,n)=>(d(),l("div",B,[(d(!0),l(b,null,v(a.data_obj,(e,s)=>(d(),l("div",{onClick:o=>i(e.good_id),class:$(["p-2 h-72 mr-8 mb-6 active:scale-50 transition cursor-pointer rounded-xl pingfang box_neiyin",{hidden:e.show==!1}]),style:w([{"background-size":"cover",width:"45%","background-position":"center","background-repeat":"no-repeat"},{backgroundImage:`url(${e.img[0]})`}])},[t("div",J,[t("div",C,[t("img",{class:"w-14 rounded-full h-14 object-cover rounded-xl",src:e.user_img},null,8,N)]),t("div",D,[t("div",F,f(e.name),1),t("div",H,"￥"+f(e.price),1)])])],14,G))),256))]))}},O=x(M,[["__scopeId","data-v-e6d86125"]]);const r=a=>(E("data-v-8d7d5ab6"),a=a(),I(),a),T=r(()=>t("div",{class:"flex justify-between"},[t("div",{class:""},[t("div",{class:"pingfang_jian text-xl font-bold pt-12"},"Welcome to the second-hand market"),t("div",{class:"pingfang text-xs text-gray-500 pl-2",style:{"font-weight":"900"}},"欢迎来到二手交易市场")])],-1)),V={class:"mt-12 flex"},W={class:"bg-gradient-to-r flex flex-col justify-end transition ml-5 p-2 from-purple-500 via-pink-500 to-red-500 w-72 h-44 rounded-xl pingfang_jian"},A=r(()=>t("div",{class:"text-white font-bold text-xs"},"Welcome to the second-hand market",-1)),L=r(()=>t("div",{class:"text-white font-bold"},"欢迎使用二手交易平台",-1)),q={class:"w-1/2 ml-24 flex flex-col justify-end pingfang_jian p-2 h-44 rounded-xl bg-gradient-to-r from-purple-500 accent-pink-200 to-blue-300"},K=r(()=>t("div",{class:"text-white font-bold"},"还有这么多人用!!!二手交易平台",-1)),Q=r(()=>t("div",{class:"text-white text-xs pingfang mt-2"},"There are so many people around me who use the second-hand trading platform",-1)),R={class:"flex h-12 mt-4 justify-end"},U=["src"],X=r(()=>t("div",{class:"text-xl pingfang_jian mb-3 text-purple-500 font-bold mt-12 ml-5 border-b-2 w-10 pb-2 border-purple-400"}," 广场",-1)),Y={__name:"index",setup(a){let i=h(1),p=h(15),c=m([{src:"https://img2.baidu.com/it/u=2859542338,3761174075&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1672419600&t=c2e485288ddb812580c869ea5fe8e9fd"},{src:"https://img0.baidu.com/it/u=3905825772,3024012927&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1672419600&t=0f5b8ed93db4461ea7cd07b206f83732"},{src:"https://img0.baidu.com/it/u=4065107391,2142799144&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1672419600&t=62c6e3ddadd2c132c88466b0a4e6f955"},{src:"https://img0.baidu.com/it/u=189649806,2789154204&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1672419600&t=fcaf1b47fd66d6f20576572cd84f74c8"},{src:"https://img0.baidu.com/it/u=4197611983,2572788594&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"}]),n=m([]);k(()=>{g.post("/getOrderPage",{page:i.value,limit:p.value}).then(s=>{i.value++,n.push(...s.data.data)})});let e=()=>{let s=document.getElementById("ershou_body");s.scrollTop+s.clientHeight>=s.scrollHeight&&g.post("/getOrderPage",{page:i.value,limit:p.value}).then(o=>{o.data.code==1&&(i.value++,n.push(...o.data.data))})};return(s,o)=>(d(),l("div",{class:"w-full h-full bg-white shadow-2xl overflow-y-scroll p-2",id:"ershou_body",onScroll:o[1]||(o[1]=(...u)=>_(e)&&_(e)(...u))},[T,t("div",V,[t("div",W,[A,L,t("div",{class:"text-white transition-all cursor-pointer active:bg-blue-500 focus:text-white border w-24 text-xs text-center p-1 mb-2 hover:rounded-xl mt-2",onClick:o[0]||(o[0]=u=>s.$router.push("/jiaocheng"))},"开始使用")]),t("div",q,[K,Q,t("div",R,[(d(!0),l(b,null,v(_(c),(u,y)=>(d(),l("img",{src:u.src,class:"w-8 cursor-pointer transition-all hover:mt-3 h-8 rounded-full",style:w({transform:`translate(-${y*15}px,0px)`}),alt:""},null,12,U))),256))])])]),X,z(O,{data_obj:_(n)},null,8,["data_obj"])],32))}},lt=x(Y,[["__scopeId","data-v-8d7d5ab6"]]);export{lt as default};
