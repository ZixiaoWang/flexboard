var e,t,n,r,o,i,a,l={},u=[],s=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function _(e,t){for(var n in t)e[n]=t[n];return e}function c(e){var t=e.parentNode;t&&t.removeChild(e)}function f(t,n,r){var o,i,a,l={};for(a in n)"key"==a?o=n[a]:"ref"==a?i=n[a]:l[a]=n[a];if(arguments.length>2&&(l.children=arguments.length>3?e.call(arguments,2):r),"function"==typeof t&&null!=t.defaultProps)for(a in t.defaultProps)void 0===l[a]&&(l[a]=t.defaultProps[a]);return h(t,l,o,i,null)}function h(e,r,o,i,a){var l={type:e,props:r,key:o,ref:i,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==a?++n:a};return null==a&&null!=t.vnode&&t.vnode(l),l}function p(e){return e.children}function d(e,t){this.props=e,this.context=t}function v(e,t){if(null==t)return e.__?v(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e)return n.__e;return"function"==typeof e.type?v(e):null}function m(e){var t,n;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e){e.__e=e.__c.base=n.__e;break}return m(e)}}function g(e){(!e.__d&&(e.__d=!0)&&r.push(e)&&!y.__r++||i!==t.debounceRendering)&&((i=t.debounceRendering)||o)(y)}function y(){for(var e;y.__r=r.length;)e=r.sort((function(e,t){return e.__v.__b-t.__v.__b})),r=[],e.some((function(e){var t,n,r,o,i,a;e.__d&&(i=(o=(t=e).__v).__e,(a=t.__P)&&(n=[],(r=_({},o)).__v=o.__v+1,S(a,o,r,t.__n,void 0!==a.ownerSVGElement,null!=o.__h?[i]:null,n,null==i?v(o):i,o.__h),E(n,o),o.__e!=i&&m(o)))}))}function b(e,t,n,r,o,i,a,s,_,c){var f,d,m,g,y,b,N,C=r&&r.__k||u,P=C.length;for(n.__k=[],f=0;f<t.length;f++)if(null!=(g=n.__k[f]=null==(g=t[f])||"boolean"==typeof g?null:"string"==typeof g||"number"==typeof g||"bigint"==typeof g?h(null,g,null,null,g):Array.isArray(g)?h(p,{children:g},null,null,null):g.__b>0?h(g.type,g.props,g.key,null,g.__v):g)){if(g.__=n,g.__b=n.__b+1,null===(m=C[f])||m&&g.key==m.key&&g.type===m.type)C[f]=void 0;else for(d=0;d<P;d++){if((m=C[d])&&g.key==m.key&&g.type===m.type){C[d]=void 0;break}m=null}S(e,g,m=m||l,o,i,a,s,_,c),y=g.__e,(d=g.ref)&&m.ref!=d&&(N||(N=[]),m.ref&&N.push(m.ref,null,g),N.push(d,g.__c||y,g)),null!=y?(null==b&&(b=y),"function"==typeof g.type&&g.__k===m.__k?g.__d=_=k(g,_,e):_=x(e,g,m,C,y,_),"function"==typeof n.type&&(n.__d=_)):_&&m.__e==_&&_.parentNode!=e&&(_=v(m))}for(n.__e=b,f=P;f--;)null!=C[f]&&("function"==typeof n.type&&null!=C[f].__e&&C[f].__e==n.__d&&(n.__d=v(r,f+1)),H(C[f],C[f]));if(N)for(f=0;f<N.length;f++)U(N[f],N[++f],N[++f])}function k(e,t,n){for(var r,o=e.__k,i=0;o&&i<o.length;i++)(r=o[i])&&(r.__=e,t="function"==typeof r.type?k(r,t,n):x(n,r,r,o,r.__e,t));return t}function N(e,t){return t=t||[],null==e||"boolean"==typeof e||(Array.isArray(e)?e.some((function(e){N(e,t)})):t.push(e)),t}function x(e,t,n,r,o,i){var a,l,u;if(void 0!==t.__d)a=t.__d,t.__d=void 0;else if(null==n||o!=i||null==o.parentNode)e:if(null==i||i.parentNode!==e)e.appendChild(o),a=null;else{for(l=i,u=0;(l=l.nextSibling)&&u<r.length;u+=2)if(l==o)break e;e.insertBefore(o,i),a=i}return void 0!==a?a:o.nextSibling}function C(e,t,n){"-"===t[0]?e.setProperty(t,n):e[t]=null==n?"":"number"!=typeof n||s.test(t)?n:n+"px"}function P(e,t,n,r,o){var i;e:if("style"===t)if("string"==typeof n)e.style.cssText=n;else{if("string"==typeof r&&(e.style.cssText=r=""),r)for(t in r)n&&t in n||C(e.style,t,"");if(n)for(t in n)r&&n[t]===r[t]||C(e.style,t,n[t])}else if("o"===t[0]&&"n"===t[1])i=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+i]=n,n?r||e.addEventListener(t,i?w:A,i):e.removeEventListener(t,i?w:A,i);else if("dangerouslySetInnerHTML"!==t){if(o)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("href"!==t&&"list"!==t&&"form"!==t&&"tabIndex"!==t&&"download"!==t&&t in e)try{e[t]=null==n?"":n;break e}catch(e){}"function"==typeof n||(null!=n&&(!1!==n||"a"===t[0]&&"r"===t[1])?e.setAttribute(t,n):e.removeAttribute(t))}}function A(e){this.l[e.type+!1](t.event?t.event(e):e)}function w(e){this.l[e.type+!0](t.event?t.event(e):e)}function S(n,r,o,i,a,u,s,f,h){var m,g,y,k,N,x,C,A,w,S,E,U=r.type;if(void 0!==r.constructor)return null;null!=o.__h&&(h=o.__h,f=r.__e=o.__e,r.__h=null,u=[f]),(m=t.__b)&&m(r);try{e:if("function"==typeof U){if(A=r.props,w=(m=U.contextType)&&i[m.__c],S=m?w?w.props.value:m.__:i,o.__c?C=(g=r.__c=o.__c).__=g.__E:("prototype"in U&&U.prototype.render?r.__c=g=new U(A,S):(r.__c=g=new d(A,S),g.constructor=U,g.render=T),w&&w.sub(g),g.props=A,g.state||(g.state={}),g.context=S,g.__n=i,y=g.__d=!0,g.__h=[]),null==g.__s&&(g.__s=g.state),null!=U.getDerivedStateFromProps&&(g.__s==g.state&&(g.__s=_({},g.__s)),_(g.__s,U.getDerivedStateFromProps(A,g.__s))),k=g.props,N=g.state,y)null==U.getDerivedStateFromProps&&null!=g.componentWillMount&&g.componentWillMount(),null!=g.componentDidMount&&g.__h.push(g.componentDidMount);else{if(null==U.getDerivedStateFromProps&&A!==k&&null!=g.componentWillReceiveProps&&g.componentWillReceiveProps(A,S),!g.__e&&null!=g.shouldComponentUpdate&&!1===g.shouldComponentUpdate(A,g.__s,S)||r.__v===o.__v){g.props=A,g.state=g.__s,r.__v!==o.__v&&(g.__d=!1),g.__v=r,r.__e=o.__e,r.__k=o.__k,r.__k.forEach((function(e){e&&(e.__=r)})),g.__h.length&&s.push(g);break e}null!=g.componentWillUpdate&&g.componentWillUpdate(A,g.__s,S),null!=g.componentDidUpdate&&g.__h.push((function(){g.componentDidUpdate(k,N,x)}))}g.context=S,g.props=A,g.state=g.__s,(m=t.__r)&&m(r),g.__d=!1,g.__v=r,g.__P=n,m=g.render(g.props,g.state,g.context),g.state=g.__s,null!=g.getChildContext&&(i=_(_({},i),g.getChildContext())),y||null==g.getSnapshotBeforeUpdate||(x=g.getSnapshotBeforeUpdate(k,N)),E=null!=m&&m.type===p&&null==m.key?m.props.children:m,b(n,Array.isArray(E)?E:[E],r,o,i,a,u,s,f,h),g.base=r.__e,r.__h=null,g.__h.length&&s.push(g),C&&(g.__E=g.__=null),g.__e=!1}else null==u&&r.__v===o.__v?(r.__k=o.__k,r.__e=o.__e):r.__e=function(t,n,r,o,i,a,u,s){var _,f,h,p=r.props,d=n.props,m=n.type,g=0;if("svg"===m&&(i=!0),null!=a)for(;g<a.length;g++)if((_=a[g])&&"setAttribute"in _==!!m&&(m?_.localName===m:3===_.nodeType)){t=_,a[g]=null;break}if(null==t){if(null===m)return document.createTextNode(d);t=i?document.createElementNS("http://www.w3.org/2000/svg",m):document.createElement(m,d.is&&d),a=null,s=!1}if(null===m)p===d||s&&t.data===d||(t.data=d);else{if(a=a&&e.call(t.childNodes),f=(p=r.props||l).dangerouslySetInnerHTML,h=d.dangerouslySetInnerHTML,!s){if(null!=a)for(p={},g=0;g<t.attributes.length;g++)p[t.attributes[g].name]=t.attributes[g].value;(h||f)&&(h&&(f&&h.__html==f.__html||h.__html===t.innerHTML)||(t.innerHTML=h&&h.__html||""))}if(function(e,t,n,r,o){var i;for(i in n)"children"===i||"key"===i||i in t||P(e,i,null,n[i],r);for(i in t)o&&"function"!=typeof t[i]||"children"===i||"key"===i||"value"===i||"checked"===i||n[i]===t[i]||P(e,i,t[i],n[i],r)}(t,d,p,i,s),h)n.__k=[];else if(g=n.props.children,b(t,Array.isArray(g)?g:[g],n,r,o,i&&"foreignObject"!==m,a,u,a?a[0]:r.__k&&v(r,0),s),null!=a)for(g=a.length;g--;)null!=a[g]&&c(a[g]);s||("value"in d&&void 0!==(g=d.value)&&(g!==t.value||"progress"===m&&!g||"option"===m&&g!==p.value)&&P(t,"value",g,p.value,!1),"checked"in d&&void 0!==(g=d.checked)&&g!==t.checked&&P(t,"checked",g,p.checked,!1))}return t}(o.__e,r,o,i,a,u,s,h);(m=t.diffed)&&m(r)}catch(e){r.__v=null,(h||null!=u)&&(r.__e=f,r.__h=!!h,u[u.indexOf(f)]=null),t.__e(e,r,o)}}function E(e,n){t.__c&&t.__c(n,e),e.some((function(n){try{e=n.__h,n.__h=[],e.some((function(e){e.call(n)}))}catch(e){t.__e(e,n.__v)}}))}function U(e,n,r){try{"function"==typeof e?e(n):e.current=n}catch(e){t.__e(e,r)}}function H(e,n,r){var o,i;if(t.unmount&&t.unmount(e),(o=e.ref)&&(o.current&&o.current!==e.__e||U(o,null,n)),null!=(o=e.__c)){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(e){t.__e(e,n)}o.base=o.__P=null}if(o=e.__k)for(i=0;i<o.length;i++)o[i]&&H(o[i],n,"function"!=typeof e.type);r||null==e.__e||c(e.__e),e.__e=e.__d=void 0}function T(e,t,n){return this.constructor(e,n)}function L(n,r,o){var i,a,u;t.__&&t.__(n,r),a=(i="function"==typeof o)?null:o&&o.__k||r.__k,u=[],S(r,n=(!i&&o||r).__k=f(p,null,[n]),a||l,l,void 0!==r.ownerSVGElement,!i&&o?[o]:a?null:r.firstChild?e.call(r.childNodes):null,u,!i&&o?o:a?a.__e:r.firstChild,i),E(u,n)}e=u.slice,t={__e:function(e,t,n,r){for(var o,i,a;t=t.__;)if((o=t.__c)&&!o.__)try{if((i=o.constructor)&&null!=i.getDerivedStateFromError&&(o.setState(i.getDerivedStateFromError(e)),a=o.__d),null!=o.componentDidCatch&&(o.componentDidCatch(e,r||{}),a=o.__d),a)return o.__E=o}catch(t){e=t}throw e}},n=0,d.prototype.setState=function(e,t){var n;n=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=_({},this.state),"function"==typeof e&&(e=e(_({},n),this.props)),e&&_(n,e),null!=e&&this.__v&&(t&&this.__h.push(t),g(this))},d.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),g(this))},d.prototype.render=p,r=[],o="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,y.__r=0,a=0;var O,F,D,M=0,R=[],W=t.__b,I=t.__r,$=t.diffed,j=t.__c,q=t.unmount;function B(e,n){t.__h&&t.__h(F,e,M||n),M=0;var r=F.__H||(F.__H={__:[],__h:[]});return e>=r.__.length&&r.__.push({}),r.__[e]}function K(e){return M=1,t=Y,n=e,(o=B(O++,2)).t=t,o.__c||(o.__=[r?r(n):Y(void 0,n),function(e){var t=o.t(o.__[0],e);o.__[0]!==t&&(o.__=[t,o.__[1]],o.__c.setState({}))}],o.__c=F),o.__;var t,n,r,o}function V(e,n){var r=B(O++,3);!t.__s&&X(r.__H,n)&&(r.__=e,r.__H=n,F.__H.__h.push(r))}function G(){for(var e;e=R.shift();)if(e.__P)try{e.__H.__h.forEach(J),e.__H.__h.forEach(Q),e.__H.__h=[]}catch(n){e.__H.__h=[],t.__e(n,e.__v)}}t.__b=function(e){F=null,W&&W(e)},t.__r=function(e){I&&I(e),O=0;var t=(F=e.__c).__H;t&&(t.__h.forEach(J),t.__h.forEach(Q),t.__h=[])},t.diffed=function(e){$&&$(e);var n=e.__c;n&&n.__H&&n.__H.__h.length&&(1!==R.push(n)&&D===t.requestAnimationFrame||((D=t.requestAnimationFrame)||function(e){var t,n=function(){clearTimeout(r),z&&cancelAnimationFrame(t),setTimeout(e)},r=setTimeout(n,100);z&&(t=requestAnimationFrame(n))})(G)),F=null},t.__c=function(e,n){n.some((function(e){try{e.__h.forEach(J),e.__h=e.__h.filter((function(e){return!e.__||Q(e)}))}catch(r){n.some((function(e){e.__h&&(e.__h=[])})),n=[],t.__e(r,e.__v)}})),j&&j(e,n)},t.unmount=function(e){q&&q(e);var n,r=e.__c;r&&r.__H&&(r.__H.__.forEach((function(e){try{J(e)}catch(e){n=e}})),n&&t.__e(n,r.__v))};var z="function"==typeof requestAnimationFrame;function J(e){var t=F,n=e.__c;"function"==typeof n&&(e.__c=void 0,n()),F=t}function Q(e){var t=F;e.__c=e.__(),F=t}function X(e,t){return!e||e.length!==t.length||t.some((function(t,n){return t!==e[n]}))}function Y(e,t){return"function"==typeof t?t(e):t}var Z={};function ee(e,t){for(var n in t)e[n]=t[n];return e}function te(e,t,n){var r,o=/(?:\?([^#]*))?(#.*)?$/,i=e.match(o),a={};if(i&&i[1])for(var l=i[1].split("&"),u=0;u<l.length;u++){var s=l[u].split("=");a[decodeURIComponent(s[0])]=decodeURIComponent(s.slice(1).join("="))}e=oe(e.replace(o,"")),t=oe(t||"");for(var _=Math.max(e.length,t.length),c=0;c<_;c++)if(t[c]&&":"===t[c].charAt(0)){var f=t[c].replace(/(^:|[+*?]+$)/g,""),h=(t[c].match(/[+*?]+$/)||Z)[0]||"",p=~h.indexOf("+"),d=~h.indexOf("*"),v=e[c]||"";if(!v&&!d&&(h.indexOf("?")<0||p)){r=!1;break}if(a[f]=decodeURIComponent(v),p||d){a[f]=e.slice(c).map(decodeURIComponent).join("/");break}}else if(t[c]!==e[c]){r=!1;break}return(!0===n.default||!1!==r)&&a}function ne(e,t){return e.rank<t.rank?1:e.rank>t.rank?-1:e.index-t.index}function re(e,t){return e.index=t,e.rank=(n=e).props.default?0:oe(n.props.path).map(ie).join(""),e.props;var n}function oe(e){return e.replace(/(^\/+|\/+$)/g,"").split("/")}function ie(e){return":"==e.charAt(0)?1+"*+?".indexOf(e.charAt(e.length-1))||4:5}var ae={},le=[],ue=[],se=null,_e={url:he()},ce=function(e,t){var n={__c:t="__cC"+a++,__:e,Consumer:function(e,t){return e.children(t)},Provider:function(e){var n,r;return this.getChildContext||(n=[],(r={})[t]=this,this.getChildContext=function(){return r},this.shouldComponentUpdate=function(e){this.props.value!==e.value&&n.some(g)},this.sub=function(e){n.push(e);var t=e.componentWillUnmount;e.componentWillUnmount=function(){n.splice(n.indexOf(e),1),t&&t.call(e)}}),e.children}};return n.Provider.__=n.Consumer.contextType=n}(_e);function fe(){var e=function(e){var t=F.context[e.__c],n=B(O++,9);return n.c=e,t?(null==n.__&&(n.__=!0,t.sub(F)),t.props.value):e.__}(ce);if(e===_e){var t=K()[1];V((function(){return ue.push(t),function(){return ue.splice(ue.indexOf(t),1)}}),[])}return[e,pe]}function he(){var e;return""+((e=se&&se.location?se.location:se&&se.getCurrentLocation?se.getCurrentLocation():"undefined"!=typeof location?location:ae).pathname||"")+(e.search||"")}function pe(e,t){return void 0===t&&(t=!1),"string"!=typeof e&&e.url&&(t=e.replace,e=e.url),function(e){for(var t=le.length;t--;)if(le[t].canRoute(e))return!0;return!1}(e)&&(n=e,void 0===(r=t?"replace":"push")&&(r="push"),se&&se[r]?se[r](n):"undefined"!=typeof history&&history[r+"State"]&&history[r+"State"](null,null,n)),de(e);var n,r}function de(e){for(var t=!1,n=0;n<le.length;n++)le[n].routeTo(e)&&(t=!0);return t}function ve(e){if(e&&e.getAttribute){var t=e.getAttribute("href"),n=e.getAttribute("target");if(t&&t.match(/^\//g)&&(!n||n.match(/^_?self$/i)))return pe(t)}}function me(e){return e.stopImmediatePropagation&&e.stopImmediatePropagation(),e.stopPropagation&&e.stopPropagation(),e.preventDefault(),!1}function ge(e){if(!(e.ctrlKey||e.metaKey||e.altKey||e.shiftKey||e.button)){var t=e.target;do{if("a"===t.localName&&t.getAttribute("href")){if(t.hasAttribute("data-native")||t.hasAttribute("native"))return;if(ve(t))return me(e)}}while(t=t.parentNode)}}var ye=!1;function be(e){e.history&&(se=e.history),this.state={url:e.url||he()}}ee(be.prototype=new d,{shouldComponentUpdate:function(e){return!0!==e.static||e.url!==this.props.url||e.onChange!==this.props.onChange},canRoute:function(e){var t=N(this.props.children);return void 0!==this.g(t,e)},routeTo:function(e){this.setState({url:e});var t=this.canRoute(e);return this.p||this.forceUpdate(),t},componentWillMount:function(){this.p=!0},componentDidMount:function(){var e=this;ye||(ye=!0,se||addEventListener("popstate",(function(){de(he())})),addEventListener("click",ge)),le.push(this),se&&(this.u=se.listen((function(t){var n=t.location||t;e.routeTo(""+(n.pathname||"")+(n.search||""))}))),this.p=!1},componentWillUnmount:function(){"function"==typeof this.u&&this.u(),le.splice(le.indexOf(this),1)},componentWillUpdate:function(){this.p=!0},componentDidUpdate:function(){this.p=!1},g:function(e,t){e=e.filter(re).sort(ne);for(var n=0;n<e.length;n++){var r=e[n],o=te(t,r.props.path,r.props);if(o)return[r,o]}},render:function(t,n){var r,o,i=t.onChange,a=n.url,l=this.c,u=this.g(N(t.children),a);if(u&&(o=function(t,n,r){var o,i,a,l=_({},t.props);for(a in n)"key"==a?o=n[a]:"ref"==a?i=n[a]:l[a]=n[a];return arguments.length>2&&(l.children=arguments.length>3?e.call(arguments,2):r),h(t.type,l,o||t.key,i||t.ref,null)}(u[0],ee(ee({url:a,matches:r=u[1]},r),{key:void 0,ref:void 0}))),a!==(l&&l.url)){ee(_e,l=this.c={url:a,previous:l&&l.url,current:o,path:o?o.props.path:null,matches:r}),l.router=this,l.active=o?[o]:[];for(var s=ue.length;s--;)ue[s]({});"function"==typeof i&&i(l)}return f(ce.Provider,{value:l},o)}});var ke,Ne=function(e){return f("a",ee({onClick:ge},e))};function xe(){return xe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},xe.apply(this,arguments)}!function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"}(ke||(ke={}));function Ce(e){void 0===e&&(e={});var t=e.window,n=void 0===t?document.defaultView:t,r=n.history;function o(){var e=Ee(n.location.hash.substr(1)),t=e.pathname,o=void 0===t?"/":t,i=e.search,a=void 0===i?"":i,l=e.hash,u=void 0===l?"":l,s=r.state||{};return[s.idx,{pathname:o,search:a,hash:u,state:s.usr||null,key:s.key||"default"}]}var i=null;function a(){if(i)f.call(i),i=null;else{var e=ke.Pop,t=o(),n=t[0],r=t[1];if(f.length){if(null!=n){var a=s-n;a&&(i={action:e,location:r,retry:function(){g(-1*a)}},g(a))}}else m(e)}}n.addEventListener("popstate",a),n.addEventListener("hashchange",(function(){Se(o()[1])!==Se(_)&&a()}));var l=ke.Pop,u=o(),s=u[0],_=u[1],c=Ae(),f=Ae();function h(e){return function(){var e=document.querySelector("base"),t="";if(e&&e.getAttribute("href")){var r=n.location.href,o=r.indexOf("#");t=-1===o?r:r.slice(0,o)}return t}()+"#"+("string"==typeof e?e:Se(e))}function p(e,t){return void 0===t&&(t=null),xe({pathname:_.pathname,hash:"",search:""},"string"==typeof e?Ee(e):e,{state:t,key:we()})}function d(e,t){return[{usr:e.state,key:e.key,idx:t},h(e)]}function v(e,t,n){return!f.length||(f.call({action:e,location:t,retry:n}),!1)}function m(e){l=e;var t=o();s=t[0],_=t[1],c.call({action:l,location:_})}function g(e){r.go(e)}null==s&&(s=0,r.replaceState(xe({},r.state,{idx:s}),""));var y={get action(){return l},get location(){return _},createHref:h,push:function e(t,o){var i=ke.Push,a=p(t,o);if(v(i,a,(function(){e(t,o)}))){var l=d(a,s+1),u=l[0],_=l[1];try{r.pushState(u,"",_)}catch(e){n.location.assign(_)}m(i)}},replace:function e(t,n){var o=ke.Replace,i=p(t,n);if(v(o,i,(function(){e(t,n)}))){var a=d(i,s),l=a[0],u=a[1];r.replaceState(l,"",u),m(o)}},go:g,back:function(){g(-1)},forward:function(){g(1)},listen:function(e){return c.push(e)},block:function(e){var t=f.push(e);return 1===f.length&&n.addEventListener("beforeunload",Pe),function(){t(),f.length||n.removeEventListener("beforeunload",Pe)}}};return y}function Pe(e){e.preventDefault(),e.returnValue=""}function Ae(){var e=[];return{get length(){return e.length},push:function(t){return e.push(t),function(){e=e.filter((function(e){return e!==t}))}},call:function(t){e.forEach((function(e){return e&&e(t)}))}}}function we(){return Math.random().toString(36).substr(2,8)}function Se(e){var t=e.pathname,n=void 0===t?"/":t,r=e.search,o=void 0===r?"":r,i=e.hash,a=void 0===i?"":i;return o&&"?"!==o&&(n+="?"===o.charAt(0)?o:"?"+o),a&&"#"!==a&&(n+="#"===a.charAt(0)?a:"#"+a),n}function Ee(e){var t={};if(e){var n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));var r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}const Ue=e=>f("div",{className:"logo",style:{...e}},f("span",null,"Flex"),f("span",null,"b"),f("span",null,"o"),f("span",null,"a"),f("span",null,"r"),f("span",null,"d"),f("span",{className:"red40"},".")),He=()=>f("div",{className:"logo-container"},f("div",{className:"logo-icon"},f("div",{className:"logo-card is-red"}),f("div",{className:"logo-card is-blue"}),f("div",{className:"logo-card is-green"})),f("div",{className:"logo-text grey50"},f("div",null,f("span",null,"Flexboard"),f("span",{className:"red40"},".")),f("div",{className:"is-text-xs grey30"},"The news forwarder")));var Te=["className","activeClass","activeClassName","path"];function Le(e){var t=e.className,n=e.activeClass,r=e.activeClassName,o=e.path,i=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t.indexOf(n=i[r])>=0||(o[n]=e[n]);return o}(e,Te),a=fe()[0],l=o&&a.path&&te(a.path,o,{})||te(a.url,i.href,{}),u=i.class||t||"",s=l&&(n||r)||"";return i.class=u+(u&&s&&" ")+s,f(Ne,i)}const Oe=()=>f("div",{className:"tabs"},f(Le,{className:"tab",activeClassName:"is-active",href:"/seeds"},f("ion-icon",{name:"newspaper"})),f(Le,{className:"tab",activeClassName:"is-active",href:"/search"},f("ion-icon",{name:"search"})),f(Le,{className:"tab",activeClassName:"is-active",href:"/bookmarks"},f("ion-icon",{name:"star"})),f(Le,{className:"tab",activeClassName:"is-active",href:"/settings"},f("ion-icon",{name:"menu"}))),Fe=e=>f("div",{className:"header"},f("div",{className:"header-logo"},f(Ue,null))),De=()=>f("div",{className:"card"},f("div",{className:"card-row has-padding-vertical-2"},f("span",{className:"grey40 is-text-s"},"label")),f("div",{className:"card-row"},f("div",{className:"card-img"},f("img",{src:"http://placekitten.com/160/90",alt:"cat"}))),f("div",{className:"card-row has-padding-vertical-2"},f("div",{className:"card-title"},"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis harum repellendus dignissimos amet temporibus!"))),Me=e=>f("div",{className:"bookmarks"},"bookmarks page"),Re=e=>f("div",{className:"search"},f("div",{className:"search-row"},f("div",{className:"search-input"},f("input",{placeholder:"Try Flexport...",type:"text"}),f("ion-icon",{name:"search"}))),f("br",null),f("br",null),f("div",{className:"search-row"},f("div",{className:"search-title"},"Featured Topics"),f("div",{className:"search-item"},"Flexport"),f("div",{className:"search-item"},"Shipments"),f("div",{className:"search-item"},"Air shipment")),f("div",{className:"search-row"},f("div",{className:"search-title"},"Histories"),f("div",{className:"search-item"},"abc"),f("div",{className:"search-item"},"bbc"))),We=new Array(50).fill(0),Ie=e=>f("div",{className:"cards"},We.map((()=>f(De,null)))),$e=e=>f(p,null,f("div",{className:"setting-group"},f("div",{className:"setting-item"},"Account"),f("div",{className:"setting-item"},"Language")),f("div",{className:"setting-group"},f("div",{className:"setting-item"},"About Flexboard"))),je=()=>f("div",{className:"is-full-screen is-all-center"},f(He,null)),qe=e=>(V((()=>{pe(e.to,!0)}),[]),null);L(f((()=>{const e=Ce(),[t,n]=K(!0);return V((()=>{setTimeout((()=>{n(!1)}),Math.round(1*Math.random()))}),[]),t?f(je,null):f(p,null,f(Oe,null),f("div",{className:"container"},f("div",{className:"page"},f(be,{history:e},f(Ie,{path:"/seeds"}),f(Re,{path:"/search"}),f(Me,{path:"/bookmarks"}),f($e,{path:"/settings"}),f(qe,{default:!0,to:"/seeds"})),f(Fe,null))))}),null),document.getElementById("root"));