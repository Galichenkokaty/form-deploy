function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{d as _,r as f,V as m,F as p,t as d,v as h,N as x,O as r,W as v}from"./B6cvrjI2.js";const I=["innerHTML"],k=_({__name:"nuxt-icon",props:{name:{},filled:{type:Boolean,default:!1}},async setup(l){let s,t;const o=l,a=f("");let c=!1;async function i(){try{const n=await Object.assign({"/assets/icons/logo.svg":()=>v(()=>import("./Be7nsZjn.js"),__vite__mapDeps([]),import.meta.url).then(u=>u.default)})[`/assets/icons/${o.name}.svg`]();n.includes("stroke")&&(c=!0),a.value=n}catch{console.error(`[nuxt-icons] Icon '${o.name}' doesn't exist in 'assets/icons'`)}}return[s,t]=m(()=>i()),await s,t(),p(i),(e,n)=>(d(),h("span",{class:x(["nuxt-icon",{"nuxt-icon--fill":!e.filled,"nuxt-icon--stroke":r(c)&&!e.filled}]),innerHTML:r(a)},null,10,I))}});export{k as _};
