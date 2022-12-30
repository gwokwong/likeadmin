import{w as N,J as I,K as P,I as j,L as z}from"./element-plus.f5eb07a0.js";import{u as J,_ as K}from"./usePaging.e2215e88.js";import{f as F,b as M}from"./index.1256601b.js";import{d as O,e as U}from"./role.af1a3999.js";import{_ as q}from"./edit.vue_vue_type_script_setup_true_lang.6db3dcce.js";import{_ as G}from"./auth.vue_vue_type_script_setup_true_lang.fb3c317f.js";import{d as D,s as g,r as E,ag as H,o as a,c as Q,V as t,M as s,a as h,O as p,L as r,u,k as W,S as B,T as k,n as C}from"./@vue.cab01781.js";import"./@vueuse.724ed0af.js";import"./@element-plus.92b4185f.js";import"./lodash-es.29c53eac.js";import"./dayjs.22a46fd8.js";import"./axios.8058589d.js";import"./async-validator.fb49d0f5.js";import"./@ctrl.82a509e0.js";import"./@popperjs.36402333.js";import"./escape-html.e5dfadb9.js";import"./normalize-wheel-es.8aeb3683.js";import"./lodash.bbe6f09f.js";import"./vue-router.5046cc50.js";import"./pinia.e85e8286.js";import"./vue-demi.bfae2336.js";import"./css-color-function.5bd363c0.js";import"./color.232115c1.js";import"./clone.8f44c0eb.js";import"./color-convert.69e17089.js";import"./color-string.e356f5de.js";import"./color-name.e7a4e1d3.js";import"./nprogress.404eaa9c.js";import"./vue-clipboard3.19ab9072.js";import"./clipboard.6fb7c109.js";import"./echarts.6ad8c478.js";import"./zrender.f91f2f01.js";import"./highlight.js.4ebdf9a4.js";import"./@highlightjs.0ab41b7b.js";import"./index.f69f13bd.js";import"./menu.d19d4b04.js";const X={class:"role-lists"},Y=k(" \u65B0\u589E "),Z={class:"mt-4"},ee=k(" \u7F16\u8F91 "),te=k(" \u6743\u9650\u8BBE\u7F6E "),oe=k(" \u5220\u9664 "),ae={class:"flex justify-end mt-4"},se=D({name:"role"}),Ke=D({...se,setup(ie){const d=g(),y=g(),_=E(!1),w=E(!1),{pager:m,getLists:c}=J({fetchFun:U}),$=async()=>{var o;_.value=!0,await C(),(o=d.value)==null||o.open("add")},V=async o=>{var e,i;_.value=!0,await C(),(e=d.value)==null||e.open("edit"),(i=d.value)==null||i.setFormData(o)},x=async o=>{var e,i;w.value=!0,await C(),(e=y.value)==null||e.open(),(i=y.value)==null||i.setFormData(o)},A=async o=>{await F.confirm("\u786E\u5B9A\u8981\u5220\u9664\uFF1F"),await O({id:o}),F.msgSuccess("\u5220\u9664\u6210\u529F"),c()};return c(),(o,e)=>{const i=M,f=N,n=I,R=P,S=K,T=j,v=H("perms"),L=z;return a(),Q("div",X,[t(T,{class:"!border-none",shadow:"never"},{default:s(()=>[h("div",null,[p((a(),r(f,{type:"primary",onClick:$},{icon:s(()=>[t(i,{name:"el-icon-Plus"})]),default:s(()=>[Y]),_:1})),[[v,["system:role:add"]]])]),h("div",Z,[h("div",null,[p((a(),r(R,{data:u(m).lists,size:"large"},{default:s(()=>[t(n,{prop:"id",label:"ID","min-width":"100"}),t(n,{prop:"name",label:"\u540D\u79F0","min-width":"150"}),t(n,{prop:"remark",label:"\u5907\u6CE8","min-width":"150","show-overflow-tooltip":""}),t(n,{prop:"sort",label:"\u6392\u5E8F","min-width":"100"}),t(n,{prop:"member",label:"\u7BA1\u7406\u5458\u4EBA\u6570","min-width":"120"}),t(n,{prop:"createTime",label:"\u521B\u5EFA\u65F6\u95F4","min-width":"180"}),t(n,{label:"\u64CD\u4F5C",width:"190",fixed:"right"},{default:s(({row:l})=>[p((a(),r(f,{link:"",type:"primary",onClick:b=>V(l)},{default:s(()=>[ee]),_:2},1032,["onClick"])),[[v,["system:role:edit"]]]),p((a(),r(f,{link:"",type:"primary",onClick:b=>x(l)},{default:s(()=>[te]),_:2},1032,["onClick"])),[[v,["system:role:edit"]]]),p((a(),r(f,{link:"",type:"danger",onClick:b=>A(l.id)},{default:s(()=>[oe]),_:2},1032,["onClick"])),[[v,["system:role:del"]]])]),_:1})]),_:1},8,["data"])),[[L,u(m).loading]])]),h("div",ae,[t(S,{modelValue:u(m),"onUpdate:modelValue":e[0]||(e[0]=l=>W(m)?m.value=l:null),onChange:u(c)},null,8,["modelValue","onChange"])])])]),_:1}),_.value?(a(),r(q,{key:0,ref_key:"editRef",ref:d,onSuccess:u(c),onClose:e[1]||(e[1]=l=>_.value=!1)},null,8,["onSuccess"])):B("",!0),w.value?(a(),r(G,{key:1,ref_key:"authRef",ref:y,onSuccess:u(c),onClose:e[2]||(e[2]=l=>w.value=!1)},null,8,["onSuccess"])):B("",!0)])}}});export{Ke as default};
