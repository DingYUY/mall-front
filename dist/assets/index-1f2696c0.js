import{_ as h,u as b,r as u,f as x,o as F,a as w,c as S,e as l,h as _,w as C,b as i,g as p,A as o,ae as r,b6 as G,p as I,k as z}from"./index-953b23c6.js";import{u as B}from"./use-message-37081a3e.js";import{u as M}from"./composables-3e6ed2ea.js";import{_ as N}from"./DataTable-044bd614.js";import"./Eye-53aa542d.js";import"./Checkbox-40fa9567.js";import"./use-merged-state-b9c9e241.js";import"./Radio-3cf275e3.js";import"./Tooltip-b27f7136.js";import"./Input-e5c21a65.js";import"./ChevronRight-fb879e51.js";const V=s=>(I("data-v-fbe38ffc"),s=s(),z(),s),$={class:"my-goods"},j={class:"title"},E=V(()=>l("div",null,"我的发布",-1)),T={class:"overflow-hidden overflow-y-scroll"},q={__name:"index",setup(s){const m=b(),f=B();M();let a=u();const n=()=>{p.post("/getMyGoods",{user_id:localStorage.getItem("id")}).then(t=>{t.data&&(a.value=t.data.data,console.log(a.value))})},c=x({page:1,pageSize:5,onChange:t=>{c.page=t,n()}}),g=({ban:t})=>[{title:"商品图片",key:"img",render(e){return o("div",{class:["flex","justify-center","items-center"]},[o("img",{src:e.img[0]?e.img[0]:"",class:["w-20","h-20","object-cover","ml-4"]})])}},{title:"商品名",key:"name"},{title:"简介",key:"introduce"},{title:"价格",key:"price"},{title:"商家名",key:"username"},{title:"发货地址",key:"address"},{title:"审核状态",key:"status",render(e){return o("span",{innerText:e.reviewStatus===0?"管理员审核中":e.reviewStatus===1?"发布通过":"发布被拒绝"})}},{title:"操作",key:"_id",render(e){return o("div",null,[o(r,{strong:!0,tertiary:!0,style:{color:"white","background-color":"#FFF0F0"},size:"small",onClick:()=>v(e)},{default:()=>"编辑"}),o(r,{strong:!0,tertiary:!0,style:{color:"white","background-color":"#FFF0F0","margin-left":"5px"},size:"small",onClick:()=>y(e)},{default:()=>"下架"})])}}],v=t=>{m.push({name:"GoodEdit",query:t})},y=t=>{p.post("/delGoods",{id:t._id}).then(e=>{e.data.code===1&&(f.success("下架成功"),console.log(e.data),n())})},d=u();return d.value=g({}),F(()=>{n()}),(t,e)=>{const k=N;return w(),S("div",$,[l("div",j,[E,_(i(r),{class:"back-button",onClick:e[0]||(e[0]=A=>t.$router.back())},{default:C(()=>[G("返回")]),_:1})]),l("div",T,[_(k,{columns:i(d),data:i(a),pagination:c,bordered:!1},null,8,["columns","data","pagination"])])])}}},X=h(q,[["__scopeId","data-v-fbe38ffc"]]);export{X as default};
