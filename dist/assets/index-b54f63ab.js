import{z as P,A as s,H as W,L as x,a5 as E,ai as p,K as T,ah as H,W as A,r as M,V as R,D as B,a2 as q,bj as F,X as K,E as O,an as I,bB as X,P as Z,j as G,v as J,ac as Q,a1 as Y,ad as ee,q as te,x as ae,bh as k,a0 as oe,bC as le,_ as ne,a as re,c as se,h as v,w as g,e as C}from"./index-953b23c6.js";import{u as ie}from"./use-merged-state-b9c9e241.js";import{C as de}from"./ChevronRight-fb879e51.js";const ce=P({name:"ChevronLeft",render(){return s("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},s("path",{d:"M10.3536 3.14645C10.5488 3.34171 10.5488 3.65829 10.3536 3.85355L6.20711 8L10.3536 12.1464C10.5488 12.3417 10.5488 12.6583 10.3536 12.8536C10.1583 13.0488 9.84171 13.0488 9.64645 12.8536L5.14645 8.35355C4.95118 8.15829 4.95118 7.84171 5.14645 7.64645L9.64645 3.14645C9.84171 2.95118 10.1583 2.95118 10.3536 3.14645Z",fill:"currentColor"}))}}),pe=e=>{const{fontWeight:i,textColor1:n,textColor2:a,textColorDisabled:d,dividerColor:t,fontSize:o}=e;return{titleFontSize:o,titleFontWeight:i,dividerColor:t,titleTextColor:n,titleTextColorDisabled:d,fontSize:o,textColor:a,arrowColor:a,arrowColorDisabled:d,itemMargin:"16px 0 0 0"}},me={name:"Collapse",common:W,self:pe},fe=me,ue=x("collapse","width: 100%;",[x("collapse-item",`
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 margin: var(--n-item-margin);
 `,[E("disabled",[p("header","cursor: not-allowed;",[p("header-main",`
 color: var(--n-title-text-color-disabled);
 `),x("collapse-item-arrow",`
 color: var(--n-arrow-color-disabled);
 `)])]),x("collapse-item","margin-left: 32px;"),T("&:first-child","margin-top: 0;"),T("&:first-child >",[p("header","padding-top: 0;")]),E("left-arrow-placement",[p("header",[x("collapse-item-arrow","margin-right: 4px;")])]),E("right-arrow-placement",[p("header",[x("collapse-item-arrow","margin-left: 4px;")])]),p("content-wrapper",[p("content-inner","padding-top: 16px;"),H({duration:"0.15s"})]),E("active",[p("header",[E("active",[x("collapse-item-arrow","transform: rotate(90deg);")])])]),T("&:not(:first-child)","border-top: 1px solid var(--n-divider-color);"),p("header",`
 font-size: var(--n-title-font-size);
 display: flex;
 flex-wrap: nowrap;
 align-items: center;
 transition: color .3s var(--n-bezier);
 position: relative;
 padding: 16px 0 0 0;
 color: var(--n-title-text-color);
 cursor: pointer;
 `,[p("header-main",`
 display: flex;
 flex-wrap: nowrap;
 align-items: center;
 font-weight: var(--n-title-font-weight);
 transition: color .3s var(--n-bezier);
 flex: 1;
 color: var(--n-title-text-color);
 `),p("header-extra",`
 display: flex;
 align-items: center;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),x("collapse-item-arrow",`
 display: flex;
 transition:
 transform .15s var(--n-bezier),
 color .3s var(--n-bezier);
 font-size: 18px;
 color: var(--n-arrow-color);
 `)])])]),he=Object.assign(Object.assign({},B.props),{defaultExpandedNames:{type:[Array,String],default:null},expandedNames:[Array,String],arrowPlacement:{type:String,default:"left"},accordion:{type:Boolean,default:!1},displayDirective:{type:String,default:"if"},onItemHeaderClick:[Function,Array],"onUpdate:expandedNames":[Function,Array],onUpdateExpandedNames:[Function,Array],onExpandedNamesChange:{type:[Function,Array],validator:()=>!0,default:void 0}}),L=O("n-collapse"),xe=P({name:"Collapse",props:he,setup(e,{slots:i}){const{mergedClsPrefixRef:n,inlineThemeDisabled:a,mergedRtlRef:d}=A(e),t=M(e.defaultExpandedNames),o=R(()=>e.expandedNames),m=ie(o,t),w=B("Collapse","-collapse",ue,fe,e,n);function f(u){const{"onUpdate:expandedNames":l,onUpdateExpandedNames:h,onExpandedNamesChange:y}=e;h&&I(h,u),l&&I(l,u),y&&I(y,u),t.value=u}function c(u){const{onItemHeaderClick:l}=e;l&&I(l,u)}function r(u,l,h){const{accordion:y}=e,{value:$}=m;if(y)u?(f([l]),c({name:l,expanded:!0,event:h})):(f([]),c({name:l,expanded:!1,event:h}));else if(!Array.isArray($))f([l]),c({name:l,expanded:!0,event:h});else{const _=$.slice(),z=_.findIndex(D=>l===D);~z?(_.splice(z,1),f(_),c({name:l,expanded:!1,event:h})):(_.push(l),f(_),c({name:l,expanded:!0,event:h}))}}q(L,{props:e,mergedClsPrefixRef:n,expandedNamesRef:m,slots:i,toggleItem:r});const N=F("Collapse",d,n),S=R(()=>{const{common:{cubicBezierEaseInOut:u},self:{titleFontWeight:l,dividerColor:h,titleTextColor:y,titleTextColorDisabled:$,textColor:_,arrowColor:z,fontSize:D,titleFontSize:j,arrowColorDisabled:U,itemMargin:V}}=w.value;return{"--n-font-size":D,"--n-bezier":u,"--n-text-color":_,"--n-divider-color":h,"--n-title-font-size":j,"--n-title-text-color":y,"--n-title-text-color-disabled":$,"--n-title-font-weight":l,"--n-arrow-color":z,"--n-arrow-color-disabled":U,"--n-item-margin":V}}),b=a?K("collapse",void 0,S,e):void 0;return{rtlEnabled:N,mergedTheme:w,mergedClsPrefix:n,cssVars:a?void 0:S,themeClass:b==null?void 0:b.themeClass,onRender:b==null?void 0:b.onRender}},render(){var e;return(e=this.onRender)===null||e===void 0||e.call(this),s("div",{class:[`${this.mergedClsPrefix}-collapse`,this.rtlEnabled&&`${this.mergedClsPrefix}-collapse--rtl`,this.themeClass],style:this.cssVars},this.$slots)}}),ve=P({name:"CollapseItemContent",props:{displayDirective:{type:String,required:!0},show:Boolean,clsPrefix:{type:String,required:!0}},setup(e){return{onceTrue:X(Z(e,"show"))}},render(){return s(Q,null,{default:()=>{const{show:e,displayDirective:i,onceTrue:n,clsPrefix:a}=this,d=i==="show"&&n,t=s("div",{class:`${a}-collapse-item__content-wrapper`},s("div",{class:`${a}-collapse-item__content-inner`},this.$slots));return d?G(t,[[J,e]]):e?t:null}})}}),ge={title:String,name:[String,Number],disabled:Boolean,displayDirective:String},_e=P({name:"CollapseItem",props:ge,setup(e){const{mergedRtlRef:i}=A(e),n=Y(),a=ee(()=>{var r;return(r=e.name)!==null&&r!==void 0?r:n}),d=te(L);d||ae("collapse-item","`n-collapse-item` must be placed inside `n-collapse`.");const{expandedNamesRef:t,props:o,mergedClsPrefixRef:m,slots:w}=d,f=R(()=>{const{value:r}=t;if(Array.isArray(r)){const{value:N}=a;return!~r.findIndex(S=>S===N)}else if(r){const{value:N}=a;return N!==r}return!0});return{rtlEnabled:F("Collapse",i,m),collapseSlots:w,randomName:n,mergedClsPrefix:m,collapsed:f,mergedDisplayDirective:R(()=>{const{displayDirective:r}=e;return r||o.displayDirective}),arrowPlacement:R(()=>o.arrowPlacement),handleClick(r){d&&!e.disabled&&d.toggleItem(f.value,a.value,r)}}},render(){const{collapseSlots:e,$slots:i,arrowPlacement:n,collapsed:a,mergedDisplayDirective:d,mergedClsPrefix:t,disabled:o}=this,m=k(i.header,{collapsed:a},()=>[this.title]),w=i["header-extra"]||e["header-extra"],f=i.arrow||e.arrow;return s("div",{class:[`${t}-collapse-item`,`${t}-collapse-item--${n}-arrow-placement`,o&&`${t}-collapse-item--disabled`,!a&&`${t}-collapse-item--active`]},s("div",{class:[`${t}-collapse-item__header`,!a&&`${t}-collapse-item__header--active`]},s("div",{class:`${t}-collapse-item__header-main`,onClick:this.handleClick},n==="right"&&m,s("div",{class:`${t}-collapse-item-arrow`,key:this.rtlEnabled?0:1},k(f,{collapsed:a},()=>{var c;return[s(oe,{clsPrefix:t},{default:(c=e.expandIcon)!==null&&c!==void 0?c:()=>this.rtlEnabled?s(ce,null):s(de,null)})]})),n==="left"&&m),le(w,{collapsed:a},c=>s("div",{class:`${t}-collapse-item__header-extra`,onClick:this.handleClick},c))),s(ve,{clsPrefix:t,displayDirective:d,show:!a},i))}}),Ce={name:"index"},we={class:"p-6 pingfang"},be=C("div",null,"登录/注册是在我们tab栏的左边的内容，有注册和登录， 点击输入框 输入账号密码就可以登录了,没有账号点击注册注册账号密码",-1),ye=C("div",null,"购物车是装在你喜欢的商品，防止你忘掉了，这个功能实在登录状态使用",-1),Ne=C("div",null,"发布是首页的意思，是交易市场",-1),Ee=C("div",null,"商品的发布，需要登录",-1),Re=C("div",null,"订单的管理 当有人买了你的商品都在这里处理",-1),Se=C("div",null,"地址的管理",-1),$e=C("div",null,"用户的商品都在这里，查看自己发布的商品",-1);function ze(e,i,n,a,d,t){const o=_e,m=xe;return re(),se("div",we,[v(m,null,{default:g(()=>[v(o,{title:"注册/登录",name:"1"},{default:g(()=>[be]),_:1}),v(o,{title:"购物车",name:"2"},{default:g(()=>[ye]),_:1}),v(o,{title:"发布",name:"3"},{default:g(()=>[Ne]),_:1}),v(o,{title:"商品发布",name:"4"},{default:g(()=>[Ee]),_:1}),v(o,{title:"订单",name:"5"},{default:g(()=>[Re]),_:1}),v(o,{title:"地址",name:"6"},{default:g(()=>[Se]),_:1}),v(o,{title:"右侧用户栏",name:"7"},{default:g(()=>[$e]),_:1})]),_:1})])}const Te=ne(Ce,[["render",ze]]);export{Te as default};
