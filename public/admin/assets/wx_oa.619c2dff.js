import{r as n,k as a}from"./index.f6ec1d34.js";function u(e){return n.post({url:"/channel/oa/save",params:e})}function l(){return n.get({url:"/channel/oa/detail"})}function s(){return n.get({url:"/channel/oaMenu/detail"})}function r(e){return n.post({url:"/channel/oaMenu/save",params:e})}function c(e){return n.post({url:"/channel/oaMenu/publish",params:e})}function p(e){const t=a(e.type);return n.get({url:`/channel/oaReply${t}/list`,params:e})}function i(e){const t=a(e.type);return n.post({url:`/channel/oaReply${t}/del`,params:e})}function y(e){const t=a(e.type);return n.post({url:`/channel/oaReply${t}/status`,params:e})}function f(e){const t=a(e.type);return n.post({url:`/channel/oaReply${t}/add`,params:e})}function h(e){const t=a(e.type);return n.post({url:`/channel/oaReply${t}/edit`,params:e})}function g(e){const t=a(e.type);return n.get({url:`/channel/oaReply${t}/detail`,params:e})}export{s as a,r as b,c,y as d,p as e,h as f,l as g,f as h,g as i,i as o,u as s};
