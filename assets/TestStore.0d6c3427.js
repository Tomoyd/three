var $=Object.defineProperty,v=Object.defineProperties;var S=Object.getOwnPropertyDescriptors;var d=Object.getOwnPropertySymbols;var h=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable;var p=(n,e,o)=>e in n?$(n,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[e]=o,u=(n,e)=>{for(var o in e||(e={}))h.call(e,o)&&p(n,o,e[o]);if(d)for(var o of d(e))k.call(e,o)&&p(n,o,e[o]);return n},g=(n,e)=>v(n,S(e));import{m as A,b as C,d as B,u as m,e as _,f as x,o as F,c as N,a,t as r,g as l,F as y}from"./index.3afbc751.js";const D={computed:u({},A(m,["counter"])),methods:u({},C(m,["increment"]))},R=B(g(u({},D),{setup(n){const e=m(),o=_();return e.$subscribe((t,s)=>{console.log("mutations",t),console.log("state",s)}),x(()=>{e.$patch(t=>{t.isAdmin=!1}),e.$patch({name:"counterStore"})}),e.$onAction(({name:t,store:s,args:c,after:f,onError:b})=>{console.log("actions",t,s,c),f(i=>{console.log("resolveReturn",i)}),b(i=>{console.log("err",i)})}),(t,s)=>(F(),N(y,null,[a("div",null,r(l(e).name),1),a("div",null,r(l(e).isAdmin),1),a("div",null,r(t.counter),1),a("button",{onClick:s[0]||(s[0]=(...c)=>t.increment&&t.increment(...c))},"add"),a("div",null,r(l(o).other.name),1),a("button",{onClick:s[1]||(s[1]=()=>{l(o).other.name="change"})}," change Name "),a("div",null,r(` 2x:${l(e).doubleCounter}
        7x:${l(e).doubleX(7)}
        4x:${l(e).counter4}
        `),1)],64))}}));export{R as default};
