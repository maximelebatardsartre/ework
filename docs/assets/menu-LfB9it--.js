(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=`
precision mediump float;
uniform vec2 r;
uniform float t;
uniform float s;
float h(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
float n(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);
  return mix(mix(h(i),h(i+vec2(1,0)),f.x),mix(h(i+vec2(0,1)),h(i+vec2(1,1)),f.x),f.y);}
float fbm(vec2 p){float v=0.,a=.5;for(int k=0;k<5;k++){v+=a*n(p);p*=2.02;a*=.5;}return v;}
void main(){
  vec2 uv=gl_FragCoord.xy/r; vec2 p=uv*vec2(r.x/r.y,1.)*1.6;
  float tt=t*.035;
  float q=fbm(p+vec2(tt,-tt*.6));
  float w=fbm(p*1.3+q*1.8+vec2(-tt*.8,tt));
  vec3 night=vec3(.043,.071,.086);
  vec3 pink=vec3(.902,0.,.749);
  vec3 mint=vec3(.51,1.,.894);
  // The light sits high on the page and fades as one scrolls.
  float top=smoothstep(.15,1.05,uv.y)*(1.-s*.75);
  vec3 c=night;
  c+=pink*pow(w,3.2)*.85*top;
  c+=mint*pow(q,4.)*.38*top*smoothstep(.2,.9,uv.x);
  c+=pink*.05*smoothstep(.6,0.,distance(uv,vec2(.78,.72)));
  gl_FragColor=vec4(c,1.);
}`,t=`attribute vec2 p;void main(){gl_Position=vec4(p,0.,1.);}`;function n(n,r){let i=n.getContext(`webgl`,{antialias:!1,alpha:!1,powerPreference:`low-power`});if(!i)return;let a=(e,t)=>{let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n},o=i.createProgram();if(i.attachShader(o,a(i.VERTEX_SHADER,t)),i.attachShader(o,a(i.FRAGMENT_SHADER,e)),i.linkProgram(o),!i.getProgramParameter(o,i.LINK_STATUS))return;i.useProgram(o);let s=i.createBuffer();i.bindBuffer(i.ARRAY_BUFFER,s),i.bufferData(i.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),i.STATIC_DRAW);let c=i.getAttribLocation(o,`p`);i.enableVertexAttribArray(c),i.vertexAttribPointer(c,2,i.FLOAT,!1,0,0);let l=i.getUniformLocation(o,`r`),u=i.getUniformLocation(o,`t`),d=i.getUniformLocation(o,`s`),f=()=>{let e=.35;n.width=Math.max(2,Math.round(innerWidth*e)),n.height=Math.max(2,Math.round(innerHeight*e)),i.viewport(0,0,n.width,n.height)};f(),addEventListener(`resize`,f),n.classList.add(`on`);let p=performance.now(),m=e=>{i.uniform2f(l,n.width,n.height),i.uniform1f(u,(e-p)/1e3+20),i.uniform1f(d,Math.min(1,scrollY/innerHeight)),i.drawArrays(i.TRIANGLES,0,3),r||requestAnimationFrame(m)};requestAnimationFrame(m),r&&addEventListener(`scroll`,()=>requestAnimationFrame(m),{passive:!0})}function r(){let e=document.querySelector(`[data-nav]`),t=document.querySelector(`[data-burger]`);if(!e)return;let n=()=>e.classList.toggle(`stuck`,scrollY>24);if(addEventListener(`scroll`,n,{passive:!0}),n(),!t)return;let r=(n,r=!1)=>{e.classList.toggle(`open`,n),document.documentElement.classList.toggle(`menu-open`,n),t.setAttribute(`aria-expanded`,String(n)),t.setAttribute(`aria-label`,n?`Fermer le menu`:`Ouvrir le menu`),!n&&r&&t.focus()};t.addEventListener(`click`,()=>r(!e.classList.contains(`open`))),e.querySelectorAll(`.menu a`).forEach(e=>e.addEventListener(`click`,()=>r(!1))),addEventListener(`keydown`,t=>{t.key===`Escape`&&e.classList.contains(`open`)&&r(!1,!0)}),matchMedia(`(min-width: 861px)`).addEventListener(`change`,e=>e.matches&&r(!1))}export{n,r as t};