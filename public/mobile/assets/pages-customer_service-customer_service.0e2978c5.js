import{d as e,u as t,r as s,a as n,o as a,c as r,w as c,b as o,g as l,l as u,t as i,h as m,a7 as p,k as f,m as d,e as x,f as b,F as y}from"./index.28d89b6b.js";import{_}from"./u-image.37b37f6b.js";import{_ as g}from"./u-button.322cee95.js";import{a as h}from"./shop.f075f092.js";import"./u-icon.be7b466a.js";import"./plugin-vue_export-helper.21dcd24c.js";async function v(e){if(!e)return uni.$u.toast("图片错误");uni.$u.toast("长按图片保存")}const j=e({__name:"customer-service",props:{content:{type:Object,default:()=>({})},styles:{type:Object,default:()=>({})}},setup(e){const{getImageUrl:d}=t();return(t,x)=>{const b=s(n("u-image"),_),y=f,h=s(n("u-button"),g);return a(),r(y,{class:"customer-service bg-white flex flex-col justify-center items-center mx-[36rpx] mt-[20rpx] rounded-lg px-[110rpx] pt-[100rpx] pb-[160rpx]"},{default:c((()=>[o(b,{width:"280",height:"280",src:l(d)(e.content.qrcode)},null,8,["src"]),e.content.title?(a(),r(y,{key:0,class:"text-lg mt-[14rpx] font-medium"},{default:c((()=>[u(i(e.content.title),1)])),_:1})):m("v-if",!0),e.content.time?(a(),r(y,{key:1,class:"text-content mt-[40rpx]"},{default:c((()=>[u("服务时间："+i(e.content.time),1)])),_:1})):m("v-if",!0),e.content.mobile?(a(),r(y,{key:2,class:"text-content mt-[14rpx] flex flex-wrap"},{default:c((()=>[u(" 客服电话："+i(e.content.mobile)+" ",1),p("a",{class:"ml-[10rpx] phone text-muted underline",href:"tel:"+e.content.mobile}," 拨打 ",8,["href"])])),_:1})):m("v-if",!0),o(y,{class:"mt-[100rpx] w-full"},{default:c((()=>[o(h,{type:"primary",shape:"circle",onClick:x[0]||(x[0]=t=>l(v)(l(d)(e.content.qrcode)))},{default:c((()=>[u(" 保存二维码图片 ")])),_:1})])),_:1})])),_:1})}}}),k=e({__name:"customer_service",setup(e){const t=d({pages:[]});return(async()=>{const e=await h({id:3});t.pages=JSON.parse(e.pages)})(),(e,o)=>{const l=s(n("w-customer-service"),j),u=f;return a(),r(u,{class:"customer-service"},{default:c((()=>[(a(!0),x(y,null,b(t.pages,((e,t)=>(a(),r(u,{key:t},{default:c((()=>["customer-service"==e.name?(a(),r(l,{key:0,content:e.content,styles:e.styles},null,8,["content","styles"])):m("v-if",!0)])),_:2},1024)))),128))])),_:1})}}});export{k as default};
