import{k as je,b as Ne,S as We,G as Ge,p as Ye,q as qe,r as Ke,T as Qe,E as Ze,Q as Je,R as Oe,B as Xe,J as He,U as et,K as tt,L as lt,w as nt,C as at,a as st}from"./element-plus.b75f72d9.js";import{u as ot,_ as it}from"./usePaging.0756ad8e.js";import{_ as ut}from"./index.7b162499.js";import{r as L,f as Ae,d as xe,b as Se,h as dt}from"./index.fa242f7a.js";import{P as ct}from"./index.5687755f.js";import{U as rt}from"./index.80994366.js";import{_ as mt}from"./index.vue_vue_type_script_setup_true_lang.f20a4aac.js";import{s as J,r as R,a0 as De,d as O,o as s,c as u,a as o,L as w,S as _,V as n,I as ft,$ as Ve,J as _t,u as e,e as Be,w as Z,O as b,P as de,M as a,k as j,n as we,a4 as pt,j as vt,_ as K,W as P,a8 as Q,aa as ht,Q as Fe,T as p,U as ie,C as gt,ag as yt,b9 as Ct,b8 as bt}from"./@vue.cab01781.js";import{g as kt}from"./vue3-video-play.05975c53.js";const Et="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAgCAYAAABgrToAAAACJElEQVRYR+2YMWsUURSFz3m7s+nskjUIQSutbMRi7WzUVjSadMHCbVLkByjmLygaCVYWRqMEUhkFS9Gg0cJfYCPZjYUQFbPs+I7c2R1Q2ZjZfRNYYS4MAzPv3vnmvDvL3kMA2Hl5/CjLI9ckf4ZwY3Zt15C+gfwIao3So0rt3XsJtPUk9M/cAW6y9ap2DIyfAjgCwANwGeoYiEFtk/5e5CvXeer1D2neATcGgiTZM4+t9RNLEKcBtAFEGeBsiRWzl7EoSXo+8rV9gWc/fDc1B1VSEoEnDpj0KTB33tS26DGaEezvZQZpRxmODyoT5+vwBwS3zeTcT4yjTdZNJEiPSykk1bjZX6HeD/WQJ1zUApgq2w+etcsniBuAVlH9vELOx6Yo1VywgkmTB4X1kEGGhyAtg/Ecq3NNqnknDwVTrNBaactEts88OHs5b8Bw/Tof4M+kr4WrwwhoL9n5uRPWhxWwsxPEl+EGNMacP5I8evCPGgVgqKSFgoWCoQqE5hc9WCgYqkBoftGDeSiYz1/+UJLe+foftvh2A2B1fwQIrapkaFoDcK4PVyH0qVnyU4fjGdW4NQ2WlgDE5hLkMoJmQdh9zW9Dk59K5lhtLjyE01TX/jDILP5MGEbvbFPOJroIXvc5PjvTBbx7GM4vAjjd9WdSc2g/IPaqaTv5Aq58haP1TSb2Au20GGErvgTxIqiTAA7tVSnn+2Z9vAXdCsa4bD6Nsf0C/gYA5PMzcW0AAAAASUVORK5CYII=";function wt(l){return L.post({url:"/albums/cateAdd",params:l})}function Ft(l){return L.post({url:"/albums/cateRename",params:l})}function At(l){return L.post({url:"/albums/cateDel",params:l})}function xt(l){return L.get({url:"/albums/cateList",params:l})}function St(l){return L.get({url:"/albums/albumList",params:l})}function Dt(l){return L.post({url:"/albums/albumDel",params:l})}function Vt(l){return L.post({url:"/albums/albumMove",params:l})}function Bt(l){return L.post({url:"/albums/albumRename",params:l})}function Rt(l){const S=J(),k=R([]),r=R(""),v=async()=>{const f=await xt({type:l}),y=[{name:"\u5168\u90E8",id:""},{name:"\u672A\u5206\u7EC4",id:0}];k.value=f,k.value.unshift(...y),setTimeout(()=>{var m;(m=S.value)==null||m.setCurrentKey(r.value)},0)};return{treeRef:S,cateId:r,cateLists:k,handleAddCate:async f=>{await wt({type:l,name:f,pid:0}),v()},handleEditCate:async(f,y)=>{await Ft({id:y,name:f}),v()},handleDeleteCate:async f=>{await Ae.confirm("\u786E\u5B9A\u8981\u5220\u9664\uFF1F"),await At({id:f}),r.value="",v()},getCateLists:v,handleCatSelect:f=>{r.value=f.id}}}function zt(l,S,k,r){const v=J(),V=R("normal"),E=R(0),i=R([]),g=R(!1),f=R(!1),y=De({name:"",type:S,cid:l}),{pager:m,getLists:M,resetPage:H}=ot({fetchFun:St,params:y,firstLoading:!0,size:r}),U=()=>{M()},ee=()=>{H()},te=d=>!!i.value.find(h=>h.id==d),le=async d=>{await Ae.confirm("\u786E\u8BA4\u5220\u9664\u540E\uFF0C\u672C\u5730\u6216\u4E91\u5B58\u50A8\u6587\u4EF6\u4E5F\u5C06\u540C\u6B65\u5220\u9664\uFF0C\u5982\u6587\u4EF6\u5DF2\u88AB\u4F7F\u7528\uFF0C\u8BF7\u8C28\u614E\u64CD\u4F5C\uFF01");const h=d||i.value.map(I=>I.id);await Dt({ids:h}),U(),C()},T=async()=>{const d=i.value.map(h=>h.id);await Vt({ids:d,cid:E.value}),E.value=0,U(),C()},$=d=>{const h=i.value.findIndex(I=>I.id==d.id);if(h!=-1){i.value.splice(h,1);return}if(i.value.length==k.value){if(k.value==1){i.value=[],i.value.push(d);return}je.warning("\u5DF2\u8FBE\u5230\u9009\u62E9\u4E0A\u9650");return}i.value.push(d)},C=()=>{i.value=[]};return{listShowType:V,tableRef:v,moveId:E,pager:m,fileParams:y,select:i,isCheckAll:g,isIndeterminate:f,getFileList:U,refresh:ee,batchFileDelete:le,batchFileMove:T,selectFile:$,isSelect:te,clearSelect:C,cancelSelete:d=>{i.value=i.value.filter(h=>h.id!=d)},selectAll:d=>{var h;if(f.value=!1,(h=v.value)==null||h.toggleAllSelection(),d){i.value=[...m.lists];return}C()},handleFileRename:async(d,h)=>{await Bt({id:h,name:d}),U()}}}const It=O({props:{uri:{type:String},fileSize:{type:String,default:"100px"},type:{type:String,default:"image"}},emits:["close"]});const Tt=["src"],$t={key:2,class:"absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] rounded-full w-5 h-5 flex justify-center items-center bg-[rgba(0,0,0,0.3)]"};function Lt(l,S,k,r,v,V){const E=Ne,i=Se;return s(),u("div",null,[o("div",{class:"file-item relative",style:Ve({height:l.fileSize,width:l.fileSize})},[l.type=="image"?(s(),w(E,{key:0,class:"image",fit:"contain",src:l.uri},null,8,["src"])):l.type=="video"?(s(),u("video",{key:1,class:"video",src:l.uri},null,8,Tt)):_("",!0),l.type=="video"?(s(),u("div",$t,[n(i,{name:"el-icon-CaretRight",size:18,color:"#fff"})])):_("",!0),ft(l.$slots,"default",{},void 0,!0)],4)])}const ue=xe(It,[["render",Lt],["__scopeId","data-v-ec4ebd66"]]),Pt=O({__name:"index",props:{src:{type:String,required:!0},width:String,height:String,poster:String},setup(l,{expose:S}){const k=l,r=J(),v=De({color:"var(--el-color-primary)",muted:!1,webFullScreen:!1,speedRate:["0.75","1.0","1.25","1.5","2.0"],autoPlay:!0,loop:!1,mirror:!1,ligthOff:!1,volume:.3,control:!0,title:"",poster:"",...k}),V=()=>{r.value.play()},E=()=>{r.value.pause()},i=m=>{console.log(m,"\u64AD\u653E")},g=m=>{console.log(m,"\u6682\u505C")},f=m=>{console.log(m,"\u65F6\u95F4\u66F4\u65B0")},y=m=>{console.log(m,"\u53EF\u4EE5\u64AD\u653E")};return S({play:V,pause:E}),(m,M)=>(s(),u("div",null,[n(e(kt),_t({ref_key:"playerRef",ref:r},v,{src:l.src,onPlay:i,onPause:g,onTimeupdate:f,onCanplay:y}),null,16,["src"])]))}}),Mt={key:0},Ut={key:1},jt=O({__name:"preview",props:{modelValue:{type:Boolean,default:!1},url:{type:String,default:""},type:{type:String,default:"image"}},emits:["update:modelValue"],setup(l,{emit:S}){const k=l,r=J(),v=Be({get(){return k.modelValue},set(i){S("update:modelValue",i)}}),V=()=>{S("update:modelValue",!1)},E=R([]);return Z(()=>k.modelValue,i=>{i?we(()=>{var g;E.value=[k.url],(g=r.value)==null||g.play()}):we(()=>{var g;E.value=[],(g=r.value)==null||g.pause()})}),(i,g)=>{const f=We,y=Pt,m=Ge;return b((s(),u("div",null,[l.type=="image"?(s(),u("div",Mt,[E.value.length?(s(),w(f,{key:0,"url-list":E.value,"hide-on-click-modal":"",onClose:V},null,8,["url-list"])):_("",!0)])):_("",!0),l.type=="video"?(s(),u("div",Ut,[n(m,{modelValue:e(v),"onUpdate:modelValue":g[0]||(g[0]=M=>j(v)?v.value=M:null),width:"740px",title:"\u89C6\u9891\u9884\u89C8","before-close":V},{default:a(()=>[n(y,{ref_key:"playerRef",ref:r,src:l.url,width:"100%",height:"450px"},null,8,["src"])]),_:1},8,["modelValue"])])):_("",!0)],512)),[[de,l.modelValue]])}}}),X=l=>(Ct("data-v-4de1fde7"),l=l(),bt(),l),Nt={class:"material"},Wt={class:"material__left"},Gt={class:"flex-1 min-h-0"},Yt={class:"material-left__content pt-4 p-b-4"},qt={class:"flex flex-1 items-center min-w-0 pr-4"},Kt=X(()=>o("img",{class:"w-[20px] h-[16px] mr-3",src:Et},null,-1)),Qt={class:"flex-1 truncate mr-2"},Zt=X(()=>o("span",{class:"muted m-r-10"},"\xB7\xB7\xB7",-1)),Jt=p(" \u547D\u540D\u5206\u7EC4 "),Ot=["onClick"],Xt=p("\u5220\u9664\u5206\u7EC4"),Ht={class:"flex justify-center p-2 border-t border-br"},el=p(" \u6DFB\u52A0\u5206\u7EC4 "),tl={class:"material__center flex flex-col"},ll={class:"operate-btn flex"},nl={class:"flex-1 flex"},al=p("\u672C\u5730\u4E0A\u4F20"),sl=p("\u672C\u5730\u4E0A\u4F20"),ol=p(" \u5220\u9664 "),il=p("\u79FB\u52A8"),ul=X(()=>o("span",{class:"mr-5"},"\u79FB\u52A8\u6587\u4EF6\u81F3",-1)),dl={class:"flex items-center ml-2"},cl={key:0,class:"mt-3"},rl=p(" \u5F53\u9875\u5168\u9009 "),ml={class:"material-center__content flex flex-col flex-1 mb-1 min-h-0"},fl={class:"file-list flex flex-wrap mt-4"},_l={key:0,class:"item-selected"},pl={class:"operation-btns flex items-center"},vl=p(" \u91CD\u547D\u540D "),hl=p(" \u67E5\u770B "),gl={class:"inline-block"},yl=p(" \u91CD\u547D\u540D "),Cl={class:"inline-block"},bl=p(" \u67E5\u770B "),kl={class:"inline-block"},El=p(" \u5220\u9664 "),wl={key:1,class:"flex flex-1 justify-center items-center"},Fl={class:"material-center__footer flex justify-between items-center mt-2"},Al={class:"flex"},xl={class:"mr-3"},Sl=p(" \u5F53\u9875\u5168\u9009 "),Dl=p(" \u5220\u9664 "),Vl=p("\u79FB\u52A8"),Bl=X(()=>o("span",{class:"mr-5"},"\u79FB\u52A8\u6587\u4EF6\u81F3",-1)),Rl={key:0,class:"material__right"},zl={class:"flex justify-between p-2 flex-wrap"},Il={class:"sm flex items-center"},Tl={key:0},$l=p("\u6E05\u7A7A"),Ll={class:"flex-1 min-h-0"},Pl={class:"select-lists flex flex-col p-t-3"},Ml={class:"select-item"},Ul=O({__name:"index",props:{fileSize:{type:String,default:"100px"},limit:{type:Number,default:1},type:{type:String,default:"image"},mode:{type:String,default:"picker"},pageSize:{type:Number,default:15}},emits:["change"],setup(l,{expose:S,emit:k}){const r=l,{limit:v}=pt(r),V=Be(()=>{switch(r.type){case"image":return 10;case"video":return 20;case"file":return 30;default:return 0}}),E=gt("visible"),i=R(""),g=R(!1),{treeRef:f,cateId:y,cateLists:m,handleAddCate:M,handleEditCate:H,handleDeleteCate:U,getCateLists:ee,handleCatSelect:te}=Rt(V.value),{tableRef:le,listShowType:T,moveId:$,pager:C,fileParams:W,select:B,isCheckAll:z,isIndeterminate:d,getFileList:h,refresh:I,batchFileDelete:G,batchFileMove:ce,selectFile:ne,isSelect:re,clearSelect:me,cancelSelete:Re,selectAll:fe,handleFileRename:_e}=zt(y,V,v,r.pageSize),pe=async()=>{var D;await ee(),(D=f.value)==null||D.setCurrentKey(y.value),h()},ae=D=>{i.value=D,g.value=!0};return Z(E,async D=>{D&&pe()},{immediate:!0}),Z(y,()=>{W.name="",I()}),Z(B,D=>{if(k("change",D),D.length==C.lists.length&&D.length!==0){d.value=!1,z.value=!0;return}D.length>0?d.value=!0:(z.value=!1,d.value=!1)},{deep:!0}),vt(()=>{r.mode=="page"&&pe()}),S({clearSelect:me}),(D,c)=>{const ve=dt,he=Ye,Y=mt,ze=qe,Ie=Ke,Te=Qe,se=Ze,F=nt,ge=rt,ye=Je,Ce=Oe,be=ct,q=Se,$e=at,ke=st,oe=Xe,Ee=ut,N=He,Le=et,Pe=tt,Me=it,x=yt("perms"),Ue=lt;return b((s(),u("div",Nt,[o("div",Wt,[o("div",Gt,[n(se,null,{default:a(()=>[o("div",Yt,[n(Te,{ref_key:"treeRef",ref:f,"node-key":"id",data:e(m),"empty-text":"''","highlight-current":!0,"expand-on-click-node":!1,"current-node-key":e(y),onNodeClick:e(te)},{default:a(({data:t})=>[o("div",qt,[Kt,o("span",Qt,[n(ve,{content:t.name},null,8,["content"])]),t.id>0?b((s(),w(Ie,{key:0,"hide-on-click":!1},{dropdown:a(()=>[n(ze,null,{default:a(()=>[b((s(),w(Y,{onConfirm:A=>e(H)(A,t.id),size:"default",value:t.name,width:"400px",limit:20,"show-limit":"",teleported:""},{default:a(()=>[o("div",null,[n(he,null,{default:a(()=>[Jt]),_:1})])]),_:2},1032,["onConfirm","value"])),[[x,["albums:cateRename"]]]),b((s(),u("div",{onClick:A=>e(U)(t.id)},[n(he,null,{default:a(()=>[Xt]),_:1})],8,Ot)),[[x,["albums:cateDel"]]])]),_:2},1024)]),default:a(()=>[Zt]),_:2},1024)),[[x,["albums:cateRename","albums:cateDel"]]]):_("",!0)])]),_:1},8,["data","current-node-key","onNodeClick"])])]),_:1})]),o("div",Ht,[b((s(),w(Y,{onConfirm:e(M),size:"default",width:"400px",limit:20,"show-limit":"",teleported:""},{default:a(()=>[n(F,null,{default:a(()=>[el]),_:1})]),_:1},8,["onConfirm"])),[[x,["albums:cateAdd"]]])])]),o("div",tl,[o("div",ll,[o("div",nl,[l.type=="image"?b((s(),w(ge,{key:0,class:"mr-3",data:{cid:e(y)},type:l.type,"show-progress":!0,onChange:e(I)},{default:a(()=>[n(F,{type:"primary"},{default:a(()=>[al]),_:1})]),_:1},8,["data","type","onChange"])),[[x,["upload:image"]]]):_("",!0),l.type=="video"?b((s(),w(ge,{key:1,class:"mr-3",data:{cid:e(y)},type:l.type,"show-progress":!0,onChange:e(I)},{default:a(()=>[n(F,{type:"primary"},{default:a(()=>[sl]),_:1})]),_:1},8,["data","type","onChange"])),[[x,["upload:video"]]]):_("",!0),l.mode=="page"?b((s(),w(F,{key:2,disabled:!e(B).length,onClick:c[0]||(c[0]=K(t=>e(G)(),["stop"]))},{default:a(()=>[ol]),_:1},8,["disabled"])),[[x,["albums:albumDel"]]]):_("",!0),l.mode=="page"?b((s(),w(be,{key:3,class:"ml-3",onConfirm:e(ce),disabled:!e(B).length,title:"\u79FB\u52A8\u6587\u4EF6"},{trigger:a(()=>[n(F,{disabled:!e(B).length},{default:a(()=>[il]),_:1},8,["disabled"])]),default:a(()=>[o("div",null,[ul,n(Ce,{modelValue:e($),"onUpdate:modelValue":c[1]||(c[1]=t=>j($)?$.value=t:null),placeholder:"\u8BF7\u9009\u62E9"},{default:a(()=>[(s(!0),u(P,null,Q(e(m),t=>(s(),u(P,{key:t.id},[t.id!==""?(s(),w(ye,{key:0,label:t.name,value:t.id},null,8,["label","value"])):_("",!0)],64))),128))]),_:1},8,["modelValue"])])]),_:1},8,["onConfirm","disabled"])),[[x,["albums:albumMove"]]]):_("",!0)]),n($e,{class:"w-60",placeholder:"\u8BF7\u8F93\u5165\u540D\u79F0",modelValue:e(W).name,"onUpdate:modelValue":c[2]||(c[2]=t=>e(W).name=t),onKeyup:ht(e(I),["enter"])},{append:a(()=>[n(F,{onClick:e(I)},{icon:a(()=>[n(q,{name:"el-icon-Search"})]),_:1},8,["onClick"])]),_:1},8,["modelValue","onKeyup"]),o("div",dl,[n(ke,{content:"\u5217\u8868\u89C6\u56FE",placement:"top"},{default:a(()=>[o("div",{class:Fe(["list-icon",{select:e(T)=="table"}]),onClick:c[3]||(c[3]=t=>T.value="table")},[n(q,{name:"local-icon-list-2",size:18})],2)]),_:1}),n(ke,{content:"\u5E73\u94FA\u89C6\u56FE",placement:"top"},{default:a(()=>[o("div",{class:Fe(["list-icon",{select:e(T)=="normal"}]),onClick:c[4]||(c[4]=t=>T.value="normal")},[n(q,{name:"el-icon-Menu",size:18})],2)]),_:1})])]),l.mode=="page"?(s(),u("div",cl,[n(oe,{disabled:!e(C).lists.length,modelValue:e(z),"onUpdate:modelValue":c[5]||(c[5]=t=>j(z)?z.value=t:null),onChange:e(fe),indeterminate:e(d)},{default:a(()=>[rl]),_:1},8,["disabled","modelValue","onChange","indeterminate"])])):_("",!0),o("div",ml,[e(C).lists.length?b((s(),w(se,{key:0},{default:a(()=>[o("ul",fl,[(s(!0),u(P,null,Q(e(C).lists,t=>(s(),u("li",{class:"file-item-wrap",key:t.id,style:Ve({width:l.fileSize})},[n(Ee,{onClose:A=>e(G)([t.id])},{default:a(()=>[n(ue,{uri:t.uri,"file-size":l.fileSize,type:l.type,onClick:A=>e(ne)(t)},{default:a(()=>[e(re)(t.id)?(s(),u("div",_l,[n(q,{size:24,name:"el-icon-Check",color:"#fff"})])):_("",!0)]),_:2},1032,["uri","file-size","type","onClick"])]),_:2},1032,["onClose"]),n(ve,{class:"mt-1",content:t.name},null,8,["content"]),o("div",pl,[b((s(),w(Y,{onConfirm:A=>e(_e)(A,t.id),size:"default",value:t.name,width:"400px",limit:50,"show-limit":"",teleported:""},{default:a(()=>[n(F,{type:"primary",link:""},{default:a(()=>[vl]),_:1})]),_:2},1032,["onConfirm","value"])),[[x,["albums:albumRename"]]]),n(F,{type:"primary",link:"",onClick:A=>ae(t.uri)},{default:a(()=>[hl]),_:2},1032,["onClick"])])],4))),128))])]),_:1},512)),[[de,e(T)=="normal"]]):_("",!0),b(n(Pe,{ref_key:"tableRef",ref:le,class:"mt-4",data:e(C).lists,width:"100%",height:"100%",size:"large",onRowClick:e(ne)},{default:a(()=>[n(N,{width:"55"},{default:a(({row:t})=>[n(oe,{modelValue:e(re)(t.id),onChange:A=>e(ne)(t)},null,8,["modelValue","onChange"])]),_:1}),n(N,{label:"\u56FE\u7247",width:"100"},{default:a(({row:t})=>[n(ue,{uri:t.uri,"file-size":"50px",type:l.type},null,8,["uri","type"])]),_:1}),n(N,{label:"\u540D\u79F0","min-width":"100","show-overflow-tooltip":""},{default:a(({row:t})=>[n(Le,{onClick:K(A=>ae(t.uri),["stop"]),underline:!1},{default:a(()=>[p(ie(t.name),1)]),_:2},1032,["onClick"])]),_:1}),n(N,{prop:"createTime",label:"\u4E0A\u4F20\u65F6\u95F4","min-width":"100"}),n(N,{label:"\u64CD\u4F5C",width:"150",fixed:"right"},{default:a(({row:t})=>[b((s(),u("div",gl,[n(Y,{onConfirm:A=>e(_e)(A,t.id),size:"default",value:t.name,width:"400px",limit:50,"show-limit":"",teleported:""},{default:a(()=>[n(F,{type:"primary",link:""},{default:a(()=>[yl]),_:1})]),_:2},1032,["onConfirm","value"])])),[[x,["albums:albumRename"]]]),o("div",Cl,[n(F,{type:"primary",link:"",onClick:K(A=>ae(t.uri),["stop"])},{default:a(()=>[bl]),_:2},1032,["onClick"])]),b((s(),u("div",kl,[n(F,{type:"primary",link:"",onClick:K(A=>e(G)([t.id]),["stop"])},{default:a(()=>[El]),_:2},1032,["onClick"])])),[[x,["albums:albumDel"]]])]),_:1})]),_:1},8,["data","onRowClick"]),[[de,e(T)=="table"]]),!e(C).loading&&!e(C).lists.length?(s(),u("div",wl," \u6682\u65E0\u6570\u636E~ ")):_("",!0)]),o("div",Fl,[o("div",Al,[l.mode=="page"?(s(),u(P,{key:0},[o("span",xl,[n(oe,{disabled:!e(C).lists.length,modelValue:e(z),"onUpdate:modelValue":c[6]||(c[6]=t=>j(z)?z.value=t:null),onChange:e(fe),indeterminate:e(d)},{default:a(()=>[Sl]),_:1},8,["disabled","modelValue","onChange","indeterminate"])]),b((s(),w(F,{disabled:!e(B).length,onClick:c[7]||(c[7]=t=>e(G)())},{default:a(()=>[Dl]),_:1},8,["disabled"])),[[x,["albums:albumDel"]]]),b((s(),w(be,{class:"ml-3 inline",onConfirm:e(ce),disabled:!e(B).length,title:"\u79FB\u52A8\u6587\u4EF6"},{trigger:a(()=>[n(F,{disabled:!e(B).length},{default:a(()=>[Vl]),_:1},8,["disabled"])]),default:a(()=>[o("div",null,[Bl,n(Ce,{modelValue:e($),"onUpdate:modelValue":c[8]||(c[8]=t=>j($)?$.value=t:null),placeholder:"\u8BF7\u9009\u62E9"},{default:a(()=>[(s(!0),u(P,null,Q(e(m),t=>(s(),u(P,{key:t.id},[t.id!==""?(s(),w(ye,{key:0,label:t.name,value:t.id},null,8,["label","value"])):_("",!0)],64))),128))]),_:1},8,["modelValue"])])]),_:1},8,["onConfirm","disabled"])),[[x,["albums:albumMove"]]])],64)):_("",!0)]),n(Me,{modelValue:e(C),"onUpdate:modelValue":c[9]||(c[9]=t=>j(C)?C.value=t:null),onChange:e(h),layout:"total, prev, pager, next, jumper"},null,8,["modelValue","onChange"])])]),l.mode=="picker"?(s(),u("div",Rl,[o("div",zl,[o("div",Il,[p(" \u5DF2\u9009\u62E9 "+ie(e(B).length)+" ",1),e(v)?(s(),u("span",Tl,"/"+ie(e(v)),1)):_("",!0)]),n(F,{type:"primary",link:"",onClick:e(me)},{default:a(()=>[$l]),_:1},8,["onClick"])]),o("div",Ll,[n(se,{class:"ls-scrollbar"},{default:a(()=>[o("ul",Pl,[(s(!0),u(P,null,Q(e(B),t=>(s(),u("li",{class:"mb-4",key:t.id},[o("div",Ml,[n(Ee,{onClose:A=>e(Re)(t.id)},{default:a(()=>[n(ue,{uri:t.uri,"file-size":"100px",type:l.type},null,8,["uri","type"])]),_:2},1032,["onClose"])])]))),128))])]),_:1})])])):_("",!0),n(jt,{modelValue:g.value,"onUpdate:modelValue":c[10]||(c[10]=t=>g.value=t),url:i.value,type:l.type},null,8,["modelValue","url","type"])])),[[Ue,e(C).loading]])}}});const Jl=xe(Ul,[["__scopeId","data-v-4de1fde7"]]);export{ue as F,Jl as _,jt as a};
