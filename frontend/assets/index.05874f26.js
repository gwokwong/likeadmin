import{e as B,f}from"./setting.948668ec.js";import{d as h,y as g,A as E,r as t,a as C,i as e,w as a,o as b,_ as A,k as v,E as w}from"./vendor.26ab8f26.js";import"./index.195d4b6e.js";const x={class:"storage"},y=v("\u8BBE\u7F6E"),M=h({setup(D){let l=g([]);const n=async()=>{l.value=await B()},_=async o=>{await f({alias:o.alias,status:o.status}).then(()=>{w({type:"success",message:"\u5207\u6362\u6210\u529F"})}),n()};return E(()=>{n()}),(o,V)=>{const i=t("el-alert"),c=t("el-card"),s=t("el-table-column"),F=t("el-switch"),d=t("el-button"),p=t("router-link"),m=t("el-table");return b(),C("div",x,[e(c,{shadow:"never"},{default:a(()=>[e(i,{class:"xxl",title:"\u6E29\u99A8\u63D0\u793A\uFF1A1.\u5207\u6362\u5B58\u50A8\u65B9\u5F0F\u540E\uFF0C\u9700\u8981\u5C06\u8D44\u6E90\u6587\u4EF6\u4F20\u8F93\u81F3\u65B0\u7684\u5B58\u50A8\u7AEF\uFF1B2.\u8BF7\u52FF\u968F\u610F\u5207\u6362\u5B58\u50A8\u65B9\u5F0F\uFF0C\u53EF\u80FD\u5BFC\u81F4\u56FE\u7247\u65E0\u6CD5\u67E5\u770B",type:"primary",closable:!1,"show-icon":""})]),_:1}),e(c,{class:"m-t-15",shadow:"never"},{default:a(()=>[e(m,{data:A(l),class:"m-t-20",size:"small"},{default:a(()=>[e(s,{label:"\u50A8\u5B58\u65B9\u5F0F",prop:"alias"}),e(s,{label:"\u50A8\u5B58\u4F4D\u7F6E",prop:"describe"}),e(s,{label:"\u72B6\u6001"},{default:a(({row:u})=>[e(F,{modelValue:u.status,"onUpdate:modelValue":r=>u.status=r,"active-value":1,"inactive-value":0,onChange:r=>_(u)},null,8,["modelValue","onUpdate:modelValue","onChange"])]),_:1}),e(s,{label:"\u64CD\u4F5C",fixed:"right"},{default:a(u=>[e(p,{class:"m-r-10",to:{path:"/setting/storage/edit",query:{alias:u.row.alias}}},{default:a(()=>[e(d,{type:"text"},{default:a(()=>[y]),_:1})]),_:2},1032,["to"])]),_:1})]),_:1},8,["data"])]),_:1})])}}});export{M as default};
