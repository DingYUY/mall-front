import{o as ze,U as ae,at as Et,V as Y,E as lt,q as K,au as ut,av as dt,aw as ft,r as C,R as J,S as G,ad as ie,z as ee,a2 as re,a3 as Pt,ax as Bt,j as ge,ay as Ne,az as zt,aA as It,Q as ne,am as Lt,P as U,Y as ct,A as M,$ as pt,Z as Dt,aB as me,aC as we,aD as Ft,aE as Nt,aF as Ie,aG as Ht,ao as Z,aH as te,aI as ht,aJ as Ce,aq as Wt,aK as He,aL as Kt,aM as We,aN as Ke,aO as ce,aP as Xt,aQ as Xe,aR as jt,aS as Yt,aT as Gt,aU as Ut,aV as kt,aW as Vt,aX as qt,H as vt,K as W,L as F,O as be,ai as ye,a5 as pe,aY as Jt,W as Qt,D as se,a4 as gt,X as Zt,T as Rt,aZ as je,v as en,a_ as Ye,a$ as Ge,b0 as tn,b1 as nn,b2 as $e,F as rn,b3 as on,b4 as Ue,b5 as an,b6 as sn,b7 as ln,an as le,G as un,b8 as dn}from"./index-953b23c6.js";import{c as fn,t as Le,i as mt,g as cn,b as pn,f as xe}from"./Eye-53aa542d.js";import{u as hn}from"./use-merged-state-b9c9e241.js";let he=[];const wt=new WeakMap;function vn(){he.forEach(e=>e(...wt.get(e))),he=[]}function gn(e,...t){wt.set(e,t),!he.includes(e)&&he.push(e)===1&&requestAnimationFrame(vn)}let Me;function mn(){return Me===void 0&&(Me=navigator.userAgent.includes("Node.js")||navigator.userAgent.includes("jsdom")),Me}let Q,oe;const wn=()=>{var e,t;Q=Et?(t=(e=document)===null||e===void 0?void 0:e.fonts)===null||t===void 0?void 0:t.ready:void 0,oe=!1,Q!==void 0?Q.then(()=>{oe=!0}):oe=!0};wn();function bn(e){if(oe)return;let t=!1;ze(()=>{oe||Q==null||Q.then(()=>{t||e()})}),ae(()=>{t=!0})}function yn(e,t){return Y(()=>{for(const n of t)if(e[n]!==void 0)return e[n];return e[t[t.length-1]]})}const Oo=lt("n-internal-select-menu"),$n=lt("n-internal-select-menu-body"),bt="__disabled__";function R(e){const t=K(ut,null),n=K(dt,null),r=K(ft,null),i=K($n,null),o=C();if(typeof document<"u"){o.value=document.fullscreenElement;const a=()=>{o.value=document.fullscreenElement};ze(()=>{J("fullscreenchange",document,a)}),ae(()=>{G("fullscreenchange",document,a)})}return ie(()=>{var a;const{to:l}=e;return l!==void 0?l===!1?bt:l===!0?o.value||"body":l:t!=null&&t.value?(a=t.value.$el)!==null&&a!==void 0?a:t.value:n!=null&&n.value?n.value:r!=null&&r.value?r.value:i!=null&&i.value?i.value:l??(o.value||"body")})}R.tdkey=bt;R.propTo={type:[String,Object,Boolean],default:void 0};let H=null;function yt(){if(H===null&&(H=document.getElementById("v-binder-view-measurer"),H===null)){H=document.createElement("div"),H.id="v-binder-view-measurer";const{style:e}=H;e.position="fixed",e.left="0",e.right="0",e.top="0",e.bottom="0",e.pointerEvents="none",e.visibility="hidden",document.body.appendChild(H)}return H.getBoundingClientRect()}function xn(e,t){const n=yt();return{top:t,left:e,height:0,width:0,right:n.width-e,bottom:n.height-t}}function Se(e){const t=e.getBoundingClientRect(),n=yt();return{left:t.left-n.left,top:t.top-n.top,bottom:n.height+n.top-t.bottom,right:n.width+n.left-t.right,width:t.width,height:t.height}}function Mn(e){return e.nodeType===9?null:e.parentNode}function $t(e){if(e===null)return null;const t=Mn(e);if(t===null)return null;if(t.nodeType===9)return document;if(t.nodeType===1){const{overflow:n,overflowX:r,overflowY:i}=getComputedStyle(t);if(/(auto|scroll|overlay)/.test(n+i+r))return t}return $t(t)}const Sn=ee({name:"Binder",props:{syncTargetWithParent:Boolean,syncTarget:{type:Boolean,default:!0}},setup(e){var t;re("VBinder",(t=Pt())===null||t===void 0?void 0:t.proxy);const n=K("VBinder",null),r=C(null),i=f=>{r.value=f,n&&e.syncTargetWithParent&&n.setTargetRef(f)};let o=[];const a=()=>{let f=r.value;for(;f=$t(f),f!==null;)o.push(f);for(const $ of o)J("scroll",$,w,!0)},l=()=>{for(const f of o)G("scroll",f,w,!0);o=[]},s=new Set,p=f=>{s.size===0&&a(),s.has(f)||s.add(f)},v=f=>{s.has(f)&&s.delete(f),s.size===0&&l()},w=()=>{gn(u)},u=()=>{s.forEach(f=>f())},c=new Set,g=f=>{c.size===0&&J("resize",window,y),c.has(f)||c.add(f)},d=f=>{c.has(f)&&c.delete(f),c.size===0&&G("resize",window,y)},y=()=>{c.forEach(f=>f())};return ae(()=>{G("resize",window,y),l()}),{targetRef:r,setTargetRef:i,addScrollListener:p,removeScrollListener:v,addResizeListener:g,removeResizeListener:d}},render(){return Bt("binder",this.$slots)}}),On=Sn,An=ee({name:"Target",setup(){const{setTargetRef:e,syncTarget:t}=K("VBinder");return{syncTarget:t,setTargetDirective:{mounted:e,updated:e}}},render(){const{syncTarget:e,setTargetDirective:t}=this;return e?ge(Ne("follower",this.$slots),[[t]]):Ne("follower",this.$slots)}}),q="@@mmoContext",_n={mounted(e,{value:t}){e[q]={handler:void 0},typeof t=="function"&&(e[q].handler=t,J("mousemoveoutside",e,t))},updated(e,{value:t}){const n=e[q];typeof t=="function"?n.handler?n.handler!==t&&(G("mousemoveoutside",e,n.handler),n.handler=t,J("mousemoveoutside",e,t)):(e[q].handler=t,J("mousemoveoutside",e,t)):n.handler&&(G("mousemoveoutside",e,n.handler),n.handler=void 0)},unmounted(e){const{handler:t}=e[q];t&&G("mousemoveoutside",e,t),e[q].handler=void 0}},Cn=_n,{c:ue}=zt(),Tn="vueuc-style",de={top:"bottom",bottom:"top",left:"right",right:"left"},ke={start:"end",center:"center",end:"start"},Oe={top:"height",bottom:"height",left:"width",right:"width"},En={"bottom-start":"top left",bottom:"top center","bottom-end":"top right","top-start":"bottom left",top:"bottom center","top-end":"bottom right","right-start":"top left",right:"center left","right-end":"bottom left","left-start":"top right",left:"center right","left-end":"bottom right"},Pn={"bottom-start":"bottom left",bottom:"bottom center","bottom-end":"bottom right","top-start":"top left",top:"top center","top-end":"top right","right-start":"top right",right:"center right","right-end":"bottom right","left-start":"top left",left:"center left","left-end":"bottom left"},Bn={"bottom-start":"right","bottom-end":"left","top-start":"right","top-end":"left","right-start":"bottom","right-end":"top","left-start":"bottom","left-end":"top"},Ve={top:!0,bottom:!1,left:!0,right:!1},qe={top:"end",bottom:"start",left:"end",right:"start"};function zn(e,t,n,r,i,o){if(!i||o)return{placement:e,top:0,left:0};const[a,l]=e.split("-");let s=l??"center",p={top:0,left:0};const v=(c,g,d)=>{let y=0,f=0;const $=n[c]-t[g]-t[c];return $>0&&r&&(d?f=Ve[g]?$:-$:y=Ve[g]?$:-$),{left:y,top:f}},w=a==="left"||a==="right";if(s!=="center"){const c=Bn[e],g=de[c],d=Oe[c];if(n[d]>t[d]){if(t[c]+t[d]<n[d]){const y=(n[d]-t[d])/2;t[c]<y||t[g]<y?t[c]<t[g]?(s=ke[l],p=v(d,g,w)):p=v(d,c,w):s="center"}}else n[d]<t[d]&&t[g]<0&&t[c]>t[g]&&(s=ke[l])}else{const c=a==="bottom"||a==="top"?"left":"top",g=de[c],d=Oe[c],y=(n[d]-t[d])/2;(t[c]<y||t[g]<y)&&(t[c]>t[g]?(s=qe[c],p=v(d,c,w)):(s=qe[g],p=v(d,g,w)))}let u=a;return t[a]<n[Oe[a]]&&t[a]<t[de[a]]&&(u=de[a]),{placement:s!=="center"?`${u}-${s}`:u,left:p.left,top:p.top}}function In(e,t){return t?Pn[e]:En[e]}function Ln(e,t,n,r,i,o){if(o)switch(e){case"bottom-start":return{top:`${Math.round(n.top-t.top+n.height)}px`,left:`${Math.round(n.left-t.left)}px`,transform:"translateY(-100%)"};case"bottom-end":return{top:`${Math.round(n.top-t.top+n.height)}px`,left:`${Math.round(n.left-t.left+n.width)}px`,transform:"translateX(-100%) translateY(-100%)"};case"top-start":return{top:`${Math.round(n.top-t.top)}px`,left:`${Math.round(n.left-t.left)}px`,transform:""};case"top-end":return{top:`${Math.round(n.top-t.top)}px`,left:`${Math.round(n.left-t.left+n.width)}px`,transform:"translateX(-100%)"};case"right-start":return{top:`${Math.round(n.top-t.top)}px`,left:`${Math.round(n.left-t.left+n.width)}px`,transform:"translateX(-100%)"};case"right-end":return{top:`${Math.round(n.top-t.top+n.height)}px`,left:`${Math.round(n.left-t.left+n.width)}px`,transform:"translateX(-100%) translateY(-100%)"};case"left-start":return{top:`${Math.round(n.top-t.top)}px`,left:`${Math.round(n.left-t.left)}px`,transform:""};case"left-end":return{top:`${Math.round(n.top-t.top+n.height)}px`,left:`${Math.round(n.left-t.left)}px`,transform:"translateY(-100%)"};case"top":return{top:`${Math.round(n.top-t.top)}px`,left:`${Math.round(n.left-t.left+n.width/2)}px`,transform:"translateX(-50%)"};case"right":return{top:`${Math.round(n.top-t.top+n.height/2)}px`,left:`${Math.round(n.left-t.left+n.width)}px`,transform:"translateX(-100%) translateY(-50%)"};case"left":return{top:`${Math.round(n.top-t.top+n.height/2)}px`,left:`${Math.round(n.left-t.left)}px`,transform:"translateY(-50%)"};case"bottom":default:return{top:`${Math.round(n.top-t.top+n.height)}px`,left:`${Math.round(n.left-t.left+n.width/2)}px`,transform:"translateX(-50%) translateY(-100%)"}}switch(e){case"bottom-start":return{top:`${Math.round(n.top-t.top+n.height+r)}px`,left:`${Math.round(n.left-t.left+i)}px`,transform:""};case"bottom-end":return{top:`${Math.round(n.top-t.top+n.height+r)}px`,left:`${Math.round(n.left-t.left+n.width+i)}px`,transform:"translateX(-100%)"};case"top-start":return{top:`${Math.round(n.top-t.top+r)}px`,left:`${Math.round(n.left-t.left+i)}px`,transform:"translateY(-100%)"};case"top-end":return{top:`${Math.round(n.top-t.top+r)}px`,left:`${Math.round(n.left-t.left+n.width+i)}px`,transform:"translateX(-100%) translateY(-100%)"};case"right-start":return{top:`${Math.round(n.top-t.top+r)}px`,left:`${Math.round(n.left-t.left+n.width+i)}px`,transform:""};case"right-end":return{top:`${Math.round(n.top-t.top+n.height+r)}px`,left:`${Math.round(n.left-t.left+n.width+i)}px`,transform:"translateY(-100%)"};case"left-start":return{top:`${Math.round(n.top-t.top+r)}px`,left:`${Math.round(n.left-t.left+i)}px`,transform:"translateX(-100%)"};case"left-end":return{top:`${Math.round(n.top-t.top+n.height+r)}px`,left:`${Math.round(n.left-t.left+i)}px`,transform:"translateX(-100%) translateY(-100%)"};case"top":return{top:`${Math.round(n.top-t.top+r)}px`,left:`${Math.round(n.left-t.left+n.width/2+i)}px`,transform:"translateY(-100%) translateX(-50%)"};case"right":return{top:`${Math.round(n.top-t.top+n.height/2+r)}px`,left:`${Math.round(n.left-t.left+n.width+i)}px`,transform:"translateY(-50%)"};case"left":return{top:`${Math.round(n.top-t.top+n.height/2+r)}px`,left:`${Math.round(n.left-t.left+i)}px`,transform:"translateY(-50%) translateX(-100%)"};case"bottom":default:return{top:`${Math.round(n.top-t.top+n.height+r)}px`,left:`${Math.round(n.left-t.left+n.width/2+i)}px`,transform:"translateX(-50%)"}}}const Dn=ue([ue(".v-binder-follower-container",{position:"absolute",left:"0",right:"0",top:"0",height:"0",pointerEvents:"none",zIndex:"auto"}),ue(".v-binder-follower-content",{position:"absolute",zIndex:"auto"},[ue("> *",{pointerEvents:"all"})])]),Fn=ee({name:"Follower",inheritAttrs:!1,props:{show:Boolean,enabled:{type:Boolean,default:void 0},placement:{type:String,default:"bottom"},syncTrigger:{type:Array,default:["resize","scroll"]},to:[String,Object],flip:{type:Boolean,default:!0},internalShift:Boolean,x:Number,y:Number,width:String,minWidth:String,containerClass:String,teleportDisabled:Boolean,zindexable:{type:Boolean,default:!0},zIndex:Number,overlap:Boolean},setup(e){const t=K("VBinder"),n=ie(()=>e.enabled!==void 0?e.enabled:e.show),r=C(null),i=C(null),o=()=>{const{syncTrigger:u}=e;u.includes("scroll")&&t.addScrollListener(s),u.includes("resize")&&t.addResizeListener(s)},a=()=>{t.removeScrollListener(s),t.removeResizeListener(s)};ze(()=>{n.value&&(s(),o())});const l=It();Dn.mount({id:"vueuc/binder",head:!0,anchorMetaName:Tn,ssr:l}),ae(()=>{a()}),bn(()=>{n.value&&s()});const s=()=>{if(!n.value)return;const u=r.value;if(u===null)return;const c=t.targetRef,{x:g,y:d,overlap:y}=e,f=g!==void 0&&d!==void 0?xn(g,d):Se(c);u.style.setProperty("--v-target-width",`${Math.round(f.width)}px`),u.style.setProperty("--v-target-height",`${Math.round(f.height)}px`);const{width:$,minWidth:z,placement:T,internalShift:E,flip:X}=e;u.setAttribute("v-placement",T),y?u.setAttribute("v-overlap",""):u.removeAttribute("v-overlap");const{style:m}=u;$==="target"?m.width=`${f.width}px`:$!==void 0?m.width=$:m.width="",z==="target"?m.minWidth=`${f.width}px`:z!==void 0?m.minWidth=z:m.minWidth="";const O=Se(u),A=Se(i.value),{left:b,top:N,placement:I}=zn(T,f,O,E,X,y),B=In(I,y),{left:h,top:x,transform:_}=Ln(I,A,f,N,b,y);u.setAttribute("v-placement",I),u.style.setProperty("--v-offset-left",`${Math.round(b)}px`),u.style.setProperty("--v-offset-top",`${Math.round(N)}px`),u.style.transform=`translateX(${h}) translateY(${x}) ${_}`,u.style.setProperty("--v-transform-origin",B),u.style.transformOrigin=B};ne(n,u=>{u?(o(),p()):a()});const p=()=>{Lt().then(s).catch(u=>console.error(u))};["placement","x","y","internalShift","flip","width","overlap","minWidth"].forEach(u=>{ne(U(e,u),s)}),["teleportDisabled"].forEach(u=>{ne(U(e,u),p)}),ne(U(e,"syncTrigger"),u=>{u.includes("resize")?t.addResizeListener(s):t.removeResizeListener(s),u.includes("scroll")?t.addScrollListener(s):t.removeScrollListener(s)});const v=ct(),w=ie(()=>{const{to:u}=e;if(u!==void 0)return u;v.value});return{VBinder:t,mergedEnabled:n,offsetContainerRef:i,followerRef:r,mergedTo:w,syncPosition:s}},render(){return M(Dt,{show:this.show,to:this.mergedTo,disabled:this.teleportDisabled},{default:()=>{var e,t;const n=M("div",{class:["v-binder-follower-container",this.containerClass],ref:"offsetContainerRef"},[M("div",{class:"v-binder-follower-content",ref:"followerRef"},(t=(e=this.$slots).default)===null||t===void 0?void 0:t.call(e))]);return this.zindexable?ge(n,[[pt,{enabled:this.mergedEnabled,zIndex:this.zIndex}]]):n}})}});var Nn=me(we,"WeakMap");const Te=Nn;var Hn=Ft(Object.keys,Object);const Wn=Hn;var Kn=Object.prototype,Xn=Kn.hasOwnProperty;function jn(e){if(!Nt(e))return Wn(e);var t=[];for(var n in Object(e))Xn.call(e,n)&&n!="constructor"&&t.push(n);return t}function De(e){return Ie(e)?Ht(e):jn(e)}function Yn(e,t){for(var n=-1,r=t.length,i=e.length;++n<r;)e[i+n]=t[n];return e}function Gn(e,t){for(var n=-1,r=e==null?0:e.length,i=0,o=[];++n<r;){var a=e[n];t(a,n,e)&&(o[i++]=a)}return o}function Un(){return[]}var kn=Object.prototype,Vn=kn.propertyIsEnumerable,Je=Object.getOwnPropertySymbols,qn=Je?function(e){return e==null?[]:(e=Object(e),Gn(Je(e),function(t){return Vn.call(e,t)}))}:Un;const Jn=qn;function Qn(e,t,n){var r=t(e);return Z(e)?r:Yn(r,n(e))}function Qe(e){return Qn(e,De,Jn)}var Zn=me(we,"DataView");const Ee=Zn;var Rn=me(we,"Promise");const Pe=Rn;var er=me(we,"Set");const Be=er;var Ze="[object Map]",tr="[object Object]",Re="[object Promise]",et="[object Set]",tt="[object WeakMap]",nt="[object DataView]",nr=te(Ee),rr=te(Ce),or=te(Pe),ir=te(Be),ar=te(Te),j=ht;(Ee&&j(new Ee(new ArrayBuffer(1)))!=nt||Ce&&j(new Ce)!=Ze||Pe&&j(Pe.resolve())!=Re||Be&&j(new Be)!=et||Te&&j(new Te)!=tt)&&(j=function(e){var t=ht(e),n=t==tr?e.constructor:void 0,r=n?te(n):"";if(r)switch(r){case nr:return nt;case rr:return Ze;case or:return Re;case ir:return et;case ar:return tt}return t});const rt=j;var sr="__lodash_hash_undefined__";function lr(e){return this.__data__.set(e,sr),this}function ur(e){return this.__data__.has(e)}function ve(e){var t=-1,n=e==null?0:e.length;for(this.__data__=new Wt;++t<n;)this.add(e[t])}ve.prototype.add=ve.prototype.push=lr;ve.prototype.has=ur;function dr(e,t){for(var n=-1,r=e==null?0:e.length;++n<r;)if(t(e[n],n,e))return!0;return!1}function fr(e,t){return e.has(t)}var cr=1,pr=2;function xt(e,t,n,r,i,o){var a=n&cr,l=e.length,s=t.length;if(l!=s&&!(a&&s>l))return!1;var p=o.get(e),v=o.get(t);if(p&&v)return p==t&&v==e;var w=-1,u=!0,c=n&pr?new ve:void 0;for(o.set(e,t),o.set(t,e);++w<l;){var g=e[w],d=t[w];if(r)var y=a?r(d,g,w,t,e,o):r(g,d,w,e,t,o);if(y!==void 0){if(y)continue;u=!1;break}if(c){if(!dr(t,function(f,$){if(!fr(c,$)&&(g===f||i(g,f,n,r,o)))return c.push($)})){u=!1;break}}else if(!(g===d||i(g,d,n,r,o))){u=!1;break}}return o.delete(e),o.delete(t),u}function hr(e){var t=-1,n=Array(e.size);return e.forEach(function(r,i){n[++t]=[i,r]}),n}function vr(e){var t=-1,n=Array(e.size);return e.forEach(function(r){n[++t]=r}),n}var gr=1,mr=2,wr="[object Boolean]",br="[object Date]",yr="[object Error]",$r="[object Map]",xr="[object Number]",Mr="[object RegExp]",Sr="[object Set]",Or="[object String]",Ar="[object Symbol]",_r="[object ArrayBuffer]",Cr="[object DataView]",ot=He?He.prototype:void 0,Ae=ot?ot.valueOf:void 0;function Tr(e,t,n,r,i,o,a){switch(n){case Cr:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case _r:return!(e.byteLength!=t.byteLength||!o(new We(e),new We(t)));case wr:case br:case xr:return Kt(+e,+t);case yr:return e.name==t.name&&e.message==t.message;case Mr:case Or:return e==t+"";case $r:var l=hr;case Sr:var s=r&gr;if(l||(l=vr),e.size!=t.size&&!s)return!1;var p=a.get(e);if(p)return p==t;r|=mr,a.set(e,t);var v=xt(l(e),l(t),r,i,o,a);return a.delete(e),v;case Ar:if(Ae)return Ae.call(e)==Ae.call(t)}return!1}var Er=1,Pr=Object.prototype,Br=Pr.hasOwnProperty;function zr(e,t,n,r,i,o){var a=n&Er,l=Qe(e),s=l.length,p=Qe(t),v=p.length;if(s!=v&&!a)return!1;for(var w=s;w--;){var u=l[w];if(!(a?u in t:Br.call(t,u)))return!1}var c=o.get(e),g=o.get(t);if(c&&g)return c==t&&g==e;var d=!0;o.set(e,t),o.set(t,e);for(var y=a;++w<s;){u=l[w];var f=e[u],$=t[u];if(r)var z=a?r($,f,u,t,e,o):r(f,$,u,e,t,o);if(!(z===void 0?f===$||i(f,$,n,r,o):z)){d=!1;break}y||(y=u=="constructor")}if(d&&!y){var T=e.constructor,E=t.constructor;T!=E&&"constructor"in e&&"constructor"in t&&!(typeof T=="function"&&T instanceof T&&typeof E=="function"&&E instanceof E)&&(d=!1)}return o.delete(e),o.delete(t),d}var Ir=1,it="[object Arguments]",at="[object Array]",fe="[object Object]",Lr=Object.prototype,st=Lr.hasOwnProperty;function Dr(e,t,n,r,i,o){var a=Z(e),l=Z(t),s=a?at:rt(e),p=l?at:rt(t);s=s==it?fe:s,p=p==it?fe:p;var v=s==fe,w=p==fe,u=s==p;if(u&&Ke(e)){if(!Ke(t))return!1;a=!0,v=!1}if(u&&!v)return o||(o=new ce),a||Xt(e)?xt(e,t,n,r,i,o):Tr(e,t,s,n,r,i,o);if(!(n&Ir)){var c=v&&st.call(e,"__wrapped__"),g=w&&st.call(t,"__wrapped__");if(c||g){var d=c?e.value():e,y=g?t.value():t;return o||(o=new ce),i(d,y,n,r,o)}}return u?(o||(o=new ce),zr(e,t,n,r,i,o)):!1}function Fe(e,t,n,r,i){return e===t?!0:e==null||t==null||!Xe(e)&&!Xe(t)?e!==e&&t!==t:Dr(e,t,n,r,Fe,i)}var Fr=1,Nr=2;function Hr(e,t,n,r){var i=n.length,o=i,a=!r;if(e==null)return!o;for(e=Object(e);i--;){var l=n[i];if(a&&l[2]?l[1]!==e[l[0]]:!(l[0]in e))return!1}for(;++i<o;){l=n[i];var s=l[0],p=e[s],v=l[1];if(a&&l[2]){if(p===void 0&&!(s in e))return!1}else{var w=new ce;if(r)var u=r(p,v,s,e,t,w);if(!(u===void 0?Fe(v,p,Fr|Nr,r,w):u))return!1}}return!0}function Mt(e){return e===e&&!jt(e)}function Wr(e){for(var t=De(e),n=t.length;n--;){var r=t[n],i=e[r];t[n]=[r,i,Mt(i)]}return t}function St(e,t){return function(n){return n==null?!1:n[e]===t&&(t!==void 0||e in Object(n))}}function Kr(e){var t=Wr(e);return t.length==1&&t[0][2]?St(t[0][0],t[0][1]):function(n){return n===e||Hr(n,e,t)}}function Xr(e,t){return e!=null&&t in Object(e)}function jr(e,t,n){t=fn(t,e);for(var r=-1,i=t.length,o=!1;++r<i;){var a=Le(t[r]);if(!(o=e!=null&&n(e,a)))break;e=e[a]}return o||++r!=i?o:(i=e==null?0:e.length,!!i&&Yt(i)&&Gt(a,i)&&(Z(e)||Ut(e)))}function Yr(e,t){return e!=null&&jr(e,t,Xr)}var Gr=1,Ur=2;function kr(e,t){return mt(e)&&Mt(t)?St(Le(e),t):function(n){var r=cn(n,e);return r===void 0&&r===t?Yr(n,e):Fe(t,r,Gr|Ur)}}function Vr(e){return function(t){return t==null?void 0:t[e]}}function qr(e){return function(t){return pn(t,e)}}function Jr(e){return mt(e)?Vr(Le(e)):qr(e)}function Qr(e){return typeof e=="function"?e:e==null?kt:typeof e=="object"?Z(e)?kr(e[0],e[1]):Kr(e):Jr(e)}function Zr(e,t){return e&&Vt(e,t,De)}function Rr(e,t){return function(n,r){if(n==null)return n;if(!Ie(n))return e(n,r);for(var i=n.length,o=t?i:-1,a=Object(n);(t?o--:++o<i)&&r(a[o],o,a)!==!1;);return n}}var eo=Rr(Zr);const to=eo;function no(e,t){var n=-1,r=Ie(e)?Array(e.length):[];return to(e,function(i,o,a){r[++n]=t(i,o,a)}),r}function ro(e,t){var n=Z(e)?qt:no;return n(e,Qr(t))}const oo={space:"6px",spaceArrow:"10px",arrowOffset:"10px",arrowOffsetVertical:"10px",arrowHeight:"6px",padding:"8px 14px"},io=e=>{const{boxShadow2:t,popoverColor:n,textColor2:r,borderRadius:i,fontSize:o,dividerColor:a}=e;return Object.assign(Object.assign({},oo),{fontSize:o,borderRadius:i,color:n,dividerColor:a,textColor:r,boxShadow:t})},ao={name:"Popover",common:vt,self:io},Ot=ao,_e={top:"bottom",bottom:"top",left:"right",right:"left"},S="var(--n-arrow-height) * 1.414",so=W([F("popover",`
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 position: relative;
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 box-shadow: var(--n-box-shadow);
 word-break: break-word;
 `,[W(">",[F("scrollbar",`
 height: inherit;
 max-height: inherit;
 `)]),be("raw",`
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 `,[be("scrollable",[be("show-header-or-footer","padding: var(--n-padding);")])]),ye("header",`
 padding: var(--n-padding);
 border-bottom: 1px solid var(--n-divider-color);
 transition: border-color .3s var(--n-bezier);
 `),ye("footer",`
 padding: var(--n-padding);
 border-top: 1px solid var(--n-divider-color);
 transition: border-color .3s var(--n-bezier);
 `),pe("scrollable, show-header-or-footer",[ye("content",`
 padding: var(--n-padding);
 `)])]),F("popover-shared",`
 transform-origin: inherit;
 `,[F("popover-arrow-wrapper",`
 position: absolute;
 overflow: hidden;
 pointer-events: none;
 `,[F("popover-arrow",`
 transition: background-color .3s var(--n-bezier);
 position: absolute;
 display: block;
 width: calc(${S});
 height: calc(${S});
 box-shadow: 0 0 8px 0 rgba(0, 0, 0, .12);
 transform: rotate(45deg);
 background-color: var(--n-color);
 pointer-events: all;
 `)]),W("&.popover-transition-enter-from, &.popover-transition-leave-to",`
 opacity: 0;
 transform: scale(.85);
 `),W("&.popover-transition-enter-to, &.popover-transition-leave-from",`
 transform: scale(1);
 opacity: 1;
 `),W("&.popover-transition-enter-active",`
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 opacity .15s var(--n-bezier-ease-out),
 transform .15s var(--n-bezier-ease-out);
 `),W("&.popover-transition-leave-active",`
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 opacity .15s var(--n-bezier-ease-in),
 transform .15s var(--n-bezier-ease-in);
 `)]),P("top-start",`
 top: calc(${S} / -2);
 left: calc(${D("top-start")} - var(--v-offset-left));
 `),P("top",`
 top: calc(${S} / -2);
 transform: translateX(calc(${S} / -2)) rotate(45deg);
 left: 50%;
 `),P("top-end",`
 top: calc(${S} / -2);
 right: calc(${D("top-end")} + var(--v-offset-left));
 `),P("bottom-start",`
 bottom: calc(${S} / -2);
 left: calc(${D("bottom-start")} - var(--v-offset-left));
 `),P("bottom",`
 bottom: calc(${S} / -2);
 transform: translateX(calc(${S} / -2)) rotate(45deg);
 left: 50%;
 `),P("bottom-end",`
 bottom: calc(${S} / -2);
 right: calc(${D("bottom-end")} + var(--v-offset-left));
 `),P("left-start",`
 left: calc(${S} / -2);
 top: calc(${D("left-start")} - var(--v-offset-top));
 `),P("left",`
 left: calc(${S} / -2);
 transform: translateY(calc(${S} / -2)) rotate(45deg);
 top: 50%;
 `),P("left-end",`
 left: calc(${S} / -2);
 bottom: calc(${D("left-end")} + var(--v-offset-top));
 `),P("right-start",`
 right: calc(${S} / -2);
 top: calc(${D("right-start")} - var(--v-offset-top));
 `),P("right",`
 right: calc(${S} / -2);
 transform: translateY(calc(${S} / -2)) rotate(45deg);
 top: 50%;
 `),P("right-end",`
 right: calc(${S} / -2);
 bottom: calc(${D("right-end")} + var(--v-offset-top));
 `),...ro({top:["right-start","left-start"],right:["top-end","bottom-end"],bottom:["right-end","left-end"],left:["top-start","bottom-start"]},(e,t)=>{const n=["right","left"].includes(t),r=n?"width":"height";return e.map(i=>{const o=i.split("-")[1]==="end",l=`calc((${`var(--v-target-${r}, 0px)`} - ${S}) / 2)`,s=D(i);return W(`[v-placement="${i}"] >`,[F("popover-shared",[pe("center-arrow",[F("popover-arrow",`${t}: calc(max(${l}, ${s}) ${o?"+":"-"} var(--v-offset-${n?"left":"top"}));`)])])])})})]);function D(e){return["top","bottom"].includes(e.split("-")[0])?"var(--n-arrow-offset)":"var(--n-arrow-offset-vertical)"}function P(e,t){const n=e.split("-")[0],r=["top","bottom"].includes(n)?"height: var(--n-space-arrow);":"width: var(--n-space-arrow);";return W(`[v-placement="${e}"] >`,[F("popover-shared",`
 margin-${_e[n]}: var(--n-space);
 `,[pe("show-arrow",`
 margin-${_e[n]}: var(--n-space-arrow);
 `),pe("overlap",`
 margin: 0;
 `),Jt("popover-arrow-wrapper",`
 right: 0;
 left: 0;
 top: 0;
 bottom: 0;
 ${n}: 100%;
 ${_e[n]}: auto;
 ${r}
 `,[F("popover-arrow",t)])])])}const At=Object.assign(Object.assign({},se.props),{to:R.propTo,show:Boolean,trigger:String,showArrow:Boolean,delay:Number,duration:Number,raw:Boolean,arrowPointToCenter:Boolean,arrowStyle:[String,Object],displayDirective:String,x:Number,y:Number,flip:Boolean,overlap:Boolean,placement:String,width:[Number,String],keepAliveOnHover:Boolean,scrollable:Boolean,contentStyle:[Object,String],headerStyle:[Object,String],footerStyle:[Object,String],internalDeactivateImmediately:Boolean,animated:Boolean,onClickoutside:Function,internalTrapFocus:Boolean,internalOnAfterLeave:Function,minWidth:Number,maxWidth:Number}),lo=({arrowStyle:e,clsPrefix:t})=>M("div",{key:"__popover-arrow__",class:`${t}-popover-arrow-wrapper`},M("div",{class:`${t}-popover-arrow`,style:e})),uo=ee({name:"PopoverBody",inheritAttrs:!1,props:At,setup(e,{slots:t,attrs:n}){const{namespaceRef:r,mergedClsPrefixRef:i,inlineThemeDisabled:o}=Qt(e),a=se("Popover","-popover",so,Ot,e,i),l=C(null),s=K("NPopover"),p=C(null),v=C(e.show),w=C(!1);gt(()=>{const{show:m}=e;m&&!mn()&&!e.internalDeactivateImmediately&&(w.value=!0)});const u=Y(()=>{const{trigger:m,onClickoutside:O}=e,A=[],{positionManuallyRef:{value:b}}=s;return b||(m==="click"&&!O&&A.push([je,T,void 0,{capture:!0}]),m==="hover"&&A.push([Cn,z])),O&&A.push([je,T,void 0,{capture:!0}]),(e.displayDirective==="show"||e.animated&&w.value)&&A.push([en,e.show]),A}),c=Y(()=>{const m=e.width==="trigger"?void 0:xe(e.width),O=[];m&&O.push({width:m});const{maxWidth:A,minWidth:b}=e;return A&&O.push({maxWidth:xe(A)}),b&&O.push({maxWidth:xe(b)}),o||O.push(g.value),O}),g=Y(()=>{const{common:{cubicBezierEaseInOut:m,cubicBezierEaseIn:O,cubicBezierEaseOut:A},self:{space:b,spaceArrow:N,padding:I,fontSize:B,textColor:h,dividerColor:x,color:_,boxShadow:k,borderRadius:V,arrowHeight:L,arrowOffset:Ct,arrowOffsetVertical:Tt}}=a.value;return{"--n-box-shadow":k,"--n-bezier":m,"--n-bezier-ease-in":O,"--n-bezier-ease-out":A,"--n-font-size":B,"--n-text-color":h,"--n-color":_,"--n-divider-color":x,"--n-border-radius":V,"--n-arrow-height":L,"--n-arrow-offset":Ct,"--n-arrow-offset-vertical":Tt,"--n-padding":I,"--n-space":b,"--n-space-arrow":N}}),d=o?Zt("popover",void 0,g,e):void 0;s.setBodyInstance({syncPosition:y}),ae(()=>{s.setBodyInstance(null)}),ne(U(e,"show"),m=>{e.animated||(m?v.value=!0:v.value=!1)});function y(){var m;(m=l.value)===null||m===void 0||m.syncPosition()}function f(m){e.trigger==="hover"&&e.keepAliveOnHover&&e.show&&s.handleMouseEnter(m)}function $(m){e.trigger==="hover"&&e.keepAliveOnHover&&s.handleMouseLeave(m)}function z(m){e.trigger==="hover"&&!E().contains(Ye(m))&&s.handleMouseMoveOutside(m)}function T(m){(e.trigger==="click"&&!E().contains(Ye(m))||e.onClickoutside)&&s.handleClickOutside(m)}function E(){return s.getTriggerElement()}re(ft,p),re(dt,null),re(ut,null);function X(){if(d==null||d.onRender(),!(e.displayDirective==="show"||e.show||e.animated&&w.value))return null;let O;const A=s.internalRenderBodyRef.value,{value:b}=i;if(A)O=A([`${b}-popover-shared`,d==null?void 0:d.themeClass.value,e.overlap&&`${b}-popover-shared--overlap`,e.showArrow&&`${b}-popover-shared--show-arrow`,e.arrowPointToCenter&&`${b}-popover-shared--center-arrow`],p,c.value,f,$);else{const{value:N}=s.extraClassRef,{internalTrapFocus:I}=e,B=!Ge(t.header)||!Ge(t.footer),h=()=>{var x;const _=B?M(rn,null,$e(t.header,L=>L?M("div",{class:`${b}-popover__header`,style:e.headerStyle},L):null),$e(t.default,L=>L?M("div",{class:`${b}-popover__content`,style:e.contentStyle},t):null),$e(t.footer,L=>L?M("div",{class:`${b}-popover__footer`,style:e.footerStyle},L):null)):e.scrollable?(x=t.default)===null||x===void 0?void 0:x.call(t):M("div",{class:`${b}-popover__content`,style:e.contentStyle},t),k=e.scrollable?M(on,{contentClass:B?void 0:`${b}-popover__content`,contentStyle:B?void 0:e.contentStyle},{default:()=>_}):_,V=e.showArrow?lo({arrowStyle:e.arrowStyle,clsPrefix:b}):null;return[k,V]};O=M("div",nn({class:[`${b}-popover`,`${b}-popover-shared`,d==null?void 0:d.themeClass.value,N.map(x=>`${b}-${x}`),{[`${b}-popover--scrollable`]:e.scrollable,[`${b}-popover--show-header-or-footer`]:B,[`${b}-popover--raw`]:e.raw,[`${b}-popover-shared--overlap`]:e.overlap,[`${b}-popover-shared--show-arrow`]:e.showArrow,[`${b}-popover-shared--center-arrow`]:e.arrowPointToCenter}],ref:p,style:c.value,onKeydown:s.handleKeydown,onMouseenter:f,onMouseleave:$},n),I?M(tn,{active:e.show,autoFocus:!0},{default:h}):h())}return ge(O,u.value)}return{displayed:w,namespace:r,isMounted:s.isMountedRef,zIndex:s.zIndexRef,followerRef:l,adjustedTo:R(e),followerEnabled:v,renderContentNode:X}},render(){return M(Fn,{ref:"followerRef",zIndex:this.zIndex,show:this.show,enabled:this.followerEnabled,to:this.adjustedTo,x:this.x,y:this.y,flip:this.flip,placement:this.placement,containerClass:this.namespace,overlap:this.overlap,width:this.width==="trigger"?"target":void 0,teleportDisabled:this.adjustedTo===R.tdkey},{default:()=>this.animated?M(Rt,{name:"popover-transition",appear:this.isMounted,onEnter:()=>{this.followerEnabled=!0},onAfterLeave:()=>{var e;(e=this.internalOnAfterLeave)===null||e===void 0||e.call(this),this.followerEnabled=!1,this.displayed=!1}},{default:this.renderContentNode}):this.renderContentNode()})}}),fo=Object.keys(At),co={focus:["onFocus","onBlur"],click:["onClick"],hover:["onMouseenter","onMouseleave"],manual:[],nested:["onFocus","onBlur","onMouseenter","onMouseleave","onClick"]};function po(e,t,n){co[t].forEach(r=>{e.props?e.props=Object.assign({},e.props):e.props={};const i=e.props[r],o=n[r];i?e.props[r]=(...a)=>{i(...a),o(...a)}:e.props[r]=o})}const ho=sn("").type,_t={show:{type:Boolean,default:void 0},defaultShow:Boolean,showArrow:{type:Boolean,default:!0},trigger:{type:String,default:"hover"},delay:{type:Number,default:100},duration:{type:Number,default:100},raw:Boolean,placement:{type:String,default:"top"},x:Number,y:Number,arrowPointToCenter:Boolean,disabled:Boolean,getDisabled:Function,displayDirective:{type:String,default:"if"},arrowStyle:[String,Object],flip:{type:Boolean,default:!0},animated:{type:Boolean,default:!0},width:{type:[Number,String],default:void 0},overlap:Boolean,keepAliveOnHover:{type:Boolean,default:!0},zIndex:Number,to:R.propTo,scrollable:Boolean,contentStyle:[Object,String],headerStyle:[Object,String],footerStyle:[Object,String],onClickoutside:Function,"onUpdate:show":[Function,Array],onUpdateShow:[Function,Array],internalDeactivateImmediately:Boolean,internalSyncTargetWithParent:Boolean,internalInheritedEventHandlers:{type:Array,default:()=>[]},internalTrapFocus:Boolean,internalExtraClass:{type:Array,default:()=>[]},onShow:[Function,Array],onHide:[Function,Array],arrow:{type:Boolean,default:void 0},minWidth:Number,maxWidth:Number},vo=Object.assign(Object.assign(Object.assign({},se.props),_t),{internalOnAfterLeave:Function,internalRenderBody:Function}),go=ee({name:"Popover",inheritAttrs:!1,props:vo,__popover__:!0,setup(e){const t=ct(),n=C(null),r=Y(()=>e.show),i=C(e.defaultShow),o=hn(r,i),a=ie(()=>e.disabled?!1:o.value),l=()=>{if(e.disabled)return!0;const{getDisabled:h}=e;return!!(h!=null&&h())},s=()=>l()?!1:o.value,p=yn(e,["arrow","showArrow"]),v=Y(()=>e.overlap?!1:p.value);let w=null;const u=C(null),c=C(null),g=ie(()=>e.x!==void 0&&e.y!==void 0);function d(h){const{"onUpdate:show":x,onUpdateShow:_,onShow:k,onHide:V}=e;i.value=h,x&&le(x,h),_&&le(_,h),h&&k&&le(k,!0),h&&V&&le(V,!1)}function y(){w&&w.syncPosition()}function f(){const{value:h}=u;h&&(window.clearTimeout(h),u.value=null)}function $(){const{value:h}=c;h&&(window.clearTimeout(h),c.value=null)}function z(){const h=l();if(e.trigger==="focus"&&!h){if(s())return;d(!0)}}function T(){const h=l();if(e.trigger==="focus"&&!h){if(!s())return;d(!1)}}function E(){const h=l();if(e.trigger==="hover"&&!h){if($(),u.value!==null||s())return;const x=()=>{d(!0),u.value=null},{delay:_}=e;_===0?x():u.value=window.setTimeout(x,_)}}function X(){const h=l();if(e.trigger==="hover"&&!h){if(f(),c.value!==null||!s())return;const x=()=>{d(!1),c.value=null},{duration:_}=e;_===0?x():c.value=window.setTimeout(x,_)}}function m(){X()}function O(h){var x;s()&&(e.trigger==="click"&&(f(),$(),d(!1)),(x=e.onClickoutside)===null||x===void 0||x.call(e,h))}function A(){if(e.trigger==="click"&&!l()){f(),$();const h=!s();d(h)}}function b(h){e.internalTrapFocus&&h.key==="Escape"&&(f(),$(),d(!1))}function N(h){i.value=h}function I(){var h;return(h=n.value)===null||h===void 0?void 0:h.targetRef}function B(h){w=h}return re("NPopover",{getTriggerElement:I,handleKeydown:b,handleMouseEnter:E,handleMouseLeave:X,handleClickOutside:O,handleMouseMoveOutside:m,setBodyInstance:B,positionManuallyRef:g,isMountedRef:t,zIndexRef:U(e,"zIndex"),extraClassRef:U(e,"internalExtraClass"),internalRenderBodyRef:U(e,"internalRenderBody")}),gt(()=>{o.value&&l()&&d(!1)}),{binderInstRef:n,positionManually:g,mergedShowConsideringDisabledProp:a,uncontrolledShow:i,mergedShowArrow:v,getMergedShow:s,setShow:N,handleClick:A,handleMouseEnter:E,handleMouseLeave:X,handleFocus:z,handleBlur:T,syncPosition:y}},render(){var e;const{positionManually:t,$slots:n}=this;let r,i=!1;if(!t&&(n.activator?r=Ue(n,"activator"):r=Ue(n,"trigger"),r)){r=an(r),r=r.type===ho?M("span",[r]):r;const o={onClick:this.handleClick,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onFocus:this.handleFocus,onBlur:this.handleBlur};if(!((e=r.type)===null||e===void 0)&&e.__popover__)i=!0,r.props||(r.props={internalSyncTargetWithParent:!0,internalInheritedEventHandlers:[]}),r.props.internalSyncTargetWithParent=!0,r.props.internalInheritedEventHandlers?r.props.internalInheritedEventHandlers=[o,...r.props.internalInheritedEventHandlers]:r.props.internalInheritedEventHandlers=[o];else{const{internalInheritedEventHandlers:a}=this,l=[o,...a],s={onBlur:p=>{l.forEach(v=>{v.onBlur(p)})},onFocus:p=>{l.forEach(v=>{v.onFocus(p)})},onClick:p=>{l.forEach(v=>{v.onClick(p)})},onMouseenter:p=>{l.forEach(v=>{v.onMouseenter(p)})},onMouseleave:p=>{l.forEach(v=>{v.onMouseleave(p)})}};po(r,a?"nested":t?"manual":this.trigger,s)}}return M(On,{ref:"binderInstRef",syncTarget:!i,syncTargetWithParent:this.internalSyncTargetWithParent},{default:()=>{this.mergedShowConsideringDisabledProp;const o=this.getMergedShow();return[this.internalTrapFocus&&o?ge(M("div",{style:{position:"fixed",inset:0}}),[[pt,{enabled:o,zIndex:this.zIndex}]]):null,t?null:M(An,null,{default:()=>r}),M(uo,ln(this.$props,fo,Object.assign(Object.assign({},this.$attrs),{showArrow:this.mergedShowArrow,show:o})),{default:()=>{var a,l;return(l=(a=this.$slots).default)===null||l===void 0?void 0:l.call(a)},header:()=>{var a,l;return(l=(a=this.$slots).header)===null||l===void 0?void 0:l.call(a)},footer:()=>{var a,l;return(l=(a=this.$slots).footer)===null||l===void 0?void 0:l.call(a)}})]}})}}),mo={padding:"8px 14px"},wo=e=>{const{borderRadius:t,boxShadow2:n,baseColor:r}=e;return Object.assign(Object.assign({},mo),{borderRadius:t,boxShadow:n,color:dn(r,"rgba(0, 0, 0, .85)"),textColor:r})},bo=un({name:"Tooltip",common:vt,peers:{Popover:Ot},self:wo}),yo=bo,$o=Object.assign(Object.assign({},_t),se.props),Ao=ee({name:"Tooltip",props:$o,__popover__:!0,setup(e){const t=se("Tooltip","-tooltip",void 0,yo,e),n=C(null);return Object.assign(Object.assign({},{syncPosition(){n.value.syncPosition()},setShow(i){n.value.setShow(i)}}),{popoverRef:n,mergedTheme:t,popoverThemeOverrides:Y(()=>t.value.self)})},render(){const{mergedTheme:e,internalExtraClass:t}=this;return M(go,Object.assign(Object.assign({},this.$props),{theme:e.peers.Popover,themeOverrides:e.peerOverrides.Popover,builtinThemeOverrides:this.popoverThemeOverrides,internalExtraClass:t.concat("tooltip"),ref:"popoverRef"}),this.$slots)}});export{Ao as N,On as V,Tn as a,gn as b,ue as c,$n as d,go as e,_t as f,R as g,An as h,Oo as i,Fn as j,Ot as p,lo as r,yo as t,yn as u};
