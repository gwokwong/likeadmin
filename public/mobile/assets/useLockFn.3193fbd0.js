import{z as t}from"./index.89b9ffeb.js";function a(a){const e=t(!1);return{isLock:e,lockFn:async(...t)=>{if(!e.value){e.value=!0;try{const n=await a(...t);return e.value=!1,n}catch(n){throw e.value=!1,n}}}}}export{a as u};
