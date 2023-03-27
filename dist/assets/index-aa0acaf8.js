import{bp as Nt,ar as Dt,H as Tt,b5 as at,a2 as Vt,q as $t,x as Et,E as jt,z as xe,W as be,r as $,bq as At,A as R,br as Mt,V as x,o as Ve,U as st,L as Bt,ai as v,K as B,a5 as h,P as Ot,a4 as Lt,bs as Xt,Q as he,D as lt,X as Ft,bt as Kt,bl as Ke,bh as Ue,j as Ut,v as Yt,T as Wt,S as oe,am as Ye,b7 as We,n as it,a_ as Zt,R as ne,_ as Ht,u as qt,f as Ze,g as Ie,a as Y,c as W,h as ae,w as Ne,b as N,e as y,t as K,b6 as He,d as qe,ae as Jt,bu as Gt,F as Je,i as Ge,p as Qt,k as eo}from"./index-953b23c6.js";import{c as to}from"./_createCompounder-43c7f031.js";import{u as oo}from"./use-merged-state-b9c9e241.js";import{_ as no}from"./Rate-6afcaea6.js";import{u as ao}from"./use-message-37081a3e.js";import{u as so}from"./composables-3e6ed2ea.js";function lo(e){return Nt(Dt(e).toLowerCase())}var io=to(function(e,n,a){return n=n.toLowerCase(),e+(a?lo(n):n)});const Qe=io,ro=e=>({dotSize:"8px",dotColor:"rgba(255, 255, 255, .3)",dotColorActive:"rgba(255, 255, 255, 1)",dotColorFocus:"rgba(255, 255, 255, .5)",dotLineWidth:"16px",dotLineWidthActive:"24px",arrowColor:"#eee"}),uo={name:"Carousel",common:Tt,self:ro},co=uo;function fo(e){const{length:n}=e;return n>1&&(e.push(et(e[0],0,"append")),e.unshift(et(e[n-1],n-1,"prepend"))),e}function et(e,n,a){return at(e,{key:`carousel-item-duplicate-${n}-${a}`})}function tt(e,n,a){return a?e===0?n-3:e===n-1?0:e-1:e}function De(e,n){return n?e+1:e}function vo(e,n,a){return e<0?null:e===0?a?n-1:null:e-1}function po(e,n,a){return e>n-1?null:e===n-1?a?0:null:e+1}function ho(e,n){return n&&e>3?e-2:e}function ot(e){return window.TouchEvent&&e instanceof window.TouchEvent}function nt(e,n){let{offsetWidth:a,offsetHeight:c}=e;if(n){const g=getComputedStyle(e);a=a-parseFloat(g.getPropertyValue("padding-left"))-parseFloat(g.getPropertyValue("padding-right")),c=c-parseFloat(g.getPropertyValue("padding-top"))-parseFloat(g.getPropertyValue("padding-bottom"))}return{width:a,height:c}}function ge(e,n,a){return e<n?n:e>a?a:e}function go(e){if(e===void 0)return 0;if(typeof e=="number")return e;const n=/^((\d+)?\.?\d+?)(ms|s)?$/,a=e.match(n);if(a){const[,c,,g="ms"]=a;return Number(c)*(g==="ms"?1:1e3)}return 0}const rt=jt("n-carousel-methods"),mo=e=>Vt(rt,e),$e=(e="unknown",n="component")=>{const a=$t(rt);return a||Et(e,`\`${n}\` must be placed inside \`n-carousel\`.`),a},xo={total:{type:Number,default:0},currentIndex:{type:Number,default:0},dotType:{type:String,default:"dot"},trigger:{type:String,default:"click"},keyboard:Boolean},bo=xe({name:"CarouselDots",props:xo,setup(e){const{mergedClsPrefixRef:n}=be(e),a=$([]),c=$e();function g(w,p){switch(w.key){case"Enter":case" ":w.preventDefault(),c.to(p);return}e.keyboard&&P(w)}function m(w){e.trigger==="hover"&&c.to(w)}function i(w){e.trigger==="click"&&c.to(w)}function P(w){var p;if(w.shiftKey||w.altKey||w.ctrlKey||w.metaKey)return;const _=(p=document.activeElement)===null||p===void 0?void 0:p.nodeName.toLowerCase();if(_==="input"||_==="textarea")return;const{code:I}=w,O=I==="PageUp"||I==="ArrowUp",L=I==="PageDown"||I==="ArrowDown",z=I==="PageUp"||I==="ArrowRight",l=I==="PageDown"||I==="ArrowLeft",d=c.isVertical(),S=d?O:z,E=d?L:l;!S&&!E||(w.preventDefault(),S&&!c.isNextDisabled()?(c.next(),k(c.currentIndexRef.value)):E&&!c.isPrevDisabled()&&(c.prev(),k(c.currentIndexRef.value)))}function k(w){var p;(p=a.value[w])===null||p===void 0||p.focus()}return At(()=>a.value.length=0),{mergedClsPrefix:n,dotEls:a,handleKeydown:g,handleMouseenter:m,handleClick:i}},render(){const{mergedClsPrefix:e,dotEls:n}=this;return R("div",{class:[`${e}-carousel__dots`,`${e}-carousel__dots--${this.dotType}`],role:"tablist"},Mt(this.total,a=>{const c=a===this.currentIndex;return R("div",{"aria-selected":c,ref:g=>n.push(g),role:"button",tabindex:"0",class:[`${e}-carousel__dot`,c&&`${e}-carousel__dot--active`],key:a,onClick:()=>this.handleClick(a),onMouseenter:()=>this.handleMouseenter(a),onKeydown:g=>this.handleKeydown(g,a)})}))}}),wo=R("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},R("g",{fill:"none"},R("path",{d:"M10.26 3.2a.75.75 0 0 1 .04 1.06L6.773 8l3.527 3.74a.75.75 0 1 1-1.1 1.02l-4-4.25a.75.75 0 0 1 0-1.02l4-4.25a.75.75 0 0 1 1.06-.04z",fill:"currentColor"}))),_o=R("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},R("g",{fill:"none"},R("path",{d:"M5.74 3.2a.75.75 0 0 0-.04 1.06L9.227 8L5.7 11.74a.75.75 0 1 0 1.1 1.02l4-4.25a.75.75 0 0 0 0-1.02l-4-4.25a.75.75 0 0 0-1.06-.04z",fill:"currentColor"}))),yo=xe({name:"CarouselArrow",setup(e){const{mergedClsPrefixRef:n}=be(e),{isVertical:a,isPrevDisabled:c,isNextDisabled:g,prev:m,next:i}=$e();return{mergedClsPrefix:n,isVertical:a,isPrevDisabled:c,isNextDisabled:g,prev:m,next:i}},render(){const{mergedClsPrefix:e}=this;return R("div",{class:`${e}-carousel__arrow-group`},R("div",{class:[`${e}-carousel__arrow`,this.isPrevDisabled()&&`${e}-carousel__arrow--disabled`],role:"button",onClick:this.prev},wo),R("div",{class:[`${e}-carousel__arrow`,this.isNextDisabled()&&`${e}-carousel__arrow--disabled`],role:"button",onClick:this.next},_o))}}),me="CarouselItem",So=e=>{var n;return((n=e.type)===null||n===void 0?void 0:n.name)===me},Co=xe({name:me,setup(e){const{mergedClsPrefixRef:n}=be(e),a=$e(Qe(me),`n-${Qe(me)}`),c=$(),g=x(()=>{const{value:p}=c;return p?a.getSlideIndex(p):-1}),m=x(()=>a.isPrev(g.value)),i=x(()=>a.isNext(g.value)),P=x(()=>a.isActive(g.value)),k=x(()=>a.getSlideStyle(g.value));Ve(()=>a.addSlide(c.value)),st(()=>{a.removeSlide(c.value)});function w(p){const{value:_}=g;_!==void 0&&(a==null||a.onCarouselItemClick(_,p))}return{mergedClsPrefix:n,selfElRef:c,isPrev:m,isNext:i,isActive:P,index:g,style:k,handleClick:w}},render(){var e;const{$slots:n,mergedClsPrefix:a,isPrev:c,isNext:g,isActive:m,index:i,style:P}=this,k=[`${a}-carousel__slide`,{[`${a}-carousel__slide--current`]:m,[`${a}-carousel__slide--prev`]:c,[`${a}-carousel__slide--next`]:g}];return R("div",{ref:"selfElRef",class:k,role:"option",tabindex:"-1","data-index":i,"aria-hidden":!m,style:P,onClickCapture:this.handleClick},(e=n.default)===null||e===void 0?void 0:e.call(n,{isPrev:c,isNext:g,isActive:m,index:i}))}}),Ro=Bt("carousel",`
 position: relative;
 width: 100%;
 height: 100%;
 touch-action: pan-y;
 overflow: hidden;
`,[v("slides",`
 display: flex;
 width: 100%;
 height: 100%;
 transition-timing-function: var(--n-bezier);
 transition-property: transform;
 `,[v("slide",`
 flex-shrink: 0;
 position: relative;
 width: 100%;
 height: 100%;
 outline: none;
 overflow: hidden;
 `,[B("> img",`
 display: block;
 `)])]),v("dots",`
 position: absolute;
 display: flex;
 flex-wrap: nowrap;
 `,[h("dot",[v("dot",`
 height: var(--n-dot-size);
 width: var(--n-dot-size);
 background-color: var(--n-dot-color);
 border-radius: 50%;
 cursor: pointer;
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 outline: none;
 `,[B("&:focus",`
 background-color: var(--n-dot-color-focus);
 `),h("active",`
 background-color: var(--n-dot-color-active);
 `)])]),h("line",[v("dot",`
 border-radius: 9999px;
 width: var(--n-dot-line-width);
 height: 4px;
 background-color: var(--n-dot-color);
 cursor: pointer;
 transition:
 width .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 outline: none;
 `,[B("&:focus",`
 background-color: var(--n-dot-color-focus);
 `),h("active",`
 width: var(--n-dot-line-width-active);
 background-color: var(--n-dot-color-active);
 `)])])]),v("arrow",`
 transition: background-color .3s var(--n-bezier);
 cursor: pointer;
 height: 28px;
 width: 28px;
 display: flex;
 align-items: center;
 justify-content: center;
 background-color: rgba(255, 255, 255, .2);
 color: var(--n-arrow-color);
 border-radius: 8px;
 user-select: none;
 -webkit-user-select: none;
 font-size: 18px;
 `,[B("svg",`
 height: 1em;
 width: 1em;
 `),B("&:hover",`
 background-color: rgba(255, 255, 255, .3);
 `)]),h("vertical",`
 touch-action: pan-x;
 `,[v("slides",`
 flex-direction: column;
 `),h("fade",[v("slide",`
 top: 50%;
 left: unset;
 transform: translateY(-50%);
 `)]),h("card",[v("slide",`
 top: 50%;
 left: unset;
 transform: translateY(-50%) translateZ(-400px);
 `,[h("current",`
 transform: translateY(-50%) translateZ(0);
 `),h("prev",`
 transform: translateY(-100%) translateZ(-200px);
 `),h("next",`
 transform: translateY(0%) translateZ(-200px);
 `)])])]),h("usercontrol",[v("slides",[B(">",[B("div",`
 position: absolute;
 top: 50%;
 left: 50%;
 width: 100%;
 height: 100%;
 transform: translate(-50%, -50%);
 `)])])]),h("left",[v("dots",`
 transform: translateY(-50%);
 top: 50%;
 left: 12px;
 flex-direction: column;
 `,[h("line",[v("dot",`
 width: 4px;
 height: var(--n-dot-line-width);
 margin: 4px 0;
 transition:
 height .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 outline: none;
 `,[h("active",`
 height: var(--n-dot-line-width-active);
 `)])])]),v("dot",`
 margin: 4px 0;
 `)]),v("arrow-group",`
 position: absolute;
 display: flex;
 flex-wrap: nowrap;
 `),h("vertical",[v("arrow",`
 transform: rotate(90deg);
 `)]),h("show-arrow",[h("bottom",[v("dots",`
 transform: translateX(0);
 bottom: 18px;
 left: 18px;
 `)]),h("top",[v("dots",`
 transform: translateX(0);
 top: 18px;
 left: 18px;
 `)]),h("left",[v("dots",`
 transform: translateX(0);
 top: 18px;
 left: 18px;
 `)]),h("right",[v("dots",`
 transform: translateX(0);
 top: 18px;
 right: 18px;
 `)])]),h("left",[v("arrow-group",`
 bottom: 12px;
 left: 12px;
 flex-direction: column;
 `,[B("> *:first-child",`
 margin-bottom: 12px;
 `)])]),h("right",[v("dots",`
 transform: translateY(-50%);
 top: 50%;
 right: 12px;
 flex-direction: column;
 `,[h("line",[v("dot",`
 width: 4px;
 height: var(--n-dot-line-width);
 margin: 4px 0;
 transition:
 height .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 outline: none;
 `,[h("active",`
 height: var(--n-dot-line-width-active);
 `)])])]),v("dot",`
 margin: 4px 0;
 `),v("arrow-group",`
 bottom: 12px;
 right: 12px;
 flex-direction: column;
 `,[B("> *:first-child",`
 margin-bottom: 12px;
 `)])]),h("top",[v("dots",`
 transform: translateX(-50%);
 top: 12px;
 left: 50%;
 `,[h("line",[v("dot",`
 margin: 0 4px;
 `)])]),v("dot",`
 margin: 0 4px;
 `),v("arrow-group",`
 top: 12px;
 right: 12px;
 `,[B("> *:first-child",`
 margin-right: 12px;
 `)])]),h("bottom",[v("dots",`
 transform: translateX(-50%);
 bottom: 12px;
 left: 50%;
 `,[h("line",[v("dot",`
 margin: 0 4px;
 `)])]),v("dot",`
 margin: 0 4px;
 `),v("arrow-group",`
 bottom: 12px;
 right: 12px;
 `,[B("> *:first-child",`
 margin-right: 12px;
 `)])]),h("fade",[v("slide",`
 position: absolute;
 opacity: 0;
 transition-property: opacity;
 pointer-events: none;
 `,[h("current",`
 opacity: 1;
 pointer-events: auto;
 `)])]),h("card",[v("slides",`
 perspective: 1000px;
 `),v("slide",`
 position: absolute;
 left: 50%;
 opacity: 0;
 transform: translateX(-50%) translateZ(-400px);
 transition-property: opacity, transform;
 `,[h("current",`
 opacity: 1;
 transform: translateX(-50%) translateZ(0);
 z-index: 1;
 `),h("prev",`
 opacity: 0.4;
 transform: translateX(-100%) translateZ(-200px);
 `),h("next",`
 opacity: 0.4;
 transform: translateX(0%) translateZ(-200px);
 `)])])]),Po=["transitionDuration","transitionTimingFunction"],ko=Object.assign(Object.assign({},lt.props),{defaultIndex:{type:Number,default:0},currentIndex:Number,showArrow:Boolean,dotType:{type:String,default:"dot"},dotPlacement:{type:String,default:"bottom"},slidesPerView:{type:[Number,String],default:1},spaceBetween:{type:Number,default:0},centeredSlides:Boolean,direction:{type:String,default:"horizontal"},autoplay:Boolean,interval:{type:Number,default:5e3},loop:{type:Boolean,default:!0},effect:{type:String,default:"slide"},showDots:{type:Boolean,default:!0},trigger:{type:String,default:"click"},transitionStyle:{type:Object,default:()=>({transitionDuration:"300ms"})},transitionProps:Object,draggable:Boolean,prevSlideStyle:[Object,String],nextSlideStyle:[Object,String],touchable:{type:Boolean,default:!0},mousewheel:Boolean,keyboard:Boolean,"onUpdate:currentIndex":Function,onUpdateCurrentIndex:Function});let Te=!1;const zo=xe({name:"Carousel",props:ko,setup(e){const{mergedClsPrefixRef:n,inlineThemeDisabled:a}=be(e),c=$(null),g=$(null),m=$([]),i={value:[]},P=x(()=>e.direction==="vertical"),k=x(()=>P.value?"height":"width"),w=x(()=>P.value?"bottom":"right"),p=x(()=>e.effect==="slide"),_=x(()=>e.loop&&e.slidesPerView===1&&p.value),I=x(()=>e.effect==="custom"),O=x(()=>!p.value||e.centeredSlides?1:e.slidesPerView),L=x(()=>I.value?1:e.slidesPerView),z=x(()=>O.value==="auto"||e.slidesPerView==="auto"&&e.centeredSlides),l=$({width:0,height:0}),d=x(()=>{const{value:t}=m;if(!t.length)return[];const{value:o}=z;if(o)return t.map(C=>nt(C));const{value:s}=L,{value:u}=l,{value:f}=k;let r=u[f];if(s!=="auto"){const{spaceBetween:C}=e,V=r-(s-1)*C,pe=1/Math.max(1,s);r=V*pe}const b=Object.assign(Object.assign({},u),{[f]:r});return t.map(()=>b)}),S=x(()=>{const{value:t}=d;if(!t.length)return[];const{centeredSlides:o,spaceBetween:s}=e,{value:u}=k,{[u]:f}=l.value;let r=0;return t.map(({[u]:b})=>{let C=r;return o&&(C+=(b-f)/2),r+=b+s,C})}),E=$(!1),F=x(()=>{const{transitionStyle:t}=e;return t?We(t,Po):{}}),G=x(()=>I.value?0:go(F.value.transitionDuration)),D=x(()=>{const{value:t}=m;if(!t.length)return[];const o=!(z.value||L.value===1),s=b=>{if(o){const{value:C}=k;return{[C]:`${d.value[b][C]}px`}}};if(I.value)return t.map((b,C)=>s(C));const{effect:u,spaceBetween:f}=e,{value:r}=w;return t.reduce((b,C,V)=>{const pe=Object.assign(Object.assign({},s(V)),{[`margin-${r}`]:`${f}px`});return b.push(pe),E.value&&(u==="fade"||u==="card")&&Object.assign(pe,F.value),b},[])}),T=x(()=>{const{value:t}=O,{length:o}=m.value;if(t!=="auto")return Math.max(o-t,0)+1;{const{value:s}=d,{length:u}=s;if(!u)return o;const{value:f}=S,{value:r}=k,b=l.value[r];let C=s[s.length-1][r],V=u;for(;V>1&&C<b;)V--,C+=f[V]-f[V-1];return ge(V+1,1,u)}}),se=x(()=>ho(T.value,_.value)),ut=De(e.defaultIndex,_.value),we=$(tt(ut,T.value,_.value)),j=oo(Ot(e,"currentIndex"),we),A=x(()=>De(j.value,_.value));function Q(t){var o,s;t=ge(t,0,T.value-1);const u=tt(t,T.value,_.value),{value:f}=j;u!==j.value&&(we.value=u,(o=e["onUpdate:currentIndex"])===null||o===void 0||o.call(e,u,f),(s=e.onUpdateCurrentIndex)===null||s===void 0||s.call(e,u,f))}function le(t=A.value){return vo(t,T.value,e.loop)}function ie(t=A.value){return po(t,T.value,e.loop)}function ct(t){const o=Z(t);return o!==null&&le()===o}function dt(t){const o=Z(t);return o!==null&&ie()===o}function je(t){return A.value===Z(t)}function ft(t){return j.value===t}function Ae(){return le()===null}function Me(){return ie()===null}function _e(t){const o=ge(De(t,_.value),0,T.value);(t!==j.value||o!==A.value)&&Q(o)}function ye(){const t=le();t!==null&&Q(t)}function re(){const t=ie();t!==null&&Q(t)}function vt(){(!M||!_.value)&&ye()}function pt(){(!M||!_.value)&&re()}let M=!1,U=0;const Se=$({});function ue(t,o=0){Se.value=Object.assign({},F.value,{transform:P.value?`translateY(${-t}px)`:`translateX(${-t}px)`,transitionDuration:`${o}ms`})}function ee(t=0){p.value?Ce(A.value,t):U!==0&&(!M&&t>0&&(M=!0),ue(U=0,t))}function Ce(t,o){const s=Be(t);s!==U&&o>0&&(M=!0),U=Be(A.value),ue(s,o)}function Be(t){let o;return t>=T.value-1?o=Oe():o=S.value[t]||0,o}function Oe(){if(O.value==="auto"){const{value:t}=k,{[t]:o}=l.value,{value:s}=S,u=s[s.length-1];let f;if(u===void 0)f=o;else{const{value:r}=d;f=u+r[r.length-1][t]}return f-o}else{const{value:t}=S;return t[T.value-1]||0}}const te={currentIndexRef:j,to:_e,prev:vt,next:pt,isVertical:()=>P.value,isHorizontal:()=>!P.value,isPrev:ct,isNext:dt,isActive:je,isPrevDisabled:Ae,isNextDisabled:Me,getSlideIndex:Z,getSlideStyle:mt,addSlide:ht,removeSlide:gt,onCarouselItemClick:xt};mo(te);function ht(t){t&&m.value.push(t)}function gt(t){if(!t)return;const o=Z(t);o!==-1&&m.value.splice(o,1)}function Z(t){return typeof t=="number"?t:t?m.value.indexOf(t):-1}function mt(t){const o=Z(t);if(o!==-1){const s=[D.value[o]],u=te.isPrev(o),f=te.isNext(o);return u&&s.push(e.prevSlideStyle||""),f&&s.push(e.nextSlideStyle||""),it(s)}}function xt(t,o){let s=!M&&!fe&&!ze;e.effect==="card"&&s&&!je(t)&&(_e(t),s=!1),s||(o.preventDefault(),o.stopPropagation())}let ce=null;function de(){ce&&(clearInterval(ce),ce=null)}function H(){de(),!e.autoplay||se.value<2||(ce=window.setInterval(re,e.interval))}let Re=0,Pe=0,X=0,ke=0,fe=!1,ze=!1;function Le(t){var o;if(Te||!(!((o=g.value)===null||o===void 0)&&o.contains(Zt(t))))return;Te=!0,fe=!0,ze=!1,ke=Date.now(),de(),t.type!=="touchstart"&&!t.target.isContentEditable&&t.preventDefault();const s=ot(t)?t.touches[0]:t;P.value?Pe=s.clientY:Re=s.clientX,e.touchable&&(ne("touchmove",document,ve,{passive:!0}),ne("touchend",document,q),ne("touchcancel",document,q)),e.draggable&&(ne("mousemove",document,ve),ne("mouseup",document,q))}function ve(t){const{value:o}=P,{value:s}=k,u=ot(t)?t.touches[0]:t,f=o?u.clientY-Pe:u.clientX-Re,r=l.value[s];X=ge(f,-r,r),t.cancelable&&t.preventDefault(),p.value&&ue(U-X,0)}function q(){const{value:t}=A;let o=t;if(!M&&X!==0&&p.value){const s=U-X,u=[...S.value.slice(0,T.value-1),Oe()];let f=null;for(let r=0;r<u.length;r++){const b=Math.abs(u[r]-s);if(f!==null&&f<b)break;f=b,o=r}}if(o===t){const s=Date.now()-ke,{value:u}=k,f=l.value[u];X>f/2||X/s>.4?o=le(t):(X<-f/2||X/s<-.4)&&(o=ie(t))}o!==null&&o!==t?(ze=!0,Q(o),Ye(()=>{(!_.value||we.value!==j.value)&&ee(G.value)})):ee(G.value),Xe(),H()}function Xe(){fe&&(Te=!1),fe=!1,Re=0,Pe=0,X=0,ke=0,oe("touchmove",document,ve),oe("touchend",document,q),oe("touchcancel",document,q),oe("mousemove",document,ve),oe("mouseup",document,q)}function bt(){if(p.value&&M){const{value:t}=A;Ce(t,0)}else H();p.value&&(Se.value.transitionDuration="0ms"),M=!1}function wt(t){if(t.preventDefault(),M)return;let{deltaX:o,deltaY:s}=t;t.shiftKey&&!o&&(o=s);const u=-1,f=1,r=(o||s)>0?f:u;let b=0,C=0;P.value?C=r:b=r;const V=10;(C*s>=V||b*o>=V)&&(r===f&&!Me()?re():r===u&&!Ae()&&ye())}function _t(){l.value=nt(c.value,!0),H()}function yt(){var t,o;z.value&&((o=(t=d.effect).scheduler)===null||o===void 0||o.call(t),d.effect.run())}function St(){e.autoplay&&de()}function Ct(){e.autoplay&&H()}Ve(()=>{Lt(H),requestAnimationFrame(()=>E.value=!0)}),st(()=>{Xe(),de()}),Xt(()=>{const{value:t}=m,{value:o}=i,s=new Map,u=r=>s.has(r)?s.get(r):-1;let f=!1;for(let r=0;r<t.length;r++){const b=o.findIndex(C=>C.el===t[r]);b!==r&&(f=!0),s.set(t[r],b)}f&&t.sort((r,b)=>u(r)-u(b))}),he(A,(t,o)=>{if(t!==o)if(H(),p.value){if(_.value&&se.value>2){const{value:s}=T;t===s-2&&o===1?t=0:t===1&&o===s-2&&(t=s-1)}Ce(t,G.value)}else ee()},{immediate:!0}),he([_,O],()=>void Ye(()=>Q(A.value))),he(S,()=>p.value&&ee(),{deep:!0}),he(p,t=>{t?ee():(M=!1,ue(U=0))});const Rt=x(()=>({onTouchstartPassive:e.touchable?Le:void 0,onMousedown:e.draggable?Le:void 0,onWheel:e.mousewheel?wt:void 0})),Pt=x(()=>Object.assign(Object.assign({},We(te,["to","prev","next","isPrevDisabled","isNextDisabled"])),{total:se.value,currentIndex:j.value})),kt=x(()=>({total:se.value,currentIndex:j.value,to:te.to})),zt={getCurrentIndex:()=>j.value,to:_e,prev:ye,next:re},It=lt("Carousel","-carousel",Ro,co,e,n),Fe=x(()=>{const{common:{cubicBezierEaseInOut:t},self:{dotSize:o,dotColor:s,dotColorActive:u,dotColorFocus:f,dotLineWidth:r,dotLineWidthActive:b,arrowColor:C}}=It.value;return{"--n-bezier":t,"--n-dot-color":s,"--n-dot-color-focus":f,"--n-dot-color-active":u,"--n-dot-size":o,"--n-dot-line-width":r,"--n-dot-line-width-active":b,"--n-arrow-color":C}}),J=a?Ft("carousel",void 0,Fe,e):void 0;return Object.assign(Object.assign({mergedClsPrefix:n,selfElRef:c,slidesElRef:g,slideVNodes:i,duplicatedable:_,userWantsControl:I,autoSlideSize:z,displayIndex:j,realIndex:A,slideStyles:D,translateStyle:Se,slidesControlListeners:Rt,handleTransitionEnd:bt,handleResize:_t,handleSlideResize:yt,handleMouseenter:St,handleMouseleave:Ct,isActive:ft,arrowSlotProps:Pt,dotSlotProps:kt},zt),{cssVars:a?void 0:Fe,themeClass:J==null?void 0:J.themeClass,onRender:J==null?void 0:J.onRender})},render(){var e;const{mergedClsPrefix:n,showArrow:a,userWantsControl:c,slideStyles:g,dotType:m,dotPlacement:i,slidesControlListeners:P,transitionProps:k={},arrowSlotProps:w,dotSlotProps:p,$slots:{default:_,dots:I,arrow:O}}=this,L=_&&Kt(_())||[];let z=Io(L);return z.length||(z=L.map(l=>R(Co,null,{default:()=>at(l)}))),this.duplicatedable&&(z=fo(z)),this.slideVNodes.value=z,this.autoSlideSize&&(z=z.map(l=>R(Ke,{onResize:this.handleSlideResize},{default:()=>l}))),(e=this.onRender)===null||e===void 0||e.call(this),R("div",Object.assign({ref:"selfElRef",class:[this.themeClass,`${n}-carousel`,this.direction==="vertical"&&`${n}-carousel--vertical`,this.showArrow&&`${n}-carousel--show-arrow`,`${n}-carousel--${i}`,`${n}-carousel--${this.direction}`,`${n}-carousel--${this.effect}`,c&&`${n}-carousel--usercontrol`],style:this.cssVars},P,{onMouseenter:this.handleMouseenter,onMouseleave:this.handleMouseleave}),R(Ke,{onResize:this.handleResize},{default:()=>R("div",{ref:"slidesElRef",class:`${n}-carousel__slides`,role:"listbox",style:this.translateStyle,onTransitionend:this.handleTransitionEnd},c?z.map((l,d)=>R("div",{style:g[d],key:d},Ut(R(Wt,Object.assign({},k),{default:()=>l}),[[Yt,this.isActive(d)]]))):z)}),this.showDots&&p.total>1&&Ue(I,p,()=>[R(bo,{key:m+i,total:p.total,currentIndex:p.currentIndex,dotType:m,trigger:this.trigger,keyboard:this.keyboard})]),a&&Ue(O,w,()=>[R(yo,null)]))}});function Io(e){return e.reduce((n,a)=>(So(a)&&n.push(a),n),[])}const Ee=e=>(Qt("data-v-4763c484"),e=e(),eo(),e),No={class:"w-full p-2",style:{"background-image":"url('/bg_deatied.png')","background-size":"cover"}},Do=["src"],To={class:"flex m-5 pingfang_jian justify-between"},Vo={class:"text-xl pingfang font-bold text-purple-600"},$o={class:"text-xs text-gray-400"},Eo={class:"text-xl font-bold text-purple-500"},jo=["src"],Ao={class:"text-gray-500 text-xs ml-2 pt-1"},Mo={class:"text-black pt-3 flex items-center"},Bo=Ee(()=>y("span",null,"商家信用分：",-1)),Oo={class:"w-90_ mx-auto flex items-start pingfang text-xs text-gray-400 mt-3"},Lo={class:"flex justify-between items-center"},Xo={class:"flex items-center"},Fo=Ee(()=>y("span",null,"评分:",-1)),Ko=Ee(()=>y("span",null,"评价：",-1)),Uo={class:"break-all"},Yo={class:"flex w-full justify-end shadow-2xl border-t mt-24"},Wo={class:"w-2/3 p-4 pingfang text-xs"},Zo={key:0,class:"text-white bg-purple-700 p-2 transition cursor-pointer active:scale-50 rounded-xl hover:scale-125"},Ho={__name:"index",setup(e){const n=qt(),a=ao(),c=so(),g=localStorage.getItem("id");let m=$(),i=Ze({name:"",price:"",address:"",img:[],author:"",author_img:"",author_title:"这是用户的简介....",shop_title:"",id:m,user_id:"",shop_phone:""});Ve(()=>{m.value=n.currentRoute.value.params.id,Ie.post("/getGoodsById",{goods_id:m.value}).then(l=>{if(console.log(l.data),l.data.code==1)i.name=l.data.data[0].name,i.price=l.data.data[0].price,i.shop_title=l.data.data[0].introduce,i.img=l.data.data[0].img,i.address=l.data.data[0].address,i.author=l.data.data[0].username,i.author_img=l.data.data[0].user_img,i.user_id=l.data.data[0].user_id,i.shop_phone=l.data.data[0].shop_phone,w();else return})});let P=Ze([]),k=$();const w=()=>{Ie.post("/getComments",{shop_id:i.user_id}).then(l=>{if(console.log("所有评价",l.data),l.data.code===1){P.value=l.data.data;let d=[];if(P.value.map(S=>{d.push(Number(S.reviewScore))}),console.log("scoreArray",d),d){let S=d.reduce((E,F)=>E+F,0);console.log("和",S),k.value=S/d.length}else k.value=0}})},p=$(!1),_={width:"600px"},I={content:"soft",footer:"soft"};n.afterEach(()=>{m.value=n.currentRoute.value.params.id,Ie.post("/getGoodsById",{goods_id:m.value}).then(l=>{if(l.data.code==1)i.name=l.data.data[0].name,i.price=l.data.data[0].price,i.shop_title=l.data.data[0].introduce,i.img=l.data.data[0].img,i.address=l.data.data[0].address,i.author=l.data.data[0].username,i.author_img=l.data.data[0].user_img;else return})});function O(){let l=localStorage.getItem("cart");if(l){l=JSON.parse(l);let d=l.findIndex(S=>S.id==m.value);d!=-1?l[d].count++:l.push({id:m.value,count:1}),localStorage.setItem("cart",JSON.stringify(l)),a.success("添加成功")}else localStorage.setItem("cart",JSON.stringify([{id:m.value,count:1}])),a.success("添加成功")}function L(l,d,S){z(d,S,l)}function z(l,d,S){c.warning({title:"跳转",content:"跳转到"+d,positiveText:"确定",negativeText:"取消",onPositiveClick:()=>{a.success("确定");let E=[{id:S,count:1}];n.push("/buy/"+JSON.stringify(E))},onNegativeClick:()=>{a.error("取消")}})}return(l,d)=>{const S=Jt,E=zo,F=no,G=Gt;return Y(),W("div",No,[ae(S,{onClick:d[0]||(d[0]=D=>N(n).back()),class:"pingfang rounded-xl font-bold"},{default:Ne(()=>[He("Back")]),_:1}),ae(E,{"show-arrow":"",class:"h-72 w-90_ mx-auto mt-4 shadow-2xl rounded-xl"},{default:Ne(()=>[(Y(!0),W(Je,null,Ge(N(i).img,(D,T)=>(Y(),W("img",{class:"carousel-img",src:D},null,8,Do))),256))]),_:1}),y("div",To,[y("div",Vo,[y("div",null,K(N(i).name),1),y("div",$o,"发货地址:"+K(N(i).address),1)]),y("div",Eo,"￥"+K(N(i).price),1)]),y("div",{class:"w-90_ mx-auto flex items-start pingfang",onClick:d[1]||(d[1]=D=>p.value=!0),style:{cursor:"pointer"}},[y("img",{src:N(i).author_img,class:"w-12 h-12 rounded-xl object-cover",alt:""},null,8,jo),y("div",Ao,[y("div",null,K(N(i).author),1),y("div",Mo,[Bo,ae(F,{size:"small","allow-half":"",value:N(k),readonly:""},null,8,["value"])])])]),y("div",Oo,[y("div",null,"联系方式: "+K(N(i).shop_phone),1)]),ae(G,{show:p.value,"onUpdate:show":d[2]||(d[2]=D=>p.value=D),style:it([{"max-height":"60vh"},_]),class:"custom-card overflow-hidden overflow-y-scroll",preset:"card",title:"查看评价",size:"huge",bordered:!1,segmented:I},{default:Ne(()=>[(Y(!0),W(Je,null,Ge(N(P).value,D=>(Y(),W("div",{key:D._id,class:"pingfang_jian text-sm pb-2 mb-3",style:{"border-bottom":"1px solid #f0f0f2"}},[y("div",Lo,[y("span",null,"评论人:"+K(D.observerName),1),y("div",Xo,[Fo,ae(F,{"allow-half":"",size:"small",value:D.reviewScore,readonly:""},null,8,["value"])])]),y("div",null,[Ko,y("span",Uo,K(D.comment),1)])]))),128))]),_:1},8,["show"]),y("div",Yo,[y("div",Wo,[He(" 简介: "+K(N(i).shop_title)+" ",1),y("div",{onClick:O,class:"flex justify-between mt-12"},[N(i).user_id!==N(g)?(Y(),W("div",Zo,"加入购物车")):qe("",!0),N(i).user_id!==N(g)?(Y(),W("div",{key:1,class:"bg-yellow-400 hover:scale-125 transition cursor-pointer active:scale-50 p-2 text-white rounded-xl",onClick:d[3]||(d[3]=D=>L(N(m),"/buy","支付"))},"立即购买")):qe("",!0)])])])])}}},on=Ht(Ho,[["__scopeId","data-v-4763c484"]]);export{on as default};
