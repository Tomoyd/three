import{u as x,t as d,h as y,l as M}from"./useThree.3ef42ea4.js";import{V as B}from"./VFixed.bc07aeec.js";import{d as w,B as _,f as g,o as j,c as v,A as F,M as V,F as W,a as l}from"./index.3afbc751.js";import{u as C}from"./useThreeSelect.b7cdba79.js";import{V as h,B as z,M as O,a as P,a7 as R,aj as S}from"./three.module.e25001cb.js";const A=l("div",{id:"three"},null,-1),E=l("div",{id:"stats"},null,-1),G=l("div",{style:{color:"#fff","font-size":"10px"}},"\u70B9\u51FB\u7269\u4F53\u8FDB\u884C\u89C6\u56FE\u9501\u5B9A",-1),L=w({setup(I){const t=x(),a=new h,m={bigWhite:a},p=()=>{const e=new z(5,5,5),o=new O(e,new P({color:16711680})),s=Math.PI/3;let n=60;const r=new R,c=[40,40,40];for(;n>0;){const i=o.clone();i.position.set(...c.map(y)),i.material=o.material.clone(),i.material.color.setRGB(Math.random(),Math.random(),Math.random()),i.rotation.y=Math.random()*s,r.add(i),n--}u(r.children),t.add(r)},b=e=>{var c;if(e.length<=0)return;const o=e[0].object,s=20,n=o.rotation.y||((c=o.parent)==null?void 0:c.rotation.y)||0;a.copy(o.position),o.name&&(a.copy(m.bigWhite),console.log("vector",a));const r={x:a.x+Math.sin(n)*s,y:a.y,z:a.z+Math.cos(n)*s};t.orbit.enabled=!1,d(t.camera.position,r,void 0,2e3),d(t.orbit.target,a,void 0,2e3,()=>{t.orbit.enabled=!0})},f=async()=>{const e=await M("./three/models/baymax/Bigmax_White_OBJ.obj");if(!e)return;e.children.forEach(s=>{s.material.emissive.set(15658734*Math.random())}),e.scale.set(.1,.1,.1),e.rotation.y=Math.random()*Math.PI/2,u(e),t.add(e),e.updateMatrixWorld(),t.getScene().updateMatrixWorld(!0);const o=new S().setFromObject(e);a.set(0,0,0).addVectors(o.min,o.max).multiplyScalar(.5),m.bigWhite=a.clone()},{addIntersectObj:u}=C(t.camera,b);return _(window,"resize",t.resize),g(()=>{p(),f(),t.mount(),t.loopRender(),t.camera.far=100;const e=t.camera.position;e.set(0,0,0),d(e,new h(0,0,60),void 0,2e3)}),(e,o)=>(j(),v(W,null,[A,E,F(B,{left:100,top:5,style:{opacity:"0.5","border-radius":"2px"}},{default:V(()=>[G]),_:1})],64))}});export{L as default};
