import{Z as k,J as w,w as y,K as C,I as B,L}from"./element-plus.dc25723c.js";import{d as x}from"./message.4c664cda.js";import{_ as D}from"./edit.vue_vue_type_script_setup_true_lang.f827ee31.js";import{d as u,s as F,a0 as T,ag as R,o,c as V,O as d,L as i,M as t,V as a,T as m}from"./@vue.cab01781.js";import"./@vueuse.724ed0af.js";import"./@element-plus.92b4185f.js";import"./lodash-es.29c53eac.js";import"./dayjs.37ec2129.js";import"./axios.fd02a783.js";import"./async-validator.fb49d0f5.js";import"./@ctrl.82a509e0.js";import"./@popperjs.36402333.js";import"./escape-html.e5dfadb9.js";import"./normalize-wheel-es.8aeb3683.js";import"./index.4333e73f.js";import"./lodash.75518cf9.js";import"./vue-router.5046cc50.js";import"./pinia.e85e8286.js";import"./vue-demi.bfae2336.js";import"./css-color-function.a8f9466d.js";import"./color.903ca10f.js";import"./clone.9d64bb7a.js";import"./color-convert.69e17089.js";import"./color-string.e356f5de.js";import"./color-name.e7a4e1d3.js";import"./nprogress.748450be.js";import"./vue-clipboard3.049f28db.js";import"./clipboard.6e731210.js";import"./echarts.6ad8c478.js";import"./zrender.f91f2f01.js";import"./highlight.js.4ebdf9a4.js";import"./@highlightjs.0ab41b7b.js";import"./index.857546d9.js";const N=m("\u5F00\u542F"),S=m("\u5173\u95ED"),$=m(" \u8BBE\u7F6E "),z=u({name:"shortLetter"}),Et=u({...z,setup(I){const p=F(),e=T({loading:!1,lists:[]}),c=async()=>{try{e.loading=!0,e.lists=await x(),e.loading=!1}catch{e.loading=!1}},f=s=>{var r;(r=p.value)==null||r.open(s)};return c(),(s,r)=>{const n=w,_=k,g=y,h=C,E=B,v=R("perms"),b=L;return o(),V("div",null,[d((o(),i(E,{class:"!border-none",shadow:"never"},{default:t(()=>[a(h,{size:"large",data:e.lists},{default:t(()=>[a(n,{label:"\u77ED\u4FE1\u6E20\u9053",prop:"name","min-width":"120"}),a(n,{label:"\u72B6\u6001","min-width":"120"},{default:t(({row:l})=>[l.status==1?(o(),i(_,{key:0},{default:t(()=>[N]),_:1})):(o(),i(_,{key:1,type:"danger"},{default:t(()=>[S]),_:1}))]),_:1}),a(n,{label:"\u64CD\u4F5C","min-width":"120",fixed:"right"},{default:t(({row:l})=>[d((o(),i(g,{type:"primary",link:"",onClick:J=>f(l.alias)},{default:t(()=>[$]),_:2},1032,["onClick"])),[[v,["setting:storage:edit"]]])]),_:1})]),_:1},8,["data"])]),_:1})),[[b,e.loading]]),a(D,{ref_key:"editRef",ref:p,onSuccess:c},null,512)])}}});export{Et as default};