if(!self.define){let e,c={};const i=(i,n)=>(i=new URL(i+".js",n).href,c[i]||new Promise((c=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=c,document.head.appendChild(e)}else e=i,importScripts(i),c()})).then((()=>{let e=c[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,f)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(c[r])return;let d={};const s=e=>i(e,r),o={module:{uri:r},exports:d,require:s};c[r]=Promise.all(n.map((e=>o[e]||s(e)))).then((e=>(f(...e),d)))}}define(["./workbox-e34abf60"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"freightwaves.8bc58330.png",revision:"5d6f895783a331d48001d11002b8b54b"},{url:"freightwaves.a156c0ae.png",revision:"7b9f19a2a253cab399cf7f4d299a8982"},{url:"icon-192x192.7ecc03bd.png",revision:"c2c5950f062bf23dd604ce5938ae095f"},{url:"icon-192x192.f9158b46.png",revision:"c2c5950f062bf23dd604ce5938ae095f"},{url:"icon-256x256.7294da2f.png",revision:"15ed49e7ef09d3058645497f6df13b4c"},{url:"icon-256x256.c7e7d782.png",revision:"15ed49e7ef09d3058645497f6df13b4c"},{url:"icon-384x384.0bfc32bb.png",revision:"c481307dfabfb939983a7c31bf23b1b3"},{url:"icon-384x384.4b6cd248.png",revision:"d70223c13037e586875742f3acac1fc5"},{url:"icon-512x512.3c17049b.png",revision:"cafa0c77104ec591763e942ea1662e58"},{url:"icon-512x512.96d42c1a.png",revision:"d00074e224ad937659bfba5acf0ee6ef"},{url:"index.1dacaffd.css",revision:"3c14f7bb24decbdd531a93567ad377e5"},{url:"index.f6e71c0c.css",revision:"00278778f488028dbded0496b0247e3b"},{url:"index.html",revision:"b1d3fb6e7c3e2d5b0ceafc484f7ce266"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]}),e.cleanupOutdatedCaches(),e.registerRoute(/\.png$|\.jpeg$|\.jpg$|\.webp$/,new e.CacheFirst,"GET"),e.registerRoute(/\.html$|\.js$|\.css$/,new e.NetworkFirst,"GET")}));
