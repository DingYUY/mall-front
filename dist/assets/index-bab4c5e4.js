import{_ as K,r as c,u as P,f as x,o as Q,a as r,c as S,h as a,w as t,F as W,i as X,b as u,g as y,ae as Y,bu as Z,b6 as d,e as n,t as _,m as g,d as v}from"./index-953b23c6.js";import{u as ee}from"./use-message-37081a3e.js";import{u as oe}from"./composables-3e6ed2ea.js";import{_ as te}from"./Rate-6afcaea6.js";import{a as se,_ as ae}from"./FormItem-2ba5ccbf.js";import{_ as le}from"./Input-e5c21a65.js";import"./use-merged-state-b9c9e241.js";import"./Eye-53aa542d.js";const re={class:"w-full p-2 h-full bg-cover bg-no-repeat overflow-hidden overflow-y-scroll",style:{"background-image":"url('/bg_deatied.png')"}},ne=["src"],de=["title"],ie={class:"pingfang_jian text-gray-500 text-xs w-20 break-all"},ce=["title"],ue={class:"pingfang_jian text-gray-500 text-xs w-20 break-all mr-3"},_e=["title"],pe={class:"pingfang_jian text-gray-500 text-xs w-44 overflow-ellipsis overflow-hidden whitespace-nowrap hover:whitespace-pre-wrap"},ge={class:"pingfang_jian text-gray-500 text-xs w-44 overflow-ellipsis overflow-hidden whitespace-nowrap hover:whitespace-pre-wrap"},ve={style:{width:"40%"}},fe={class:"pingfang_jian break-all"},me={__name:"index",setup(we){const I={width:"600px"};localStorage.getItem("phone");const j={content:"soft",footer:"soft"},w=c(!1),C=c(!1),f=ee();oe();const $=P(),z=c(),D=c(null),p=x({reviewScore:null,review:""});c();const F=s=>{p.reviewScore=s};let h=x({});const E=s=>{w.value=!0,h.value=s},J={reviewScore:{required:!0,message:"请选择评分",trigger:"blur"},review:{required:!0,message:"请输入评语",trigger:["input","blur"]}},L=s=>{console.log(s),y.post("/review",{observerId:localStorage.getItem("id"),shop_id:h.value.shop_id,comment:p.review,reviewScore:p.reviewScore,shop_name:h.value.shop_name,order_id:h.value.order_id,observerName:localStorage.getItem("name")}).then(o=>{console.log(o),f.success("提交成功"),w.value=!1,window.location.reload()}).catch(o=>{console.log(o),f.error("提交失败")})},k=x({}),O=c(),N=c(),T=s=>{C.value=!0,y.post("/getOrderComment",{order_id:s.order_id}).then(o=>{console.log("orderComment",o.data.data[0]),o.data&&o.data.data&&(k.value=o.data.data[0],O.value=Number(k.value.reviewScore),N.value=k.value.comment)})};let i=c();i.value=localStorage.getItem("id");let M=x([]);const A=()=>{y.post("/getOrder",{shop_id:localStorage.getItem("id")}).then(s=>{console.log(s),(s.data.code=1)&&M.push(...s.data.data)})};Q(()=>{A(),!localStorage.getItem("token")&&(f.warning("请先登录"),$.push("/login"))});function B(s,o){y.post("/editOrder",{_id:s,status:o}).then(l=>{console.log(l),l.data.code==1?f.success("操作成功"):f.error("操作失败"),window.location.reload()})}function R(s){localStorage.setItem("orderMessage",JSON.stringify(s)),$.push({path:"/chat"})}return(s,o)=>{const l=Y,V=te,b=se,G=le,U=ae,q=Z;return r(),S("div",re,[a(l,{onClick:o[0]||(o[0]=e=>s.$router.back())},{default:t(()=>[d("返回")]),_:1}),(r(!0),S(W,null,X(u(M),(e,H)=>(r(),S("div",{class:"flex items-center w-full m-2 pb-3 border-b",key:H},[n("img",{src:e.img[0],class:"w-20 h-20 object-cover ml-3",alt:""},null,8,ne),n("div",{title:e.goods_name,class:"pingfang_jian ml-3 w-40 overflow-hidden overflow-ellipsis whitespace-nowrap"},_(e.goods_name),9,de),n("div",ie,"总价:"+_(e.amount),1),n("div",{class:"pingfang_jian text-gray-500 text-xs w-40 break-all mr-6 overflow-hidden overflow-ellipsis whitespace-nowrap",title:e.order_id},"订单号:"+_(e.order_id),9,ce),n("div",ue,"数量:"+_(e.buy_count),1),n("div",{class:"pingfang_jian text-gray-500 text-xs w-44 overflow-ellipsis overflow-hidden whitespace-nowrap hover:whitespace-pre-wrap",title:e.custorm_address.split("_")[0]}," 收获地址:"+_(e.custorm_address.split("_")[0]),9,_e),n("div",pe," 买家电话:"+_(e.custorm_address.split("_")[1]),1),n("div",ge," 商家电话:"+_(e.shop_phone),1),n("div",ve,[e.user_id===u(i)?(r(),g(l,{key:0,class:"ml-2",onClick:m=>R(e)},{default:t(()=>[d("联系卖家")]),_:2},1032,["onClick"])):v("",!0),e.shop_id===u(i)?(r(),g(l,{key:1,class:"ml-2",onClick:m=>R(e)},{default:t(()=>[d("联系买家")]),_:2},1032,["onClick"])):v("",!0),e.status==0&&e.shop_id===u(i)?(r(),g(l,{key:2,class:"ml-2",onClick:m=>B(e._id,1)},{default:t(()=>[d("发货")]),_:2},1032,["onClick"])):v("",!0),e.status==1&&e.user_id===u(i)?(r(),g(l,{key:3,class:"ml-2",onClick:m=>B(e._id,2),disabled:u(i)!=e.user_id},{default:t(()=>[d("收货")]),_:2},1032,["onClick","disabled"])):v("",!0),e.status===2?(r(),g(l,{key:4,class:"ml-2"},{default:t(()=>[d("订单完成")]),_:1})):v("",!0),e.status===2&&e.user_id===u(i)&&e.isComment===!1?(r(),g(l,{key:5,class:"ml-2",onClick:m=>E(e)},{default:t(()=>[d("待评价")]),_:2},1032,["onClick"])):v("",!0),e.status===2&&e.user_id===u(i)&&e.isComment===!0?(r(),g(l,{key:6,class:"ml-2",onClick:m=>T(e)},{default:t(()=>[d("查看评价")]),_:2},1032,["onClick"])):v("",!0)])]))),128)),a(q,{show:w.value,"onUpdate:show":o[2]||(o[2]=e=>w.value=e),class:"custom-card",preset:"card",style:I,title:"评价",size:"huge",bordered:!1,segmented:j},{footer:t(()=>[a(l,{onClick:L},{default:t(()=>[d("提交")]),_:1})]),default:t(()=>[a(U,{ref_key:"formRef",ref:z,model:p,rules:J},{default:t(()=>[a(b,{path:"reviewScore",label:"评分"},{default:t(()=>[a(V,{"allow-half":"",value:p.reviewScore,"on-update:value":F},null,8,["value"])]),_:1}),a(b,{path:"review",label:"评语"},{default:t(()=>[a(G,{value:p.review,"onUpdate:value":o[1]||(o[1]=e=>p.review=e),placeholder:"请输入100字以内评语",type:"textarea",maxlength:"100"},null,8,["value"])]),_:1})]),_:1},8,["model"])]),_:1},8,["show"]),a(q,{show:C.value,"onUpdate:show":o[3]||(o[3]=e=>C.value=e),class:"custom-card",preset:"card",style:I,title:"查看评价",size:"huge",bordered:!1,segmented:j},{default:t(()=>[a(U,{ref_key:"form",ref:D,model:k},{default:t(()=>[a(b,{path:"reviewScore",label:"评分"},{default:t(()=>[a(V,{"allow-half":"",value:O.value,readonly:""},null,8,["value"])]),_:1}),a(b,{path:"comment",label:"评语"},{default:t(()=>[n("div",fe,_(N.value),1)]),_:1})]),_:1},8,["model"])]),_:1},8,["show"])])}}},je=K(me,[["__scopeId","data-v-3d366359"]]);export{je as default};