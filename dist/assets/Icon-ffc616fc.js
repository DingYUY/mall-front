import{r as o,R as n,P as s,d as r,V as l,h as u}from"./runtime-core.esm-bundler-7390d31c.js";import{b as c,a as d}from"./light-cdcf3c6d.js";import{u as h}from"./FadeInExpandTransition-ffe10ded.js";function y(e){const i=o(!!e.value);if(i.value)return n(i);const t=s(e,a=>{a&&(i.value=!0,t())});return n(i)}const f=c("base-icon",`
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
 transform: translateZ(0);
`,[d("svg",`
 height: 1em;
 width: 1em;
 `)]),g=r({name:"BaseIcon",props:{role:String,ariaLabel:String,ariaDisabled:{type:Boolean,default:void 0},ariaHidden:{type:Boolean,default:void 0},clsPrefix:{type:String,required:!0},onClick:Function,onMousedown:Function,onMouseup:Function},setup(e){h("-base-icon",f,l(e,"clsPrefix"))},render(){return u("i",{class:`${this.clsPrefix}-base-icon`,onClick:this.onClick,onMousedown:this.onMousedown,onMouseup:this.onMouseup,role:this.role,"aria-label":this.ariaLabel,"aria-hidden":this.ariaHidden,"aria-disabled":this.ariaDisabled},this.$slots)}});export{g as N,y as u};
