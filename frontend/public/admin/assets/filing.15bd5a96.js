import{e as g,f as b}from"./setting.113aa7cb.js";import{F as C}from"./index.47065b61.js";import{_}from"./index.9d3a8519.js";import{d as B,r as k,o as v,a as r,b as D,c as N,f as u,w as t,e as p,m as V}from"./vendor.d574ef89.js";const L=B({components:{FooterBtns:C},setup(){const e=k({privilege:"",icpNumber:"",icpLink:"",gaNumber:"",gaLink:""}),o={},m=()=>{g().then(l=>{console.log("res",l),e.privilege=l.privilege,e.icpNumber=l.icpNumber,e.icpLink=l.icpLink,e.gaNumber=l.gaNumber,e.gaLink=l.gaLink})},s=()=>{console.log(e.privilege,"=="),b({privilege:e.privilege,icpNumber:e.icpNumber,icpLink:e.icpLink,gaNumber:e.gaNumber,gaLink:e.gaLink}).then(l=>{console.log("res",l),m()}).catch(l=>{console.log("err",l)})};return v(()=>{m()}),{formData:e,rules:o,getCopyright:m,setCopyright:s}}}),h={class:"website-filing"},E=p("div",{class:"muted xs m-r-16"},"\u4F8B\u5982\u586B\u5199\uFF0CCopyright \xA9 2019-2020 \u516C\u53F8\u540D\u79F0",-1),w=p("div",{class:"muted xs m-r-16"}," \u4F8B\u5982\u586B\u5199\u57DF\u540D\u4FE1\u606F\u5907\u6848\u7CFB\u7EDF\u94FE\u63A5\uFF0Chttp://beian.miit.gov.cn ",-1),y=p("div",{class:"muted xs m-r-16"}," \u4F8B\u5982\u586B\u5199\u516C\u5B89\u4FE1\u606F\u5907\u6848\u7CFB\u7EDF\u94FE\u63A5\uFF0Chttp://www.beian.gov.cn ",-1),A=V("\u4FDD\u5B58");function U(e,o,m,s,l,I){const i=r("el-input"),n=r("el-form-item"),d=r("el-form"),F=r("el-card"),c=r("el-button"),f=r("footer-btns");return D(),N("div",h,[u(F,{shadow:"never",class:""},{default:t(()=>[u(d,{ref:"form",rules:e.rules,class:"ls-form",model:e.formData,"label-width":"150px",size:"small"},{default:t(()=>[u(n,{label:"\u7248\u6743\u4FE1\u606F",prop:"privilege"},{default:t(()=>[u(i,{modelValue:e.formData.privilege,"onUpdate:modelValue":o[0]||(o[0]=a=>e.formData.privilege=a),placeholder:"\u8BF7\u8F93\u5165\u7248\u6743\u4FE1\u606F"},null,8,["modelValue"]),E]),_:1}),u(n,{label:"ICP\u5907\u6848\u53F7",prop:"icpNumber"},{default:t(()=>[u(i,{modelValue:e.formData.icpNumber,"onUpdate:modelValue":o[1]||(o[1]=a=>e.formData.icpNumber=a),placeholder:"\u8BF7\u8F93\u5165ICP\u5907\u6848\u53F7"},null,8,["modelValue"])]),_:1}),u(n,{label:"ICP\u5907\u6848\u53F7\u94FE\u63A5",prop:"icpLink"},{default:t(()=>[u(i,{modelValue:e.formData.icpLink,"onUpdate:modelValue":o[2]||(o[2]=a=>e.formData.icpLink=a),placeholder:"\u8BF7\u8F93\u5165ICP\u5907\u6848\u53F7\u94FE\u63A5"},null,8,["modelValue"]),w]),_:1}),u(n,{label:"\u516C\u5B89\u5907\u6848\u53F7",prop:"gaNumber"},{default:t(()=>[u(i,{modelValue:e.formData.gaNumber,"onUpdate:modelValue":o[3]||(o[3]=a=>e.formData.gaNumber=a),placeholder:"\u8BF7\u8F93\u5165\u516C\u5B89\u5907\u6848\u53F7"},null,8,["modelValue"])]),_:1}),u(n,{label:"\u516C\u5B89\u5907\u6848\u53F7\u94FE\u63A5",prop:"gaLink"},{default:t(()=>[u(i,{modelValue:e.formData.gaLink,"onUpdate:modelValue":o[4]||(o[4]=a=>e.formData.gaLink=a),placeholder:"\u8BF7\u8F93\u5165\u516C\u5B89\u5907\u6848\u53F7\u94FE\u63A5"},null,8,["modelValue"]),y]),_:1})]),_:1},8,["rules","model"])]),_:1}),u(f,null,{default:t(()=>[u(c,{type:"primary",size:"small",onClick:e.setCopyright},{default:t(()=>[A]),_:1},8,["onClick"])]),_:1})])}var M=_(L,[["render",U]]);export{M as default};