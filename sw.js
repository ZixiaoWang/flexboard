if(!self.define){let e,c={};const i=(i,n)=>(i=new URL(i+".js",n).href,c[i]||new Promise((c=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=c,document.head.appendChild(e)}else e=i,importScripts(i),c()})).then((()=>{let e=c[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,f)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(c[r])return;let d={};const o=e=>i(e,r),s={module:{uri:r},exports:d,require:o};c[r]=Promise.all(n.map((e=>s[e]||o(e)))).then((e=>(f(...e),d)))}}define(["./workbox-7d6a3f4d"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"icon-192x192.7ecc03bd.png",revision:"c2c5950f062bf23dd604ce5938ae095f"},{url:"icon-192x192.f9158b46.png",revision:"c2c5950f062bf23dd604ce5938ae095f"},{url:"icon-256x256.7294da2f.png",revision:"15ed49e7ef09d3058645497f6df13b4c"},{url:"icon-256x256.c7e7d782.png",revision:"15ed49e7ef09d3058645497f6df13b4c"},{url:"icon-384x384.0bfc32bb.png",revision:"c481307dfabfb939983a7c31bf23b1b3"},{url:"icon-384x384.4b6cd248.png",revision:"d70223c13037e586875742f3acac1fc5"},{url:"icon-512x512.3c17049b.png",revision:"cafa0c77104ec591763e942ea1662e58"},{url:"icon-512x512.96d42c1a.png",revision:"d00074e224ad937659bfba5acf0ee6ef"},{url:"index.1dacaffd.css",revision:"d07c6ada02106f529b1632c2a811158b"},{url:"index.fc79b7af.css",revision:"88caba04466083a3b30ffba8643a43c7"},{url:"index.html",revision:"d913087436760633cc6025b975449b0d"},{url:"wsj.5a69955f.svg",revision:"611065f4c6e40d96ee98d0c14d245b38"},{url:"wsj.73f5e3d4.svg",revision:"b38bf5068f0b49b704c40e07fcbf5e23"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
