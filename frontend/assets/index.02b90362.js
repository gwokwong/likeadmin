import{P as S,u as q}from"./index.4727c0fb.js";import{P as N}from"./index.6605b3ca.js";import{_ as T,y as k,c as j,z as M,B as R,a as W}from"./index.0ca15b12.js";import{d as X,V as G,v as H,y as J,r as n,W as B,a as A,i as e,w as t,X as f,b as p,E,o as u,F as K,h as O,f as b,j as _}from"./vendor.bbaa8c82.js";const Q=X({components:{Pagination:S,Popup:N},setup(){const a=G({username:"",nickname:"",role:""}),s=H([]),{pager:F,requestApi:r,resetParams:w,resetPage:y}=q({callback:k,params:a}),c=o=>{j({id:o.id,username:o.username,nickname:o.nickname,role:o.role,isDisable:o.isDisable,multipoint_login:o.multipoint_login}).finally(()=>{r()})},d=async(o,v)=>{await M({isDisable:o,id:v}),r(),E({type:"success",message:"\u64CD\u4F5C\u6210\u529F"})},g=o=>{R({id:o}).then(()=>{r(),E({type:"success",message:"\u5220\u9664\u6210\u529F"})})},h=()=>{W({page_type:1}).then(o=>{s.value=o.lists})};return J(()=>{r(),h()}),{formData:a,roleList:s,pager:F,requestApi:r,resetParams:w,resetPage:y,adminLists:k,changeStatus:c,handleDelete:g,handleStatusChange:d}}}),Y={class:"admin"},Z={class:"m-l-20"},x=_("\u67E5\u8BE2"),ee=_("\u91CD\u7F6E"),ae=_("\u65B0\u589E\u7BA1\u7406\u5458"),te={class:"m-t-15"},le=_("\u7F16\u8F91"),oe=_("\u5220\u9664"),ne={class:"flex row-right"};function se(a,s,F,r,w,y){const c=n("el-input"),d=n("el-form-item"),g=n("el-option"),h=n("el-select"),o=n("el-button"),v=n("el-form"),C=n("el-card"),V=n("router-link"),i=n("el-table-column"),P=n("el-avatar"),L=n("el-switch"),U=n("popup"),$=n("el-table"),z=n("pagination"),D=B("perm"),I=B("loading");return u(),A("div",Y,[e(C,{shadow:"never"},{default:t(()=>[e(v,{class:"ls-form",model:a.formData,"label-width":"80px",size:"small",inline:""},{default:t(()=>[e(d,{label:"\u8D26\u53F7\uFF1A"},{default:t(()=>[e(c,{modelValue:a.formData.username,"onUpdate:modelValue":s[0]||(s[0]=l=>a.formData.username=l),class:"ls-input"},null,8,["modelValue"])]),_:1}),e(d,{label:"\u540D\u79F0\uFF1A"},{default:t(()=>[e(c,{modelValue:a.formData.nickname,"onUpdate:modelValue":s[1]||(s[1]=l=>a.formData.nickname=l),class:"ls-input"},null,8,["modelValue"])]),_:1}),e(d,{label:"\u89D2\u8272\uFF1A"},{default:t(()=>[e(h,{modelValue:a.formData.role,"onUpdate:modelValue":s[2]||(s[2]=l=>a.formData.role=l),placeholder:"\u5168\u90E8"},{default:t(()=>[(u(!0),A(K,null,O(a.roleList,(l,m)=>(u(),p(g,{key:m,label:l.name,value:l.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),e(d,null,{default:t(()=>[b("div",Z,[e(o,{type:"primary",onClick:a.resetPage},{default:t(()=>[x]),_:1},8,["onClick"]),e(o,{onClick:a.resetParams},{default:t(()=>[ee]),_:1},8,["onClick"])])]),_:1})]),_:1},8,["model"])]),_:1}),f((u(),p(C,{class:"m-t-15",shadow:"never"},{default:t(()=>[e(V,{to:"/permission/admin/edit"},{default:t(()=>[f((u(),p(o,{type:"primary",size:"small"},{default:t(()=>[ae]),_:1})),[[D,["system:admin:add"]]])]),_:1}),b("div",te,[e($,{data:a.pager.lists},{default:t(()=>[e(i,{label:"ID",prop:"id","min-width":"60"}),e(i,{label:"\u5934\u50CF","min-width":"100"},{default:t(({row:l})=>[e(P,{size:50,src:l.avatar},null,8,["src"])]),_:1}),e(i,{label:"\u8D26\u53F7",prop:"username","min-width":"100"}),e(i,{label:"\u540D\u79F0",prop:"nickname","min-width":"100"}),e(i,{label:"\u89D2\u8272",prop:"role","min-width":"100"}),e(i,{label:"\u521B\u5EFA\u65F6\u95F4",prop:"createTime","min-width":"150"}),e(i,{label:"\u6700\u8FD1\u767B\u5F55\u65F6\u95F4",prop:"lastLoginTime","min-width":"150"}),e(i,{label:"\u6700\u8FD1\u767B\u5F55IP",prop:"lastLoginIp","min-width":"100"}),e(i,{label:"\u72B6\u6001","min-width":"100"},{default:t(l=>[e(L,{modelValue:l.row.isDisable,"onUpdate:modelValue":m=>l.row.isDisable=m,"active-value":0,"inactive-value":1,onChange:m=>a.handleStatusChange(m,l.row.id)},null,8,["modelValue","onUpdate:modelValue","onChange"])]),_:1}),e(i,{label:"\u64CD\u4F5C",width:"150",fixed:"right"},{default:t(({row:l})=>[f((u(),p(V,{class:"m-r-10",to:{path:"/permission/admin/edit",query:{id:l.id}}},{default:t(()=>[e(o,{type:"text"},{default:t(()=>[le]),_:1})]),_:2},1032,["to"])),[[D,["system:admin:edit"]]]),f((u(),p(U,{class:"m-r-10 inline",onConfirm:m=>a.handleDelete(l.id)},{trigger:t(()=>[e(o,{type:"text"},{default:t(()=>[oe]),_:1})]),_:2},1032,["onConfirm"])),[[D,["system:admin:del"]]])]),_:1})]),_:1},8,["data"])]),b("div",ne,[e(z,{modelValue:a.pager,"onUpdate:modelValue":s[3]||(s[3]=l=>a.pager=l),layout:"total, prev, pager, next, jumper",onChange:a.requestApi},null,8,["modelValue","onChange"])])]),_:1})),[[I,a.pager.loading]])])}var me=T(Q,[["render",se],["__scopeId","data-v-669c3ad9"]]);export{me as default};
