import{H as U,J as D,ak as V,r as R,q as E,P as K,ad as _,W as L,E as W,an as $,L as B,a5 as C,ai as s,K as S,O as N,z as G,D as A,V as H,bj as q,X as J,A as w,b2 as X,aa as F}from"./index-953b23c6.js";import{u as Y}from"./use-merged-state-b9c9e241.js";const Q={radioSizeSmall:"14px",radioSizeMedium:"16px",radioSizeLarge:"18px",labelPadding:"0 8px",labelFontWeight:"400"},Z=o=>{const{borderColor:e,primaryColor:a,baseColor:r,textColorDisabled:d,inputColorDisabled:g,textColor2:t,opacityDisabled:c,borderRadius:i,fontSizeSmall:b,fontSizeMedium:h,fontSizeLarge:v,heightSmall:u,heightMedium:m,heightLarge:x,lineHeight:p}=o;return Object.assign(Object.assign({},Q),{labelLineHeight:p,buttonHeightSmall:u,buttonHeightMedium:m,buttonHeightLarge:x,fontSizeSmall:b,fontSizeMedium:h,fontSizeLarge:v,boxShadow:`inset 0 0 0 1px ${e}`,boxShadowActive:`inset 0 0 0 1px ${a}`,boxShadowFocus:`inset 0 0 0 1px ${a}, 0 0 0 2px ${D(a,{alpha:.2})}`,boxShadowHover:`inset 0 0 0 1px ${a}`,boxShadowDisabled:`inset 0 0 0 1px ${e}`,color:r,colorDisabled:g,colorActive:"#0000",textColor:t,textColorDisabled:d,dotColorActive:a,dotColorDisabled:e,buttonBorderColor:e,buttonBorderColorActive:a,buttonBorderColorHover:e,buttonColor:r,buttonColorActive:r,buttonTextColor:t,buttonTextColorActive:a,buttonTextColorHover:a,opacityDisabled:c,buttonBoxShadowFocus:`inset 0 0 0 1px ${a}, 0 0 0 2px ${D(a,{alpha:.3})}`,buttonBoxShadowHover:"inset 0 0 0 1px #0000",buttonBoxShadow:"inset 0 0 0 1px #0000",buttonBorderRadius:i})},ee={name:"Radio",common:U,self:Z},oe=ee,ae={name:String,value:{type:[String,Number,Boolean],default:"on"},checked:{type:Boolean,default:void 0},defaultChecked:Boolean,disabled:{type:Boolean,default:void 0},label:String,size:String,onUpdateChecked:[Function,Array],"onUpdate:checked":[Function,Array],checkedValue:{type:Boolean,default:void 0}},te=W("n-radio-group");function ne(o){const e=V(o,{mergedSize(n){const{size:l}=o;if(l!==void 0)return l;if(t){const{mergedSizeRef:{value:f}}=t;if(f!==void 0)return f}return n?n.mergedSize.value:"medium"},mergedDisabled(n){return!!(o.disabled||t!=null&&t.disabledRef.value||n!=null&&n.disabled.value)}}),{mergedSizeRef:a,mergedDisabledRef:r}=e,d=R(null),g=R(null),t=E(te,null),c=R(o.defaultChecked),i=K(o,"checked"),b=Y(i,c),h=_(()=>t?t.valueRef.value===o.value:b.value),v=_(()=>{const{name:n}=o;if(n!==void 0)return n;if(t)return t.nameRef.value}),u=R(!1);function m(){if(t){const{doUpdateValue:n}=t,{value:l}=o;$(n,l)}else{const{onUpdateChecked:n,"onUpdate:checked":l}=o,{nTriggerFormInput:f,nTriggerFormChange:y}=e;n&&$(n,!0),l&&$(l,!0),f(),y(),c.value=!0}}function x(){r.value||h.value||m()}function p(){x()}function k(){u.value=!1}function z(){u.value=!0}return{mergedClsPrefix:t?t.mergedClsPrefixRef:L(o).mergedClsPrefixRef,inputRef:d,labelRef:g,mergedName:v,mergedDisabled:r,uncontrolledChecked:c,renderSafeChecked:h,focus:u,mergedSize:a,handleRadioInputChange:p,handleRadioInputBlur:k,handleRadioInputFocus:z}}const re=B("radio",`
 line-height: var(--n-label-line-height);
 outline: none;
 position: relative;
 user-select: none;
 -webkit-user-select: none;
 display: inline-flex;
 align-items: flex-start;
 flex-wrap: nowrap;
 font-size: var(--n-font-size);
 word-break: break-word;
`,[C("checked",[s("dot",`
 background-color: var(--n-color-active);
 `)]),s("dot-wrapper",`
 position: relative;
 flex-shrink: 0;
 flex-grow: 0;
 width: var(--n-radio-size);
 `),B("radio-input",`
 position: absolute;
 border: 0;
 border-radius: inherit;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 opacity: 0;
 z-index: 1;
 cursor: pointer;
 `),s("dot",`
 position: absolute;
 top: 50%;
 left: 0;
 transform: translateY(-50%);
 height: var(--n-radio-size);
 width: var(--n-radio-size);
 background: var(--n-color);
 box-shadow: var(--n-box-shadow);
 border-radius: 50%;
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 `,[S("&::before",`
 content: "";
 opacity: 0;
 position: absolute;
 left: 4px;
 top: 4px;
 height: calc(100% - 8px);
 width: calc(100% - 8px);
 border-radius: 50%;
 transform: scale(.8);
 background: var(--n-dot-color-active);
 transition: 
 opacity .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 transform .3s var(--n-bezier);
 `),C("checked",{boxShadow:"var(--n-box-shadow-active)"},[S("&::before",`
 opacity: 1;
 transform: scale(1);
 `)])]),s("label",`
 color: var(--n-text-color);
 padding: var(--n-label-padding);
 font-weight: var(--n-label-font-weight);
 display: inline-block;
 transition: color .3s var(--n-bezier);
 `),N("disabled",`
 cursor: pointer;
 `,[S("&:hover",[s("dot",{boxShadow:"var(--n-box-shadow-hover)"})]),C("focus",[S("&:not(:active)",[s("dot",{boxShadow:"var(--n-box-shadow-focus)"})])])]),C("disabled",`
 cursor: not-allowed;
 `,[s("dot",{boxShadow:"var(--n-box-shadow-disabled)",backgroundColor:"var(--n-color-disabled)"},[S("&::before",{backgroundColor:"var(--n-dot-color-disabled)"}),C("checked",`
 opacity: 1;
 `)]),s("label",{color:"var(--n-text-color-disabled)"}),B("radio-input",`
 cursor: not-allowed;
 `)])]),le=G({name:"Radio",props:Object.assign(Object.assign({},A.props),ae),setup(o){const e=ne(o),a=A("Radio","-radio",re,oe,o,e.mergedClsPrefix),r=H(()=>{const{mergedSize:{value:b}}=e,{common:{cubicBezierEaseInOut:h},self:{boxShadow:v,boxShadowActive:u,boxShadowDisabled:m,boxShadowFocus:x,boxShadowHover:p,color:k,colorDisabled:z,colorActive:n,textColor:l,textColorDisabled:f,dotColorActive:y,dotColorDisabled:P,labelPadding:j,labelLineHeight:I,labelFontWeight:M,[F("fontSize",b)]:T,[F("radioSize",b)]:O}}=a.value;return{"--n-bezier":h,"--n-label-line-height":I,"--n-label-font-weight":M,"--n-box-shadow":v,"--n-box-shadow-active":u,"--n-box-shadow-disabled":m,"--n-box-shadow-focus":x,"--n-box-shadow-hover":p,"--n-color":k,"--n-color-active":n,"--n-color-disabled":z,"--n-dot-color-active":y,"--n-dot-color-disabled":P,"--n-font-size":T,"--n-radio-size":O,"--n-text-color":l,"--n-text-color-disabled":f,"--n-label-padding":j}}),{inlineThemeDisabled:d,mergedClsPrefixRef:g,mergedRtlRef:t}=L(o),c=q("Radio",t,g),i=d?J("radio",H(()=>e.mergedSize.value[0]),r,o):void 0;return Object.assign(e,{rtlEnabled:c,cssVars:d?void 0:r,themeClass:i==null?void 0:i.themeClass,onRender:i==null?void 0:i.onRender})},render(){const{$slots:o,mergedClsPrefix:e,onRender:a,label:r}=this;return a==null||a(),w("label",{class:[`${e}-radio`,this.themeClass,{[`${e}-radio--rtl`]:this.rtlEnabled,[`${e}-radio--disabled`]:this.mergedDisabled,[`${e}-radio--checked`]:this.renderSafeChecked,[`${e}-radio--focus`]:this.focus}],style:this.cssVars},w("input",{ref:"inputRef",type:"radio",class:`${e}-radio-input`,value:this.value,name:this.mergedName,checked:this.renderSafeChecked,disabled:this.mergedDisabled,onChange:this.handleRadioInputChange,onFocus:this.handleRadioInputFocus,onBlur:this.handleRadioInputBlur}),w("div",{class:`${e}-radio__dot-wrapper`}," ",w("div",{class:[`${e}-radio__dot`,this.renderSafeChecked&&`${e}-radio__dot--checked`]})),X(o.default,d=>!d&&!r?null:w("div",{ref:"labelRef",class:`${e}-radio__label`},d||r)))}});export{le as _,te as a,oe as r};
