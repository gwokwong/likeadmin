import{r as e,a as t,o as a,c as s,w as l,x as o,b as u,l as r,t as i,h as n,e as c,f as d,v as p,s as f,F as m,y as h,k as b,d as _,u as x,a8 as g,A as y,z as v,ah as w,aa as k,W as C,a1 as V,az as S,ao as j,g as I,H as z,aA as B,i as A,aj as $,ad as R}from"./index.2197fbbc.js";import{_ as T}from"./u-avatar.b983d698.js";import{_ as U}from"./u-icon.da63fc7c.js";import{_ as F}from"./u-button.3c5095f3.js";import{_ as N}from"./u-popup.2c333dcd.js";import{_ as E}from"./plugin-vue_export-helper.21dcd24c.js";import{u as W}from"./useLockFn.7888ab53.js";var P=E({name:"u-action-sheet",emits:["update:modelValue","input","click","close"],props:{value:{type:Boolean,default:!1},modelValue:{type:Boolean,default:!1},maskCloseAble:{type:Boolean,default:!0},list:{type:Array,default:()=>[]},tips:{type:Object,default:()=>({text:"",color:"",fontSize:"26"})},cancelBtn:{type:Boolean,default:!0},safeAreaInsetBottom:{type:Boolean,default:!1},borderRadius:{type:[String,Number],default:0},zIndex:{type:[String,Number],default:0},cancelText:{type:String,default:"取消"},labelName:{type:String,default:"text"},blur:{type:[Number,String],default:0}},computed:{valueCom(){return this.modelValue},tipsStyle(){let e={};return this.tips.color&&(e.color=this.tips.color),this.tips.fontSize&&(e.fontSize=this.tips.fontSize+"rpx"),e},itemStyle(){return e=>{let t={};return this.list[e].color&&(t.color=this.list[e].color),this.list[e].fontSize&&(t.fontSize=this.list[e].fontSize+"rpx"),this.list[e].disabled&&(t.color="#c0c4cc"),t}},uZIndex(){return this.zIndex?this.zIndex:this.$u.zIndex.popup}},data:()=>({popupValue:!1}),watch:{valueCom(e,t){this.popupValue=e}},methods:{close(){this.popupClose(),this.$emit("close")},popupClose(){this.$emit("input",!1),this.$emit("update:modelValue",!1)},itemClick(e){this.list[e].disabled||(this.$emit("click",e),this.$emit("input",!1),this.$emit("update:modelValue",!1))}}},[["render",function(_,x,g,y,v,w){const k=h,C=b,V=e(t("u-popup"),N);return a(),s(V,{blur:g.blur,mode:"bottom","border-radius":g.borderRadius,popup:!1,modelValue:v.popupValue,"onUpdate:modelValue":x[2]||(x[2]=e=>v.popupValue=e),maskCloseAble:g.maskCloseAble,length:"auto",safeAreaInsetBottom:g.safeAreaInsetBottom,onClose:w.popupClose,"z-index":w.uZIndex},{default:l((()=>[g.tips.text?(a(),s(C,{key:0,class:"u-tips u-border-bottom",style:o([w.tipsStyle])},{default:l((()=>[u(k,null,{default:l((()=>[r(i(g.tips.text),1)])),_:1})])),_:1},8,["style"])):n("v-if",!0),(a(!0),c(m,null,d(g.list,((e,t)=>(a(),s(C,{key:t,onTouchmove:x[0]||(x[0]=p((()=>{}),["stop","prevent"])),onClick:e=>w.itemClick(t),style:o([w.itemStyle(t)]),class:f(["u-action-sheet-item u-line-1",[t<g.list.length-1?"u-border-bottom":""]]),"hover-stay-time":150},{default:l((()=>[u(k,null,{default:l((()=>[r(i(e[g.labelName]),1)])),_:2},1024),e.subText?(a(),s(k,{key:0,class:"u-action-sheet-item__subtext u-line-1"},{default:l((()=>[r(i(e.subText),1)])),_:2},1024)):n("v-if",!0)])),_:2},1032,["onClick","style","class"])))),128)),g.cancelBtn?(a(),s(C,{key:1,class:"u-gab"})):n("v-if",!0),g.cancelBtn?(a(),s(C,{key:2,onTouchmove:x[1]||(x[1]=p((()=>{}),["stop","prevent"])),class:"u-actionsheet-cancel u-action-sheet-item","hover-class":"u-hover-class","hover-stay-time":150,onClick:w.close},{default:l((()=>[r(i(g.cancelText),1)])),_:1},8,["onClick"])):n("v-if",!0)])),_:1},8,["blur","border-radius","modelValue","maskCloseAble","safeAreaInsetBottom","onClose","z-index"])}],["__scopeId","data-v-72a4be36"]]),Y=(e=>(e.PRIVACY="privacy",e.SERVICE="service",e))(Y||{});var Z=E(_({__name:"user_set",setup(o){const c=x(),d=g(),p=y((()=>d.userInfo)),f=v([{text:"修改密码"},{text:"忘记密码"}]),m=v(!0);m.value=w();const h=v(!1),_=e=>{switch(e){case 0:z({url:"/pages/change_password/change_password"});break;case 1:z({url:"/pages/forget_pwd/forget_pwd"})}},N=()=>{if(!p.value.hasPwd)return z({url:"/pages/change_password/change_password?type=set"});h.value=!0},E=()=>{B({content:"是否退出登录？",confirmColor:"#4173FF",success:({cancel:e})=>{e||(d.logout(),j({url:"/pages/login/login"}))}})},{lockFn:Z}=W((async()=>{if(!p.value.isBindWechat)try{V({title:"请稍后..."}),m.value&&$.getUrl(),await d.getUser(),R()}catch(e){R(),uni.$u.toast(e)}}));return k((()=>{d.getUser()})),C((async e=>{const{code:t}=e;if(m.value&&t){V({title:"请稍后..."});try{await S({code:t}),uni.$u.toast("绑定成功"),await d.getUser()}catch(a){}j({url:"/pages/user_set/user_set"})}})),(o,d)=>{const x=e(t("u-avatar"),T),g=b,y=e(t("u-icon"),U),v=A,w=e(t("u-button"),F),k=e(t("u-action-sheet"),P);return a(),s(g,{class:"user-set"},{default:l((()=>[u(v,{url:"/pages/user_data/user_data"},{default:l((()=>[u(g,{class:"item flex bg-white mt-[20rpx]"},{default:l((()=>[u(x,{src:I(p).avatar,shape:"square",size:100},null,8,["src"]),u(g,{class:"ml-[20rpx] flex flex-1 justify-between items-center"},{default:l((()=>[u(g,null,{default:l((()=>[u(g,{class:"mb-[15rpx] text-xl font-medium"},{default:l((()=>[r(i(I(p).nickname),1)])),_:1}),u(g,{class:"text-content text-xs"},{default:l((()=>[r("账号："+i(I(p).username),1)])),_:1})])),_:1}),u(y,{name:"arrow-right",color:"#666"})])),_:1})])),_:1})])),_:1}),u(g,{class:"item bg-white mt-[20rpx] btn-border flex flex-1 justify-between",onClick:N},{default:l((()=>[u(g,{class:""},{default:l((()=>[r("登录密码")])),_:1}),u(y,{name:"arrow-right",color:"#666"})])),_:1}),m.value?(a(),s(g,{key:0,class:"item bg-white flex flex-1 justify-between",onClick:I(Z)},{default:l((()=>[u(g,{class:""},{default:l((()=>[r("绑定微信")])),_:1}),u(g,{class:"flex justify-between"},{default:l((()=>[u(g,{class:"text-muted mr-[20rpx]"},{default:l((()=>[r(i(I(p).isBindWechat?"已绑定":"未绑定"),1)])),_:1}),0==I(p).isBindWechat?(a(),s(y,{key:0,name:"arrow-right",color:"#666"})):n("v-if",!0)])),_:1})])),_:1},8,["onClick"])):n("v-if",!0),u(v,{url:`/pages/agreement/agreement?type=${I(Y).PRIVACY}`},{default:l((()=>[u(g,{class:"item bg-white mt-[20rpx] btn-border flex flex-1 justify-between"},{default:l((()=>[u(g,{class:""},{default:l((()=>[r("隐私政策")])),_:1}),u(y,{name:"arrow-right",color:"#666"})])),_:1})])),_:1},8,["url"]),u(v,{url:`/pages/agreement/agreement?type=${I(Y).SERVICE}`},{default:l((()=>[u(g,{class:"item bg-white btn-border flex flex-1 justify-between"},{default:l((()=>[u(g,{class:""},{default:l((()=>[r("服务协议")])),_:1}),u(y,{name:"arrow-right",color:"#666"})])),_:1})])),_:1},8,["url"]),u(v,{url:"/pages/as_us/as_us"},{default:l((()=>[u(g,{class:"item bg-white flex flex-1 justify-between"},{default:l((()=>[u(g,{class:""},{default:l((()=>[r("关于我们")])),_:1}),u(g,{class:"flex justify-between"},{default:l((()=>[u(g,{class:"text-muted mr-[20rpx]"},{default:l((()=>[r(i(I(c).config.version),1)])),_:1}),u(y,{name:"arrow-right",color:"#666"})])),_:1})])),_:1})])),_:1}),u(g,{class:"mt-[60rpx] mx-[26rpx]"},{default:l((()=>[u(w,{type:"primary",shape:"circle",onClick:E},{default:l((()=>[r(" 退出登录 ")])),_:1})])),_:1}),u(k,{list:f.value,modelValue:h.value,"onUpdate:modelValue":d[0]||(d[0]=e=>h.value=e),onClick:_,"safe-area-inset-bottom":!0},null,8,["list","modelValue"])])),_:1})}}}),[["__scopeId","data-v-a30f1b5c"]]);export{Z as default};
