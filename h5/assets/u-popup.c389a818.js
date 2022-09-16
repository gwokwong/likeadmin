import{o as e,c as t,w as o,G as s,p as l,q as i,y as a,k as r,r as n,a as u,b as d,h as c,X as h}from"./index.5ddae38f.js";import{_ as m}from"./plugin-vue_export-helper.21dcd24c.js";import{_ as p}from"./u-icon.947d1557.js";var y=m({name:"u-mask",emits:["click"],props:{show:{type:Boolean,default:!1},zIndex:{type:[Number,String],default:""},customStyle:{type:Object,default:()=>({})},zoom:{type:Boolean,default:!0},duration:{type:[Number,String],default:300},maskClickAble:{type:Boolean,default:!0},blur:{type:[Number,String],default:0}},data:()=>({zoomStyle:{transform:""},scale:"scale(1.2, 1.2)"}),watch:{show(e){e&&this.zoom?this.zoomStyle.transform="scale(1, 1)":!e&&this.zoom&&(this.zoomStyle.transform=this.scale)}},computed:{maskStyle(){let e={backgroundColor:"rgba(0, 0, 0, 0.6)"};return this.show?e.zIndex=this.zIndex?this.zIndex:this.$u.zIndex.mask:e.zIndex=-1,e.transition=`all ${this.duration/1e3}s ease-in-out`,Object.keys(this.customStyle).length&&(e={...e,...this.customStyle}),e},filterStyle(){let{blur:e}=this,t={};return e&&(t.backdropFilter=`blur(${e}rpx)`),t}},methods:{click(){this.maskClickAble&&this.$emit("click")}}},[["render",function(n,u,d,c,h,m){const p=r;return e(),t(p,{class:l(["u-mask",{"u-mask-zoom":d.zoom,"u-mask-show":d.show}]),"hover-stop-propagation":"",style:i([m.maskStyle,h.zoomStyle,m.filterStyle]),onClick:m.click,onTouchmove:u[0]||(u[0]=a((()=>{}),["stop","prevent"]))},{default:o((()=>[s(n.$slots,"default",{},void 0,!0)])),_:3},8,["style","onClick","class"])}],["__scopeId","data-v-c31b7b8a"]]);var f=m({name:"u-popup",emits:["update:modelValue","input","open","close"],props:{value:{type:Boolean,default:!1},modelValue:{type:Boolean,default:!1},show:{type:Boolean,default:!1},mode:{type:String,default:"left"},mask:{type:Boolean,default:!0},length:{type:[Number,String],default:"auto"},zoom:{type:Boolean,default:!0},safeAreaInsetBottom:{type:Boolean,default:!1},maskCloseAble:{type:Boolean,default:!0},customStyle:{type:Object,default:()=>({})},popup:{type:Boolean,default:!0},borderRadius:{type:[Number,String],default:0},zIndex:{type:[Number,String],default:""},closeable:{type:Boolean,default:!1},closeIcon:{type:String,default:"close"},closeIconPos:{type:String,default:"top-right"},closeIconColor:{type:String,default:"#909399"},closeIconSize:{type:[String,Number],default:"30"},width:{type:String,default:""},height:{type:String,default:""},negativeTop:{type:[String,Number],default:0},maskCustomStyle:{type:Object,default:()=>({})},duration:{type:[String,Number],default:250},blur:{type:[String,Number],default:0}},data:()=>({visibleSync:!1,showDrawer:!1,timer:null,closeFromInner:!1}),computed:{valueCom(){return this.modelValue},style(){let e={};if("left"==this.mode||"right"==this.mode?e={width:this.width?this.getUnitValue(this.width):this.getUnitValue(this.length),height:"100%",transform:`translate3D(${"left"==this.mode?"-100%":"100%"},0px,0px)`}:"top"!=this.mode&&"bottom"!=this.mode||(e={width:"100%",height:this.height?this.getUnitValue(this.height):this.getUnitValue(this.length),transform:`translate3D(0px,${"top"==this.mode?"-100%":"100%"},0px)`}),e.zIndex=this.uZindex,this.borderRadius){switch(this.mode){case"left":e.borderRadius=`0 ${this.borderRadius}rpx ${this.borderRadius}rpx 0`;break;case"top":e.borderRadius=`0 0 ${this.borderRadius}rpx ${this.borderRadius}rpx`;break;case"right":e.borderRadius=`${this.borderRadius}rpx 0 0 ${this.borderRadius}rpx`;break;case"bottom":e.borderRadius=`${this.borderRadius}rpx ${this.borderRadius}rpx 0 0`}e.overflow="hidden"}return this.duration&&(e.transition=`all ${this.duration/1e3}s linear`),e},centerStyle(){let e={};return e.width=this.width?this.getUnitValue(this.width):this.getUnitValue(this.length),e.height=this.height?this.getUnitValue(this.height):"auto",e.zIndex=this.uZindex,e.marginTop=`-${this.$u.addUnit(this.negativeTop)}`,this.borderRadius&&(e.borderRadius=`${this.borderRadius}rpx`,e.overflow="hidden"),e},uZindex(){return this.zIndex?this.zIndex:this.$u.zIndex.popup}},watch:{valueCom(e){e?this.open():this.closeFromInner||this.close(),this.closeFromInner=!1}},mounted(){this.valueCom&&this.open()},methods:{getUnitValue:e=>/(%|px|rpx|auto)$/.test(e)?e:e+"rpx",maskClick(){this.close()},close(){this.closeFromInner=!0,this.change("showDrawer","visibleSync",!1)},modeCenterClose(e){"center"==e&&this.maskCloseAble&&this.close()},open(){this.change("visibleSync","showDrawer",!0)},change(e,t,o){1==this.popup&&(this.$emit("input",o),this.$emit("update:modelValue",o)),this[e]=o,this.timer=o?setTimeout((()=>{this[t]=o,this.$emit(o?"open":"close")}),50):setTimeout((()=>{this[t]=o,this.$emit(o?"open":"close")}),this.duration)}}},[["render",function(m,f,b,k,g,x){const w=n(u("u-mask"),y),S=n(u("u-icon"),p),v=h,z=r;return g.visibleSync?(e(),t(z,{key:0,style:i([b.customStyle,{zIndex:x.uZindex-1}]),class:"u-drawer","hover-stop-propagation":""},{default:o((()=>[d(w,{blur:b.blur,duration:b.duration,"custom-style":b.maskCustomStyle,maskClickAble:b.maskCloseAble,"z-index":x.uZindex-2,show:g.showDrawer&&b.mask,onClick:x.maskClick},null,8,["blur","duration","custom-style","maskClickAble","z-index","show","onClick"]),c(" 移除\t@tap.stop.prevent "),d(z,{class:l(["u-drawer-content",[b.safeAreaInsetBottom?"safe-area-inset-bottom":"","u-drawer-"+b.mode,g.showDrawer?"u-drawer-content-visible":"",b.zoom&&"center"==b.mode?"u-animation-zoom":""]]),onClick:f[2]||(f[2]=e=>x.modeCenterClose(b.mode)),onTouchmove:f[3]||(f[3]=a((()=>{}),["stop","prevent"])),style:i([x.style])},{default:o((()=>["center"==b.mode?(e(),t(z,{key:0,class:"u-mode-center-box",onClick:f[0]||(f[0]=a((()=>{}),["stop","prevent"])),onTouchmove:f[1]||(f[1]=a((()=>{}),["stop","prevent"])),style:i([x.centerStyle])},{default:o((()=>[b.closeable?(e(),t(S,{key:0,onClick:x.close,class:l(["u-close",["u-close--"+b.closeIconPos]]),name:b.closeIcon,color:b.closeIconColor,size:b.closeIconSize},null,8,["onClick","class","name","color","size"])):c("v-if",!0),d(v,{class:"u-drawer__scroll-view","scroll-y":"true"},{default:o((()=>[s(m.$slots,"default",{},void 0,!0)])),_:3})])),_:3},8,["style"])):(e(),t(v,{key:1,class:"u-drawer__scroll-view","scroll-y":"true"},{default:o((()=>[s(m.$slots,"default",{},void 0,!0)])),_:3})),d(z,{onClick:x.close,class:l(["u-close",["u-close--"+b.closeIconPos]])},{default:o((()=>["center"!=b.mode&&b.closeable?(e(),t(S,{key:0,name:b.closeIcon,color:b.closeIconColor,size:b.closeIconSize},null,8,["name","color","size"])):c("v-if",!0)])),_:1},8,["onClick","class"])])),_:3},8,["class","style"])])),_:3},8,["style"])):c("v-if",!0)}],["__scopeId","data-v-f309cd04"]]);export{f as _};
