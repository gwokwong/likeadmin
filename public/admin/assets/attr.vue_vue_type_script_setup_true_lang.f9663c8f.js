import{O as y,P as U,D as v,C as w,w as N,F as O}from"./element-plus.f5eb07a0.js";import{_ as $}from"./index.b8a033b7.js";import{_ as j}from"./picker.b3cbac83.js";import{_ as I}from"./picker.89d2c5c1.js";import{f as V}from"./index.f6ec1d34.js";import{D as R}from"./vuedraggable.5917840d.js";import{d as T,o as m,c as G,V as e,M as t,L as r,S as E,a as c,u as L,T as i}from"./@vue.cab01781.js";const M=i("\u5F00\u542F"),P=i("\u505C\u7528"),S={class:"flex-1"},q=c("div",{class:"form-tips"},"\u6700\u591A\u6DFB\u52A05\u5F20\uFF0C\u5EFA\u8BAE\u56FE\u7247\u5C3A\u5BF8\uFF1A750px*340px",-1),z={class:"bg-fill-light flex items-center w-full p-4 mt-4 cursor-move"},H={class:"ml-3 flex-1"},J=i("\u6DFB\u52A0\u56FE\u7247"),te=T({__name:"attr",props:{content:{type:Object,default:()=>({})},styles:{type:Object,default:()=>({})}},setup(a){const s=a,_=5,b=()=>{var n;((n=s.content.data)==null?void 0:n.length)<_?s.content.data.push({image:"",name:"",link:{}}):V.msgError(`\u6700\u591A\u6DFB\u52A0${_}\u5F20\u56FE\u7247`)},g=n=>{var l;if(((l=s.content.data)==null?void 0:l.length)<=1)return V.msgError("\u6700\u5C11\u4FDD\u7559\u4E00\u5F20\u56FE\u7247");s.content.data.splice(n,1)};return(n,l)=>{const p=y,h=U,d=v,k=I,B=w,x=j,A=$,C=N,D=O;return m(),G("div",null,[e(D,{"label-width":"70px"},{default:t(()=>{var f;return[n.type=="mobile"?(m(),r(d,{key:0,label:"\u662F\u5426\u542F\u7528"},{default:t(()=>[e(h,{modelValue:a.content.enabled,"onUpdate:modelValue":l[0]||(l[0]=o=>a.content.enabled=o)},{default:t(()=>[e(p,{label:1},{default:t(()=>[M]),_:1}),e(p,{label:0},{default:t(()=>[P]),_:1})]),_:1},8,["modelValue"])]),_:1})):E("",!0),e(d,{label:"\u56FE\u7247\u8BBE\u7F6E"},{default:t(()=>[c("div",S,[q,e(L(R),{class:"draggable",modelValue:a.content.data,"onUpdate:modelValue":l[1]||(l[1]=o=>a.content.data=o),animation:"300"},{item:t(({element:o,index:F})=>[(m(),r(A,{key:F,onClose:u=>g(F),class:"max-w-[400px]"},{default:t(()=>[c("div",z,[e(k,{modelValue:o.image,"onUpdate:modelValue":u=>o.image=u,"upload-class":"bg-body","exclude-domain":""},null,8,["modelValue","onUpdate:modelValue"]),c("div",H,[e(d,{label:"\u56FE\u7247\u540D\u79F0"},{default:t(()=>[e(B,{modelValue:o.name,"onUpdate:modelValue":u=>o.name=u,placeholder:"\u8BF7\u8F93\u5165\u540D\u79F0"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(d,{class:"mt-[18px]",label:"\u56FE\u7247\u94FE\u63A5"},{default:t(()=>[e(x,{modelValue:o.link,"onUpdate:modelValue":u=>o.link=u},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)])])]),_:2},1032,["onClose"]))]),_:1},8,["modelValue"])])]),_:1}),((f=a.content.data)==null?void 0:f.length)<_?(m(),r(d,{key:1},{default:t(()=>[e(C,{type:"primary",onClick:b},{default:t(()=>[J]),_:1})]),_:1})):E("",!0)]}),_:1})])}}});export{te as _};
