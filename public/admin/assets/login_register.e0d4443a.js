import{_ as b}from"./index.65f1374e.js";import{B as y,a0 as V,D as k,t as w,I as W,w as x,F as L}from"./element-plus.f5eb07a0.js";import{g as M,s as O}from"./user.e784b58f.js";import{f as q}from"./index.f6ec1d34.js";import{d as f,r as U,a0 as B,ag as S,o as A,c as $,V as t,M as l,a as e,U as c,O as j,L as N,T as i}from"./@vue.cab01781.js";import"./@vueuse.724ed0af.js";import"./@element-plus.92b4185f.js";import"./lodash-es.29c53eac.js";import"./dayjs.22a46fd8.js";import"./axios.8058589d.js";import"./async-validator.fb49d0f5.js";import"./@ctrl.82a509e0.js";import"./@popperjs.36402333.js";import"./escape-html.e5dfadb9.js";import"./normalize-wheel-es.8aeb3683.js";import"./lodash.bbe6f09f.js";import"./vue-router.5046cc50.js";import"./pinia.e85e8286.js";import"./vue-demi.bfae2336.js";import"./css-color-function.5bd363c0.js";import"./color.232115c1.js";import"./clone.8f44c0eb.js";import"./color-convert.69e17089.js";import"./color-string.e356f5de.js";import"./color-name.e7a4e1d3.js";import"./nprogress.404eaa9c.js";import"./vue-clipboard3.19ab9072.js";import"./clipboard.6fb7c109.js";import"./echarts.6ad8c478.js";import"./zrender.f91f2f01.js";import"./highlight.js.4ebdf9a4.js";import"./@highlightjs.0ab41b7b.js";const P={class:"login-register"},R=e("div",{class:"font-medium mb-7"},"\u901A\u7528\u8BBE\u7F6E",-1),I=i("\u8D26\u53F7\u5BC6\u7801\u767B\u5F55"),T=i("\u624B\u673A\u9A8C\u8BC1\u7801\u767B\u5F55"),G=e("div",{class:"form-tips"},"\u7CFB\u7EDF\u901A\u7528\u767B\u5F55\u65B9\u5F0F\uFF0C\u81F3\u5C11\u9009\u62E9\u4E00\u9879",-1),z={class:"mt-1 ml-2"},H=e("div",{class:"form-tips"},[i(" 1\u3001\u5982\u679C\u5F00\u542F\uFF0C\u5219\u65B0\u7528\u6237\u5728\u6CE8\u518C\u5B8C\u6210\u4E4B\u540E\u8981\u5F3A\u5236\u7ED1\u5B9A\u624B\u673A\u53F7"),e("br"),i(" 2\u3001\u8001\u7528\u6237\u767B\u5F55\u65F6\u5982\u679C\u68C0\u6D4B\u5230\u6CA1\u6709\u7ED1\u5B9A\u624B\u673A\uFF0C\u5219\u8981\u91CD\u65B0\u7ED1\u5B9A\u624B\u673A\u53F7 ")],-1),J={class:"mt-1 ml-2"},K=e("div",{class:"form-tips"},"\u767B\u5F55/\u6CE8\u518C\u4F1A\u5458\u65F6\uFF0C\u662F\u5426\u663E\u793A\u670D\u52A1\u534F\u8BAE\u548C\u9690\u79C1\u653F\u7B56",-1),Q=e("div",{class:"font-medium mb-7"},"\u7B2C\u4E09\u65B9\u8BBE\u7F6E",-1),X={class:"mt-1 ml-2"},Y=e("div",{class:"form-tips"},"\u767B\u5F55\u65F6\u652F\u6301\u7B2C\u4E09\u65B9\u767B\u5F55\uFF0C\u65B0\u7528\u6237\u6388\u6743\u5373\u81EA\u52A8\u6CE8\u518C\u8D26\u53F7",-1),Z=i("\u5FAE\u4FE1\u767B\u5F55"),uu={href:"https://open.weixin.qq.com/",target:"_blank"},eu=i(" \u524D\u5F80\u5FAE\u4FE1\u5F00\u653E\u5E73\u53F0 "),ou=e("div",{class:"form-tips"},[i(" 1\u3001\u5728\u5404\u6E20\u9053\u4F7F\u7528\u5FAE\u4FE1\u6388\u6743\u767B\u5F55\u65F6\uFF0C\u5F3A\u70C8\u5EFA\u8BAE\u914D\u7F6E\u5FAE\u4FE1\u5F00\u653E\u5E73\u53F0"),e("br"),i(" 2\u3001\u5FAE\u4FE1\u5F00\u653E\u5E73\u53F0\u5173\u8054\u516C\u4F17\u53F7\u3001\u5C0F\u7A0B\u5E8F\u548CAPP\u540E\uFF0C\u53EF\u5B9E\u73B0\u5404\u7AEF\u7528\u6237\u8D26\u53F7\u7EDF\u4E00\uFF0C\u8BC6\u522B\u4E70\u5BB6\u552F\u4E00\u5FAE\u4FE1\u8EAB\u4EFD"),e("br"),i(" 3\u3001\u6CA1\u6709\u914D\u7F6E\u5FAE\u4FE1\u5F00\u653E\u5E73\u53F0\uFF0C\u540C\u4E00\u5FAE\u4FE1\u53F7\u4F1A\u751F\u6210\u591A\u4E2A\u7528\u6237\uFF0C\u914D\u7F6E\u5FAE\u4FE1\u5F00\u653E\u5E73\u53F0\u540E\u5DF2\u751F\u6210\u7684\u7528\u6237\u8D26\u53F7\u65E0\u6CD5\u5408\u5E76 ")],-1),tu=i("\u4FDD\u5B58"),lu=f({name:"loginRegister"}),$u=f({...lu,setup(nu){const m=U(),u=B({loginWay:[],forceBindMobile:0,openAgreement:0,openOtherAuth:0,autoLoginAuth:[1,2]}),g=B({loginWay:[{required:!0,validator:(n,o,a)=>{if(u.loginWay.join("").length===0)a(new Error("\u767B\u5F55\u65B9\u5F0F\u81F3\u5C11\u9009\u62E9\u4E00\u9879\uFF01"));else{if(u.loginWay!==""){if(!m.value)return;m.value.validateField("checkPass",()=>null)}a()}},trigger:"change"}],forceBindMobile:[{required:!0,trigger:"blur"}],openAgreement:[{required:!0,trigger:"blur"}],openOtherAuth:[{required:!0,trigger:"blur"}]}),p=async()=>{try{const n=await M();for(const o in u)u[o]=n[o]}catch(n){console.log("\u83B7\u53D6=>",n)}},C=async()=>{var a;const n=u.loginWay.join(""),o=u.autoLoginAuth.join("");await((a=m.value)==null?void 0:a.validate());try{await O({...u,loginWay:n.length==2?`${n[0]},${n[1]}`:n,autoLoginAuth:o.length==2?`${o[0]},${o[1]}`:o}),q.msgSuccess("\u64CD\u4F5C\u6210\u529F"),p()}catch(s){console.log("\u4FDD\u5B58=>",s)}};return p(),(n,o)=>{const a=y,s=V,F=k,d=w,E=W,_=x,h=L,v=b,D=S("perms");return A(),$("div",P,[t(h,{ref_key:"formRef",ref:m,rules:g,model:u,"label-width":"120px"},{default:l(()=>[t(E,{shadow:"never",class:"!border-none"},{default:l(()=>[R,t(F,{label:"\u767B\u5F55\u65B9\u5F0F",prop:"loginWay"},{default:l(()=>[e("div",null,[t(s,{modelValue:u.loginWay,"onUpdate:modelValue":o[0]||(o[0]=r=>u.loginWay=r)},{default:l(()=>[t(a,{label:1},{default:l(()=>[I]),_:1}),t(a,{label:2},{default:l(()=>[T]),_:1})]),_:1},8,["modelValue"]),G])]),_:1}),t(F,{label:"\u5F3A\u5236\u7ED1\u5B9A\u624B\u673A",prop:"forceBindMobile"},{default:l(()=>[e("div",null,[t(d,{modelValue:u.forceBindMobile,"onUpdate:modelValue":o[1]||(o[1]=r=>u.forceBindMobile=r),"active-value":1,"inactive-value":0},null,8,["modelValue"]),e("span",z,c(u.forceBindMobile?"\u5F00\u542F":"\u5173\u95ED"),1),H])]),_:1}),t(F,{label:"\u653F\u7B56\u534F\u8BAE",prop:"openAgreement"},{default:l(()=>[e("div",null,[t(d,{modelValue:u.openAgreement,"onUpdate:modelValue":o[2]||(o[2]=r=>u.openAgreement=r),"active-value":1,"inactive-value":0},null,8,["modelValue"]),e("span",J,c(u.openAgreement?"\u5F00\u542F":"\u5173\u95ED"),1),K])]),_:1})]),_:1}),t(E,{shadow:"never",class:"!border-none mt-4"},{default:l(()=>[Q,t(F,{label:"\u7B2C\u4E09\u65B9\u767B\u5F55",prop:"openOtherAuth"},{default:l(()=>[e("div",null,[t(d,{modelValue:u.openOtherAuth,"onUpdate:modelValue":o[3]||(o[3]=r=>u.openOtherAuth=r),"active-value":1,"inactive-value":0},null,8,["modelValue"]),e("span",X,c(u.openOtherAuth?"\u5F00\u542F":"\u5173\u95ED"),1),Y,e("div",null,[t(s,{modelValue:u.autoLoginAuth,"onUpdate:modelValue":o[4]||(o[4]=r=>u.autoLoginAuth=r)},{default:l(()=>[t(a,{label:1},{default:l(()=>[Z]),_:1})]),_:1},8,["modelValue"])])])]),_:1}),t(F,{label:"\u5FAE\u4FE1\u5F00\u653E\u5E73\u53F0"},{default:l(()=>[e("div",null,[e("a",uu,[t(_,{type:"primary",link:"",class:"underline"},{default:l(()=>[eu]),_:1})]),ou])]),_:1})]),_:1})]),_:1},8,["rules","model"]),j((A(),N(v,null,{default:l(()=>[t(_,{type:"primary",onClick:C},{default:l(()=>[tu]),_:1})]),_:1})),[[D,["setting:login:save"]]])])}}});export{$u as default};
