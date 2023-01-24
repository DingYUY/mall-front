import{a as h,b as N,d as s,s as Bo,x as bo,c as Do,e as D,i as lo,g as fo,y as Fo,u as Io,f as Eo,h as Go,m as Ro,z as q}from"./light-f42f174c.js";import{c as Wo}from"./create-injection-key-b5917821.js";import{i as no,N as xo,u as _o,c as t}from"./icon-switch.cssr-a87b313c.js";import{u as ho,r as co,N as Oo,i as Mo}from"./FadeInExpandTransition-c7e27747.js";import{d as so,V as go,h as l,r as j,U as No,O as jo,i as Lo,c as X}from"./runtime-core.esm-bundler-36726079.js";function uo(o){return o.replace(/#|\(|\)|,|\s/g,"_")}const A=typeof document<"u"&&typeof window<"u",Ko=h([h("@keyframes loading-container-rotate",`
 to {
 -webkit-transform: rotate(360deg);
 transform: rotate(360deg);
 }
 `),h("@keyframes loading-layer-rotate",`
 12.5% {
 -webkit-transform: rotate(135deg);
 transform: rotate(135deg);
 }
 25% {
 -webkit-transform: rotate(270deg);
 transform: rotate(270deg);
 }
 37.5% {
 -webkit-transform: rotate(405deg);
 transform: rotate(405deg);
 }
 50% {
 -webkit-transform: rotate(540deg);
 transform: rotate(540deg);
 }
 62.5% {
 -webkit-transform: rotate(675deg);
 transform: rotate(675deg);
 }
 75% {
 -webkit-transform: rotate(810deg);
 transform: rotate(810deg);
 }
 87.5% {
 -webkit-transform: rotate(945deg);
 transform: rotate(945deg);
 }
 100% {
 -webkit-transform: rotate(1080deg);
 transform: rotate(1080deg);
 } 
 `),h("@keyframes loading-left-spin",`
 from {
 -webkit-transform: rotate(265deg);
 transform: rotate(265deg);
 }
 50% {
 -webkit-transform: rotate(130deg);
 transform: rotate(130deg);
 }
 to {
 -webkit-transform: rotate(265deg);
 transform: rotate(265deg);
 }
 `),h("@keyframes loading-right-spin",`
 from {
 -webkit-transform: rotate(-265deg);
 transform: rotate(-265deg);
 }
 50% {
 -webkit-transform: rotate(-130deg);
 transform: rotate(-130deg);
 }
 to {
 -webkit-transform: rotate(-265deg);
 transform: rotate(-265deg);
 }
 `),N("base-loading",`
 position: relative;
 line-height: 0;
 width: 1em;
 height: 1em;
 `,[s("transition-wrapper",`
 position: absolute;
 width: 100%;
 height: 100%;
 `,[no()]),s("container",`
 display: inline-flex;
 position: relative;
 direction: ltr;
 line-height: 0;
 animation: loading-container-rotate 1568.2352941176ms linear infinite;
 font-size: 0;
 letter-spacing: 0;
 white-space: nowrap;
 opacity: 1;
 width: 100%;
 height: 100%;
 `,[s("svg",`
 stroke: var(--n-text-color);
 fill: transparent;
 position: absolute;
 height: 100%;
 overflow: hidden;
 `),s("container-layer",`
 position: absolute;
 width: 100%;
 height: 100%;
 animation: loading-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;
 `,[s("container-layer-left",`
 display: inline-flex;
 position: relative;
 width: 50%;
 height: 100%;
 overflow: hidden;
 `,[s("svg",`
 animation: loading-left-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;
 width: 200%;
 `)]),s("container-layer-patch",`
 position: absolute;
 top: 0;
 left: 47.5%;
 box-sizing: border-box;
 width: 5%;
 height: 100%;
 overflow: hidden;
 `,[s("svg",`
 left: -900%;
 width: 2000%;
 transform: rotate(180deg);
 `)]),s("container-layer-right",`
 display: inline-flex;
 position: relative;
 width: 50%;
 height: 100%;
 overflow: hidden;
 `,[s("svg",`
 animation: loading-right-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;
 left: -100%;
 width: 200%;
 `)])])]),s("placeholder",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,[no({left:"50%",top:"50%",originalTransform:"translateX(-50%) translateY(-50%)"})])])]),Vo={strokeWidth:{type:Number,default:28},stroke:{type:String,default:void 0}},Qo=so({name:"BaseLoading",props:Object.assign({clsPrefix:{type:String,required:!0},show:{type:Boolean,default:!0},scale:{type:Number,default:1},radius:{type:Number,default:100}},Vo),setup(o){ho("-base-loading",Ko,go(o,"clsPrefix"))},render(){const{clsPrefix:o,radius:d,strokeWidth:x,stroke:u,scale:C}=this,g=d/C;return l("div",{class:`${o}-base-loading`,role:"img","aria-label":"loading"},l(xo,null,{default:()=>this.show?l("div",{key:"icon",class:`${o}-base-loading__transition-wrapper`},l("div",{class:`${o}-base-loading__container`},l("div",{class:`${o}-base-loading__container-layer`},l("div",{class:`${o}-base-loading__container-layer-left`},l("svg",{class:`${o}-base-loading__svg`,viewBox:`0 0 ${2*g} ${2*g}`,xmlns:"http://www.w3.org/2000/svg",style:{color:u}},l("circle",{fill:"none",stroke:"currentColor","stroke-width":x,"stroke-linecap":"round",cx:g,cy:g,r:d-x/2,"stroke-dasharray":4.91*d,"stroke-dashoffset":2.46*d}))),l("div",{class:`${o}-base-loading__container-layer-patch`},l("svg",{class:`${o}-base-loading__svg`,viewBox:`0 0 ${2*g} ${2*g}`,xmlns:"http://www.w3.org/2000/svg",style:{color:u}},l("circle",{fill:"none",stroke:"currentColor","stroke-width":x,"stroke-linecap":"round",cx:g,cy:g,r:d-x/2,"stroke-dasharray":4.91*d,"stroke-dashoffset":2.46*d}))),l("div",{class:`${o}-base-loading__container-layer-right`},l("svg",{class:`${o}-base-loading__svg`,viewBox:`0 0 ${2*g} ${2*g}`,xmlns:"http://www.w3.org/2000/svg",style:{color:u}},l("circle",{fill:"none",stroke:"currentColor","stroke-width":x,"stroke-linecap":"round",cx:g,cy:g,r:d-x/2,"stroke-dasharray":4.91*d,"stroke-dashoffset":2.46*d})))))):l("div",{key:"placeholder",class:`${o}-base-loading__placeholder`},this.$slots)}))}}),qo=N("base-wave",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
`),Xo=so({name:"BaseWave",props:{clsPrefix:{type:String,required:!0}},setup(o){ho("-base-wave",qo,go(o,"clsPrefix"));const d=j(null),x=j(!1);let u=null;return No(()=>{u!==null&&window.clearTimeout(u)}),{active:x,selfRef:d,play(){u!==null&&(window.clearTimeout(u),x.value=!1,u=null),jo(()=>{var C;(C=d.value)===null||C===void 0||C.offsetHeight,x.value=!0,u=window.setTimeout(()=>{x.value=!1,u=null},1e3)})}}},render(){const{clsPrefix:o}=this;return l("div",{ref:"selfRef","aria-hidden":!0,class:[`${o}-base-wave`,this.active&&`${o}-base-wave--active`]})}}),{cubicBezierEaseInOut:G}=Bo;function Yo({duration:o=".2s",delay:d=".1s"}={}){return[h("&.fade-in-width-expand-transition-leave-from, &.fade-in-width-expand-transition-enter-to",{opacity:1}),h("&.fade-in-width-expand-transition-leave-to, &.fade-in-width-expand-transition-enter-from",`
 opacity: 0!important;
 margin-left: 0!important;
 margin-right: 0!important;
 `),h("&.fade-in-width-expand-transition-leave-active",`
 overflow: hidden;
 transition:
 opacity ${o} ${G},
 max-width ${o} ${G} ${d},
 margin-left ${o} ${G} ${d},
 margin-right ${o} ${G} ${d};
 `),h("&.fade-in-width-expand-transition-enter-active",`
 overflow: hidden;
 transition:
 opacity ${o} ${G} ${d},
 max-width ${o} ${G},
 margin-left ${o} ${G},
 margin-right ${o} ${G};
 `)]}const Ao=A&&"chrome"in window;A&&navigator.userAgent.includes("Firefox");const Uo=A&&navigator.userAgent.includes("Safari")&&!Ao;function W(o){return bo(o,[255,255,255,.16])}function Y(o){return bo(o,[0,0,0,.12])}const Jo=Wo("n-button-group"),Zo={paddingTiny:"0 6px",paddingSmall:"0 10px",paddingMedium:"0 14px",paddingLarge:"0 18px",paddingRoundTiny:"0 10px",paddingRoundSmall:"0 14px",paddingRoundMedium:"0 18px",paddingRoundLarge:"0 22px",iconMarginTiny:"6px",iconMarginSmall:"6px",iconMarginMedium:"6px",iconMarginLarge:"6px",iconSizeTiny:"14px",iconSizeSmall:"18px",iconSizeMedium:"18px",iconSizeLarge:"20px",rippleDuration:".6s"},oe=o=>{const{heightTiny:d,heightSmall:x,heightMedium:u,heightLarge:C,borderRadius:g,fontSizeTiny:O,fontSizeSmall:M,fontSizeMedium:U,fontSizeLarge:J,opacityDisabled:Z,textColor2:P,textColor3:oo,primaryColorHover:p,primaryColorPressed:S,borderColor:L,primaryColor:H,baseColor:i,infoColor:B,infoColorHover:w,infoColorPressed:r,successColor:a,successColorHover:m,successColorPressed:e,warningColor:T,warningColorHover:$,warningColorPressed:I,errorColor:k,errorColorHover:v,errorColorPressed:E,fontWeight:F,buttonColor2:_,buttonColor2Hover:z,buttonColor2Pressed:c,fontWeightStrong:K}=o;return Object.assign(Object.assign({},Zo),{heightTiny:d,heightSmall:x,heightMedium:u,heightLarge:C,borderRadiusTiny:g,borderRadiusSmall:g,borderRadiusMedium:g,borderRadiusLarge:g,fontSizeTiny:O,fontSizeSmall:M,fontSizeMedium:U,fontSizeLarge:J,opacityDisabled:Z,colorOpacitySecondary:"0.16",colorOpacitySecondaryHover:"0.22",colorOpacitySecondaryPressed:"0.28",colorSecondary:_,colorSecondaryHover:z,colorSecondaryPressed:c,colorTertiary:_,colorTertiaryHover:z,colorTertiaryPressed:c,colorQuaternary:"#0000",colorQuaternaryHover:z,colorQuaternaryPressed:c,color:"#0000",colorHover:"#0000",colorPressed:"#0000",colorFocus:"#0000",colorDisabled:"#0000",textColor:P,textColorTertiary:oo,textColorHover:p,textColorPressed:S,textColorFocus:p,textColorDisabled:P,textColorText:P,textColorTextHover:p,textColorTextPressed:S,textColorTextFocus:p,textColorTextDisabled:P,textColorGhost:P,textColorGhostHover:p,textColorGhostPressed:S,textColorGhostFocus:p,textColorGhostDisabled:P,border:`1px solid ${L}`,borderHover:`1px solid ${p}`,borderPressed:`1px solid ${S}`,borderFocus:`1px solid ${p}`,borderDisabled:`1px solid ${L}`,rippleColor:H,colorPrimary:H,colorHoverPrimary:p,colorPressedPrimary:S,colorFocusPrimary:p,colorDisabledPrimary:H,textColorPrimary:i,textColorHoverPrimary:i,textColorPressedPrimary:i,textColorFocusPrimary:i,textColorDisabledPrimary:i,textColorTextPrimary:H,textColorTextHoverPrimary:p,textColorTextPressedPrimary:S,textColorTextFocusPrimary:p,textColorTextDisabledPrimary:P,textColorGhostPrimary:H,textColorGhostHoverPrimary:p,textColorGhostPressedPrimary:S,textColorGhostFocusPrimary:p,textColorGhostDisabledPrimary:H,borderPrimary:`1px solid ${H}`,borderHoverPrimary:`1px solid ${p}`,borderPressedPrimary:`1px solid ${S}`,borderFocusPrimary:`1px solid ${p}`,borderDisabledPrimary:`1px solid ${H}`,rippleColorPrimary:H,colorInfo:B,colorHoverInfo:w,colorPressedInfo:r,colorFocusInfo:w,colorDisabledInfo:B,textColorInfo:i,textColorHoverInfo:i,textColorPressedInfo:i,textColorFocusInfo:i,textColorDisabledInfo:i,textColorTextInfo:B,textColorTextHoverInfo:w,textColorTextPressedInfo:r,textColorTextFocusInfo:w,textColorTextDisabledInfo:P,textColorGhostInfo:B,textColorGhostHoverInfo:w,textColorGhostPressedInfo:r,textColorGhostFocusInfo:w,textColorGhostDisabledInfo:B,borderInfo:`1px solid ${B}`,borderHoverInfo:`1px solid ${w}`,borderPressedInfo:`1px solid ${r}`,borderFocusInfo:`1px solid ${w}`,borderDisabledInfo:`1px solid ${B}`,rippleColorInfo:B,colorSuccess:a,colorHoverSuccess:m,colorPressedSuccess:e,colorFocusSuccess:m,colorDisabledSuccess:a,textColorSuccess:i,textColorHoverSuccess:i,textColorPressedSuccess:i,textColorFocusSuccess:i,textColorDisabledSuccess:i,textColorTextSuccess:a,textColorTextHoverSuccess:m,textColorTextPressedSuccess:e,textColorTextFocusSuccess:m,textColorTextDisabledSuccess:P,textColorGhostSuccess:a,textColorGhostHoverSuccess:m,textColorGhostPressedSuccess:e,textColorGhostFocusSuccess:m,textColorGhostDisabledSuccess:a,borderSuccess:`1px solid ${a}`,borderHoverSuccess:`1px solid ${m}`,borderPressedSuccess:`1px solid ${e}`,borderFocusSuccess:`1px solid ${m}`,borderDisabledSuccess:`1px solid ${a}`,rippleColorSuccess:a,colorWarning:T,colorHoverWarning:$,colorPressedWarning:I,colorFocusWarning:$,colorDisabledWarning:T,textColorWarning:i,textColorHoverWarning:i,textColorPressedWarning:i,textColorFocusWarning:i,textColorDisabledWarning:i,textColorTextWarning:T,textColorTextHoverWarning:$,textColorTextPressedWarning:I,textColorTextFocusWarning:$,textColorTextDisabledWarning:P,textColorGhostWarning:T,textColorGhostHoverWarning:$,textColorGhostPressedWarning:I,textColorGhostFocusWarning:$,textColorGhostDisabledWarning:T,borderWarning:`1px solid ${T}`,borderHoverWarning:`1px solid ${$}`,borderPressedWarning:`1px solid ${I}`,borderFocusWarning:`1px solid ${$}`,borderDisabledWarning:`1px solid ${T}`,rippleColorWarning:T,colorError:k,colorHoverError:v,colorPressedError:E,colorFocusError:v,colorDisabledError:k,textColorError:i,textColorHoverError:i,textColorPressedError:i,textColorFocusError:i,textColorDisabledError:i,textColorTextError:k,textColorTextHoverError:v,textColorTextPressedError:E,textColorTextFocusError:v,textColorTextDisabledError:P,textColorGhostError:k,textColorGhostHoverError:v,textColorGhostPressedError:E,textColorGhostFocusError:v,textColorGhostDisabledError:k,borderError:`1px solid ${k}`,borderHoverError:`1px solid ${v}`,borderPressedError:`1px solid ${E}`,borderFocusError:`1px solid ${v}`,borderDisabledError:`1px solid ${k}`,rippleColorError:k,waveOpacity:"0.6",fontWeight:F,fontWeightStrong:K})},ee={name:"Button",common:Do,self:oe},re=ee,te=h([N("button",`
 margin: 0;
 font-weight: var(--n-font-weight);
 line-height: 1;
 font-family: inherit;
 padding: var(--n-padding);
 height: var(--n-height);
 font-size: var(--n-font-size);
 border-radius: var(--n-border-radius);
 color: var(--n-text-color);
 background-color: var(--n-color);
 width: var(--n-width);
 white-space: nowrap;
 outline: none;
 position: relative;
 z-index: auto;
 border: none;
 display: inline-flex;
 flex-wrap: nowrap;
 flex-shrink: 0;
 align-items: center;
 justify-content: center;
 user-select: none;
 -webkit-user-select: none;
 text-align: center;
 cursor: pointer;
 text-decoration: none;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[D("color",[s("border",{borderColor:"var(--n-border-color)"}),D("disabled",[s("border",{borderColor:"var(--n-border-color-disabled)"})]),lo("disabled",[h("&:focus",[s("state-border",{borderColor:"var(--n-border-color-focus)"})]),h("&:hover",[s("state-border",{borderColor:"var(--n-border-color-hover)"})]),h("&:active",[s("state-border",{borderColor:"var(--n-border-color-pressed)"})]),D("pressed",[s("state-border",{borderColor:"var(--n-border-color-pressed)"})])])]),D("disabled",{backgroundColor:"var(--n-color-disabled)",color:"var(--n-text-color-disabled)"},[s("border",{border:"var(--n-border-disabled)"})]),lo("disabled",[h("&:focus",{backgroundColor:"var(--n-color-focus)",color:"var(--n-text-color-focus)"},[s("state-border",{border:"var(--n-border-focus)"})]),h("&:hover",{backgroundColor:"var(--n-color-hover)",color:"var(--n-text-color-hover)"},[s("state-border",{border:"var(--n-border-hover)"})]),h("&:active",{backgroundColor:"var(--n-color-pressed)",color:"var(--n-text-color-pressed)"},[s("state-border",{border:"var(--n-border-pressed)"})]),D("pressed",{backgroundColor:"var(--n-color-pressed)",color:"var(--n-text-color-pressed)"},[s("state-border",{border:"var(--n-border-pressed)"})])]),D("loading","cursor: wait;"),N("base-wave",`
 pointer-events: none;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 animation-iteration-count: 1;
 animation-duration: var(--n-ripple-duration);
 animation-timing-function: var(--n-bezier-ease-out), var(--n-bezier-ease-out);
 `,[D("active",{zIndex:1,animationName:"button-wave-spread, button-wave-opacity"})]),A&&"MozBoxSizing"in document.createElement("div").style?h("&::moz-focus-inner",{border:0}):null,s("border, state-border",`
 position: absolute;
 left: 0;
 top: 0;
 right: 0;
 bottom: 0;
 border-radius: inherit;
 transition: border-color .3s var(--n-bezier);
 pointer-events: none;
 `),s("border",{border:"var(--n-border)"}),s("state-border",{border:"var(--n-border)",borderColor:"#0000",zIndex:1}),s("icon",`
 margin: var(--n-icon-margin);
 margin-left: 0;
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 max-width: var(--n-icon-size);
 font-size: var(--n-icon-size);
 position: relative;
 flex-shrink: 0;
 `,[N("icon-slot",`
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 position: absolute;
 left: 0;
 top: 50%;
 transform: translateY(-50%);
 display: flex;
 align-items: center;
 justify-content: center;
 `,[no({top:"50%",originalTransform:"translateY(-50%)"})]),Yo()]),s("content",`
 display: flex;
 align-items: center;
 flex-wrap: nowrap;
 min-width: 0;
 `,[h("~",[s("icon",{margin:"var(--n-icon-margin)",marginRight:0})])]),D("block",`
 display: flex;
 width: 100%;
 `),D("dashed",[s("border, state-border",{borderStyle:"dashed !important"})]),D("disabled",{cursor:"not-allowed",opacity:"var(--n-opacity-disabled)"})]),h("@keyframes button-wave-spread",{from:{boxShadow:"0 0 0.5px 0 var(--n-ripple-color)"},to:{boxShadow:"0 0 0.5px 4.5px var(--n-ripple-color)"}}),h("@keyframes button-wave-opacity",{from:{opacity:"var(--n-wave-opacity)"},to:{opacity:0}})]),ne=Object.assign(Object.assign({},fo.props),{color:String,textColor:String,text:Boolean,block:Boolean,loading:Boolean,disabled:Boolean,circle:Boolean,size:String,ghost:Boolean,round:Boolean,secondary:Boolean,tertiary:Boolean,quaternary:Boolean,strong:Boolean,focusable:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},tag:{type:String,default:"button"},type:{type:String,default:"default"},dashed:Boolean,renderIcon:Function,iconPlacement:{type:String,default:"left"},attrType:{type:String,default:"button"},bordered:{type:Boolean,default:!0},onClick:[Function,Array],nativeFocusBehavior:{type:Boolean,default:!Uo}}),po=so({name:"Button",props:ne,setup(o){const d=j(null),x=j(null),u=j(!1),C=Fo(()=>!o.quaternary&&!o.tertiary&&!o.secondary&&!o.text&&(!o.color||o.ghost||o.dashed)&&o.bordered),g=Lo(Jo,{}),{mergedSizeRef:O}=_o({},{defaultSize:"medium",mergedSize:r=>{const{size:a}=o;if(a)return a;const{size:m}=g;if(m)return m;const{mergedSize:e}=r||{};return e?e.value:"medium"}}),M=X(()=>o.focusable&&!o.disabled),U=r=>{var a;M.value||r.preventDefault(),!o.nativeFocusBehavior&&(r.preventDefault(),!o.disabled&&M.value&&((a=d.value)===null||a===void 0||a.focus({preventScroll:!0})))},J=r=>{var a;if(!o.disabled&&!o.loading){const{onClick:m}=o;m&&Ro(m,r),o.text||(a=x.value)===null||a===void 0||a.play()}},Z=r=>{switch(r.key){case"Enter":if(!o.keyboard)return;u.value=!1}},P=r=>{switch(r.key){case"Enter":if(!o.keyboard||o.loading){r.preventDefault();return}u.value=!0}},oo=()=>{u.value=!1},{inlineThemeDisabled:p,mergedClsPrefixRef:S,mergedRtlRef:L}=Io(o),H=fo("Button","-button",te,re,o,S),i=Eo("Button",L,S),B=X(()=>{const r=H.value,{common:{cubicBezierEaseInOut:a,cubicBezierEaseOut:m},self:e}=r,{rippleDuration:T,opacityDisabled:$,fontWeight:I,fontWeightStrong:k}=e,v=O.value,{dashed:E,type:F,ghost:_,text:z,color:c,round:K,circle:eo,textColor:R,secondary:vo,tertiary:io,quaternary:mo,strong:yo}=o,Co={"font-weight":yo?k:I};let b={"--n-color":"initial","--n-color-hover":"initial","--n-color-pressed":"initial","--n-color-focus":"initial","--n-color-disabled":"initial","--n-ripple-color":"initial","--n-text-color":"initial","--n-text-color-hover":"initial","--n-text-color-pressed":"initial","--n-text-color-focus":"initial","--n-text-color-disabled":"initial"};const V=F==="tertiary",ao=F==="default",n=V?"default":F;if(z){const f=R||c;b={"--n-color":"#0000","--n-color-hover":"#0000","--n-color-pressed":"#0000","--n-color-focus":"#0000","--n-color-disabled":"#0000","--n-ripple-color":"#0000","--n-text-color":f||e[t("textColorText",n)],"--n-text-color-hover":f?W(f):e[t("textColorTextHover",n)],"--n-text-color-pressed":f?Y(f):e[t("textColorTextPressed",n)],"--n-text-color-focus":f?W(f):e[t("textColorTextHover",n)],"--n-text-color-disabled":f||e[t("textColorTextDisabled",n)]}}else if(_||E){const f=R||c;b={"--n-color":"#0000","--n-color-hover":"#0000","--n-color-pressed":"#0000","--n-color-focus":"#0000","--n-color-disabled":"#0000","--n-ripple-color":c||e[t("rippleColor",n)],"--n-text-color":f||e[t("textColorGhost",n)],"--n-text-color-hover":f?W(f):e[t("textColorGhostHover",n)],"--n-text-color-pressed":f?Y(f):e[t("textColorGhostPressed",n)],"--n-text-color-focus":f?W(f):e[t("textColorGhostHover",n)],"--n-text-color-disabled":f||e[t("textColorGhostDisabled",n)]}}else if(vo){const f=ao?e.textColor:V?e.textColorTertiary:e[t("color",n)],y=c||f,Q=F!=="default"&&F!=="tertiary";b={"--n-color":Q?q(y,{alpha:Number(e.colorOpacitySecondary)}):e.colorSecondary,"--n-color-hover":Q?q(y,{alpha:Number(e.colorOpacitySecondaryHover)}):e.colorSecondaryHover,"--n-color-pressed":Q?q(y,{alpha:Number(e.colorOpacitySecondaryPressed)}):e.colorSecondaryPressed,"--n-color-focus":Q?q(y,{alpha:Number(e.colorOpacitySecondaryHover)}):e.colorSecondaryHover,"--n-color-disabled":e.colorSecondary,"--n-ripple-color":"#0000","--n-text-color":y,"--n-text-color-hover":y,"--n-text-color-pressed":y,"--n-text-color-focus":y,"--n-text-color-disabled":y}}else if(io||mo){const f=ao?e.textColor:V?e.textColorTertiary:e[t("color",n)],y=c||f;io?(b["--n-color"]=e.colorTertiary,b["--n-color-hover"]=e.colorTertiaryHover,b["--n-color-pressed"]=e.colorTertiaryPressed,b["--n-color-focus"]=e.colorSecondaryHover,b["--n-color-disabled"]=e.colorTertiary):(b["--n-color"]=e.colorQuaternary,b["--n-color-hover"]=e.colorQuaternaryHover,b["--n-color-pressed"]=e.colorQuaternaryPressed,b["--n-color-focus"]=e.colorQuaternaryHover,b["--n-color-disabled"]=e.colorQuaternary),b["--n-ripple-color"]="#0000",b["--n-text-color"]=y,b["--n-text-color-hover"]=y,b["--n-text-color-pressed"]=y,b["--n-text-color-focus"]=y,b["--n-text-color-disabled"]=y}else b={"--n-color":c||e[t("color",n)],"--n-color-hover":c?W(c):e[t("colorHover",n)],"--n-color-pressed":c?Y(c):e[t("colorPressed",n)],"--n-color-focus":c?W(c):e[t("colorFocus",n)],"--n-color-disabled":c||e[t("colorDisabled",n)],"--n-ripple-color":c||e[t("rippleColor",n)],"--n-text-color":R||(c?e.textColorPrimary:V?e.textColorTertiary:e[t("textColor",n)]),"--n-text-color-hover":R||(c?e.textColorHoverPrimary:e[t("textColorHover",n)]),"--n-text-color-pressed":R||(c?e.textColorPressedPrimary:e[t("textColorPressed",n)]),"--n-text-color-focus":R||(c?e.textColorFocusPrimary:e[t("textColorFocus",n)]),"--n-text-color-disabled":R||(c?e.textColorDisabledPrimary:e[t("textColorDisabled",n)])};let ro={"--n-border":"initial","--n-border-hover":"initial","--n-border-pressed":"initial","--n-border-focus":"initial","--n-border-disabled":"initial"};z?ro={"--n-border":"none","--n-border-hover":"none","--n-border-pressed":"none","--n-border-focus":"none","--n-border-disabled":"none"}:ro={"--n-border":e[t("border",n)],"--n-border-hover":e[t("borderHover",n)],"--n-border-pressed":e[t("borderPressed",n)],"--n-border-focus":e[t("borderFocus",n)],"--n-border-disabled":e[t("borderDisabled",n)]};const{[t("height",v)]:to,[t("fontSize",v)]:wo,[t("padding",v)]:Po,[t("paddingRound",v)]:$o,[t("iconSize",v)]:So,[t("borderRadius",v)]:To,[t("iconMargin",v)]:ko,waveOpacity:zo}=e,Ho={"--n-width":eo&&!z?to:"initial","--n-height":z?"initial":to,"--n-font-size":wo,"--n-padding":eo||z?"initial":K?$o:Po,"--n-icon-size":So,"--n-icon-margin":ko,"--n-border-radius":z?"initial":eo||K?to:To};return Object.assign(Object.assign(Object.assign(Object.assign({"--n-bezier":a,"--n-bezier-ease-out":m,"--n-ripple-duration":T,"--n-opacity-disabled":$,"--n-wave-opacity":zo},Co),b),ro),Ho)}),w=p?Go("button",X(()=>{let r="";const{dashed:a,type:m,ghost:e,text:T,color:$,round:I,circle:k,textColor:v,secondary:E,tertiary:F,quaternary:_,strong:z}=o;a&&(r+="a"),e&&(r+="b"),T&&(r+="c"),I&&(r+="d"),k&&(r+="e"),E&&(r+="f"),F&&(r+="g"),_&&(r+="h"),z&&(r+="i"),$&&(r+="j"+uo($)),v&&(r+="k"+uo(v));const{value:c}=O;return r+="l"+c[0],r+="m"+m[0],r}),B,o):void 0;return{selfElRef:d,waveElRef:x,mergedClsPrefix:S,mergedFocusable:M,mergedSize:O,showBorder:C,enterPressed:u,rtlEnabled:i,handleMousedown:U,handleKeydown:P,handleBlur:oo,handleKeyup:Z,handleClick:J,customColorCssVars:X(()=>{const{color:r}=o;if(!r)return null;const a=W(r);return{"--n-border-color":r,"--n-border-color-hover":a,"--n-border-color-pressed":Y(r),"--n-border-color-focus":a,"--n-border-color-disabled":r}}),cssVars:p?void 0:B,themeClass:w==null?void 0:w.themeClass,onRender:w==null?void 0:w.onRender}},render(){const{mergedClsPrefix:o,tag:d,onRender:x}=this;x==null||x();const u=co(this.$slots.default,C=>C&&l("span",{class:`${o}-button__content`},C));return l(d,{ref:"selfElRef",class:[this.themeClass,`${o}-button`,`${o}-button--${this.type}-type`,`${o}-button--${this.mergedSize}-type`,this.rtlEnabled&&`${o}-button--rtl`,this.disabled&&`${o}-button--disabled`,this.block&&`${o}-button--block`,this.enterPressed&&`${o}-button--pressed`,!this.text&&this.dashed&&`${o}-button--dashed`,this.color&&`${o}-button--color`,this.secondary&&`${o}-button--secondary`,this.loading&&`${o}-button--loading`,this.ghost&&`${o}-button--ghost`],tabindex:this.mergedFocusable?0:-1,type:this.attrType,style:this.cssVars,disabled:this.disabled,onClick:this.handleClick,onBlur:this.handleBlur,onMousedown:this.handleMousedown,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},this.iconPlacement==="right"&&u,l(Oo,{width:!0},{default:()=>co(this.$slots.icon,C=>(this.loading||this.renderIcon||C)&&l("span",{class:`${o}-button__icon`,style:{margin:Mo(this.$slots.default)?"0":""}},l(xo,null,{default:()=>this.loading?l(Qo,{clsPrefix:o,key:"loading",class:`${o}-icon-slot`,strokeWidth:20}):l("div",{key:"icon",class:`${o}-icon-slot`,role:"none"},this.renderIcon?this.renderIcon():C)})))}),this.iconPlacement==="left"&&u,this.text?null:l(Xo,{ref:"waveElRef",clsPrefix:o}),this.showBorder?l("div",{"aria-hidden":!0,class:`${o}-button__border`,style:this.customColorCssVars}):null,this.showBorder?l("div",{"aria-hidden":!0,class:`${o}-button__state-border`,style:this.customColorCssVars}):null)}}),ce=po,ue=po;export{Qo as N,ue as X,ce as _,Uo as a,re as b,Jo as c,A as i};
