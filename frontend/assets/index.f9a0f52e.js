import{_ as B}from"./index.911eba08.js";import{I as E,w as V}from"./element-plus.dc25723c.js";import b from"./menu.570c0773.js";import h from"./preview.908f40ef.js";import{_ as C}from"./attr-setting.vue_vue_type_script_setup_true_lang.a2349682.js";import{w as F}from"./index.c57b75ff.js";import{s as N,a as P}from"./decoration.931da4ad.js";import{n as k,f as I,d as S}from"./index.4333e73f.js";import{d as v,a0 as T,r as d,e as _,w as A,ag as M,o as g,c as O,V as r,M as n,a as J,u as f,O as U,L as W,T as L}from"./@vue.cab01781.js";import"./@vueuse.724ed0af.js";import"./@element-plus.92b4185f.js";import"./lodash-es.29c53eac.js";import"./dayjs.37ec2129.js";import"./axios.fd02a783.js";import"./async-validator.fb49d0f5.js";import"./@ctrl.82a509e0.js";import"./@popperjs.36402333.js";import"./escape-html.e5dfadb9.js";import"./normalize-wheel-es.8aeb3683.js";import"./lodash.75518cf9.js";import"./vue-router.5046cc50.js";import"./pinia.e85e8286.js";import"./vue-demi.bfae2336.js";import"./css-color-function.a8f9466d.js";import"./color.903ca10f.js";import"./clone.9d64bb7a.js";import"./color-convert.69e17089.js";import"./color-string.e356f5de.js";import"./color-name.e7a4e1d3.js";import"./nprogress.748450be.js";import"./vue-clipboard3.049f28db.js";import"./clipboard.6e731210.js";import"./echarts.6ad8c478.js";import"./zrender.f91f2f01.js";import"./highlight.js.4ebdf9a4.js";import"./@highlightjs.0ab41b7b.js";import"./attr.vue_vue_type_script_setup_true_lang.1d4a0ddf.js";import"./index.47d23681.js";import"./picker.1db07d0b.js";import"./index.857546d9.js";import"./picker.f6f09cb5.js";import"./index.7692c15c.js";import"./usePaging.a52dcef9.js";import"./index.vue_vue_type_script_setup_true_lang.eeecba7b.js";import"./vue3-video-play.05975c53.js";import"./vuedraggable.1099696c.js";import"./vue.b3c0ecb7.js";import"./sortablejs.74eb51b2.js";import"./content.vue_vue_type_script_setup_true_lang.0751226b.js";import"./decoration-img.e721b824.js";import"./attr.vue_vue_type_script_setup_true_lang.bef6b0b5.js";import"./content.ba16021f.js";import"./attr.vue_vue_type_script_setup_true_lang.333658d9.js";import"./add-nav.vue_vue_type_script_setup_true_lang.f1bb8c42.js";import"./content.755aa6fa.js";import"./attr.vue_vue_type_script_setup_true_lang.10c7c124.js";import"./content.vue_vue_type_script_setup_true_lang.8f985d5c.js";import"./attr.vue_vue_type_script_setup_true_lang.06a2fa18.js";import"./content.078a7895.js";import"./attr.vue_vue_type_script_setup_true_lang.0b87e513.js";import"./content.dee32382.js";import"./attr.vue_vue_type_script_setup_true_lang.f75e53ca.js";import"./content.vue_vue_type_script_setup_true_lang.898b8e5a.js";import"./attr.vue_vue_type_script_setup_true_lang.0583d8bc.js";import"./content.a6205e2d.js";const $={class:"decoration-pages min-w-[1100px]"},j={class:"flex h-full items-start"},q=L("\u4FDD\u5B58"),z=v({name:"decorationPages"}),G=v({...z,setup(H){const s=e=>e.map(t=>{var p;return{id:k(),...((p=F[t])==null?void 0:p.options())||{}}}),o=T({[1]:{id:1,pageType:1,name:"\u9996\u9875\u88C5\u4FEE",pageData:s(["search","banner","nav","news"])},[2]:{id:2,pageType:2,name:"\u4E2A\u4EBA\u4E2D\u5FC3",pageData:s(["user-info","my-service","user-banner"])},[3]:{id:3,pageType:3,name:"\u5BA2\u670D\u8BBE\u7F6E",pageData:s(["customer-service"])}}),a=d("1"),i=d(-1),u=_(()=>{var e,t;return(t=(e=o[a.value])==null?void 0:e.pageData)!=null?t:[]}),D=_(()=>{var e,t;return(t=(e=o[a.value])==null?void 0:e.pageData[i.value])!=null?t:""}),l=async()=>{const e=await P({id:a.value});o[String(e.id)].pageData=JSON.parse(e.pageData)},x=async()=>{await N({...o[a.value],pageData:JSON.stringify(o[a.value].pageData)}),l(),I.msgSuccess("\u4FDD\u5B58\u6210\u529F")};return A(a,()=>{i.value=u.value.findIndex(e=>!e.disabled),l()},{immediate:!0}),(e,t)=>{const c=E,p=V,w=B,y=M("perms");return g(),O("div",$,[r(c,{shadow:"never",class:"!border-none flex-1 flex","body-style":{flex:1}},{default:n(()=>[J("div",j,[r(b,{modelValue:a.value,"onUpdate:modelValue":t[0]||(t[0]=m=>a.value=m),menus:o},null,8,["modelValue","menus"]),r(h,{modelValue:i.value,"onUpdate:modelValue":t[1]||(t[1]=m=>i.value=m),pageData:f(u)},null,8,["modelValue","pageData"]),r(C,{class:"flex-1",widget:f(D)},null,8,["widget"])])]),_:1}),U((g(),W(w,{class:"mt-4",fixed:!1},{default:n(()=>[r(p,{type:"primary",onClick:x},{default:n(()=>[q]),_:1})]),_:1})),[[y,["decorate:pages:save"]]])])}}});const it=S(G,[["__scopeId","data-v-ed050f9e"]]);export{it as default};