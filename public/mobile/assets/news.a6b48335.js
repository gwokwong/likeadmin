import{C as t}from"./index.ebbbd618.js";function r(){return t.get({url:"/article/category"})}function e(r){return t.get({url:"/article/list",data:r})}function a(r){return t.get({url:"/article/detail",data:r})}function c(r){return t.post({url:"/article/collectAdd",data:r},{isAuth:!0})}function l(r){return t.post({url:"/article/collectCancel",data:r},{isAuth:!0})}function n(){return t.get({url:"/article/collectList"})}export{r as a,a as b,l as c,c as d,n as e,e as g};
