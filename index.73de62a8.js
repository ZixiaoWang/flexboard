var e,t,n,i,r,a,o,l={},s=[],c=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function u(e,t){for(var n in t)e[n]=t[n];return e}function _(e){var t=e.parentNode;t&&t.removeChild(e)}function d(t,n,i){var r,a,o,l={};for(o in n)"key"==o?r=n[o]:"ref"==o?a=n[o]:l[o]=n[o];if(arguments.length>2&&(l.children=arguments.length>3?e.call(arguments,2):i),"function"==typeof t&&null!=t.defaultProps)for(o in t.defaultProps)void 0===l[o]&&(l[o]=t.defaultProps[o]);return p(t,l,r,a,null)}function p(e,i,r,a,o){var l={type:e,props:i,key:r,ref:a,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==o?++n:o};return null==o&&null!=t.vnode&&t.vnode(l),l}function f(e){return e.children}function h(e,t){this.props=e,this.context=t}function m(e,t){if(null==t)return e.__?m(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e)return n.__e;return"function"==typeof e.type?m(e):null}function v(e){var t,n;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e){e.__e=e.__c.base=n.__e;break}return v(e)}}function g(e){(!e.__d&&(e.__d=!0)&&i.push(e)&&!y.__r++||a!==t.debounceRendering)&&((a=t.debounceRendering)||r)(y)}function y(){for(var e;y.__r=i.length;)e=i.sort((function(e,t){return e.__v.__b-t.__v.__b})),i=[],e.some((function(e){var t,n,i,r,a,o;e.__d&&(a=(r=(t=e).__v).__e,(o=t.__P)&&(n=[],(i=u({},r)).__v=r.__v+1,P(o,r,i,t.__n,void 0!==o.ownerSVGElement,null!=r.__h?[a]:null,n,null==a?m(r):a,r.__h),E(n,r),r.__e!=a&&v(r)))}))}function b(e,t,n,i,r,a,o,c,u,_){var d,h,v,g,y,b,k,w=i&&i.__k||s,C=w.length;for(n.__k=[],d=0;d<t.length;d++)if(null!=(g=n.__k[d]=null==(g=t[d])||"boolean"==typeof g?null:"string"==typeof g||"number"==typeof g||"bigint"==typeof g?p(null,g,null,null,g):Array.isArray(g)?p(f,{children:g},null,null,null):g.__b>0?p(g.type,g.props,g.key,null,g.__v):g)){if(g.__=n,g.__b=n.__b+1,null===(v=w[d])||v&&g.key==v.key&&g.type===v.type)w[d]=void 0;else for(h=0;h<C;h++){if((v=w[h])&&g.key==v.key&&g.type===v.type){w[h]=void 0;break}v=null}P(e,g,v=v||l,r,a,o,c,u,_),y=g.__e,(h=g.ref)&&v.ref!=h&&(k||(k=[]),v.ref&&k.push(v.ref,null,g),k.push(h,g.__c||y,g)),null!=y?(null==b&&(b=y),"function"==typeof g.type&&g.__k===v.__k?g.__d=u=N(g,u,e):u=x(e,g,v,w,y,u),"function"==typeof n.type&&(n.__d=u)):u&&v.__e==u&&u.parentNode!=e&&(u=m(v))}for(n.__e=b,d=C;d--;)null!=w[d]&&("function"==typeof n.type&&null!=w[d].__e&&w[d].__e==n.__d&&(n.__d=m(i,d+1)),L(w[d],w[d]));if(k)for(d=0;d<k.length;d++)q(k[d],k[++d],k[++d])}function N(e,t,n){for(var i,r=e.__k,a=0;r&&a<r.length;a++)(i=r[a])&&(i.__=e,t="function"==typeof i.type?N(i,t,n):x(n,i,i,r,i.__e,t));return t}function k(e,t){return t=t||[],null==e||"boolean"==typeof e||(Array.isArray(e)?e.some((function(e){k(e,t)})):t.push(e)),t}function x(e,t,n,i,r,a){var o,l,s;if(void 0!==t.__d)o=t.__d,t.__d=void 0;else if(null==n||r!=a||null==r.parentNode)e:if(null==a||a.parentNode!==e)e.appendChild(r),o=null;else{for(l=a,s=0;(l=l.nextSibling)&&s<i.length;s+=2)if(l==r)break e;e.insertBefore(r,a),o=a}return void 0!==o?o:r.nextSibling}function w(e,t,n){"-"===t[0]?e.setProperty(t,n):e[t]=null==n?"":"number"!=typeof n||c.test(t)?n:n+"px"}function C(e,t,n,i,r){var a;e:if("style"===t)if("string"==typeof n)e.style.cssText=n;else{if("string"==typeof i&&(e.style.cssText=i=""),i)for(t in i)n&&t in n||w(e.style,t,"");if(n)for(t in n)i&&n[t]===i[t]||w(e.style,t,n[t])}else if("o"===t[0]&&"n"===t[1])a=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+a]=n,n?i||e.addEventListener(t,a?A:S,a):e.removeEventListener(t,a?A:S,a);else if("dangerouslySetInnerHTML"!==t){if(r)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("href"!==t&&"list"!==t&&"form"!==t&&"tabIndex"!==t&&"download"!==t&&t in e)try{e[t]=null==n?"":n;break e}catch(e){}"function"==typeof n||(null!=n&&(!1!==n||"a"===t[0]&&"r"===t[1])?e.setAttribute(t,n):e.removeAttribute(t))}}function S(e){this.l[e.type+!1](t.event?t.event(e):e)}function A(e){this.l[e.type+!0](t.event?t.event(e):e)}function P(n,i,r,a,o,s,c,d,p){var v,g,y,N,k,x,w,S,A,P,E,q=i.type;if(void 0!==i.constructor)return null;null!=r.__h&&(p=r.__h,d=i.__e=r.__e,i.__h=null,s=[d]),(v=t.__b)&&v(i);try{e:if("function"==typeof q){if(S=i.props,A=(v=q.contextType)&&a[v.__c],P=v?A?A.props.value:v.__:a,r.__c?w=(g=i.__c=r.__c).__=g.__E:("prototype"in q&&q.prototype.render?i.__c=g=new q(S,P):(i.__c=g=new h(S,P),g.constructor=q,g.render=F),A&&A.sub(g),g.props=S,g.state||(g.state={}),g.context=P,g.__n=a,y=g.__d=!0,g.__h=[]),null==g.__s&&(g.__s=g.state),null!=q.getDerivedStateFromProps&&(g.__s==g.state&&(g.__s=u({},g.__s)),u(g.__s,q.getDerivedStateFromProps(S,g.__s))),N=g.props,k=g.state,y)null==q.getDerivedStateFromProps&&null!=g.componentWillMount&&g.componentWillMount(),null!=g.componentDidMount&&g.__h.push(g.componentDidMount);else{if(null==q.getDerivedStateFromProps&&S!==N&&null!=g.componentWillReceiveProps&&g.componentWillReceiveProps(S,P),!g.__e&&null!=g.shouldComponentUpdate&&!1===g.shouldComponentUpdate(S,g.__s,P)||i.__v===r.__v){g.props=S,g.state=g.__s,i.__v!==r.__v&&(g.__d=!1),g.__v=i,i.__e=r.__e,i.__k=r.__k,i.__k.forEach((function(e){e&&(e.__=i)})),g.__h.length&&c.push(g);break e}null!=g.componentWillUpdate&&g.componentWillUpdate(S,g.__s,P),null!=g.componentDidUpdate&&g.__h.push((function(){g.componentDidUpdate(N,k,x)}))}g.context=P,g.props=S,g.state=g.__s,(v=t.__r)&&v(i),g.__d=!1,g.__v=i,g.__P=n,v=g.render(g.props,g.state,g.context),g.state=g.__s,null!=g.getChildContext&&(a=u(u({},a),g.getChildContext())),y||null==g.getSnapshotBeforeUpdate||(x=g.getSnapshotBeforeUpdate(N,k)),E=null!=v&&v.type===f&&null==v.key?v.props.children:v,b(n,Array.isArray(E)?E:[E],i,r,a,o,s,c,d,p),g.base=i.__e,i.__h=null,g.__h.length&&c.push(g),w&&(g.__E=g.__=null),g.__e=!1}else null==s&&i.__v===r.__v?(i.__k=r.__k,i.__e=r.__e):i.__e=function(t,n,i,r,a,o,s,c){var u,d,p,f=i.props,h=n.props,v=n.type,g=0;if("svg"===v&&(a=!0),null!=o)for(;g<o.length;g++)if((u=o[g])&&"setAttribute"in u==!!v&&(v?u.localName===v:3===u.nodeType)){t=u,o[g]=null;break}if(null==t){if(null===v)return document.createTextNode(h);t=a?document.createElementNS("http://www.w3.org/2000/svg",v):document.createElement(v,h.is&&h),o=null,c=!1}if(null===v)f===h||c&&t.data===h||(t.data=h);else{if(o=o&&e.call(t.childNodes),d=(f=i.props||l).dangerouslySetInnerHTML,p=h.dangerouslySetInnerHTML,!c){if(null!=o)for(f={},g=0;g<t.attributes.length;g++)f[t.attributes[g].name]=t.attributes[g].value;(p||d)&&(p&&(d&&p.__html==d.__html||p.__html===t.innerHTML)||(t.innerHTML=p&&p.__html||""))}if(function(e,t,n,i,r){var a;for(a in n)"children"===a||"key"===a||a in t||C(e,a,null,n[a],i);for(a in t)r&&"function"!=typeof t[a]||"children"===a||"key"===a||"value"===a||"checked"===a||n[a]===t[a]||C(e,a,t[a],n[a],i)}(t,h,f,a,c),p)n.__k=[];else if(g=n.props.children,b(t,Array.isArray(g)?g:[g],n,i,r,a&&"foreignObject"!==v,o,s,o?o[0]:i.__k&&m(i,0),c),null!=o)for(g=o.length;g--;)null!=o[g]&&_(o[g]);c||("value"in h&&void 0!==(g=h.value)&&(g!==t.value||"progress"===v&&!g||"option"===v&&g!==f.value)&&C(t,"value",g,f.value,!1),"checked"in h&&void 0!==(g=h.checked)&&g!==t.checked&&C(t,"checked",g,f.checked,!1))}return t}(r.__e,i,r,a,o,s,c,p);(v=t.diffed)&&v(i)}catch(e){i.__v=null,(p||null!=s)&&(i.__e=d,i.__h=!!p,s[s.indexOf(d)]=null),t.__e(e,i,r)}}function E(e,n){t.__c&&t.__c(n,e),e.some((function(n){try{e=n.__h,n.__h=[],e.some((function(e){e.call(n)}))}catch(e){t.__e(e,n.__v)}}))}function q(e,n,i){try{"function"==typeof e?e(n):e.current=n}catch(e){t.__e(e,i)}}function L(e,n,i){var r,a;if(t.unmount&&t.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||q(r,null,n)),null!=(r=e.__c)){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(e){t.__e(e,n)}r.base=r.__P=null}if(r=e.__k)for(a=0;a<r.length;a++)r[a]&&L(r[a],n,"function"!=typeof e.type);i||null==e.__e||_(e.__e),e.__e=e.__d=void 0}function F(e,t,n){return this.constructor(e,n)}function U(n,i,r){var a,o,s;t.__&&t.__(n,i),o=(a="function"==typeof r)?null:r&&r.__k||i.__k,s=[],P(i,n=(!a&&r||i).__k=d(f,null,[n]),o||l,l,void 0!==i.ownerSVGElement,!a&&r?[r]:o?null:i.firstChild?e.call(i.childNodes):null,s,!a&&r?r:o?o.__e:i.firstChild,a),E(s,n)}e=s.slice,t={__e:function(e,t,n,i){for(var r,a,o;t=t.__;)if((r=t.__c)&&!r.__)try{if((a=r.constructor)&&null!=a.getDerivedStateFromError&&(r.setState(a.getDerivedStateFromError(e)),o=r.__d),null!=r.componentDidCatch&&(r.componentDidCatch(e,i||{}),o=r.__d),o)return r.__E=r}catch(t){e=t}throw e}},n=0,h.prototype.setState=function(e,t){var n;n=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=u({},this.state),"function"==typeof e&&(e=e(u({},n),this.props)),e&&u(n,e),null!=e&&this.__v&&(t&&this.__h.push(t),g(this))},h.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),g(this))},h.prototype.render=f,i=[],r="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,y.__r=0,o=0;var H,T,O,D=0,I=[],M=t.__b,R=t.__r,$=t.diffed,W=t.__c,j=t.unmount;function B(e,n){t.__h&&t.__h(T,e,D||n),D=0;var i=T.__H||(T.__H={__:[],__h:[]});return e>=i.__.length&&i.__.push({}),i.__[e]}function K(e){return D=1,t=Y,n=e,(r=B(H++,2)).t=t,r.__c||(r.__=[i?i(n):Y(void 0,n),function(e){var t=r.t(r.__[0],e);r.__[0]!==t&&(r.__=[t,r.__[1]],r.__c.setState({}))}],r.__c=T),r.__;var t,n,i,r}function V(e,n){var i=B(H++,3);!t.__s&&X(i.__H,n)&&(i.__=e,i.__H=n,T.__H.__h.push(i))}function z(){for(var e;e=I.shift();)if(e.__P)try{e.__H.__h.forEach(J),e.__H.__h.forEach(Q),e.__H.__h=[]}catch(n){e.__H.__h=[],t.__e(n,e.__v)}}t.__b=function(e){T=null,M&&M(e)},t.__r=function(e){R&&R(e),H=0;var t=(T=e.__c).__H;t&&(t.__h.forEach(J),t.__h.forEach(Q),t.__h=[])},t.diffed=function(e){$&&$(e);var n=e.__c;n&&n.__H&&n.__H.__h.length&&(1!==I.push(n)&&O===t.requestAnimationFrame||((O=t.requestAnimationFrame)||function(e){var t,n=function(){clearTimeout(i),G&&cancelAnimationFrame(t),setTimeout(e)},i=setTimeout(n,100);G&&(t=requestAnimationFrame(n))})(z)),T=null},t.__c=function(e,n){n.some((function(e){try{e.__h.forEach(J),e.__h=e.__h.filter((function(e){return!e.__||Q(e)}))}catch(i){n.some((function(e){e.__h&&(e.__h=[])})),n=[],t.__e(i,e.__v)}})),W&&W(e,n)},t.unmount=function(e){j&&j(e);var n,i=e.__c;i&&i.__H&&(i.__H.__.forEach((function(e){try{J(e)}catch(e){n=e}})),n&&t.__e(n,i.__v))};var G="function"==typeof requestAnimationFrame;function J(e){var t=T,n=e.__c;"function"==typeof n&&(e.__c=void 0,n()),T=t}function Q(e){var t=T;e.__c=e.__(),T=t}function X(e,t){return!e||e.length!==t.length||t.some((function(t,n){return t!==e[n]}))}function Y(e,t){return"function"==typeof t?t(e):t}var Z={};function ee(e,t){for(var n in t)e[n]=t[n];return e}function te(e,t,n){var i,r=/(?:\?([^#]*))?(#.*)?$/,a=e.match(r),o={};if(a&&a[1])for(var l=a[1].split("&"),s=0;s<l.length;s++){var c=l[s].split("=");o[decodeURIComponent(c[0])]=decodeURIComponent(c.slice(1).join("="))}e=re(e.replace(r,"")),t=re(t||"");for(var u=Math.max(e.length,t.length),_=0;_<u;_++)if(t[_]&&":"===t[_].charAt(0)){var d=t[_].replace(/(^:|[+*?]+$)/g,""),p=(t[_].match(/[+*?]+$/)||Z)[0]||"",f=~p.indexOf("+"),h=~p.indexOf("*"),m=e[_]||"";if(!m&&!h&&(p.indexOf("?")<0||f)){i=!1;break}if(o[d]=decodeURIComponent(m),f||h){o[d]=e.slice(_).map(decodeURIComponent).join("/");break}}else if(t[_]!==e[_]){i=!1;break}return(!0===n.default||!1!==i)&&o}function ne(e,t){return e.rank<t.rank?1:e.rank>t.rank?-1:e.index-t.index}function ie(e,t){return e.index=t,e.rank=(n=e).props.default?0:re(n.props.path).map(ae).join(""),e.props;var n}function re(e){return e.replace(/(^\/+|\/+$)/g,"").split("/")}function ae(e){return":"==e.charAt(0)?1+"*+?".indexOf(e.charAt(e.length-1))||4:5}var oe={},le=[],se=[],ce=null,ue={url:pe()},_e=function(e,t){var n={__c:t="__cC"+o++,__:e,Consumer:function(e,t){return e.children(t)},Provider:function(e){var n,i;return this.getChildContext||(n=[],(i={})[t]=this,this.getChildContext=function(){return i},this.shouldComponentUpdate=function(e){this.props.value!==e.value&&n.some(g)},this.sub=function(e){n.push(e);var t=e.componentWillUnmount;e.componentWillUnmount=function(){n.splice(n.indexOf(e),1),t&&t.call(e)}}),e.children}};return n.Provider.__=n.Consumer.contextType=n}(ue);function de(){var e=function(e){var t=T.context[e.__c],n=B(H++,9);return n.c=e,t?(null==n.__&&(n.__=!0,t.sub(T)),t.props.value):e.__}(_e);if(e===ue){var t=K()[1];V((function(){return se.push(t),function(){return se.splice(se.indexOf(t),1)}}),[])}return[e,fe]}function pe(){var e;return""+((e=ce&&ce.location?ce.location:ce&&ce.getCurrentLocation?ce.getCurrentLocation():"undefined"!=typeof location?location:oe).pathname||"")+(e.search||"")}function fe(e,t){return void 0===t&&(t=!1),"string"!=typeof e&&e.url&&(t=e.replace,e=e.url),function(e){for(var t=le.length;t--;)if(le[t].canRoute(e))return!0;return!1}(e)&&(n=e,void 0===(i=t?"replace":"push")&&(i="push"),ce&&ce[i]?ce[i](n):"undefined"!=typeof history&&history[i+"State"]&&history[i+"State"](null,null,n)),he(e);var n,i}function he(e){for(var t=!1,n=0;n<le.length;n++)le[n].routeTo(e)&&(t=!0);return t}function me(e){if(e&&e.getAttribute){var t=e.getAttribute("href"),n=e.getAttribute("target");if(t&&t.match(/^\//g)&&(!n||n.match(/^_?self$/i)))return fe(t)}}function ve(e){return e.stopImmediatePropagation&&e.stopImmediatePropagation(),e.stopPropagation&&e.stopPropagation(),e.preventDefault(),!1}function ge(e){if(!(e.ctrlKey||e.metaKey||e.altKey||e.shiftKey||e.button)){var t=e.target;do{if("a"===t.localName&&t.getAttribute("href")){if(t.hasAttribute("data-native")||t.hasAttribute("native"))return;if(me(t))return ve(e)}}while(t=t.parentNode)}}var ye=!1;function be(e){e.history&&(ce=e.history),this.state={url:e.url||pe()}}ee(be.prototype=new h,{shouldComponentUpdate:function(e){return!0!==e.static||e.url!==this.props.url||e.onChange!==this.props.onChange},canRoute:function(e){var t=k(this.props.children);return void 0!==this.g(t,e)},routeTo:function(e){this.setState({url:e});var t=this.canRoute(e);return this.p||this.forceUpdate(),t},componentWillMount:function(){this.p=!0},componentDidMount:function(){var e=this;ye||(ye=!0,ce||addEventListener("popstate",(function(){he(pe())})),addEventListener("click",ge)),le.push(this),ce&&(this.u=ce.listen((function(t){var n=t.location||t;e.routeTo(""+(n.pathname||"")+(n.search||""))}))),this.p=!1},componentWillUnmount:function(){"function"==typeof this.u&&this.u(),le.splice(le.indexOf(this),1)},componentWillUpdate:function(){this.p=!0},componentDidUpdate:function(){this.p=!1},g:function(e,t){e=e.filter(ie).sort(ne);for(var n=0;n<e.length;n++){var i=e[n],r=te(t,i.props.path,i.props);if(r)return[i,r]}},render:function(t,n){var i,r,a=t.onChange,o=n.url,l=this.c,s=this.g(k(t.children),o);if(s&&(r=function(t,n,i){var r,a,o,l=u({},t.props);for(o in n)"key"==o?r=n[o]:"ref"==o?a=n[o]:l[o]=n[o];return arguments.length>2&&(l.children=arguments.length>3?e.call(arguments,2):i),p(t.type,l,r||t.key,a||t.ref,null)}(s[0],ee(ee({url:o,matches:i=s[1]},i),{key:void 0,ref:void 0}))),o!==(l&&l.url)){ee(ue,l=this.c={url:o,previous:l&&l.url,current:r,path:r?r.props.path:null,matches:i}),l.router=this,l.active=r?[r]:[];for(var c=se.length;c--;)se[c]({});"function"==typeof a&&a(l)}return d(_e.Provider,{value:l},r)}});var Ne,ke=function(e){return d("a",ee({onClick:ge},e))};function xe(){return xe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},xe.apply(this,arguments)}!function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"}(Ne||(Ne={}));function we(e){void 0===e&&(e={});var t=e.window,n=void 0===t?document.defaultView:t,i=n.history;function r(){var e=Ee(n.location.hash.substr(1)),t=e.pathname,r=void 0===t?"/":t,a=e.search,o=void 0===a?"":a,l=e.hash,s=void 0===l?"":l,c=i.state||{};return[c.idx,{pathname:r,search:o,hash:s,state:c.usr||null,key:c.key||"default"}]}var a=null;function o(){if(a)d.call(a),a=null;else{var e=Ne.Pop,t=r(),n=t[0],i=t[1];if(d.length){if(null!=n){var o=c-n;o&&(a={action:e,location:i,retry:function(){g(-1*o)}},g(o))}}else v(e)}}n.addEventListener("popstate",o),n.addEventListener("hashchange",(function(){Pe(r()[1])!==Pe(u)&&o()}));var l=Ne.Pop,s=r(),c=s[0],u=s[1],_=Se(),d=Se();function p(e){return function(){var e=document.querySelector("base"),t="";if(e&&e.getAttribute("href")){var i=n.location.href,r=i.indexOf("#");t=-1===r?i:i.slice(0,r)}return t}()+"#"+("string"==typeof e?e:Pe(e))}function f(e,t){return void 0===t&&(t=null),xe({pathname:u.pathname,hash:"",search:""},"string"==typeof e?Ee(e):e,{state:t,key:Ae()})}function h(e,t){return[{usr:e.state,key:e.key,idx:t},p(e)]}function m(e,t,n){return!d.length||(d.call({action:e,location:t,retry:n}),!1)}function v(e){l=e;var t=r();c=t[0],u=t[1],_.call({action:l,location:u})}function g(e){i.go(e)}null==c&&(c=0,i.replaceState(xe({},i.state,{idx:c}),""));var y={get action(){return l},get location(){return u},createHref:p,push:function e(t,r){var a=Ne.Push,o=f(t,r);if(m(a,o,(function(){e(t,r)}))){var l=h(o,c+1),s=l[0],u=l[1];try{i.pushState(s,"",u)}catch(e){n.location.assign(u)}v(a)}},replace:function e(t,n){var r=Ne.Replace,a=f(t,n);if(m(r,a,(function(){e(t,n)}))){var o=h(a,c),l=o[0],s=o[1];i.replaceState(l,"",s),v(r)}},go:g,back:function(){g(-1)},forward:function(){g(1)},listen:function(e){return _.push(e)},block:function(e){var t=d.push(e);return 1===d.length&&n.addEventListener("beforeunload",Ce),function(){t(),d.length||n.removeEventListener("beforeunload",Ce)}}};return y}function Ce(e){e.preventDefault(),e.returnValue=""}function Se(){var e=[];return{get length(){return e.length},push:function(t){return e.push(t),function(){e=e.filter((function(e){return e!==t}))}},call:function(t){e.forEach((function(e){return e&&e(t)}))}}}function Ae(){return Math.random().toString(36).substr(2,8)}function Pe(e){var t=e.pathname,n=void 0===t?"/":t,i=e.search,r=void 0===i?"":i,a=e.hash,o=void 0===a?"":a;return r&&"?"!==r&&(n+="?"===r.charAt(0)?r:"?"+r),o&&"#"!==o&&(n+="#"===o.charAt(0)?o:"#"+o),n}function Ee(e){var t={};if(e){var n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));var i=e.indexOf("?");i>=0&&(t.search=e.substr(i),e=e.substr(0,i)),e&&(t.pathname=e)}return t}const qe=e=>d("div",{className:"logo",style:{...e}},d("span",null,"Flex"),d("span",null,"b"),d("span",null,"o"),d("span",null,"a"),d("span",null,"r"),d("span",null,"d"),d("span",{className:"red40"},".")),Le=()=>d("div",{className:"logo-container"},d("div",{className:"logo-icon"},d("div",{className:"logo-card is-red"}),d("div",{className:"logo-card is-blue"}),d("div",{className:"logo-card is-green"})),d("div",{className:"logo-text grey50"},d("div",null,d("span",null,"Flexboard"),d("span",{className:"red40"},".")),d("div",{className:"is-text-xs grey30"},"The news forwarder")));var Fe=["className","activeClass","activeClassName","path"];function Ue(e){var t=e.className,n=e.activeClass,i=e.activeClassName,r=e.path,a=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t.indexOf(n=a[i])>=0||(r[n]=e[n]);return r}(e,Fe),o=de()[0],l=r&&o.path&&te(o.path,r,{})||te(o.url,a.href,{}),s=a.class||t||"",c=l&&(n||i)||"";return a.class=s+(s&&c&&" ")+c,d(ke,a)}const He=()=>d("div",{className:"tabs"},d(Ue,{className:"tab",activeClassName:"is-active",href:"/seeds"},d("ion-icon",{name:"newspaper"})),d(Ue,{className:"tab",activeClassName:"is-active",href:"/search"},d("ion-icon",{name:"search"})),d(Ue,{className:"tab",activeClassName:"is-active",href:"/messages"},d("ion-icon",{name:"at"})),d(Ue,{className:"tab",activeClassName:"is-active",href:"/indices"},d("ion-icon",{name:"bar-chart"})),d(Ue,{className:"tab",activeClassName:"is-active",href:"/settings"},d("ion-icon",{name:"menu"}))),Te=e=>d("div",{className:"header"},d("div",{className:"header-logo"},d(qe,null))),Oe=e=>{const t={onClick:()=>fe(`/seeds/${e.id}`)};return"small"===e.size?d("div",{className:"card is-small",...t},d("div",{className:"card-row"},d("div",{className:"card-img"},d("img",{src:"http://placekitten.com/160/160",alt:"cat"}))),d("div",{className:"card-row"},d("div",{className:"blue50"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia, excepturi."),d("div",{className:"is-text-xs grey40"},"24 Feb, 2022")),d("div",{className:"card-row"},d("ion-icon",{name:"bookmark-outline"}),d("ion-icon",{name:"calendar-outline"}))):d("div",{className:"card",...t},d("div",{className:"card-row has-padding-vertical-2"},d("span",{className:"grey40 is-text-s"},"label")),d("div",{className:"card-row"},d("div",{className:"card-img"},d("img",{src:"http://placekitten.com/160/160",alt:"cat"}))),d("div",{className:"card-row has-padding-vertical-2"},d("div",{className:"card-title"},"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis harum repellendus dignissimos amet temporibus!")))},De=(new Date).toISOString().split("T")[0],Ie=e=>{const[t,n]=K(De),[i,r]=K([]),[a,o]=K({}),[l,s]=K("CCFI"),[c,u]=K([]),_=e=>{const t=window.shanghaiFreightIndices.get(e),n=t[l]||[];o(t),r(n),u(Object.keys(t))},p=()=>{setTimeout((async()=>{if(window.innerHeight<window.innerWidth){const e=document.getElementById("indices"),t=document.querySelector("#indices .indices-table");if(e)try{await e.requestFullscreen(),t?.classList?.add("is-full-screen")}catch(e){console.error(e)}}else if(document.fullscreenElement){document.exitFullscreen();document.querySelector("#indices .indices-table")?.classList?.remove("is-full-screen")}}),100)};return V((()=>{p(),window.addEventListener("orientationchange",p)}),[]),V((()=>{t?(e=>{let t=e;if(/^\d{4}-\d{2}-\d{2}$/.test(t)&&(t=t.replaceAll("-","")),window.shanghaiFreightIndices&&window.shanghaiFreightIndices.has(t))_(t);else{const e=document.createElement("script");e.onload=()=>_(t),e.onerror=console.log,e.src="data/"+t+".js",document.body.appendChild(e)}})(t):n(De)}),[t]),V((()=>{const e=a[l]||[];r(e)}),[a,l]),d("div",{className:"indices",id:"indices"},d("div",{className:"indices-actions"},d("div",{className:"indices-action"},d("input",{type:"date",name:"date",id:"indicesdate",onChange:e=>{const t=e?.target?.value||"";/^\d{8}$|^\d{4}-\d{2}-\d{2}$/.test(t)&&n(t)},value:t})),d("div",{className:"indices-action"},d("select",{name:"indices",id:"indicestype",onChange:e=>{s(e?.target?.value||"CCFI")}},c.map(((e,t)=>d("option",{label:e,key:t},e)))))),d("div",{className:"indices-header"},(i[0]?.[0]||{}).text),d("div",{className:"indices-table"},d("table",{className:"table"},i.slice(1).map(((e,t)=>d("tr",{key:`row${t}`},e.map(((e,t)=>"td"===e.tag?d("td",{key:`cell${t}`,colSpan:e.colspan||1,rowSpan:e.rowspan||1},e.text):d("th",{key:`cell${t}`,colSpan:e.colspan||1,rowSpan:e.rowspan||1},e.text)))))))))},Me=e=>d("div",{className:"search"},d("div",{className:"search-row"},d("div",{className:"search-input"},d("input",{placeholder:"Try Flexport...",type:"text"}),d("ion-icon",{name:"search"}))),d("br",null),d("br",null),d("div",{className:"search-row"},d("div",{className:"search-title"},"Featured Topics"),d("div",{className:"search-item"},"Flexport"),d("div",{className:"search-item"},"Shipments"),d("div",{className:"search-item"},"Air shipment")),d("div",{className:"search-row"},d("div",{className:"search-title"},"Histories"),d("div",{className:"search-item"},"abc"),d("div",{className:"search-item"},"bbc"))),Re=new Array(50).fill(0),$e=e=>d("div",{className:"cards"},Re.map(((e,t)=>d(Oe,0===t?null:{size:"small"})))),We=e=>d(f,null,d("div",{className:"setting-group"},d("div",{className:"setting-item"},"Account"),d("div",{className:"setting-item"},"Language")),d("div",{className:"setting-group"},d("div",{className:"setting-item"},"About Flexboard"))),je=()=>d("div",{className:"is-full-screen is-all-center"},d(Le,null)),Be=e=>(V((()=>{fe(e.to,!0)}),[]),null),Ke=e=>d("div",null,"Messages"),Ve=e=>d("div",{className:"article"},d("div",{className:"article-actions is-level"},d("div",{className:"is-level-left",onClick:()=>{history.back()}},d("ion-icon",{name:"chevron-back"})),d("div",{className:"is-level-right"},d("ion-icon",{name:"bookmark-outline"}))),d("div",{className:"article-thumbnail"},d("img",{src:"http://placekitten.com/640/360",alt:"cat"})),d("div",{className:"article-title"},"Lorem ipsum dolor sit amet consectetur adipisicing."),d("div",{className:"article-label"},d("div",null,"Author: Davy Jones"),d("div",null,"Published at: 28 Feb, 2022")),d("hr",null),d("div",{className:"article-content"},d("p",{className:"first-paragraph"},"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia molestias consequatur, cupiditate repudiandae modi cumque illum maiores harum? Repellat molestias nobis accusamus, quos harum perspiciatis cupiditate minus animi atque exercitationem! Ullam distinctio quas nobis."),d("p",null,"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam vero quam veritatis consectetur numquam quia ex. Aspernatur rem dolore rerum facilis sequi ipsum fugiat autem ea quasi quaerat beatae, nobis blanditiis impedit dicta aliquid voluptas totam sed dolorum at ullam. Incidunt, cumque! At, ad explicabo?"),d("p",null,"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam maxime reprehenderit eius enim neque?"),d("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque mollitia error, iure doloribus ipsam, voluptas, corrupti iusto accusantium cupiditate perferendis tempore laborum libero magni dolorum. Nihil, ipsum rem id nemo molestias dolore, ducimus recusandae perferendis quam temporibus voluptatem! Esse accusantium cupiditate id ad placeat modi dolore culpa non tempore saepe sequi molestiae, maiores enim sint alias facilis expedita possimus earum eaque velit praesentium est. Porro corrupti similique, fugit blanditiis tenetur aliquam veniam maxime molestiae iste, beatae, distinctio fuga!"),d("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit inventore ab nesciunt quisquam enim vel sunt. Debitis quaerat odio placeat voluptas magni. Praesentium.")),d("hr",null)),ze=["seeds","search","indices","messages","settings"],Ge=e=>{const{rest:t}=e;return d(f,null,d(He,null),d("div",{className:"container"},d("div",{className:"page"},"seeds"===t&&d($e,null),"search"===t&&d(Me,null),"indices"===t&&d(Ie,null),"messages"===t&&d(Ke,null),"settings"===t&&d(We,null),!1===ze.includes(t||"")&&d(Be,{default:!0,to:"/seeds"}),d(Te,null))))};U(d((()=>{const e=we(),[t,n]=K(!0);return V((()=>{setTimeout((()=>{n(!1)}),Math.round(100*Math.random()))}),[]),t?d(je,null):d(f,null,d(be,{history:e},d(Ve,{path:"/seeds/:id"}),d(Ge,{path:"/:rest*"})))}),null),document.getElementById("root"));