import{r as q}from"./index-888bc847.js";import{a as Le}from"./axios-a900fd7e.js";import{_ as Rt}from"./_plugin-vue_export-helper-c27b6911.js";import{_ as Pt}from"./Button-6285efa0.js";import{v as zt,T as kt}from"./runtime-dom.esm-bundler-af906a5a.js";import{t as It,c as Nt}from"./create-injection-key-b5917821.js";import{W as et,p as Dt,i as Tt,d as ve,r as j,ac as Vt,h as y,c as g,o as Ne,U as tt,V as $t,Z as Et,v as jt,P as ce,Y as Mt,O as Xe,a8 as At,a as Bt,e as Pe,a3 as ze,g as Fe,w as Ye,N as E,a6 as z,a5 as U,Q as Ke,F as Ot,a7 as Lt,a9 as Xt,aa as Ft}from"./runtime-core.esm-bundler-36726079.js";import{c as Yt,u as pe,b as Kt,d as v,a as $,e as h,g as ot,h as Ut}from"./light-f42f174c.js";import{i as Wt}from"./index-f1b31987.js";import{u as Zt,t as Ht,f as Jt,V as Ue,k as We,g as qt}from"./upperFirst-203885fe.js";import{c as Gt}from"./_createCompounder-35d342c0.js";import{u as Qt}from"./use-merged-state-f2954baa.js";import{b as Ze}from"./FadeInExpandTransition-c7e27747.js";import{a as G,o as Q}from"./delegate-b614532e.js";import{u as eo,a as to}from"./use-message-31edf5b3.js";import"./icon-switch.cssr-a87b313c.js";import"./context-84471831.js";function oo(e){return Zt(Ht(e).toLowerCase())}var no=Gt(function(e,n,a){return n=n.toLowerCase(),e+(a?oo(n):n)});const He=no,ao=e=>({dotSize:"8px",dotColor:"rgba(255, 255, 255, .3)",dotColorActive:"rgba(255, 255, 255, 1)",dotColorFocus:"rgba(255, 255, 255, .5)",dotLineWidth:"16px",dotLineWidthActive:"24px",arrowColor:"#eee"}),so={name:"Carousel",common:Yt,self:ao},io=so;function ro(e){const{length:n}=e;return n>1&&(e.push(Je(e[0],0,"append")),e.unshift(Je(e[n-1],n-1,"prepend"))),e}function Je(e,n,a){return et(e,{key:`carousel-item-duplicate-${n}-${a}`})}function qe(e,n,a){return a?e===0?n-3:e===n-1?0:e-1:e}function ke(e,n){return n?e+1:e}function lo(e,n,a){return e<0?null:e===0?a?n-1:null:e-1}function uo(e,n,a){return e>n-1?null:e===n-1?a?0:null:e+1}function co(e,n){return n&&e>3?e-2:e}function Ge(e){return window.TouchEvent&&e instanceof window.TouchEvent}function Qe(e,n){let{offsetWidth:a,offsetHeight:l}=e;if(n){const i=getComputedStyle(e);a=a-parseFloat(i.getPropertyValue("padding-left"))-parseFloat(i.getPropertyValue("padding-right")),l=l-parseFloat(i.getPropertyValue("padding-top"))-parseFloat(i.getPropertyValue("padding-bottom"))}return{width:a,height:l}}function de(e,n,a){return e<n?n:e>a?a:e}function fo(e){if(e===void 0)return 0;if(typeof e=="number")return e;const n=/^((\d+)?\.?\d+?)(ms|s)?$/,a=e.match(n);if(a){const[,l,,i="ms"]=a;return Number(l)*(i==="ms"?1:1e3)}return 0}const nt=Nt("n-carousel-methods"),vo=e=>Dt(nt,e),De=(e="unknown",n="component")=>{const a=Tt(nt);return a||It(e,`\`${n}\` must be placed inside \`n-carousel\`.`),a},po={total:{type:Number,default:0},currentIndex:{type:Number,default:0},dotType:{type:String,default:"dot"},trigger:{type:String,default:"click"},keyboard:Boolean},ho=ve({name:"CarouselDots",props:po,setup(e){const{mergedClsPrefixRef:n}=pe(e),a=j([]),l=De();function i(p,c){switch(p.key){case"Enter":case" ":p.preventDefault(),l.to(c);return}e.keyboard&&S(p)}function w(p){e.trigger==="hover"&&l.to(p)}function C(p){e.trigger==="click"&&l.to(p)}function S(p){var c;if(p.shiftKey||p.altKey||p.ctrlKey||p.metaKey)return;const m=(c=document.activeElement)===null||c===void 0?void 0:c.nodeName.toLowerCase();if(m==="input"||m==="textarea")return;const{code:_}=p,M=_==="PageUp"||_==="ArrowUp",O=_==="PageDown"||_==="ArrowDown",R=_==="PageUp"||_==="ArrowRight",P=_==="PageDown"||_==="ArrowLeft",k=l.isVertical(),A=k?M:R,W=k?O:P;!A&&!W||(p.preventDefault(),A&&!l.isNextDisabled()?(l.next(),r(l.currentIndexRef.value)):W&&!l.isPrevDisabled()&&(l.prev(),r(l.currentIndexRef.value)))}function r(p){var c;(c=a.value[p])===null||c===void 0||c.focus()}return Vt(()=>a.value.length=0),{mergedClsPrefix:n,dotEls:a,handleKeydown:i,handleMouseenter:w,handleClick:C}},render(){const{mergedClsPrefix:e,dotEls:n}=this;return y("div",{class:[`${e}-carousel__dots`,`${e}-carousel__dots--${this.dotType}`],role:"tablist"},Wt(this.total,a=>{const l=a===this.currentIndex;return y("div",{"aria-selected":l,ref:i=>n.push(i),role:"button",tabindex:"0",class:[`${e}-carousel__dot`,l&&`${e}-carousel__dot--active`],key:a,onClick:()=>this.handleClick(a),onMouseenter:()=>this.handleMouseenter(a),onKeydown:i=>this.handleKeydown(i,a)})}))}}),go=y("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},y("g",{fill:"none"},y("path",{d:"M10.26 3.2a.75.75 0 0 1 .04 1.06L6.773 8l3.527 3.74a.75.75 0 1 1-1.1 1.02l-4-4.25a.75.75 0 0 1 0-1.02l4-4.25a.75.75 0 0 1 1.06-.04z",fill:"currentColor"}))),mo=y("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},y("g",{fill:"none"},y("path",{d:"M5.74 3.2a.75.75 0 0 0-.04 1.06L9.227 8L5.7 11.74a.75.75 0 1 0 1.1 1.02l4-4.25a.75.75 0 0 0 0-1.02l-4-4.25a.75.75 0 0 0-1.06-.04z",fill:"currentColor"}))),xo=ve({name:"CarouselArrow",setup(e){const{mergedClsPrefixRef:n}=pe(e),{isVertical:a,isPrevDisabled:l,isNextDisabled:i,prev:w,next:C}=De();return{mergedClsPrefix:n,isVertical:a,isPrevDisabled:l,isNextDisabled:i,prev:w,next:C}},render(){const{mergedClsPrefix:e}=this;return y("div",{class:`${e}-carousel__arrow-group`},y("div",{class:[`${e}-carousel__arrow`,this.isPrevDisabled()&&`${e}-carousel__arrow--disabled`],role:"button",onClick:this.prev},go),y("div",{class:[`${e}-carousel__arrow`,this.isNextDisabled()&&`${e}-carousel__arrow--disabled`],role:"button",onClick:this.next},mo))}}),fe="CarouselItem",wo=e=>{var n;return((n=e.type)===null||n===void 0?void 0:n.name)===fe},bo=ve({name:fe,setup(e){const{mergedClsPrefixRef:n}=pe(e),a=De(He(fe),`n-${He(fe)}`),l=j(),i=g(()=>{const{value:c}=l;return c?a.getSlideIndex(c):-1}),w=g(()=>a.isPrev(i.value)),C=g(()=>a.isNext(i.value)),S=g(()=>a.isActive(i.value)),r=g(()=>a.getSlideStyle(i.value));Ne(()=>a.addSlide(l.value)),tt(()=>{a.removeSlide(l.value)});function p(c){const{value:m}=i;m!==void 0&&(a==null||a.onCarouselItemClick(m,c))}return{mergedClsPrefix:n,selfElRef:l,isPrev:w,isNext:C,isActive:S,index:i,style:r,handleClick:p}},render(){var e;const{$slots:n,mergedClsPrefix:a,isPrev:l,isNext:i,isActive:w,index:C,style:S}=this,r=[`${a}-carousel__slide`,{[`${a}-carousel__slide--current`]:w,[`${a}-carousel__slide--prev`]:l,[`${a}-carousel__slide--next`]:i}];return y("div",{ref:"selfElRef",class:r,role:"option",tabindex:"-1","data-index":C,"aria-hidden":!w,style:S,onClickCapture:this.handleClick},(e=n.default)===null||e===void 0?void 0:e.call(n,{isPrev:l,isNext:i,isActive:w,index:C}))}}),yo=Kt("carousel",`
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
 `,[$("> img",`
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
 `,[$("&:focus",`
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
 `,[$("&:focus",`
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
 `,[$("svg",`
 height: 1em;
 width: 1em;
 `),$("&:hover",`
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
 `)])])]),h("usercontrol",[v("slides",[$(">",[$("div",`
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
 `,[$("> *:first-child",`
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
 `,[$("> *:first-child",`
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
 `,[$("> *:first-child",`
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
 `,[$("> *:first-child",`
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
 `)])])]),_o=["transitionDuration","transitionTimingFunction"],So=Object.assign(Object.assign({},ot.props),{defaultIndex:{type:Number,default:0},currentIndex:Number,showArrow:Boolean,dotType:{type:String,default:"dot"},dotPlacement:{type:String,default:"bottom"},slidesPerView:{type:[Number,String],default:1},spaceBetween:{type:Number,default:0},centeredSlides:Boolean,direction:{type:String,default:"horizontal"},autoplay:Boolean,interval:{type:Number,default:5e3},loop:{type:Boolean,default:!0},effect:{type:String,default:"slide"},showDots:{type:Boolean,default:!0},trigger:{type:String,default:"click"},transitionStyle:{type:Object,default:()=>({transitionDuration:"300ms"})},transitionProps:Object,draggable:Boolean,prevSlideStyle:[Object,String],nextSlideStyle:[Object,String],touchable:{type:Boolean,default:!0},mousewheel:Boolean,keyboard:Boolean,"onUpdate:currentIndex":Function,onUpdateCurrentIndex:Function});let Ie=!1;const Co=ve({name:"Carousel",props:So,setup(e){const{mergedClsPrefixRef:n,inlineThemeDisabled:a}=pe(e),l=j(null),i=j(null),w=j([]),C={value:[]},S=g(()=>e.direction==="vertical"),r=g(()=>S.value?"height":"width"),p=g(()=>S.value?"bottom":"right"),c=g(()=>e.effect==="slide"),m=g(()=>e.loop&&e.slidesPerView===1&&c.value),_=g(()=>e.effect==="custom"),M=g(()=>!c.value||e.centeredSlides?1:e.slidesPerView),O=g(()=>_.value?1:e.slidesPerView),R=g(()=>M.value==="auto"||e.slidesPerView==="auto"&&e.centeredSlides),P=j({width:0,height:0}),k=g(()=>{const{value:t}=w;if(!t.length)return[];const{value:o}=R;if(o)return t.map(b=>Qe(b));const{value:s}=O,{value:d}=P,{value:f}=r;let u=d[f];if(s!=="auto"){const{spaceBetween:b}=e,I=u-(s-1)*b,ue=1/Math.max(1,s);u=I*ue}const x=Object.assign(Object.assign({},d),{[f]:u});return t.map(()=>x)}),A=g(()=>{const{value:t}=k;if(!t.length)return[];const{centeredSlides:o,spaceBetween:s}=e,{value:d}=r,{[d]:f}=P.value;let u=0;return t.map(({[d]:x})=>{let b=u;return o&&(b+=(x-f)/2),u+=x+s,b})}),W=j(!1),he=g(()=>{const{transitionStyle:t}=e;return t?We(t,_o):{}}),ge=g(()=>_.value?0:fo(he.value.transitionDuration)),Te=g(()=>{const{value:t}=w;if(!t.length)return[];const o=!(R.value||O.value===1),s=x=>{if(o){const{value:b}=r;return{[b]:`${k.value[x][b]}px`}}};if(_.value)return t.map((x,b)=>s(b));const{effect:d,spaceBetween:f}=e,{value:u}=p;return t.reduce((x,b,I)=>{const ue=Object.assign(Object.assign({},s(I)),{[`margin-${u}`]:`${f}px`});return x.push(ue),W.value&&(d==="fade"||d==="card")&&Object.assign(ue,he.value),x},[])}),N=g(()=>{const{value:t}=M,{length:o}=w.value;if(t!=="auto")return Math.max(o-t,0)+1;{const{value:s}=k,{length:d}=s;if(!d)return o;const{value:f}=A,{value:u}=r,x=P.value[u];let b=s[s.length-1][u],I=d;for(;I>1&&b<x;)I--,b+=f[I]-f[I-1];return de(I+1,1,d)}}),ee=g(()=>co(N.value,m.value)),at=ke(e.defaultIndex,m.value),me=j(qe(at,N.value,m.value)),D=Qt($t(e,"currentIndex"),me),T=g(()=>ke(D.value,m.value));function Z(t){var o,s;t=de(t,0,N.value-1);const d=qe(t,N.value,m.value),{value:f}=D;d!==D.value&&(me.value=d,(o=e["onUpdate:currentIndex"])===null||o===void 0||o.call(e,d,f),(s=e.onUpdateCurrentIndex)===null||s===void 0||s.call(e,d,f))}function te(t=T.value){return lo(t,N.value,e.loop)}function oe(t=T.value){return uo(t,N.value,e.loop)}function st(t){const o=X(t);return o!==null&&te()===o}function it(t){const o=X(t);return o!==null&&oe()===o}function Ve(t){return T.value===X(t)}function rt(t){return D.value===t}function $e(){return te()===null}function Ee(){return oe()===null}function xe(t){const o=de(ke(t,m.value),0,N.value);(t!==D.value||o!==T.value)&&Z(o)}function we(){const t=te();t!==null&&Z(t)}function ne(){const t=oe();t!==null&&Z(t)}function lt(){(!V||!m.value)&&we()}function ut(){(!V||!m.value)&&ne()}let V=!1,L=0;const be=j({});function ae(t,o=0){be.value=Object.assign({},he.value,{transform:S.value?`translateY(${-t}px)`:`translateX(${-t}px)`,transitionDuration:`${o}ms`})}function H(t=0){c.value?ye(T.value,t):L!==0&&(!V&&t>0&&(V=!0),ae(L=0,t))}function ye(t,o){const s=je(t);s!==L&&o>0&&(V=!0),L=je(T.value),ae(s,o)}function je(t){let o;return t>=N.value-1?o=Me():o=A.value[t]||0,o}function Me(){if(M.value==="auto"){const{value:t}=r,{[t]:o}=P.value,{value:s}=A,d=s[s.length-1];let f;if(d===void 0)f=o;else{const{value:u}=k;f=d+u[u.length-1][t]}return f-o}else{const{value:t}=A;return t[N.value-1]||0}}const J={currentIndexRef:D,to:xe,prev:lt,next:ut,isVertical:()=>S.value,isHorizontal:()=>!S.value,isPrev:st,isNext:it,isActive:Ve,isPrevDisabled:$e,isNextDisabled:Ee,getSlideIndex:X,getSlideStyle:ft,addSlide:ct,removeSlide:dt,onCarouselItemClick:vt};vo(J);function ct(t){t&&w.value.push(t)}function dt(t){if(!t)return;const o=X(t);o!==-1&&w.value.splice(o,1)}function X(t){return typeof t=="number"?t:t?w.value.indexOf(t):-1}function ft(t){const o=X(t);if(o!==-1){const s=[Te.value[o]],d=J.isPrev(o),f=J.isNext(o);return d&&s.push(e.prevSlideStyle||""),f&&s.push(e.nextSlideStyle||""),At(s)}}function vt(t,o){let s=!V&&!re&&!Re;e.effect==="card"&&s&&!Ve(t)&&(xe(t),s=!1),s||(o.preventDefault(),o.stopPropagation())}let se=null;function ie(){se&&(clearInterval(se),se=null)}function F(){ie(),!e.autoplay||ee.value<2||(se=window.setInterval(ne,e.interval))}let _e=0,Se=0,B=0,Ce=0,re=!1,Re=!1;function Ae(t){var o;if(Ie||!(!((o=i.value)===null||o===void 0)&&o.contains(qt(t))))return;Ie=!0,re=!0,Re=!1,Ce=Date.now(),ie(),t.type!=="touchstart"&&!t.target.isContentEditable&&t.preventDefault();const s=Ge(t)?t.touches[0]:t;S.value?Se=s.clientY:_e=s.clientX,e.touchable&&(Q("touchmove",document,le,{passive:!0}),Q("touchend",document,Y),Q("touchcancel",document,Y)),e.draggable&&(Q("mousemove",document,le),Q("mouseup",document,Y))}function le(t){const{value:o}=S,{value:s}=r,d=Ge(t)?t.touches[0]:t,f=o?d.clientY-Se:d.clientX-_e,u=P.value[s];B=de(f,-u,u),t.cancelable&&t.preventDefault(),c.value&&ae(L-B,0)}function Y(){const{value:t}=T;let o=t;if(!V&&B!==0&&c.value){const s=L-B,d=[...A.value.slice(0,N.value-1),Me()];let f=null;for(let u=0;u<d.length;u++){const x=Math.abs(d[u]-s);if(f!==null&&f<x)break;f=x,o=u}}if(o===t){const s=Date.now()-Ce,{value:d}=r,f=P.value[d];B>f/2||B/s>.4?o=te(t):(B<-f/2||B/s<-.4)&&(o=oe(t))}o!==null&&o!==t?(Re=!0,Z(o),Xe(()=>{(!m.value||me.value!==D.value)&&H(ge.value)})):H(ge.value),Be(),F()}function Be(){re&&(Ie=!1),re=!1,_e=0,Se=0,B=0,Ce=0,G("touchmove",document,le),G("touchend",document,Y),G("touchcancel",document,Y),G("mousemove",document,le),G("mouseup",document,Y)}function pt(){if(c.value&&V){const{value:t}=T;ye(t,0)}else F();c.value&&(be.value.transitionDuration="0ms"),V=!1}function ht(t){if(t.preventDefault(),V)return;let{deltaX:o,deltaY:s}=t;t.shiftKey&&!o&&(o=s);const d=-1,f=1,u=(o||s)>0?f:d;let x=0,b=0;S.value?b=u:x=u;const I=10;(b*s>=I||x*o>=I)&&(u===f&&!Ee()?ne():u===d&&!$e()&&we())}function gt(){P.value=Qe(l.value,!0),F()}function mt(){var t,o;R.value&&((o=(t=k.effect).scheduler)===null||o===void 0||o.call(t),k.effect.run())}function xt(){e.autoplay&&ie()}function wt(){e.autoplay&&F()}Ne(()=>{Et(F),requestAnimationFrame(()=>W.value=!0)}),tt(()=>{Be(),ie()}),jt(()=>{const{value:t}=w,{value:o}=C,s=new Map,d=u=>s.has(u)?s.get(u):-1;let f=!1;for(let u=0;u<t.length;u++){const x=o.findIndex(b=>b.el===t[u]);x!==u&&(f=!0),s.set(t[u],x)}f&&t.sort((u,x)=>d(u)-d(x))}),ce(T,(t,o)=>{if(t!==o)if(F(),c.value){if(m.value&&ee.value>2){const{value:s}=N;t===s-2&&o===1?t=0:t===1&&o===s-2&&(t=s-1)}ye(t,ge.value)}else H()},{immediate:!0}),ce([m,M],()=>void Xe(()=>Z(T.value))),ce(A,()=>c.value&&H(),{deep:!0}),ce(c,t=>{t?H():(V=!1,ae(L=0))});const bt=g(()=>({onTouchstartPassive:e.touchable?Ae:void 0,onMousedown:e.draggable?Ae:void 0,onWheel:e.mousewheel?ht:void 0})),yt=g(()=>Object.assign(Object.assign({},We(J,["to","prev","next","isPrevDisabled","isNextDisabled"])),{total:ee.value,currentIndex:D.value})),_t=g(()=>({total:ee.value,currentIndex:D.value,to:J.to})),St={getCurrentIndex:()=>D.value,to:xe,prev:we,next:ne},Ct=ot("Carousel","-carousel",yo,io,e,n),Oe=g(()=>{const{common:{cubicBezierEaseInOut:t},self:{dotSize:o,dotColor:s,dotColorActive:d,dotColorFocus:f,dotLineWidth:u,dotLineWidthActive:x,arrowColor:b}}=Ct.value;return{"--n-bezier":t,"--n-dot-color":s,"--n-dot-color-focus":f,"--n-dot-color-active":d,"--n-dot-size":o,"--n-dot-line-width":u,"--n-dot-line-width-active":x,"--n-arrow-color":b}}),K=a?Ut("carousel",void 0,Oe,e):void 0;return Object.assign(Object.assign({mergedClsPrefix:n,selfElRef:l,slidesElRef:i,slideVNodes:C,duplicatedable:m,userWantsControl:_,autoSlideSize:R,displayIndex:D,realIndex:T,slideStyles:Te,translateStyle:be,slidesControlListeners:bt,handleTransitionEnd:pt,handleResize:gt,handleSlideResize:mt,handleMouseenter:xt,handleMouseleave:wt,isActive:rt,arrowSlotProps:yt,dotSlotProps:_t},St),{cssVars:a?void 0:Oe,themeClass:K==null?void 0:K.themeClass,onRender:K==null?void 0:K.onRender})},render(){var e;const{mergedClsPrefix:n,showArrow:a,userWantsControl:l,slideStyles:i,dotType:w,dotPlacement:C,slidesControlListeners:S,transitionProps:r={},arrowSlotProps:p,dotSlotProps:c,$slots:{default:m,dots:_,arrow:M}}=this,O=m&&Jt(m())||[];let R=Ro(O);return R.length||(R=O.map(P=>y(bo,null,{default:()=>et(P)}))),this.duplicatedable&&(R=ro(R)),this.slideVNodes.value=R,this.autoSlideSize&&(R=R.map(P=>y(Ue,{onResize:this.handleSlideResize},{default:()=>P}))),(e=this.onRender)===null||e===void 0||e.call(this),y("div",Object.assign({ref:"selfElRef",class:[this.themeClass,`${n}-carousel`,this.direction==="vertical"&&`${n}-carousel--vertical`,this.showArrow&&`${n}-carousel--show-arrow`,`${n}-carousel--${C}`,`${n}-carousel--${this.direction}`,`${n}-carousel--${this.effect}`,l&&`${n}-carousel--usercontrol`],style:this.cssVars},S,{onMouseenter:this.handleMouseenter,onMouseleave:this.handleMouseleave}),y(Ue,{onResize:this.handleResize},{default:()=>y("div",{ref:"slidesElRef",class:`${n}-carousel__slides`,role:"listbox",style:this.translateStyle,onTransitionend:this.handleTransitionEnd},l?R.map((P,k)=>y("div",{style:i[k],key:k},Mt(y(kt,Object.assign({},r),{default:()=>P}),[[zt,this.isActive(k)]]))):R)}),this.showDots&&c.total>1&&Ze(_,c,()=>[y(ho,{key:w+C,total:c.total,currentIndex:c.currentIndex,dotType:w,trigger:this.trigger,keyboard:this.keyboard})]),a&&Ze(M,p,()=>[y(xo,null)]))}});function Ro(e){return e.reduce((n,a)=>(wo(a)&&n.push(a),n),[])}const Po=e=>(Xt("data-v-01830667"),e=e(),Ft(),e),zo={class:"w-full p-2",style:{"background-image":`url('/bg_deatied.png')\r
  background-size: cover`}},ko=["src"],Io={class:"flex m-5 pingfang_jian justify-between"},No={class:"text-xl pingfang font-bold text-purple-600"},Do={class:"text-xs text-gray-400"},To={class:"text-xl font-bold text-purple-500"},Vo={class:"w-90_ mx-auto flex items-start pingfang"},$o=["src"],Eo={class:"text-gray-500 text-xs ml-2 pt-1"},jo={class:"text-black pt-3"},Mo={class:"flex w-full justify-end shadow-2xl border-t mt-24"},Ao={class:"w-2/3 p-4 pingfang text-xs"},Bo=Po(()=>z("div",{class:"text-white bg-purple-700 p-2 transition cursor-pointer active:scale-50 rounded-xl hover:scale-125"},"加入购物车",-1)),Oo={__name:"index",setup(e){const n=eo(),a=to();let l=j(),i=Bt({name:"肯德基",price:"$10",address:"北京市海淀区中关村大街",img:["https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg","https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel2.jpeg"],author:"张娜英",author_img:"../../../public/322025280_871949277285018_8326140459084594806_n.jpg",author_title:"这是用户的简介....",shop_title:"肯德基是源自美国的快餐连锁店，总部设于肯塔基州路易维尔市，以炸鸡为主力产品。总体来说是全球第二大的餐饮连锁企业，仅次于麦当劳，截至2015年12月，在123个国家和地区拥有20,000+个分店。目前与必胜客、塔可钟同为美国跨国餐饮集团百胜旗下子公司。",id:l});Ne(()=>{l.value=q.currentRoute.value.params.id,Le.post("/getGoodsById",{goods_id:l.value}).then(r=>{if(r.data.code==1)i.name=r.data.data[0].name,i.price=r.data.data[0].price,i.shop_title=r.data.data[0].introduce,i.img=r.data.data[0].img,i.address=r.data.data[0].address,i.author=r.data.data[0].username,i.author_img=r.data.data[0].user_img;else return})}),q.afterEach(()=>{l.value=q.currentRoute.value.params.id,Le.post("/getGoodsById",{goods_id:l.value}).then(r=>{if(r.data.code==1)i.name=r.data.data[0].name,i.price=r.data.data[0].price,i.shop_title=r.data.data[0].introduce,i.img=r.data.data[0].img,i.address=r.data.data[0].address,i.author=r.data.data[0].username,i.author_img=r.data.data[0].user_img;else return})});function w(){let r=localStorage.getItem("cart");if(r){r=JSON.parse(r);let p=r.findIndex(c=>c.id==l.value);p!=-1?r[p].count++:r.push({id:l.value,count:1}),localStorage.setItem("cart",JSON.stringify(r)),n.success("添加成功")}else localStorage.setItem("cart",JSON.stringify([{id:l.value,count:1}])),n.success("添加成功")}function C(r,p,c){S(p,c,r)}function S(r,p,c){a.warning({title:"跳转",content:"跳转到"+p,positiveText:"确定",negativeText:"取消",onPositiveClick:()=>{n.success("确定");let m=[{id:c,count:1}];q.push("/buy/"+JSON.stringify(m))},onNegativeClick:()=>{n.error("取消")}})}return(r,p)=>{const c=Pt,m=Co;return Pe(),ze("div",zo,[Fe(c,{onClick:p[0]||(p[0]=_=>E(q).back()),class:"pingfang rounded-xl font-bold"},{default:Ye(()=>[Ke("Back")]),_:1}),Fe(m,{"show-arrow":"",class:"h-72 w-90_ mx-auto mt-4 shadow-2xl rounded-xl"},{default:Ye(()=>[(Pe(!0),ze(Ot,null,Lt(E(i).img,(_,M)=>(Pe(),ze("img",{class:"carousel-img",src:_},null,8,ko))),256))]),_:1}),z("div",Io,[z("div",No,[z("div",null,U(E(i).name),1),z("div",Do,"发货地址:"+U(E(i).address),1)]),z("div",To,"￥"+U(E(i).price),1)]),z("div",Vo,[z("img",{src:E(i).author_img,class:"w-12 h-12 rounded-xl object-cover",alt:""},null,8,$o),z("div",Eo,[z("div",null,U(E(i).author),1),z("div",jo,U(E(i).author_title),1)])]),z("div",Mo,[z("div",Ao,[Ke(" 简介: "+U(E(i).shop_title)+" ",1),z("div",{onClick:w,class:"flex justify-between mt-12"},[Bo,z("div",{class:"bg-yellow-400 hover:scale-125 transition cursor-pointer active:scale-50 p-2 text-white rounded-xl",onClick:p[1]||(p[1]=_=>C(E(l),"/buy","支付"))},"立即购买")])])])])}}},an=Rt(Oo,[["__scopeId","data-v-01830667"]]);export{an as default};
