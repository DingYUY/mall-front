import{_ as j,u as N,r as m,f as h,o as S,g as u,a as p,c as g,e as t,h as C,w as B,b as c,b6 as f,t as n,F as I,i as O,ae as R}from"./index-953b23c6.js";import{u as D}from"./use-message-37081a3e.js";import{u as E}from"./composables-3e6ed2ea.js";const J={class:"w-full p-2 bg-white overflow-hidden overflow-y-scroll"},T={class:"flex"},V={class:"pingfang_jian pb-2 border-b mt-7"},F={class:"text-purple-500 font-bold ml-12"},M={class:"text-xs text-gray-500 ml-12"},$={class:"ml-12"},A=["src"],G={class:"ml-3 flex w-full p-2 flex-col pingfang_jian justify-between"},L={class:"text-xl"},P={class:"text-right text-xl font-bold flex items-center justify-end mr-2cb dcadrfv"},q={class:"pingfang_jian text-xs p-2 text-gray-500"},z={class:"flex items-end pingfang_jian justify-between mt-12 mr-3"},H={__name:"index",setup(K){const d=N();let a=m();const v=D(),x=E();let l=h([]),i=m(),o=h({name:"",phone:"",address:"",is_default:!0,is_del:!0});S(()=>{if(i.value=_(),a.value=JSON.parse(d.currentRoute.value.params.id)||JSON.parse(d.currentRoute.value.params.id)[0].id,u.post("/getDefaultAddress",{token:localStorage.getItem("token")}).then(e=>{console.log(e),e.data.code==1?(o.name=e.data.data[0].name,o.phone=e.data.data[0].phone,o.address=e.data.data[0].address):(v.warning("您还没有设置默认地址，请去设置"),d.push("/address"))}),typeof a=="object")console.log("多个商品"),console.log(typeof a.value),a.value=JSON.parse(d.currentRoute.value.params.id),u.post("/getShopCart",{goods:a.value}).then(e=>{l.push(...e.data.data),i.value=_()});else{console.log("单个商品"),console.log(typeof a),u.post("/getGoodsById",{goods_id:a.value}).then(e=>{l.push(...e.data.data),l[0].count=1,i.value=_()});return}});function _(){let e=0;return l.forEach(s=>{e+=s.price*s.count}),console.log(e),e}function b(){l.forEach(e=>{u.post("/addOrder",{custorm_name:o.name,amount:e.price*e.count,status:0,user_id:localStorage.getItem("id"),shop_name:e.username,shop_id:e.user_id,goods_name:e.name,goods_title:e.introduce,goods_id:e.good_id,custorm_address:o.address+"_"+o.phone,img:e.img,buy_count:e.count}).then(s=>{})}),d.push("/success")}function w(e,s){x.warning({title:"你确定要"+s,positiveText:"确定",negativeText:"取消",onPositiveClick:()=>{b()},onNegativeClick:()=>{v.success("选择成功")}})}return(e,s)=>{const y=R;return p(),g("div",J,[t("div",T,[C(y,{onClick:s[0]||(s[0]=r=>c(d).back())},{default:B(()=>[f("Back")]),_:1})]),t("div",V,[f(" 地址: "),t("div",F,"姓名:"+n(c(o).name),1),t("div",M,"手机号:"+n(c(o).phone),1),t("div",$,"地址:"+n(c(o).address),1)]),(p(!0),g(I,null,O(c(l),(r,k)=>(p(),g("div",{class:"mt-7 flex w-full border rounded-xl p-2",key:k},[t("img",{src:r.img[0],class:"w-44 h-44 object-cover rounded-xl",alt:""},null,8,A),t("div",G,[t("div",L,n(r.name),1),t("div",P,[f(n(r.price)+"*",1),t("span",q,n(r.count),1)])])]))),128)),t("div",z,[t("div",null,"总价:"+n(c(i)),1),t("div",{onClick:s[1]||(s[1]=r=>w("/success","支付")),class:"p-2 active:scale-50 transition cursor-pointer w-24 text-center rounded-xl bg-purple-500 text-white"},"提交订单 ")])])}}},X=j(H,[["__scopeId","data-v-e1d6403e"]]);export{X as default};