import{b as j}from"./runtime-dom.esm-bundler-7e1f654a.js";import{b as g}from"./axios-bce995d2.js";import{_ as O}from"./_plugin-vue_export-helper-c27b6911.js";import{u as C}from"./use-message-2eb0c123.js";import{r as c,a as m,ae as J,o as T,P as V,e as p,a3 as u,a6 as o,g as k,w as S,a5 as f,N as l,F as B,a7 as H,Y as D,Q as I,O as F}from"./runtime-core.esm-bundler-7390d31c.js";import{_ as U}from"./Button-c8fa1eb4.js";import"./create-injection-key-b5917821.js";import"./light-cdcf3c6d.js";import"./icon-switch.cssr-65c211ab.js";import"./FadeInExpandTransition-ffe10ded.js";const $={class:"w-full p-2 h-full bg-cover bg-no-repeat",style:{"background-image":"url('/bg_deatied.png')"}},E={class:"top"},P={style:{display:"flex",flex:"1","justify-content":"center","margin-right":"28px"}},Q={class:"chat-area"},W={key:0,style:{display:"flex",margin:"10px 10px 15px 10px","justify-content":"flex-start","align-items":"center","flex-wrap":"nowrap"}},Y=["src"],q={style:{display:"inline-block","max-width":"60%","word-break":"break-all","background-color":"greenyellow",padding:"15px","border-radius":"10px","margin-left":"20px"}},z={key:1,style:{display:"flex",margin:"10px 10px 15px 10px","justify-content":"flex-end","align-items":"center","flex-wrap":"nowrap"}},A={style:{display:"inline-block","max-width":"60%","word-break":"break-all","background-color":"greenyellow",padding:"15px","border-radius":"10px","margin-right":"20px"}},G=["src"],K={class:"footer"},R={__name:"index",setup(X){const t=JSON.parse(localStorage.getItem("orderMessage"));console.log("orderMessage",t);const N=C(),n=c();let r=m([]);const y=m({content:n,shop_id:t.shop_id,user_id:t.user_id,current_id:localStorage.getItem("id")}),_=localStorage.getItem("id");let i=new WebSocket("ws://124.222.246.206:3000");i.onopen=()=>{console.log("已连接到websocket服务器")};const L=()=>{n.value?(i.send(JSON.stringify(y)),g.post("/addChat",{content:n.value,shop_id:t.shop_id,user_id:t.user_id,current_id:localStorage.getItem("id"),token:localStorage.getItem("token")}).then(e=>{console.log("添加数据库",e.data)}),console.log("发送：",y),n.value=""):N.warning("请输入内容")};i.onmessage=e=>{console.log("接收:",JSON.parse(e.data));let s=m([]);s.value=JSON.parse(e.data),console.log("receiveList.value",s.value),r.value=d.value.concat(s.value),console.log("recordList",d),console.log("chatList",r.value)},i.onclose=()=>{console.log("连接已关闭"),localStorage.setItem("orderMessage",JSON.stringify({}))},J(()=>{i.onclose(()=>{console.log("离开页面，连接已关闭")})});const x=c(),h=c(),b=c();let d=m([]);const v=c();return T(()=>{g.post("/getHead",{id:t.shop_id}).then(e=>{x.value=e.data.data.img_head}),g.post("/getHead",{id:t.user_id}).then(e=>{h.value=e.data.data.img_head,b.value=e.data.data.name}),g.post("/getChat",{shop_id:t.shop_id,user_id:t.user_id}).then(e=>{d.value=e.data.data,console.log("聊天记录",d.value),r.value=d.value})}),V(()=>r.value,()=>{F(()=>{v.value.scrollTop=v.value.scrollHeight})},{deep:!0}),(e,s)=>{const w=U;return p(),u("div",$,[o("div",E,[k(w,{onClick:s[0]||(s[0]=a=>e.$router.back())},{default:S(()=>[I("返回")]),_:1}),o("span",P,f(l(t).shop_id!==l(_)?l(t).shop_name:b.value),1)]),o("div",Q,[o("div",{ref_key:"chat",ref:v,class:"overflow-hidden overflow-y-scroll area"},[(p(!0),u(B,null,H(l(r).value,(a,M)=>(p(),u("div",{key:M},[a.current_id!==l(_)?(p(),u("div",W,[o("img",{src:a.shop_id===l(_)?h.value:x.value,style:{display:"flex","flex-direction":"column","justify-content":"flex-start",width:"50px",height:"50px","border-radius":"25px","object-fit":"cover"}},null,8,Y),o("span",q,f(a.content),1)])):(p(),u("div",z,[o("span",A,f(a.content),1),o("img",{src:a.user_id===l(_)?h.value:x.value,style:{display:"flex","flex-direction":"column","justify-content":"flex-start",width:"50px",height:"50px","border-radius":"25px","object-fit":"cover"}},null,8,G)]))]))),128))],512)]),o("div",K,[D(o("textarea",{"onUpdate:modelValue":s[1]||(s[1]=a=>n.value=a),class:"text",name:"",id:"",minlength:"1",maxlength:"200",placeholder:"请输入内容"},null,512),[[j,n.value]]),k(w,{onClick:L},{default:S(()=>[I("发送")]),_:1})])])}}},de=O(R,[["__scopeId","data-v-b9d2fcc3"]]);export{de as default};
