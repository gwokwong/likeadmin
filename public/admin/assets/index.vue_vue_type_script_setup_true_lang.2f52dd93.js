import{X as C,Q as E,R as S,C as L,w as M}from"./element-plus.f5eb07a0.js";import{d as N,r as p,w as _,o as n,c as y,V as m,M as a,a as i,I as U,_ as w,L as c,W as $,a8 as A,T as b}from"./@vue.cab01781.js";import{c as D}from"./@vueuse.724ed0af.js";const I={class:"popover-input__input mr-[10px] flex-1"},O={class:"popover-input__btns flex-none"},P=b("\u53D6\u6D88"),T=b("\u786E\u5B9A"),F=["onClick"],X=N({__name:"index",props:{value:{type:String},type:{type:String,default:"text"},width:{type:[Number,String],default:"300px"},placeholder:String,disabled:{type:Boolean,default:!1},options:{type:Array,default:()=>[]},size:{type:String,default:"default"},limit:{type:Number,default:200},showLimit:{type:Boolean,default:!1},teleported:{type:Boolean,default:!0}},emits:["confirm"],setup(e,{emit:x}){const f=e,s=p(!1),u=p(!1),o=p(),h=()=>{r(),x("confirm",o.value)},k=()=>{f.disabled||(s.value=!0)},r=()=>{s.value=!1};return _(()=>f.value,d=>{o.value=d},{immediate:!0}),D(document.documentElement,"click",()=>{u.value||r()}),(d,t)=>{const V=E,g=S,z=L,v=M,B=C;return n(),y("div",{onMouseenter:t[4]||(t[4]=l=>u.value=!0),onMouseleave:t[5]||(t[5]=l=>u.value=!1)},[m(B,{placement:"top",visible:s.value,"onUpdate:visible":t[3]||(t[3]=l=>s.value=l),width:e.width,trigger:"contextmenu",class:"popover-input",teleported:e.teleported,persistent:!1,"popper-class":"!p-0"},{reference:a(()=>[i("div",{class:"inline",onClick:w(k,["stop"])},[U(d.$slots,"default")],8,F)]),default:a(()=>[i("div",{class:"flex p-3",onClick:t[2]||(t[2]=w(()=>{},["stop"]))},[i("div",I,[e.type=="select"?(n(),c(g,{key:0,class:"flex-1",size:e.size,modelValue:o.value,"onUpdate:modelValue":t[0]||(t[0]=l=>o.value=l),teleported:e.teleported},{default:a(()=>[(n(!0),y($,null,A(e.options,l=>(n(),c(V,{key:l.value,label:l.label,value:l.value},null,8,["label","value"]))),128))]),_:1},8,["size","modelValue","teleported"])):(n(),c(z,{key:1,modelValue:o.value,"onUpdate:modelValue":t[1]||(t[1]=l=>o.value=l),modelModifiers:{trim:!0},maxlength:e.limit,"show-word-limit":e.showLimit,type:e.type,size:e.size,clearable:"",placeholder:e.placeholder},null,8,["modelValue","maxlength","show-word-limit","type","size","placeholder"]))]),i("div",O,[m(v,{link:"",onClick:r},{default:a(()=>[P]),_:1}),m(v,{type:"primary",size:e.size,onClick:h},{default:a(()=>[T]),_:1},8,["size"])])])]),_:3},8,["visible","width","teleported"])],32)}}});export{X as _};
