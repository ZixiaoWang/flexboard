// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"hgVRR":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "42036d7a98ade5a7";
module.bundle.HMR_BUNDLE_ID = "9499f149519c2ae5";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {};
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"fguh0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _preact = require("preact");
var _hooks = require("preact/hooks");
var _preactRouter = require("preact-router");
var _preactRouterDefault = parcelHelpers.interopDefault(_preactRouter);
var _history = require("history");
var _components = require("./components");
var _pages = require("./pages");
/** @jsx h */ var _mainScss = require("./styles/main.scss");
const App = ()=>{
    const hashHistory = _history.createHashHistory();
    const [splashVisibility, setSplashVisibility] = _hooks.useState(true);
    _hooks.useEffect(()=>{
        setTimeout(()=>{
            setSplashVisibility(false);
        }, Math.round(Math.random() * 100));
    }, []);
    if (splashVisibility) return /*#__PURE__*/ _preact.h(_pages.SplashPage, {
        __source: {
            fileName: "frontend/index.tsx",
            lineNumber: 36,
            columnNumber: 16
        },
        __self: undefined
    });
    return /*#__PURE__*/ _preact.h(_preact.Fragment, {
        __source: {
            fileName: "frontend/index.tsx",
            lineNumber: 40,
            columnNumber: 9
        },
        __self: undefined
    }, /*#__PURE__*/ _preact.h(_components.TabsComponent, {
        __source: {
            fileName: "frontend/index.tsx",
            lineNumber: 41,
            columnNumber: 13
        },
        __self: undefined
    }), /*#__PURE__*/ _preact.h("div", {
        className: "container",
        __source: {
            fileName: "frontend/index.tsx",
            lineNumber: 42,
            columnNumber: 13
        },
        __self: undefined
    }, /*#__PURE__*/ _preact.h("div", {
        className: "page",
        __source: {
            fileName: "frontend/index.tsx",
            lineNumber: 43,
            columnNumber: 17
        },
        __self: undefined
    }, /*#__PURE__*/ _preact.h(_preactRouterDefault.default, {
        history: hashHistory,
        __source: {
            fileName: "frontend/index.tsx",
            lineNumber: 45,
            columnNumber: 21
        },
        __self: undefined
    }, /*#__PURE__*/ _preact.h(_pages.SeedsPage, {
        path: "/seeds",
        __source: {
            fileName: "frontend/index.tsx",
            lineNumber: 46,
            columnNumber: 25
        },
        __self: undefined
    }), /*#__PURE__*/ _preact.h(_pages.SearchPage, {
        path: "/search",
        __source: {
            fileName: "frontend/index.tsx",
            lineNumber: 47,
            columnNumber: 25
        },
        __self: undefined
    }), /*#__PURE__*/ _preact.h(_pages.IndicesPage, {
        path: "/indices",
        __source: {
            fileName: "frontend/index.tsx",
            lineNumber: 48,
            columnNumber: 25
        },
        __self: undefined
    }), /*#__PURE__*/ _preact.h(_pages.MessagesPage, {
        path: "/messages",
        __source: {
            fileName: "frontend/index.tsx",
            lineNumber: 49,
            columnNumber: 25
        },
        __self: undefined
    }), /*#__PURE__*/ _preact.h(_pages.SettingsPage, {
        path: "/settings",
        __source: {
            fileName: "frontend/index.tsx",
            lineNumber: 50,
            columnNumber: 25
        },
        __self: undefined
    }), /*#__PURE__*/ _preact.h(_pages.Redirect, {
        default: true,
        to: "/seeds",
        __source: {
            fileName: "frontend/index.tsx",
            lineNumber: 51,
            columnNumber: 25
        },
        __self: undefined
    })), /*#__PURE__*/ _preact.h(_components.HeaderComponent, {
        __source: {
            fileName: "frontend/index.tsx",
            lineNumber: 53,
            columnNumber: 17
        },
        __self: undefined
    }))));
};
_preact.render(/*#__PURE__*/ _preact.h(App, {
    __source: {
        fileName: "frontend/index.tsx",
        lineNumber: 61,
        columnNumber: 5
    },
    __self: undefined
}), document.getElementById("root"));

},{"preact":"cwEwC","preact/hooks":"97VL9","preact-router":"gXK85","history":"5vYEI","./components":"1IJMQ","./pages":"9RWB4","./styles/main.scss":"8qykB","@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"cwEwC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "render", ()=>S
);
parcelHelpers.export(exports, "hydrate", ()=>q
);
parcelHelpers.export(exports, "createElement", ()=>v
);
parcelHelpers.export(exports, "h", ()=>v
);
parcelHelpers.export(exports, "Fragment", ()=>d
);
parcelHelpers.export(exports, "createRef", ()=>p
);
parcelHelpers.export(exports, "isValidElement", ()=>i
);
parcelHelpers.export(exports, "Component", ()=>_
);
parcelHelpers.export(exports, "cloneElement", ()=>B
);
parcelHelpers.export(exports, "createContext", ()=>D
);
parcelHelpers.export(exports, "toChildArray", ()=>A
);
parcelHelpers.export(exports, "options", ()=>l
);
var n, l, u, i, t, o, r, f, e = {}, c = [], s = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function a(n1, l1) {
    for(var u1 in l1)n1[u1] = l1[u1];
    return n1;
}
function h(n2) {
    var l2 = n2.parentNode;
    l2 && l2.removeChild(n2);
}
function v(l3, u2, i1) {
    var t1, o1, r1, f1 = {};
    for(r1 in u2)"key" == r1 ? t1 = u2[r1] : "ref" == r1 ? o1 = u2[r1] : f1[r1] = u2[r1];
    if (arguments.length > 2 && (f1.children = arguments.length > 3 ? n.call(arguments, 2) : i1), "function" == typeof l3 && null != l3.defaultProps) for(r1 in l3.defaultProps)void 0 === f1[r1] && (f1[r1] = l3.defaultProps[r1]);
    return y(l3, f1, t1, o1, null);
}
function y(n3, i2, t2, o2, r2) {
    var f2 = {
        type: n3,
        props: i2,
        key: t2,
        ref: o2,
        __k: null,
        __: null,
        __b: 0,
        __e: null,
        __d: void 0,
        __c: null,
        __h: null,
        constructor: void 0,
        __v: null == r2 ? ++u : r2
    };
    return null == r2 && null != l.vnode && l.vnode(f2), f2;
}
function p() {
    return {
        current: null
    };
}
function d(n4) {
    return n4.children;
}
function _(n5, l4) {
    this.props = n5, this.context = l4;
}
function k(n6, l5) {
    if (null == l5) return n6.__ ? k(n6.__, n6.__.__k.indexOf(n6) + 1) : null;
    for(var u3; l5 < n6.__k.length; l5++)if (null != (u3 = n6.__k[l5]) && null != u3.__e) return u3.__e;
    return "function" == typeof n6.type ? k(n6) : null;
}
function b(n7) {
    var l6, u4;
    if (null != (n7 = n7.__) && null != n7.__c) {
        for(n7.__e = n7.__c.base = null, l6 = 0; l6 < n7.__k.length; l6++)if (null != (u4 = n7.__k[l6]) && null != u4.__e) {
            n7.__e = n7.__c.base = u4.__e;
            break;
        }
        return b(n7);
    }
}
function m(n8) {
    (!n8.__d && (n8.__d = !0) && t.push(n8) && !g.__r++ || r !== l.debounceRendering) && ((r = l.debounceRendering) || o)(g);
}
function g() {
    for(var n9; g.__r = t.length;)n9 = t.sort(function(n10, l7) {
        return n10.__v.__b - l7.__v.__b;
    }), t = [], n9.some(function(n11) {
        var l8, u5, i3, t3, o3, r3;
        n11.__d && (o3 = (t3 = (l8 = n11).__v).__e, (r3 = l8.__P) && (u5 = [], (i3 = a({}, t3)).__v = t3.__v + 1, j(r3, t3, i3, l8.__n, void 0 !== r3.ownerSVGElement, null != t3.__h ? [
            o3
        ] : null, u5, null == o3 ? k(t3) : o3, t3.__h), z(u5, t3), t3.__e != o3 && b(t3)));
    });
}
function w(n12, l9, u6, i4, t4, o4, r4, f3, s1, a1) {
    var h1, v1, p1, _1, b1, m1, g1, w1 = i4 && i4.__k || c, A1 = w1.length;
    for(u6.__k = [], h1 = 0; h1 < l9.length; h1++)if (null != (_1 = u6.__k[h1] = null == (_1 = l9[h1]) || "boolean" == typeof _1 ? null : "string" == typeof _1 || "number" == typeof _1 || "bigint" == typeof _1 ? y(null, _1, null, null, _1) : Array.isArray(_1) ? y(d, {
        children: _1
    }, null, null, null) : _1.__b > 0 ? y(_1.type, _1.props, _1.key, null, _1.__v) : _1)) {
        if (_1.__ = u6, _1.__b = u6.__b + 1, null === (p1 = w1[h1]) || p1 && _1.key == p1.key && _1.type === p1.type) w1[h1] = void 0;
        else for(v1 = 0; v1 < A1; v1++){
            if ((p1 = w1[v1]) && _1.key == p1.key && _1.type === p1.type) {
                w1[v1] = void 0;
                break;
            }
            p1 = null;
        }
        j(n12, _1, p1 = p1 || e, t4, o4, r4, f3, s1, a1), b1 = _1.__e, (v1 = _1.ref) && p1.ref != v1 && (g1 || (g1 = []), p1.ref && g1.push(p1.ref, null, _1), g1.push(v1, _1.__c || b1, _1)), null != b1 ? (null == m1 && (m1 = b1), "function" == typeof _1.type && _1.__k === p1.__k ? _1.__d = s1 = x(_1, s1, n12) : s1 = P(n12, _1, p1, w1, b1, s1), "function" == typeof u6.type && (u6.__d = s1)) : s1 && p1.__e == s1 && s1.parentNode != n12 && (s1 = k(p1));
    }
    for(u6.__e = m1, h1 = A1; h1--;)null != w1[h1] && ("function" == typeof u6.type && null != w1[h1].__e && w1[h1].__e == u6.__d && (u6.__d = k(i4, h1 + 1)), N(w1[h1], w1[h1]));
    if (g1) for(h1 = 0; h1 < g1.length; h1++)M(g1[h1], g1[++h1], g1[++h1]);
}
function x(n13, l10, u7) {
    for(var i5, t5 = n13.__k, o5 = 0; t5 && o5 < t5.length; o5++)(i5 = t5[o5]) && (i5.__ = n13, l10 = "function" == typeof i5.type ? x(i5, l10, u7) : P(u7, i5, i5, t5, i5.__e, l10));
    return l10;
}
function A(n14, l11) {
    return l11 = l11 || [], null == n14 || "boolean" == typeof n14 || (Array.isArray(n14) ? n14.some(function(n15) {
        A(n15, l11);
    }) : l11.push(n14)), l11;
}
function P(n16, l12, u8, i6, t6, o6) {
    var r5, f4, e1;
    if (void 0 !== l12.__d) r5 = l12.__d, l12.__d = void 0;
    else if (null == u8 || t6 != o6 || null == t6.parentNode) n: if (null == o6 || o6.parentNode !== n16) n16.appendChild(t6), r5 = null;
    else {
        for(f4 = o6, e1 = 0; (f4 = f4.nextSibling) && e1 < i6.length; e1 += 2)if (f4 == t6) break n;
        n16.insertBefore(t6, o6), r5 = o6;
    }
    return void 0 !== r5 ? r5 : t6.nextSibling;
}
function C(n17, l13, u9, i7, t7) {
    var o7;
    for(o7 in u9)"children" === o7 || "key" === o7 || o7 in l13 || H(n17, o7, null, u9[o7], i7);
    for(o7 in l13)t7 && "function" != typeof l13[o7] || "children" === o7 || "key" === o7 || "value" === o7 || "checked" === o7 || u9[o7] === l13[o7] || H(n17, o7, l13[o7], u9[o7], i7);
}
function $(n18, l14, u10) {
    "-" === l14[0] ? n18.setProperty(l14, u10) : n18[l14] = null == u10 ? "" : "number" != typeof u10 || s.test(l14) ? u10 : u10 + "px";
}
function H(n19, l15, u11, i8, t8) {
    var o8;
    n: if ("style" === l15) {
        if ("string" == typeof u11) n19.style.cssText = u11;
        else {
            if ("string" == typeof i8 && (n19.style.cssText = i8 = ""), i8) for(l15 in i8)u11 && l15 in u11 || $(n19.style, l15, "");
            if (u11) for(l15 in u11)i8 && u11[l15] === i8[l15] || $(n19.style, l15, u11[l15]);
        }
    } else if ("o" === l15[0] && "n" === l15[1]) o8 = l15 !== (l15 = l15.replace(/Capture$/, "")), l15 = l15.toLowerCase() in n19 ? l15.toLowerCase().slice(2) : l15.slice(2), n19.l || (n19.l = {}), n19.l[l15 + o8] = u11, u11 ? i8 || n19.addEventListener(l15, o8 ? T : I, o8) : n19.removeEventListener(l15, o8 ? T : I, o8);
    else if ("dangerouslySetInnerHTML" !== l15) {
        if (t8) l15 = l15.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
        else if ("href" !== l15 && "list" !== l15 && "form" !== l15 && "tabIndex" !== l15 && "download" !== l15 && l15 in n19) try {
            n19[l15] = null == u11 ? "" : u11;
            break n;
        } catch (n) {}
        "function" == typeof u11 || (null != u11 && (!1 !== u11 || "a" === l15[0] && "r" === l15[1]) ? n19.setAttribute(l15, u11) : n19.removeAttribute(l15));
    }
}
function I(n20) {
    this.l[n20.type + !1](l.event ? l.event(n20) : n20);
}
function T(n21) {
    this.l[n21.type + !0](l.event ? l.event(n21) : n21);
}
function j(n22, u12, i9, t9, o9, r6, f5, e2, c1) {
    var s2, h2, v2, y1, p2, k1, b2, m2, g2, x1, A2, P1 = u12.type;
    if (void 0 !== u12.constructor) return null;
    null != i9.__h && (c1 = i9.__h, e2 = u12.__e = i9.__e, u12.__h = null, r6 = [
        e2
    ]), (s2 = l.__b) && s2(u12);
    try {
        n: if ("function" == typeof P1) {
            if (m2 = u12.props, g2 = (s2 = P1.contextType) && t9[s2.__c], x1 = s2 ? g2 ? g2.props.value : s2.__ : t9, i9.__c ? b2 = (h2 = u12.__c = i9.__c).__ = h2.__E : ("prototype" in P1 && P1.prototype.render ? u12.__c = h2 = new P1(m2, x1) : (u12.__c = h2 = new _(m2, x1), h2.constructor = P1, h2.render = O), g2 && g2.sub(h2), h2.props = m2, h2.state || (h2.state = {}), h2.context = x1, h2.__n = t9, v2 = h2.__d = !0, h2.__h = []), null == h2.__s && (h2.__s = h2.state), null != P1.getDerivedStateFromProps && (h2.__s == h2.state && (h2.__s = a({}, h2.__s)), a(h2.__s, P1.getDerivedStateFromProps(m2, h2.__s))), y1 = h2.props, p2 = h2.state, v2) null == P1.getDerivedStateFromProps && null != h2.componentWillMount && h2.componentWillMount(), null != h2.componentDidMount && h2.__h.push(h2.componentDidMount);
            else {
                if (null == P1.getDerivedStateFromProps && m2 !== y1 && null != h2.componentWillReceiveProps && h2.componentWillReceiveProps(m2, x1), !h2.__e && null != h2.shouldComponentUpdate && !1 === h2.shouldComponentUpdate(m2, h2.__s, x1) || u12.__v === i9.__v) {
                    h2.props = m2, h2.state = h2.__s, u12.__v !== i9.__v && (h2.__d = !1), h2.__v = u12, u12.__e = i9.__e, u12.__k = i9.__k, u12.__k.forEach(function(n23) {
                        n23 && (n23.__ = u12);
                    }), h2.__h.length && f5.push(h2);
                    break n;
                }
                null != h2.componentWillUpdate && h2.componentWillUpdate(m2, h2.__s, x1), null != h2.componentDidUpdate && h2.__h.push(function() {
                    h2.componentDidUpdate(y1, p2, k1);
                });
            }
            h2.context = x1, h2.props = m2, h2.state = h2.__s, (s2 = l.__r) && s2(u12), h2.__d = !1, h2.__v = u12, h2.__P = n22, s2 = h2.render(h2.props, h2.state, h2.context), h2.state = h2.__s, null != h2.getChildContext && (t9 = a(a({}, t9), h2.getChildContext())), v2 || null == h2.getSnapshotBeforeUpdate || (k1 = h2.getSnapshotBeforeUpdate(y1, p2)), A2 = null != s2 && s2.type === d && null == s2.key ? s2.props.children : s2, w(n22, Array.isArray(A2) ? A2 : [
                A2
            ], u12, i9, t9, o9, r6, f5, e2, c1), h2.base = u12.__e, u12.__h = null, h2.__h.length && f5.push(h2), b2 && (h2.__E = h2.__ = null), h2.__e = !1;
        } else null == r6 && u12.__v === i9.__v ? (u12.__k = i9.__k, u12.__e = i9.__e) : u12.__e = L(i9.__e, u12, i9, t9, o9, r6, f5, c1);
        (s2 = l.diffed) && s2(u12);
    } catch (n24) {
        u12.__v = null, (c1 || null != r6) && (u12.__e = e2, u12.__h = !!c1, r6[r6.indexOf(e2)] = null), l.__e(n24, u12, i9);
    }
}
function z(n25, u13) {
    l.__c && l.__c(u13, n25), n25.some(function(u14) {
        try {
            n25 = u14.__h, u14.__h = [], n25.some(function(n26) {
                n26.call(u14);
            });
        } catch (n27) {
            l.__e(n27, u14.__v);
        }
    });
}
function L(l16, u15, i10, t10, o10, r7, f6, c2) {
    var s3, a2, v3, y2 = i10.props, p3 = u15.props, d1 = u15.type, _2 = 0;
    if ("svg" === d1 && (o10 = !0), null != r7) {
        for(; _2 < r7.length; _2++)if ((s3 = r7[_2]) && "setAttribute" in s3 == !!d1 && (d1 ? s3.localName === d1 : 3 === s3.nodeType)) {
            l16 = s3, r7[_2] = null;
            break;
        }
    }
    if (null == l16) {
        if (null === d1) return document.createTextNode(p3);
        l16 = o10 ? document.createElementNS("http://www.w3.org/2000/svg", d1) : document.createElement(d1, p3.is && p3), r7 = null, c2 = !1;
    }
    if (null === d1) y2 === p3 || c2 && l16.data === p3 || (l16.data = p3);
    else {
        if (r7 = r7 && n.call(l16.childNodes), a2 = (y2 = i10.props || e).dangerouslySetInnerHTML, v3 = p3.dangerouslySetInnerHTML, !c2) {
            if (null != r7) for(y2 = {}, _2 = 0; _2 < l16.attributes.length; _2++)y2[l16.attributes[_2].name] = l16.attributes[_2].value;
            (v3 || a2) && (v3 && (a2 && v3.__html == a2.__html || v3.__html === l16.innerHTML) || (l16.innerHTML = v3 && v3.__html || ""));
        }
        if (C(l16, p3, y2, o10, c2), v3) u15.__k = [];
        else if (_2 = u15.props.children, w(l16, Array.isArray(_2) ? _2 : [
            _2
        ], u15, i10, t10, o10 && "foreignObject" !== d1, r7, f6, r7 ? r7[0] : i10.__k && k(i10, 0), c2), null != r7) for(_2 = r7.length; _2--;)null != r7[_2] && h(r7[_2]);
        c2 || ("value" in p3 && void 0 !== (_2 = p3.value) && (_2 !== l16.value || "progress" === d1 && !_2 || "option" === d1 && _2 !== y2.value) && H(l16, "value", _2, y2.value, !1), "checked" in p3 && void 0 !== (_2 = p3.checked) && _2 !== l16.checked && H(l16, "checked", _2, y2.checked, !1));
    }
    return l16;
}
function M(n28, u16, i11) {
    try {
        "function" == typeof n28 ? n28(u16) : n28.current = u16;
    } catch (n29) {
        l.__e(n29, i11);
    }
}
function N(n30, u17, i12) {
    var t11, o11;
    if (l.unmount && l.unmount(n30), (t11 = n30.ref) && (t11.current && t11.current !== n30.__e || M(t11, null, u17)), null != (t11 = n30.__c)) {
        if (t11.componentWillUnmount) try {
            t11.componentWillUnmount();
        } catch (n31) {
            l.__e(n31, u17);
        }
        t11.base = t11.__P = null;
    }
    if (t11 = n30.__k) for(o11 = 0; o11 < t11.length; o11++)t11[o11] && N(t11[o11], u17, "function" != typeof n30.type);
    i12 || null == n30.__e || h(n30.__e), n30.__e = n30.__d = void 0;
}
function O(n32, l, u18) {
    return this.constructor(n32, u18);
}
function S(u19, i13, t12) {
    var o12, r8, f7;
    l.__ && l.__(u19, i13), r8 = (o12 = "function" == typeof t12) ? null : t12 && t12.__k || i13.__k, f7 = [], j(i13, u19 = (!o12 && t12 || i13).__k = v(d, null, [
        u19
    ]), r8 || e, e, void 0 !== i13.ownerSVGElement, !o12 && t12 ? [
        t12
    ] : r8 ? null : i13.firstChild ? n.call(i13.childNodes) : null, f7, !o12 && t12 ? t12 : r8 ? r8.__e : i13.firstChild, o12), z(f7, u19);
}
function q(n33, l17) {
    S(n33, l17, q);
}
function B(l18, u20, i14) {
    var t13, o13, r9, f8 = a({}, l18.props);
    for(r9 in u20)"key" == r9 ? t13 = u20[r9] : "ref" == r9 ? o13 = u20[r9] : f8[r9] = u20[r9];
    return arguments.length > 2 && (f8.children = arguments.length > 3 ? n.call(arguments, 2) : i14), y(l18.type, f8, t13 || l18.key, o13 || l18.ref, null);
}
function D(n34, l19) {
    var u21 = {
        __c: l19 = "__cC" + f++,
        __: n34,
        Consumer: function(n35, l20) {
            return n35.children(l20);
        },
        Provider: function(n36) {
            var u22, i15;
            return this.getChildContext || (u22 = [], (i15 = {})[l19] = this, this.getChildContext = function() {
                return i15;
            }, this.shouldComponentUpdate = function(n37) {
                this.props.value !== n37.value && u22.some(m);
            }, this.sub = function(n38) {
                u22.push(n38);
                var l21 = n38.componentWillUnmount;
                n38.componentWillUnmount = function() {
                    u22.splice(u22.indexOf(n38), 1), l21 && l21.call(n38);
                };
            }), n36.children;
        }
    };
    return u21.Provider.__ = u21.Consumer.contextType = u21;
}
n = c.slice, l = {
    __e: function(n39, l22, u, i16) {
        for(var t14, o14, r10; l22 = l22.__;)if ((t14 = l22.__c) && !t14.__) try {
            if ((o14 = t14.constructor) && null != o14.getDerivedStateFromError && (t14.setState(o14.getDerivedStateFromError(n39)), r10 = t14.__d), null != t14.componentDidCatch && (t14.componentDidCatch(n39, i16 || {}), r10 = t14.__d), r10) return t14.__E = t14;
        } catch (l23) {
            n39 = l23;
        }
        throw n39;
    }
}, u = 0, i = function(n40) {
    return null != n40 && void 0 === n40.constructor;
}, _.prototype.setState = function(n41, l24) {
    var u23;
    u23 = null != this.__s && this.__s !== this.state ? this.__s : this.__s = a({}, this.state), "function" == typeof n41 && (n41 = n41(a({}, u23), this.props)), n41 && a(u23, n41), null != n41 && this.__v && (l24 && this.__h.push(l24), m(this));
}, _.prototype.forceUpdate = function(n42) {
    this.__v && (this.__e = !0, n42 && this.__h.push(n42), m(this));
}, _.prototype.render = d, t = [], o = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, g.__r = 0, f = 0;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"j7FRh":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"97VL9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "useState", ()=>m
);
parcelHelpers.export(exports, "useReducer", ()=>p
);
parcelHelpers.export(exports, "useEffect", ()=>y
);
parcelHelpers.export(exports, "useLayoutEffect", ()=>d
);
parcelHelpers.export(exports, "useRef", ()=>h
);
parcelHelpers.export(exports, "useImperativeHandle", ()=>s
);
parcelHelpers.export(exports, "useMemo", ()=>_
);
parcelHelpers.export(exports, "useCallback", ()=>A
);
parcelHelpers.export(exports, "useContext", ()=>F
);
parcelHelpers.export(exports, "useDebugValue", ()=>T
);
parcelHelpers.export(exports, "useErrorBoundary", ()=>q
);
var _preact = require("preact");
var t, u, r, o = 0, i = [], c = _preact.options.__b, f = _preact.options.__r, e = _preact.options.diffed, a = _preact.options.__c, v = _preact.options.unmount;
function l(t1, r1) {
    _preact.options.__h && _preact.options.__h(u, t1, o || r1), o = 0;
    var i1 = u.__H || (u.__H = {
        __: [],
        __h: []
    });
    return t1 >= i1.__.length && i1.__.push({}), i1.__[t1];
}
function m(n) {
    return o = 1, p(w, n);
}
function p(n1, r2, o1) {
    var i2 = l(t++, 2);
    return i2.t = n1, i2.__c || (i2.__ = [
        o1 ? o1(r2) : w(void 0, r2),
        function(n) {
            var t2 = i2.t(i2.__[0], n);
            i2.__[0] !== t2 && (i2.__ = [
                t2,
                i2.__[1]
            ], i2.__c.setState({}));
        }
    ], i2.__c = u), i2.__;
}
function y(r3, o2) {
    var i3 = l(t++, 3);
    !_preact.options.__s && k(i3.__H, o2) && (i3.__ = r3, i3.__H = o2, u.__H.__h.push(i3));
}
function d(r4, o3) {
    var i4 = l(t++, 4);
    !_preact.options.__s && k(i4.__H, o3) && (i4.__ = r4, i4.__H = o3, u.__h.push(i4));
}
function h(n) {
    return o = 5, _(function() {
        return {
            current: n
        };
    }, []);
}
function s(n, t3, u1) {
    o = 6, d(function() {
        return "function" == typeof n ? (n(t3()), function() {
            return n(null);
        }) : n ? (n.current = t3(), function() {
            return n.current = null;
        }) : void 0;
    }, null == u1 ? u1 : u1.concat(n));
}
function _(n, u2) {
    var r5 = l(t++, 7);
    return k(r5.__H, u2) && (r5.__ = n(), r5.__H = u2, r5.__h = n), r5.__;
}
function A(n, t4) {
    return o = 8, _(function() {
        return n;
    }, t4);
}
function F(n) {
    var r6 = u.context[n.__c], o4 = l(t++, 9);
    return o4.c = n, r6 ? (null == o4.__ && (o4.__ = !0, r6.sub(u)), r6.props.value) : n.__;
}
function T(t5, u3) {
    _preact.options.useDebugValue && _preact.options.useDebugValue(u3 ? u3(t5) : t5);
}
function q(n2) {
    var r7 = l(t++, 10), o5 = m();
    return r7.__ = n2, u.componentDidCatch || (u.componentDidCatch = function(n) {
        r7.__ && r7.__(n), o5[1](n);
    }), [
        o5[0],
        function() {
            o5[1](void 0);
        }
    ];
}
function x() {
    for(var t6; t6 = i.shift();)if (t6.__P) try {
        t6.__H.__h.forEach(g), t6.__H.__h.forEach(j), t6.__H.__h = [];
    } catch (u4) {
        t6.__H.__h = [], _preact.options.__e(u4, t6.__v);
    }
}
_preact.options.__b = function(n) {
    u = null, c && c(n);
}, _preact.options.__r = function(n) {
    f && f(n), t = 0;
    var r8 = (u = n.__c).__H;
    r8 && (r8.__h.forEach(g), r8.__h.forEach(j), r8.__h = []);
}, _preact.options.diffed = function(t7) {
    e && e(t7);
    var o6 = t7.__c;
    o6 && o6.__H && o6.__H.__h.length && (1 !== i.push(o6) && r === _preact.options.requestAnimationFrame || ((r = _preact.options.requestAnimationFrame) || function(n) {
        var t8, u5 = function() {
            clearTimeout(r9), b && cancelAnimationFrame(t8), setTimeout(n);
        }, r9 = setTimeout(u5, 100);
        b && (t8 = requestAnimationFrame(u5));
    })(x)), u = null;
}, _preact.options.__c = function(t9, u6) {
    u6.some(function(t10) {
        try {
            t10.__h.forEach(g), t10.__h = t10.__h.filter(function(n) {
                return !n.__ || j(n);
            });
        } catch (r10) {
            u6.some(function(n) {
                n.__h && (n.__h = []);
            }), u6 = [], _preact.options.__e(r10, t10.__v);
        }
    }), a && a(t9, u6);
}, _preact.options.unmount = function(t11) {
    v && v(t11);
    var u7, r11 = t11.__c;
    r11 && r11.__H && (r11.__H.__.forEach(function(n) {
        try {
            g(n);
        } catch (n3) {
            u7 = n3;
        }
    }), u7 && _preact.options.__e(u7, r11.__v));
};
var b = "function" == typeof requestAnimationFrame;
function g(n) {
    var t12 = u, r12 = n.__c;
    "function" == typeof r12 && (n.__c = void 0, r12()), u = t12;
}
function j(n) {
    var t13 = u;
    n.__c = n.__(), u = t13;
}
function k(n, t14) {
    return !n || n.length !== t14.length || t14.some(function(t15, u8) {
        return t15 !== n[u8];
    });
}
function w(n, t16) {
    return "function" == typeof t16 ? t16(n) : t16;
}

},{"preact":"cwEwC","@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"gXK85":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Link", ()=>E
);
parcelHelpers.export(exports, "Route", ()=>L
);
parcelHelpers.export(exports, "Router", ()=>D
);
parcelHelpers.export(exports, "default", ()=>D
);
parcelHelpers.export(exports, "exec", ()=>s
);
parcelHelpers.export(exports, "getCurrentUrl", ()=>R
);
parcelHelpers.export(exports, "route", ()=>$
);
parcelHelpers.export(exports, "useRouter", ()=>C
);
var _preact = require("preact");
var _hooks = require("preact/hooks");
var a = {};
function c(n, t) {
    for(var r in t)n[r] = t[r];
    return n;
}
function s(n, t, r) {
    var i, o = /(?:\?([^#]*))?(#.*)?$/, e = n.match(o), u = {};
    if (e && e[1]) for(var f = e[1].split("&"), c1 = 0; c1 < f.length; c1++){
        var s1 = f[c1].split("=");
        u[decodeURIComponent(s1[0])] = decodeURIComponent(s1.slice(1).join("="));
    }
    n = d(n.replace(o, "")), t = d(t || "");
    for(var h1 = Math.max(n.length, t.length), v1 = 0; v1 < h1; v1++)if (t[v1] && ":" === t[v1].charAt(0)) {
        var l1 = t[v1].replace(/(^:|[+*?]+$)/g, ""), p1 = (t[v1].match(/[+*?]+$/) || a)[0] || "", m1 = ~p1.indexOf("+"), y1 = ~p1.indexOf("*"), U1 = n[v1] || "";
        if (!U1 && !y1 && (p1.indexOf("?") < 0 || m1)) {
            i = !1;
            break;
        }
        if (u[l1] = decodeURIComponent(U1), m1 || y1) {
            u[l1] = n.slice(v1).map(decodeURIComponent).join("/");
            break;
        }
    } else if (t[v1] !== n[v1]) {
        i = !1;
        break;
    }
    return (!0 === r.default || !1 !== i) && u;
}
function h(n, t) {
    return n.rank < t.rank ? 1 : n.rank > t.rank ? -1 : n.index - t.index;
}
function v(n1, t) {
    return n1.index = t, n1.rank = function(n) {
        return n.props.default ? 0 : d(n.props.path).map(l).join("");
    }(n1), n1.props;
}
function d(n) {
    return n.replace(/(^\/+|\/+$)/g, "").split("/");
}
function l(n) {
    return ":" == n.charAt(0) ? 1 + "*+?".indexOf(n.charAt(n.length - 1)) || 4 : 5;
}
var p = {}, m = [], y = [], U = null, g = {
    url: R()
}, k = _preact.createContext(g);
function C() {
    var n = _hooks.useContext(k);
    if (n === g) {
        var t = _hooks.useState()[1];
        _hooks.useEffect(function() {
            return y.push(t), function() {
                return y.splice(y.indexOf(t), 1);
            };
        }, []);
    }
    return [
        n,
        $
    ];
}
function R() {
    var n;
    return "" + ((n = U && U.location ? U.location : U && U.getCurrentLocation ? U.getCurrentLocation() : "undefined" != typeof location ? location : p).pathname || "") + (n.search || "");
}
function $(n2, t1) {
    return void 0 === t1 && (t1 = !1), "string" != typeof n2 && n2.url && (t1 = n2.replace, n2 = n2.url), function(n) {
        for(var t = m.length; t--;)if (m[t].canRoute(n)) return !0;
        return !1;
    }(n2) && function(n, t) {
        void 0 === t && (t = "push"), U && U[t] ? U[t](n) : "undefined" != typeof history && history[t + "State"] && history[t + "State"](null, null, n);
    }(n2, t1 ? "replace" : "push"), I(n2);
}
function I(n) {
    for(var t = !1, r = 0; r < m.length; r++)m[r].routeTo(n) && (t = !0);
    return t;
}
function M(n) {
    if (n && n.getAttribute) {
        var t = n.getAttribute("href"), r = n.getAttribute("target");
        if (t && t.match(/^\//g) && (!r || r.match(/^_?self$/i))) return $(t);
    }
}
function b(n) {
    return n.stopImmediatePropagation && n.stopImmediatePropagation(), n.stopPropagation && n.stopPropagation(), n.preventDefault(), !1;
}
function W(n) {
    if (!(n.ctrlKey || n.metaKey || n.altKey || n.shiftKey || n.button)) {
        var t = n.target;
        do if ("a" === t.localName && t.getAttribute("href")) {
            if (t.hasAttribute("data-native") || t.hasAttribute("native")) return;
            if (M(t)) return b(n);
        }
        while (t = t.parentNode)
    }
}
var w = !1;
function D(n) {
    n.history && (U = n.history), this.state = {
        url: n.url || R()
    };
}
c(D.prototype = new _preact.Component, {
    shouldComponentUpdate: function(n) {
        return !0 !== n.static || n.url !== this.props.url || n.onChange !== this.props.onChange;
    },
    canRoute: function(n) {
        var t = _preact.toChildArray(this.props.children);
        return void 0 !== this.g(t, n);
    },
    routeTo: function(n) {
        this.setState({
            url: n
        });
        var t = this.canRoute(n);
        return this.p || this.forceUpdate(), t;
    },
    componentWillMount: function() {
        this.p = !0;
    },
    componentDidMount: function() {
        var n = this;
        w || (w = !0, U || addEventListener("popstate", function() {
            I(R());
        }), addEventListener("click", W)), m.push(this), U && (this.u = U.listen(function(t) {
            var r = t.location || t;
            n.routeTo("" + (r.pathname || "") + (r.search || ""));
        })), this.p = !1;
    },
    componentWillUnmount: function() {
        "function" == typeof this.u && this.u(), m.splice(m.indexOf(this), 1);
    },
    componentWillUpdate: function() {
        this.p = !0;
    },
    componentDidUpdate: function() {
        this.p = !1;
    },
    g: function(n, t) {
        n = n.filter(v).sort(h);
        for(var r = 0; r < n.length; r++){
            var i = n[r], o = s(t, i.props.path, i.props);
            if (o) return [
                i,
                o
            ];
        }
    },
    render: function(n, t) {
        var e, u, f = n.onChange, a1 = t.url, s2 = this.c, h2 = this.g(_preact.toChildArray(n.children), a1);
        if (h2 && (u = _preact.cloneElement(h2[0], c(c({
            url: a1,
            matches: e = h2[1]
        }, e), {
            key: void 0,
            ref: void 0
        }))), a1 !== (s2 && s2.url)) {
            c(g, s2 = this.c = {
                url: a1,
                previous: s2 && s2.url,
                current: u,
                path: u ? u.props.path : null,
                matches: e
            }), s2.router = this, s2.active = u ? [
                u
            ] : [];
            for(var v2 = y.length; v2--;)y[v2]({});
            "function" == typeof f && f(s2);
        }
        return _preact.h(k.Provider, {
            value: s2
        }, u);
    }
});
var E = function(n) {
    return _preact.h("a", c({
        onClick: W
    }, n));
}, L = function(n) {
    return _preact.h(n.component, n);
};

},{"preact":"cwEwC","preact/hooks":"97VL9","@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"5vYEI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Action", ()=>Action
);
parcelHelpers.export(exports, "createBrowserHistory", ()=>createBrowserHistory
);
parcelHelpers.export(exports, "createHashHistory", ()=>createHashHistory
);
parcelHelpers.export(exports, "createMemoryHistory", ()=>createMemoryHistory
);
parcelHelpers.export(exports, "createPath", ()=>createPath
);
parcelHelpers.export(exports, "parsePath", ()=>parsePath
);
var _extends = require("@babel/runtime/helpers/esm/extends");
var _extendsDefault = parcelHelpers.interopDefault(_extends);
/**
 * Actions represent the type of change to a location value.
 *
 * @see https://github.com/remix-run/history/tree/main/docs/api-reference.md#action
 */ var Action;
(function(Action1) {
    /**
   * A POP indicates a change to an arbitrary index in the history stack, such
   * as a back or forward navigation. It does not describe the direction of the
   * navigation, only that the current index changed.
   *
   * Note: This is the default action for newly created history objects.
   */ Action1["Pop"] = "POP";
    /**
   * A PUSH indicates a new entry being added to the history stack, such as when
   * a link is clicked and a new page loads. When this happens, all subsequent
   * entries in the stack are lost.
   */ Action1["Push"] = "PUSH";
    /**
   * A REPLACE indicates the entry at the current index in the history stack
   * being replaced by a new one.
   */ Action1["Replace"] = "REPLACE";
})(Action || (Action = {}));
var readOnly = function(obj) {
    return Object.freeze(obj);
};
function warning(cond, message) {
    if (!cond) {
        // eslint-disable-next-line no-console
        if (typeof console !== 'undefined') console.warn(message);
        try {
            // Welcome to debugging history!
            //
            // This error is thrown as a convenience so you can more easily
            // find the source for a warning that appears in the console by
            // enabling "pause on exceptions" in your JavaScript debugger.
            throw new Error(message); // eslint-disable-next-line no-empty
        } catch (e) {}
    }
}
var BeforeUnloadEventType = 'beforeunload';
var HashChangeEventType = 'hashchange';
var PopStateEventType = 'popstate';
/**
 * Browser history stores the location in regular URLs. This is the standard for
 * most web apps, but it requires some configuration on the server to ensure you
 * serve the same app at multiple URLs.
 *
 * @see https://github.com/remix-run/history/tree/main/docs/api-reference.md#createbrowserhistory
 */ function createBrowserHistory(options) {
    if (options === void 0) options = {};
    var _options = options, _options$window = _options.window, window = _options$window === void 0 ? document.defaultView : _options$window;
    var globalHistory = window.history;
    function getIndexAndLocation() {
        var _window$location = window.location, pathname = _window$location.pathname, search = _window$location.search, hash = _window$location.hash;
        var state = globalHistory.state || {};
        return [
            state.idx,
            readOnly({
                pathname: pathname,
                search: search,
                hash: hash,
                state: state.usr || null,
                key: state.key || 'default'
            })
        ];
    }
    var blockedPopTx = null;
    function handlePop() {
        if (blockedPopTx) {
            blockers.call(blockedPopTx);
            blockedPopTx = null;
        } else {
            var nextAction = Action.Pop;
            var _getIndexAndLocation = getIndexAndLocation(), nextIndex = _getIndexAndLocation[0], nextLocation = _getIndexAndLocation[1];
            if (blockers.length) {
                if (nextIndex != null) {
                    var delta = index1 - nextIndex;
                    if (delta) {
                        // Revert the POP
                        blockedPopTx = {
                            action: nextAction,
                            location: nextLocation,
                            retry: function retry() {
                                go(delta * -1);
                            }
                        };
                        go(delta);
                    }
                } else warning(false, // detail and link to it here so people can understand better what
                // is going on and how to avoid it.
                "You are trying to block a POP navigation to a location that was not created by the history library. The block will fail silently in production, but in general you should do all navigation with the history library (instead of using window.history.pushState directly) to avoid this situation.");
            } else applyTx(nextAction);
        }
    }
    window.addEventListener(PopStateEventType, handlePop);
    var action1 = Action.Pop;
    var _getIndexAndLocation2 = getIndexAndLocation(), index1 = _getIndexAndLocation2[0], location1 = _getIndexAndLocation2[1];
    var listeners = createEvents();
    var blockers = createEvents();
    if (index1 == null) {
        index1 = 0;
        globalHistory.replaceState(_extendsDefault.default({}, globalHistory.state, {
            idx: index1
        }), '');
    }
    function createHref(to) {
        return typeof to === 'string' ? to : createPath(to);
    } // state defaults to `null` because `window.history.state` does
    function getNextLocation(to, state) {
        if (state === void 0) state = null;
        return readOnly(_extendsDefault.default({
            pathname: location1.pathname,
            hash: '',
            search: ''
        }, typeof to === 'string' ? parsePath(to) : to, {
            state: state,
            key: createKey()
        }));
    }
    function getHistoryStateAndUrl(nextLocation, index) {
        return [
            {
                usr: nextLocation.state,
                key: nextLocation.key,
                idx: index
            },
            createHref(nextLocation)
        ];
    }
    function allowTx(action, location, retry) {
        return !blockers.length || (blockers.call({
            action: action,
            location: location,
            retry: retry
        }), false);
    }
    function applyTx(nextAction) {
        action1 = nextAction;
        var _getIndexAndLocation3 = getIndexAndLocation();
        index1 = _getIndexAndLocation3[0];
        location1 = _getIndexAndLocation3[1];
        listeners.call({
            action: action1,
            location: location1
        });
    }
    function push(to, state) {
        var nextAction = Action.Push;
        var nextLocation = getNextLocation(to, state);
        function retry() {
            push(to, state);
        }
        if (allowTx(nextAction, nextLocation, retry)) {
            var _getHistoryStateAndUr = getHistoryStateAndUrl(nextLocation, index1 + 1), historyState = _getHistoryStateAndUr[0], url = _getHistoryStateAndUr[1]; // TODO: Support forced reloading
            // try...catch because iOS limits us to 100 pushState calls :/
            try {
                globalHistory.pushState(historyState, '', url);
            } catch (error) {
                // They are going to lose state here, but there is no real
                // way to warn them about it since the page will refresh...
                window.location.assign(url);
            }
            applyTx(nextAction);
        }
    }
    function replace(to, state) {
        var nextAction = Action.Replace;
        var nextLocation = getNextLocation(to, state);
        function retry() {
            replace(to, state);
        }
        if (allowTx(nextAction, nextLocation, retry)) {
            var _getHistoryStateAndUr2 = getHistoryStateAndUrl(nextLocation, index1), historyState = _getHistoryStateAndUr2[0], url = _getHistoryStateAndUr2[1]; // TODO: Support forced reloading
            globalHistory.replaceState(historyState, '', url);
            applyTx(nextAction);
        }
    }
    function go(delta) {
        globalHistory.go(delta);
    }
    var history = {
        get action () {
            return action1;
        },
        get location () {
            return location1;
        },
        createHref: createHref,
        push: push,
        replace: replace,
        go: go,
        back: function back() {
            go(-1);
        },
        forward: function forward() {
            go(1);
        },
        listen: function listen(listener) {
            return listeners.push(listener);
        },
        block: function block(blocker) {
            var unblock = blockers.push(blocker);
            if (blockers.length === 1) window.addEventListener(BeforeUnloadEventType, promptBeforeUnload);
            return function() {
                unblock(); // Remove the beforeunload listener so the document may
                // still be salvageable in the pagehide event.
                // See https://html.spec.whatwg.org/#unloading-documents
                if (!blockers.length) window.removeEventListener(BeforeUnloadEventType, promptBeforeUnload);
            };
        }
    };
    return history;
}
/**
 * Hash history stores the location in window.location.hash. This makes it ideal
 * for situations where you don't want to send the location to the server for
 * some reason, either because you do cannot configure it or the URL space is
 * reserved for something else.
 *
 * @see https://github.com/remix-run/history/tree/main/docs/api-reference.md#createhashhistory
 */ function createHashHistory(options) {
    if (options === void 0) options = {};
    var _options2 = options, _options2$window = _options2.window, window = _options2$window === void 0 ? document.defaultView : _options2$window;
    var globalHistory = window.history;
    function getIndexAndLocation() {
        var _parsePath = parsePath(window.location.hash.substr(1)), _parsePath$pathname = _parsePath.pathname, pathname = _parsePath$pathname === void 0 ? '/' : _parsePath$pathname, _parsePath$search = _parsePath.search, search = _parsePath$search === void 0 ? '' : _parsePath$search, _parsePath$hash = _parsePath.hash, hash = _parsePath$hash === void 0 ? '' : _parsePath$hash;
        var state = globalHistory.state || {};
        return [
            state.idx,
            readOnly({
                pathname: pathname,
                search: search,
                hash: hash,
                state: state.usr || null,
                key: state.key || 'default'
            })
        ];
    }
    var blockedPopTx = null;
    function handlePop() {
        if (blockedPopTx) {
            blockers.call(blockedPopTx);
            blockedPopTx = null;
        } else {
            var nextAction = Action.Pop;
            var _getIndexAndLocation4 = getIndexAndLocation(), nextIndex = _getIndexAndLocation4[0], nextLocation = _getIndexAndLocation4[1];
            if (blockers.length) {
                if (nextIndex != null) {
                    var delta = index2 - nextIndex;
                    if (delta) {
                        // Revert the POP
                        blockedPopTx = {
                            action: nextAction,
                            location: nextLocation,
                            retry: function retry() {
                                go(delta * -1);
                            }
                        };
                        go(delta);
                    }
                } else warning(false, // detail and link to it here so people can understand better
                // what is going on and how to avoid it.
                "You are trying to block a POP navigation to a location that was not created by the history library. The block will fail silently in production, but in general you should do all navigation with the history library (instead of using window.history.pushState directly) to avoid this situation.");
            } else applyTx(nextAction);
        }
    }
    window.addEventListener(PopStateEventType, handlePop); // popstate does not fire on hashchange in IE 11 and old (trident) Edge
    // https://developer.mozilla.org/de/docs/Web/API/Window/popstate_event
    window.addEventListener(HashChangeEventType, function() {
        var _getIndexAndLocation5 = getIndexAndLocation(), nextLocation = _getIndexAndLocation5[1]; // Ignore extraneous hashchange events.
        if (createPath(nextLocation) !== createPath(location2)) handlePop();
    });
    var action2 = Action.Pop;
    var _getIndexAndLocation6 = getIndexAndLocation(), index2 = _getIndexAndLocation6[0], location2 = _getIndexAndLocation6[1];
    var listeners = createEvents();
    var blockers = createEvents();
    if (index2 == null) {
        index2 = 0;
        globalHistory.replaceState(_extendsDefault.default({}, globalHistory.state, {
            idx: index2
        }), '');
    }
    function getBaseHref() {
        var base = document.querySelector('base');
        var href = '';
        if (base && base.getAttribute('href')) {
            var url = window.location.href;
            var hashIndex = url.indexOf('#');
            href = hashIndex === -1 ? url : url.slice(0, hashIndex);
        }
        return href;
    }
    function createHref(to) {
        return getBaseHref() + '#' + (typeof to === 'string' ? to : createPath(to));
    }
    function getNextLocation(to, state) {
        if (state === void 0) state = null;
        return readOnly(_extendsDefault.default({
            pathname: location2.pathname,
            hash: '',
            search: ''
        }, typeof to === 'string' ? parsePath(to) : to, {
            state: state,
            key: createKey()
        }));
    }
    function getHistoryStateAndUrl(nextLocation, index) {
        return [
            {
                usr: nextLocation.state,
                key: nextLocation.key,
                idx: index
            },
            createHref(nextLocation)
        ];
    }
    function allowTx(action, location, retry) {
        return !blockers.length || (blockers.call({
            action: action,
            location: location,
            retry: retry
        }), false);
    }
    function applyTx(nextAction) {
        action2 = nextAction;
        var _getIndexAndLocation7 = getIndexAndLocation();
        index2 = _getIndexAndLocation7[0];
        location2 = _getIndexAndLocation7[1];
        listeners.call({
            action: action2,
            location: location2
        });
    }
    function push(to, state) {
        var nextAction = Action.Push;
        var nextLocation = getNextLocation(to, state);
        function retry() {
            push(to, state);
        }
        warning(nextLocation.pathname.charAt(0) === '/', "Relative pathnames are not supported in hash history.push(" + JSON.stringify(to) + ")");
        if (allowTx(nextAction, nextLocation, retry)) {
            var _getHistoryStateAndUr3 = getHistoryStateAndUrl(nextLocation, index2 + 1), historyState = _getHistoryStateAndUr3[0], url = _getHistoryStateAndUr3[1]; // TODO: Support forced reloading
            // try...catch because iOS limits us to 100 pushState calls :/
            try {
                globalHistory.pushState(historyState, '', url);
            } catch (error) {
                // They are going to lose state here, but there is no real
                // way to warn them about it since the page will refresh...
                window.location.assign(url);
            }
            applyTx(nextAction);
        }
    }
    function replace(to, state) {
        var nextAction = Action.Replace;
        var nextLocation = getNextLocation(to, state);
        function retry() {
            replace(to, state);
        }
        warning(nextLocation.pathname.charAt(0) === '/', "Relative pathnames are not supported in hash history.replace(" + JSON.stringify(to) + ")");
        if (allowTx(nextAction, nextLocation, retry)) {
            var _getHistoryStateAndUr4 = getHistoryStateAndUrl(nextLocation, index2), historyState = _getHistoryStateAndUr4[0], url = _getHistoryStateAndUr4[1]; // TODO: Support forced reloading
            globalHistory.replaceState(historyState, '', url);
            applyTx(nextAction);
        }
    }
    function go(delta) {
        globalHistory.go(delta);
    }
    var history = {
        get action () {
            return action2;
        },
        get location () {
            return location2;
        },
        createHref: createHref,
        push: push,
        replace: replace,
        go: go,
        back: function back() {
            go(-1);
        },
        forward: function forward() {
            go(1);
        },
        listen: function listen(listener) {
            return listeners.push(listener);
        },
        block: function block(blocker) {
            var unblock = blockers.push(blocker);
            if (blockers.length === 1) window.addEventListener(BeforeUnloadEventType, promptBeforeUnload);
            return function() {
                unblock(); // Remove the beforeunload listener so the document may
                // still be salvageable in the pagehide event.
                // See https://html.spec.whatwg.org/#unloading-documents
                if (!blockers.length) window.removeEventListener(BeforeUnloadEventType, promptBeforeUnload);
            };
        }
    };
    return history;
}
/**
 * Memory history stores the current location in memory. It is designed for use
 * in stateful non-browser environments like tests and React Native.
 *
 * @see https://github.com/remix-run/history/tree/main/docs/api-reference.md#creatememoryhistory
 */ function createMemoryHistory(options) {
    if (options === void 0) options = {};
    var _options3 = options, _options3$initialEntr = _options3.initialEntries, initialEntries = _options3$initialEntr === void 0 ? [
        '/'
    ] : _options3$initialEntr, initialIndex = _options3.initialIndex;
    var entries = initialEntries.map(function(entry) {
        var location = readOnly(_extendsDefault.default({
            pathname: '/',
            search: '',
            hash: '',
            state: null,
            key: createKey()
        }, typeof entry === 'string' ? parsePath(entry) : entry));
        warning(location.pathname.charAt(0) === '/', "Relative pathnames are not supported in createMemoryHistory({ initialEntries }) (invalid entry: " + JSON.stringify(entry) + ")");
        return location;
    });
    var index = clamp(initialIndex == null ? entries.length - 1 : initialIndex, 0, entries.length - 1);
    var action3 = Action.Pop;
    var location3 = entries[index];
    var listeners = createEvents();
    var blockers = createEvents();
    function createHref(to) {
        return typeof to === 'string' ? to : createPath(to);
    }
    function getNextLocation(to, state) {
        if (state === void 0) state = null;
        return readOnly(_extendsDefault.default({
            pathname: location3.pathname,
            search: '',
            hash: ''
        }, typeof to === 'string' ? parsePath(to) : to, {
            state: state,
            key: createKey()
        }));
    }
    function allowTx(action, location, retry) {
        return !blockers.length || (blockers.call({
            action: action,
            location: location,
            retry: retry
        }), false);
    }
    function applyTx(nextAction, nextLocation) {
        action3 = nextAction;
        location3 = nextLocation;
        listeners.call({
            action: action3,
            location: location3
        });
    }
    function push(to, state) {
        var nextAction = Action.Push;
        var nextLocation = getNextLocation(to, state);
        function retry() {
            push(to, state);
        }
        warning(location3.pathname.charAt(0) === '/', "Relative pathnames are not supported in memory history.push(" + JSON.stringify(to) + ")");
        if (allowTx(nextAction, nextLocation, retry)) {
            index += 1;
            entries.splice(index, entries.length, nextLocation);
            applyTx(nextAction, nextLocation);
        }
    }
    function replace(to, state) {
        var nextAction = Action.Replace;
        var nextLocation = getNextLocation(to, state);
        function retry() {
            replace(to, state);
        }
        warning(location3.pathname.charAt(0) === '/', "Relative pathnames are not supported in memory history.replace(" + JSON.stringify(to) + ")");
        if (allowTx(nextAction, nextLocation, retry)) {
            entries[index] = nextLocation;
            applyTx(nextAction, nextLocation);
        }
    }
    function go(delta) {
        var nextIndex = clamp(index + delta, 0, entries.length - 1);
        var nextAction = Action.Pop;
        var nextLocation = entries[nextIndex];
        function retry() {
            go(delta);
        }
        if (allowTx(nextAction, nextLocation, retry)) {
            index = nextIndex;
            applyTx(nextAction, nextLocation);
        }
    }
    var history = {
        get index () {
            return index;
        },
        get action () {
            return action3;
        },
        get location () {
            return location3;
        },
        createHref: createHref,
        push: push,
        replace: replace,
        go: go,
        back: function back() {
            go(-1);
        },
        forward: function forward() {
            go(1);
        },
        listen: function listen(listener) {
            return listeners.push(listener);
        },
        block: function block(blocker) {
            return blockers.push(blocker);
        }
    };
    return history;
} ////////////////////////////////////////////////////////////////////////////////
// UTILS
////////////////////////////////////////////////////////////////////////////////
function clamp(n, lowerBound, upperBound) {
    return Math.min(Math.max(n, lowerBound), upperBound);
}
function promptBeforeUnload(event) {
    // Cancel the event.
    event.preventDefault(); // Chrome (and legacy IE) requires returnValue to be set.
    event.returnValue = '';
}
function createEvents() {
    var handlers = [];
    return {
        get length () {
            return handlers.length;
        },
        push: function push(fn) {
            handlers.push(fn);
            return function() {
                handlers = handlers.filter(function(handler) {
                    return handler !== fn;
                });
            };
        },
        call: function call(arg) {
            handlers.forEach(function(fn) {
                return fn && fn(arg);
            });
        }
    };
}
function createKey() {
    return Math.random().toString(36).substr(2, 8);
}
/**
 * Creates a string URL path from the given pathname, search, and hash components.
 *
 * @see https://github.com/remix-run/history/tree/main/docs/api-reference.md#createpath
 */ function createPath(_ref) {
    var _ref$pathname = _ref.pathname, pathname = _ref$pathname === void 0 ? '/' : _ref$pathname, _ref$search = _ref.search, search = _ref$search === void 0 ? '' : _ref$search, _ref$hash = _ref.hash, hash = _ref$hash === void 0 ? '' : _ref$hash;
    if (search && search !== '?') pathname += search.charAt(0) === '?' ? search : '?' + search;
    if (hash && hash !== '#') pathname += hash.charAt(0) === '#' ? hash : '#' + hash;
    return pathname;
}
/**
 * Parses a string URL path into its separate pathname, search, and hash components.
 *
 * @see https://github.com/remix-run/history/tree/main/docs/api-reference.md#parsepath
 */ function parsePath(path) {
    var parsedPath = {};
    if (path) {
        var hashIndex = path.indexOf('#');
        if (hashIndex >= 0) {
            parsedPath.hash = path.substr(hashIndex);
            path = path.substr(0, hashIndex);
        }
        var searchIndex = path.indexOf('?');
        if (searchIndex >= 0) {
            parsedPath.search = path.substr(searchIndex);
            path = path.substr(0, searchIndex);
        }
        if (path) parsedPath.pathname = path;
    }
    return parsedPath;
}

},{"@babel/runtime/helpers/esm/extends":"9HBJh","@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"9HBJh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _extends() {
    _extends = Object.assign || function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
        }
        return target;
    };
    return _extends.apply(this, arguments);
}
exports.default = _extends;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"1IJMQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _loaderComponent = require("./loader.component");
parcelHelpers.exportAll(_loaderComponent, exports);
var _logoComponent = require("./logo.component");
parcelHelpers.exportAll(_logoComponent, exports);
var _splashLogoComponent = require("./splash-logo.component");
parcelHelpers.exportAll(_splashLogoComponent, exports);
var _tabsComponent = require("./tabs.component");
parcelHelpers.exportAll(_tabsComponent, exports);
var _headerComponent = require("./header.component");
parcelHelpers.exportAll(_headerComponent, exports);
var _cardComponent = require("./card.component");
parcelHelpers.exportAll(_cardComponent, exports);

},{"./loader.component":"7ODzE","./logo.component":"5Z8AW","./splash-logo.component":"dkFkE","./tabs.component":"1gJUA","./header.component":"kGp3O","./card.component":"6YJcz","@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"7ODzE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Loader", ()=>Loader
);
var _preact = require("preact");
const Loader = ()=>{
    return /*#__PURE__*/ _preact.h("div", {
        className: "is-all-center",
        __source: {
            fileName: "frontend/components/loader.component.tsx",
            lineNumber: 6,
            columnNumber: 9
        },
        __self: undefined
    });
};

},{"preact":"cwEwC","@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"5Z8AW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "LogoComponent", ()=>LogoComponent
);
var _preact = require("preact");
const LogoComponent = (props)=>{
    return /*#__PURE__*/ _preact.h("div", {
        className: "logo",
        style: {
            ...props
        },
        __source: {
            fileName: "frontend/components/logo.component.tsx",
            lineNumber: 10,
            columnNumber: 9
        },
        __self: undefined
    }, /*#__PURE__*/ _preact.h("span", {
        __source: {
            fileName: "frontend/components/logo.component.tsx",
            lineNumber: 11,
            columnNumber: 13
        },
        __self: undefined
    }, "Flex"), /*#__PURE__*/ _preact.h("span", {
        __source: {
            fileName: "frontend/components/logo.component.tsx",
            lineNumber: 12,
            columnNumber: 13
        },
        __self: undefined
    }, "b"), /*#__PURE__*/ _preact.h("span", {
        __source: {
            fileName: "frontend/components/logo.component.tsx",
            lineNumber: 13,
            columnNumber: 13
        },
        __self: undefined
    }, "o"), /*#__PURE__*/ _preact.h("span", {
        __source: {
            fileName: "frontend/components/logo.component.tsx",
            lineNumber: 14,
            columnNumber: 13
        },
        __self: undefined
    }, "a"), /*#__PURE__*/ _preact.h("span", {
        __source: {
            fileName: "frontend/components/logo.component.tsx",
            lineNumber: 15,
            columnNumber: 13
        },
        __self: undefined
    }, "r"), /*#__PURE__*/ _preact.h("span", {
        __source: {
            fileName: "frontend/components/logo.component.tsx",
            lineNumber: 16,
            columnNumber: 13
        },
        __self: undefined
    }, "d"), /*#__PURE__*/ _preact.h("span", {
        className: "red40",
        __source: {
            fileName: "frontend/components/logo.component.tsx",
            lineNumber: 17,
            columnNumber: 13
        },
        __self: undefined
    }, "."));
};

},{"preact":"cwEwC","@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"dkFkE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SplashLogoComponent", ()=>SplashLogoComponent
);
var _preact = require("preact");
const SplashLogoComponent = ()=>{
    return /*#__PURE__*/ _preact.h("div", {
        className: "logo-container",
        __source: {
            fileName: "frontend/components/splash-logo.component.tsx",
            lineNumber: 6,
            columnNumber: 9
        },
        __self: undefined
    }, /*#__PURE__*/ _preact.h("div", {
        className: "logo-icon",
        __source: {
            fileName: "frontend/components/splash-logo.component.tsx",
            lineNumber: 7,
            columnNumber: 13
        },
        __self: undefined
    }, /*#__PURE__*/ _preact.h("div", {
        className: "logo-card is-red",
        __source: {
            fileName: "frontend/components/splash-logo.component.tsx",
            lineNumber: 8,
            columnNumber: 17
        },
        __self: undefined
    }), /*#__PURE__*/ _preact.h("div", {
        className: "logo-card is-blue",
        __source: {
            fileName: "frontend/components/splash-logo.component.tsx",
            lineNumber: 9,
            columnNumber: 17
        },
        __self: undefined
    }), /*#__PURE__*/ _preact.h("div", {
        className: "logo-card is-green",
        __source: {
            fileName: "frontend/components/splash-logo.component.tsx",
            lineNumber: 10,
            columnNumber: 17
        },
        __self: undefined
    })), /*#__PURE__*/ _preact.h("div", {
        className: "logo-text grey50",
        __source: {
            fileName: "frontend/components/splash-logo.component.tsx",
            lineNumber: 12,
            columnNumber: 13
        },
        __self: undefined
    }, /*#__PURE__*/ _preact.h("div", {
        __source: {
            fileName: "frontend/components/splash-logo.component.tsx",
            lineNumber: 13,
            columnNumber: 17
        },
        __self: undefined
    }, /*#__PURE__*/ _preact.h("span", {
        __source: {
            fileName: "frontend/components/splash-logo.component.tsx",
            lineNumber: 14,
            columnNumber: 21
        },
        __self: undefined
    }, "Flexboard"), /*#__PURE__*/ _preact.h("span", {
        className: "red40",
        __source: {
            fileName: "frontend/components/splash-logo.component.tsx",
            lineNumber: 15,
            columnNumber: 21
        },
        __self: undefined
    }, ".")), /*#__PURE__*/ _preact.h("div", {
        className: "is-text-xs grey30",
        __source: {
            fileName: "frontend/components/splash-logo.component.tsx",
            lineNumber: 17,
            columnNumber: 17
        },
        __self: undefined
    }, "The news forwarder")));
};

},{"preact":"cwEwC","@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"1gJUA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "TabsComponent", ()=>TabsComponent
);
var _preact = require("preact");
var _preactRouter = require("preact-router");
var _match = require("preact-router/match");
const TabsComponent = ()=>{
    const navigateTo = (destination)=>{
        return ()=>{
            _preactRouter.route(destination);
        };
    };
    return /*#__PURE__*/ _preact.h("div", {
        className: "tabs",
        __source: {
            fileName: "frontend/components/tabs.component.tsx",
            lineNumber: 13,
            columnNumber: 9
        },
        __self: undefined
    }, /*#__PURE__*/ _preact.h(_match.Link, {
        className: "tab",
        activeClassName: "is-active",
        href: "/seeds",
        __source: {
            fileName: "frontend/components/tabs.component.tsx",
            lineNumber: 14,
            columnNumber: 13
        },
        __self: undefined
    }, /*#__PURE__*/ _preact.h("ion-icon", {
        name: "newspaper",
        __source: {
            fileName: "frontend/components/tabs.component.tsx",
            lineNumber: 17,
            columnNumber: 17
        },
        __self: undefined
    })), /*#__PURE__*/ _preact.h(_match.Link, {
        className: "tab",
        activeClassName: "is-active",
        href: "/search",
        __source: {
            fileName: "frontend/components/tabs.component.tsx",
            lineNumber: 19,
            columnNumber: 13
        },
        __self: undefined
    }, /*#__PURE__*/ _preact.h("ion-icon", {
        name: "search",
        __source: {
            fileName: "frontend/components/tabs.component.tsx",
            lineNumber: 22,
            columnNumber: 17
        },
        __self: undefined
    })), /*#__PURE__*/ _preact.h(_match.Link, {
        className: "tab",
        activeClassName: "is-active",
        href: "/messages",
        __source: {
            fileName: "frontend/components/tabs.component.tsx",
            lineNumber: 24,
            columnNumber: 13
        },
        __self: undefined
    }, /*#__PURE__*/ _preact.h("ion-icon", {
        name: "at",
        __source: {
            fileName: "frontend/components/tabs.component.tsx",
            lineNumber: 27,
            columnNumber: 17
        },
        __self: undefined
    })), /*#__PURE__*/ _preact.h(_match.Link, {
        className: "tab",
        activeClassName: "is-active",
        href: "/indices",
        __source: {
            fileName: "frontend/components/tabs.component.tsx",
            lineNumber: 29,
            columnNumber: 13
        },
        __self: undefined
    }, /*#__PURE__*/ _preact.h("ion-icon", {
        name: "bar-chart",
        __source: {
            fileName: "frontend/components/tabs.component.tsx",
            lineNumber: 32,
            columnNumber: 17
        },
        __self: undefined
    })), /*#__PURE__*/ _preact.h(_match.Link, {
        className: "tab",
        activeClassName: "is-active",
        href: "/settings",
        __source: {
            fileName: "frontend/components/tabs.component.tsx",
            lineNumber: 34,
            columnNumber: 13
        },
        __self: undefined
    }, /*#__PURE__*/ _preact.h("ion-icon", {
        name: "menu",
        __source: {
            fileName: "frontend/components/tabs.component.tsx",
            lineNumber: 37,
            columnNumber: 17
        },
        __self: undefined
    })));
};

},{"preact":"cwEwC","preact-router":"gXK85","preact-router/match":"k3hhw","@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"k3hhw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Link", ()=>c
);
parcelHelpers.export(exports, "Match", ()=>l
);
parcelHelpers.export(exports, "default", ()=>l
);
var _preact = require("preact");
var _preactRouter = require("preact-router");
var s = [
    "className",
    "activeClass",
    "activeClassName",
    "path"
];
function l(a) {
    var e = _preactRouter.useRouter()[0];
    return a.children({
        url: e.url,
        path: e.path,
        matches: !1 !== _preactRouter.exec(e.path || e.url, a.path, {})
    });
}
function c(l1) {
    var c1 = l1.className, n = l1.activeClass, u = l1.activeClassName, i = l1.path, p = function(a, t) {
        if (null == a) return {};
        var r, e, s1 = {}, l2 = Object.keys(a);
        for(e = 0; e < l2.length; e++)t.indexOf(r = l2[e]) >= 0 || (s1[r] = a[r]);
        return s1;
    }(l1, s), h = _preactRouter.useRouter()[0], f = i && h.path && _preactRouter.exec(h.path, i, {}) || _preactRouter.exec(h.url, p.href, {}), o = p.class || c1 || "", m = f && (n || u) || "";
    return p.class = o + (o && m && " ") + m, _preact.h(_preactRouter.Link, p);
}

},{"preact":"cwEwC","preact-router":"gXK85","@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"kGp3O":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "HeaderComponent", ()=>HeaderComponent
);
var _preact = require("preact");
var _logoComponent = require("./logo.component");
const HeaderComponent = (props)=>{
    return /*#__PURE__*/ _preact.h("div", {
        className: "header",
        __source: {
            fileName: "frontend/components/header.component.tsx",
            lineNumber: 6,
            columnNumber: 9
        },
        __self: undefined
    }, /*#__PURE__*/ _preact.h("div", {
        className: "header-logo",
        __source: {
            fileName: "frontend/components/header.component.tsx",
            lineNumber: 7,
            columnNumber: 13
        },
        __self: undefined
    }, /*#__PURE__*/ _preact.h(_logoComponent.LogoComponent, {
        __source: {
            fileName: "frontend/components/header.component.tsx",
            lineNumber: 8,
            columnNumber: 17
        },
        __self: undefined
    })));
};

},{"preact":"cwEwC","./logo.component":"5Z8AW","@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"6YJcz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CardComponent", ()=>CardComponent
);
var _preact = require("preact");
const CardComponent = (props)=>{
    if (props.size === "small") return /*#__PURE__*/ _preact.h("div", {
        className: "card is-small",
        __source: {
            fileName: "frontend/components/card.component.tsx",
            lineNumber: 11,
            columnNumber: 13
        },
        __self: undefined
    }, /*#__PURE__*/ _preact.h("div", {
        className: "card-row",
        __source: {
            fileName: "frontend/components/card.component.tsx",
            lineNumber: 12,
            columnNumber: 17
        },
        __self: undefined
    }, /*#__PURE__*/ _preact.h("div", {
        className: "card-img",
        __source: {
            fileName: "frontend/components/card.component.tsx",
            lineNumber: 13,
            columnNumber: 21
        },
        __self: undefined
    }, /*#__PURE__*/ _preact.h("img", {
        src: "http://placekitten.com/160/160",
        alt: "cat",
        __source: {
            fileName: "frontend/components/card.component.tsx",
            lineNumber: 14,
            columnNumber: 25
        },
        __self: undefined
    }))), /*#__PURE__*/ _preact.h("div", {
        className: "card-row",
        __source: {
            fileName: "frontend/components/card.component.tsx",
            lineNumber: 17,
            columnNumber: 17
        },
        __self: undefined
    }, /*#__PURE__*/ _preact.h("div", {
        className: "blue50",
        __source: {
            fileName: "frontend/components/card.component.tsx",
            lineNumber: 18,
            columnNumber: 21
        },
        __self: undefined
    }, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia, excepturi."), /*#__PURE__*/ _preact.h("div", {
        className: "is-text-xs grey40",
        __source: {
            fileName: "frontend/components/card.component.tsx",
            lineNumber: 21,
            columnNumber: 21
        },
        __self: undefined
    }, "24 Feb, 2022")), /*#__PURE__*/ _preact.h("div", {
        className: "card-row",
        __source: {
            fileName: "frontend/components/card.component.tsx",
            lineNumber: 25,
            columnNumber: 17
        },
        __self: undefined
    }, /*#__PURE__*/ _preact.h("ion-icon", {
        name: "bookmark-outline",
        __source: {
            fileName: "frontend/components/card.component.tsx",
            lineNumber: 26,
            columnNumber: 21
        },
        __self: undefined
    }), /*#__PURE__*/ _preact.h("ion-icon", {
        name: "calendar-outline",
        __source: {
            fileName: "frontend/components/card.component.tsx",
            lineNumber: 27,
            columnNumber: 21
        },
        __self: undefined
    })));
    return /*#__PURE__*/ _preact.h("div", {
        className: "card",
        __source: {
            fileName: "frontend/components/card.component.tsx",
            lineNumber: 34,
            columnNumber: 9
        },
        __self: undefined
    }, /*#__PURE__*/ _preact.h("div", {
        className: "card-row has-padding-vertical-2",
        __source: {
            fileName: "frontend/components/card.component.tsx",
            lineNumber: 35,
            columnNumber: 13
        },
        __self: undefined
    }, /*#__PURE__*/ _preact.h("span", {
        className: "grey40 is-text-s",
        __source: {
            fileName: "frontend/components/card.component.tsx",
            lineNumber: 36,
            columnNumber: 17
        },
        __self: undefined
    }, "label")), /*#__PURE__*/ _preact.h("div", {
        className: "card-row",
        __source: {
            fileName: "frontend/components/card.component.tsx",
            lineNumber: 40,
            columnNumber: 13
        },
        __self: undefined
    }, /*#__PURE__*/ _preact.h("div", {
        className: "card-img",
        __source: {
            fileName: "frontend/components/card.component.tsx",
            lineNumber: 41,
            columnNumber: 17
        },
        __self: undefined
    }, /*#__PURE__*/ _preact.h("img", {
        src: "http://placekitten.com/160/160",
        alt: "cat",
        __source: {
            fileName: "frontend/components/card.component.tsx",
            lineNumber: 42,
            columnNumber: 21
        },
        __self: undefined
    }))), /*#__PURE__*/ _preact.h("div", {
        className: "card-row has-padding-vertical-2",
        __source: {
            fileName: "frontend/components/card.component.tsx",
            lineNumber: 45,
            columnNumber: 13
        },
        __self: undefined
    }, /*#__PURE__*/ _preact.h("div", {
        className: "card-title",
        __source: {
            fileName: "frontend/components/card.component.tsx",
            lineNumber: 46,
            columnNumber: 17
        },
        __self: undefined
    }, "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis harum repellendus dignissimos amet temporibus!")));
};

},{"preact":"cwEwC","@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"9RWB4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indicesPage = require("./indices.page");
parcelHelpers.exportAll(_indicesPage, exports);
var _searchPage = require("./search.page");
parcelHelpers.exportAll(_searchPage, exports);
var _seedsPage = require("./seeds.page");
parcelHelpers.exportAll(_seedsPage, exports);
var _settingsPage = require("./settings.page");
parcelHelpers.exportAll(_settingsPage, exports);
var _splashPage = require("./splash.page");
parcelHelpers.exportAll(_splashPage, exports);
var _redirectPage = require("./redirect.page");
parcelHelpers.exportAll(_redirectPage, exports);
var _messagesPage = require("./messages.page");
parcelHelpers.exportAll(_messagesPage, exports);

},{"./indices.page":"7FZOO","./search.page":"j27CE","./seeds.page":"8BcV2","./settings.page":"76mfA","./splash.page":"1gZMb","./redirect.page":"7ph5y","./messages.page":"2FU79","@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"7FZOO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "IndicesPage", ()=>IndicesPage
);
var _preact = require("preact");
var _hooks = require("preact/hooks");
const TODAY = new Date().toISOString().split("T")[0];
const IndicesPage = (props)=>{
    const [date, setDate] = _hooks.useState(TODAY);
    const [data, setData] = _hooks.useState([]);
    const [dataMap, setDataMap] = _hooks.useState({});
    const [indice, setIndice] = _hooks.useState("CCFI");
    const [indiceOptions, setIndiceOptions] = _hooks.useState([]);
    const updateDataByDate = (targetDate)=>{
        const map = window.shanghaiFreightIndices.get(targetDate);
        const newData = map[indice] || [];
        setDataMap(map);
        setData(newData);
        setIndiceOptions(Object.keys(map));
    };
    const queryData = (newDate)=>{
        let targetDate = newDate;
        if (/^\d{4}-\d{2}-\d{2}$/.test(targetDate)) targetDate = targetDate.replaceAll("-", "");
        if (!window.shanghaiFreightIndices || !window.shanghaiFreightIndices.has(targetDate)) {
            const script = document.createElement("script");
            script.onload = ()=>updateDataByDate(targetDate)
            ;
            script.onerror = console.log;
            script.src = "data/" + targetDate + ".js";
            document.body.appendChild(script);
        } else updateDataByDate(targetDate);
    };
    const updateDate = (event)=>{
        const newDate = event?.target?.value || "";
        if (/^\d{8}$|^\d{4}-\d{2}-\d{2}$/.test(newDate)) setDate(newDate);
    };
    const updateIndice = (event)=>{
        const newIndice = event?.target?.value || "CCFI";
        setIndice(newIndice);
    };
    const requestFullScreen = ()=>{
        setTimeout(async ()=>{
            if (window.innerHeight < window.innerWidth) {
                console.log("Ready for full screen");
                const indicesElement = document.getElementById("indices");
                const indicesTableElement = document.querySelector("#indices .indices-table");
                if (indicesElement) try {
                    await indicesElement.requestFullscreen();
                    indicesTableElement?.classList?.add("is-full-screen");
                } catch (error) {}
            } else if (document.fullscreenElement) {
                document.exitFullscreen();
                const indicesTableElement = document.querySelector("#indices .indices-table");
                indicesTableElement?.classList?.remove("is-full-screen");
            }
        }, 50);
    };
    _hooks.useEffect(()=>{
        requestFullScreen();
        window.addEventListener("orientationchange", requestFullScreen);
    }, []);
    _hooks.useEffect(()=>{
        if (date) queryData(date);
        else setDate(TODAY);
    }, [
        date
    ]);
    _hooks.useEffect(()=>{
        const newData = dataMap[indice] || [];
        setData(newData);
    }, [
        dataMap,
        indice
    ]);
    return /*#__PURE__*/ _preact.h("div", {
        className: "indices",
        id: "indices",
        __source: {
            fileName: "frontend/pages/indices.page.tsx",
            lineNumber: 98,
            columnNumber: 9
        },
        __self: undefined
    }, /*#__PURE__*/ _preact.h("div", {
        className: "indices-actions",
        __source: {
            fileName: "frontend/pages/indices.page.tsx",
            lineNumber: 99,
            columnNumber: 13
        },
        __self: undefined
    }, /*#__PURE__*/ _preact.h("div", {
        className: "indices-action",
        __source: {
            fileName: "frontend/pages/indices.page.tsx",
            lineNumber: 100,
            columnNumber: 17
        },
        __self: undefined
    }, /*#__PURE__*/ _preact.h("input", {
        type: "date",
        name: "date",
        id: "indicesdate",
        onChange: updateDate,
        value: date,
        __source: {
            fileName: "frontend/pages/indices.page.tsx",
            lineNumber: 101,
            columnNumber: 21
        },
        __self: undefined
    })), /*#__PURE__*/ _preact.h("div", {
        className: "indices-action",
        __source: {
            fileName: "frontend/pages/indices.page.tsx",
            lineNumber: 103,
            columnNumber: 17
        },
        __self: undefined
    }, /*#__PURE__*/ _preact.h("select", {
        name: "indices",
        id: "indicestype",
        onChange: updateIndice,
        __source: {
            fileName: "frontend/pages/indices.page.tsx",
            lineNumber: 104,
            columnNumber: 21
        },
        __self: undefined
    }, indiceOptions.map((indiceLabel, index)=>/*#__PURE__*/ _preact.h("option", {
            label: indiceLabel,
            key: index,
            __source: {
                fileName: "frontend/pages/indices.page.tsx",
                lineNumber: 107,
                columnNumber: 33
            },
            __self: undefined
        }, indiceLabel)
    )))), /*#__PURE__*/ _preact.h("div", {
        className: "indices-header",
        __source: {
            fileName: "frontend/pages/indices.page.tsx",
            lineNumber: 113,
            columnNumber: 13
        },
        __self: undefined
    }, (data[0]?.[0] || {}).text), /*#__PURE__*/ _preact.h("div", {
        className: "indices-table",
        __source: {
            fileName: "frontend/pages/indices.page.tsx",
            lineNumber: 116,
            columnNumber: 13
        },
        __self: undefined
    }, /*#__PURE__*/ _preact.h("table", {
        className: "table",
        __source: {
            fileName: "frontend/pages/indices.page.tsx",
            lineNumber: 117,
            columnNumber: 17
        },
        __self: undefined
    }, data.slice(1).map((row, rowIndex)=>{
        return /*#__PURE__*/ _preact.h("tr", {
            key: `row${rowIndex}`,
            __source: {
                fileName: "frontend/pages/indices.page.tsx",
                lineNumber: 123,
                columnNumber: 37
            },
            __self: undefined
        }, row.map((cell, cellIndex)=>{
            return cell.tag === "td" ? /*#__PURE__*/ _preact.h("td", {
                key: `cell${cellIndex}`,
                colSpan: cell.colspan || 1,
                rowSpan: cell.rowspan || 1,
                __source: {
                    fileName: "frontend/pages/indices.page.tsx",
                    lineNumber: 127,
                    columnNumber: 49
                },
                __self: undefined
            }, cell.text) : /*#__PURE__*/ _preact.h("th", {
                key: `cell${cellIndex}`,
                colSpan: cell.colspan || 1,
                rowSpan: cell.rowspan || 1,
                __source: {
                    fileName: "frontend/pages/indices.page.tsx",
                    lineNumber: 132,
                    columnNumber: 49
                },
                __self: undefined
            }, cell.text);
        }));
    }))));
};

},{"preact":"cwEwC","preact/hooks":"97VL9","@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"j27CE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SearchPage", ()=>SearchPage
);
var _preact = require("preact");
const SearchPage = (props)=>{
    return /*#__PURE__*/ _preact.h("div", {
        className: "search",
        __source: {
            fileName: "frontend/pages/search.page.tsx",
            lineNumber: 7,
            columnNumber: 9
        },
        __self: undefined
    }, /*#__PURE__*/ _preact.h("div", {
        className: "search-row",
        __source: {
            fileName: "frontend/pages/search.page.tsx",
            lineNumber: 8,
            columnNumber: 13
        },
        __self: undefined
    }, /*#__PURE__*/ _preact.h("div", {
        className: "search-input",
        __source: {
            fileName: "frontend/pages/search.page.tsx",
            lineNumber: 9,
            columnNumber: 17
        },
        __self: undefined
    }, /*#__PURE__*/ _preact.h("input", {
        placeholder: "Try Flexport...",
        type: "text",
        __source: {
            fileName: "frontend/pages/search.page.tsx",
            lineNumber: 10,
            columnNumber: 21
        },
        __self: undefined
    }), /*#__PURE__*/ _preact.h("ion-icon", {
        name: "search",
        __source: {
            fileName: "frontend/pages/search.page.tsx",
            lineNumber: 11,
            columnNumber: 21
        },
        __self: undefined
    }))), /*#__PURE__*/ _preact.h("br", {
        __source: {
            fileName: "frontend/pages/search.page.tsx",
            lineNumber: 14,
            columnNumber: 13
        },
        __self: undefined
    }), /*#__PURE__*/ _preact.h("br", {
        __source: {
            fileName: "frontend/pages/search.page.tsx",
            lineNumber: 14,
            columnNumber: 19
        },
        __self: undefined
    }), /*#__PURE__*/ _preact.h("div", {
        className: "search-row",
        __source: {
            fileName: "frontend/pages/search.page.tsx",
            lineNumber: 15,
            columnNumber: 13
        },
        __self: undefined
    }, /*#__PURE__*/ _preact.h("div", {
        className: "search-title",
        __source: {
            fileName: "frontend/pages/search.page.tsx",
            lineNumber: 16,
            columnNumber: 17
        },
        __self: undefined
    }, "Featured Topics"), /*#__PURE__*/ _preact.h("div", {
        className: "search-item",
        __source: {
            fileName: "frontend/pages/search.page.tsx",
            lineNumber: 19,
            columnNumber: 17
        },
        __self: undefined
    }, "Flexport"), /*#__PURE__*/ _preact.h("div", {
        className: "search-item",
        __source: {
            fileName: "frontend/pages/search.page.tsx",
            lineNumber: 22,
            columnNumber: 17
        },
        __self: undefined
    }, "Shipments"), /*#__PURE__*/ _preact.h("div", {
        className: "search-item",
        __source: {
            fileName: "frontend/pages/search.page.tsx",
            lineNumber: 25,
            columnNumber: 17
        },
        __self: undefined
    }, "Air shipment")), /*#__PURE__*/ _preact.h("div", {
        className: "search-row",
        __source: {
            fileName: "frontend/pages/search.page.tsx",
            lineNumber: 29,
            columnNumber: 13
        },
        __self: undefined
    }, /*#__PURE__*/ _preact.h("div", {
        className: "search-title",
        __source: {
            fileName: "frontend/pages/search.page.tsx",
            lineNumber: 30,
            columnNumber: 17
        },
        __self: undefined
    }, "Histories"), /*#__PURE__*/ _preact.h("div", {
        className: "search-item",
        __source: {
            fileName: "frontend/pages/search.page.tsx",
            lineNumber: 33,
            columnNumber: 17
        },
        __self: undefined
    }, "abc"), /*#__PURE__*/ _preact.h("div", {
        className: "search-item",
        __source: {
            fileName: "frontend/pages/search.page.tsx",
            lineNumber: 36,
            columnNumber: 17
        },
        __self: undefined
    }, "bbc")));
};

},{"preact":"cwEwC","@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"8BcV2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SeedsPage", ()=>SeedsPage
);
var _preact = require("preact");
var _components = require("../components");
const news = new Array(50).fill(0);
const SeedsPage = (props)=>{
    return /*#__PURE__*/ _preact.h("div", {
        className: "cards",
        __source: {
            fileName: "frontend/pages/seeds.page.tsx",
            lineNumber: 10,
            columnNumber: 9
        },
        __self: undefined
    }, news.map((_, index)=>{
        if (index === 0) return /*#__PURE__*/ _preact.h(_components.CardComponent, {
            __source: {
                fileName: "frontend/pages/seeds.page.tsx",
                lineNumber: 13,
                columnNumber: 45
            },
            __self: undefined
        });
        return /*#__PURE__*/ _preact.h(_components.CardComponent, {
            size: "small",
            __source: {
                fileName: "frontend/pages/seeds.page.tsx",
                lineNumber: 14,
                columnNumber: 28
            },
            __self: undefined
        });
    }));
};

},{"preact":"cwEwC","../components":"1IJMQ","@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"76mfA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SettingsPage", ()=>SettingsPage
);
var _preact = require("preact");
const SettingsPage = (props)=>{
    return /*#__PURE__*/ _preact.h(_preact.Fragment, {
        __source: {
            fileName: "frontend/pages/settings.page.tsx",
            lineNumber: 6,
            columnNumber: 9
        },
        __self: undefined
    }, /*#__PURE__*/ _preact.h("div", {
        className: "setting-group",
        __source: {
            fileName: "frontend/pages/settings.page.tsx",
            lineNumber: 7,
            columnNumber: 13
        },
        __self: undefined
    }, /*#__PURE__*/ _preact.h("div", {
        className: "setting-item",
        __source: {
            fileName: "frontend/pages/settings.page.tsx",
            lineNumber: 8,
            columnNumber: 17
        },
        __self: undefined
    }, "Account"), /*#__PURE__*/ _preact.h("div", {
        className: "setting-item",
        __source: {
            fileName: "frontend/pages/settings.page.tsx",
            lineNumber: 11,
            columnNumber: 17
        },
        __self: undefined
    }, "Language")), /*#__PURE__*/ _preact.h("div", {
        className: "setting-group",
        __source: {
            fileName: "frontend/pages/settings.page.tsx",
            lineNumber: 15,
            columnNumber: 13
        },
        __self: undefined
    }, /*#__PURE__*/ _preact.h("div", {
        className: "setting-item",
        __source: {
            fileName: "frontend/pages/settings.page.tsx",
            lineNumber: 16,
            columnNumber: 17
        },
        __self: undefined
    }, "About Flexboard")));
};

},{"preact":"cwEwC","@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"1gZMb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SplashPage", ()=>SplashPage
);
var _preact = require("preact");
var _components = require("../components");
const SplashPage = ()=>{
    return /*#__PURE__*/ _preact.h("div", {
        className: "is-full-screen is-all-center",
        __source: {
            fileName: "frontend/pages/splash.page.tsx",
            lineNumber: 6,
            columnNumber: 9
        },
        __self: undefined
    }, /*#__PURE__*/ _preact.h(_components.SplashLogoComponent, {
        __source: {
            fileName: "frontend/pages/splash.page.tsx",
            lineNumber: 7,
            columnNumber: 13
        },
        __self: undefined
    }));
};

},{"preact":"cwEwC","../components":"1IJMQ","@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"7ph5y":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Redirect", ()=>Redirect
);
var _preact = require("preact");
var _hooks = require("preact/hooks");
var _preactRouter = require("preact-router");
const Redirect = (props)=>{
    _hooks.useEffect(()=>{
        _preactRouter.route(props.to, true);
    }, []);
    return null;
};

},{"preact":"cwEwC","preact/hooks":"97VL9","preact-router":"gXK85","@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"2FU79":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MessagesPage", ()=>MessagesPage
);
var _preact = require("preact");
const MessagesPage = (props)=>{
    return /*#__PURE__*/ _preact.h("div", {
        __source: {
            fileName: "frontend/pages/messages.page.tsx",
            lineNumber: 7,
            columnNumber: 9
        },
        __self: undefined
    }, "Messages");
};

},{"preact":"cwEwC","@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"8qykB":[function() {},{}]},["hgVRR","fguh0"], "fguh0", "parcelRequire7041")

