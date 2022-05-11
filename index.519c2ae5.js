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
/// <reference path="custom.d.ts" />
var _preact = require("preact");
var _hooks = require("preact/hooks");
var _preactRouter = require("preact-router");
var _preactRouterDefault = parcelHelpers.interopDefault(_preactRouter);
var _history = require("history");
var _helpers = require("./helpers");
var _components = require("./components");
var _pages = require("./pages");
/** @jsx h */ var _mainScss = require("./styles/main.scss");
const HOME_ROUTES = [
    "seeds",
    "search",
    "indices",
    "messages",
    "settings"
];
const Home = (props)=>{
    const { rest  } = props;
    return /*#__PURE__*/ _preact.h(_preact.Fragment, {
        __source: {
            fileName: "frontend/index.tsx",
            lineNumber: 44,
            columnNumber: 9
        },
        __self: undefined
    }, /*#__PURE__*/ _preact.h(_components.TabsComponent, {
        __source: {
            fileName: "frontend/index.tsx",
            lineNumber: 45,
            columnNumber: 9
        },
        __self: undefined
    }), /*#__PURE__*/ _preact.h("div", {
        className: "container",
        __source: {
            fileName: "frontend/index.tsx",
            lineNumber: 46,
            columnNumber: 9
        },
        __self: undefined
    }, /*#__PURE__*/ _preact.h("div", {
        className: "page",
        __source: {
            fileName: "frontend/index.tsx",
            lineNumber: 47,
            columnNumber: 13
        },
        __self: undefined
    }, rest === "seeds" && /*#__PURE__*/ _preact.h(_pages.SeedsPage, {
        __source: {
            fileName: "frontend/index.tsx",
            lineNumber: 48,
            columnNumber: 38
        },
        __self: undefined
    }), rest === "search" && /*#__PURE__*/ _preact.h(_pages.SearchPage, {
        __source: {
            fileName: "frontend/index.tsx",
            lineNumber: 49,
            columnNumber: 39
        },
        __self: undefined
    }), rest === "indices" && /*#__PURE__*/ _preact.h(_pages.IndicesPage, {
        __source: {
            fileName: "frontend/index.tsx",
            lineNumber: 50,
            columnNumber: 40
        },
        __self: undefined
    }), rest === "messages" && /*#__PURE__*/ _preact.h(_pages.MessagesPage, {
        __source: {
            fileName: "frontend/index.tsx",
            lineNumber: 51,
            columnNumber: 41
        },
        __self: undefined
    }), rest === "settings" && /*#__PURE__*/ _preact.h(_pages.SettingsPage, {
        __source: {
            fileName: "frontend/index.tsx",
            lineNumber: 52,
            columnNumber: 41
        },
        __self: undefined
    }), HOME_ROUTES.includes(rest || "") === false && /*#__PURE__*/ _preact.h(_pages.Redirect, {
        default: true,
        to: "/seeds",
        __source: {
            fileName: "frontend/index.tsx",
            lineNumber: 53,
            columnNumber: 64
        },
        __self: undefined
    }), /*#__PURE__*/ _preact.h(_components.HeaderComponent, {
        __source: {
            fileName: "frontend/index.tsx",
            lineNumber: 54,
            columnNumber: 17
        },
        __self: undefined
    }))));
};
const App = ()=>{
    const hashHistory = _history.createHashHistory();
    const [splashVisibility, setSplashVisibility] = _hooks.useState(true);
    const [isMobile, setIsMobile] = _hooks.useState(window.innerWidth < 576);
    const { getSeeds  } = _helpers.useSeedsStore();
    const loadingTime = Math.round(Math.random() * 200);
    const resizeHandler = ()=>{
        if (location.hash !== "#/indices") {
            if (window.innerWidth < 570) setIsMobile(true);
            else setIsMobile(false);
        }
    };
    _hooks.useEffect(()=>{
        window.addEventListener("resize", resizeHandler);
        getSeeds().then(()=>{
            setTimeout(()=>{
                const splashLogo = document.getElementById("splashlogo");
                if (splashLogo) splashLogo.classList.add("is-fading");
            }, loadingTime);
            setTimeout(()=>{
                setSplashVisibility(false);
            }, loadingTime + 500);
        });
        return ()=>{
            window.removeEventListener("resize", resizeHandler);
        };
    }, []);
    if (isMobile === false) return /*#__PURE__*/ _preact.h(_components.QRCode, {
        __source: {
            fileName: "frontend/index.tsx",
            lineNumber: 100,
            columnNumber: 16
        },
        __self: undefined
    });
    if (splashVisibility) return /*#__PURE__*/ _preact.h(_pages.SplashPage, {
        __source: {
            fileName: "frontend/index.tsx",
            lineNumber: 104,
            columnNumber: 16
        },
        __self: undefined
    });
    return /*#__PURE__*/ _preact.h(_preact.Fragment, {
        __source: {
            fileName: "frontend/index.tsx",
            lineNumber: 108,
            columnNumber: 9
        },
        __self: undefined
    }, /*#__PURE__*/ _preact.h(_preactRouterDefault.default, {
        history: hashHistory,
        __source: {
            fileName: "frontend/index.tsx",
            lineNumber: 110,
            columnNumber: 13
        },
        __self: undefined
    }, /*#__PURE__*/ _preact.h(_pages.ArticlePage, {
        path: "/seeds/:base64url",
        __source: {
            fileName: "frontend/index.tsx",
            lineNumber: 111,
            columnNumber: 17
        },
        __self: undefined
    }), /*#__PURE__*/ _preact.h(_pages.DisclaimerPage, {
        path: "/disclaimer",
        __source: {
            fileName: "frontend/index.tsx",
            lineNumber: 112,
            columnNumber: 17
        },
        __self: undefined
    }), /*#__PURE__*/ _preact.h(_pages.BookmarksPage, {
        path: "/bookmarks",
        __source: {
            fileName: "frontend/index.tsx",
            lineNumber: 113,
            columnNumber: 17
        },
        __self: undefined
    }), /*#__PURE__*/ _preact.h(_pages.AboutPage, {
        path: "/about",
        __source: {
            fileName: "frontend/index.tsx",
            lineNumber: 114,
            columnNumber: 17
        },
        __self: undefined
    }), /*#__PURE__*/ _preact.h(Home, {
        path: "/:rest*",
        __source: {
            fileName: "frontend/index.tsx",
            lineNumber: 115,
            columnNumber: 17
        },
        __self: undefined
    })));
};
_preact.render(/*#__PURE__*/ _preact.h(App, {
    __source: {
        fileName: "frontend/index.tsx",
        lineNumber: 122,
        columnNumber: 5
    },
    __self: undefined
}), document.getElementById("root"));

},{"preact":"cwEwC","preact/hooks":"97VL9","preact-router":"gXK85","history":"5vYEI","./helpers":"dtOhO","./components":"1IJMQ","./pages":"9RWB4","./styles/main.scss":"8qykB","@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"cwEwC":[function(require,module,exports) {
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"dtOhO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _decodeJWT = require("./decodeJWT");
parcelHelpers.exportAll(_decodeJWT, exports);
var _googleAuth = require("./googleAuth");
parcelHelpers.exportAll(_googleAuth, exports);
var _userStore = require("./userStore");
parcelHelpers.exportAll(_userStore, exports);
var _searchStore = require("./searchStore");
parcelHelpers.exportAll(_searchStore, exports);
var _seedsStore = require("./seedsStore");
parcelHelpers.exportAll(_seedsStore, exports);
var _bookmarkStore = require("./bookmarkStore");
parcelHelpers.exportAll(_bookmarkStore, exports);

},{"./decodeJWT":"1trgr","./googleAuth":"5PK59","./userStore":"cx4a0","./searchStore":"6TqAD","./seedsStore":"ixOWY","./bookmarkStore":"1crXd","@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"1trgr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "decodeJWT", ()=>decodeJWT
);
const decodeJWT = (token)=>{
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    return JSON.parse(jsonPayload);
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"5PK59":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "useGoogleAuth", ()=>useGoogleAuth
);
var _hooks = require("preact/hooks");
var _userStore = require("./userStore");
var _hookClass = require("./hookClass");
class GoogleAuth extends _hookClass.HookClass {
    clientId = "646206867663-n5avbo6sap51864lno5vnrffc8jrlf45";
    init() {
        window.google.accounts.id.initialize({
            client_id: "646206867663-n5avbo6sap51864lno5vnrffc8jrlf45",
            callback: this.onSignInSuccess.bind(this)
        });
    }
    onSignInSuccess(response) {
        const credential = response.credential;
        _userStore.userStore.setCache(credential);
        this.invokeCallbacks();
    }
    renderButton() {
        window.google.accounts.id.renderButton(document.getElementById("gbuttondiv"), {
            theme: "outline",
            size: "large",
            shape: "pill"
        });
    }
    prompt() {
        window.google.accounts.id.prompt();
    }
}
const googleAuth = new GoogleAuth();
const useGoogleAuth = ()=>{
    const [nounce, setNounce] = _hooks.useState(Math.random());
    _hooks.useEffect(()=>{
        googleAuth.setCallback(setNounce);
        googleAuth.init();
    }, []);
    return {
        googleAuth,
        nounce,
        setNounce
    };
};

},{"preact/hooks":"97VL9","./userStore":"cx4a0","./hookClass":"3IghV","@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"cx4a0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "userStore", ()=>userStore
);
var _decodeJWT = require("./decodeJWT");
class UserStore {
    cache = null;
    key = "FLEXBOARD_USER_ACCOUNT";
    constructor(){
        const account = this.parseCache(this.key);
        if (account) this.cache = account;
    }
    isExpired() {
        if (!this.cache) return true;
        return Date.now() > this.cache.exp * 1000;
    }
    isAvailable() {
        return this.hasCache() && !this.isExpired();
    }
    hasCache() {
        return Boolean(this.cache);
    }
    setCache(value) {
        localStorage.setItem(this.key, value);
        this.cache = this.parseCache(this.key);
    }
    getCache() {
        return this.cache;
    }
    parseCache(key) {
        const cache = localStorage.getItem(key);
        if (cache) try {
            const accountJSON = _decodeJWT.decodeJWT(cache);
            return accountJSON;
        } catch (e) {
            this.clear();
            return null;
        }
        return null;
    }
    clear() {
        localStorage.clear();
    }
}
const userStore = new UserStore();

},{"./decodeJWT":"1trgr","@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"3IghV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "HookClass", ()=>HookClass
);
class HookClass {
    callbacks = new Set();
    setCallback(callback) {
        if (this.callbacks.has(callback) === false) this.callbacks.add(callback);
    }
    invokeCallbacks() {
        const nounce = Math.random();
        this.callbacks.forEach((callback)=>{
            if (callback && typeof callback === "function") callback(nounce);
        });
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"6TqAD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "useSearchStore", ()=>useSearchStore
);
var _hooks = require("preact/hooks");
var _hookClass = require("./hookClass");
class SearchStore extends _hookClass.HookClass {
    key = "FLEXBOARD_SEARCH_HISTORIES";
    historySet = new Set();
    constructor(){
        super();
        this.historySet = new Set(this.readHistories());
    }
    getHistories() {
        return Array.from(this.historySet);
    }
    addHistory(history) {
        this.historySet.add(history);
        this.updateCache();
    }
    deleteHistory(history) {
        this.historySet.delete(history);
        this.updateCache();
    }
    deleteAllHistory() {
        this.historySet = new Set();
        this.updateCache();
    }
    readHistories() {
        const historyString = localStorage.getItem(this.key) || "";
        if (!historyString) return [];
        return historyString.split(",").map((str)=>str.trim()
        ).map((str)=>atob(str)
        );
    }
    updateCache() {
        const historyString = Array.from(this.historySet).map((history)=>btoa(history)
        ).join(",");
        localStorage.setItem(this.key, historyString);
        this.invokeCallbacks();
    }
}
const searchStore = new SearchStore();
const useSearchStore = ()=>{
    const [nounce, setNounce] = _hooks.useState(Math.random());
    _hooks.useEffect(()=>{
        searchStore.setCallback(setNounce);
    }, []);
    return {
        searchStore,
        nounce,
        setNounce
    };
};

},{"preact/hooks":"97VL9","./hookClass":"3IghV","@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"ixOWY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "useSeedsStore", ()=>useSeedsStore
);
var _axios = require("axios");
var _axiosDefault = parcelHelpers.interopDefault(_axios);
var _hooks = require("preact/hooks");
var _hookClass = require("./hookClass");
class SeedsStore extends _hookClass.HookClass {
    seeds = [];
    lastTimeGetSeeds = -1;
    constructor(){
        super();
        window.seedsStore = this;
    }
    init() {
        if (this.lastTimeGetSeeds === -1 || Date.now() - this.lastTimeGetSeeds > 600000) return _axiosDefault.default.get("/data/manifest.json").then((response)=>{
            const seeds = response.data;
            this.seeds = seeds.articles;
            this.invokeCallbacks();
        });
        else return this.seeds;
    }
    findByKeywords(keywords) {
        if (this.seeds.length === 0) return [];
        const keywordArr = keywords.trim().split(" ").filter((word)=>Boolean(word)
        );
        const results = [];
        keywordArr.forEach((keyword)=>{
            this.seeds.forEach((seed)=>{
                if (seed.title.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) !== -1) results.push(seed);
            });
        });
        return results;
    }
    getSeedByURL(url) {
        if (this.seeds.length === 0) return null;
        return this.seeds.find((seed)=>{
            return seed.url === url;
        });
    }
}
const seedsStore = new SeedsStore();
const useSeedsStore = ()=>{
    const [nounce, setNounce] = _hooks.useState(Math.random());
    const [loading, setLoading] = _hooks.useState(true);
    _hooks.useEffect(()=>{
        seedsStore.setCallback(setNounce);
    }, []);
    const getSeeds = async ()=>{
        setLoading(true);
        await seedsStore.init();
        setLoading(false);
    };
    return {
        seedsStore,
        nounce,
        loading,
        setNounce,
        setLoading,
        getSeeds
    };
};

},{"axios":"gIwns","preact/hooks":"97VL9","./hookClass":"3IghV","@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"gIwns":[function(require,module,exports) {
module.exports = require('./lib/axios');

},{"./lib/axios":"lNH3U"}],"lNH3U":[function(require,module,exports) {
'use strict';
var utils = require('./utils');
var bind = require('./helpers/bind');
var Axios = require('./core/Axios');
var mergeConfig = require('./core/mergeConfig');
var defaults = require('./defaults');
/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */ function createInstance(defaultConfig) {
    var context = new Axios(defaultConfig);
    var instance = bind(Axios.prototype.request, context);
    // Copy axios.prototype to instance
    utils.extend(instance, Axios.prototype, context);
    // Copy context to instance
    utils.extend(instance, context);
    // Factory for creating new instances
    instance.create = function create(instanceConfig) {
        return createInstance(mergeConfig(defaultConfig, instanceConfig));
    };
    return instance;
}
// Create the default instance to be exported
var axios = createInstance(defaults);
// Expose Axios class to allow class inheritance
axios.Axios = Axios;
// Expose Cancel & CancelToken
axios.CanceledError = require('./cancel/CanceledError');
axios.CancelToken = require('./cancel/CancelToken');
axios.isCancel = require('./cancel/isCancel');
axios.VERSION = require('./env/data').version;
axios.toFormData = require('./helpers/toFormData');
// Expose AxiosError class
axios.AxiosError = require('../lib/core/AxiosError');
// alias for CanceledError for backward compatibility
axios.Cancel = axios.CanceledError;
// Expose all/spread
axios.all = function all(promises) {
    return Promise.all(promises);
};
axios.spread = require('./helpers/spread');
// Expose isAxiosError
axios.isAxiosError = require('./helpers/isAxiosError');
module.exports = axios;
// Allow use of default import syntax in TypeScript
module.exports.default = axios;

},{"./utils":"lbtnr","./helpers/bind":"cVXCT","./core/Axios":"gwL4I","./core/mergeConfig":"1ogTa","./defaults":"kgCsl","./cancel/CanceledError":"6k8Ga","./cancel/CancelToken":"fsLds","./cancel/isCancel":"gz0Pv","./env/data":"4oEjm","./helpers/toFormData":"jJQ5Z","../lib/core/AxiosError":"fxYQp","./helpers/spread":"cwX15","./helpers/isAxiosError":"bsdyt"}],"lbtnr":[function(require,module,exports) {
'use strict';
var bind = require('./helpers/bind');
// utils is a library of generic helper functions non-specific to axios
var toString = Object.prototype.toString;
// eslint-disable-next-line func-names
var kindOf = function(cache) {
    // eslint-disable-next-line func-names
    return function(thing) {
        var str = toString.call(thing);
        return cache[str] || (cache[str] = str.slice(8, -1).toLowerCase());
    };
}(Object.create(null));
function kindOfTest(type) {
    type = type.toLowerCase();
    return function isKindOf(thing) {
        return kindOf(thing) === type;
    };
}
/**
 * Array with axios supported protocols.
 */ var supportedProtocols = [
    'http:',
    'https:',
    'file:'
];
/**
 * Returns URL protocol passed as param if is not undefined or null,
 * otherwise just returns 'http:'
 *
 * @param {String} protocol The String value of URL protocol
 * @returns {String} Protocol if the value is not undefined or null
 */ function getProtocol(protocol) {
    return protocol || 'http:';
}
/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */ function isArray(val) {
    return Array.isArray(val);
}
/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */ function isUndefined(val) {
    return typeof val === 'undefined';
}
/**
 * Determine if a value is a Buffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Buffer, otherwise false
 */ function isBuffer(val) {
    return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor) && typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer(val);
}
/**
 * Determine if a value is an ArrayBuffer
 *
 * @function
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */ var isArrayBuffer = kindOfTest('ArrayBuffer');
/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */ function isArrayBufferView(val) {
    var result;
    if (typeof ArrayBuffer !== 'undefined' && ArrayBuffer.isView) result = ArrayBuffer.isView(val);
    else result = val && val.buffer && isArrayBuffer(val.buffer);
    return result;
}
/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */ function isString(val) {
    return typeof val === 'string';
}
/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */ function isNumber(val) {
    return typeof val === 'number';
}
/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */ function isObject(val) {
    return val !== null && typeof val === 'object';
}
/**
 * Determine if a value is a plain Object
 *
 * @param {Object} val The value to test
 * @return {boolean} True if value is a plain Object, otherwise false
 */ function isPlainObject(val) {
    if (kindOf(val) !== 'object') return false;
    var prototype = Object.getPrototypeOf(val);
    return prototype === null || prototype === Object.prototype;
}
/**
 * Determine if a value is a Date
 *
 * @function
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */ var isDate = kindOfTest('Date');
/**
 * Determine if a value is a File
 *
 * @function
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */ var isFile = kindOfTest('File');
/**
 * Determine if a value is a Blob
 *
 * @function
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */ var isBlob = kindOfTest('Blob');
/**
 * Determine if a value is a FileList
 *
 * @function
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */ var isFileList = kindOfTest('FileList');
/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */ function isFunction(val) {
    return toString.call(val) === '[object Function]';
}
/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */ function isStream(val) {
    return isObject(val) && isFunction(val.pipe);
}
/**
 * Determine if a value is a FormData
 *
 * @param {Object} thing The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */ function isFormData(thing) {
    var pattern = '[object FormData]';
    return thing && (typeof FormData === 'function' && thing instanceof FormData || toString.call(thing) === pattern || isFunction(thing.toString) && thing.toString() === pattern);
}
/**
 * Determine if a value is a URLSearchParams object
 * @function
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */ var isURLSearchParams = kindOfTest('URLSearchParams');
/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */ function trim(str) {
    return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g, '');
}
/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 */ function isStandardBrowserEnv() {
    if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' || navigator.product === 'NativeScript' || navigator.product === 'NS')) return false;
    return typeof window !== 'undefined' && typeof document !== 'undefined';
}
/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */ function forEach(obj, fn) {
    // Don't bother if no value provided
    if (obj === null || typeof obj === 'undefined') return;
    // Force an array if not already something iterable
    if (typeof obj !== 'object') /*eslint no-param-reassign:0*/ obj = [
        obj
    ];
    if (isArray(obj)) // Iterate over array values
    for(var i = 0, l = obj.length; i < l; i++)fn.call(null, obj[i], i, obj);
    else {
        // Iterate over object keys
        for(var key in obj)if (Object.prototype.hasOwnProperty.call(obj, key)) fn.call(null, obj[key], key, obj);
    }
}
/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */ function merge() {
    var result = {};
    function assignValue(val, key) {
        if (isPlainObject(result[key]) && isPlainObject(val)) result[key] = merge(result[key], val);
        else if (isPlainObject(val)) result[key] = merge({}, val);
        else if (isArray(val)) result[key] = val.slice();
        else result[key] = val;
    }
    for(var i = 0, l = arguments.length; i < l; i++)forEach(arguments[i], assignValue);
    return result;
}
/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */ function extend(a, b, thisArg) {
    forEach(b, function assignValue(val, key) {
        if (thisArg && typeof val === 'function') a[key] = bind(val, thisArg);
        else a[key] = val;
    });
    return a;
}
/**
 * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
 *
 * @param {string} content with BOM
 * @return {string} content value without BOM
 */ function stripBOM(content) {
    if (content.charCodeAt(0) === 65279) content = content.slice(1);
    return content;
}
/**
 * Inherit the prototype methods from one constructor into another
 * @param {function} constructor
 * @param {function} superConstructor
 * @param {object} [props]
 * @param {object} [descriptors]
 */ function inherits(constructor, superConstructor, props, descriptors) {
    constructor.prototype = Object.create(superConstructor.prototype, descriptors);
    constructor.prototype.constructor = constructor;
    props && Object.assign(constructor.prototype, props);
}
/**
 * Resolve object with deep prototype chain to a flat object
 * @param {Object} sourceObj source object
 * @param {Object} [destObj]
 * @param {Function} [filter]
 * @returns {Object}
 */ function toFlatObject(sourceObj, destObj, filter) {
    var props;
    var i;
    var prop;
    var merged = {};
    destObj = destObj || {};
    do {
        props = Object.getOwnPropertyNames(sourceObj);
        i = props.length;
        while(i-- > 0){
            prop = props[i];
            if (!merged[prop]) {
                destObj[prop] = sourceObj[prop];
                merged[prop] = true;
            }
        }
        sourceObj = Object.getPrototypeOf(sourceObj);
    }while (sourceObj && (!filter || filter(sourceObj, destObj)) && sourceObj !== Object.prototype)
    return destObj;
}
/*
 * determines whether a string ends with the characters of a specified string
 * @param {String} str
 * @param {String} searchString
 * @param {Number} [position= 0]
 * @returns {boolean}
 */ function endsWith(str, searchString, position) {
    str = String(str);
    if (position === undefined || position > str.length) position = str.length;
    position -= searchString.length;
    var lastIndex = str.indexOf(searchString, position);
    return lastIndex !== -1 && lastIndex === position;
}
/**
 * Returns new array from array like object
 * @param {*} [thing]
 * @returns {Array}
 */ function toArray(thing) {
    if (!thing) return null;
    var i = thing.length;
    if (isUndefined(i)) return null;
    var arr = new Array(i);
    while(i-- > 0)arr[i] = thing[i];
    return arr;
}
// eslint-disable-next-line func-names
var isTypedArray = function(TypedArray) {
    // eslint-disable-next-line func-names
    return function(thing) {
        return TypedArray && thing instanceof TypedArray;
    };
}(typeof Uint8Array !== 'undefined' && Object.getPrototypeOf(Uint8Array));
module.exports = {
    supportedProtocols: supportedProtocols,
    getProtocol: getProtocol,
    isArray: isArray,
    isArrayBuffer: isArrayBuffer,
    isBuffer: isBuffer,
    isFormData: isFormData,
    isArrayBufferView: isArrayBufferView,
    isString: isString,
    isNumber: isNumber,
    isObject: isObject,
    isPlainObject: isPlainObject,
    isUndefined: isUndefined,
    isDate: isDate,
    isFile: isFile,
    isBlob: isBlob,
    isFunction: isFunction,
    isStream: isStream,
    isURLSearchParams: isURLSearchParams,
    isStandardBrowserEnv: isStandardBrowserEnv,
    forEach: forEach,
    merge: merge,
    extend: extend,
    trim: trim,
    stripBOM: stripBOM,
    inherits: inherits,
    toFlatObject: toFlatObject,
    kindOf: kindOf,
    kindOfTest: kindOfTest,
    endsWith: endsWith,
    toArray: toArray,
    isTypedArray: isTypedArray,
    isFileList: isFileList
};

},{"./helpers/bind":"cVXCT"}],"cVXCT":[function(require,module,exports) {
'use strict';
module.exports = function bind(fn, thisArg) {
    return function wrap() {
        var args = new Array(arguments.length);
        for(var i = 0; i < args.length; i++)args[i] = arguments[i];
        return fn.apply(thisArg, args);
    };
};

},{}],"gwL4I":[function(require,module,exports) {
'use strict';
var utils = require('./../utils');
var buildURL = require('../helpers/buildURL');
var InterceptorManager = require('./InterceptorManager');
var dispatchRequest = require('./dispatchRequest');
var mergeConfig = require('./mergeConfig');
var buildFullPath = require('./buildFullPath');
var validator = require('../helpers/validator');
var validators = validator.validators;
/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */ function Axios(instanceConfig) {
    this.defaults = instanceConfig;
    this.interceptors = {
        request: new InterceptorManager(),
        response: new InterceptorManager()
    };
}
/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */ Axios.prototype.request = function request(configOrUrl, config) {
    /*eslint no-param-reassign:0*/ // Allow for axios('example/url'[, config]) a la fetch API
    if (typeof configOrUrl === 'string') {
        config = config || {};
        config.url = configOrUrl;
    } else config = configOrUrl || {};
    config = mergeConfig(this.defaults, config);
    // Set config.method
    if (config.method) config.method = config.method.toLowerCase();
    else if (this.defaults.method) config.method = this.defaults.method.toLowerCase();
    else config.method = 'get';
    var transitional = config.transitional;
    if (transitional !== undefined) validator.assertOptions(transitional, {
        silentJSONParsing: validators.transitional(validators.boolean),
        forcedJSONParsing: validators.transitional(validators.boolean),
        clarifyTimeoutError: validators.transitional(validators.boolean)
    }, false);
    // filter out skipped interceptors
    var requestInterceptorChain = [];
    var synchronousRequestInterceptors = true;
    this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
        if (typeof interceptor.runWhen === 'function' && interceptor.runWhen(config) === false) return;
        synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;
        requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
    });
    var responseInterceptorChain = [];
    this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
        responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
    });
    var promise;
    if (!synchronousRequestInterceptors) {
        var chain = [
            dispatchRequest,
            undefined
        ];
        Array.prototype.unshift.apply(chain, requestInterceptorChain);
        chain = chain.concat(responseInterceptorChain);
        promise = Promise.resolve(config);
        while(chain.length)promise = promise.then(chain.shift(), chain.shift());
        return promise;
    }
    var newConfig = config;
    while(requestInterceptorChain.length){
        var onFulfilled = requestInterceptorChain.shift();
        var onRejected = requestInterceptorChain.shift();
        try {
            newConfig = onFulfilled(newConfig);
        } catch (error) {
            onRejected(error);
            break;
        }
    }
    try {
        promise = dispatchRequest(newConfig);
    } catch (error) {
        return Promise.reject(error);
    }
    while(responseInterceptorChain.length)promise = promise.then(responseInterceptorChain.shift(), responseInterceptorChain.shift());
    return promise;
};
Axios.prototype.getUri = function getUri(config) {
    config = mergeConfig(this.defaults, config);
    var fullPath = buildFullPath(config.baseURL, config.url);
    return buildURL(fullPath, config.params, config.paramsSerializer);
};
// Provide aliases for supported request methods
utils.forEach([
    'delete',
    'get',
    'head',
    'options'
], function forEachMethodNoData(method) {
    /*eslint func-names:0*/ Axios.prototype[method] = function(url, config) {
        return this.request(mergeConfig(config || {}, {
            method: method,
            url: url,
            data: (config || {}).data
        }));
    };
});
utils.forEach([
    'post',
    'put',
    'patch'
], function forEachMethodWithData(method) {
    /*eslint func-names:0*/ function generateHTTPMethod(isForm) {
        return function httpMethod(url, data, config) {
            return this.request(mergeConfig(config || {}, {
                method: method,
                headers: isForm ? {
                    'Content-Type': 'multipart/form-data'
                } : {},
                url: url,
                data: data
            }));
        };
    }
    Axios.prototype[method] = generateHTTPMethod();
    Axios.prototype[method + 'Form'] = generateHTTPMethod(true);
});
module.exports = Axios;

},{"./../utils":"lbtnr","../helpers/buildURL":"adWtE","./InterceptorManager":"gGizQ","./dispatchRequest":"8uQRh","./mergeConfig":"1ogTa","./buildFullPath":"bxNKA","../helpers/validator":"isK1r"}],"adWtE":[function(require,module,exports) {
'use strict';
var utils = require('./../utils');
function encode(val) {
    return encodeURIComponent(val).replace(/%3A/gi, ':').replace(/%24/g, '$').replace(/%2C/gi, ',').replace(/%20/g, '+').replace(/%5B/gi, '[').replace(/%5D/gi, ']');
}
/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */ module.exports = function buildURL(url, params, paramsSerializer) {
    /*eslint no-param-reassign:0*/ if (!params) return url;
    var serializedParams;
    if (paramsSerializer) serializedParams = paramsSerializer(params);
    else if (utils.isURLSearchParams(params)) serializedParams = params.toString();
    else {
        var parts = [];
        utils.forEach(params, function serialize(val, key) {
            if (val === null || typeof val === 'undefined') return;
            if (utils.isArray(val)) key = key + '[]';
            else val = [
                val
            ];
            utils.forEach(val, function parseValue(v) {
                if (utils.isDate(v)) v = v.toISOString();
                else if (utils.isObject(v)) v = JSON.stringify(v);
                parts.push(encode(key) + '=' + encode(v));
            });
        });
        serializedParams = parts.join('&');
    }
    if (serializedParams) {
        var hashmarkIndex = url.indexOf('#');
        if (hashmarkIndex !== -1) url = url.slice(0, hashmarkIndex);
        url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
    }
    return url;
};

},{"./../utils":"lbtnr"}],"gGizQ":[function(require,module,exports) {
'use strict';
var utils = require('./../utils');
function InterceptorManager() {
    this.handlers = [];
}
/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */ InterceptorManager.prototype.use = function use(fulfilled, rejected, options) {
    this.handlers.push({
        fulfilled: fulfilled,
        rejected: rejected,
        synchronous: options ? options.synchronous : false,
        runWhen: options ? options.runWhen : null
    });
    return this.handlers.length - 1;
};
/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */ InterceptorManager.prototype.eject = function eject(id) {
    if (this.handlers[id]) this.handlers[id] = null;
};
/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */ InterceptorManager.prototype.forEach = function forEach(fn) {
    utils.forEach(this.handlers, function forEachHandler(h) {
        if (h !== null) fn(h);
    });
};
module.exports = InterceptorManager;

},{"./../utils":"lbtnr"}],"8uQRh":[function(require,module,exports) {
'use strict';
var utils = require('./../utils');
var transformData = require('./transformData');
var isCancel = require('../cancel/isCancel');
var defaults = require('../defaults');
var CanceledError = require('../cancel/CanceledError');
/**
 * Throws a `CanceledError` if cancellation has been requested.
 */ function throwIfCancellationRequested(config) {
    if (config.cancelToken) config.cancelToken.throwIfRequested();
    if (config.signal && config.signal.aborted) throw new CanceledError();
}
/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */ module.exports = function dispatchRequest(config) {
    throwIfCancellationRequested(config);
    // Ensure headers exist
    config.headers = config.headers || {};
    // Transform request data
    config.data = transformData.call(config, config.data, config.headers, config.transformRequest);
    // Flatten headers
    config.headers = utils.merge(config.headers.common || {}, config.headers[config.method] || {}, config.headers);
    utils.forEach([
        'delete',
        'get',
        'head',
        'post',
        'put',
        'patch',
        'common'
    ], function cleanHeaderConfig(method) {
        delete config.headers[method];
    });
    var adapter = config.adapter || defaults.adapter;
    return adapter(config).then(function onAdapterResolution(response) {
        throwIfCancellationRequested(config);
        // Transform response data
        response.data = transformData.call(config, response.data, response.headers, config.transformResponse);
        return response;
    }, function onAdapterRejection(reason) {
        if (!isCancel(reason)) {
            throwIfCancellationRequested(config);
            // Transform response data
            if (reason && reason.response) reason.response.data = transformData.call(config, reason.response.data, reason.response.headers, config.transformResponse);
        }
        return Promise.reject(reason);
    });
};

},{"./../utils":"lbtnr","./transformData":"fQ8XG","../cancel/isCancel":"gz0Pv","../defaults":"kgCsl","../cancel/CanceledError":"6k8Ga"}],"fQ8XG":[function(require,module,exports) {
'use strict';
var utils = require('./../utils');
var defaults = require('../defaults');
/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */ module.exports = function transformData(data, headers, fns) {
    var context = this || defaults;
    /*eslint no-param-reassign:0*/ utils.forEach(fns, function transform(fn) {
        data = fn.call(context, data, headers);
    });
    return data;
};

},{"./../utils":"lbtnr","../defaults":"kgCsl"}],"kgCsl":[function(require,module,exports) {
'use strict';
var process = require("process");
var utils = require('../utils');
var normalizeHeaderName = require('../helpers/normalizeHeaderName');
var AxiosError = require('../core/AxiosError');
var transitionalDefaults = require('./transitional');
var toFormData = require('../helpers/toFormData');
var DEFAULT_CONTENT_TYPE = {
    'Content-Type': 'application/x-www-form-urlencoded'
};
function setContentTypeIfUnset(headers, value) {
    if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) headers['Content-Type'] = value;
}
function getDefaultAdapter() {
    var adapter;
    if (typeof XMLHttpRequest !== 'undefined') // For browsers use XHR adapter
    adapter = require('../adapters/xhr');
    else if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') // For node use HTTP adapter
    adapter = require('../adapters/http');
    return adapter;
}
function stringifySafely(rawValue, parser, encoder) {
    if (utils.isString(rawValue)) try {
        (parser || JSON.parse)(rawValue);
        return utils.trim(rawValue);
    } catch (e) {
        if (e.name !== 'SyntaxError') throw e;
    }
    return (encoder || JSON.stringify)(rawValue);
}
var defaults = {
    transitional: transitionalDefaults,
    adapter: getDefaultAdapter(),
    transformRequest: [
        function transformRequest(data, headers) {
            normalizeHeaderName(headers, 'Accept');
            normalizeHeaderName(headers, 'Content-Type');
            if (utils.isFormData(data) || utils.isArrayBuffer(data) || utils.isBuffer(data) || utils.isStream(data) || utils.isFile(data) || utils.isBlob(data)) return data;
            if (utils.isArrayBufferView(data)) return data.buffer;
            if (utils.isURLSearchParams(data)) {
                setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
                return data.toString();
            }
            var isObjectPayload = utils.isObject(data);
            var contentType = headers && headers['Content-Type'];
            var isFileList;
            if ((isFileList = utils.isFileList(data)) || isObjectPayload && contentType === 'multipart/form-data') {
                var _FormData = this.env && this.env.FormData;
                return toFormData(isFileList ? {
                    'files[]': data
                } : data, _FormData && new _FormData());
            } else if (isObjectPayload || contentType === 'application/json') {
                setContentTypeIfUnset(headers, 'application/json');
                return stringifySafely(data);
            }
            return data;
        }
    ],
    transformResponse: [
        function transformResponse(data) {
            var transitional = this.transitional || defaults.transitional;
            var silentJSONParsing = transitional && transitional.silentJSONParsing;
            var forcedJSONParsing = transitional && transitional.forcedJSONParsing;
            var strictJSONParsing = !silentJSONParsing && this.responseType === 'json';
            if (strictJSONParsing || forcedJSONParsing && utils.isString(data) && data.length) try {
                return JSON.parse(data);
            } catch (e) {
                if (strictJSONParsing) {
                    if (e.name === 'SyntaxError') throw AxiosError.from(e, AxiosError.ERR_BAD_RESPONSE, this, null, this.response);
                    throw e;
                }
            }
            return data;
        }
    ],
    /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */ timeout: 0,
    xsrfCookieName: 'XSRF-TOKEN',
    xsrfHeaderName: 'X-XSRF-TOKEN',
    maxContentLength: -1,
    maxBodyLength: -1,
    env: {
        FormData: require('./env/FormData')
    },
    validateStatus: function validateStatus(status) {
        return status >= 200 && status < 300;
    },
    headers: {
        common: {
            'Accept': 'application/json, text/plain, */*'
        }
    }
};
utils.forEach([
    'delete',
    'get',
    'head'
], function forEachMethodNoData(method) {
    defaults.headers[method] = {};
});
utils.forEach([
    'post',
    'put',
    'patch'
], function forEachMethodWithData(method) {
    defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});
module.exports = defaults;

},{"process":"gq3cc","../utils":"lbtnr","../helpers/normalizeHeaderName":"988ye","../core/AxiosError":"fxYQp","./transitional":"5audw","../helpers/toFormData":"jJQ5Z","../adapters/xhr":"csj5T","../adapters/http":"csj5T","./env/FormData":"eDh7d"}],"gq3cc":[function(require,module,exports) {
// shim for using process in browser
var process = module.exports = {};
// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.
var cachedSetTimeout;
var cachedClearTimeout;
function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout() {
    throw new Error('clearTimeout has not been defined');
}
(function() {
    try {
        if (typeof setTimeout === 'function') cachedSetTimeout = setTimeout;
        else cachedSetTimeout = defaultSetTimout;
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') cachedClearTimeout = clearTimeout;
        else cachedClearTimeout = defaultClearTimeout;
    } catch (e1) {
        cachedClearTimeout = defaultClearTimeout;
    }
})();
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) //normal enviroments in sane situations
    return setTimeout(fun, 0);
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }
}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) //normal enviroments in sane situations
    return clearTimeout(marker);
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;
function cleanUpNextTick() {
    if (!draining || !currentQueue) return;
    draining = false;
    if (currentQueue.length) queue = currentQueue.concat(queue);
    else queueIndex = -1;
    if (queue.length) drainQueue();
}
function drainQueue() {
    if (draining) return;
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;
    var len = queue.length;
    while(len){
        currentQueue = queue;
        queue = [];
        while(++queueIndex < len)if (currentQueue) currentQueue[queueIndex].run();
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}
process.nextTick = function(fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) for(var i = 1; i < arguments.length; i++)args[i - 1] = arguments[i];
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) runTimeout(drainQueue);
};
// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function() {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};
function noop() {}
process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;
process.listeners = function(name) {
    return [];
};
process.binding = function(name) {
    throw new Error('process.binding is not supported');
};
process.cwd = function() {
    return '/';
};
process.chdir = function(dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() {
    return 0;
};

},{}],"988ye":[function(require,module,exports) {
'use strict';
var utils = require('../utils');
module.exports = function normalizeHeaderName(headers, normalizedName) {
    utils.forEach(headers, function processHeader(value, name) {
        if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
            headers[normalizedName] = value;
            delete headers[name];
        }
    });
};

},{"../utils":"lbtnr"}],"fxYQp":[function(require,module,exports) {
'use strict';
var utils = require('../utils');
/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [config] The config.
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */ function AxiosError(message, code, config, request, response) {
    Error.call(this);
    this.message = message;
    this.name = 'AxiosError';
    code && (this.code = code);
    config && (this.config = config);
    request && (this.request = request);
    response && (this.response = response);
}
utils.inherits(AxiosError, Error, {
    toJSON: function toJSON() {
        return {
            // Standard
            message: this.message,
            name: this.name,
            // Microsoft
            description: this.description,
            number: this.number,
            // Mozilla
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            // Axios
            config: this.config,
            code: this.code,
            status: this.response && this.response.status ? this.response.status : null
        };
    }
});
var prototype = AxiosError.prototype;
var descriptors = {};
[
    'ERR_BAD_OPTION_VALUE',
    'ERR_BAD_OPTION',
    'ECONNABORTED',
    'ETIMEDOUT',
    'ERR_NETWORK',
    'ERR_FR_TOO_MANY_REDIRECTS',
    'ERR_DEPRECATED',
    'ERR_BAD_RESPONSE',
    'ERR_BAD_REQUEST',
    'ERR_CANCELED'
].forEach(function(code) {
    descriptors[code] = {
        value: code
    };
});
Object.defineProperties(AxiosError, descriptors);
Object.defineProperty(prototype, 'isAxiosError', {
    value: true
});
// eslint-disable-next-line func-names
AxiosError.from = function(error, code, config, request, response, customProps) {
    var axiosError = Object.create(prototype);
    utils.toFlatObject(error, axiosError, function filter(obj) {
        return obj !== Error.prototype;
    });
    AxiosError.call(axiosError, error.message, code, config, request, response);
    axiosError.name = error.name;
    customProps && Object.assign(axiosError, customProps);
    return axiosError;
};
module.exports = AxiosError;

},{"../utils":"lbtnr"}],"5audw":[function(require,module,exports) {
'use strict';
module.exports = {
    silentJSONParsing: true,
    forcedJSONParsing: true,
    clarifyTimeoutError: false
};

},{}],"jJQ5Z":[function(require,module,exports) {
'use strict';
var Buffer = require("buffer").Buffer;
var utils = require('../utils');
/**
 * Convert a data object to FormData
 * @param {Object} obj
 * @param {?Object} [formData]
 * @returns {Object}
 **/ function toFormData(obj, formData) {
    // eslint-disable-next-line no-param-reassign
    formData = formData || new FormData();
    var stack = [];
    function convertValue(value) {
        if (value === null) return '';
        if (utils.isDate(value)) return value.toISOString();
        if (utils.isArrayBuffer(value) || utils.isTypedArray(value)) return typeof Blob === 'function' ? new Blob([
            value
        ]) : Buffer.from(value);
        return value;
    }
    function build(data, parentKey) {
        if (utils.isPlainObject(data) || utils.isArray(data)) {
            if (stack.indexOf(data) !== -1) throw Error('Circular reference detected in ' + parentKey);
            stack.push(data);
            utils.forEach(data, function each(value, key) {
                if (utils.isUndefined(value)) return;
                var fullKey = parentKey ? parentKey + '.' + key : key;
                var arr;
                if (value && !parentKey && typeof value === 'object') {
                    if (utils.endsWith(key, '{}')) // eslint-disable-next-line no-param-reassign
                    value = JSON.stringify(value);
                    else if (utils.endsWith(key, '[]') && (arr = utils.toArray(value))) {
                        // eslint-disable-next-line func-names
                        arr.forEach(function(el) {
                            !utils.isUndefined(el) && formData.append(fullKey, convertValue(el));
                        });
                        return;
                    }
                }
                build(value, fullKey);
            });
            stack.pop();
        } else formData.append(parentKey, convertValue(data));
    }
    build(obj);
    return formData;
}
module.exports = toFormData;

},{"buffer":"6tQNr","../utils":"lbtnr"}],"6tQNr":[function(require,module,exports) {
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */ /* eslint-disable no-proto */ 'use strict';
var base64 = require('base64-js');
var ieee754 = require('ieee754');
var customInspectSymbol = typeof Symbol === 'function' && typeof Symbol['for'] === 'function' // eslint-disable-line dot-notation
 ? Symbol['for']('nodejs.util.inspect.custom') // eslint-disable-line dot-notation
 : null;
exports.Buffer = Buffer;
exports.SlowBuffer = SlowBuffer;
exports.INSPECT_MAX_BYTES = 50;
var K_MAX_LENGTH = 2147483647;
exports.kMaxLength = K_MAX_LENGTH;
/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Print warning and recommend using `buffer` v4.x which has an Object
 *               implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * We report that the browser does not support typed arrays if the are not subclassable
 * using __proto__. Firefox 4-29 lacks support for adding new properties to `Uint8Array`
 * (See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438). IE 10 lacks support
 * for __proto__ and has a buggy typed array implementation.
 */ Buffer.TYPED_ARRAY_SUPPORT = typedArraySupport();
if (!Buffer.TYPED_ARRAY_SUPPORT && typeof console !== 'undefined' && typeof console.error === 'function') console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
function typedArraySupport() {
    // Can typed array instances can be augmented?
    try {
        var arr = new Uint8Array(1);
        var proto = {
            foo: function() {
                return 42;
            }
        };
        Object.setPrototypeOf(proto, Uint8Array.prototype);
        Object.setPrototypeOf(arr, proto);
        return arr.foo() === 42;
    } catch (e) {
        return false;
    }
}
Object.defineProperty(Buffer.prototype, 'parent', {
    enumerable: true,
    get: function() {
        if (!Buffer.isBuffer(this)) return undefined;
        return this.buffer;
    }
});
Object.defineProperty(Buffer.prototype, 'offset', {
    enumerable: true,
    get: function() {
        if (!Buffer.isBuffer(this)) return undefined;
        return this.byteOffset;
    }
});
function createBuffer(length) {
    if (length > K_MAX_LENGTH) throw new RangeError('The value "' + length + '" is invalid for option "size"');
    // Return an augmented `Uint8Array` instance
    var buf = new Uint8Array(length);
    Object.setPrototypeOf(buf, Buffer.prototype);
    return buf;
}
/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */ function Buffer(arg, encodingOrOffset, length) {
    // Common case.
    if (typeof arg === 'number') {
        if (typeof encodingOrOffset === 'string') throw new TypeError('The "string" argument must be of type string. Received type number');
        return allocUnsafe(arg);
    }
    return from(arg, encodingOrOffset, length);
}
Buffer.poolSize = 8192 // not used by this implementation
;
function from(value, encodingOrOffset, length) {
    if (typeof value === 'string') return fromString(value, encodingOrOffset);
    if (ArrayBuffer.isView(value)) return fromArrayView(value);
    if (value == null) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value);
    if (isInstance(value, ArrayBuffer) || value && isInstance(value.buffer, ArrayBuffer)) return fromArrayBuffer(value, encodingOrOffset, length);
    if (typeof SharedArrayBuffer !== 'undefined' && (isInstance(value, SharedArrayBuffer) || value && isInstance(value.buffer, SharedArrayBuffer))) return fromArrayBuffer(value, encodingOrOffset, length);
    if (typeof value === 'number') throw new TypeError('The "value" argument must not be of type number. Received type number');
    var valueOf = value.valueOf && value.valueOf();
    if (valueOf != null && valueOf !== value) return Buffer.from(valueOf, encodingOrOffset, length);
    var b = fromObject(value);
    if (b) return b;
    if (typeof Symbol !== 'undefined' && Symbol.toPrimitive != null && typeof value[Symbol.toPrimitive] === 'function') return Buffer.from(value[Symbol.toPrimitive]('string'), encodingOrOffset, length);
    throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value);
}
/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/ Buffer.from = function(value, encodingOrOffset, length) {
    return from(value, encodingOrOffset, length);
};
// Note: Change prototype *after* Buffer.from is defined to workaround Chrome bug:
// https://github.com/feross/buffer/pull/148
Object.setPrototypeOf(Buffer.prototype, Uint8Array.prototype);
Object.setPrototypeOf(Buffer, Uint8Array);
function assertSize(size) {
    if (typeof size !== 'number') throw new TypeError('"size" argument must be of type number');
    else if (size < 0) throw new RangeError('The value "' + size + '" is invalid for option "size"');
}
function alloc(size, fill, encoding) {
    assertSize(size);
    if (size <= 0) return createBuffer(size);
    if (fill !== undefined) // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpreted as a start offset.
    return typeof encoding === 'string' ? createBuffer(size).fill(fill, encoding) : createBuffer(size).fill(fill);
    return createBuffer(size);
}
/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/ Buffer.alloc = function(size, fill, encoding) {
    return alloc(size, fill, encoding);
};
function allocUnsafe(size) {
    assertSize(size);
    return createBuffer(size < 0 ? 0 : checked(size) | 0);
}
/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */ Buffer.allocUnsafe = function(size) {
    return allocUnsafe(size);
};
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */ Buffer.allocUnsafeSlow = function(size) {
    return allocUnsafe(size);
};
function fromString(string, encoding) {
    if (typeof encoding !== 'string' || encoding === '') encoding = 'utf8';
    if (!Buffer.isEncoding(encoding)) throw new TypeError('Unknown encoding: ' + encoding);
    var length = byteLength(string, encoding) | 0;
    var buf = createBuffer(length);
    var actual = buf.write(string, encoding);
    if (actual !== length) // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    buf = buf.slice(0, actual);
    return buf;
}
function fromArrayLike(array) {
    var length = array.length < 0 ? 0 : checked(array.length) | 0;
    var buf = createBuffer(length);
    for(var i = 0; i < length; i += 1)buf[i] = array[i] & 255;
    return buf;
}
function fromArrayView(arrayView) {
    if (isInstance(arrayView, Uint8Array)) {
        var copy = new Uint8Array(arrayView);
        return fromArrayBuffer(copy.buffer, copy.byteOffset, copy.byteLength);
    }
    return fromArrayLike(arrayView);
}
function fromArrayBuffer(array, byteOffset, length) {
    if (byteOffset < 0 || array.byteLength < byteOffset) throw new RangeError('"offset" is outside of buffer bounds');
    if (array.byteLength < byteOffset + (length || 0)) throw new RangeError('"length" is outside of buffer bounds');
    var buf;
    if (byteOffset === undefined && length === undefined) buf = new Uint8Array(array);
    else if (length === undefined) buf = new Uint8Array(array, byteOffset);
    else buf = new Uint8Array(array, byteOffset, length);
    // Return an augmented `Uint8Array` instance
    Object.setPrototypeOf(buf, Buffer.prototype);
    return buf;
}
function fromObject(obj) {
    if (Buffer.isBuffer(obj)) {
        var len = checked(obj.length) | 0;
        var buf = createBuffer(len);
        if (buf.length === 0) return buf;
        obj.copy(buf, 0, 0, len);
        return buf;
    }
    if (obj.length !== undefined) {
        if (typeof obj.length !== 'number' || numberIsNaN(obj.length)) return createBuffer(0);
        return fromArrayLike(obj);
    }
    if (obj.type === 'Buffer' && Array.isArray(obj.data)) return fromArrayLike(obj.data);
}
function checked(length) {
    // Note: cannot use `length < K_MAX_LENGTH` here because that fails when
    // length is NaN (which is otherwise coerced to zero.)
    if (length >= K_MAX_LENGTH) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + K_MAX_LENGTH.toString(16) + ' bytes');
    return length | 0;
}
function SlowBuffer(length) {
    if (+length != length) length = 0;
    return Buffer.alloc(+length);
}
Buffer.isBuffer = function isBuffer(b) {
    return b != null && b._isBuffer === true && b !== Buffer.prototype // so Buffer.isBuffer(Buffer.prototype) will be false
    ;
};
Buffer.compare = function compare(a, b) {
    if (isInstance(a, Uint8Array)) a = Buffer.from(a, a.offset, a.byteLength);
    if (isInstance(b, Uint8Array)) b = Buffer.from(b, b.offset, b.byteLength);
    if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
    if (a === b) return 0;
    var x = a.length;
    var y = b.length;
    for(var i = 0, len = Math.min(x, y); i < len; ++i)if (a[i] !== b[i]) {
        x = a[i];
        y = b[i];
        break;
    }
    if (x < y) return -1;
    if (y < x) return 1;
    return 0;
};
Buffer.isEncoding = function isEncoding(encoding) {
    switch(String(encoding).toLowerCase()){
        case 'hex':
        case 'utf8':
        case 'utf-8':
        case 'ascii':
        case 'latin1':
        case 'binary':
        case 'base64':
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
            return true;
        default:
            return false;
    }
};
Buffer.concat = function concat(list, length) {
    if (!Array.isArray(list)) throw new TypeError('"list" argument must be an Array of Buffers');
    if (list.length === 0) return Buffer.alloc(0);
    var i;
    if (length === undefined) {
        length = 0;
        for(i = 0; i < list.length; ++i)length += list[i].length;
    }
    var buffer = Buffer.allocUnsafe(length);
    var pos = 0;
    for(i = 0; i < list.length; ++i){
        var buf = list[i];
        if (isInstance(buf, Uint8Array)) {
            if (pos + buf.length > buffer.length) Buffer.from(buf).copy(buffer, pos);
            else Uint8Array.prototype.set.call(buffer, buf, pos);
        } else if (!Buffer.isBuffer(buf)) throw new TypeError('"list" argument must be an Array of Buffers');
        else buf.copy(buffer, pos);
        pos += buf.length;
    }
    return buffer;
};
function byteLength(string, encoding) {
    if (Buffer.isBuffer(string)) return string.length;
    if (ArrayBuffer.isView(string) || isInstance(string, ArrayBuffer)) return string.byteLength;
    if (typeof string !== 'string') throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof string);
    var len = string.length;
    var mustMatch = arguments.length > 2 && arguments[2] === true;
    if (!mustMatch && len === 0) return 0;
    // Use a for loop to avoid recursion
    var loweredCase = false;
    for(;;)switch(encoding){
        case 'ascii':
        case 'latin1':
        case 'binary':
            return len;
        case 'utf8':
        case 'utf-8':
            return utf8ToBytes(string).length;
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
            return len * 2;
        case 'hex':
            return len >>> 1;
        case 'base64':
            return base64ToBytes(string).length;
        default:
            if (loweredCase) return mustMatch ? -1 : utf8ToBytes(string).length // assume utf8
            ;
            encoding = ('' + encoding).toLowerCase();
            loweredCase = true;
    }
}
Buffer.byteLength = byteLength;
function slowToString(encoding, start, end) {
    var loweredCase = false;
    // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
    // property of a typed array.
    // This behaves neither like String nor Uint8Array in that we set start/end
    // to their upper/lower bounds if the value passed is out of range.
    // undefined is handled specially as per ECMA-262 6th Edition,
    // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
    if (start === undefined || start < 0) start = 0;
    // Return early if start > this.length. Done here to prevent potential uint32
    // coercion fail below.
    if (start > this.length) return '';
    if (end === undefined || end > this.length) end = this.length;
    if (end <= 0) return '';
    // Force coercion to uint32. This will also coerce falsey/NaN values to 0.
    end >>>= 0;
    start >>>= 0;
    if (end <= start) return '';
    if (!encoding) encoding = 'utf8';
    while(true)switch(encoding){
        case 'hex':
            return hexSlice(this, start, end);
        case 'utf8':
        case 'utf-8':
            return utf8Slice(this, start, end);
        case 'ascii':
            return asciiSlice(this, start, end);
        case 'latin1':
        case 'binary':
            return latin1Slice(this, start, end);
        case 'base64':
            return base64Slice(this, start, end);
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
            return utf16leSlice(this, start, end);
        default:
            if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
            encoding = (encoding + '').toLowerCase();
            loweredCase = true;
    }
}
// This property is used by `Buffer.isBuffer` (and the `is-buffer` npm package)
// to detect a Buffer instance. It's not possible to use `instanceof Buffer`
// reliably in a browserify context because there could be multiple different
// copies of the 'buffer' package in use. This method works even for Buffer
// instances that were created from another copy of the `buffer` package.
// See: https://github.com/feross/buffer/issues/154
Buffer.prototype._isBuffer = true;
function swap(b, n, m) {
    var i = b[n];
    b[n] = b[m];
    b[m] = i;
}
Buffer.prototype.swap16 = function swap16() {
    var len = this.length;
    if (len % 2 !== 0) throw new RangeError('Buffer size must be a multiple of 16-bits');
    for(var i = 0; i < len; i += 2)swap(this, i, i + 1);
    return this;
};
Buffer.prototype.swap32 = function swap32() {
    var len = this.length;
    if (len % 4 !== 0) throw new RangeError('Buffer size must be a multiple of 32-bits');
    for(var i = 0; i < len; i += 4){
        swap(this, i, i + 3);
        swap(this, i + 1, i + 2);
    }
    return this;
};
Buffer.prototype.swap64 = function swap64() {
    var len = this.length;
    if (len % 8 !== 0) throw new RangeError('Buffer size must be a multiple of 64-bits');
    for(var i = 0; i < len; i += 8){
        swap(this, i, i + 7);
        swap(this, i + 1, i + 6);
        swap(this, i + 2, i + 5);
        swap(this, i + 3, i + 4);
    }
    return this;
};
Buffer.prototype.toString = function toString() {
    var length = this.length;
    if (length === 0) return '';
    if (arguments.length === 0) return utf8Slice(this, 0, length);
    return slowToString.apply(this, arguments);
};
Buffer.prototype.toLocaleString = Buffer.prototype.toString;
Buffer.prototype.equals = function equals(b) {
    if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer');
    if (this === b) return true;
    return Buffer.compare(this, b) === 0;
};
Buffer.prototype.inspect = function inspect() {
    var str = '';
    var max = exports.INSPECT_MAX_BYTES;
    str = this.toString('hex', 0, max).replace(/(.{2})/g, '$1 ').trim();
    if (this.length > max) str += ' ... ';
    return '<Buffer ' + str + '>';
};
if (customInspectSymbol) Buffer.prototype[customInspectSymbol] = Buffer.prototype.inspect;
Buffer.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
    if (isInstance(target, Uint8Array)) target = Buffer.from(target, target.offset, target.byteLength);
    if (!Buffer.isBuffer(target)) throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof target);
    if (start === undefined) start = 0;
    if (end === undefined) end = target ? target.length : 0;
    if (thisStart === undefined) thisStart = 0;
    if (thisEnd === undefined) thisEnd = this.length;
    if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) throw new RangeError('out of range index');
    if (thisStart >= thisEnd && start >= end) return 0;
    if (thisStart >= thisEnd) return -1;
    if (start >= end) return 1;
    start >>>= 0;
    end >>>= 0;
    thisStart >>>= 0;
    thisEnd >>>= 0;
    if (this === target) return 0;
    var x = thisEnd - thisStart;
    var y = end - start;
    var len = Math.min(x, y);
    var thisCopy = this.slice(thisStart, thisEnd);
    var targetCopy = target.slice(start, end);
    for(var i = 0; i < len; ++i)if (thisCopy[i] !== targetCopy[i]) {
        x = thisCopy[i];
        y = targetCopy[i];
        break;
    }
    if (x < y) return -1;
    if (y < x) return 1;
    return 0;
};
// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
    // Empty buffer means no match
    if (buffer.length === 0) return -1;
    // Normalize byteOffset
    if (typeof byteOffset === 'string') {
        encoding = byteOffset;
        byteOffset = 0;
    } else if (byteOffset > 2147483647) byteOffset = 2147483647;
    else if (byteOffset < -2147483648) byteOffset = -2147483648;
    byteOffset = +byteOffset // Coerce to Number.
    ;
    if (numberIsNaN(byteOffset)) // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : buffer.length - 1;
    // Normalize byteOffset: negative offsets start from the end of the buffer
    if (byteOffset < 0) byteOffset = buffer.length + byteOffset;
    if (byteOffset >= buffer.length) {
        if (dir) return -1;
        else byteOffset = buffer.length - 1;
    } else if (byteOffset < 0) {
        if (dir) byteOffset = 0;
        else return -1;
    }
    // Normalize val
    if (typeof val === 'string') val = Buffer.from(val, encoding);
    // Finally, search either indexOf (if dir is true) or lastIndexOf
    if (Buffer.isBuffer(val)) {
        // Special case: looking for empty string/buffer always fails
        if (val.length === 0) return -1;
        return arrayIndexOf(buffer, val, byteOffset, encoding, dir);
    } else if (typeof val === 'number') {
        val = val & 255 // Search for a byte value [0-255]
        ;
        if (typeof Uint8Array.prototype.indexOf === 'function') {
            if (dir) return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset);
            else return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset);
        }
        return arrayIndexOf(buffer, [
            val
        ], byteOffset, encoding, dir);
    }
    throw new TypeError('val must be string, number or Buffer');
}
function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
    var indexSize = 1;
    var arrLength = arr.length;
    var valLength = val.length;
    if (encoding !== undefined) {
        encoding = String(encoding).toLowerCase();
        if (encoding === 'ucs2' || encoding === 'ucs-2' || encoding === 'utf16le' || encoding === 'utf-16le') {
            if (arr.length < 2 || val.length < 2) return -1;
            indexSize = 2;
            arrLength /= 2;
            valLength /= 2;
            byteOffset /= 2;
        }
    }
    function read(buf, i) {
        if (indexSize === 1) return buf[i];
        else return buf.readUInt16BE(i * indexSize);
    }
    var i1;
    if (dir) {
        var foundIndex = -1;
        for(i1 = byteOffset; i1 < arrLength; i1++)if (read(arr, i1) === read(val, foundIndex === -1 ? 0 : i1 - foundIndex)) {
            if (foundIndex === -1) foundIndex = i1;
            if (i1 - foundIndex + 1 === valLength) return foundIndex * indexSize;
        } else {
            if (foundIndex !== -1) i1 -= i1 - foundIndex;
            foundIndex = -1;
        }
    } else {
        if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;
        for(i1 = byteOffset; i1 >= 0; i1--){
            var found = true;
            for(var j = 0; j < valLength; j++)if (read(arr, i1 + j) !== read(val, j)) {
                found = false;
                break;
            }
            if (found) return i1;
        }
    }
    return -1;
}
Buffer.prototype.includes = function includes(val, byteOffset, encoding) {
    return this.indexOf(val, byteOffset, encoding) !== -1;
};
Buffer.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
    return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
};
Buffer.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
    return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
};
function hexWrite(buf, string, offset, length) {
    offset = Number(offset) || 0;
    var remaining = buf.length - offset;
    if (!length) length = remaining;
    else {
        length = Number(length);
        if (length > remaining) length = remaining;
    }
    var strLen = string.length;
    if (length > strLen / 2) length = strLen / 2;
    for(var i = 0; i < length; ++i){
        var parsed = parseInt(string.substr(i * 2, 2), 16);
        if (numberIsNaN(parsed)) return i;
        buf[offset + i] = parsed;
    }
    return i;
}
function utf8Write(buf, string, offset, length) {
    return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
}
function asciiWrite(buf, string, offset, length) {
    return blitBuffer(asciiToBytes(string), buf, offset, length);
}
function base64Write(buf, string, offset, length) {
    return blitBuffer(base64ToBytes(string), buf, offset, length);
}
function ucs2Write(buf, string, offset, length) {
    return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
}
Buffer.prototype.write = function write(string, offset, length, encoding) {
    // Buffer#write(string)
    if (offset === undefined) {
        encoding = 'utf8';
        length = this.length;
        offset = 0;
    // Buffer#write(string, encoding)
    } else if (length === undefined && typeof offset === 'string') {
        encoding = offset;
        length = this.length;
        offset = 0;
    // Buffer#write(string, offset[, length][, encoding])
    } else if (isFinite(offset)) {
        offset = offset >>> 0;
        if (isFinite(length)) {
            length = length >>> 0;
            if (encoding === undefined) encoding = 'utf8';
        } else {
            encoding = length;
            length = undefined;
        }
    } else throw new Error('Buffer.write(string, encoding, offset[, length]) is no longer supported');
    var remaining = this.length - offset;
    if (length === undefined || length > remaining) length = remaining;
    if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) throw new RangeError('Attempt to write outside buffer bounds');
    if (!encoding) encoding = 'utf8';
    var loweredCase = false;
    for(;;)switch(encoding){
        case 'hex':
            return hexWrite(this, string, offset, length);
        case 'utf8':
        case 'utf-8':
            return utf8Write(this, string, offset, length);
        case 'ascii':
        case 'latin1':
        case 'binary':
            return asciiWrite(this, string, offset, length);
        case 'base64':
            // Warning: maxLength not taken into account in base64Write
            return base64Write(this, string, offset, length);
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
            return ucs2Write(this, string, offset, length);
        default:
            if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
            encoding = ('' + encoding).toLowerCase();
            loweredCase = true;
    }
};
Buffer.prototype.toJSON = function toJSON() {
    return {
        type: 'Buffer',
        data: Array.prototype.slice.call(this._arr || this, 0)
    };
};
function base64Slice(buf, start, end) {
    if (start === 0 && end === buf.length) return base64.fromByteArray(buf);
    else return base64.fromByteArray(buf.slice(start, end));
}
function utf8Slice(buf, start, end) {
    end = Math.min(buf.length, end);
    var res = [];
    var i = start;
    while(i < end){
        var firstByte = buf[i];
        var codePoint = null;
        var bytesPerSequence = firstByte > 239 ? 4 : firstByte > 223 ? 3 : firstByte > 191 ? 2 : 1;
        if (i + bytesPerSequence <= end) {
            var secondByte, thirdByte, fourthByte, tempCodePoint;
            switch(bytesPerSequence){
                case 1:
                    if (firstByte < 128) codePoint = firstByte;
                    break;
                case 2:
                    secondByte = buf[i + 1];
                    if ((secondByte & 192) === 128) {
                        tempCodePoint = (firstByte & 31) << 6 | secondByte & 63;
                        if (tempCodePoint > 127) codePoint = tempCodePoint;
                    }
                    break;
                case 3:
                    secondByte = buf[i + 1];
                    thirdByte = buf[i + 2];
                    if ((secondByte & 192) === 128 && (thirdByte & 192) === 128) {
                        tempCodePoint = (firstByte & 15) << 12 | (secondByte & 63) << 6 | thirdByte & 63;
                        if (tempCodePoint > 2047 && (tempCodePoint < 55296 || tempCodePoint > 57343)) codePoint = tempCodePoint;
                    }
                    break;
                case 4:
                    secondByte = buf[i + 1];
                    thirdByte = buf[i + 2];
                    fourthByte = buf[i + 3];
                    if ((secondByte & 192) === 128 && (thirdByte & 192) === 128 && (fourthByte & 192) === 128) {
                        tempCodePoint = (firstByte & 15) << 18 | (secondByte & 63) << 12 | (thirdByte & 63) << 6 | fourthByte & 63;
                        if (tempCodePoint > 65535 && tempCodePoint < 1114112) codePoint = tempCodePoint;
                    }
            }
        }
        if (codePoint === null) {
            // we did not generate a valid codePoint so insert a
            // replacement char (U+FFFD) and advance only 1 byte
            codePoint = 65533;
            bytesPerSequence = 1;
        } else if (codePoint > 65535) {
            // encode to utf16 (surrogate pair dance)
            codePoint -= 65536;
            res.push(codePoint >>> 10 & 1023 | 55296);
            codePoint = 56320 | codePoint & 1023;
        }
        res.push(codePoint);
        i += bytesPerSequence;
    }
    return decodeCodePointsArray(res);
}
// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 4096;
function decodeCodePointsArray(codePoints) {
    var len = codePoints.length;
    if (len <= MAX_ARGUMENTS_LENGTH) return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
    ;
    // Decode in chunks to avoid "call stack size exceeded".
    var res = '';
    var i = 0;
    while(i < len)res += String.fromCharCode.apply(String, codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH));
    return res;
}
function asciiSlice(buf, start, end) {
    var ret = '';
    end = Math.min(buf.length, end);
    for(var i = start; i < end; ++i)ret += String.fromCharCode(buf[i] & 127);
    return ret;
}
function latin1Slice(buf, start, end) {
    var ret = '';
    end = Math.min(buf.length, end);
    for(var i = start; i < end; ++i)ret += String.fromCharCode(buf[i]);
    return ret;
}
function hexSlice(buf, start, end) {
    var len = buf.length;
    if (!start || start < 0) start = 0;
    if (!end || end < 0 || end > len) end = len;
    var out = '';
    for(var i = start; i < end; ++i)out += hexSliceLookupTable[buf[i]];
    return out;
}
function utf16leSlice(buf, start, end) {
    var bytes = buf.slice(start, end);
    var res = '';
    // If bytes.length is odd, the last 8 bits must be ignored (same as node.js)
    for(var i = 0; i < bytes.length - 1; i += 2)res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
    return res;
}
Buffer.prototype.slice = function slice(start, end) {
    var len = this.length;
    start = ~~start;
    end = end === undefined ? len : ~~end;
    if (start < 0) {
        start += len;
        if (start < 0) start = 0;
    } else if (start > len) start = len;
    if (end < 0) {
        end += len;
        if (end < 0) end = 0;
    } else if (end > len) end = len;
    if (end < start) end = start;
    var newBuf = this.subarray(start, end);
    // Return an augmented `Uint8Array` instance
    Object.setPrototypeOf(newBuf, Buffer.prototype);
    return newBuf;
};
/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */ function checkOffset(offset, ext, length) {
    if (offset % 1 !== 0 || offset < 0) throw new RangeError('offset is not uint');
    if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length');
}
Buffer.prototype.readUintLE = Buffer.prototype.readUIntLE = function readUIntLE(offset, byteLength1, noAssert) {
    offset = offset >>> 0;
    byteLength1 = byteLength1 >>> 0;
    if (!noAssert) checkOffset(offset, byteLength1, this.length);
    var val = this[offset];
    var mul = 1;
    var i = 0;
    while(++i < byteLength1 && (mul *= 256))val += this[offset + i] * mul;
    return val;
};
Buffer.prototype.readUintBE = Buffer.prototype.readUIntBE = function readUIntBE(offset, byteLength2, noAssert) {
    offset = offset >>> 0;
    byteLength2 = byteLength2 >>> 0;
    if (!noAssert) checkOffset(offset, byteLength2, this.length);
    var val = this[offset + --byteLength2];
    var mul = 1;
    while(byteLength2 > 0 && (mul *= 256))val += this[offset + --byteLength2] * mul;
    return val;
};
Buffer.prototype.readUint8 = Buffer.prototype.readUInt8 = function readUInt8(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 1, this.length);
    return this[offset];
};
Buffer.prototype.readUint16LE = Buffer.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    return this[offset] | this[offset + 1] << 8;
};
Buffer.prototype.readUint16BE = Buffer.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    return this[offset] << 8 | this[offset + 1];
};
Buffer.prototype.readUint32LE = Buffer.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 16777216;
};
Buffer.prototype.readUint32BE = Buffer.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return this[offset] * 16777216 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
};
Buffer.prototype.readIntLE = function readIntLE(offset, byteLength3, noAssert) {
    offset = offset >>> 0;
    byteLength3 = byteLength3 >>> 0;
    if (!noAssert) checkOffset(offset, byteLength3, this.length);
    var val = this[offset];
    var mul = 1;
    var i = 0;
    while(++i < byteLength3 && (mul *= 256))val += this[offset + i] * mul;
    mul *= 128;
    if (val >= mul) val -= Math.pow(2, 8 * byteLength3);
    return val;
};
Buffer.prototype.readIntBE = function readIntBE(offset, byteLength4, noAssert) {
    offset = offset >>> 0;
    byteLength4 = byteLength4 >>> 0;
    if (!noAssert) checkOffset(offset, byteLength4, this.length);
    var i = byteLength4;
    var mul = 1;
    var val = this[offset + --i];
    while(i > 0 && (mul *= 256))val += this[offset + --i] * mul;
    mul *= 128;
    if (val >= mul) val -= Math.pow(2, 8 * byteLength4);
    return val;
};
Buffer.prototype.readInt8 = function readInt8(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 1, this.length);
    if (!(this[offset] & 128)) return this[offset];
    return (255 - this[offset] + 1) * -1;
};
Buffer.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    var val = this[offset] | this[offset + 1] << 8;
    return val & 32768 ? val | 4294901760 : val;
};
Buffer.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    var val = this[offset + 1] | this[offset] << 8;
    return val & 32768 ? val | 4294901760 : val;
};
Buffer.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
};
Buffer.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
};
Buffer.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return ieee754.read(this, offset, true, 23, 4);
};
Buffer.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return ieee754.read(this, offset, false, 23, 4);
};
Buffer.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 8, this.length);
    return ieee754.read(this, offset, true, 52, 8);
};
Buffer.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 8, this.length);
    return ieee754.read(this, offset, false, 52, 8);
};
function checkInt(buf, value, offset, ext, max, min) {
    if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance');
    if (value > max || value < min) throw new RangeError('"value" argument is out of bounds');
    if (offset + ext > buf.length) throw new RangeError('Index out of range');
}
Buffer.prototype.writeUintLE = Buffer.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength5, noAssert) {
    value = +value;
    offset = offset >>> 0;
    byteLength5 = byteLength5 >>> 0;
    if (!noAssert) {
        var maxBytes = Math.pow(2, 8 * byteLength5) - 1;
        checkInt(this, value, offset, byteLength5, maxBytes, 0);
    }
    var mul = 1;
    var i = 0;
    this[offset] = value & 255;
    while(++i < byteLength5 && (mul *= 256))this[offset + i] = value / mul & 255;
    return offset + byteLength5;
};
Buffer.prototype.writeUintBE = Buffer.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength6, noAssert) {
    value = +value;
    offset = offset >>> 0;
    byteLength6 = byteLength6 >>> 0;
    if (!noAssert) {
        var maxBytes = Math.pow(2, 8 * byteLength6) - 1;
        checkInt(this, value, offset, byteLength6, maxBytes, 0);
    }
    var i = byteLength6 - 1;
    var mul = 1;
    this[offset + i] = value & 255;
    while(--i >= 0 && (mul *= 256))this[offset + i] = value / mul & 255;
    return offset + byteLength6;
};
Buffer.prototype.writeUint8 = Buffer.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 1, 255, 0);
    this[offset] = value & 255;
    return offset + 1;
};
Buffer.prototype.writeUint16LE = Buffer.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 65535, 0);
    this[offset] = value & 255;
    this[offset + 1] = value >>> 8;
    return offset + 2;
};
Buffer.prototype.writeUint16BE = Buffer.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 65535, 0);
    this[offset] = value >>> 8;
    this[offset + 1] = value & 255;
    return offset + 2;
};
Buffer.prototype.writeUint32LE = Buffer.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 4294967295, 0);
    this[offset + 3] = value >>> 24;
    this[offset + 2] = value >>> 16;
    this[offset + 1] = value >>> 8;
    this[offset] = value & 255;
    return offset + 4;
};
Buffer.prototype.writeUint32BE = Buffer.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 4294967295, 0);
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 255;
    return offset + 4;
};
Buffer.prototype.writeIntLE = function writeIntLE(value, offset, byteLength7, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) {
        var limit = Math.pow(2, 8 * byteLength7 - 1);
        checkInt(this, value, offset, byteLength7, limit - 1, -limit);
    }
    var i = 0;
    var mul = 1;
    var sub = 0;
    this[offset] = value & 255;
    while(++i < byteLength7 && (mul *= 256)){
        if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) sub = 1;
        this[offset + i] = (value / mul >> 0) - sub & 255;
    }
    return offset + byteLength7;
};
Buffer.prototype.writeIntBE = function writeIntBE(value, offset, byteLength8, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) {
        var limit = Math.pow(2, 8 * byteLength8 - 1);
        checkInt(this, value, offset, byteLength8, limit - 1, -limit);
    }
    var i = byteLength8 - 1;
    var mul = 1;
    var sub = 0;
    this[offset + i] = value & 255;
    while(--i >= 0 && (mul *= 256)){
        if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) sub = 1;
        this[offset + i] = (value / mul >> 0) - sub & 255;
    }
    return offset + byteLength8;
};
Buffer.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 1, 127, -128);
    if (value < 0) value = 255 + value + 1;
    this[offset] = value & 255;
    return offset + 1;
};
Buffer.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 32767, -32768);
    this[offset] = value & 255;
    this[offset + 1] = value >>> 8;
    return offset + 2;
};
Buffer.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 32767, -32768);
    this[offset] = value >>> 8;
    this[offset + 1] = value & 255;
    return offset + 2;
};
Buffer.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 2147483647, -2147483648);
    this[offset] = value & 255;
    this[offset + 1] = value >>> 8;
    this[offset + 2] = value >>> 16;
    this[offset + 3] = value >>> 24;
    return offset + 4;
};
Buffer.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 2147483647, -2147483648);
    if (value < 0) value = 4294967295 + value + 1;
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 255;
    return offset + 4;
};
function checkIEEE754(buf, value, offset, ext, max, min) {
    if (offset + ext > buf.length) throw new RangeError('Index out of range');
    if (offset < 0) throw new RangeError('Index out of range');
}
function writeFloat(buf, value, offset, littleEndian, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkIEEE754(buf, value, offset, 4, 340282346638528860000000000000000000000, -340282346638528860000000000000000000000);
    ieee754.write(buf, value, offset, littleEndian, 23, 4);
    return offset + 4;
}
Buffer.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
    return writeFloat(this, value, offset, true, noAssert);
};
Buffer.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
    return writeFloat(this, value, offset, false, noAssert);
};
function writeDouble(buf, value, offset, littleEndian, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkIEEE754(buf, value, offset, 8, 179769313486231570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, -179769313486231570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000);
    ieee754.write(buf, value, offset, littleEndian, 52, 8);
    return offset + 8;
}
Buffer.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
    return writeDouble(this, value, offset, true, noAssert);
};
Buffer.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
    return writeDouble(this, value, offset, false, noAssert);
};
// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy(target, targetStart, start, end) {
    if (!Buffer.isBuffer(target)) throw new TypeError('argument should be a Buffer');
    if (!start) start = 0;
    if (!end && end !== 0) end = this.length;
    if (targetStart >= target.length) targetStart = target.length;
    if (!targetStart) targetStart = 0;
    if (end > 0 && end < start) end = start;
    // Copy 0 bytes; we're done
    if (end === start) return 0;
    if (target.length === 0 || this.length === 0) return 0;
    // Fatal error conditions
    if (targetStart < 0) throw new RangeError('targetStart out of bounds');
    if (start < 0 || start >= this.length) throw new RangeError('Index out of range');
    if (end < 0) throw new RangeError('sourceEnd out of bounds');
    // Are we oob?
    if (end > this.length) end = this.length;
    if (target.length - targetStart < end - start) end = target.length - targetStart + start;
    var len = end - start;
    if (this === target && typeof Uint8Array.prototype.copyWithin === 'function') // Use built-in when available, missing from IE11
    this.copyWithin(targetStart, start, end);
    else Uint8Array.prototype.set.call(target, this.subarray(start, end), targetStart);
    return len;
};
// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill(val, start, end, encoding) {
    // Handle string cases:
    if (typeof val === 'string') {
        if (typeof start === 'string') {
            encoding = start;
            start = 0;
            end = this.length;
        } else if (typeof end === 'string') {
            encoding = end;
            end = this.length;
        }
        if (encoding !== undefined && typeof encoding !== 'string') throw new TypeError('encoding must be a string');
        if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) throw new TypeError('Unknown encoding: ' + encoding);
        if (val.length === 1) {
            var code = val.charCodeAt(0);
            if (encoding === 'utf8' && code < 128 || encoding === 'latin1') // Fast path: If `val` fits into a single byte, use that numeric value.
            val = code;
        }
    } else if (typeof val === 'number') val = val & 255;
    else if (typeof val === 'boolean') val = Number(val);
    // Invalid ranges are not set to a default, so can range check early.
    if (start < 0 || this.length < start || this.length < end) throw new RangeError('Out of range index');
    if (end <= start) return this;
    start = start >>> 0;
    end = end === undefined ? this.length : end >>> 0;
    if (!val) val = 0;
    var i;
    if (typeof val === 'number') for(i = start; i < end; ++i)this[i] = val;
    else {
        var bytes = Buffer.isBuffer(val) ? val : Buffer.from(val, encoding);
        var len = bytes.length;
        if (len === 0) throw new TypeError('The value "' + val + '" is invalid for argument "value"');
        for(i = 0; i < end - start; ++i)this[i + start] = bytes[i % len];
    }
    return this;
};
// HELPER FUNCTIONS
// ================
var INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g;
function base64clean(str) {
    // Node takes equal signs as end of the Base64 encoding
    str = str.split('=')[0];
    // Node strips out invalid characters like \n and \t from the string, base64-js does not
    str = str.trim().replace(INVALID_BASE64_RE, '');
    // Node converts strings with length < 2 to ''
    if (str.length < 2) return '';
    // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
    while(str.length % 4 !== 0)str = str + '=';
    return str;
}
function utf8ToBytes(string, units) {
    units = units || Infinity;
    var codePoint;
    var length = string.length;
    var leadSurrogate = null;
    var bytes = [];
    for(var i = 0; i < length; ++i){
        codePoint = string.charCodeAt(i);
        // is surrogate component
        if (codePoint > 55295 && codePoint < 57344) {
            // last char was a lead
            if (!leadSurrogate) {
                // no lead yet
                if (codePoint > 56319) {
                    // unexpected trail
                    if ((units -= 3) > -1) bytes.push(239, 191, 189);
                    continue;
                } else if (i + 1 === length) {
                    // unpaired lead
                    if ((units -= 3) > -1) bytes.push(239, 191, 189);
                    continue;
                }
                // valid lead
                leadSurrogate = codePoint;
                continue;
            }
            // 2 leads in a row
            if (codePoint < 56320) {
                if ((units -= 3) > -1) bytes.push(239, 191, 189);
                leadSurrogate = codePoint;
                continue;
            }
            // valid surrogate pair
            codePoint = (leadSurrogate - 55296 << 10 | codePoint - 56320) + 65536;
        } else if (leadSurrogate) // valid bmp char, but last char was a lead
        {
            if ((units -= 3) > -1) bytes.push(239, 191, 189);
        }
        leadSurrogate = null;
        // encode utf8
        if (codePoint < 128) {
            if ((units -= 1) < 0) break;
            bytes.push(codePoint);
        } else if (codePoint < 2048) {
            if ((units -= 2) < 0) break;
            bytes.push(codePoint >> 6 | 192, codePoint & 63 | 128);
        } else if (codePoint < 65536) {
            if ((units -= 3) < 0) break;
            bytes.push(codePoint >> 12 | 224, codePoint >> 6 & 63 | 128, codePoint & 63 | 128);
        } else if (codePoint < 1114112) {
            if ((units -= 4) < 0) break;
            bytes.push(codePoint >> 18 | 240, codePoint >> 12 & 63 | 128, codePoint >> 6 & 63 | 128, codePoint & 63 | 128);
        } else throw new Error('Invalid code point');
    }
    return bytes;
}
function asciiToBytes(str) {
    var byteArray = [];
    for(var i = 0; i < str.length; ++i)// Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 255);
    return byteArray;
}
function utf16leToBytes(str, units) {
    var c, hi, lo;
    var byteArray = [];
    for(var i = 0; i < str.length; ++i){
        if ((units -= 2) < 0) break;
        c = str.charCodeAt(i);
        hi = c >> 8;
        lo = c % 256;
        byteArray.push(lo);
        byteArray.push(hi);
    }
    return byteArray;
}
function base64ToBytes(str) {
    return base64.toByteArray(base64clean(str));
}
function blitBuffer(src, dst, offset, length) {
    for(var i = 0; i < length; ++i){
        if (i + offset >= dst.length || i >= src.length) break;
        dst[i + offset] = src[i];
    }
    return i;
}
// ArrayBuffer or Uint8Array objects from other contexts (i.e. iframes) do not pass
// the `instanceof` check but they should be treated as of that type.
// See: https://github.com/feross/buffer/issues/166
function isInstance(obj, type) {
    return obj instanceof type || obj != null && obj.constructor != null && obj.constructor.name != null && obj.constructor.name === type.name;
}
function numberIsNaN(obj) {
    // For IE11 support
    return obj !== obj // eslint-disable-line no-self-compare
    ;
}
// Create lookup table for `toString('hex')`
// See: https://github.com/feross/buffer/issues/219
var hexSliceLookupTable = function() {
    var alphabet = '0123456789abcdef';
    var table = new Array(256);
    for(var i = 0; i < 16; ++i){
        var i16 = i * 16;
        for(var j = 0; j < 16; ++j)table[i16 + j] = alphabet[i] + alphabet[j];
    }
    return table;
}();

},{"base64-js":"7jAMi","ieee754":"hITcF"}],"7jAMi":[function(require,module,exports) {
'use strict';
exports.byteLength = byteLength;
exports.toByteArray = toByteArray;
exports.fromByteArray = fromByteArray;
var lookup = [];
var revLookup = [];
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array;
var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
for(var i = 0, len = code.length; i < len; ++i){
    lookup[i] = code[i];
    revLookup[code.charCodeAt(i)] = i;
}
// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62;
revLookup['_'.charCodeAt(0)] = 63;
function getLens(b64) {
    var len1 = b64.length;
    if (len1 % 4 > 0) throw new Error('Invalid string. Length must be a multiple of 4');
    // Trim off extra bytes after placeholder bytes are found
    // See: https://github.com/beatgammit/base64-js/issues/42
    var validLen = b64.indexOf('=');
    if (validLen === -1) validLen = len1;
    var placeHoldersLen = validLen === len1 ? 0 : 4 - validLen % 4;
    return [
        validLen,
        placeHoldersLen
    ];
}
// base64 is 4/3 + up to two characters of the original data
function byteLength(b64) {
    var lens = getLens(b64);
    var validLen = lens[0];
    var placeHoldersLen = lens[1];
    return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
}
function _byteLength(b64, validLen, placeHoldersLen) {
    return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
}
function toByteArray(b64) {
    var tmp;
    var lens = getLens(b64);
    var validLen = lens[0];
    var placeHoldersLen = lens[1];
    var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen));
    var curByte = 0;
    // if there are placeholders, only get up to the last complete 4 chars
    var len2 = placeHoldersLen > 0 ? validLen - 4 : validLen;
    var i1;
    for(i1 = 0; i1 < len2; i1 += 4){
        tmp = revLookup[b64.charCodeAt(i1)] << 18 | revLookup[b64.charCodeAt(i1 + 1)] << 12 | revLookup[b64.charCodeAt(i1 + 2)] << 6 | revLookup[b64.charCodeAt(i1 + 3)];
        arr[curByte++] = tmp >> 16 & 255;
        arr[curByte++] = tmp >> 8 & 255;
        arr[curByte++] = tmp & 255;
    }
    if (placeHoldersLen === 2) {
        tmp = revLookup[b64.charCodeAt(i1)] << 2 | revLookup[b64.charCodeAt(i1 + 1)] >> 4;
        arr[curByte++] = tmp & 255;
    }
    if (placeHoldersLen === 1) {
        tmp = revLookup[b64.charCodeAt(i1)] << 10 | revLookup[b64.charCodeAt(i1 + 1)] << 4 | revLookup[b64.charCodeAt(i1 + 2)] >> 2;
        arr[curByte++] = tmp >> 8 & 255;
        arr[curByte++] = tmp & 255;
    }
    return arr;
}
function tripletToBase64(num) {
    return lookup[num >> 18 & 63] + lookup[num >> 12 & 63] + lookup[num >> 6 & 63] + lookup[num & 63];
}
function encodeChunk(uint8, start, end) {
    var tmp;
    var output = [];
    for(var i2 = start; i2 < end; i2 += 3){
        tmp = (uint8[i2] << 16 & 16711680) + (uint8[i2 + 1] << 8 & 65280) + (uint8[i2 + 2] & 255);
        output.push(tripletToBase64(tmp));
    }
    return output.join('');
}
function fromByteArray(uint8) {
    var tmp;
    var len3 = uint8.length;
    var extraBytes = len3 % 3 // if we have 1 byte left, pad 2 bytes
    ;
    var parts = [];
    var maxChunkLength = 16383 // must be multiple of 3
    ;
    // go through the array every three bytes, we'll deal with trailing stuff later
    for(var i3 = 0, len2 = len3 - extraBytes; i3 < len2; i3 += maxChunkLength)parts.push(encodeChunk(uint8, i3, i3 + maxChunkLength > len2 ? len2 : i3 + maxChunkLength));
    // pad the end with zeros, but make sure to not forget the extra bytes
    if (extraBytes === 1) {
        tmp = uint8[len3 - 1];
        parts.push(lookup[tmp >> 2] + lookup[tmp << 4 & 63] + '==');
    } else if (extraBytes === 2) {
        tmp = (uint8[len3 - 2] << 8) + uint8[len3 - 1];
        parts.push(lookup[tmp >> 10] + lookup[tmp >> 4 & 63] + lookup[tmp << 2 & 63] + '=');
    }
    return parts.join('');
}

},{}],"hITcF":[function(require,module,exports) {
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */ exports.read = function(buffer, offset, isLE, mLen, nBytes) {
    var e, m;
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var nBits = -7;
    var i = isLE ? nBytes - 1 : 0;
    var d = isLE ? -1 : 1;
    var s = buffer[offset + i];
    i += d;
    e = s & (1 << -nBits) - 1;
    s >>= -nBits;
    nBits += eLen;
    for(; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8);
    m = e & (1 << -nBits) - 1;
    e >>= -nBits;
    nBits += mLen;
    for(; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8);
    if (e === 0) e = 1 - eBias;
    else if (e === eMax) return m ? NaN : (s ? -1 : 1) * Infinity;
    else {
        m = m + Math.pow(2, mLen);
        e = e - eBias;
    }
    return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
};
exports.write = function(buffer, value, offset, isLE, mLen, nBytes) {
    var e, m, c;
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
    var i = isLE ? 0 : nBytes - 1;
    var d = isLE ? 1 : -1;
    var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
    value = Math.abs(value);
    if (isNaN(value) || value === Infinity) {
        m = isNaN(value) ? 1 : 0;
        e = eMax;
    } else {
        e = Math.floor(Math.log(value) / Math.LN2);
        if (value * (c = Math.pow(2, -e)) < 1) {
            e--;
            c *= 2;
        }
        if (e + eBias >= 1) value += rt / c;
        else value += rt * Math.pow(2, 1 - eBias);
        if (value * c >= 2) {
            e++;
            c /= 2;
        }
        if (e + eBias >= eMax) {
            m = 0;
            e = eMax;
        } else if (e + eBias >= 1) {
            m = (value * c - 1) * Math.pow(2, mLen);
            e = e + eBias;
        } else {
            m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
            e = 0;
        }
    }
    for(; mLen >= 8; buffer[offset + i] = m & 255, i += d, m /= 256, mLen -= 8);
    e = e << mLen | m;
    eLen += mLen;
    for(; eLen > 0; buffer[offset + i] = e & 255, i += d, e /= 256, eLen -= 8);
    buffer[offset + i - d] |= s * 128;
};

},{}],"csj5T":[function(require,module,exports) {
'use strict';
var utils = require('./../utils');
var settle = require('./../core/settle');
var cookies = require('./../helpers/cookies');
var buildURL = require('./../helpers/buildURL');
var buildFullPath = require('../core/buildFullPath');
var parseHeaders = require('./../helpers/parseHeaders');
var isURLSameOrigin = require('./../helpers/isURLSameOrigin');
var url = require('url');
var transitionalDefaults = require('../defaults/transitional');
var AxiosError = require('../core/AxiosError');
var CanceledError = require('../cancel/CanceledError');
module.exports = function xhrAdapter(config) {
    return new Promise(function dispatchXhrRequest(resolve, reject) {
        var requestData = config.data;
        var requestHeaders = config.headers;
        var responseType = config.responseType;
        var onCanceled;
        function done() {
            if (config.cancelToken) config.cancelToken.unsubscribe(onCanceled);
            if (config.signal) config.signal.removeEventListener('abort', onCanceled);
        }
        var request = new XMLHttpRequest();
        // HTTP basic authentication
        if (config.auth) {
            var username = config.auth.username || '';
            var password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : '';
            requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
        }
        var fullPath = buildFullPath(config.baseURL, config.url);
        var parsed = url.parse(fullPath);
        var protocol = utils.getProtocol(parsed.protocol);
        request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);
        // Set the request timeout in MS
        request.timeout = config.timeout;
        function onloadend() {
            if (!request) return;
            // Prepare the response
            var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
            var responseData = !responseType || responseType === 'text' || responseType === 'json' ? request.responseText : request.response;
            var response = {
                data: responseData,
                status: request.status,
                statusText: request.statusText,
                headers: responseHeaders,
                config: config,
                request: request
            };
            settle(function _resolve(value) {
                resolve(value);
                done();
            }, function _reject(err) {
                reject(err);
                done();
            }, response);
            // Clean up request
            request = null;
        }
        if ('onloadend' in request) // Use onloadend if available
        request.onloadend = onloadend;
        else // Listen for ready state to emulate onloadend
        request.onreadystatechange = function handleLoad() {
            if (!request || request.readyState !== 4) return;
            // The request errored out and we didn't get a response, this will be
            // handled by onerror instead
            // With one exception: request that using file: protocol, most browsers
            // will return status as 0 even though it's a successful request
            if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) return;
            // readystate handler is calling before onerror or ontimeout handlers,
            // so we should call onloadend on the next 'tick'
            setTimeout(onloadend);
        };
        // Handle browser request cancellation (as opposed to a manual cancellation)
        request.onabort = function handleAbort() {
            if (!request) return;
            reject(new AxiosError('Request aborted', AxiosError.ECONNABORTED, config, request));
            // Clean up request
            request = null;
        };
        // Handle low level network errors
        request.onerror = function handleError() {
            // Real errors are hidden from us by the browser
            // onerror should only fire if it's a network error
            reject(new AxiosError('Network Error', AxiosError.ERR_NETWORK, config, request, request));
            // Clean up request
            request = null;
        };
        // Handle timeout
        request.ontimeout = function handleTimeout() {
            var timeoutErrorMessage = config.timeout ? 'timeout of ' + config.timeout + 'ms exceeded' : 'timeout exceeded';
            var transitional = config.transitional || transitionalDefaults;
            if (config.timeoutErrorMessage) timeoutErrorMessage = config.timeoutErrorMessage;
            reject(new AxiosError(timeoutErrorMessage, transitional.clarifyTimeoutError ? AxiosError.ETIMEDOUT : AxiosError.ECONNABORTED, config, request));
            // Clean up request
            request = null;
        };
        // Add xsrf header
        // This is only done if running in a standard browser environment.
        // Specifically not if we're in a web worker, or react-native.
        if (utils.isStandardBrowserEnv()) {
            // Add xsrf header
            var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ? cookies.read(config.xsrfCookieName) : undefined;
            if (xsrfValue) requestHeaders[config.xsrfHeaderName] = xsrfValue;
        }
        // Add headers to the request
        if ('setRequestHeader' in request) utils.forEach(requestHeaders, function setRequestHeader(val, key) {
            if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') // Remove Content-Type if data is undefined
            delete requestHeaders[key];
            else // Otherwise add header to the request
            request.setRequestHeader(key, val);
        });
        // Add withCredentials to request if needed
        if (!utils.isUndefined(config.withCredentials)) request.withCredentials = !!config.withCredentials;
        // Add responseType to request if needed
        if (responseType && responseType !== 'json') request.responseType = config.responseType;
        // Handle progress if needed
        if (typeof config.onDownloadProgress === 'function') request.addEventListener('progress', config.onDownloadProgress);
        // Not all browsers support upload events
        if (typeof config.onUploadProgress === 'function' && request.upload) request.upload.addEventListener('progress', config.onUploadProgress);
        if (config.cancelToken || config.signal) {
            // Handle cancellation
            // eslint-disable-next-line func-names
            onCanceled = function(cancel) {
                if (!request) return;
                reject(!cancel || cancel && cancel.type ? new CanceledError() : cancel);
                request.abort();
                request = null;
            };
            config.cancelToken && config.cancelToken.subscribe(onCanceled);
            if (config.signal) config.signal.aborted ? onCanceled() : config.signal.addEventListener('abort', onCanceled);
        }
        if (!requestData) requestData = null;
        if (parsed.path === null) {
            reject(new AxiosError('Malformed URL ' + fullPath, AxiosError.ERR_BAD_REQUEST, config));
            return;
        }
        if (!utils.supportedProtocols.includes(protocol)) {
            reject(new AxiosError('Unsupported protocol ' + protocol, AxiosError.ERR_BAD_REQUEST, config));
            return;
        }
        // Send the request
        request.send(requestData);
    });
};

},{"./../utils":"lbtnr","./../core/settle":"kjUFy","./../helpers/cookies":"1yi5d","./../helpers/buildURL":"adWtE","../core/buildFullPath":"bxNKA","./../helpers/parseHeaders":"iWnAZ","./../helpers/isURLSameOrigin":"f8WRp","url":"9WlvK","../defaults/transitional":"5audw","../core/AxiosError":"fxYQp","../cancel/CanceledError":"6k8Ga"}],"kjUFy":[function(require,module,exports) {
'use strict';
var AxiosError = require('./AxiosError');
/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */ module.exports = function settle(resolve, reject, response) {
    var validateStatus = response.config.validateStatus;
    if (!response.status || !validateStatus || validateStatus(response.status)) resolve(response);
    else reject(new AxiosError('Request failed with status code ' + response.status, [
        AxiosError.ERR_BAD_REQUEST,
        AxiosError.ERR_BAD_RESPONSE
    ][Math.floor(response.status / 100) - 4], response.config, response.request, response));
};

},{"./AxiosError":"fxYQp"}],"1yi5d":[function(require,module,exports) {
'use strict';
var utils = require('./../utils');
module.exports = utils.isStandardBrowserEnv() ? // Standard browser envs support document.cookie
function standardBrowserEnv() {
    return {
        write: function write(name, value, expires, path, domain, secure) {
            var cookie = [];
            cookie.push(name + '=' + encodeURIComponent(value));
            if (utils.isNumber(expires)) cookie.push('expires=' + new Date(expires).toGMTString());
            if (utils.isString(path)) cookie.push('path=' + path);
            if (utils.isString(domain)) cookie.push('domain=' + domain);
            if (secure === true) cookie.push('secure');
            document.cookie = cookie.join('; ');
        },
        read: function read(name) {
            var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
            return match ? decodeURIComponent(match[3]) : null;
        },
        remove: function remove(name) {
            this.write(name, '', Date.now() - 86400000);
        }
    };
}() : // Non standard browser env (web workers, react-native) lack needed support.
function nonStandardBrowserEnv() {
    return {
        write: function write() {},
        read: function read() {
            return null;
        },
        remove: function remove() {}
    };
}();

},{"./../utils":"lbtnr"}],"bxNKA":[function(require,module,exports) {
'use strict';
var isAbsoluteURL = require('../helpers/isAbsoluteURL');
var combineURLs = require('../helpers/combineURLs');
/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 * @returns {string} The combined full path
 */ module.exports = function buildFullPath(baseURL, requestedURL) {
    if (baseURL && !isAbsoluteURL(requestedURL)) return combineURLs(baseURL, requestedURL);
    return requestedURL;
};

},{"../helpers/isAbsoluteURL":"caZL3","../helpers/combineURLs":"gHjEZ"}],"caZL3":[function(require,module,exports) {
'use strict';
/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */ module.exports = function isAbsoluteURL(url) {
    // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
    // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
    // by any combination of letters, digits, plus, period, or hyphen.
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
};

},{}],"gHjEZ":[function(require,module,exports) {
'use strict';
/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */ module.exports = function combineURLs(baseURL, relativeURL) {
    return relativeURL ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '') : baseURL;
};

},{}],"iWnAZ":[function(require,module,exports) {
'use strict';
var utils = require('./../utils');
// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
    'age',
    'authorization',
    'content-length',
    'content-type',
    'etag',
    'expires',
    'from',
    'host',
    'if-modified-since',
    'if-unmodified-since',
    'last-modified',
    'location',
    'max-forwards',
    'proxy-authorization',
    'referer',
    'retry-after',
    'user-agent'
];
/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */ module.exports = function parseHeaders(headers) {
    var parsed = {};
    var key;
    var val;
    var i;
    if (!headers) return parsed;
    utils.forEach(headers.split('\n'), function parser(line) {
        i = line.indexOf(':');
        key = utils.trim(line.substr(0, i)).toLowerCase();
        val = utils.trim(line.substr(i + 1));
        if (key) {
            if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) return;
            if (key === 'set-cookie') parsed[key] = (parsed[key] ? parsed[key] : []).concat([
                val
            ]);
            else parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
        }
    });
    return parsed;
};

},{"./../utils":"lbtnr"}],"f8WRp":[function(require,module,exports) {
'use strict';
var utils = require('./../utils');
module.exports = utils.isStandardBrowserEnv() ? // Standard browser envs have full support of the APIs needed to test
// whether the request URL is of the same origin as current location.
function standardBrowserEnv() {
    var msie = /(msie|trident)/i.test(navigator.userAgent);
    var urlParsingNode = document.createElement('a');
    var originURL;
    /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */ function resolveURL(url) {
        var href = url;
        if (msie) {
            // IE needs attribute set twice to normalize properties
            urlParsingNode.setAttribute('href', href);
            href = urlParsingNode.href;
        }
        urlParsingNode.setAttribute('href', href);
        // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
        return {
            href: urlParsingNode.href,
            protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
            host: urlParsingNode.host,
            search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
            hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
            hostname: urlParsingNode.hostname,
            port: urlParsingNode.port,
            pathname: urlParsingNode.pathname.charAt(0) === '/' ? urlParsingNode.pathname : '/' + urlParsingNode.pathname
        };
    }
    originURL = resolveURL(window.location.href);
    /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */ return function isURLSameOrigin(requestURL) {
        var parsed = utils.isString(requestURL) ? resolveURL(requestURL) : requestURL;
        return parsed.protocol === originURL.protocol && parsed.host === originURL.host;
    };
}() : // Non standard browser envs (web workers, react-native) lack needed support.
function nonStandardBrowserEnv() {
    return function isURLSameOrigin() {
        return true;
    };
}();

},{"./../utils":"lbtnr"}],"9WlvK":[function(require,module,exports) {
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
'use strict';
var punycode = require('punycode');
var util = require('./util');
exports.parse = urlParse;
exports.resolve = urlResolve;
exports.resolveObject = urlResolveObject;
exports.format = urlFormat;
exports.Url = Url;
function Url() {
    this.protocol = null;
    this.slashes = null;
    this.auth = null;
    this.host = null;
    this.port = null;
    this.hostname = null;
    this.hash = null;
    this.search = null;
    this.query = null;
    this.pathname = null;
    this.path = null;
    this.href = null;
}
// Reference: RFC 3986, RFC 1808, RFC 2396
// define these here so at least they only have to be
// compiled once on the first module load.
var protocolPattern = /^([a-z0-9.+-]+:)/i, portPattern = /:[0-9]*$/, // Special case for a simple path URL
simplePathPattern = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/, // RFC 2396: characters reserved for delimiting URLs.
// We actually just auto-escape these.
delims = [
    '<',
    '>',
    '"',
    '`',
    ' ',
    '\r',
    '\n',
    '\t'
], // RFC 2396: characters not allowed for various reasons.
unwise = [
    '{',
    '}',
    '|',
    '\\',
    '^',
    '`'
].concat(delims), // Allowed by RFCs, but cause of XSS attacks.  Always escape these.
autoEscape = [
    '\''
].concat(unwise), // Characters that are never ever allowed in a hostname.
// Note that any invalid chars are also handled, but these
// are the ones that are *expected* to be seen, so we fast-path
// them.
nonHostChars = [
    '%',
    '/',
    '?',
    ';',
    '#'
].concat(autoEscape), hostEndingChars = [
    '/',
    '?',
    '#'
], hostnameMaxLen = 255, hostnamePartPattern = /^[+a-z0-9A-Z_-]{0,63}$/, hostnamePartStart = /^([+a-z0-9A-Z_-]{0,63})(.*)$/, // protocols that can allow "unsafe" and "unwise" chars.
unsafeProtocol = {
    'javascript': true,
    'javascript:': true
}, // protocols that never have a hostname.
hostlessProtocol = {
    'javascript': true,
    'javascript:': true
}, // protocols that always contain a // bit.
slashedProtocol = {
    'http': true,
    'https': true,
    'ftp': true,
    'gopher': true,
    'file': true,
    'http:': true,
    'https:': true,
    'ftp:': true,
    'gopher:': true,
    'file:': true
}, querystring = require('querystring');
function urlParse(url, parseQueryString, slashesDenoteHost) {
    if (url && util.isObject(url) && url instanceof Url) return url;
    var u = new Url;
    u.parse(url, parseQueryString, slashesDenoteHost);
    return u;
}
Url.prototype.parse = function(url, parseQueryString, slashesDenoteHost) {
    if (!util.isString(url)) throw new TypeError("Parameter 'url' must be a string, not " + typeof url);
    // Copy chrome, IE, opera backslash-handling behavior.
    // Back slashes before the query string get converted to forward slashes
    // See: https://code.google.com/p/chromium/issues/detail?id=25916
    var queryIndex = url.indexOf('?'), splitter = queryIndex !== -1 && queryIndex < url.indexOf('#') ? '?' : '#', uSplit = url.split(splitter), slashRegex = /\\/g;
    uSplit[0] = uSplit[0].replace(slashRegex, '/');
    url = uSplit.join(splitter);
    var rest = url;
    // trim before proceeding.
    // This is to support parse stuff like "  http://foo.com  \n"
    rest = rest.trim();
    if (!slashesDenoteHost && url.split('#').length === 1) {
        // Try fast path regexp
        var simplePath = simplePathPattern.exec(rest);
        if (simplePath) {
            this.path = rest;
            this.href = rest;
            this.pathname = simplePath[1];
            if (simplePath[2]) {
                this.search = simplePath[2];
                if (parseQueryString) this.query = querystring.parse(this.search.substr(1));
                else this.query = this.search.substr(1);
            } else if (parseQueryString) {
                this.search = '';
                this.query = {};
            }
            return this;
        }
    }
    var proto = protocolPattern.exec(rest);
    if (proto) {
        proto = proto[0];
        var lowerProto = proto.toLowerCase();
        this.protocol = lowerProto;
        rest = rest.substr(proto.length);
    }
    // figure out if it's got a host
    // user@server is *always* interpreted as a hostname, and url
    // resolution will treat //foo/bar as host=foo,path=bar because that's
    // how the browser resolves relative URLs.
    if (slashesDenoteHost || proto || rest.match(/^\/\/[^@\/]+@[^@\/]+/)) {
        var slashes = rest.substr(0, 2) === '//';
        if (slashes && !(proto && hostlessProtocol[proto])) {
            rest = rest.substr(2);
            this.slashes = true;
        }
    }
    if (!hostlessProtocol[proto] && (slashes || proto && !slashedProtocol[proto])) {
        // there's a hostname.
        // the first instance of /, ?, ;, or # ends the host.
        //
        // If there is an @ in the hostname, then non-host chars *are* allowed
        // to the left of the last @ sign, unless some host-ending character
        // comes *before* the @-sign.
        // URLs are obnoxious.
        //
        // ex:
        // http://a@b@c/ => user:a@b host:c
        // http://a@b?@c => user:a host:c path:/?@c
        // v0.12 TODO(isaacs): This is not quite how Chrome does things.
        // Review our test case against browsers more comprehensively.
        // find the first instance of any hostEndingChars
        var hostEnd = -1;
        for(var i = 0; i < hostEndingChars.length; i++){
            var hec = rest.indexOf(hostEndingChars[i]);
            if (hec !== -1 && (hostEnd === -1 || hec < hostEnd)) hostEnd = hec;
        }
        // at this point, either we have an explicit point where the
        // auth portion cannot go past, or the last @ char is the decider.
        var auth, atSign;
        if (hostEnd === -1) // atSign can be anywhere.
        atSign = rest.lastIndexOf('@');
        else // atSign must be in auth portion.
        // http://a@b/c@d => host:b auth:a path:/c@d
        atSign = rest.lastIndexOf('@', hostEnd);
        // Now we have a portion which is definitely the auth.
        // Pull that off.
        if (atSign !== -1) {
            auth = rest.slice(0, atSign);
            rest = rest.slice(atSign + 1);
            this.auth = decodeURIComponent(auth);
        }
        // the host is the remaining to the left of the first non-host char
        hostEnd = -1;
        for(var i = 0; i < nonHostChars.length; i++){
            var hec = rest.indexOf(nonHostChars[i]);
            if (hec !== -1 && (hostEnd === -1 || hec < hostEnd)) hostEnd = hec;
        }
        // if we still have not hit it, then the entire thing is a host.
        if (hostEnd === -1) hostEnd = rest.length;
        this.host = rest.slice(0, hostEnd);
        rest = rest.slice(hostEnd);
        // pull out port.
        this.parseHost();
        // we've indicated that there is a hostname,
        // so even if it's empty, it has to be present.
        this.hostname = this.hostname || '';
        // if hostname begins with [ and ends with ]
        // assume that it's an IPv6 address.
        var ipv6Hostname = this.hostname[0] === '[' && this.hostname[this.hostname.length - 1] === ']';
        // validate a little.
        if (!ipv6Hostname) {
            var hostparts = this.hostname.split(/\./);
            for(var i = 0, l = hostparts.length; i < l; i++){
                var part = hostparts[i];
                if (!part) continue;
                if (!part.match(hostnamePartPattern)) {
                    var newpart = '';
                    for(var j = 0, k = part.length; j < k; j++)if (part.charCodeAt(j) > 127) // we replace non-ASCII char with a temporary placeholder
                    // we need this to make sure size of hostname is not
                    // broken by replacing non-ASCII by nothing
                    newpart += 'x';
                    else newpart += part[j];
                    // we test again with ASCII char only
                    if (!newpart.match(hostnamePartPattern)) {
                        var validParts = hostparts.slice(0, i);
                        var notHost = hostparts.slice(i + 1);
                        var bit = part.match(hostnamePartStart);
                        if (bit) {
                            validParts.push(bit[1]);
                            notHost.unshift(bit[2]);
                        }
                        if (notHost.length) rest = '/' + notHost.join('.') + rest;
                        this.hostname = validParts.join('.');
                        break;
                    }
                }
            }
        }
        if (this.hostname.length > hostnameMaxLen) this.hostname = '';
        else // hostnames are always lower case.
        this.hostname = this.hostname.toLowerCase();
        if (!ipv6Hostname) // IDNA Support: Returns a punycoded representation of "domain".
        // It only converts parts of the domain name that
        // have non-ASCII characters, i.e. it doesn't matter if
        // you call it with a domain that already is ASCII-only.
        this.hostname = punycode.toASCII(this.hostname);
        var p = this.port ? ':' + this.port : '';
        var h = this.hostname || '';
        this.host = h + p;
        this.href += this.host;
        // strip [ and ] from the hostname
        // the host field still retains them, though
        if (ipv6Hostname) {
            this.hostname = this.hostname.substr(1, this.hostname.length - 2);
            if (rest[0] !== '/') rest = '/' + rest;
        }
    }
    // now rest is set to the post-host stuff.
    // chop off any delim chars.
    if (!unsafeProtocol[lowerProto]) // First, make 100% sure that any "autoEscape" chars get
    // escaped, even if encodeURIComponent doesn't think they
    // need to be.
    for(var i = 0, l = autoEscape.length; i < l; i++){
        var ae = autoEscape[i];
        if (rest.indexOf(ae) === -1) continue;
        var esc = encodeURIComponent(ae);
        if (esc === ae) esc = escape(ae);
        rest = rest.split(ae).join(esc);
    }
    // chop off from the tail first.
    var hash = rest.indexOf('#');
    if (hash !== -1) {
        // got a fragment string.
        this.hash = rest.substr(hash);
        rest = rest.slice(0, hash);
    }
    var qm = rest.indexOf('?');
    if (qm !== -1) {
        this.search = rest.substr(qm);
        this.query = rest.substr(qm + 1);
        if (parseQueryString) this.query = querystring.parse(this.query);
        rest = rest.slice(0, qm);
    } else if (parseQueryString) {
        // no query string, but parseQueryString still requested
        this.search = '';
        this.query = {};
    }
    if (rest) this.pathname = rest;
    if (slashedProtocol[lowerProto] && this.hostname && !this.pathname) this.pathname = '/';
    //to support http.request
    if (this.pathname || this.search) {
        var p = this.pathname || '';
        var s = this.search || '';
        this.path = p + s;
    }
    // finally, reconstruct the href based on what has been validated.
    this.href = this.format();
    return this;
};
// format a parsed object into a url string
function urlFormat(obj) {
    // ensure it's an object, and not a string url.
    // If it's an obj, this is a no-op.
    // this way, you can call url_format() on strings
    // to clean up potentially wonky urls.
    if (util.isString(obj)) obj = urlParse(obj);
    if (!(obj instanceof Url)) return Url.prototype.format.call(obj);
    return obj.format();
}
Url.prototype.format = function() {
    var auth = this.auth || '';
    if (auth) {
        auth = encodeURIComponent(auth);
        auth = auth.replace(/%3A/i, ':');
        auth += '@';
    }
    var protocol = this.protocol || '', pathname = this.pathname || '', hash = this.hash || '', host = false, query = '';
    if (this.host) host = auth + this.host;
    else if (this.hostname) {
        host = auth + (this.hostname.indexOf(':') === -1 ? this.hostname : '[' + this.hostname + ']');
        if (this.port) host += ':' + this.port;
    }
    if (this.query && util.isObject(this.query) && Object.keys(this.query).length) query = querystring.stringify(this.query);
    var search = this.search || query && '?' + query || '';
    if (protocol && protocol.substr(-1) !== ':') protocol += ':';
    // only the slashedProtocols get the //.  Not mailto:, xmpp:, etc.
    // unless they had them to begin with.
    if (this.slashes || (!protocol || slashedProtocol[protocol]) && host !== false) {
        host = '//' + (host || '');
        if (pathname && pathname.charAt(0) !== '/') pathname = '/' + pathname;
    } else if (!host) host = '';
    if (hash && hash.charAt(0) !== '#') hash = '#' + hash;
    if (search && search.charAt(0) !== '?') search = '?' + search;
    pathname = pathname.replace(/[?#]/g, function(match) {
        return encodeURIComponent(match);
    });
    search = search.replace('#', '%23');
    return protocol + host + pathname + search + hash;
};
function urlResolve(source, relative) {
    return urlParse(source, false, true).resolve(relative);
}
Url.prototype.resolve = function(relative) {
    return this.resolveObject(urlParse(relative, false, true)).format();
};
function urlResolveObject(source, relative) {
    if (!source) return relative;
    return urlParse(source, false, true).resolveObject(relative);
}
Url.prototype.resolveObject = function(relative) {
    if (util.isString(relative)) {
        var rel = new Url();
        rel.parse(relative, false, true);
        relative = rel;
    }
    var result = new Url();
    var tkeys = Object.keys(this);
    for(var tk = 0; tk < tkeys.length; tk++){
        var tkey = tkeys[tk];
        result[tkey] = this[tkey];
    }
    // hash is always overridden, no matter what.
    // even href="" will remove it.
    result.hash = relative.hash;
    // if the relative url is empty, then there's nothing left to do here.
    if (relative.href === '') {
        result.href = result.format();
        return result;
    }
    // hrefs like //foo/bar always cut to the protocol.
    if (relative.slashes && !relative.protocol) {
        // take everything except the protocol from relative
        var rkeys = Object.keys(relative);
        for(var rk = 0; rk < rkeys.length; rk++){
            var rkey = rkeys[rk];
            if (rkey !== 'protocol') result[rkey] = relative[rkey];
        }
        //urlParse appends trailing / to urls like http://www.example.com
        if (slashedProtocol[result.protocol] && result.hostname && !result.pathname) result.path = result.pathname = '/';
        result.href = result.format();
        return result;
    }
    if (relative.protocol && relative.protocol !== result.protocol) {
        // if it's a known url protocol, then changing
        // the protocol does weird things
        // first, if it's not file:, then we MUST have a host,
        // and if there was a path
        // to begin with, then we MUST have a path.
        // if it is file:, then the host is dropped,
        // because that's known to be hostless.
        // anything else is assumed to be absolute.
        if (!slashedProtocol[relative.protocol]) {
            var keys = Object.keys(relative);
            for(var v = 0; v < keys.length; v++){
                var k = keys[v];
                result[k] = relative[k];
            }
            result.href = result.format();
            return result;
        }
        result.protocol = relative.protocol;
        if (!relative.host && !hostlessProtocol[relative.protocol]) {
            var relPath = (relative.pathname || '').split('/');
            while(relPath.length && !(relative.host = relPath.shift()));
            if (!relative.host) relative.host = '';
            if (!relative.hostname) relative.hostname = '';
            if (relPath[0] !== '') relPath.unshift('');
            if (relPath.length < 2) relPath.unshift('');
            result.pathname = relPath.join('/');
        } else result.pathname = relative.pathname;
        result.search = relative.search;
        result.query = relative.query;
        result.host = relative.host || '';
        result.auth = relative.auth;
        result.hostname = relative.hostname || relative.host;
        result.port = relative.port;
        // to support http.request
        if (result.pathname || result.search) {
            var p = result.pathname || '';
            var s = result.search || '';
            result.path = p + s;
        }
        result.slashes = result.slashes || relative.slashes;
        result.href = result.format();
        return result;
    }
    var isSourceAbs = result.pathname && result.pathname.charAt(0) === '/', isRelAbs = relative.host || relative.pathname && relative.pathname.charAt(0) === '/', mustEndAbs = isRelAbs || isSourceAbs || result.host && relative.pathname, removeAllDots = mustEndAbs, srcPath = result.pathname && result.pathname.split('/') || [], relPath = relative.pathname && relative.pathname.split('/') || [], psychotic = result.protocol && !slashedProtocol[result.protocol];
    // if the url is a non-slashed url, then relative
    // links like ../.. should be able
    // to crawl up to the hostname, as well.  This is strange.
    // result.protocol has already been set by now.
    // Later on, put the first path part into the host field.
    if (psychotic) {
        result.hostname = '';
        result.port = null;
        if (result.host) {
            if (srcPath[0] === '') srcPath[0] = result.host;
            else srcPath.unshift(result.host);
        }
        result.host = '';
        if (relative.protocol) {
            relative.hostname = null;
            relative.port = null;
            if (relative.host) {
                if (relPath[0] === '') relPath[0] = relative.host;
                else relPath.unshift(relative.host);
            }
            relative.host = null;
        }
        mustEndAbs = mustEndAbs && (relPath[0] === '' || srcPath[0] === '');
    }
    if (isRelAbs) {
        // it's absolute.
        result.host = relative.host || relative.host === '' ? relative.host : result.host;
        result.hostname = relative.hostname || relative.hostname === '' ? relative.hostname : result.hostname;
        result.search = relative.search;
        result.query = relative.query;
        srcPath = relPath;
    // fall through to the dot-handling below.
    } else if (relPath.length) {
        // it's relative
        // throw away the existing file, and take the new path instead.
        if (!srcPath) srcPath = [];
        srcPath.pop();
        srcPath = srcPath.concat(relPath);
        result.search = relative.search;
        result.query = relative.query;
    } else if (!util.isNullOrUndefined(relative.search)) {
        // just pull out the search.
        // like href='?foo'.
        // Put this after the other two cases because it simplifies the booleans
        if (psychotic) {
            result.hostname = result.host = srcPath.shift();
            //occationaly the auth can get stuck only in host
            //this especially happens in cases like
            //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
            var authInHost = result.host && result.host.indexOf('@') > 0 ? result.host.split('@') : false;
            if (authInHost) {
                result.auth = authInHost.shift();
                result.host = result.hostname = authInHost.shift();
            }
        }
        result.search = relative.search;
        result.query = relative.query;
        //to support http.request
        if (!util.isNull(result.pathname) || !util.isNull(result.search)) result.path = (result.pathname ? result.pathname : '') + (result.search ? result.search : '');
        result.href = result.format();
        return result;
    }
    if (!srcPath.length) {
        // no path at all.  easy.
        // we've already handled the other stuff above.
        result.pathname = null;
        //to support http.request
        if (result.search) result.path = '/' + result.search;
        else result.path = null;
        result.href = result.format();
        return result;
    }
    // if a url ENDs in . or .., then it must get a trailing slash.
    // however, if it ends in anything else non-slashy,
    // then it must NOT get a trailing slash.
    var last = srcPath.slice(-1)[0];
    var hasTrailingSlash = (result.host || relative.host || srcPath.length > 1) && (last === '.' || last === '..') || last === '';
    // strip single dots, resolve double dots to parent dir
    // if the path tries to go above the root, `up` ends up > 0
    var up = 0;
    for(var i = srcPath.length; i >= 0; i--){
        last = srcPath[i];
        if (last === '.') srcPath.splice(i, 1);
        else if (last === '..') {
            srcPath.splice(i, 1);
            up++;
        } else if (up) {
            srcPath.splice(i, 1);
            up--;
        }
    }
    // if the path is allowed to go above the root, restore leading ..s
    if (!mustEndAbs && !removeAllDots) for(; up--;)srcPath.unshift('..');
    if (mustEndAbs && srcPath[0] !== '' && (!srcPath[0] || srcPath[0].charAt(0) !== '/')) srcPath.unshift('');
    if (hasTrailingSlash && srcPath.join('/').substr(-1) !== '/') srcPath.push('');
    var isAbsolute = srcPath[0] === '' || srcPath[0] && srcPath[0].charAt(0) === '/';
    // put the host back
    if (psychotic) {
        result.hostname = result.host = isAbsolute ? '' : srcPath.length ? srcPath.shift() : '';
        //occationaly the auth can get stuck only in host
        //this especially happens in cases like
        //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
        var authInHost = result.host && result.host.indexOf('@') > 0 ? result.host.split('@') : false;
        if (authInHost) {
            result.auth = authInHost.shift();
            result.host = result.hostname = authInHost.shift();
        }
    }
    mustEndAbs = mustEndAbs || result.host && srcPath.length;
    if (mustEndAbs && !isAbsolute) srcPath.unshift('');
    if (!srcPath.length) {
        result.pathname = null;
        result.path = null;
    } else result.pathname = srcPath.join('/');
    //to support request.http
    if (!util.isNull(result.pathname) || !util.isNull(result.search)) result.path = (result.pathname ? result.pathname : '') + (result.search ? result.search : '');
    result.auth = relative.auth || result.auth;
    result.slashes = result.slashes || relative.slashes;
    result.href = result.format();
    return result;
};
Url.prototype.parseHost = function() {
    var host = this.host;
    var port = portPattern.exec(host);
    if (port) {
        port = port[0];
        if (port !== ':') this.port = port.substr(1);
        host = host.substr(0, host.length - port.length);
    }
    if (host) this.hostname = host;
};

},{"punycode":"lGvvW","./util":"kXWDA","querystring":"ax2Xi"}],"lGvvW":[function(require,module,exports) {
var global = arguments[3];
(function(root) {
    /** Detect free variables */ var freeExports = exports && !exports.nodeType && exports;
    var freeModule = module && !module.nodeType && module;
    var freeGlobal = typeof global == 'object' && global;
    if (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal || freeGlobal.self === freeGlobal) root = freeGlobal;
    /**
	 * The `punycode` object.
	 * @name punycode
	 * @type Object
	 */ var punycode, /** Highest positive signed 32-bit float value */ maxInt = 2147483647, /** Bootstring parameters */ base = 36, tMin = 1, tMax = 26, skew = 38, damp = 700, initialBias = 72, initialN = 128, delimiter = '-', /** Regular expressions */ regexPunycode = /^xn--/, regexNonASCII = /[^\x20-\x7E]/, regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g, /** Error messages */ errors = {
        'overflow': 'Overflow: input needs wider integers to process',
        'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
        'invalid-input': 'Invalid input'
    }, /** Convenience shortcuts */ baseMinusTMin = base - tMin, floor = Math.floor, stringFromCharCode = String.fromCharCode, /** Temporary variable */ key;
    /*--------------------------------------------------------------------------*/ /**
	 * A generic error utility function.
	 * @private
	 * @param {String} type The error type.
	 * @returns {Error} Throws a `RangeError` with the applicable error message.
	 */ function error(type) {
        throw RangeError(errors[type]);
    }
    /**
	 * A generic `Array#map` utility function.
	 * @private
	 * @param {Array} array The array to iterate over.
	 * @param {Function} callback The function that gets called for every array
	 * item.
	 * @returns {Array} A new array of values returned by the callback function.
	 */ function map(array, fn) {
        var length = array.length;
        var result = [];
        while(length--)result[length] = fn(array[length]);
        return result;
    }
    /**
	 * A simple `Array#map`-like wrapper to work with domain name strings or email
	 * addresses.
	 * @private
	 * @param {String} domain The domain name or email address.
	 * @param {Function} callback The function that gets called for every
	 * character.
	 * @returns {Array} A new string of characters returned by the callback
	 * function.
	 */ function mapDomain(string, fn) {
        var parts = string.split('@');
        var result = '';
        if (parts.length > 1) {
            // In email addresses, only the domain name should be punycoded. Leave
            // the local part (i.e. everything up to `@`) intact.
            result = parts[0] + '@';
            string = parts[1];
        }
        // Avoid `split(regex)` for IE8 compatibility. See #17.
        string = string.replace(regexSeparators, '\x2E');
        var labels = string.split('.');
        var encoded = map(labels, fn).join('.');
        return result + encoded;
    }
    /**
	 * Creates an array containing the numeric code points of each Unicode
	 * character in the string. While JavaScript uses UCS-2 internally,
	 * this function will convert a pair of surrogate halves (each of which
	 * UCS-2 exposes as separate characters) into a single code point,
	 * matching UTF-16.
	 * @see `punycode.ucs2.encode`
	 * @see <https://mathiasbynens.be/notes/javascript-encoding>
	 * @memberOf punycode.ucs2
	 * @name decode
	 * @param {String} string The Unicode input string (UCS-2).
	 * @returns {Array} The new array of code points.
	 */ function ucs2decode(string) {
        var output = [], counter = 0, length = string.length, value, extra;
        while(counter < length){
            value = string.charCodeAt(counter++);
            if (value >= 55296 && value <= 56319 && counter < length) {
                // high surrogate, and there is a next character
                extra = string.charCodeAt(counter++);
                if ((extra & 64512) == 56320) output.push(((value & 1023) << 10) + (extra & 1023) + 65536);
                else {
                    // unmatched surrogate; only append this code unit, in case the next
                    // code unit is the high surrogate of a surrogate pair
                    output.push(value);
                    counter--;
                }
            } else output.push(value);
        }
        return output;
    }
    /**
	 * Creates a string based on an array of numeric code points.
	 * @see `punycode.ucs2.decode`
	 * @memberOf punycode.ucs2
	 * @name encode
	 * @param {Array} codePoints The array of numeric code points.
	 * @returns {String} The new Unicode string (UCS-2).
	 */ function ucs2encode(array) {
        return map(array, function(value) {
            var output = '';
            if (value > 65535) {
                value -= 65536;
                output += stringFromCharCode(value >>> 10 & 1023 | 55296);
                value = 56320 | value & 1023;
            }
            output += stringFromCharCode(value);
            return output;
        }).join('');
    }
    /**
	 * Converts a basic code point into a digit/integer.
	 * @see `digitToBasic()`
	 * @private
	 * @param {Number} codePoint The basic numeric code point value.
	 * @returns {Number} The numeric value of a basic code point (for use in
	 * representing integers) in the range `0` to `base - 1`, or `base` if
	 * the code point does not represent a value.
	 */ function basicToDigit(codePoint) {
        if (codePoint - 48 < 10) return codePoint - 22;
        if (codePoint - 65 < 26) return codePoint - 65;
        if (codePoint - 97 < 26) return codePoint - 97;
        return base;
    }
    /**
	 * Converts a digit/integer into a basic code point.
	 * @see `basicToDigit()`
	 * @private
	 * @param {Number} digit The numeric value of a basic code point.
	 * @returns {Number} The basic code point whose value (when used for
	 * representing integers) is `digit`, which needs to be in the range
	 * `0` to `base - 1`. If `flag` is non-zero, the uppercase form is
	 * used; else, the lowercase form is used. The behavior is undefined
	 * if `flag` is non-zero and `digit` has no uppercase form.
	 */ function digitToBasic(digit, flag) {
        //  0..25 map to ASCII a..z or A..Z
        // 26..35 map to ASCII 0..9
        return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
    }
    /**
	 * Bias adaptation function as per section 3.4 of RFC 3492.
	 * http://tools.ietf.org/html/rfc3492#section-3.4
	 * @private
	 */ function adapt(delta, numPoints, firstTime) {
        var k = 0;
        delta = firstTime ? floor(delta / damp) : delta >> 1;
        delta += floor(delta / numPoints);
        for(; delta > baseMinusTMin * tMax >> 1; k += base)delta = floor(delta / baseMinusTMin);
        return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
    }
    /**
	 * Converts a Punycode string of ASCII-only symbols to a string of Unicode
	 * symbols.
	 * @memberOf punycode
	 * @param {String} input The Punycode string of ASCII-only symbols.
	 * @returns {String} The resulting string of Unicode symbols.
	 */ function decode(input) {
        // Don't use UCS-2
        var output = [], inputLength = input.length, out, i = 0, n = initialN, bias = initialBias, basic, j, index, oldi, w, k, digit, t, /** Cached calculation results */ baseMinusT;
        // Handle the basic code points: let `basic` be the number of input code
        // points before the last delimiter, or `0` if there is none, then copy
        // the first basic code points to the output.
        basic = input.lastIndexOf(delimiter);
        if (basic < 0) basic = 0;
        for(j = 0; j < basic; ++j){
            // if it's not a basic code point
            if (input.charCodeAt(j) >= 128) error('not-basic');
            output.push(input.charCodeAt(j));
        }
        // Main decoding loop: start just after the last delimiter if any basic code
        // points were copied; start at the beginning otherwise.
        for(index = basic > 0 ? basic + 1 : 0; index < inputLength;){
            // `index` is the index of the next character to be consumed.
            // Decode a generalized variable-length integer into `delta`,
            // which gets added to `i`. The overflow checking is easier
            // if we increase `i` as we go, then subtract off its starting
            // value at the end to obtain `delta`.
            for(oldi = i, w = 1, k = base;; k += base){
                if (index >= inputLength) error('invalid-input');
                digit = basicToDigit(input.charCodeAt(index++));
                if (digit >= base || digit > floor((maxInt - i) / w)) error('overflow');
                i += digit * w;
                t = k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias;
                if (digit < t) break;
                baseMinusT = base - t;
                if (w > floor(maxInt / baseMinusT)) error('overflow');
                w *= baseMinusT;
            }
            out = output.length + 1;
            bias = adapt(i - oldi, out, oldi == 0);
            // `i` was supposed to wrap around from `out` to `0`,
            // incrementing `n` each time, so we'll fix that now:
            if (floor(i / out) > maxInt - n) error('overflow');
            n += floor(i / out);
            i %= out;
            // Insert `n` at position `i` of the output
            output.splice(i++, 0, n);
        }
        return ucs2encode(output);
    }
    /**
	 * Converts a string of Unicode symbols (e.g. a domain name label) to a
	 * Punycode string of ASCII-only symbols.
	 * @memberOf punycode
	 * @param {String} input The string of Unicode symbols.
	 * @returns {String} The resulting Punycode string of ASCII-only symbols.
	 */ function encode(input) {
        var n, delta, handledCPCount, basicLength, bias, j, m, q, k, t, currentValue, output = [], /** `inputLength` will hold the number of code points in `input`. */ inputLength, /** Cached calculation results */ handledCPCountPlusOne, baseMinusT, qMinusT;
        // Convert the input in UCS-2 to Unicode
        input = ucs2decode(input);
        // Cache the length
        inputLength = input.length;
        // Initialize the state
        n = initialN;
        delta = 0;
        bias = initialBias;
        // Handle the basic code points
        for(j = 0; j < inputLength; ++j){
            currentValue = input[j];
            if (currentValue < 128) output.push(stringFromCharCode(currentValue));
        }
        handledCPCount = basicLength = output.length;
        // `handledCPCount` is the number of code points that have been handled;
        // `basicLength` is the number of basic code points.
        // Finish the basic string - if it is not empty - with a delimiter
        if (basicLength) output.push(delimiter);
        // Main encoding loop:
        while(handledCPCount < inputLength){
            // All non-basic code points < n have been handled already. Find the next
            // larger one:
            for(m = maxInt, j = 0; j < inputLength; ++j){
                currentValue = input[j];
                if (currentValue >= n && currentValue < m) m = currentValue;
            }
            // Increase `delta` enough to advance the decoder's <n,i> state to <m,0>,
            // but guard against overflow
            handledCPCountPlusOne = handledCPCount + 1;
            if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) error('overflow');
            delta += (m - n) * handledCPCountPlusOne;
            n = m;
            for(j = 0; j < inputLength; ++j){
                currentValue = input[j];
                if (currentValue < n && ++delta > maxInt) error('overflow');
                if (currentValue == n) {
                    // Represent delta as a generalized variable-length integer
                    for(q = delta, k = base;; k += base){
                        t = k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias;
                        if (q < t) break;
                        qMinusT = q - t;
                        baseMinusT = base - t;
                        output.push(stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0)));
                        q = floor(qMinusT / baseMinusT);
                    }
                    output.push(stringFromCharCode(digitToBasic(q, 0)));
                    bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
                    delta = 0;
                    ++handledCPCount;
                }
            }
            ++delta;
            ++n;
        }
        return output.join('');
    }
    /**
	 * Converts a Punycode string representing a domain name or an email address
	 * to Unicode. Only the Punycoded parts of the input will be converted, i.e.
	 * it doesn't matter if you call it on a string that has already been
	 * converted to Unicode.
	 * @memberOf punycode
	 * @param {String} input The Punycoded domain name or email address to
	 * convert to Unicode.
	 * @returns {String} The Unicode representation of the given Punycode
	 * string.
	 */ function toUnicode(input) {
        return mapDomain(input, function(string) {
            return regexPunycode.test(string) ? decode(string.slice(4).toLowerCase()) : string;
        });
    }
    /**
	 * Converts a Unicode string representing a domain name or an email address to
	 * Punycode. Only the non-ASCII parts of the domain name will be converted,
	 * i.e. it doesn't matter if you call it with a domain that's already in
	 * ASCII.
	 * @memberOf punycode
	 * @param {String} input The domain name or email address to convert, as a
	 * Unicode string.
	 * @returns {String} The Punycode representation of the given domain name or
	 * email address.
	 */ function toASCII(input) {
        return mapDomain(input, function(string) {
            return regexNonASCII.test(string) ? 'xn--' + encode(string) : string;
        });
    }
    /*--------------------------------------------------------------------------*/ /** Define the public API */ punycode = {
        /**
		 * A string representing the current Punycode.js version number.
		 * @memberOf punycode
		 * @type String
		 */ 'version': '1.3.2',
        /**
		 * An object of methods to convert from JavaScript's internal character
		 * representation (UCS-2) to Unicode code points, and back.
		 * @see <https://mathiasbynens.be/notes/javascript-encoding>
		 * @memberOf punycode
		 * @type Object
		 */ 'ucs2': {
            'decode': ucs2decode,
            'encode': ucs2encode
        },
        'decode': decode,
        'encode': encode,
        'toASCII': toASCII,
        'toUnicode': toUnicode
    };
    /** Expose `punycode` */ // Some AMD build optimizers, like r.js, check for specific condition patterns
    // like the following:
    if (typeof define == 'function' && typeof define.amd == 'object' && define.amd) define('punycode', function() {
        return punycode;
    });
    else if (freeExports && freeModule) {
        if (module.exports == freeExports) freeModule.exports = punycode;
        else for(key in punycode)punycode.hasOwnProperty(key) && (freeExports[key] = punycode[key]);
    } else root.punycode = punycode;
})(this);

},{}],"kXWDA":[function(require,module,exports) {
'use strict';
module.exports = {
    isString: function(arg) {
        return typeof arg === 'string';
    },
    isObject: function(arg) {
        return typeof arg === 'object' && arg !== null;
    },
    isNull: function(arg) {
        return arg === null;
    },
    isNullOrUndefined: function(arg) {
        return arg == null;
    }
};

},{}],"ax2Xi":[function(require,module,exports) {
'use strict';
exports.decode = exports.parse = require('./decode');
exports.encode = exports.stringify = require('./encode');

},{"./decode":"2H2tn","./encode":"5YeBz"}],"2H2tn":[function(require,module,exports) {
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
'use strict';
// If obj.hasOwnProperty has been overridden, then calling
// obj.hasOwnProperty(prop) will break.
// See: https://github.com/joyent/node/issues/1707
function hasOwnProperty(obj, prop) {
    return Object.prototype.hasOwnProperty.call(obj, prop);
}
module.exports = function(qs, sep, eq, options) {
    sep = sep || '&';
    eq = eq || '=';
    var obj = {};
    if (typeof qs !== 'string' || qs.length === 0) return obj;
    var regexp = /\+/g;
    qs = qs.split(sep);
    var maxKeys = 1000;
    if (options && typeof options.maxKeys === 'number') maxKeys = options.maxKeys;
    var len = qs.length;
    // maxKeys <= 0 means that we should not limit keys count
    if (maxKeys > 0 && len > maxKeys) len = maxKeys;
    for(var i = 0; i < len; ++i){
        var x = qs[i].replace(regexp, '%20'), idx = x.indexOf(eq), kstr, vstr, k, v;
        if (idx >= 0) {
            kstr = x.substr(0, idx);
            vstr = x.substr(idx + 1);
        } else {
            kstr = x;
            vstr = '';
        }
        k = decodeURIComponent(kstr);
        v = decodeURIComponent(vstr);
        if (!hasOwnProperty(obj, k)) obj[k] = v;
        else if (isArray(obj[k])) obj[k].push(v);
        else obj[k] = [
            obj[k],
            v
        ];
    }
    return obj;
};
var isArray = Array.isArray || function(xs) {
    return Object.prototype.toString.call(xs) === '[object Array]';
};

},{}],"5YeBz":[function(require,module,exports) {
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
'use strict';
var stringifyPrimitive = function(v) {
    switch(typeof v){
        case 'string':
            return v;
        case 'boolean':
            return v ? 'true' : 'false';
        case 'number':
            return isFinite(v) ? v : '';
        default:
            return '';
    }
};
module.exports = function(obj, sep, eq, name) {
    sep = sep || '&';
    eq = eq || '=';
    if (obj === null) obj = undefined;
    if (typeof obj === 'object') return map(objectKeys(obj), function(k) {
        var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
        if (isArray(obj[k])) return map(obj[k], function(v) {
            return ks + encodeURIComponent(stringifyPrimitive(v));
        }).join(sep);
        else return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
    }).join(sep);
    if (!name) return '';
    return encodeURIComponent(stringifyPrimitive(name)) + eq + encodeURIComponent(stringifyPrimitive(obj));
};
var isArray = Array.isArray || function(xs) {
    return Object.prototype.toString.call(xs) === '[object Array]';
};
function map(xs, f) {
    if (xs.map) return xs.map(f);
    var res = [];
    for(var i = 0; i < xs.length; i++)res.push(f(xs[i], i));
    return res;
}
var objectKeys = Object.keys || function(obj) {
    var res = [];
    for(var key in obj)if (Object.prototype.hasOwnProperty.call(obj, key)) res.push(key);
    return res;
};

},{}],"6k8Ga":[function(require,module,exports) {
'use strict';
var AxiosError = require('../core/AxiosError');
var utils = require('../utils');
/**
 * A `CanceledError` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */ function CanceledError(message) {
    // eslint-disable-next-line no-eq-null,eqeqeq
    AxiosError.call(this, message == null ? 'canceled' : message, AxiosError.ERR_CANCELED);
    this.name = 'CanceledError';
}
utils.inherits(CanceledError, AxiosError, {
    __CANCEL__: true
});
module.exports = CanceledError;

},{"../core/AxiosError":"fxYQp","../utils":"lbtnr"}],"eDh7d":[function(require,module,exports) {
// eslint-disable-next-line strict
module.exports = null;

},{}],"gz0Pv":[function(require,module,exports) {
'use strict';
module.exports = function isCancel(value) {
    return !!(value && value.__CANCEL__);
};

},{}],"1ogTa":[function(require,module,exports) {
'use strict';
var utils = require('../utils');
/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 * @returns {Object} New object resulting from merging config2 to config1
 */ module.exports = function mergeConfig(config1, config2) {
    // eslint-disable-next-line no-param-reassign
    config2 = config2 || {};
    var config = {};
    function getMergedValue(target, source) {
        if (utils.isPlainObject(target) && utils.isPlainObject(source)) return utils.merge(target, source);
        else if (utils.isPlainObject(source)) return utils.merge({}, source);
        else if (utils.isArray(source)) return source.slice();
        return source;
    }
    // eslint-disable-next-line consistent-return
    function mergeDeepProperties(prop) {
        if (!utils.isUndefined(config2[prop])) return getMergedValue(config1[prop], config2[prop]);
        else if (!utils.isUndefined(config1[prop])) return getMergedValue(undefined, config1[prop]);
    }
    // eslint-disable-next-line consistent-return
    function valueFromConfig2(prop) {
        if (!utils.isUndefined(config2[prop])) return getMergedValue(undefined, config2[prop]);
    }
    // eslint-disable-next-line consistent-return
    function defaultToConfig2(prop) {
        if (!utils.isUndefined(config2[prop])) return getMergedValue(undefined, config2[prop]);
        else if (!utils.isUndefined(config1[prop])) return getMergedValue(undefined, config1[prop]);
    }
    // eslint-disable-next-line consistent-return
    function mergeDirectKeys(prop) {
        if (prop in config2) return getMergedValue(config1[prop], config2[prop]);
        else if (prop in config1) return getMergedValue(undefined, config1[prop]);
    }
    var mergeMap = {
        'url': valueFromConfig2,
        'method': valueFromConfig2,
        'data': valueFromConfig2,
        'baseURL': defaultToConfig2,
        'transformRequest': defaultToConfig2,
        'transformResponse': defaultToConfig2,
        'paramsSerializer': defaultToConfig2,
        'timeout': defaultToConfig2,
        'timeoutMessage': defaultToConfig2,
        'withCredentials': defaultToConfig2,
        'adapter': defaultToConfig2,
        'responseType': defaultToConfig2,
        'xsrfCookieName': defaultToConfig2,
        'xsrfHeaderName': defaultToConfig2,
        'onUploadProgress': defaultToConfig2,
        'onDownloadProgress': defaultToConfig2,
        'decompress': defaultToConfig2,
        'maxContentLength': defaultToConfig2,
        'maxBodyLength': defaultToConfig2,
        'beforeRedirect': defaultToConfig2,
        'transport': defaultToConfig2,
        'httpAgent': defaultToConfig2,
        'httpsAgent': defaultToConfig2,
        'cancelToken': defaultToConfig2,
        'socketPath': defaultToConfig2,
        'responseEncoding': defaultToConfig2,
        'validateStatus': mergeDirectKeys
    };
    utils.forEach(Object.keys(config1).concat(Object.keys(config2)), function computeConfigValue(prop) {
        var merge = mergeMap[prop] || mergeDeepProperties;
        var configValue = merge(prop);
        utils.isUndefined(configValue) && merge !== mergeDirectKeys || (config[prop] = configValue);
    });
    return config;
};

},{"../utils":"lbtnr"}],"isK1r":[function(require,module,exports) {
'use strict';
var VERSION = require('../env/data').version;
var AxiosError = require('../core/AxiosError');
var validators = {};
// eslint-disable-next-line func-names
[
    'object',
    'boolean',
    'number',
    'function',
    'string',
    'symbol'
].forEach(function(type, i) {
    validators[type] = function validator(thing) {
        return typeof thing === type || 'a' + (i < 1 ? 'n ' : ' ') + type;
    };
});
var deprecatedWarnings = {};
/**
 * Transitional option validator
 * @param {function|boolean?} validator - set to false if the transitional option has been removed
 * @param {string?} version - deprecated version / removed since version
 * @param {string?} message - some message with additional info
 * @returns {function}
 */ validators.transitional = function transitional(validator, version, message) {
    function formatMessage(opt, desc) {
        return '[Axios v' + VERSION + '] Transitional option \'' + opt + '\'' + desc + (message ? '. ' + message : '');
    }
    // eslint-disable-next-line func-names
    return function(value, opt, opts) {
        if (validator === false) throw new AxiosError(formatMessage(opt, ' has been removed' + (version ? ' in ' + version : '')), AxiosError.ERR_DEPRECATED);
        if (version && !deprecatedWarnings[opt]) {
            deprecatedWarnings[opt] = true;
            // eslint-disable-next-line no-console
            console.warn(formatMessage(opt, ' has been deprecated since v' + version + ' and will be removed in the near future'));
        }
        return validator ? validator(value, opt, opts) : true;
    };
};
/**
 * Assert object's properties type
 * @param {object} options
 * @param {object} schema
 * @param {boolean?} allowUnknown
 */ function assertOptions(options, schema, allowUnknown) {
    if (typeof options !== 'object') throw new AxiosError('options must be an object', AxiosError.ERR_BAD_OPTION_VALUE);
    var keys = Object.keys(options);
    var i = keys.length;
    while(i-- > 0){
        var opt = keys[i];
        var validator = schema[opt];
        if (validator) {
            var value = options[opt];
            var result = value === undefined || validator(value, opt, options);
            if (result !== true) throw new AxiosError('option ' + opt + ' must be ' + result, AxiosError.ERR_BAD_OPTION_VALUE);
            continue;
        }
        if (allowUnknown !== true) throw new AxiosError('Unknown option ' + opt, AxiosError.ERR_BAD_OPTION);
    }
}
module.exports = {
    assertOptions: assertOptions,
    validators: validators
};

},{"../env/data":"4oEjm","../core/AxiosError":"fxYQp"}],"4oEjm":[function(require,module,exports) {
module.exports = {
    "version": "0.27.0"
};

},{}],"fsLds":[function(require,module,exports) {
'use strict';
var CanceledError = require('./CanceledError');
/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */ function CancelToken(executor) {
    if (typeof executor !== 'function') throw new TypeError('executor must be a function.');
    var resolvePromise;
    this.promise = new Promise(function promiseExecutor(resolve) {
        resolvePromise = resolve;
    });
    var token = this;
    // eslint-disable-next-line func-names
    this.promise.then(function(cancel) {
        if (!token._listeners) return;
        var i;
        var l = token._listeners.length;
        for(i = 0; i < l; i++)token._listeners[i](cancel);
        token._listeners = null;
    });
    // eslint-disable-next-line func-names
    this.promise.then = function(onfulfilled) {
        var _resolve;
        // eslint-disable-next-line func-names
        var promise = new Promise(function(resolve) {
            token.subscribe(resolve);
            _resolve = resolve;
        }).then(onfulfilled);
        promise.cancel = function reject() {
            token.unsubscribe(_resolve);
        };
        return promise;
    };
    executor(function cancel(message) {
        if (token.reason) // Cancellation has already been requested
        return;
        token.reason = new CanceledError(message);
        resolvePromise(token.reason);
    });
}
/**
 * Throws a `CanceledError` if cancellation has been requested.
 */ CancelToken.prototype.throwIfRequested = function throwIfRequested() {
    if (this.reason) throw this.reason;
};
/**
 * Subscribe to the cancel signal
 */ CancelToken.prototype.subscribe = function subscribe(listener) {
    if (this.reason) {
        listener(this.reason);
        return;
    }
    if (this._listeners) this._listeners.push(listener);
    else this._listeners = [
        listener
    ];
};
/**
 * Unsubscribe from the cancel signal
 */ CancelToken.prototype.unsubscribe = function unsubscribe(listener) {
    if (!this._listeners) return;
    var index = this._listeners.indexOf(listener);
    if (index !== -1) this._listeners.splice(index, 1);
};
/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */ CancelToken.source = function source() {
    var cancel;
    var token = new CancelToken(function executor(c) {
        cancel = c;
    });
    return {
        token: token,
        cancel: cancel
    };
};
module.exports = CancelToken;

},{"./CanceledError":"6k8Ga"}],"cwX15":[function(require,module,exports) {
'use strict';
/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */ module.exports = function spread(callback) {
    return function wrap(arr) {
        return callback.apply(null, arr);
    };
};

},{}],"bsdyt":[function(require,module,exports) {
'use strict';
var utils = require('./../utils');
/**
 * Determines whether the payload is an error thrown by Axios
 *
 * @param {*} payload The value to test
 * @returns {boolean} True if the payload is an error thrown by Axios, otherwise false
 */ module.exports = function isAxiosError(payload) {
    return utils.isObject(payload) && payload.isAxiosError === true;
};

},{"./../utils":"lbtnr"}],"1crXd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "useBookmarkStore", ()=>useBookmarkStore
);
var _hookClass = require("./hookClass");
var _hooks = require("preact/hooks");
class BookmarkStore extends _hookClass.HookClass {
    bookmarks = new Set();
    key = "FLEXBOARD_BOOKMARKS";
    init() {
        const rawbookmarks = localStorage.getItem(this.key);
        if (rawbookmarks) {
            this.bookmarks = new Set(rawbookmarks.split(";").map((base64bookmark)=>atob(base64bookmark)
            ));
            this.invokeCallbacks();
        }
    }
    hasBookmark(bookmark) {
        return this.bookmarks.has(bookmark);
    }
    toggleBookmark(bookmark) {
        if (this.bookmarks.has(bookmark)) this.bookmarks.delete(bookmark);
        else this.bookmarks.add(bookmark);
        this.updateBookmarks();
    }
    getBookmarks() {
        return Array.from(this.bookmarks);
    }
    updateBookmarks() {
        const bookmarksString = Array.from(this.bookmarks).map((bookmark)=>window.btoa(bookmark)
        ).join(";");
        localStorage.setItem(this.key, bookmarksString);
        this.invokeCallbacks();
    }
}
const bookmarkStore = new BookmarkStore();
const useBookmarkStore = ()=>{
    const [nounce, setNounce] = _hooks.useState(Math.random());
    _hooks.useEffect(()=>{
        bookmarkStore.setCallback(setNounce);
        bookmarkStore.init();
    }, []);
    return {
        bookmarkStore,
        nounce,
        setNounce
    };
};

},{"./hookClass":"3IghV","preact/hooks":"97VL9","@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"1IJMQ":[function(require,module,exports) {
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
var _qrComponent = require("./qr.component");
parcelHelpers.exportAll(_qrComponent, exports);

},{"./loader.component":"7ODzE","./logo.component":"5Z8AW","./splash-logo.component":"dkFkE","./tabs.component":"1gJUA","./header.component":"kGp3O","./card.component":"6YJcz","./qr.component":"aJbpU","@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"7ODzE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Loader", ()=>Loader
);
var _preact = require("preact");
const Loader = (props)=>{
    return /*#__PURE__*/ _preact.h("div", {
        className: "loader",
        __source: {
            fileName: "frontend/components/loader.component.tsx",
            lineNumber: 5,
            columnNumber: 9
        },
        __self: undefined
    }, /*#__PURE__*/ _preact.h("div", {
        className: "logo-icon",
        __source: {
            fileName: "frontend/components/loader.component.tsx",
            lineNumber: 6,
            columnNumber: 13
        },
        __self: undefined
    }, /*#__PURE__*/ _preact.h("div", {
        className: "logo-card is-red",
        __source: {
            fileName: "frontend/components/loader.component.tsx",
            lineNumber: 7,
            columnNumber: 17
        },
        __self: undefined
    }), /*#__PURE__*/ _preact.h("div", {
        className: "logo-card is-white",
        __source: {
            fileName: "frontend/components/loader.component.tsx",
            lineNumber: 8,
            columnNumber: 17
        },
        __self: undefined
    }), /*#__PURE__*/ _preact.h("div", {
        className: "logo-card is-green",
        __source: {
            fileName: "frontend/components/loader.component.tsx",
            lineNumber: 9,
            columnNumber: 17
        },
        __self: undefined
    })), /*#__PURE__*/ _preact.h("div", {
        className: "white has-margin-top-2",
        __source: {
            fileName: "frontend/components/loader.component.tsx",
            lineNumber: 11,
            columnNumber: 13
        },
        __self: undefined
    }, props.children || "Loading..."));
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
        id: "splashlogo",
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
        className: "logo-card is-white",
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
        className: "logo-text white",
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
        className: "is-text-xs grey40",
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
/// <reference path="../custom.d.ts" />
var _preact = require("preact");
var _preactRouter = require("preact-router");
var _helpers = require("../helpers");
var _freightwavesPng = require("../icons/freightwaves.png");
var _freightwavesPngDefault = parcelHelpers.interopDefault(_freightwavesPng);
const CardComponent = (props)=>{
    const { bookmarkStore  } = _helpers.useBookmarkStore();
    const seed = props.seed;
    const base64url = window.btoa(seed.detailurl);
    const cardProps = {
        onClick: ()=>_preactRouter.route(`/seeds/${base64url}`)
    };
    if (props.size === "small") return /*#__PURE__*/ _preact.h("div", {
        className: "card is-small",
        ...cardProps,
        __source: {
            fileName: "frontend/components/card.component.tsx",
            lineNumber: 25,
            columnNumber: 13
        },
        __self: undefined
    }, seed.thumbnail ? /*#__PURE__*/ _preact.h("div", {
        className: "card-row",
        __source: {
            fileName: "frontend/components/card.component.tsx",
            lineNumber: 28,
            columnNumber: 25
        },
        __self: undefined
    }, /*#__PURE__*/ _preact.h("div", {
        className: "card-img",
        style: {
            backgroundImage: `url(${seed.thumbnail})`
        },
        __source: {
            fileName: "frontend/components/card.component.tsx",
            lineNumber: 29,
            columnNumber: 29
        },
        __self: undefined
    })) : /*#__PURE__*/ _preact.h("div", {
        className: "card-row",
        __source: {
            fileName: "frontend/components/card.component.tsx",
            lineNumber: 31,
            columnNumber: 25
        },
        __self: undefined
    }, /*#__PURE__*/ _preact.h("div", {
        className: "card-img-placeholder",
        __source: {
            fileName: "frontend/components/card.component.tsx",
            lineNumber: 32,
            columnNumber: 29
        },
        __self: undefined
    }, "\xa0")), /*#__PURE__*/ _preact.h("div", {
        className: "card-row",
        __source: {
            fileName: "frontend/components/card.component.tsx",
            lineNumber: 37,
            columnNumber: 17
        },
        __self: undefined
    }, /*#__PURE__*/ _preact.h("div", {
        className: "card-reference",
        __source: {
            fileName: "frontend/components/card.component.tsx",
            lineNumber: 38,
            columnNumber: 21
        },
        __self: undefined
    }, /*#__PURE__*/ _preact.h("img", {
        src: _freightwavesPngDefault.default,
        alt: "Freight Waves",
        __source: {
            fileName: "frontend/components/card.component.tsx",
            lineNumber: 39,
            columnNumber: 25
        },
        __self: undefined
    })), /*#__PURE__*/ _preact.h("div", {
        className: "blue50 is-text-bold",
        __source: {
            fileName: "frontend/components/card.component.tsx",
            lineNumber: 41,
            columnNumber: 21
        },
        __self: undefined
    }, seed.title), /*#__PURE__*/ _preact.h("div", {
        className: "is-text-xs grey40 has-margin-top-1",
        __source: {
            fileName: "frontend/components/card.component.tsx",
            lineNumber: 44,
            columnNumber: 21
        },
        __self: undefined
    }, seed.date)), /*#__PURE__*/ _preact.h("div", {
        className: "card-row",
        __source: {
            fileName: "frontend/components/card.component.tsx",
            lineNumber: 48,
            columnNumber: 17
        },
        __self: undefined
    }, bookmarkStore.hasBookmark(seed.url) ? /*#__PURE__*/ _preact.h("span", {
        className: "red30",
        __source: {
            fileName: "frontend/components/card.component.tsx",
            lineNumber: 51,
            columnNumber: 29
        },
        __self: undefined
    }, /*#__PURE__*/ _preact.h("ion-icon", {
        name: "bookmark",
        __source: {
            fileName: "frontend/components/card.component.tsx",
            lineNumber: 52,
            columnNumber: 33
        },
        __self: undefined
    })) : /*#__PURE__*/ _preact.h("span", {
        className: "grey40",
        __source: {
            fileName: "frontend/components/card.component.tsx",
            lineNumber: 54,
            columnNumber: 29
        },
        __self: undefined
    }, /*#__PURE__*/ _preact.h("ion-icon", {
        name: "bookmark-outline",
        __source: {
            fileName: "frontend/components/card.component.tsx",
            lineNumber: 55,
            columnNumber: 33
        },
        __self: undefined
    })), /*#__PURE__*/ _preact.h("span", {
        className: "grey40",
        __source: {
            fileName: "frontend/components/card.component.tsx",
            lineNumber: 58,
            columnNumber: 21
        },
        __self: undefined
    }, /*#__PURE__*/ _preact.h("ion-icon", {
        name: "calendar",
        __source: {
            fileName: "frontend/components/card.component.tsx",
            lineNumber: 59,
            columnNumber: 25
        },
        __self: undefined
    }))));
    return /*#__PURE__*/ _preact.h("div", {
        className: "card is-large",
        style: {
            backgroundImage: `url(${seed.thumbnail})`
        },
        ...cardProps,
        __source: {
            fileName: "frontend/components/card.component.tsx",
            lineNumber: 67,
            columnNumber: 9
        },
        __self: undefined
    }, /*#__PURE__*/ _preact.h("div", {
        className: "card-row",
        __source: {
            fileName: "frontend/components/card.component.tsx",
            lineNumber: 68,
            columnNumber: 13
        },
        __self: undefined
    }, /*#__PURE__*/ _preact.h("div", {
        className: "card-title",
        __source: {
            fileName: "frontend/components/card.component.tsx",
            lineNumber: 69,
            columnNumber: 17
        },
        __self: undefined
    }, /*#__PURE__*/ _preact.h("div", {
        className: "card-reference",
        __source: {
            fileName: "frontend/components/card.component.tsx",
            lineNumber: 70,
            columnNumber: 21
        },
        __self: undefined
    }, /*#__PURE__*/ _preact.h("img", {
        src: _freightwavesPngDefault.default,
        alt: "Freight Waves",
        __source: {
            fileName: "frontend/components/card.component.tsx",
            lineNumber: 71,
            columnNumber: 25
        },
        __self: undefined
    })), /*#__PURE__*/ _preact.h("span", {
        __source: {
            fileName: "frontend/components/card.component.tsx",
            lineNumber: 73,
            columnNumber: 21
        },
        __self: undefined
    }, seed.title), /*#__PURE__*/ _preact.h("div", {
        className: "has-padding-top-3",
        __source: {
            fileName: "frontend/components/card.component.tsx",
            lineNumber: 74,
            columnNumber: 21
        },
        __self: undefined
    }, /*#__PURE__*/ _preact.h("span", {
        className: "is-text-s",
        __source: {
            fileName: "frontend/components/card.component.tsx",
            lineNumber: 75,
            columnNumber: 25
        },
        __self: undefined
    }, seed.date)))));
};

},{"preact":"cwEwC","preact-router":"gXK85","../helpers":"dtOhO","../icons/freightwaves.png":"aiuzK","@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"aiuzK":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('cL05w') + "freightwaves.a156c0ae.png" + "?" + Date.now();

},{"./helpers/bundle-url":"hPpBg"}],"hPpBg":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ('' + err.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return '/';
}
function getBaseURL(url) {
    return ('' + url).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/, '$1') + '/';
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ('' + url).match(/(https?|file|ftp):\/\/[^/]+/);
    if (!matches) throw new Error('Origin not found');
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"aJbpU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "QRCode", ()=>QRCode
);
/// <reference path="../custom.d.ts" />
var _preact = require("preact");
var _flexboardQrCodePng = require("../icons/flexboard-qr-code.png");
var _flexboardQrCodePngDefault = parcelHelpers.interopDefault(_flexboardQrCodePng);
const QRCode = ()=>/*#__PURE__*/ _preact.h("div", {
        className: "qr",
        __source: {
            fileName: "frontend/components/qr.component.tsx",
            lineNumber: 7,
            columnNumber: 5
        },
        __self: undefined
    }, /*#__PURE__*/ _preact.h("img", {
        src: _flexboardQrCodePngDefault.default,
        alt: "Flexboard QR Code",
        __source: {
            fileName: "frontend/components/qr.component.tsx",
            lineNumber: 8,
            columnNumber: 9
        },
        __self: undefined
    }), /*#__PURE__*/ _preact.h("div", {
        className: "is-text-center has-padding-vertical-8 is-text-bold white",
        __source: {
            fileName: "frontend/components/qr.component.tsx",
            lineNumber: 9,
            columnNumber: 9
        },
        __self: undefined
    }, /*#__PURE__*/ _preact.h("span", {
        __source: {
            fileName: "frontend/components/qr.component.tsx",
            lineNumber: 10,
            columnNumber: 13
        },
        __self: undefined
    }, "The site is optimized for Mobile views"), " ", /*#__PURE__*/ _preact.h("br", {
        __source: {
            fileName: "frontend/components/qr.component.tsx",
            lineNumber: 10,
            columnNumber: 65
        },
        __self: undefined
    }), /*#__PURE__*/ _preact.h("span", {
        __source: {
            fileName: "frontend/components/qr.component.tsx",
            lineNumber: 11,
            columnNumber: 13
        },
        __self: undefined
    }, "Please scan QR Code to continue.")))
