import{g as T,_ as f}from"./useObjResManage.fa2ca442.js";import{u as V,g as k,b as C,d as E}from"./useThree.3ef42ea4.js";import{a as M,aR as O}from"./three.module.e25001cb.js";import{f as y,d as w,o as x,c as H,a as c,A as p,g as r,I as _,N,F as A,J as h}from"./index.3afbc751.js";const F=()=>{function d(){e=E(new M({color:16776960}))(i[l.value]),o.add(e),o.add(new O(16711680)),o.mount()}function u(){let t=!1;const g=[];function v(){if(!e)return;if(t){t=!1,g.forEach(b=>b()),o.stopLoopRender();return}const R=o.renderEffectStore.addEffects(()=>{e.rotation.x+=.01,e.rotation.y+=.05});t=!0,g.push(R),o.loopRender()}return{toggleRotate:v}}let e;const o=V("three"),s=T({afterEffect:()=>window.requestAnimationFrame(o.render)}),[l,i]=s(k(),t=>{e.geometry=t},"dodecahedron"),[a,n]=s(C(),t=>{e.material=t},"basic");let m=y;const{toggleRotate:B}=u();return(t=!0)=>(m(t?d:()=>!1),m=()=>!1,{toggleRotate:B,materialOptions:n,materialType:a,geoOptions:i,geoType:l,three:o})},L=F();const G=c("div",{id:"three"},null,-1),S={class:"selection"},U=h(" geometry: "),$=h(" material: "),D=w({setup(d){console.log("1233",1233);const{materialOptions:u,materialType:e,geoOptions:o,geoType:s,toggleRotate:l}=L();return y(()=>{console.log("threeBasic")}),(i,a)=>(x(),H(A,null,[G,c("div",S,[U,p(f,{options:r(o),modelValue:r(s),"onUpdate:modelValue":a[0]||(a[0]=n=>_(s)?s.value=n:null)},null,8,["options","modelValue"]),$,p(f,{options:r(u),modelValue:r(e),"onUpdate:modelValue":a[1]||(a[1]=n=>_(e)?e.value=n:null)},null,8,["options","modelValue"]),c("button",{onClick:a[2]||(a[2]=(...n)=>r(l)&&r(l)(...n))},"toggle rotation"),N(i.$slots,"default")])],64))}});export{D as _,L as u};
