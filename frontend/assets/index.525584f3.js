import{P as F}from"./index.e3159ab7.js";import{n as E,C as w}from"./index.eb56d01c.js";import{d as T,v,y as B,r as u,W as k,a as l,i as e,w as t,o as n,X as m,b as c,g as r,f as A,j as _}from"./vendor.bbaa8c82.js";const x={class:"menu"},M=_("\u6DFB\u52A0\u83DC\u5355"),N={key:0},g={key:1},z={key:2},G=_("\u7F16\u8F91"),O=_("\u5220\u9664"),q=T({setup(U){const d={CATALOG:"M",MENU:"C",BUTTON:"A"},f=v([]),b=()=>{E().then(s=>{f.value=s})},y=async s=>{await w({id:s}),b()};return B(()=>{b()}),(s,V)=>{const i=u("el-button"),h=u("router-link"),a=u("el-table-column"),D=u("el-table"),C=u("el-card"),p=k("perm");return n(),l("div",x,[e(C,{shadow:"never"},{default:t(()=>[e(h,{to:"/permission/menu/edit"},{default:t(()=>[m((n(),c(i,{type:"primary",size:"small"},{default:t(()=>[M]),_:1})),[[p,["system:menu:add"]]])]),_:1}),e(D,{data:f.value,class:"m-t-24","row-key":"id","default-expand-all":"","tree-props":{children:"children"},size:"mini"},{default:t(()=>[e(a,{prop:"menuName",label:"\u540D\u79F0",width:"180"}),e(a,{prop:"menuType",label:"\u83DC\u5355\u7C7B\u578B"},{default:t(o=>[o.row.menuType==d.CATALOG?(n(),l("span",N,r("\u76EE\u5F55"))):o.row.menuType==d.MENU?(n(),l("span",g,r("\u83DC\u5355"))):(n(),l("span",z,r("\u6309\u94AE")))]),_:1}),e(a,{prop:"menuIcon",label:"\u56FE\u6807"}),e(a,{prop:"component",label:"\u7EC4\u4EF6\u8DEF\u5F84"}),e(a,{prop:"menuSort",label:"\u6392\u5E8F"}),e(a,{prop:"perms",label:"\u6743\u9650\u6807\u8BC6"}),e(a,{prop:"paths",label:"\u8DEF\u7531\u5730\u5740"}),e(a,{prop:"isDisable",label:"\u72B6\u6001"},{default:t(o=>[A("span",null,r(o.row.isDisable==0?"\u542F\u7528":"\u5173\u95ED"),1)]),_:1}),e(a,{prop:"createTime",label:"\u521B\u5EFA\u65F6\u95F4",width:"160"}),e(a,{label:"\u64CD\u4F5C"},{default:t(o=>[m((n(),c(h,{class:"m-r-10",to:{path:"/permission/menu/edit",query:{id:o.row.id}}},{default:t(()=>[e(i,{type:"text",size:"mini"},{default:t(()=>[G]),_:1})]),_:2},1032,["to"])),[[p,["system:menu:edit"]]]),m((n(),c(F,{class:"m-r-10 inline",onConfirm:L=>y(o.row.id)},{trigger:t(()=>[e(i,{type:"text",size:"mini"},{default:t(()=>[O]),_:1})]),_:2},1032,["onConfirm"])),[[p,["system:menu:del"]]])]),_:1})]),_:1},8,["data"])]),_:1})])}}});export{q as default};
