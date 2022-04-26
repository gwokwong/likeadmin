import{m as C}from"./index.f08504ab.js";import{F as B}from"./index.d15a29cd.js";import{l as E,m as V}from"./setting.f509c394.js";import{_ as k}from"./index.98d1e0a4.js";import{d as w,v as j,V as W,y,r as l,W as x,a as q,i as e,w as u,o as b,f as n,X as U,b as $,j as d}from"./vendor.bbaa8c82.js";import"./index.3b9d9ffc.js";import"./index.f272d12e.js";const N=w({components:{MaterialSelect:C,FooterBtns:B},setup(){const t=j(null),o=W({name:"",favicon:"",logo:"",backdrop:""}),g={name:[{required:!0,message:"\u8BF7\u8F93\u5165\u7F51\u7AD9\u540D\u79F0",trigger:["blur"]}],favicon:[{required:!0,message:"\u4E0A\u4F20\u7F51\u7AD9\u56FE\u6807",trigger:["blur"]}],logo:[{required:!0,message:"\u4E0A\u4F20\u7F51\u7AD9logo",trigger:["blur"]}],backdrop:[{required:!0,message:"\u4E0A\u4F20\u767B\u5F55\u9875\u5E7F\u544A\u56FE",trigger:["blur"]}]},i=()=>{E().then(a=>{console.log("res",a),o.name=a.name,o.favicon=a.favicon,o.logo=a.logo,o.backdrop=a.backdrop})},_=()=>{var a;(a=t.value)==null||a.validate(p=>{!p||(console.log("fasdfasd"),V({name:o.name,favicon:o.favicon,logo:o.logo,backdrop:o.backdrop}).then(r=>{console.log("res",r),i()}).catch(r=>{console.log("err",r)}))})};return y(()=>{i()}),{formData:o,rules:g,getWebsite:i,setWebsite:_,formRef:t}}}),S={class:"website-information"},z={class:"flex"},G=n("div",{class:"muted xs m-r-16"}," \u5EFA\u8BAE\u5C3A\u5BF8\uFF1A100*100\u50CF\u7D20\uFF0C\u652F\u6301jpg\uFF0Cjpeg\uFF0Cpng\u683C\u5F0F ",-1),M=d("\u67E5\u770B\u793A\u4F8B"),O={class:"flex"},R=n("div",{class:"muted xs m-r-16"}," \u5EFA\u8BAE\u5C3A\u5BF8\uFF1A100*100\u50CF\u7D20\uFF0C\u652F\u6301jpg\uFF0Cjpeg\uFF0Cpng\u683C\u5F0F ",-1),L=d("\u67E5\u770B\u793A\u4F8B"),T={class:"flex"},X=n("div",{class:"muted xs m-r-16"}," \u5EFA\u8BAE\u5C3A\u5BF8\uFF1A100*100\u50CF\u7D20\uFF0C\u652F\u6301jpg\uFF0Cjpeg\uFF0Cpng\u683C\u5F0F ",-1),H=d("\u67E5\u770B\u793A\u4F8B"),I=d("\u4FDD\u5B58");function J(t,o,g,i,_,a){const p=l("el-input"),r=l("el-form-item"),c=l("material-select"),f=l("el-image"),m=l("el-button"),F=l("el-popover"),v=l("el-form"),A=l("el-card"),D=l("footer-btns"),h=x("perm");return b(),q("div",S,[e(A,{shadow:"never",class:"m-t-15"},{default:u(()=>[e(v,{ref:"formRef",rules:t.rules,class:"ls-form",model:t.formData,"label-width":"150px",size:"small"},{default:u(()=>[e(r,{label:"\u7F51\u7AD9\u540D\u79F0",prop:"name"},{default:u(()=>[e(p,{modelValue:t.formData.name,"onUpdate:modelValue":o[0]||(o[0]=s=>t.formData.name=s),placeholder:"\u8BF7\u8F93\u5165\u7F51\u7AD9\u540D\u79F0",maxlength:"12","show-word-limit":""},null,8,["modelValue"])]),_:1}),e(r,{label:"\u7F51\u7AD9\u56FE\u6807",prop:"favicon"},{default:u(()=>[e(c,{modelValue:t.formData.favicon,"onUpdate:modelValue":o[1]||(o[1]=s=>t.formData.favicon=s),limit:1},null,8,["modelValue"]),n("div",z,[G,e(F,{placement:"right",width:"200",trigger:"hover"},{default:u(()=>[e(f,{src:"https://img2.baidu.com/it/u=3357699356,1912406716&fm=26&fmt=auto&gp=0.jpg"}),e(m,{slot:"reference",type:"text"},{default:u(()=>[M]),_:1})]),_:1})])]),_:1}),e(r,{label:"\u7F51\u7AD9LOGO",prop:"logo"},{default:u(()=>[e(c,{modelValue:t.formData.logo,"onUpdate:modelValue":o[2]||(o[2]=s=>t.formData.logo=s),limit:1},null,8,["modelValue"]),n("div",O,[R,e(F,{placement:"right",width:"200",trigger:"hover"},{default:u(()=>[e(f,{src:"https://img2.baidu.com/it/u=3357699356,1912406716&fm=26&fmt=auto&gp=0.jpg"}),e(m,{slot:"reference",type:"text"},{default:u(()=>[L]),_:1})]),_:1})])]),_:1}),e(r,{label:"\u767B\u5F55\u9875\u5E7F\u544A\u56FE",prop:"backdrop"},{default:u(()=>[e(c,{modelValue:t.formData.backdrop,"onUpdate:modelValue":o[3]||(o[3]=s=>t.formData.backdrop=s),limit:1},null,8,["modelValue"]),n("div",T,[X,e(F,{placement:"right",width:"200",trigger:"hover"},{default:u(()=>[e(f,{src:"https://img2.baidu.com/it/u=3357699356,1912406716&fm=26&fmt=auto&gp=0.jpg"}),e(m,{slot:"reference",type:"text"},{default:u(()=>[H]),_:1})]),_:1})])]),_:1})]),_:1},8,["rules","model"])]),_:1}),e(D,null,{default:u(()=>[U((b(),$(m,{type:"primary",size:"small",onClick:t.setWebsite},{default:u(()=>[I]),_:1},8,["onClick"])),[[h,["setting:setWebsite"]]])]),_:1})])}var te=k(N,[["render",J]]);export{te as default};