;

},{"preact":"cwEwC","../icons/flexboard-qr-code.png":"goTZw","@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"goTZw":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('cL05w') + "flexboard-qr-code.375e78a9.png" + "?" + Date.now();

},{"./helpers/bundle-url":"hPpBg"}],"9RWB4":[function(require,module,exports) {
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
var _articlesPage = require("./articles.page");
parcelHelpers.exportAll(_articlesPage, exports);
var _routePage = require("./route.page");
parcelHelpers.exportAll(_routePage, exports);
var _aboutPage = require("./about.page");
parcelHelpers.exportAll(_aboutPage, exports);
var _disclaimerPage = require("./disclaimer.page");
parcelHelpers.exportAll(_disclaimerPage, exports);
var _bookmarksPage = require("./bookmarks.page");
parcelHelpers.exportAll(_bookmarksPage, exports);

},{"./indices.page":"7FZOO","./search.page":"j27CE","./seeds.page":"8BcV2","./settings.page":"76mfA","./splash.page":"1gZMb","./redirect.page":"7ph5y","./messages.page":"2FU79","./articles.page":"kpakG","./route.page":"hCEyC","./about.page":"hV32b","./disclaimer.page":"8eDiM","./bookmarks.page":"l3FRf","@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"7FZOO":[function(require,module,exports) {
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
        let targetDate = newDate || "";
        if (/^\d{4}-\d{2}-\d{2}$/.test(targetDate)) targetDate = targetDate.replace(/-/g, "");
        if (!window.shanghaiFreightIndices || !window.shanghaiFreightIndices.has(targetDate)) {
            const script = document.createElement("script");
            script.onload = ()=>updateDataByDate(targetDate)
            ;
            script.onerror = console.log;
            script.src = "data/indices/" + targetDate + ".js";
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
                const indicesElement = document.getElementById("indices");
                const indicesTableElement = document.querySelector("#indices .indices-table");
                if (indicesElement) try {
                    await indicesElement.requestFullscreen();
                    indicesTableElement?.classList?.add("is-full-screen");
                } catch (error) {
                    console.error(error);
                }
            } else if (document.fullscreenElement) {
                document.exitFullscreen();
                const indicesTableElement = document.querySelector("#indices .indices-table");
                indicesTableElement?.classList?.remove("is-full-screen");
            }
        }, 100);
    };
    const forceRequestFullScreen = ()=>{
        const indicesElement = document.getElementById("indices");
        const indicesTableElement = document.querySelector("#indices .indices-table");
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
            lineNumber: 104,
            columnNumber: 9
        },
        __self: undefined
    }, /*#__PURE__*/ _preact.h("div", {
        className: "indices-header",
        __source: {
            fileName: "frontend/pages/indices.page.tsx",
            lineNumber: 105,
            columnNumber: 13
        },
        __self: undefined
    }, (data[0]?.[0] || {}).text), /*#__PURE__*/ _preact.h("div", {
        className: "indices-actions",
        __source: {
            fileName: "frontend/pages/indices.page.tsx",
            lineNumber: 108,
            columnNumber: 13
        },
        __self: undefined
    }, /*#__PURE__*/ _preact.h("div", {
        className: "indices-action",
        __source: {
            fileName: "frontend/pages/indices.page.tsx",
            lineNumber: 109,
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
            lineNumber: 110,
            columnNumber: 21
        },
        __self: undefined
    })), /*#__PURE__*/ _preact.h("div", {
        className: "indices-action",
        __source: {
            fileName: "frontend/pages/indices.page.tsx",
            lineNumber: 112,
            columnNumber: 17
        },
        __self: undefined
    }, /*#__PURE__*/ _preact.h("select", {
        name: "indices",
        id: "indicestype",
        onChange: updateIndice,
        __source: {
            fileName: "frontend/pages/indices.page.tsx",
            lineNumber: 113,
            columnNumber: 21
        },
        __self: undefined
    }, indiceOptions.map((indiceLabel, index)=>/*#__PURE__*/ _preact.h("option", {
            label: indiceLabel,
            key: index,
            __source: {
                fileName: "frontend/pages/indices.page.tsx",
                lineNumber: 116,
                columnNumber: 33
            },
            __self: undefined
        }, indiceLabel)
    ))), /*#__PURE__*/ _preact.h("div", {
        className: "indices-action is-expand",
        onClick: requestFullScreen,
        onKeyDown: requestFullScreen,
        __source: {
            fileName: "frontend/pages/indices.page.tsx",
            lineNumber: 121,
            columnNumber: 17
        },
        __self: undefined
    }, /*#__PURE__*/ _preact.h("ion-icon", {
        name: "expand-sharp",
        __source: {
            fileName: "frontend/pages/indices.page.tsx",
            lineNumber: 122,
            columnNumber: 21
        },
        __self: undefined
    }))), /*#__PURE__*/ _preact.h("div", {
        className: "indices-table",
        __source: {
            fileName: "frontend/pages/indices.page.tsx",
            lineNumber: 125,
            columnNumber: 13
        },
        __self: undefined
    }, /*#__PURE__*/ _preact.h("table", {
        className: "table",
        __source: {
            fileName: "frontend/pages/indices.page.tsx",
            lineNumber: 126,
            columnNumber: 17
        },
        __self: undefined
    }, data.slice(1, data.length - 1).map((row, rowIndex)=>{
        return /*#__PURE__*/ _preact.h("tr", {
            key: `row${rowIndex}`,
            __source: {
                fileName: "frontend/pages/indices.page.tsx",
                lineNumber: 132,
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
                    lineNumber: 136,
                    columnNumber: 53
                },
                __self: undefined
            }, cell.text) : /*#__PURE__*/ _preact.h("th", {
                key: `cell${cellIndex}`,
                colSpan: cell.colspan || 1,
                rowSpan: cell.rowspan || 1,
                __source: {
                    fileName: "frontend/pages/indices.page.tsx",
                    lineNumber: 141,
                    columnNumber: 53
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
var _preactRouter = require("preact-router");
var _hooks = require("preact/hooks");
var _components = require("../components");
var _helpers = require("../helpers");
var _ryanPetersenPng = require("../icons/ryan_petersen.png");
var _ryanPetersenPngDefault = parcelHelpers.interopDefault(_ryanPetersenPng);
let SearchPageEnum;
(function(SearchPageEnum1) {
    SearchPageEnum1[SearchPageEnum1["HISTORIES"] = 0] = "HISTORIES";
    SearchPageEnum1[SearchPageEnum1["RESULTS"] = 1] = "RESULTS";
    SearchPageEnum1[SearchPageEnum1["LOADING"] = 2] = "LOADING";
})(SearchPageEnum || (SearchPageEnum = {}));
const FEATURED_TOPICS = [
    "ukrainian",
    "covid",
    "volume",
    "trucking"
];
const SearchPage = (props)=>{
    const [status, setStatus] = _hooks.useState(SearchPageEnum.HISTORIES);
    const [keywords, setKeywords] = _hooks.useState("");
    const [results, setResults] = _hooks.useState([]);
    const { searchStore  } = _helpers.useSearchStore();
    const { seedsStore  } = _helpers.useSeedsStore();
    const deleteHistories = ()=>{
        if (window.confirm("Do you want to delete all searching histories?")) searchStore.deleteAllHistory();
    };
    const search = (event)=>{
        if (keywords.toLocaleLowerCase() === "ryan petersen") {
            const ryan = document.getElementById("ryanpetersen");
            if (ryan) {
                ryan.classList.add("show");
                setTimeout(()=>{
                    ryan.classList.remove("show");
                }, 3000);
            }
            searchStore.addHistory(keywords);
        } else {
            event.preventDefault();
            setStatus(SearchPageEnum.LOADING);
            setTimeout(()=>{
                const resultArr = seedsStore.findByKeywords(keywords);
                setResults(resultArr);
                setStatus(SearchPageEnum.RESULTS);
            }, 1000 + Math.floor(Math.random() * 1000));
            searchStore.addHistory(keywords);
        }
    };
    const directSearch = (keyword)=>{
        setKeywords(keyword);
        setStatus(SearchPageEnum.LOADING);
        setTimeout(()=>{
            const resultArr = seedsStore.findByKeywords(keyword);
            setResults(resultArr);
            setStatus(SearchPageEnum.RESULTS);
        }, 1000 + Math.floor(Math.random() * 1000));
        searchStore.addHistory(keyword);
    };
    const renderLoading = ()=>{
        return /*#__PURE__*/ _preact.h(_components.Loader, {
            __source: {
                fileName: "frontend/pages/search.page.tsx",
                lineNumber: 70,
                columnNumber: 16
            },
            __self: undefined
        }, "Searching...");
    };
    const renderSearchResults = ()=>{
        return /*#__PURE__*/ _preact.h("div", {
            className: "search-results",
            __source: {
                fileName: "frontend/pages/search.page.tsx",
                lineNumber: 75,
                columnNumber: 13
            },
            __self: undefined
        }, results.map((result, index)=>{
            return /*#__PURE__*/ _preact.h("div", {
                key: index,
                className: "search-result",
                onClick: ()=>_preactRouter.route("/seeds/" + window.btoa(result.detailurl))
                ,
                __source: {
                    fileName: "frontend/pages/search.page.tsx",
                    lineNumber: 78,
                    columnNumber: 25
                },
                __self: undefined
            }, /*#__PURE__*/ _preact.h("div", {
                className: "search-result-url",
                __source: {
                    fileName: "frontend/pages/search.page.tsx",
                    lineNumber: 81,
                    columnNumber: 29
                },
                __self: undefined
            }, result.url), /*#__PURE__*/ _preact.h("div", {
                className: "search-result-title",
                __source: {
                    fileName: "frontend/pages/search.page.tsx",
                    lineNumber: 84,
                    columnNumber: 29
                },
                __self: undefined
            }, result.title));
        }));
    };
    const renderHistories = ()=>{
        return /*#__PURE__*/ _preact.h(_preact.Fragment, {
            __source: {
                fileName: "frontend/pages/search.page.tsx",
                lineNumber: 96,
                columnNumber: 13
            },
            __self: undefined
        }, /*#__PURE__*/ _preact.h("div", {
            className: "has-margin-top-6",
            __source: {
                fileName: "frontend/pages/search.page.tsx",
                lineNumber: 97,
                columnNumber: 17
            },
            __self: undefined
        }), /*#__PURE__*/ _preact.h("div", {
            className: "search-row",
            __source: {
                fileName: "frontend/pages/search.page.tsx",
                lineNumber: 98,
                columnNumber: 17
            },
            __self: undefined
        }, /*#__PURE__*/ _preact.h("div", {
            className: "search-title",
            __source: {
                fileName: "frontend/pages/search.page.tsx",
                lineNumber: 99,
                columnNumber: 21
            },
            __self: undefined
        }, "Featured Topics"), FEATURED_TOPICS.map((topic)=>/*#__PURE__*/ _preact.h("div", {
                className: "search-item",
                onClick: ()=>directSearch(topic)
                ,
                __source: {
                    fileName: "frontend/pages/search.page.tsx",
                    lineNumber: 104,
                    columnNumber: 29
                },
                __self: undefined
            }, topic)
        )), /*#__PURE__*/ _preact.h("div", {
            className: "search-row",
            __source: {
                fileName: "frontend/pages/search.page.tsx",
                lineNumber: 110,
                columnNumber: 17
            },
            __self: undefined
        }, /*#__PURE__*/ _preact.h("div", {
            className: "search-title is-level",
            __source: {
                fileName: "frontend/pages/search.page.tsx",
                lineNumber: 111,
                columnNumber: 21
            },
            __self: undefined
        }, /*#__PURE__*/ _preact.h("div", {
            className: "is-level-left",
            __source: {
                fileName: "frontend/pages/search.page.tsx",
                lineNumber: 112,
                columnNumber: 25
            },
            __self: undefined
        }, "Histoires"), /*#__PURE__*/ _preact.h("div", {
            className: "is-level-right is-flex is-vertical-center",
            onClick: deleteHistories,
            onKeyDown: deleteHistories,
            __source: {
                fileName: "frontend/pages/search.page.tsx",
                lineNumber: 113,
                columnNumber: 25
            },
            __self: undefined
        }, /*#__PURE__*/ _preact.h("span", {
            __source: {
                fileName: "frontend/pages/search.page.tsx",
                lineNumber: 116,
                columnNumber: 29
            },
            __self: undefined
        }, "Delete all"), /*#__PURE__*/ _preact.h("span", {
            __source: {
                fileName: "frontend/pages/search.page.tsx",
                lineNumber: 117,
                columnNumber: 29
            },
            __self: undefined
        }, "\xa0"), /*#__PURE__*/ _preact.h("ion-icon", {
            name: "trash-sharp",
            __source: {
                fileName: "frontend/pages/search.page.tsx",
                lineNumber: 118,
                columnNumber: 29
            },
            __self: undefined
        }))), searchStore.getHistories().map((history)=>/*#__PURE__*/ _preact.h("div", {
                className: "search-item",
                __source: {
                    fileName: "frontend/pages/search.page.tsx",
                    lineNumber: 125,
                    columnNumber: 33
                },
                __self: undefined
            }, history)
        )));
    };
    return /*#__PURE__*/ _preact.h("div", {
        className: "search",
        __source: {
            fileName: "frontend/pages/search.page.tsx",
            lineNumber: 136,
            columnNumber: 9
        },
        __self: undefined
    }, /*#__PURE__*/ _preact.h("div", {
        className: "search-row",
        __source: {
            fileName: "frontend/pages/search.page.tsx",
            lineNumber: 137,
            columnNumber: 13
        },
        __self: undefined
    }, /*#__PURE__*/ _preact.h("form", {
        onSubmit: search,
        __source: {
            fileName: "frontend/pages/search.page.tsx",
            lineNumber: 138,
            columnNumber: 17
        },
        __self: undefined
    }, /*#__PURE__*/ _preact.h("div", {
        className: "search-input",
        __source: {
            fileName: "frontend/pages/search.page.tsx",
            lineNumber: 139,
            columnNumber: 21
        },
        __self: undefined
    }, /*#__PURE__*/ _preact.h("input", {
        type: "text",
        id: "searchinput",
        placeholder: "Try Ryan Petersen",
        value: keywords,
        onChange: (event)=>setKeywords(event.target.value)
        ,
        __source: {
            fileName: "frontend/pages/search.page.tsx",
            lineNumber: 140,
            columnNumber: 25
        },
        __self: undefined
    }), /*#__PURE__*/ _preact.h("ion-icon", {
        name: "search",
        onClick: search,
        __source: {
            fileName: "frontend/pages/search.page.tsx",
            lineNumber: 145,
            columnNumber: 25
        },
        __self: undefined
    })))), status === SearchPageEnum.LOADING && renderLoading(), status === SearchPageEnum.HISTORIES && renderHistories(), status === SearchPageEnum.RESULTS && renderSearchResults(), /*#__PURE__*/ _preact.h("img", {
        id: "ryanpetersen",
        src: _ryanPetersenPngDefault.default,
        alt: "Ryan Petersen",
        className: "ryan-petersen",
        __source: {
            fileName: "frontend/pages/search.page.tsx",
            lineNumber: 152,
            columnNumber: 13
        },
        __self: undefined
    }));
};

},{"preact":"cwEwC","preact-router":"gXK85","preact/hooks":"97VL9","../components":"1IJMQ","../helpers":"dtOhO","../icons/ryan_petersen.png":"gwUq1","@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"gwUq1":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('cL05w') + "ryan_petersen.7b369224.png" + "?" + Date.now();

},{"./helpers/bundle-url":"hPpBg"}],"8BcV2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SeedsPage", ()=>SeedsPage
);
var _preact = require("preact");
var _hooks = require("preact/hooks");
var _components = require("../components");
var _helpers = require("../helpers");
const Section = (props)=>/*#__PURE__*/ _preact.h(_preact.Fragment, {
        __source: {
            fileName: "frontend/pages/seeds.page.tsx",
            lineNumber: 14,
            columnNumber: 5
        },
        __self: undefined
    }, props.label && /*#__PURE__*/ _preact.h("div", {
        className: "has-padding-1",
        __source: {
            fileName: "frontend/pages/seeds.page.tsx",
            lineNumber: 17,
            columnNumber: 13
        },
        __self: undefined
    }, /*#__PURE__*/ _preact.h("h3", {
        className: "red30",
        __source: {
            fileName: "frontend/pages/seeds.page.tsx",
            lineNumber: 18,
            columnNumber: 17
        },
        __self: undefined
    }, props.label)), props.children, props.hasSeparator && /*#__PURE__*/ _preact.h("hr", {
        __source: {
            fileName: "frontend/pages/seeds.page.tsx",
            lineNumber: 23,
            columnNumber: 35
        },
        __self: undefined
    }))
;
const SeedsPage = (props)=>{
    const { seedsStore , loading , getSeeds  } = _helpers.useSeedsStore();
    const seeds = seedsStore.seeds;
    _hooks.useEffect(()=>{
        getSeeds();
    }, []);
    if (loading) return /*#__PURE__*/ _preact.h(_components.Loader, {
        __source: {
            fileName: "frontend/pages/seeds.page.tsx",
            lineNumber: 37,
            columnNumber: 16
        },
        __self: undefined
    });
    return /*#__PURE__*/ _preact.h(_preact.Fragment, {
        __source: {
            fileName: "frontend/pages/seeds.page.tsx",
            lineNumber: 41,
            columnNumber: 9
        },
        __self: undefined
    }, /*#__PURE__*/ _preact.h("div", {
        className: "cards",
        __source: {
            fileName: "frontend/pages/seeds.page.tsx",
            lineNumber: 42,
            columnNumber: 13
        },
        __self: undefined
    }, /*#__PURE__*/ _preact.h("div", {
        className: "seed-boxes",
        __source: {
            fileName: "frontend/pages/seeds.page.tsx",
            lineNumber: 43,
            columnNumber: 17
        },
        __self: undefined
    }, /*#__PURE__*/ _preact.h("div", {
        className: "seed-box",
        __source: {
            fileName: "frontend/pages/seeds.page.tsx",
            lineNumber: 44,
            columnNumber: 21
        },
        __self: undefined
    }, /*#__PURE__*/ _preact.h("div", {
        className: "is-text-s white",
        __source: {
            fileName: "frontend/pages/seeds.page.tsx",
            lineNumber: 45,
            columnNumber: 25
        },
        __self: undefined
    }, "Current FBX"), /*#__PURE__*/ _preact.h("div", {
        className: "is-text-xxl green30",
        __source: {
            fileName: "frontend/pages/seeds.page.tsx",
            lineNumber: 48,
            columnNumber: 25
        },
        __self: undefined
    }, "$8,710")), /*#__PURE__*/ _preact.h("div", {
        className: "seed-box",
        __source: {
            fileName: "frontend/pages/seeds.page.tsx",
            lineNumber: 52,
            columnNumber: 21
        },
        __self: undefined
    }, /*#__PURE__*/ _preact.h("div", {
        className: "is-text-s white",
        __source: {
            fileName: "frontend/pages/seeds.page.tsx",
            lineNumber: 53,
            columnNumber: 25
        },
        __self: undefined
    }, "Volatility"), /*#__PURE__*/ _preact.h("div", {
        className: "is-text-xxl green30",
        __source: {
            fileName: "frontend/pages/seeds.page.tsx",
            lineNumber: 56,
            columnNumber: 25
        },
        __self: undefined
    }, "0.00%"))), /*#__PURE__*/ _preact.h(Section, {
        label: "Top News",
        hasSeparator: true,
        __source: {
            fileName: "frontend/pages/seeds.page.tsx",
            lineNumber: 61,
            columnNumber: 17
        },
        __self: undefined
    }, /*#__PURE__*/ _preact.h("div", {
        className: "seed-top",
        __source: {
            fileName: "frontend/pages/seeds.page.tsx",
            lineNumber: 62,
            columnNumber: 21
        },
        __self: undefined
    }, seeds.slice(0, 4).map((seed)=>{
        return /*#__PURE__*/ _preact.h(_components.CardComponent, {
            size: "large",
            seed: seed,
            __source: {
                fileName: "frontend/pages/seeds.page.tsx",
                lineNumber: 67,
                columnNumber: 44
            },
            __self: undefined
        });
    }))), /*#__PURE__*/ _preact.h("div", {
        className: "widges",
        __source: {
            fileName: "frontend/pages/seeds.page.tsx",
            lineNumber: 72,
            columnNumber: 17
        },
        __self: undefined
    }, /*#__PURE__*/ _preact.h("div", {
        className: "widge is-selected",
        __source: {
            fileName: "frontend/pages/seeds.page.tsx",
            lineNumber: 73,
            columnNumber: 21
        },
        __self: undefined
    }, "All Categories"), /*#__PURE__*/ _preact.h("div", {
        className: "widge",
        __source: {
            fileName: "frontend/pages/seeds.page.tsx",
            lineNumber: 74,
            columnNumber: 21
        },
        __self: undefined
    }, "Ocean"), /*#__PURE__*/ _preact.h("div", {
        className: "widge",
        __source: {
            fileName: "frontend/pages/seeds.page.tsx",
            lineNumber: 75,
            columnNumber: 21
        },
        __self: undefined
    }, "Air"), /*#__PURE__*/ _preact.h("div", {
        className: "widge",
        __source: {
            fileName: "frontend/pages/seeds.page.tsx",
            lineNumber: 76,
            columnNumber: 21
        },
        __self: undefined
    }, "Trucking"), /*#__PURE__*/ _preact.h("div", {
        className: "widge",
        __source: {
            fileName: "frontend/pages/seeds.page.tsx",
            lineNumber: 77,
            columnNumber: 21
        },
        __self: undefined
    }, "COVID"), /*#__PURE__*/ _preact.h("div", {
        className: "widge",
        __source: {
            fileName: "frontend/pages/seeds.page.tsx",
            lineNumber: 78,
            columnNumber: 21
        },
        __self: undefined
    }, "Tenology"), /*#__PURE__*/ _preact.h("div", {
        className: "widge",
        __source: {
            fileName: "frontend/pages/seeds.page.tsx",
            lineNumber: 79,
            columnNumber: 21
        },
        __self: undefined
    }, "Commercial")), /*#__PURE__*/ _preact.h(Section, {
        label: "Seeds",
        __source: {
            fileName: "frontend/pages/seeds.page.tsx",
            lineNumber: 81,
            columnNumber: 17
        },
        __self: undefined
    }, seeds.slice(4).map((seed)=>/*#__PURE__*/ _preact.h(_components.CardComponent, {
            size: "small",
            seed: seed,
            __source: {
                fileName: "frontend/pages/seeds.page.tsx",
                lineNumber: 85,
                columnNumber: 61
            },
            __self: undefined
        })
    ))));
};

},{"preact":"cwEwC","preact/hooks":"97VL9","../components":"1IJMQ","../helpers":"dtOhO","@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"76mfA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SettingsPage", ()=>SettingsPage
);
var _preact = require("preact");
var _preactRouter = require("preact-router");
var _hooks = require("preact/hooks");
var _helpers = require("../helpers");
const SettingsPage = (props)=>{
    const { googleAuth , nounce  } = _helpers.useGoogleAuth();
    _hooks.useEffect(()=>{
        if (window.google) {
            if (_helpers.userStore.hasCache()) {
                if (_helpers.userStore.isExpired()) googleAuth.prompt();
                else googleAuth.prompt();
            } else {
                googleAuth.renderButton();
                googleAuth.prompt();
            }
        }
    }, []);
    const logout = ()=>{
        if (window.confirm("Are you sure you want to logout?")) {
            _helpers.userStore.clear();
            location.reload();
        }
    };
    return /*#__PURE__*/ _preact.h(_preact.Fragment, {
        __source: {
            fileName: "frontend/pages/settings.page.tsx",
            lineNumber: 40,
            columnNumber: 9
        },
        __self: undefined
    }, /*#__PURE__*/ _preact.h("div", {
        className: "setting-group",
        key: nounce,
        __source: {
            fileName: "frontend/pages/settings.page.tsx",
            lineNumber: 41,
            columnNumber: 13
        },
        __self: undefined
    }, _helpers.userStore.isAvailable() ? /*#__PURE__*/ _preact.h("div", {
        className: "setting-userinfo",
        __source: {
            fileName: "frontend/pages/settings.page.tsx",
            lineNumber: 44,
            columnNumber: 25
        },
        __self: undefined
    }, /*#__PURE__*/ _preact.h("div", {
        className: "setting-avatar",
        __source: {
            fileName: "frontend/pages/settings.page.tsx",
            lineNumber: 45,
            columnNumber: 29
        },
        __self: undefined
    }, /*#__PURE__*/ _preact.h("img", {
        src: _helpers.userStore.cache.picture,
        alt: _helpers.userStore.cache.name,
        __source: {
            fileName: "frontend/pages/settings.page.tsx",
            lineNumber: 46,
            columnNumber: 33
        },
        __self: undefined
    })), /*#__PURE__*/ _preact.h("div", {
        className: "has-margin-top-5",
        __source: {
            fileName: "frontend/pages/settings.page.tsx",
            lineNumber: 48,
            columnNumber: 29
        },
        __self: undefined
    }, /*#__PURE__*/ _preact.h("div", {
        className: "is-text-xl grey10",
        __source: {
            fileName: "frontend/pages/settings.page.tsx",
            lineNumber: 49,
            columnNumber: 33
        },
        __self: undefined
    }, _helpers.userStore.cache.name), /*#__PURE__*/ _preact.h("div", {
        className: "is-text-s grey20",
        __source: {
            fileName: "frontend/pages/settings.page.tsx",
            lineNumber: 52,
            columnNumber: 33
        },
        __self: undefined
    }, _helpers.userStore.cache.email))) : /*#__PURE__*/ _preact.h("div", {
        className: "setting-google-btn-container",
        id: "gbuttondiv",
        __source: {
            fileName: "frontend/pages/settings.page.tsx",
            lineNumber: 57,
            columnNumber: 25
        },
        __self: undefined
    })), /*#__PURE__*/ _preact.h("div", {
        className: "setting-group",
        __source: {
            fileName: "frontend/pages/settings.page.tsx",
            lineNumber: 60,
            columnNumber: 13
        },
        __self: undefined
    }, _helpers.userStore.isAvailable() && /*#__PURE__*/ _preact.h("div", {
        className: "setting-item",
        onClick: ()=>_preactRouter.route("/bookmarks")
        ,
        onKeydown: ()=>_preactRouter.route("/bookmarks")
        ,
        __source: {
            fileName: "frontend/pages/settings.page.tsx",
            lineNumber: 63,
            columnNumber: 21
        },
        __self: undefined
    }, /*#__PURE__*/ _preact.h("ion-icon", {
        name: "bookmarks-sharp",
        __source: {
            fileName: "frontend/pages/settings.page.tsx",
            lineNumber: 66,
            columnNumber: 25
        },
        __self: undefined
    }), /*#__PURE__*/ _preact.h("span", {
        __source: {
            fileName: "frontend/pages/settings.page.tsx",
            lineNumber: 67,
            columnNumber: 25
        },
        __self: undefined
    }, "My bookmarks")), /*#__PURE__*/ _preact.h("div", {
        className: "setting-item",
        onClick: ()=>_preactRouter.route("/about")
        ,
        onKeydown: ()=>_preactRouter.route("/about")
        ,
        __source: {
            fileName: "frontend/pages/settings.page.tsx",
            lineNumber: 70,
            columnNumber: 17
        },
        __self: undefined
    }, /*#__PURE__*/ _preact.h("ion-icon", {
        name: "heart-sharp",
        __source: {
            fileName: "frontend/pages/settings.page.tsx",
            lineNumber: 73,
            columnNumber: 21
        },
        __self: undefined
    }), /*#__PURE__*/ _preact.h("span", {
        __source: {
            fileName: "frontend/pages/settings.page.tsx",
            lineNumber: 74,
            columnNumber: 21
        },
        __self: undefined
    }, "About Flexboard")), /*#__PURE__*/ _preact.h("div", {
        className: "setting-item",
        onClick: ()=>_preactRouter.route("/disclaimer")
        ,
        onKeydown: ()=>_preactRouter.route("/disclaimer")
        ,
        __source: {
            fileName: "frontend/pages/settings.page.tsx",
            lineNumber: 76,
            columnNumber: 17
        },
        __self: undefined
    }, /*#__PURE__*/ _preact.h("ion-icon", {
        name: "alert-sharp",
        __source: {
            fileName: "frontend/pages/settings.page.tsx",
            lineNumber: 79,
            columnNumber: 21
        },
        __self: undefined
    }), /*#__PURE__*/ _preact.h("span", {
        __source: {
            fileName: "frontend/pages/settings.page.tsx",
            lineNumber: 80,
            columnNumber: 21
        },
        __self: undefined
    }, "Declaration"))), _helpers.userStore.hasCache() && /*#__PURE__*/ _preact.h("div", {
        className: "setting-group",
        key: nounce,
        __source: {
            fileName: "frontend/pages/settings.page.tsx",
            lineNumber: 85,
            columnNumber: 17
        },
        __self: undefined
    }, /*#__PURE__*/ _preact.h("div", {
        className: "has-padding-vertical-3 is-flex is-all-center red30",
        onClick: logout,
        onKeydown: logout,
        __source: {
            fileName: "frontend/pages/settings.page.tsx",
            lineNumber: 86,
            columnNumber: 21
        },
        __self: undefined
    }, /*#__PURE__*/ _preact.h("ion-icon", {
        name: "log-out-sharp",
        className: "is-text-l",
        __source: {
            fileName: "frontend/pages/settings.page.tsx",
            lineNumber: 90,
            columnNumber: 25
        },
        __self: undefined
    }), /*#__PURE__*/ _preact.h("span", {
        __source: {
            fileName: "frontend/pages/settings.page.tsx",
            lineNumber: 91,
            columnNumber: 25
        },
        __self: undefined
    }, "\xa0\xa0"), /*#__PURE__*/ _preact.h("span", {
        className: "is-text-m",
        __source: {
            fileName: "frontend/pages/settings.page.tsx",
            lineNumber: 92,
            columnNumber: 25
        },
        __self: undefined
    }, "Logout"))));
};

},{"preact":"cwEwC","preact-router":"gXK85","preact/hooks":"97VL9","../helpers":"dtOhO","@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"1gZMb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SplashPage", ()=>SplashPage
);
var _preact = require("preact");
var _components = require("../components");
const SplashPage = ()=>{
    return /*#__PURE__*/ _preact.h("div", {
        className: "is-full-screen is-all-center bg-blue60",
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

},{"preact":"cwEwC","@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"kpakG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ArticlePage", ()=>ArticlePage
);
/// <reference path="../custom.d.ts" />
var _preact = require("preact");
var _hooks = require("preact/hooks");
var _helpers = require("../helpers");
var _freightwavesPng = require("../icons/freightwaves.png");
var _freightwavesPngDefault = parcelHelpers.interopDefault(_freightwavesPng);
var _axios = require("axios");
var _axiosDefault = parcelHelpers.interopDefault(_axios);
var _components = require("../components");
const ArticlePage = (props)=>{
    const url = window.atob(props.base64url);
    const [loading, setLoading] = _hooks.useState(true);
    const [article, setArticle] = _hooks.useState(null);
    const { bookmarkStore  } = _helpers.useBookmarkStore();
    _hooks.useEffect(()=>{
        _axiosDefault.default.get(url).then((response)=>{
            const data = response.data;
            setArticle(data);
            setLoading(false);
        });
    }, []);
    const back = ()=>{
        history.back();
    };
    const share = ()=>{
        window.navigator.share({
            url: article.url,
            title: article.title,
            text: article.caption || article.title
        });
    };
    if (loading) return /*#__PURE__*/ _preact.h(_components.Loader, {
        __source: {
            fileName: "frontend/pages/articles.page.tsx",
            lineNumber: 45,
            columnNumber: 16
        },
        __self: undefined
    });
    return /*#__PURE__*/ _preact.h("div", {
        className: "article",
        __source: {
            fileName: "frontend/pages/articles.page.tsx",
            lineNumber: 50,
            columnNumber: 9
        },
        __self: undefined
    }, /*#__PURE__*/ _preact.h("div", {
        className: "article-actions is-level",
        __source: {
            fileName: "frontend/pages/articles.page.tsx",
            lineNumber: 51,
            columnNumber: 13
        },
        __self: undefined
    }, /*#__PURE__*/ _preact.h("div", {
        className: "is-level-left",
        onClick: back,
        __source: {
            fileName: "frontend/pages/articles.page.tsx",
            lineNumber: 52,
            columnNumber: 17
        },
        __self: undefined
    }, /*#__PURE__*/ _preact.h("ion-icon", {
        name: "chevron-back",
        __source: {
            fileName: "frontend/pages/articles.page.tsx",
            lineNumber: 53,
            columnNumber: 21
        },
        __self: undefined
    })), /*#__PURE__*/ _preact.h("div", {
        className: "is-level-right is-flex is-vertical-center",
        __source: {
            fileName: "frontend/pages/articles.page.tsx",
            lineNumber: 55,
            columnNumber: 17
        },
        __self: undefined
    }, window.navigator.share && /*#__PURE__*/ _preact.h(_preact.Fragment, {
        __source: {
            fileName: "frontend/pages/articles.page.tsx",
            lineNumber: 58,
            columnNumber: 25
        },
        __self: undefined
    }, /*#__PURE__*/ _preact.h("span", {
        className: "blue40",
        __source: {
            fileName: "frontend/pages/articles.page.tsx",
            lineNumber: 59,
            columnNumber: 29
        },
        __self: undefined
    }, /*#__PURE__*/ _preact.h("ion-icon", {
        name: "share-outline",
        onClick: share,
        __source: {
            fileName: "frontend/pages/articles.page.tsx",
            lineNumber: 60,
            columnNumber: 33
        },
        __self: undefined
    })), /*#__PURE__*/ _preact.h("span", {
        __source: {
            fileName: "frontend/pages/articles.page.tsx",
            lineNumber: 62,
            columnNumber: 29
        },
        __self: undefined
    }, "\xa0\xa0\xa0\xa0")), _helpers.userStore.isAvailable() && /*#__PURE__*/ _preact.h(_preact.Fragment, {
        __source: {
            fileName: "frontend/pages/articles.page.tsx",
            lineNumber: 67,
            columnNumber: 25
        },
        __self: undefined
    }, bookmarkStore.hasBookmark(article.url) ? /*#__PURE__*/ _preact.h("span", {
        className: "red30",
        __source: {
            fileName: "frontend/pages/articles.page.tsx",
            lineNumber: 70,
            columnNumber: 33
        },
        __self: undefined
    }, /*#__PURE__*/ _preact.h("ion-icon", {
        onClick: ()=>bookmarkStore.toggleBookmark(article.url)
        ,
        name: "bookmark",
        __source: {
            fileName: "frontend/pages/articles.page.tsx",
            lineNumber: 71,
            columnNumber: 37
        },
        __self: undefined
    })) : /*#__PURE__*/ _preact.h("span", {
        className: "grey40",
        __source: {
            fileName: "frontend/pages/articles.page.tsx",
            lineNumber: 76,
            columnNumber: 33
        },
        __self: undefined
    }, /*#__PURE__*/ _preact.h("ion-icon", {
        onClick: ()=>bookmarkStore.toggleBookmark(article.url)
        ,
        name: "bookmark-outline",
        __source: {
            fileName: "frontend/pages/articles.page.tsx",
            lineNumber: 77,
            columnNumber: 33
        },
        __self: undefined
    }))))), /*#__PURE__*/ _preact.h("div", {
        className: "article-reference",
        __source: {
            fileName: "frontend/pages/articles.page.tsx",
            lineNumber: 87,
            columnNumber: 13
        },
        __self: undefined
    }, /*#__PURE__*/ _preact.h("img", {
        src: _freightwavesPngDefault.default,
        alt: "Freight Waves",
        __source: {
            fileName: "frontend/pages/articles.page.tsx",
            lineNumber: 88,
            columnNumber: 17
        },
        __self: undefined
    })), article.thumbnail && /*#__PURE__*/ _preact.h("div", {
        className: "article-thumbnail",
        style: {
            backgroundImage: `url(${article.thumbnail})`
        },
        __source: {
            fileName: "frontend/pages/articles.page.tsx",
            lineNumber: 92,
            columnNumber: 17
        },
        __self: undefined
    }), /*#__PURE__*/ _preact.h("div", {
        className: "article-title",
        __source: {
            fileName: "frontend/pages/articles.page.tsx",
            lineNumber: 94,
            columnNumber: 13
        },
        __self: undefined
    }, article.title), /*#__PURE__*/ _preact.h("div", {
        className: "article-label",
        __source: {
            fileName: "frontend/pages/articles.page.tsx",
            lineNumber: 97,
            columnNumber: 13
        },
        __self: undefined
    }, /*#__PURE__*/ _preact.h("div", {
        __source: {
            fileName: "frontend/pages/articles.page.tsx",
            lineNumber: 98,
            columnNumber: 17
        },
        __self: undefined
    }, "Author: ", article.author), /*#__PURE__*/ _preact.h("div", {
        __source: {
            fileName: "frontend/pages/articles.page.tsx",
            lineNumber: 99,
            columnNumber: 17
        },
        __self: undefined
    }, "Published at: ", article.date)), /*#__PURE__*/ _preact.h("hr", {
        __source: {
            fileName: "frontend/pages/articles.page.tsx",
            lineNumber: 101,
            columnNumber: 13
        },
        __self: undefined
    }), /*#__PURE__*/ _preact.h("div", {
        className: "article-content",
        dangerouslySetInnerHTML: {
            __html: article.content
        },
        __source: {
            fileName: "frontend/pages/articles.page.tsx",
            lineNumber: 102,
            columnNumber: 13
        },
        __self: undefined
    }), /*#__PURE__*/ _preact.h("hr", {
        __source: {
            fileName: "frontend/pages/articles.page.tsx",
            lineNumber: 103,
            columnNumber: 13
        },
        __self: undefined
    }));
};

},{"preact":"cwEwC","preact/hooks":"97VL9","../helpers":"dtOhO","../icons/freightwaves.png":"aiuzK","axios":"gIwns","../components":"1IJMQ","@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"hCEyC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Route", ()=>Route
);
var _preact = require("preact");
const Route = (props)=>{
    return props.children;
};

},{"preact":"cwEwC","@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"hV32b":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AboutPage", ()=>AboutPage
);
var _preact = require("preact");
const AboutPage = (props)=>{
    return /*#__PURE__*/ _preact.h("div", {
        className: "article",
        __source: {
            fileName: "frontend/pages/about.page.tsx",
            lineNumber: 6,
            columnNumber: 9
        },
        __self: undefined
    }, /*#__PURE__*/ _preact.h("div", {
        className: "article-actions is-level",
        __source: {
            fileName: "frontend/pages/about.page.tsx",
            lineNumber: 7,
            columnNumber: 13
        },
        __self: undefined
    }, /*#__PURE__*/ _preact.h("div", {
        className: "is-level-left",
        onClick: ()=>history.back()
        ,
        __source: {
            fileName: "frontend/pages/about.page.tsx",
            lineNumber: 8,
            columnNumber: 17
        },
        __self: undefined
    }, /*#__PURE__*/ _preact.h("ion-icon", {
        name: "chevron-back",
        __source: {
            fileName: "frontend/pages/about.page.tsx",
            lineNumber: 9,
            columnNumber: 21
        },
        __self: undefined
    }))), /*#__PURE__*/ _preact.h("h3", {
        __source: {
            fileName: "frontend/pages/about.page.tsx",
            lineNumber: 12,
            columnNumber: 13
        },
        __self: undefined
    }, "About Flexboard"), /*#__PURE__*/ _preact.h("div", {
        className: "grey40",
        __source: {
            fileName: "frontend/pages/about.page.tsx",
            lineNumber: 13,
            columnNumber: 13
        },
        __self: undefined
    }, /*#__PURE__*/ _preact.h("p", {
        __source: {
            fileName: "frontend/pages/about.page.tsx",
            lineNumber: 14,
            columnNumber: 17
        },
        __self: undefined
    }, "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, ratione dolorum facere quo sint sit dignissimos quis nihil vitae provident adipisci ullam in qui explicabo distinctio accusantium iure unde tempore perferendis excepturi nulla! Rem obcaecati est nostrum repudiandae deserunt unde cumque quas hic accusantium aliquam corrupti fugiat numquam nemo dignissimos minus eos commodi, corporis sequi rerum laudantium? Provident modi optio, asperiores blanditiis molestiae fugiat nostrum est dolores laboriosam sunt eum quo temporibus omnis vero velit delectus cum dolore mollitia facere."), /*#__PURE__*/ _preact.h("p", {
        __source: {
            fileName: "frontend/pages/about.page.tsx",
            lineNumber: 17,
            columnNumber: 17
        },
        __self: undefined
    }, "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora hic eaque, laudantium voluptas officia asperiores dolor debitis laboriosam aspernatur amet autem inventore quidem est optio possimus animi, quos nisi non sequi rerum molestiae aliquam expedita ullam illo. Alias quibusdam dolor nobis, magnam iste vel repellendus!"), /*#__PURE__*/ _preact.h("p", {
        __source: {
            fileName: "frontend/pages/about.page.tsx",
            lineNumber: 20,
            columnNumber: 17
        },
        __self: undefined
    }, "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero architecto consequuntur, possimus harum, iure nostrum pariatur asperiores voluptate tempora dolorem quam ipsum adipisci."), /*#__PURE__*/ _preact.h("p", {
        __source: {
            fileName: "frontend/pages/about.page.tsx",
            lineNumber: 23,
            columnNumber: 17
        },
        __self: undefined
    }, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius fugiat natus dicta eum officiis non sint dolor maiores, inventore aliquid excepturi consequuntur cum veritatis, assumenda porro numquam consectetur nemo doloremque deserunt quibusdam reprehenderit necessitatibus itaque saepe quae. Qui a debitis provident amet eius repudiandae atque laudantium harum natus non. Rerum, facilis aperiam. Facere harum similique, maxime in minus corrupti pariatur corporis est culpa saepe, beatae accusantium, praesentium tempora? Sequi temporibus tempore vel labore officiis adipisci est cumque, nisi alias quam laboriosam ipsum neque perspiciatis possimus dolore, non voluptas, ab voluptates! Expedita iure ea eos, harum magnam libero vel odio enim.")));
};

},{"preact":"cwEwC","@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"8eDiM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DisclaimerPage", ()=>DisclaimerPage
);
var _preact = require("preact");
const DisclaimerPage = (props)=>{
    return /*#__PURE__*/ _preact.h("div", {
        className: "article",
        __source: {
            fileName: "frontend/pages/disclaimer.page.tsx",
            lineNumber: 6,
            columnNumber: 9
        },
        __self: undefined
    }, /*#__PURE__*/ _preact.h("div", {
        className: "article-actions is-level",
        __source: {
            fileName: "frontend/pages/disclaimer.page.tsx",
            lineNumber: 7,
            columnNumber: 13
        },
        __self: undefined
    }, /*#__PURE__*/ _preact.h("div", {
        className: "is-level-left",
        onClick: ()=>history.back()
        ,
        __source: {
            fileName: "frontend/pages/disclaimer.page.tsx",
            lineNumber: 8,
            columnNumber: 17
        },
        __self: undefined
    }, /*#__PURE__*/ _preact.h("ion-icon", {
        name: "chevron-back",
        __source: {
            fileName: "frontend/pages/disclaimer.page.tsx",
            lineNumber: 9,
            columnNumber: 21
        },
        __self: undefined
    }))), /*#__PURE__*/ _preact.h("h2", {
        __source: {
            fileName: "frontend/pages/disclaimer.page.tsx",
            lineNumber: 12,
            columnNumber: 13
        },
        __self: undefined
    }, "Disclaimer"), /*#__PURE__*/ _preact.h("div", {
        className: "grey40",
        __source: {
            fileName: "frontend/pages/disclaimer.page.tsx",
            lineNumber: 13,
            columnNumber: 13
        },
        __self: undefined
    }, /*#__PURE__*/ _preact.h("p", {
        __source: {
            fileName: "frontend/pages/disclaimer.page.tsx",
            lineNumber: 14,
            columnNumber: 17
        },
        __self: undefined
    }, /*#__PURE__*/ _preact.h("b", {
        __source: {
            fileName: "frontend/pages/disclaimer.page.tsx",
            lineNumber: 15,
            columnNumber: 21
        },
        __self: undefined
    }, "Flexboard"), " is a Flexport 2022 Hackathon project. The usages of colors and certain styles come from the Flexport ", /*#__PURE__*/ _preact.h("b", {
        __source: {
            fileName: "frontend/pages/disclaimer.page.tsx",
            lineNumber: 17,
            columnNumber: 30
        },
        __self: undefined
    }, "Latitude"), " design system. The contents or statistics are not associated with any Flexport businesses."), /*#__PURE__*/ _preact.h("p", {
        __source: {
            fileName: "frontend/pages/disclaimer.page.tsx",
            lineNumber: 20,
            columnNumber: 17
        },
        __self: undefined
    }, "The media and news contents are extracted from external news sources. The content in this site does not represent the views of Flexport."), /*#__PURE__*/ _preact.h("hr", {
        __source: {
            fileName: "frontend/pages/disclaimer.page.tsx",
            lineNumber: 25,
            columnNumber: 17
        },
        __self: undefined
    })), /*#__PURE__*/ _preact.h("h2", {
        __source: {
            fileName: "frontend/pages/disclaimer.page.tsx",
            lineNumber: 27,
            columnNumber: 13
        },
        __self: undefined
    }, "\u58F0\u660E"), /*#__PURE__*/ _preact.h("div", {
        className: "grey40",
        __source: {
            fileName: "frontend/pages/disclaimer.page.tsx",
            lineNumber: 28,
            columnNumber: 13
        },
        __self: undefined
    }, /*#__PURE__*/ _preact.h("p", {
        __source: {
            fileName: "frontend/pages/disclaimer.page.tsx",
            lineNumber: 29,
            columnNumber: 17
        },
        __self: undefined
    }, /*#__PURE__*/ _preact.h("b", {
        __source: {
            fileName: "frontend/pages/disclaimer.page.tsx",
            lineNumber: 30,
            columnNumber: 21
        },
        __self: undefined
    }, "Flexboard"), " \u662F\u98DE\u534F\u535A2022\u9ED1\u5BA2\u9A6C\u62C9\u677E\u9879\u76EE\u4E4B\u4E00\u3002\u9879\u76EE\u4E2D\u4F7F\u7528\u7684\u989C\u8272\u548C\u7279\u5B9A\u7684\u8BBE\u8BA1\u6A21\u5F0F\u5747\u6765\u81EA\u98DE\u534F\u535A", /*#__PURE__*/ _preact.h("b", {
        __source: {
            fileName: "frontend/pages/disclaimer.page.tsx",
            lineNumber: 30,
            columnNumber: 78
        },
        __self: undefined
    }, "Latitude"), "\u8BBE\u8BA1\u7CFB\u7EDF\u3002 \u5176\u4E2D\u7684\u5185\u5BB9\u548C\u6570\u636E\u4E0E\u98DE\u534F\u535A\u4E1A\u52A1\u8303\u56F4\u65E0\u5173\u3002"), /*#__PURE__*/ _preact.h("p", {
        __source: {
            fileName: "frontend/pages/disclaimer.page.tsx",
            lineNumber: 33,
            columnNumber: 17
        },
        __self: undefined
    }, "\u9879\u76EE\u4E2D\u6570\u636E\u548C\u65B0\u95FB\u5185\u5BB9\u5747\u6765\u81EA\u4E0E\u5176\u4ED6\u5A92\u4F53\u7F51\u7AD9\uFF0C\u672C\u9879\u76EE\u4E2D\u5185\u5BB9\u5747\u4E0D\u4EE3\u8868\u98DE\u534F\u535A\u7ACB\u573A\u3002")));
};

},{"preact":"cwEwC","@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"l3FRf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "BookmarksPage", ()=>BookmarksPage
);
var _preact = require("preact");
var _helpers = require("../helpers");
var _preactRouter = require("preact-router");
const BookmarksPage = (props)=>{
    const { seedsStore , getSeeds  } = _helpers.useSeedsStore();
    const { bookmarkStore  } = _helpers.useBookmarkStore();
    const back = ()=>{
        history.back();
    };
    const goto = (seed)=>{
        _preactRouter.route("/seeds/" + window.btoa(seed.detailurl));
    };
    const bookmarks = bookmarkStore.getBookmarks() || [];
    return /*#__PURE__*/ _preact.h("div", {
        className: "bookmarks",
        __source: {
            fileName: "frontend/pages/bookmarks.page.tsx",
            lineNumber: 21,
            columnNumber: 9
        },
        __self: undefined
    }, /*#__PURE__*/ _preact.h("div", {
        className: "article-actions is-level",
        __source: {
            fileName: "frontend/pages/bookmarks.page.tsx",
            lineNumber: 22,
            columnNumber: 13
        },
        __self: undefined
    }, /*#__PURE__*/ _preact.h("div", {
        className: "is-level-left",
        onClick: back,
        __source: {
            fileName: "frontend/pages/bookmarks.page.tsx",
            lineNumber: 23,
            columnNumber: 17
        },
        __self: undefined
    }, /*#__PURE__*/ _preact.h("ion-icon", {
        name: "chevron-back",
        __source: {
            fileName: "frontend/pages/bookmarks.page.tsx",
            lineNumber: 24,
            columnNumber: 21
        },
        __self: undefined
    }))), /*#__PURE__*/ _preact.h("div", {
        __source: {
            fileName: "frontend/pages/bookmarks.page.tsx",
            lineNumber: 27,
            columnNumber: 13
        },
        __self: undefined
    }, /*#__PURE__*/ _preact.h("div", {
        className: "has-padding-4 has-margin-bottom-2",
        __source: {
            fileName: "frontend/pages/bookmarks.page.tsx",
            lineNumber: 28,
            columnNumber: 17
        },
        __self: undefined
    }, /*#__PURE__*/ _preact.h("span", {
        className: "white is-text-bold is-text-l",
        __source: {
            fileName: "frontend/pages/bookmarks.page.tsx",
            lineNumber: 29,
            columnNumber: 21
        },
        __self: undefined
    }, "Bookmarks")), bookmarks.length === 0 ? /*#__PURE__*/ _preact.h("div", {
        className: "grey40 is-text-m is-text-center",
        __source: {
            fileName: "frontend/pages/bookmarks.page.tsx",
            lineNumber: 33,
            columnNumber: 17
        },
        __self: undefined
    }, "No bookmarks") : bookmarks.map((bookmark)=>seedsStore.getSeedByURL(bookmark)
    ).map((seed, index)=>{
        return /*#__PURE__*/ _preact.h("div", {
            className: "bookmark",
            key: index,
            onClick: ()=>goto(seed)
            ,
            onkeydown: ()=>goto(seed)
            ,
            __source: {
                fileName: "frontend/pages/bookmarks.page.tsx",
                lineNumber: 40,
                columnNumber: 29
            },
            __self: undefined
        }, /*#__PURE__*/ _preact.h("div", {
            className: "bookmark-img",
            style: {
                backgroundImage: `url(${seed.thumbnail})`
            },
            __source: {
                fileName: "frontend/pages/bookmarks.page.tsx",
                lineNumber: 44,
                columnNumber: 33
            },
            __self: undefined
        }, "\xa0"), /*#__PURE__*/ _preact.h("div", {
            className: "bookmark-text",
            __source: {
                fileName: "frontend/pages/bookmarks.page.tsx",
                lineNumber: 47,
                columnNumber: 33
            },
            __self: undefined
        }, /*#__PURE__*/ _preact.h("div", {
            className: "is-text-m is-text-bold",
            __source: {
                fileName: "frontend/pages/bookmarks.page.tsx",
                lineNumber: 48,
                columnNumber: 37
            },
            __self: undefined
        }, seed.title), /*#__PURE__*/ _preact.h("br", {
            __source: {
                fileName: "frontend/pages/bookmarks.page.tsx",
                lineNumber: 51,
                columnNumber: 37
            },
            __self: undefined
        }), /*#__PURE__*/ _preact.h("div", {
            className: "is-text-s grey40",
            __source: {
                fileName: "frontend/pages/bookmarks.page.tsx",
                lineNumber: 52,
                columnNumber: 37
            },
            __self: undefined
        }, seed.url.substring(0, 28), "...")));
    })));
};

},{"preact":"cwEwC","../helpers":"dtOhO","preact-router":"gXK85","@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"8qykB":[function() {},{}]},["hgVRR","fguh0"], "fguh0", "parcelRequire7041")

