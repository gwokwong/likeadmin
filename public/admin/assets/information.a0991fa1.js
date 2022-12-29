import{_ as A}from"./index.65f1374e.js";import{C as B,D as h,I as D,F as V,w}from"./element-plus.f5eb07a0.js";import{_ as x}from"./picker.89d2c5c1.js";import{a as k,b as j}from"./website.01da3f60.js";import{u as L,f as N}from"./index.f6ec1d34.js";import{d as c,r as q,a0 as y,ag as U,o as d,c as O,V as e,M as a,a as t,O as I,L as S,T as G}from"./@vue.cab01781.js";import"./@vueuse.724ed0af.js";import"./@element-plus.92b4185f.js";import"./lodash-es.29c53eac.js";import"./dayjs.22a46fd8.js";import"./axios.8058589d.js";import"./async-validator.fb49d0f5.js";import"./@ctrl.82a509e0.js";import"./@popperjs.36402333.js";import"./escape-html.e5dfadb9.js";import"./normalize-wheel-es.8aeb3683.js";import"./index.a9f1a8b8.js";import"./index.59ae1158.js";import"./usePaging.e2215e88.js";import"./index.b8a033b7.js";import"./index.vue_vue_type_script_setup_true_lang.2f52dd93.js";import"./vue3-video-play.05975c53.js";import"./vuedraggable.5917840d.js";import"./vue.a15b7233.js";import"./sortablejs.c69601cb.js";import"./lodash.bbe6f09f.js";import"./vue-router.5046cc50.js";import"./pinia.e85e8286.js";import"./vue-demi.bfae2336.js";import"./css-color-function.5bd363c0.js";import"./color.232115c1.js";import"./clone.8f44c0eb.js";import"./color-convert.69e17089.js";import"./color-string.e356f5de.js";import"./color-name.e7a4e1d3.js";import"./nprogress.404eaa9c.js";import"./vue-clipboard3.19ab9072.js";import"./clipboard.6fb7c109.js";import"./echarts.6ad8c478.js";import"./zrender.f91f2f01.js";import"./highlight.js.4ebdf9a4.js";import"./@highlightjs.0ab41b7b.js";const R={class:"website-information"},T=t("div",{class:"text-xl font-medium mb-[20px]"},"\u540E\u53F0\u8BBE\u7F6E",-1),W={class:"w-80"},M=t("div",{class:"form-tips"},"\u5EFA\u8BAE\u5C3A\u5BF8\uFF1A100*100\u50CF\u7D20\uFF0C\u652F\u6301jpg\uFF0Cjpeg\uFF0Cpng\u683C\u5F0F",-1),z=t("div",{class:"form-tips"},"\u5EFA\u8BAE\u5C3A\u5BF8\uFF1A200*200\u50CF\u7D20\uFF0C\u652F\u6301jpg\uFF0Cjpeg\uFF0Cpng\u683C\u5F0F",-1),H=t("div",{class:"form-tips"},"\u5EFA\u8BAE\u5C3A\u5BF8\uFF1A400*400\u50CF\u7D20\uFF0C\u652F\u6301jpg\uFF0Cjpeg\uFF0Cpng\u683C\u5F0F",-1),J=t("div",{class:"text-xl font-medium mb-[20px]"},"\u524D\u53F0\u8BBE\u7F6E",-1),K={class:"w-80"},P=t("div",{class:"form-tips"},"\u5EFA\u8BAE\u5C3A\u5BF8\uFF1A100*100px\uFF0C\u652F\u6301jpg\uFF0Cjpeg\uFF0Cpng\u683C\u5F0F",-1),Q=G("\u4FDD\u5B58"),X=c({name:"webInformation"}),To=c({...X,setup(Y){const m=q(),{getConfig:_}=L(),o=y({name:"",favicon:"",logo:"",backdrop:"",shopName:"",shopLogo:""}),g={name:[{required:!0,message:"\u8BF7\u8F93\u5165\u7F51\u7AD9\u540D\u79F0",trigger:["blur"]}],favicon:[{required:!0,message:"\u8BF7\u9009\u62E9\u7F51\u7AD9\u56FE\u6807",trigger:["change"]}],logo:[{required:!0,message:"\u8BF7\u9009\u62E9\u7F51\u7AD9logo",trigger:["change"]}],backdrop:[{required:!0,message:"\u8BF7\u9009\u62E9\u767B\u5F55\u9875\u5E7F\u544A\u56FE",trigger:["change"]}],shopName:[{required:!0,message:"\u8BF7\u8F93\u5165\u5E97\u94FA/\u5546\u57CE\u540D\u79F0",trigger:["blur"]}],shopLogo:[{required:!0,message:"\u8BF7\u9009\u62E9\u5546\u57CELOGO",trigger:["change"]}]},p=async()=>{const s=await k();for(const u in o)o[u]=s[u]},f=async()=>{var s;await((s=m.value)==null?void 0:s.validate()),await j(o),N.msgSuccess("\u64CD\u4F5C\u6210\u529F"),_(),p()};return p(),(s,u)=>{const n=B,l=h,i=x,F=D,C=V,E=w,b=A,v=U("perms");return d(),O("div",R,[e(C,{ref_key:"formRef",ref:m,rules:g,model:o,"label-width":"120px"},{default:a(()=>[e(F,{shadow:"never",class:"!border-none"},{default:a(()=>[T,e(l,{label:"\u7F51\u7AD9\u540D\u79F0",prop:"name"},{default:a(()=>[t("div",W,[e(n,{modelValue:o.name,"onUpdate:modelValue":u[0]||(u[0]=r=>o.name=r),placeholder:"\u8BF7\u8F93\u5165\u7F51\u7AD9\u540D\u79F0",maxlength:"30","show-word-limit":""},null,8,["modelValue"])])]),_:1}),e(l,{label:"\u7F51\u7AD9\u56FE\u6807",prop:"favicon"},{default:a(()=>[t("div",null,[e(i,{modelValue:o.favicon,"onUpdate:modelValue":u[1]||(u[1]=r=>o.favicon=r),limit:1},null,8,["modelValue"]),M])]),_:1}),e(l,{label:"\u7F51\u7AD9logo",prop:"logo"},{default:a(()=>[t("div",null,[e(i,{modelValue:o.logo,"onUpdate:modelValue":u[2]||(u[2]=r=>o.logo=r),limit:1},null,8,["modelValue"]),z])]),_:1}),e(l,{label:"\u767B\u5F55\u9875\u5E7F\u544A\u56FE",prop:"backdrop"},{default:a(()=>[t("div",null,[e(i,{modelValue:o.backdrop,"onUpdate:modelValue":u[3]||(u[3]=r=>o.backdrop=r),limit:1},null,8,["modelValue"]),H])]),_:1})]),_:1}),e(F,{shadow:"never",class:"!border-none mt-4"},{default:a(()=>[J,e(l,{label:"\u5546\u57CE\u540D\u79F0",prop:"shopName"},{default:a(()=>[t("div",K,[e(n,{modelValue:o.shopName,"onUpdate:modelValue":u[4]||(u[4]=r=>o.shopName=r),placeholder:"\u8BF7\u8F93\u5165\u5E97\u94FA/\u5546\u57CE\u540D\u79F0",maxlength:"30","show-word-limit":""},null,8,["modelValue"])])]),_:1}),e(l,{label:"\u5546\u57CELOGO",prop:"shopLogo"},{default:a(()=>[t("div",null,[e(i,{modelValue:o.shopLogo,"onUpdate:modelValue":u[5]||(u[5]=r=>o.shopLogo=r),limit:1},null,8,["modelValue"]),P])]),_:1})]),_:1})]),_:1},8,["model"]),I((d(),S(b,null,{default:a(()=>[e(E,{type:"primary",onClick:f},{default:a(()=>[Q]),_:1})]),_:1})),[[v,["setting:website:save"]]])])}}});export{To as default};
