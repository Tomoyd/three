var z=Object.defineProperty,L=Object.defineProperties;var $=Object.getOwnPropertyDescriptors;var D=Object.getOwnPropertySymbols;var J=Object.prototype.hasOwnProperty,K=Object.prototype.propertyIsEnumerable;var E=(i,e,s)=>e in i?z(i,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):i[e]=s,b=(i,e)=>{for(var s in e||(e={}))J.call(e,s)&&E(i,s,e[s]);if(D)for(var s of D(e))K.call(e,s)&&E(i,s,e[s]);return i},F=(i,e)=>L(i,$(e));import{p as S,q as P,r as V,C as y,u as X,E as v,i as Y,d as Z,B as ee,s as se}from"./useThree.3ef42ea4.js";import{V as te}from"./VFixed.bc07aeec.js";import{u as ae,_ as re}from"./useObjResManage.fa2ca442.js";import{C as ne,ay as T,ax as R,aR as oe,as as ie,e as le}from"./three.module.e25001cb.js";import{d as ce,f as ue,o as de,c as fe,A as Q,M as he,F as me,a as I,g as U,I as pe}from"./index.3afbc751.js";class ve extends S{constructor(e,s,t,r,n){super();this.scene=e,this.camera=s,this.overrideMaterial=t,this.clearColor=r,this.clearAlpha=n!==void 0?n:0,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new ne}render(e,s,t){const r=e.autoClear;e.autoClear=!1;let n,h;this.overrideMaterial!==void 0&&(h=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor&&(e.getClearColor(this._oldClearColor),n=e.getClearAlpha(),e.setClearColor(this.clearColor,this.clearAlpha)),this.clearDepth&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor&&e.setClearColor(this._oldClearColor,n),this.overrideMaterial!==void 0&&(this.scene.overrideMaterial=h),e.autoClear=r}}const A={uniforms:{tDiffuse:{value:null},time:{value:0},nIntensity:{value:.5},sIntensity:{value:.05},sCount:{value:4096},grayscale:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		#include <common>

		// control parameter
		uniform float time;

		uniform bool grayscale;

		// noise effect intensity value (0 = no effect, 1 = full effect)
		uniform float nIntensity;

		// scanlines effect intensity value (0 = no effect, 1 = full effect)
		uniform float sIntensity;

		// scanlines effect count value (0 = no effect, 4096 = full effect)
		uniform float sCount;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

		// sample the source
			vec4 cTextureScreen = texture2D( tDiffuse, vUv );

		// make some noise
			float dx = rand( vUv + time );

		// add noise
			vec3 cResult = cTextureScreen.rgb + cTextureScreen.rgb * clamp( 0.1 + dx, 0.0, 1.0 );

		// get us a sine and cosine
			vec2 sc = vec2( sin( vUv.y * sCount ), cos( vUv.y * sCount ) );

		// add scanlines
			cResult += cTextureScreen.rgb * vec3( sc.x, sc.y, sc.x ) * sIntensity;

		// interpolate between source and result by intensity
			cResult = cTextureScreen.rgb + clamp( nIntensity, 0.0,1.0 ) * ( cResult - cTextureScreen.rgb );

		// convert to grayscale if desired
			if( grayscale ) {

				cResult = vec3( cResult.r * 0.3 + cResult.g * 0.59 + cResult.b * 0.11 );

			}

			gl_FragColor =  vec4( cResult, cTextureScreen.a );

		}`};class Se extends S{constructor(e,s,t,r){super();A===void 0&&console.error("THREE.FilmPass relies on FilmShader");const n=A;this.uniforms=T.clone(n.uniforms),this.material=new R({uniforms:this.uniforms,vertexShader:n.vertexShader,fragmentShader:n.fragmentShader}),r!==void 0&&(this.uniforms.grayscale.value=r),e!==void 0&&(this.uniforms.nIntensity.value=e),s!==void 0&&(this.uniforms.sIntensity.value=s),t!==void 0&&(this.uniforms.sCount.value=t),this.fsQuad=new P(this.material)}render(e,s,t,r){this.uniforms.tDiffuse.value=t.texture,this.uniforms.time.value+=r,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(s),this.clear&&e.clear(),this.fsQuad.render(e))}}class Ce extends S{constructor(e,s,t){super();V===void 0&&console.error("THREE.DotScreenPass relies on DotScreenShader");const r=V;this.uniforms=T.clone(r.uniforms),e!==void 0&&this.uniforms.center.value.copy(e),s!==void 0&&(this.uniforms.angle.value=s),t!==void 0&&(this.uniforms.scale.value=t),this.material=new R({uniforms:this.uniforms,vertexShader:r.vertexShader,fragmentShader:r.fragmentShader}),this.fsQuad=new P(this.material)}render(e,s,t){this.uniforms.tDiffuse.value=t.texture,this.uniforms.tSize.value.set(t.width,t.height),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(s),this.clear&&e.clear(),this.fsQuad.render(e))}}class ge extends S{constructor(e,s){super();y===void 0&&console.error("THREE.TexturePass relies on CopyShader");const t=y;this.map=e,this.opacity=s!==void 0?s:1,this.uniforms=T.clone(t.uniforms),this.material=new R({uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader,depthTest:!1,depthWrite:!1}),this.needsSwap=!1,this.fsQuad=new P(null)}render(e,s,t){const r=e.autoClear;e.autoClear=!1,this.fsQuad.material=this.material,this.uniforms.opacity.value=this.opacity,this.uniforms.tDiffuse.value=this.map,this.material.transparent=this.opacity<1,e.setRenderTarget(this.renderToScreen?null:t),this.clear&&e.clear(),this.fsQuad.render(e),e.autoClear=r}}const we=I("div",{id:"three"},null,-1),xe=I("div",{id:"stats"},null,-1),De=ce({setup(i){function e(){return{filmPass(){const a=new Se(.2,.3,256,0);return a.renderToScreen=!0,a},bloomPass(){const a=new ee;return a.renderToScreen=!0,a},shaderPass(){const a=new se(y);return a.renderToScreen=!0,a},dotScreenPass(){return new Ce}}}async function s(){const[o]=await Y(["Earth.png"],"/three/textures/earth/");return Z(new ie({map:o,color:16777215,emissive:0}))(new le(10))}async function t(){const o=n.getRenderer(),a=new v(o),c=new ve(n.getScene(),n.camera),{shaderPass:l,filmPass:H,dotScreenPass:O,bloomPass:W}=e();a.addPass(c),a.addPass(l());const g=n.renderEffectStore,j=g.getEffects(),w=new ge(a.renderTarget2.texture),x=new v(o);x.addPass(w),x.addPass(H());const m=new v(o);m.addPass(w),m.addPass(W()),m.addPass(l());const p=new v(o);p.addPass(w),p.addPass(O()),p.addPass(l()),o.autoClear=!1;const{innerHeight:k,innerWidth:q}=window,u=q/2,d=k/2,M=await s();n.add(M),g.addEffects(()=>{M.rotation.y+=.02});function _(f){o.clear(),j.forEach(N=>N()),o.setViewport(0,0,u,d),a.render(f),o.setViewport(0,d,u,d),x.render(f),o.setViewport(u,0,u,d),m.render(f),o.setViewport(u,d,u,d),p.render(f),window.requestAnimationFrame(_)}function G(f=!0){a.renderToScreen=f}return F(b({},g),{composer:a,renderToScreen:G,composerRender:_})}const r={simpleComposer:t},n=X(),h=(()=>{const o=new Map;return async(a,c)=>{let l=o.get(c);if(l){l(0);return}l=(await a()).composerRender,l(0),o.set(c,l)}})(),[C,B]=ae(r,h,"simpleComposer");return ue(()=>{h(r.simpleComposer,"simpleComposer"),n.mount(),n.add(new oe(16777215,1))}),(o,a)=>(de(),fe(me,null,[we,xe,Q(te,{left:80},{default:he(()=>[Q(re,{options:U(B),modelValue:U(C),"onUpdate:modelValue":a[0]||(a[0]=c=>pe(C)?C.value=c:null)},null,8,["options","modelValue"])]),_:1})],64))}});export{De as default};
