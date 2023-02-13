import{v as xe,T as Ee}from"./runtime-dom.esm-bundler-7e1f654a.js";import{d as Ze}from"./context-622e1fe5.js";import{b as z,e as y,a as p,i as Ge,c as ue,j as je,d as m,k as Ne,l as Je,u as fe,g as I,f as eo,h as ge,m as E,n as He}from"./light-cdcf3c6d.js";import{u as oo,r as O,a as ye}from"./FadeInExpandTransition-ffe10ded.js";import{c as D,a as no}from"./icon-switch.cssr-65c211ab.js";import{g as to}from"./index-9ea40518.js";import{N as Ae}from"./Icon-ffc616fc.js";import{i as De,h as We,r as ro,I as ke,S as io,W as lo,E as so,s as ao,m as Ve,d as co,p as uo,g as fo,N as go,F as vo,c as ho,a as mo,f as po,b as bo,L as Co,z as xo}from"./fade-in-scale-up.cssr-2120b37b.js";import{Q as we,R as V,r as P,S as ve,U as Y,o as yo,P as le,h as r,d as N,V as X,c as F,i as Xe,O as Se,p as W,W as ko,X as wo,Y as se}from"./runtime-core.esm-bundler-7390d31c.js";import{i as So,b as zo,_ as ze}from"./Button-c8fa1eb4.js";import{w as Po}from"./create-injection-key-b5917821.js";import{k as ae,g as Bo}from"./upperFirst-a62d2a17.js";import{o as ce,a as de}from"./delegate-b614532e.js";function he(e){return Object.keys(e)}const L=(e,...o)=>typeof e=="function"?e(...o):typeof e=="string"?we(e):typeof e=="number"?we(String(e)):null,Ro=new WeakSet;function $o(e){return!Ro.has(e)}const j=P(null);function Pe(e){if(e.clientX>0||e.clientY>0)j.value={x:e.clientX,y:e.clientY};else{const{target:o}=e;if(o instanceof Element){const{left:t,top:n,width:a,height:s}=o.getBoundingClientRect();t>0||n>0?j.value={x:t+a/2,y:n+s/2}:j.value={x:0,y:0}}else j.value=null}}let H=0,Be=!0;function To(){if(!De)return V(P(null));H===0&&ce("click",document,Pe,!0);const e=()=>{H+=1};return Be&&(Be=We())?(ve(e),Y(()=>{H-=1,H===0&&de("click",document,Pe,!0)})):e(),V(j)}const Oo=P(void 0);let A=0;function Re(){Oo.value=Date.now()}let $e=!0;function Fo(e){if(!De)return V(P(!1));const o=P(!1);let t=null;function n(){t!==null&&window.clearTimeout(t)}function a(){n(),o.value=!0,t=window.setTimeout(()=>{o.value=!1},e)}A===0&&ce("click",window,Re,!0);const s=()=>{A+=1,ce("click",window,a,!0)};return $e&&($e=We())?(ve(s),Y(()=>{A-=1,A===0&&de("click",window,Re,!0),de("click",window,a,!0),n()})):s(),V(o)}let M=0,Te="",Oe="",Fe="",Le="";const Me=P("0px");function Lo(e){if(typeof document>"u")return;const o=document.documentElement;let t,n=!1;const a=()=>{o.style.marginRight=Te,o.style.overflow=Oe,o.style.overflowX=Fe,o.style.overflowY=Le,Me.value="0px"};yo(()=>{t=le(e,s=>{if(s){if(!M){const f=window.innerWidth-o.offsetWidth;f>0&&(Te=o.style.marginRight,o.style.marginRight=`${f}px`,Me.value=`${f}px`),Oe=o.style.overflow,Fe=o.style.overflowX,Le=o.style.overflowY,o.style.overflow="hidden",o.style.overflowX="hidden",o.style.overflowY="hidden"}n=!0,M++}else M--,M||a(),n=!1},{immediate:!0})}),Y(()=>{t==null||t(),n&&(M--,M||a(),n=!1)})}const me=P(!1),Ie=()=>{me.value=!0},_e=()=>{me.value=!1};let _=0;const Mo=()=>(So&&(ve(()=>{_||(window.addEventListener("compositionstart",Ie),window.addEventListener("compositionend",_e)),_++}),Y(()=>{_<=1?(window.removeEventListener("compositionstart",Ie),window.removeEventListener("compositionend",_e),_=0):_--})),me),Io=ro("close",r("svg",{viewBox:"0 0 12 12",version:"1.1",xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0},r("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},r("g",{fill:"currentColor","fill-rule":"nonzero"},r("path",{d:"M2.08859116,2.2156945 L2.14644661,2.14644661 C2.32001296,1.97288026 2.58943736,1.95359511 2.7843055,2.08859116 L2.85355339,2.14644661 L6,5.293 L9.14644661,2.14644661 C9.34170876,1.95118446 9.65829124,1.95118446 9.85355339,2.14644661 C10.0488155,2.34170876 10.0488155,2.65829124 9.85355339,2.85355339 L6.707,6 L9.85355339,9.14644661 C10.0271197,9.32001296 10.0464049,9.58943736 9.91140884,9.7843055 L9.85355339,9.85355339 C9.67998704,10.0271197 9.41056264,10.0464049 9.2156945,9.91140884 L9.14644661,9.85355339 L6,6.707 L2.85355339,9.85355339 C2.65829124,10.0488155 2.34170876,10.0488155 2.14644661,9.85355339 C1.95118446,9.65829124 1.95118446,9.34170876 2.14644661,9.14644661 L5.293,6 L2.14644661,2.85355339 C1.97288026,2.67998704 1.95359511,2.41056264 2.08859116,2.2156945 L2.14644661,2.14644661 L2.08859116,2.2156945 Z"}))))),_o=z("base-close",`
 display: flex;
 align-items: center;
 justify-content: center;
 cursor: pointer;
 background-color: transparent;
 color: var(--n-close-icon-color);
 border-radius: var(--n-close-border-radius);
 height: var(--n-close-size);
 width: var(--n-close-size);
 font-size: var(--n-close-icon-size);
 outline: none;
 border: none;
 position: relative;
 padding: 0;
`,[y("absolute",`
 height: var(--n-close-icon-size);
 width: var(--n-close-icon-size);
 `),p("&::before",`
 content: "";
 position: absolute;
 width: var(--n-close-size);
 height: var(--n-close-size);
 left: 50%;
 top: 50%;
 transform: translateY(-50%) translateX(-50%);
 transition: inherit;
 border-radius: inherit;
 `),Ge("disabled",[p("&:hover",`
 color: var(--n-close-icon-color-hover);
 `),p("&:hover::before",`
 background-color: var(--n-close-color-hover);
 `),p("&:focus::before",`
 background-color: var(--n-close-color-hover);
 `),p("&:active",`
 color: var(--n-close-icon-color-pressed);
 `),p("&:active::before",`
 background-color: var(--n-close-color-pressed);
 `)]),y("disabled",`
 cursor: not-allowed;
 color: var(--n-close-icon-color-disabled);
 background-color: transparent;
 `),y("round",[p("&::before",`
 border-radius: 50%;
 `)])]),Ye=N({name:"BaseClose",props:{isButtonTag:{type:Boolean,default:!0},clsPrefix:{type:String,required:!0},disabled:{type:Boolean,default:void 0},focusable:{type:Boolean,default:!0},round:Boolean,onClick:Function,absolute:Boolean},setup(e){return oo("-base-close",_o,X(e,"clsPrefix")),()=>{const{clsPrefix:o,disabled:t,absolute:n,round:a,isButtonTag:s}=e;return r(s?"button":"div",{type:s?"button":void 0,tabindex:t||!e.focusable?-1:0,"aria-disabled":t,"aria-label":"close",role:s?void 0:"button",disabled:t,class:[`${o}-base-close`,n&&`${o}-base-close--absolute`,t&&`${o}-base-close--disabled`,a&&`${o}-base-close--round`],onMousedown:h=>{e.focusable||h.preventDefault()},onClick:e.onClick},r(Ae,{clsPrefix:o},{default:()=>r(Io,null)}))}}}),Eo={paddingSmall:"12px 16px 12px",paddingMedium:"19px 24px 20px",paddingLarge:"23px 32px 24px",paddingHuge:"27px 40px 28px",titleFontSizeSmall:"16px",titleFontSizeMedium:"18px",titleFontSizeLarge:"18px",titleFontSizeHuge:"18px",closeIconSize:"18px",closeSize:"22px"},jo=e=>{const{primaryColor:o,borderRadius:t,lineHeight:n,fontSize:a,cardColor:s,textColor2:f,textColor1:h,dividerColor:d,fontWeightStrong:l,closeIconColor:b,closeIconColorHover:c,closeIconColorPressed:C,closeColorHover:w,closeColorPressed:B,modalColor:k,boxShadow1:g,popoverColor:x,actionColor:v}=e;return Object.assign(Object.assign({},Eo),{lineHeight:n,color:s,colorModal:k,colorPopover:x,colorTarget:o,colorEmbedded:v,colorEmbeddedModal:v,colorEmbeddedPopover:v,textColor:f,titleTextColor:h,borderColor:d,actionColor:v,titleFontWeight:l,closeColorHover:w,closeColorPressed:B,closeBorderRadius:t,closeIconColor:b,closeIconColorHover:c,closeIconColorPressed:C,fontSizeSmall:a,fontSizeMedium:a,fontSizeLarge:a,fontSizeHuge:a,boxShadow:g,borderRadius:t})},No={name:"Card",common:ue,self:jo},Ke=No,Ho=p([z("card",`
 font-size: var(--n-font-size);
 line-height: var(--n-line-height);
 display: flex;
 flex-direction: column;
 width: 100%;
 box-sizing: border-box;
 position: relative;
 border-radius: var(--n-border-radius);
 background-color: var(--n-color);
 color: var(--n-text-color);
 word-break: break-word;
 transition: 
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[je({background:"var(--n-color-modal)"}),y("hoverable",[p("&:hover","box-shadow: var(--n-box-shadow);")]),y("content-segmented",[p(">",[m("content",{paddingTop:"var(--n-padding-bottom)"})])]),y("content-soft-segmented",[p(">",[m("content",`
 margin: 0 var(--n-padding-left);
 padding: var(--n-padding-bottom) 0;
 `)])]),y("footer-segmented",[p(">",[m("footer",{paddingTop:"var(--n-padding-bottom)"})])]),y("footer-soft-segmented",[p(">",[m("footer",`
 padding: var(--n-padding-bottom) 0;
 margin: 0 var(--n-padding-left);
 `)])]),p(">",[z("card-header",`
 box-sizing: border-box;
 display: flex;
 align-items: center;
 font-size: var(--n-title-font-size);
 padding:
 var(--n-padding-top)
 var(--n-padding-left)
 var(--n-padding-bottom)
 var(--n-padding-left);
 `,[m("main",`
 font-weight: var(--n-title-font-weight);
 transition: color .3s var(--n-bezier);
 flex: 1;
 min-width: 0;
 color: var(--n-title-text-color);
 `),m("extra",`
 display: flex;
 align-items: center;
 font-size: var(--n-font-size);
 font-weight: 400;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),m("close",`
 margin: 0 0 0 8px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)]),m("action",`
 box-sizing: border-box;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 background-clip: padding-box;
 background-color: var(--n-action-color);
 `),m("content","flex: 1; min-width: 0;"),m("content, footer",`
 box-sizing: border-box;
 padding: 0 var(--n-padding-left) var(--n-padding-bottom) var(--n-padding-left);
 font-size: var(--n-font-size);
 `,[p("&:first-child",{paddingTop:"var(--n-padding-bottom)"})]),m("action",`
 background-color: var(--n-action-color);
 padding: var(--n-padding-bottom) var(--n-padding-left);
 border-bottom-left-radius: var(--n-border-radius);
 border-bottom-right-radius: var(--n-border-radius);
 `)]),z("card-cover",`
 overflow: hidden;
 width: 100%;
 border-radius: var(--n-border-radius) var(--n-border-radius) 0 0;
 `,[p("img",`
 display: block;
 width: 100%;
 `)]),y("bordered",`
 border: 1px solid var(--n-border-color);
 `,[p("&:target","border-color: var(--n-color-target);")]),y("action-segmented",[p(">",[m("action",[p("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),y("content-segmented, content-soft-segmented",[p(">",[m("content",{transition:"border-color 0.3s var(--n-bezier)"},[p("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),y("footer-segmented, footer-soft-segmented",[p(">",[m("footer",{transition:"border-color 0.3s var(--n-bezier)"},[p("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),y("embedded",`
 background-color: var(--n-color-embedded);
 `)]),Ne(z("card",`
 background: var(--n-color-modal);
 `,[y("embedded",`
 background-color: var(--n-color-embedded-modal);
 `)])),Je(z("card",`
 background: var(--n-color-popover);
 `,[y("embedded",`
 background-color: var(--n-color-embedded-popover);
 `)]))]),pe={title:String,contentStyle:[Object,String],headerStyle:[Object,String],headerExtraStyle:[Object,String],footerStyle:[Object,String],embedded:Boolean,segmented:{type:[Boolean,Object],default:!1},size:{type:String,default:"medium"},bordered:{type:Boolean,default:!0},closable:Boolean,hoverable:Boolean,role:String,onClose:[Function,Array],tag:{type:String,default:"div"}},Ao=he(pe),Do=Object.assign(Object.assign({},I.props),pe),Wo=N({name:"Card",props:Do,setup(e){const o=()=>{const{onClose:l}=e;l&&E(l)},{inlineThemeDisabled:t,mergedClsPrefixRef:n,mergedRtlRef:a}=fe(e),s=I("Card","-card",Ho,Ke,e,n),f=eo("Card",a,n),h=F(()=>{const{size:l}=e,{self:{color:b,colorModal:c,colorTarget:C,textColor:w,titleTextColor:B,titleFontWeight:k,borderColor:g,actionColor:x,borderRadius:v,lineHeight:R,closeIconColor:S,closeIconColorHover:i,closeIconColorPressed:u,closeColorHover:$,closeColorPressed:T,closeBorderRadius:K,closeIconSize:U,closeSize:q,boxShadow:Q,colorPopover:Z,colorEmbedded:G,colorEmbeddedModal:J,colorEmbeddedPopover:ee,[D("padding",l)]:oe,[D("fontSize",l)]:ne,[D("titleFontSize",l)]:te},common:{cubicBezierEaseInOut:re}}=s.value,{top:ie,left:qe,bottom:Qe}=to(oe);return{"--n-bezier":re,"--n-border-radius":v,"--n-color":b,"--n-color-modal":c,"--n-color-popover":Z,"--n-color-embedded":G,"--n-color-embedded-modal":J,"--n-color-embedded-popover":ee,"--n-color-target":C,"--n-text-color":w,"--n-line-height":R,"--n-action-color":x,"--n-title-text-color":B,"--n-title-font-weight":k,"--n-close-icon-color":S,"--n-close-icon-color-hover":i,"--n-close-icon-color-pressed":u,"--n-close-color-hover":$,"--n-close-color-pressed":T,"--n-border-color":g,"--n-box-shadow":Q,"--n-padding-top":ie,"--n-padding-bottom":Qe,"--n-padding-left":qe,"--n-font-size":ne,"--n-title-font-size":te,"--n-close-size":q,"--n-close-icon-size":U,"--n-close-border-radius":K}}),d=t?ge("card",F(()=>e.size[0]),h,e):void 0;return{rtlEnabled:f,mergedClsPrefix:n,mergedTheme:s,handleCloseClick:o,cssVars:t?void 0:h,themeClass:d==null?void 0:d.themeClass,onRender:d==null?void 0:d.onRender}},render(){const{segmented:e,bordered:o,hoverable:t,mergedClsPrefix:n,rtlEnabled:a,onRender:s,embedded:f,tag:h,$slots:d}=this;return s==null||s(),r(h,{class:[`${n}-card`,this.themeClass,f&&`${n}-card--embedded`,{[`${n}-card--rtl`]:a,[`${n}-card--content${typeof e!="boolean"&&e.content==="soft"?"-soft":""}-segmented`]:e===!0||e!==!1&&e.content,[`${n}-card--footer${typeof e!="boolean"&&e.footer==="soft"?"-soft":""}-segmented`]:e===!0||e!==!1&&e.footer,[`${n}-card--action-segmented`]:e===!0||e!==!1&&e.action,[`${n}-card--bordered`]:o,[`${n}-card--hoverable`]:t}],style:this.cssVars,role:this.role},O(d.cover,l=>l&&r("div",{class:`${n}-card-cover`,role:"none"},l)),O(d.header,l=>l||this.title||this.closable?r("div",{class:`${n}-card-header`,style:this.headerStyle},r("div",{class:`${n}-card-header__main`,role:"heading"},l||this.title),O(d["header-extra"],b=>b&&r("div",{class:`${n}-card-header__extra`,style:this.headerExtraStyle},b)),this.closable?r(Ye,{clsPrefix:n,class:`${n}-card-header__close`,onClick:this.handleCloseClick,absolute:!0}):null):null),O(d.default,l=>l&&r("div",{class:`${n}-card__content`,style:this.contentStyle,role:"none"},l)),O(d.footer,l=>l&&[r("div",{class:`${n}-card__footer`,style:this.footerStyle,role:"none"},l)]),O(d.action,l=>l&&r("div",{class:`${n}-card__action`,role:"none"},l)))}}),Vo={titleFontSize:"18px",padding:"16px 28px 20px 28px",iconSize:"28px",actionSpace:"12px",contentMargin:"8px 0 16px 0",iconMargin:"0 4px 0 0",iconMarginIconTop:"4px 0 8px 0",closeSize:"22px",closeIconSize:"18px",closeMargin:"20px 26px 0 0",closeMarginIconTop:"10px 16px 0 0"},Xo=e=>{const{textColor1:o,textColor2:t,modalColor:n,closeIconColor:a,closeIconColorHover:s,closeIconColorPressed:f,closeColorHover:h,closeColorPressed:d,infoColor:l,successColor:b,warningColor:c,errorColor:C,primaryColor:w,dividerColor:B,borderRadius:k,fontWeightStrong:g,lineHeight:x,fontSize:v}=e;return Object.assign(Object.assign({},Vo),{fontSize:v,lineHeight:x,border:`1px solid ${B}`,titleTextColor:o,textColor:t,color:n,closeColorHover:h,closeColorPressed:d,closeIconColor:a,closeIconColorHover:s,closeIconColorPressed:f,closeBorderRadius:k,iconColor:w,iconColorInfo:l,iconColorSuccess:b,iconColorWarning:c,iconColorError:C,borderRadius:k,titleFontWeight:g})},Yo=He({name:"Dialog",common:ue,peers:{Button:zo},self:Xo}),Ue=Yo,be={icon:Function,type:{type:String,default:"default"},title:[String,Function],closable:{type:Boolean,default:!0},negativeText:String,positiveText:String,positiveButtonProps:Object,negativeButtonProps:Object,content:[String,Function],action:Function,showIcon:{type:Boolean,default:!0},loading:Boolean,bordered:Boolean,iconPlacement:String,onPositiveClick:Function,onNegativeClick:Function,onClose:Function},Ko=he(be),Uo=p([z("dialog",`
 word-break: break-word;
 line-height: var(--n-line-height);
 position: relative;
 background: var(--n-color);
 color: var(--n-text-color);
 box-sizing: border-box;
 margin: auto;
 border-radius: var(--n-border-radius);
 padding: var(--n-padding);
 transition: 
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `,[m("icon",{color:"var(--n-icon-color)"}),y("bordered",{border:"var(--n-border)"}),y("icon-top",[m("close",{margin:"var(--n-close-margin)"}),m("icon",{margin:"var(--n-icon-margin)"}),m("content",{textAlign:"center"}),m("title",{justifyContent:"center"}),m("action",{justifyContent:"center"})]),y("icon-left",[m("icon",{margin:"var(--n-icon-margin)"}),y("closable",[m("title",`
 padding-right: calc(var(--n-close-size) + 6px);
 `)])]),m("close",`
 position: absolute;
 right: 0;
 top: 0;
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 z-index: 1;
 `),m("content",`
 font-size: var(--n-font-size);
 margin: var(--n-content-margin);
 position: relative;
 word-break: break-word;
 `,[y("last","margin-bottom: 0;")]),m("action",`
 display: flex;
 justify-content: flex-end;
 `,[p("> *:not(:last-child)",{marginRight:"var(--n-action-space)"})]),m("icon",{fontSize:"var(--n-icon-size)",transition:"color .3s var(--n-bezier)"}),m("title",`
 transition: color .3s var(--n-bezier);
 display: flex;
 align-items: center;
 font-size: var(--n-title-font-size);
 font-weight: var(--n-title-font-weight);
 color: var(--n-title-text-color);
 `),z("dialog-icon-container",{display:"flex",justifyContent:"center"})]),Ne(z("dialog",`
 width: 446px;
 max-width: calc(100vw - 32px);
 `)),z("dialog",[je(`
 width: 446px;
 max-width: calc(100vw - 32px);
 `)])]),qo={default:()=>r(ke,null),info:()=>r(ke,null),success:()=>r(io,null),warning:()=>r(lo,null),error:()=>r(so,null)},Qo=N({name:"Dialog",alias:["NimbusConfirmCard","Confirm"],props:Object.assign(Object.assign({},I.props),be),setup(e){const{mergedComponentPropsRef:o,mergedClsPrefixRef:t,inlineThemeDisabled:n}=fe(e),a=F(()=>{var c,C;const{iconPlacement:w}=e;return w||((C=(c=o==null?void 0:o.value)===null||c===void 0?void 0:c.Dialog)===null||C===void 0?void 0:C.iconPlacement)||"left"});function s(c){const{onPositiveClick:C}=e;C&&C(c)}function f(c){const{onNegativeClick:C}=e;C&&C(c)}function h(){const{onClose:c}=e;c&&c()}const d=I("Dialog","-dialog",Uo,Ue,e,t),l=F(()=>{const{type:c}=e,C=a.value,{common:{cubicBezierEaseInOut:w},self:{fontSize:B,lineHeight:k,border:g,titleTextColor:x,textColor:v,color:R,closeBorderRadius:S,closeColorHover:i,closeColorPressed:u,closeIconColor:$,closeIconColorHover:T,closeIconColorPressed:K,closeIconSize:U,borderRadius:q,titleFontWeight:Q,titleFontSize:Z,padding:G,iconSize:J,actionSpace:ee,contentMargin:oe,closeSize:ne,[C==="top"?"iconMarginIconTop":"iconMargin"]:te,[C==="top"?"closeMarginIconTop":"closeMargin"]:re,[D("iconColor",c)]:ie}}=d.value;return{"--n-font-size":B,"--n-icon-color":ie,"--n-bezier":w,"--n-close-margin":re,"--n-icon-margin":te,"--n-icon-size":J,"--n-close-size":ne,"--n-close-icon-size":U,"--n-close-border-radius":S,"--n-close-color-hover":i,"--n-close-color-pressed":u,"--n-close-icon-color":$,"--n-close-icon-color-hover":T,"--n-close-icon-color-pressed":K,"--n-color":R,"--n-text-color":v,"--n-border-radius":q,"--n-padding":G,"--n-line-height":k,"--n-border":g,"--n-content-margin":oe,"--n-title-font-size":Z,"--n-title-font-weight":Q,"--n-title-text-color":x,"--n-action-space":ee}}),b=n?ge("dialog",F(()=>`${e.type[0]}${a.value[0]}`),l,e):void 0;return{mergedClsPrefix:t,mergedIconPlacement:a,mergedTheme:d,handlePositiveClick:s,handleNegativeClick:f,handleCloseClick:h,cssVars:n?void 0:l,themeClass:b==null?void 0:b.themeClass,onRender:b==null?void 0:b.onRender}},render(){var e;const{bordered:o,mergedIconPlacement:t,cssVars:n,closable:a,showIcon:s,title:f,content:h,action:d,negativeText:l,positiveText:b,positiveButtonProps:c,negativeButtonProps:C,handlePositiveClick:w,handleNegativeClick:B,mergedTheme:k,loading:g,type:x,mergedClsPrefix:v}=this;(e=this.onRender)===null||e===void 0||e.call(this);const R=s?r(Ae,{clsPrefix:v,class:`${v}-dialog__icon`},{default:()=>O(this.$slots.icon,i=>i||(this.icon?L(this.icon):qo[this.type]()))}):null,S=O(this.$slots.action,i=>i||b||l||d?r("div",{class:`${v}-dialog__action`},i||(d?[L(d)]:[this.negativeText&&r(ze,Object.assign({theme:k.peers.Button,themeOverrides:k.peerOverrides.Button,ghost:!0,size:"small",onClick:B},C),{default:()=>L(this.negativeText)}),this.positiveText&&r(ze,Object.assign({theme:k.peers.Button,themeOverrides:k.peerOverrides.Button,size:"small",type:x==="default"?"primary":x,disabled:g,loading:g,onClick:w},c),{default:()=>L(this.positiveText)})])):null);return r("div",{class:[`${v}-dialog`,this.themeClass,this.closable&&`${v}-dialog--closable`,`${v}-dialog--icon-${t}`,o&&`${v}-dialog--bordered`],style:n,role:"dialog"},a?r(Ye,{clsPrefix:v,class:`${v}-dialog__close`,onClick:this.handleCloseClick}):null,s&&t==="top"?r("div",{class:`${v}-dialog-icon-container`},R):null,r("div",{class:`${v}-dialog__title`},s&&t==="left"?R:null,ye(this.$slots.header,()=>[L(f)])),r("div",{class:[`${v}-dialog__content`,S?"":`${v}-dialog__content--last`]},ye(this.$slots.default,()=>[L(h)])),S)}}),Zo=e=>{const{modalColor:o,textColor2:t,boxShadow3:n}=e;return{color:o,textColor:t,boxShadow:n}},Go=He({name:"Modal",common:ue,peers:{Scrollbar:ao,Dialog:Ue,Card:Ke},self:Zo}),Jo=Go,Ce=Object.assign(Object.assign({},pe),be),en=he(Ce),on=N({name:"ModalBody",inheritAttrs:!1,props:Object.assign(Object.assign({show:{type:Boolean,required:!0},preset:String,displayDirective:{type:String,required:!0},trapFocus:{type:Boolean,default:!0},autoFocus:{type:Boolean,default:!0},blockScroll:Boolean},Ce),{renderMask:Function,onClickoutside:Function,onBeforeLeave:{type:Function,required:!0},onAfterLeave:{type:Function,required:!0},onPositiveClick:{type:Function,required:!0},onNegativeClick:{type:Function,required:!0},onClose:{type:Function,required:!0},onAfterEnter:Function,onEsc:Function}),setup(e){const o=P(null),t=P(null),n=P(e.show),a=P(null),s=P(null);le(X(e,"show"),g=>{g&&(n.value=!0)}),Lo(F(()=>e.blockScroll&&n.value));const f=Xe(Ve);function h(){if(f.transformOriginRef.value==="center")return"";const{value:g}=a,{value:x}=s;if(g===null||x===null)return"";if(t.value){const v=t.value.containerScrollTop;return`${g}px ${x+v}px`}return""}function d(g){if(f.transformOriginRef.value==="center")return;const x=f.getMousePosition();if(!x||!t.value)return;const v=t.value.containerScrollTop,{offsetLeft:R,offsetTop:S}=g;if(x){const i=x.y,u=x.x;a.value=-(R-u),s.value=-(S-i-v)}g.style.transformOrigin=h()}function l(g){Se(()=>{d(g)})}function b(g){g.style.transformOrigin=h(),e.onBeforeLeave()}function c(){n.value=!1,a.value=null,s.value=null,e.onAfterLeave()}function C(){const{onClose:g}=e;g&&g()}function w(){e.onNegativeClick()}function B(){e.onPositiveClick()}const k=P(null);return le(k,g=>{g&&Se(()=>{const x=g.el;x&&o.value!==x&&(o.value=x)})}),W(mo,o),W(co,null),W(uo,null),{mergedTheme:f.mergedThemeRef,appear:f.appearRef,isMounted:f.isMountedRef,mergedClsPrefix:f.mergedClsPrefixRef,bodyRef:o,scrollbarRef:t,displayed:n,childNodeRef:k,handlePositiveClick:B,handleNegativeClick:w,handleCloseClick:C,handleAfterLeave:c,handleBeforeLeave:b,handleEnter:l}},render(){const{$slots:e,$attrs:o,handleEnter:t,handleAfterLeave:n,handleBeforeLeave:a,preset:s,mergedClsPrefix:f}=this;let h=null;if(!s){if(h=fo(e),!h){Po("modal","default slot is empty");return}h=ko(h),h.props=wo({class:`${f}-modal`},o,h.props||{})}return this.displayDirective==="show"||this.displayed||this.show?se(r("div",{role:"none",class:`${f}-modal-body-wrapper`},r(go,{ref:"scrollbarRef",theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,contentClass:`${f}-modal-scroll-content`},{default:()=>{var d;return[(d=this.renderMask)===null||d===void 0?void 0:d.call(this),r(vo,{disabled:!this.trapFocus,active:this.show,onEsc:this.onEsc,autoFocus:this.autoFocus},{default:()=>{var l;return r(Ee,{name:"fade-in-scale-up-transition",appear:(l=this.appear)!==null&&l!==void 0?l:this.isMounted,onEnter:t,onAfterEnter:this.onAfterEnter,onAfterLeave:n,onBeforeLeave:a},{default:()=>{const b=[[xe,this.show]],{onClickoutside:c}=this;return c&&b.push([ho,this.onClickoutside,void 0,{capture:!0}]),se(this.preset==="confirm"||this.preset==="dialog"?r(Qo,Object.assign({},this.$attrs,{class:[`${f}-modal`,this.$attrs.class],ref:"bodyRef",theme:this.mergedTheme.peers.Dialog,themeOverrides:this.mergedTheme.peerOverrides.Dialog},ae(this.$props,Ko),{"aria-modal":"true"}),e):this.preset==="card"?r(Wo,Object.assign({},this.$attrs,{ref:"bodyRef",class:[`${f}-modal`,this.$attrs.class],theme:this.mergedTheme.peers.Card,themeOverrides:this.mergedTheme.peerOverrides.Card},ae(this.$props,Ao),{"aria-modal":"true",role:"dialog"}),e):this.childNodeRef=h,b)}})}})]}})),[[xe,this.displayDirective==="if"||this.displayed||this.show]]):null}}),nn=p([z("modal-container",`
 position: fixed;
 left: 0;
 top: 0;
 height: 0;
 width: 0;
 display: flex;
 `),z("modal-mask",`
 position: fixed;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 background-color: rgba(0, 0, 0, .4);
 `,[po({enterDuration:".25s",leaveDuration:".25s",enterCubicBezier:"var(--n-bezier-ease-out)",leaveCubicBezier:"var(--n-bezier-ease-out)"})]),z("modal-body-wrapper",`
 position: fixed;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 overflow: visible;
 `,[z("modal-scroll-content",`
 min-height: 100%;
 display: flex;
 position: relative;
 `)]),z("modal",`
 position: relative;
 align-self: center;
 color: var(--n-text-color);
 margin: auto;
 box-shadow: var(--n-box-shadow);
 `,[bo({duration:".25s",enterScale:".5"})])]),tn=Object.assign(Object.assign(Object.assign(Object.assign({},I.props),{show:Boolean,unstableShowMask:{type:Boolean,default:!0},maskClosable:{type:Boolean,default:!0},preset:String,to:[String,Object],displayDirective:{type:String,default:"if"},transformOrigin:{type:String,default:"mouse"},zIndex:Number,autoFocus:{type:Boolean,default:!0},trapFocus:{type:Boolean,default:!0},closeOnEsc:{type:Boolean,default:!0},blockScroll:{type:Boolean,default:!0}}),Ce),{onEsc:Function,"onUpdate:show":[Function,Array],onUpdateShow:[Function,Array],onAfterEnter:Function,onBeforeLeave:Function,onAfterLeave:Function,onClose:Function,onPositiveClick:Function,onNegativeClick:Function,onMaskClick:Function,internalDialog:Boolean,internalAppear:{type:Boolean,default:void 0},overlayStyle:[String,Object],onBeforeHide:Function,onAfterHide:Function,onHide:Function}),bn=N({name:"Modal",inheritAttrs:!1,props:tn,setup(e){const o=P(null),{mergedClsPrefixRef:t,namespaceRef:n,inlineThemeDisabled:a}=fe(e),s=I("Modal","-modal",nn,Jo,e,t),f=Fo(64),h=To(),d=no(),l=e.internalDialog?Xe(Ze,null):null,b=Mo();function c(i){const{onUpdateShow:u,"onUpdate:show":$,onHide:T}=e;u&&E(u,i),$&&E($,i),T&&!i&&T(i)}function C(){const{onClose:i}=e;i?Promise.resolve(i()).then(u=>{u!==!1&&c(!1)}):c(!1)}function w(){const{onPositiveClick:i}=e;i?Promise.resolve(i()).then(u=>{u!==!1&&c(!1)}):c(!1)}function B(){const{onNegativeClick:i}=e;i?Promise.resolve(i()).then(u=>{u!==!1&&c(!1)}):c(!1)}function k(){const{onBeforeLeave:i,onBeforeHide:u}=e;i&&E(i),u&&u()}function g(){const{onAfterLeave:i,onAfterHide:u}=e;i&&E(i),u&&u()}function x(i){var u;const{onMaskClick:$}=e;$&&$(i),e.maskClosable&&!((u=o.value)===null||u===void 0)&&u.contains(Bo(i))&&c(!1)}function v(i){var u;(u=e.onEsc)===null||u===void 0||u.call(e),e.show&&e.closeOnEsc&&$o(i)&&!b.value&&c(!1)}W(Ve,{getMousePosition:()=>{if(l){const{clickedRef:i,clickPositionRef:u}=l;if(i.value&&u.value)return u.value}return f.value?h.value:null},mergedClsPrefixRef:t,mergedThemeRef:s,isMountedRef:d,appearRef:X(e,"internalAppear"),transformOriginRef:X(e,"transformOrigin")});const R=F(()=>{const{common:{cubicBezierEaseOut:i},self:{boxShadow:u,color:$,textColor:T}}=s.value;return{"--n-bezier-ease-out":i,"--n-box-shadow":u,"--n-color":$,"--n-text-color":T}}),S=a?ge("theme-class",void 0,R,e):void 0;return{mergedClsPrefix:t,namespace:n,isMounted:d,containerRef:o,presetProps:F(()=>ae(e,en)),handleEsc:v,handleAfterLeave:g,handleClickoutside:x,handleBeforeLeave:k,doUpdateShow:c,handleNegativeClick:B,handlePositiveClick:w,handleCloseClick:C,cssVars:a?void 0:R,themeClass:S==null?void 0:S.themeClass,onRender:S==null?void 0:S.onRender}},render(){const{mergedClsPrefix:e}=this;return r(Co,{to:this.to,show:this.show},{default:()=>{var o;(o=this.onRender)===null||o===void 0||o.call(this);const{unstableShowMask:t}=this;return se(r("div",{role:"none",ref:"containerRef",class:[`${e}-modal-container`,this.themeClass,this.namespace],style:this.cssVars},r(on,Object.assign({style:this.overlayStyle},this.$attrs,{ref:"bodyWrapper",displayDirective:this.displayDirective,show:this.show,preset:this.preset,autoFocus:this.autoFocus,trapFocus:this.trapFocus,blockScroll:this.blockScroll},this.presetProps,{onEsc:this.handleEsc,onClose:this.handleCloseClick,onNegativeClick:this.handleNegativeClick,onPositiveClick:this.handlePositiveClick,onBeforeLeave:this.handleBeforeLeave,onAfterEnter:this.onAfterEnter,onAfterLeave:this.handleAfterLeave,onClickoutside:t?void 0:this.handleClickoutside,renderMask:t?()=>{var n;return r(Ee,{name:"fade-in-transition",key:"mask",appear:(n=this.internalAppear)!==null&&n!==void 0?n:this.isMounted},{default:()=>this.show?r("div",{"aria-hidden":!0,ref:"containerRef",class:`${e}-modal-mask`,onClick:this.handleClickoutside}):null})}:void 0}),this.$slots)),[[xo,{zIndex:this.zIndex,enabled:this.show}]])}})}});export{Qo as N,bn as _,Ko as a,To as b,Ye as c,be as d,Wo as e,L as r,Fo as u};
