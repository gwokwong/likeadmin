import{x as b,_ as y}from"./index.98d1e0a4.js";import{d as w,V as g,y as k,r as d,a as r,f as e,i as o,w as s,o as u,g as a,e as h,a7 as B,a8 as E}from"./vendor.bbaa8c82.js";function D(){return b.get("/index/console")}var p="/assets/avatar.f16c9209.png";const A=w({setup(){const t=g({version:{version:"",website:""},today:{},menu:[],visitor:[],article:[],visitorOption:{xAxis:{type:"category",data:[0]},yAxis:{type:"value"},legend:{data:["\u8BBF\u95EE\u91CF"]},itemStyle:{color:"red"},tooltip:{trigger:"axis"},series:[{name:"\u8BBF\u95EE\u91CF",data:[0],type:"line"}]}}),v=()=>{D().then(i=>{console.log("res",i),t.version=i.version,t.today=i.today,t.menu=i.menu,t.visitor=i.visitor,t.article=i.article,t.visitorOption.xAxis.data=[],t.visitorOption.series[0].data=[],i.visitor.date.reverse().forEach(_=>{t.visitorOption.xAxis.data.push(_)}),i.visitor.list[0].data.forEach(_=>{t.visitorOption.series[0].data.push(_)})}).catch(i=>{console.log("err",i)})};return k(()=>{v()}),{workbenchData:t,getWorkbench:v}}}),n=t=>(B("data-v-696ed410"),t=t(),E(),t),C={class:"workbench"},$={class:"flex workbench-header"},S=n(()=>e("span",{class:"card-title"},"\u8D26\u53F7\u4FE1\u606F",-1)),O={class:"m-b-20"},V=n(()=>e("span",{class:"card-title"},"\u4ECA\u65E5\u6570\u636E",-1)),I={class:"muted xs m-l-15"},N={class:"flex"},U={class:"flex-1"},W=n(()=>e("div",{class:"lighter m-b-10"},"\u8BBF\u95EE\u91CF",-1)),q={class:"f-s-32 m-b-10"},z={class:"lighter"},M={class:"flex-1"},j=n(()=>e("div",{class:"lighter m-b-10"},"\u9500\u552E\u989D",-1)),G={class:"f-s-32 m-b-10"},H={class:"lighter"},J={class:"flex-1"},K=n(()=>e("div",{class:"lighter m-b-10"},"\u65B0\u589E\u7528\u6237",-1)),L={class:"f-s-32 m-b-10"},P={class:"lighter"},Q={class:"m-t-15 function"},R=n(()=>e("span",{class:"card-title"},"\u5E38\u7528\u529F\u80FD",-1)),T={class:"nav-lists"},X=n(()=>e("div",{class:"nav-item flex-col m-t-10"},[e("view",{class:"flex flex-center"},[e("img",{style:{width:"48px",height:"48px"},src:p})]),e("div",{class:"m-t-8 normal text-center"},"\u5DE5\u4F5C\u53F0")],-1)),Y=n(()=>e("div",{class:"nav-item flex-col m-t-10"},[e("view",{class:"flex flex-center"},[e("img",{style:{width:"48px",height:"48px"},src:p})]),e("div",{class:"m-t-8 normal text-center"},"\u7F51\u7AD9\u4FE1\u606F")],-1)),Z=n(()=>e("div",{class:"nav-item flex-col m-t-10"},[e("view",{class:"flex flex-center"},[e("img",{style:{width:"48px",height:"48px"},src:p})]),e("div",{class:"m-t-8 normal text-center"},"\u7CFB\u7EDF\u73AF\u5883")],-1)),ee={class:"flex m-t-15 ranking"},te=n(()=>e("span",{class:"card-title"},"\u8BBF\u95EE\u91CF\u8D8B\u52BF\u56FE",-1)),se={class:"ranking-centent"},oe=n(()=>e("div",null,[e("span",{class:"card-title"},"\u6587\u7AE0\u9605\u8BFB\u91CF\u6392\u540D")],-1)),ae={class:"ranking-centent"},ie={key:0,class:"icon",style:{background:"#f86056",color:"#fff"}},ne={key:1,class:"icon",style:{background:"#fc8d2e",color:"#fff"}},ce={key:2,class:"icon",style:{background:"#fcbc2e",color:"#fff"}},le={key:3,class:"icon"};function de(t,v,i,_,re,ue){const l=d("el-card"),f=d("router-link"),F=d("v-chart"),m=d("el-table-column"),x=d("el-table");return u(),r("div",C,[e("div",$,[o(l,{class:"flex-1",shadow:"never"},{header:s(()=>[S]),default:s(()=>[e("div",null,[e("div",O,"\u7248\u672C\u53F7\uFF1A"+a(t.workbenchData.version.version),1),e("div",null,"\u5B98\u7F51\u540D\u79F0\uFF1A"+a(t.workbenchData.version.website),1)])]),_:1}),o(l,{class:"flex-3 m-l-15",shadow:"never"},{header:s(()=>[e("div",null,[V,e("span",I,"\u66F4\u65B0\u65F6\u95F4\uFF1A"+a(t.workbenchData.today.time),1)])]),default:s(()=>[e("div",N,[e("div",U,[W,e("div",q,a(t.workbenchData.today.todayVisits),1),e("div",z,"\u603B\u8BBF\u95EE\u91CF\uFF1A"+a(t.workbenchData.today.totalVisits),1)]),e("div",M,[j,e("div",G,a(t.workbenchData.today.todaySales),1),e("div",H,"\u603B\u9500\u552E\u989D\uFF1A"+a(t.workbenchData.today.totalSales),1)]),e("div",J,[K,e("div",L,a(t.workbenchData.today.todayUsers),1),e("div",P,"\u603B\u8BBF\u7528\u6237\uFF1A"+a(t.workbenchData.today.totalUsers),1)])])]),_:1})]),e("div",Q,[o(l,{class:"flex-1",shadow:"never"},{header:s(()=>[R]),default:s(()=>[e("div",T,[o(f,{to:""},{default:s(()=>[X]),_:1}),o(f,{to:"/setting/website/information"},{default:s(()=>[Y]),_:1}),o(f,{to:"/setting/website/environment"},{default:s(()=>[Z]),_:1})])]),_:1})]),e("div",ee,[o(l,{class:"flex-1",shadow:"never"},{header:s(()=>[te]),default:s(()=>[e("div",se,[o(F,{class:"chart",option:t.workbenchData.visitorOption},null,8,["option"])])]),_:1}),o(l,{class:"flex-1 m-l-15",shadow:"never"},{header:s(()=>[oe]),default:s(()=>[e("div",ae,[o(x,{data:t.workbenchData.article,size:"medium"},{default:s(()=>[o(m,{label:"\u6392\u540D","min-width":"70",type:"index"},{default:s(c=>[c.$index==0?(u(),r("div",ie,a(c.$index+1),1)):h("",!0),c.$index==1?(u(),r("div",ne,a(c.$index+1),1)):h("",!0),c.$index==2?(u(),r("div",ce,a(c.$index+1),1)):h("",!0),c.$index>2?(u(),r("div",le,a(c.$index+1),1)):h("",!0)]),_:1}),o(m,{prop:"title",label:"\u6587\u7AE0\u540D\u79F0"}),o(m,{prop:"visit",label:"\u9605\u8BFB\u91CF"})]),_:1},8,["data"])])]),_:1})])])}var ve=y(A,[["render",de],["__scopeId","data-v-696ed410"]]);export{ve as default};
