import{r as l}from"./index-888bc847.js";import{a as u}from"./axios-a900fd7e.js";import{_ as j}from"./_plugin-vue_export-helper-c27b6911.js";import{r as v,a as h,o as N,e as _,a3 as m,a6 as t,g as S,w as C,N as i,Q as g,a5 as n,F as B,a7 as I}from"./runtime-core.esm-bundler-36726079.js";import{u as O,a as D}from"./use-message-31edf5b3.js";import{_ as E}from"./Button-6285efa0.js";import"./context-84471831.js";import"./create-injection-key-b5917821.js";import"./light-f42f174c.js";import"./icon-switch.cssr-a87b313c.js";import"./runtime-dom.esm-bundler-af906a5a.js";import"./FadeInExpandTransition-c7e27747.js";const J={class:"w-full p-2 bg-white overflow-hidden overflow-y-scroll"},R={class:"flex"},T={class:"pingfang_jian pb-2 border-b mt-7"},V={class:"text-purple-500 font-bold ml-12"},F={class:"text-xs text-gray-500 ml-12"},M={class:"ml-12"},$=["src"],A={class:"ml-3 flex w-full p-2 flex-col pingfang_jian justify-between"},G={class:"text-xl"},L={class:"text-right text-xl font-bold flex items-center justify-end mr-2cb dcadrfv"},P={class:"pingfang_jian text-xs p-2 text-gray-500"},Q={class:"flex items-end pingfang_jian justify-between mt-12 mr-3"},q={__name:"index",setup(z){let a=v();const f=O(),x=D();let d=h([]),c=v(),o=h({name:"张娜英",phone:"123456789",address:"北京市海淀区中关村大街",is_default:!0,is_del:!0});N(()=>{if(c.value=p(),a.value=JSON.parse(l.currentRoute.value.params.id)||JSON.parse(l.currentRoute.value.params.id)[0].id,u.post("/getDefaultAddress",{token:localStorage.getItem("token")}).then(e=>{console.log(e),e.data.code==1?(o.name=e.data.data[0].name,o.phone=e.data.data[0].phone,o.address=e.data.data[0].address):(f.warning("您还没有设置默认地址，请去设置"),l.push("/address"))}),typeof a=="object")console.log("多个商品"),console.log(typeof a.value),a.value=JSON.parse(l.currentRoute.value.params.id),u.post("/getShopCart",{goods:a.value}).then(e=>{d.push(...e.data.data),c.value=p()});else{console.log("单个商品"),console.log(typeof a),u.post("/getGoodsById",{goods_id:a.value}).then(e=>{d.push(...e.data.data),d[0].count=1,c.value=p()});return}});function p(){let e=0;return d.forEach(s=>{e+=s.price*s.count}),console.log(e),e}function w(){d.forEach(e=>{u.post("/addOrder",{custorm_name:o.name,amount:e.price*e.count,status:0,user_id:localStorage.getItem("id"),shop_name:e.username,shop_id:e.user_id,goods_name:e.name,goods_title:e.introduce,goods_id:e.good_id,custorm_address:o.address+o.phone,img:e.img}).then(s=>{})}),l.push("/success")}function b(e,s){x.warning({title:"你确定要"+s,positiveText:"确定",negativeText:"取消",onPositiveClick:()=>{w()},onNegativeClick:()=>{f.success("选择成功")}})}return(e,s)=>{const y=E;return _(),m("div",J,[t("div",R,[S(y,{onClick:s[0]||(s[0]=r=>i(l).back())},{default:C(()=>[g("Back")]),_:1})]),t("div",T,[g(" 地址: "),t("div",V,"姓名:"+n(i(o).name),1),t("div",F,"手机号:"+n(i(o).phone),1),t("div",M,"地址:"+n(i(o).address),1)]),(_(!0),m(B,null,I(i(d),(r,k)=>(_(),m("div",{class:"mt-7 flex w-full border rounded-xl p-2",key:k},[t("img",{src:r.img[0],class:"w-44 h-44 object-cover rounded-xl",alt:""},null,8,$),t("div",A,[t("div",G,n(r.name),1),t("div",L,[g(n(r.price)+"*",1),t("span",P,n(r.count),1)])])]))),128)),t("div",Q,[t("div",null,"总价:"+n(i(c)),1),t("div",{onClick:s[1]||(s[1]=r=>b("/success","支付")),class:"p-2 active:scale-50 transition cursor-pointer w-24 text-center rounded-xl bg-purple-500 text-white"},"提交订单")])])}}},ne=j(q,[["__scopeId","data-v-9da24fd5"]]);export{ne as default};
