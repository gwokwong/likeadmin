import{_ as n,u as l}from"./index.98d1e0a4.js";import{d,v as u,ad as i,r as c,a as _,f as o,g as r,i as p,w as m,o as v,j as f}from"./vendor.bbaa8c82.js";const g=d({props:{code:Number,title:String},setup(){let e=null;const t=u(5),{router:s}=l();return e=setInterval(()=>{t.value===0?(clearInterval(e),s.go(-1)):t.value--},1e3),i(()=>{clearInterval(e)}),{second:t}}}),E={class:"error"},$={class:"error-code"},y={class:"lg lighter m-t-30 m-b-30"};function b(e,t,s,h,C,D){const a=c("el-button");return v(),_("div",E,[o("div",null,[o("div",$,r(e.code),1),o("div",y,r(e.title),1),p(a,{type:"primary",size:"small",onClick:t[0]||(t[0]=I=>e.$router.go(-1))},{default:m(()=>[f(r(e.second)+" \u79D2\u540E\u8FD4\u56DE\u4E0A\u4E00\u9875 ",1)]),_:1})])])}var B=n(g,[["render",b],["__scopeId","data-v-d2816908"]]);export{B as default};
