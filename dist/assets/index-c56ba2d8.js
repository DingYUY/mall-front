import{_ as j,u as N,f as h,o as C,g as I,a as c,c as i,b as l,d as g,h as x,w as J,e as s,b6 as v,t as _,b9 as O,F as E,i as V,j as B,v as $}from"./index-953b23c6.js";import{_ as D,a as F}from"./Checkbox-40fa9567.js";import{u as M}from"./use-message-37081a3e.js";import"./use-merged-state-b9c9e241.js";const U="/cartNull.png";const z={key:0,src:U,class:"w-72",alt:""},A={key:1,class:"pingfang_jian text-xs mt-3"},L={key:3},P=["src"],R={class:"pingfang_jian ml-3 w-44 overflow-hidden overflow-ellipsis whitespace-nowrap"},T={class:"pingfang_jian text-gray-500 text-xs w-44 break-all"},q={class:"pingfang_jian text-gray-500 text-xs w-44 break-all"},G={class:"pingfang_jian text-gray-500 text-xs flex items-center justify-end",style:{width:"34%"}},H=["onClick"],K={class:"pingfang_jian text-gray-500 text-xs break-all ml-2 mr-2"},Q=["onClick"],W={class:"w-full h-24 justify-between p-2 flex items-center"},X={class:"pingfang_jian"},Y={class:"text-purple-900 font-bold text-xl p-2"},Z={__name:"index",setup(ee){const f=N(),m=M();let r=h(localStorage.getItem("cart")?JSON.parse(localStorage.getItem("cart")):[]),p=h([]),d=h([]);C(()=>{r.length>0&&I.post("/getShopCart",{goods:r}).then(e=>{p.push(...e.data.data)})});function w(e){d.length=0,d.push(...e)}function y(){if(d.length>0){let e=[];d.forEach(n=>{e.push({id:n.good_id,count:n.count})}),f.push("/buy/"+JSON.stringify(e))}else m.success("请添加商品")}function b(e){console.log(e);let n=e.good_id;e.count++;let a=JSON.parse(localStorage.getItem("cart"));a.forEach(o=>{n==o.id&&o.count++}),console.log(a),localStorage.setItem("cart",JSON.stringify(a))}function S(e,n){let a=e.good_id;if(e.count>1){e.count--;let o=JSON.parse(localStorage.getItem("cart"));o.forEach(t=>{a==t.id&&t.count--}),localStorage.setItem("cart",JSON.stringify(o))}else{p.splice(n,1);let o=JSON.parse(localStorage.getItem("cart"));o.forEach((t,u)=>{a==t.id&&o.splice(u,1)}),localStorage.setItem("cart",JSON.stringify(o))}}return(e,n)=>{const a=F,o=D;return c(),i("div",{class:O(["w-full",{"flex justify-center flex-col items-center":l(r).length==0}])},[l(r).length==0?(c(),i("img",z)):g("",!0),l(r).length==0?(c(),i("p",A,"购物车暂无内容，请到广场购买")):g("",!0),l(r).length==0?(c(),i("div",{key:2,class:"pingfang text-xs font-bold bg-purple-500 mt-5 cursor-pointer transition active:scale-50 p-2 rounded-xl text-white",onClick:n[0]||(n[0]=t=>l(f).push("/"))},"广场")):g("",!0),l(r).length>0?(c(),i("div",L,[x(o,{"onUpdate:value":w},{default:J(()=>[(c(!0),i(E,null,V(l(p),(t,u)=>B((c(),i("div",{class:"flex items-center m-2 pb-3 border-b",key:u},[x(a,{value:t},null,8,["value"]),s("img",{src:t.img[0],class:"w-20 h-20 object-cover ml-3",alt:""},null,8,P),s("div",R,_(t.name),1),s("div",T,_(t.introduce),1),s("div",q,"单价:"+_(t.price),1),s("div",G,[s("div",{class:"hover:underline p-2 bg-purple-700 text-white rounded",onClick:k=>b(t)},"添加",8,H),s("div",K,"数量:"+_(t.count),1),s("div",{class:"hover:underline bg-purple-700 text-white rounded p-2",onClick:k=>S(t,u)},"减少",8,Q)])])),[[$,t.show==!0]])),128))]),_:1}),s("div",W,[s("div",X,[v("已选中"),s("span",Y,_(l(d).length),1),v("件商品 ")]),s("div",{onClick:y,class:"w-24 pingfang_jian text-white h-12 rounded-full items-center cursor-pointer flex bg-purple-700 justify-center transition active:scale-125"},"结算")])])):g("",!0)],2)}}},ae=j(Z,[["__scopeId","data-v-9ee6aa7d"]]);export{ae as default};