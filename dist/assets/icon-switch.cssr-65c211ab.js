import{c as d}from"./create-injection-key-b5917821.js";import{r as h,o as p,R as v,i as g,p as w,c as a,U as I,d as C,h as F}from"./runtime-core.esm-bundler-7390d31c.js";import{T}from"./runtime-dom.esm-bundler-7e1f654a.js";import{a as s,s as b}from"./light-cdcf3c6d.js";function y(e,t){return e+(t==="default"?"":t.replace(/^[a-z]/,i=>i.toUpperCase()))}y("abc","def");function S(){const e=h(!1);return p(()=>{e.value=!0}),v(e)}const u=d("n-form-item");function K(e,{defaultSize:t="medium",mergedSize:i,mergedDisabled:r}={}){const n=g(u,null);w(u,null);const m=a(i?()=>i(n):()=>{const{size:o}=e;if(o)return o;if(n){const{mergedSize:c}=n;if(c.value!==void 0)return c.value}return t}),f=a(r?()=>r(n):()=>{const{disabled:o}=e;return o!==void 0?o:n?n.disabled.value:!1}),l=a(()=>{const{status:o}=e;return o||(n==null?void 0:n.mergedValidationStatus.value)});return I(()=>{n&&n.restoreValidation()}),{mergedSizeRef:m,mergedDisabledRef:f,mergedStatusRef:l,nTriggerFormBlur(){n&&n.handleContentBlur()},nTriggerFormChange(){n&&n.handleContentChange()},nTriggerFormFocus(){n&&n.handleContentFocus()},nTriggerFormInput(){n&&n.handleContentInput()}}}const N=C({name:"BaseIconSwitchTransition",setup(e,{slots:t}){const i=S();return()=>F(T,{name:"icon-switch-transition",appear:i.value},t)}}),{cubicBezierEaseInOut:B}=b;function U({originalTransform:e="",left:t=0,top:i=0,transition:r=`all .3s ${B} !important`}={}){return[s("&.icon-switch-transition-enter-from, &.icon-switch-transition-leave-to",{transform:e+" scale(0.75)",left:t,top:i,opacity:0}),s("&.icon-switch-transition-enter-to, &.icon-switch-transition-leave-from",{transform:`scale(1) ${e}`,left:t,top:i,opacity:1}),s("&.icon-switch-transition-enter-active, &.icon-switch-transition-leave-active",{transformOrigin:"center",position:"absolute",left:t,top:i,transition:r})]}export{N,S as a,y as c,U as i,K as u};