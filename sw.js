if(!self.define){let e,c={};const n=(n,i)=>(n=new URL(n+".js",i).href,c[n]||new Promise((c=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=c,document.head.appendChild(e)}else e=n,importScripts(n),c()})).then((()=>{let e=c[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(i,f)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(c[r])return;let d={};const o=e=>n(e,r),s={module:{uri:r},exports:d,require:o};c[r]=Promise.all(i.map((e=>s[e]||o(e)))).then((e=>(f(...e),d)))}}define(["./workbox-e34abf60"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"flexboard-qr-code.375e78a9.png",revision:"ed993c00a61651faaff699424d1613db"},{url:"flexboard-qr-code.e48acfaf.png",revision:"3f2fdeb590ec55ad474d66f4ba5b9589"},{url:"freightwaves.8bc58330.png",revision:"5d6f895783a331d48001d11002b8b54b"},{url:"freightwaves.a156c0ae.png",revision:"7b9f19a2a253cab399cf7f4d299a8982"},{url:"icon-192x192.7ecc03bd.png",revision:"c2c5950f062bf23dd604ce5938ae095f"},{url:"icon-192x192.f9158b46.png",revision:"c2c5950f062bf23dd604ce5938ae095f"},{url:"icon-256x256.7294da2f.png",revision:"15ed49e7ef09d3058645497f6df13b4c"},{url:"icon-256x256.c7e7d782.png",revision:"15ed49e7ef09d3058645497f6df13b4c"},{url:"icon-384x384.0bfc32bb.png",revision:"c481307dfabfb939983a7c31bf23b1b3"},{url:"icon-384x384.4b6cd248.png",revision:"d70223c13037e586875742f3acac1fc5"},{url:"icon-512x512.3c17049b.png",revision:"cafa0c77104ec591763e942ea1662e58"},{url:"icon-512x512.96d42c1a.png",revision:"d00074e224ad937659bfba5acf0ee6ef"},{url:"index.1dacaffd.css",revision:"854fbf698c6487e5ff63cc5156642402"},{url:"index.b00c3a21.css",revision:"7bcff01f5d3dfe2615548785e2c592c4"},{url:"index.html",revision:"89d6ec11ce231fd698015e941150edc5"},{url:"ryan_petersen.51a14d1e.png",revision:"bd86068945c66c3f001bf9b120a59817"},{url:"ryan_petersen.7b369224.png",revision:"4b7a6f823ab2724a22e3a1ac1619d5f2"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]}),e.cleanupOutdatedCaches(),e.registerRoute(/\.png$|\.jpeg$|\.jpg$|\.webp$/,new e.CacheFirst,"GET"),e.registerRoute(/\.html$|\.js$|\.css$/,new e.NetworkFirst,"GET")}));
