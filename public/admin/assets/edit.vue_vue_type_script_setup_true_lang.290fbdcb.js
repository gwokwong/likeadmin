import{X as H,C as q,w as J,E as Y,a as Z,O as ee,P as ue,_ as le,$ as oe,D as te,v as se,F as ae}from"./element-plus.f5eb07a0.js";import{o as ne,p as de,b as ie,q as re,M as p,s as me,t as pe,f as ce}from"./index.1256601b.js";import{d as W,r as w,s as O,a0 as P,e as z,w as Fe,j as _e,o as r,c as B,V as l,M as o,u as m,L as f,W as $,a as t,a8 as I,Q as fe,U as Ee,_ as L,T as E,n as R,S as C}from"./@vue.cab01781.js";import{c as ve}from"./@vueuse.724ed0af.js";import{m as Ce,a as be,b as Ve,c as Be}from"./menu.d19d4b04.js";import{P as De}from"./index.f69f13bd.js";const he={class:"icon-select"},ye={class:"flex justify-between"},Ae=t("div",{class:"mb-3"},"\u8BF7\u9009\u62E9\u56FE\u6807",-1),Te=["onClick"],ke={class:"h-[280px]"},Ue={class:"flex flex-wrap"},ge={key:0,class:"flex items-center"},we=E("\u65E0"),xe=W({__name:"picker",props:{modelValue:{default:""},disabled:{type:Boolean,default:!1}},emits:["update:modelValue","change"],setup(D,{emit:h}){const y=w(0),T=[{name:"element\u56FE\u6807",icons:ne()},{name:"\u672C\u5730\u56FE\u6807",icons:de()}],b=O(),s=P({inputValue:"",popoverVisible:!1,popoverWidth:0,mouseoverSelect:!1,inputFocus:!1}),x=()=>{s.inputFocus=s.popoverVisible=!0},U=()=>{s.inputFocus=!1,s.popoverVisible=s.mouseoverSelect},N=c=>{s.mouseoverSelect=s.popoverVisible=!1,h("update:modelValue",c),h("change",c)},u=()=>{h("update:modelValue",""),h("change","")},S=z(()=>{var _,V;const c=(V=(_=T[y.value])==null?void 0:_.icons)!=null?V:[];if(!s.inputValue)return c;const n=s.inputValue.toLowerCase();return c.filter(A=>{if(A.toLowerCase().indexOf(n)!==-1)return A})}),g=()=>{R(()=>{var n;const c=(n=b.value)==null?void 0:n.$el.offsetWidth;s.popoverWidth=c<300?300:c})};return ve(document.body,"click",()=>{s.popoverVisible=!!(s.inputFocus||s.mouseoverSelect)}),Fe(()=>s.popoverVisible,async c=>{var n,_;await R(),c?(n=b.value)==null||n.focus():(_=b.value)==null||_.blur()}),_e(()=>{g()}),(c,n)=>{const _=ie,V=J,A=Y,M=Z,d=H;return r(),B("div",he,[l(d,{trigger:"contextmenu",visible:s.popoverVisible,"onUpdate:visible":n[3]||(n[3]=e=>s.popoverVisible=e),width:s.popoverWidth},{reference:o(()=>[l(m(q),{ref_key:"inputRef",ref:b,modelValue:s.inputValue,"onUpdate:modelValue":n[2]||(n[2]=e=>s.inputValue=e),modelModifiers:{trim:!0},placeholder:"\u641C\u7D22\u56FE\u6807",autofocus:!1,disabled:D.disabled,onFocus:x,onBlur:U,clearable:""},{prepend:o(()=>[D.modelValue?(r(),B("div",ge,[l(M,{class:"flex-1 w-20",content:D.modelValue,placement:"top"},{default:o(()=>[(r(),f(_,{class:"mr-1",key:D.modelValue,name:D.modelValue,size:16},null,8,["name"]))]),_:1},8,["content"])])):(r(),B($,{key:1},[we],64))]),append:o(()=>[l(V,null,{default:o(()=>[l(_,{name:"el-icon-Close",size:18,onClick:u})]),_:1})]),_:1},8,["modelValue","disabled"])]),default:o(()=>[t("div",{onMouseover:n[0]||(n[0]=L(e=>s.mouseoverSelect=!0,["stop"])),onMouseout:n[1]||(n[1]=L(e=>s.mouseoverSelect=!1,["stop"]))},[t("div",null,[t("div",ye,[Ae,t("div",null,[(r(),B($,null,I(T,(e,i)=>t("span",{key:i,class:fe(["cursor-pointer text-sm ml-2",{"text-primary":i==y.value}]),onClick:v=>y.value=i},Ee(e.name),11,Te)),64))])]),t("div",ke,[l(A,null,{default:o(()=>[t("div",Ue,[(r(!0),B($,null,I(m(S),e=>(r(),B("div",{key:e,class:"m-1"},[l(V,{onClick:i=>N(e)},{default:o(()=>[l(_,{name:e,size:18},null,8,["name"])]),_:2},1032,["onClick"])]))),128))])]),_:1})])])],32)]),_:1},8,["visible","width"])])}}}),Ne={class:"edit-popup"},Se=E("\u76EE\u5F55"),Me=E("\u83DC\u5355"),$e=E("\u6309\u94AE"),Oe={class:"flex-1"},Ie=t("div",{class:"form-tips"}," \u8BBF\u95EE\u7684\u8DEF\u7531\u5730\u5740\uFF0C\u5982\uFF1A`admin`\uFF0C\u5982\u5916\u7F51\u5730\u5740\u9700\u5185\u94FE\u8BBF\u95EE\u5219\u4EE5`http(s)://`\u5F00\u5934 ",-1),Le={class:"flex-1"},Re=t("div",{class:"form-tips"}," \u8BBF\u95EE\u7684\u7EC4\u4EF6\u8DEF\u5F84\uFF0C\u5982\uFF1A`permission/admin/index`\uFF0C\u9ED8\u8BA4\u5728`views`\u76EE\u5F55\u4E0B ",-1),qe={class:"flex-1"},We=t("div",{class:"form-tips"}," \u8BBF\u95EE\u8BE6\u60C5\u9875\u9762\uFF0C\u7F16\u8F91\u9875\u9762\u65F6\uFF0C\u83DC\u5355\u9AD8\u4EAE\u663E\u793A\uFF0C\u5982`/consumer/lists` ",-1),Pe={class:"flex-1"},ze=t("div",{class:"form-tips"}," \u5C06\u4F5C\u4E3Aserver\u7AEFAPI\u9A8C\u6743\u4F7F\u7528\uFF0C\u5982`system:admin:list`\uFF0C\u8BF7\u8C28\u614E\u4FEE\u6539 ",-1),Ge={class:"flex-1"},je=t("div",{class:"form-tips"},' \u8BBF\u95EE\u8DEF\u7531\u7684\u9ED8\u8BA4\u4F20\u9012\u53C2\u6570\uFF0C\u5982\uFF1A`{"id": 1, "name": "admin"}`\u6216`id=1&name=admin` ',-1),Ke=E("\u7F13\u5B58"),Qe=E("\u4E0D\u7F13\u5B58"),Xe=t("div",{class:"form-tips"},"\u9009\u62E9\u7F13\u5B58\u5219\u4F1A\u88AB`keep-alive`\u7F13\u5B58",-1),He=E("\u663E\u793A"),Je=E("\u9690\u85CF"),Ye=t("div",{class:"form-tips"}," \u9009\u62E9\u9690\u85CF\u5219\u8DEF\u7531\u5C06\u4E0D\u4F1A\u51FA\u73B0\u5728\u4FA7\u8FB9\u680F\uFF0C\u4F46\u4ECD\u7136\u53EF\u4EE5\u8BBF\u95EE ",-1),Ze=E("\u6B63\u5E38"),eu=E("\u505C\u7528"),uu=t("div",{class:"form-tips"},"\u9009\u62E9\u505C\u7528\u5219\u8DEF\u7531\u5C06\u4E0D\u4F1A\u51FA\u73B0\u5728\u4FA7\u8FB9\u680F\uFF0C\u4E5F\u4E0D\u80FD\u88AB\u8BBF\u95EE",-1),lu=t("div",{class:"form-tips"},"\u6570\u503C\u8D8A\u5927\u8D8A\u6392\u524D",-1),iu=W({__name:"edit",emits:["success","close"],setup(D,{expose:h,emit:y}){const T=O(),b=O(),s=w("add"),x=z(()=>s.value=="edit"?"\u7F16\u8F91\u83DC\u5355":"\u65B0\u589E\u83DC\u5355"),U=w(re()),N=(d,e)=>{const i=d?U.value.filter(v=>v.toLowerCase().includes(d.toLowerCase())):U.value;e(i.map(v=>({value:v})))},u=P({id:"",pid:0,menuType:p.CATALOGUE,menuIcon:"",menuName:"",menuSort:0,paths:"",perms:"",component:"",selected:"",params:"",isCache:0,isShow:1,isDisable:0}),S={pid:[{required:!0,message:"\u8BF7\u9009\u62E9\u7236\u7EA7\u83DC\u5355",trigger:["blur","change"]}],menuName:[{required:!0,message:"\u8BF7\u8F93\u5165\u83DC\u5355\u540D\u79F0",trigger:"blur"}],paths:[{required:!0,message:"\u8BF7\u8F93\u5165\u8DEF\u7531\u5730\u5740",trigger:"blur"}],component:[{required:!0,message:"\u8BF7\u8F93\u5165\u7EC4\u4EF6\u5730\u5740",trigger:"blur"}]},g=w([]),c=async()=>{const d=await Ce(),e={id:0,menuName:"\u9876\u7EA7",children:[]};e.children=me(pe(d).filter(i=>i.menuType!=p.BUTTON)),g.value.push(e)},n=async()=>{var d,e;await((d=T.value)==null?void 0:d.validate()),s.value=="edit"?await be(u):await Ve(u),(e=b.value)==null||e.close(),ce.msgSuccess("\u64CD\u4F5C\u6210\u529F"),y("success")},_=(d="add")=>{var e;s.value=d,(e=b.value)==null||e.open()},V=d=>{for(const e in u)d[e]!=null&&d[e]!=null&&(u[e]=d[e])},A=async d=>{const e=await Be({id:d.id});V(e)},M=()=>{y("close")};return c(),h({open:_,setFormData:V,getDetail:A}),(d,e)=>{const i=ee,v=ue,F=te,G=le,k=q,j=xe,K=oe,Q=se,X=ae;return r(),B("div",Ne,[l(De,{ref_key:"popupRef",ref:b,title:m(x),async:!0,width:"550px",onConfirm:n,onClose:M},{default:o(()=>[l(X,{ref_key:"formRef",ref:T,model:u,"label-width":"80px",rules:S},{default:o(()=>[l(F,{label:"\u83DC\u5355\u7C7B\u578B",prop:"menuType",required:""},{default:o(()=>[l(v,{modelValue:u.menuType,"onUpdate:modelValue":e[0]||(e[0]=a=>u.menuType=a)},{default:o(()=>[l(i,{label:m(p).CATALOGUE},{default:o(()=>[Se]),_:1},8,["label"]),l(i,{label:m(p).MENU},{default:o(()=>[Me]),_:1},8,["label"]),l(i,{label:m(p).BUTTON},{default:o(()=>[$e]),_:1},8,["label"])]),_:1},8,["modelValue"])]),_:1}),l(F,{label:"\u7236\u7EA7\u83DC\u5355",prop:"pid"},{default:o(()=>[l(G,{class:"flex-1",modelValue:u.pid,"onUpdate:modelValue":e[1]||(e[1]=a=>u.pid=a),data:g.value,clearable:"","node-key":"id",props:{label:"menuName"},"default-expand-all":!0,placeholder:"\u8BF7\u9009\u62E9\u7236\u7EA7\u83DC\u5355","check-strictly":""},null,8,["modelValue","data"])]),_:1}),l(F,{label:"\u83DC\u5355\u540D\u79F0",prop:"menuName"},{default:o(()=>[l(k,{modelValue:u.menuName,"onUpdate:modelValue":e[2]||(e[2]=a=>u.menuName=a),placeholder:"\u8BF7\u8F93\u5165\u83DC\u5355\u540D\u79F0",clearable:""},null,8,["modelValue"])]),_:1}),u.menuType!=m(p).BUTTON?(r(),f(F,{key:0,label:"\u83DC\u5355\u56FE\u6807",prop:"menuIcon"},{default:o(()=>[l(j,{class:"flex-1",modelValue:u.menuIcon,"onUpdate:modelValue":e[3]||(e[3]=a=>u.menuIcon=a)},null,8,["modelValue"])]),_:1})):C("",!0),u.menuType!=m(p).BUTTON?(r(),f(F,{key:1,label:"\u8DEF\u7531\u8DEF\u5F84",prop:"paths"},{default:o(()=>[t("div",Oe,[l(k,{modelValue:u.paths,"onUpdate:modelValue":e[4]||(e[4]=a=>u.paths=a),placeholder:"\u8BF7\u8F93\u5165\u8DEF\u7531\u8DEF\u5F84",clearable:""},null,8,["modelValue"]),Ie])]),_:1})):C("",!0),u.menuType==m(p).MENU?(r(),f(F,{key:2,label:"\u7EC4\u4EF6\u8DEF\u5F84",prop:"component"},{default:o(()=>[t("div",Le,[l(K,{class:"w-full",modelValue:u.component,"onUpdate:modelValue":e[5]||(e[5]=a=>u.component=a),"fetch-suggestions":N,clearable:"",placeholder:"\u8BF7\u8F93\u5165\u7EC4\u4EF6\u8DEF\u5F84"},null,8,["modelValue"]),Re])]),_:1})):C("",!0),u.menuType==m(p).MENU?(r(),f(F,{key:3,label:"\u9009\u4E2D\u83DC\u5355",prop:"selected"},{default:o(()=>[t("div",qe,[l(k,{modelValue:u.selected,"onUpdate:modelValue":e[6]||(e[6]=a=>u.selected=a),placeholder:"\u8BF7\u8F93\u5165\u8DEF\u7531\u8DEF\u5F84",clearable:""},null,8,["modelValue"]),We])]),_:1})):C("",!0),u.menuType!=m(p).CATALOGUE?(r(),f(F,{key:4,label:"\u6743\u9650\u5B57\u7B26",prop:"perms"},{default:o(()=>[t("div",Pe,[l(k,{modelValue:u.perms,"onUpdate:modelValue":e[7]||(e[7]=a=>u.perms=a),placeholder:"\u8BF7\u8F93\u5165\u6743\u9650\u5B57\u7B26",clearable:""},null,8,["modelValue"]),ze])]),_:1})):C("",!0),u.menuType==m(p).MENU?(r(),f(F,{key:5,label:"\u8DEF\u7531\u53C2\u6570",prop:"params"},{default:o(()=>[t("div",null,[t("div",Ge,[l(k,{modelValue:u.params,"onUpdate:modelValue":e[8]||(e[8]=a=>u.params=a),placeholder:"\u8BF7\u8F93\u5165\u8DEF\u7531\u53C2\u6570",clearable:""},null,8,["modelValue"])]),je])]),_:1})):C("",!0),u.menuType==m(p).MENU?(r(),f(F,{key:6,label:"\u662F\u5426\u7F13\u5B58",prop:"isCache",required:""},{default:o(()=>[t("div",null,[l(v,{modelValue:u.isCache,"onUpdate:modelValue":e[9]||(e[9]=a=>u.isCache=a)},{default:o(()=>[l(i,{label:1},{default:o(()=>[Ke]),_:1}),l(i,{label:0},{default:o(()=>[Qe]),_:1})]),_:1},8,["modelValue"]),Xe])]),_:1})):C("",!0),u.menuType!=m(p).BUTTON?(r(),f(F,{key:7,label:"\u662F\u5426\u663E\u793A",prop:"isShow",required:""},{default:o(()=>[t("div",null,[l(v,{modelValue:u.isShow,"onUpdate:modelValue":e[10]||(e[10]=a=>u.isShow=a)},{default:o(()=>[l(i,{label:1},{default:o(()=>[He]),_:1}),l(i,{label:0},{default:o(()=>[Je]),_:1})]),_:1},8,["modelValue"]),Ye])]),_:1})):C("",!0),u.menuType!=m(p).BUTTON?(r(),f(F,{key:8,label:"\u83DC\u5355\u72B6\u6001",prop:"isDisable",required:""},{default:o(()=>[t("div",null,[l(v,{modelValue:u.isDisable,"onUpdate:modelValue":e[11]||(e[11]=a=>u.isDisable=a)},{default:o(()=>[l(i,{label:0},{default:o(()=>[Ze]),_:1}),l(i,{label:1},{default:o(()=>[eu]),_:1})]),_:1},8,["modelValue"]),uu])]),_:1})):C("",!0),l(F,{label:"\u83DC\u5355\u6392\u5E8F",prop:"menuSort"},{default:o(()=>[t("div",null,[l(Q,{modelValue:u.menuSort,"onUpdate:modelValue":e[12]||(e[12]=a=>u.menuSort=a),max:9999},null,8,["modelValue"]),lu])]),_:1})]),_:1},8,["model"])]),_:1},8,["title"])])}}});export{iu as _};
