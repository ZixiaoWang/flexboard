if(!self.define){let e,c={};const r=(r,i)=>(r=new URL(r+".js",i).href,c[r]||new Promise((c=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=c,document.head.appendChild(e)}else e=r,importScripts(r),c()})).then((()=>{let e=c[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(i,f)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(c[n])return;let d={};const a=e=>r(e,n),b={module:{uri:n},exports:d,require:a};c[n]=Promise.all(i.map((e=>b[e]||a(e)))).then((e=>(f(...e),d)))}}define(["./workbox-e34abf60"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"all-member.15d16988.jpg",revision:"5a4f497c1497902c32fae5091e29c491"},{url:"all-member.24459562.jpg",revision:"98de3b0946279c1a6d785028d3b397ad"},{url:"flexboard-qr-code.375e78a9.png",revision:"ed993c00a61651faaff699424d1613db"},{url:"flexboard-qr-code.e48acfaf.png",revision:"3f2fdeb590ec55ad474d66f4ba5b9589"},{url:"freightwaves.8bc58330.png",revision:"5d6f895783a331d48001d11002b8b54b"},{url:"freightwaves.a156c0ae.png",revision:"7b9f19a2a253cab399cf7f4d299a8982"},{url:"icon-192x192.7ecc03bd.png",revision:"c2c5950f062bf23dd604ce5938ae095f"},{url:"icon-192x192.f9158b46.png",revision:"c2c5950f062bf23dd604ce5938ae095f"},{url:"icon-256x256.7294da2f.png",revision:"15ed49e7ef09d3058645497f6df13b4c"},{url:"icon-256x256.c7e7d782.png",revision:"15ed49e7ef09d3058645497f6df13b4c"},{url:"icon-384x384.0bfc32bb.png",revision:"c481307dfabfb939983a7c31bf23b1b3"},{url:"icon-384x384.4b6cd248.png",revision:"d70223c13037e586875742f3acac1fc5"},{url:"icon-512x512.3c17049b.png",revision:"cafa0c77104ec591763e942ea1662e58"},{url:"icon-512x512.96d42c1a.png",revision:"d00074e224ad937659bfba5acf0ee6ef"},{url:"index.1dacaffd.css",revision:"969256d28d1f3e86b134b5b41326a281"},{url:"index.4ba7326d.css",revision:"b7eefbb809fa981c1e194117eaf152fc"},{url:"index.html",revision:"73bf44cd78ecc1d8daa7895341a71ad5"},{url:"joc.621c736b.png",revision:"91b8d2db853b09cc69349265120f6a56"},{url:"joc.796650a3.png",revision:"cb39e95117a0dedda4d7120f43843a8a"},{url:"loadstar.3088af35.png",revision:"c057f17933efdb5bd2e2175a917028ca"},{url:"loadstar.bbfef02f.png",revision:"c057f17933efdb5bd2e2175a917028ca"},{url:"ryan_petersen.51a14d1e.png",revision:"bd86068945c66c3f001bf9b120a59817"},{url:"ryan_petersen.7b369224.png",revision:"4b7a6f823ab2724a22e3a1ac1619d5f2"},{url:"wsj.5a69955f.svg",revision:"611065f4c6e40d96ee98d0c14d245b38"},{url:"wsj.73f5e3d4.svg",revision:"b38bf5068f0b49b704c40e07fcbf5e23"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]}),e.cleanupOutdatedCaches(),e.registerRoute(/\.png$|\.jpeg$|\.jpg$|\.webp$/,new e.CacheFirst,"GET"),e.registerRoute(/\.html$|\.js$|\.css$/,new e.NetworkFirst,"GET")}));
